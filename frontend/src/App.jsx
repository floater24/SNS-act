import Profile from "./pages/profile/Profile";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./state/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        {/* ユーザーがログインしていない場合はRegisterページ */}
        <Route path="/" element={<Register />} />
        
        {/* ユーザーがログインしている場合はHomeにリダイレクト */}
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <Login />}
        />

        {/* プロフィールページへのルート */}
        <Route path="/profile/:username" element={<Profile />} />

        {/* ログインしていない場合、他のページへのアクセスを制限 */}
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;

