
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Home.css";
import Rightbar from "../../components/rightbar/Rightbar";
import TimeLIne from "../../components/timeline/TimeLine";

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <TimeLIne />
        <Rightbar />
      </div>
    </>
  );
}
