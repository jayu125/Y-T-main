import "./page2.css";
import videoBg from "../../image-sourses/video1.mp4";

const Page2 = () => {
  return (
    <>
      <div className="whole-page">
        <video src={videoBg} autoPlay loop muted></video>
        <div className="content">
          <div className="quote-div">
            <h3 className="first-quote">무엇을 제공하나요?</h3>
            <h1 className="second-quote">최신 트렌드를 반영한</h1>
            <h1 className="third-quote">마케팅 컨설팅서비스를 드립니다</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page2;
