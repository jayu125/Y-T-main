import { Link } from "react-router-dom";
import "./page1.css";
const Page1 = ({ updateCurrentPage }) => {
  const handleButtonClick = () => {
    // updateCurrentPage 함수를 호출하여 원하는 페이지 번호로 업데이트
    updateCurrentPage(2);
  };
  return (
    <div className="whole-page">
      <div
        className="background-image-div"
        alt="선생님 네트워크에 문제가 있으신 것 같습니다."
      >
        <div className="image-contents">
          <h1 className="image-first-text">영앤트랜드 마케팅</h1>
          <h3 className="image-second-text">영앤트랜드 마케팅</h3>
          <Link
            to="/"
            className="image-btn-link"
            style={{ textDecoration: "none" }}
          >
            <button className="ask-btn" onClick={handleButtonClick}>
              문의하기
            </button>
          </Link>
        </div>
      </div>
      <div className="page1-under">
        <div className="page1-under-h">
          <h1 className="page1-under-h-text">제목1</h1>
        </div>
        <div className="page1-under-text-for-flex">
          <div className="page1-under-texts">
            <h3 className="page1-under-text-1">첫번째</h3>
            <h3 className="page1-under-text-2">두번째</h3>
            <h3 className="page1-under-text-3">세번째</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
