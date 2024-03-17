import { ContactUs } from "../spacial-pages/contact-us";
import "./page3.css";

const Page3 = () => {
  return (
    <>
      <div className="whole-page">
        <div className="page3-div">
          <p className="contact-phrase">여기서 바로 문의하세요</p>
          <ContactUs />
        </div>
      </div>
    </>
  );
};

export default Page3;
