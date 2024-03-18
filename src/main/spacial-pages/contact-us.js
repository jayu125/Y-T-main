import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Toast from "../spacial-pages/showToastNoti";
import "./contact-us.css";

// ContactUs 함수형 컴포넌트를 정의합니다.
export const ContactUs = () => {
  //토스트알림 세팅
  const toastRef = useRef();
  const showToast = () => {
    toastRef.current.showToastMessage("메일이 성공적으로 보내졌습니다!");
  };
  // useRef를 사용하여 form 엘리먼트에 대한 참조를 생성합니다.
  const form = useRef();

  // 폼 제출 시 이메일을 보내는 함수를 정의합니다.
  const sendEmail = (e) => {
    // 기본 폼 제출 동작을 방지합니다.
    e.preventDefault();

    // emailjs 라이브러리를 사용하여 폼 데이터를 지정된 서비스와 템플릿으로 전송합니다.
    emailjs
      .sendForm(
        "service_zs9ds8w", // EmailJS 대시보드에서 얻은 서비스 ID
        "template_9zke6p8", // EmailJS 대시보드에서 얻은 템플릿 ID
        form.current, // 폼 엘리먼트에 대한 참조
        "0nordl-8EL6hlfGsa" // EmailJS 대시보드에서 얻은 사용자 ID
      )
      .then(
        // 이메일 전송이 성공하면 콘솔에 성공 메시지를 기록합니다.
        (result) => {
          console.log(result.text, "전송 완료."); // "전송 완료."는 한국어로 "전송 완료."를 의미합니다.
          showToast("문의가 전송되었습니다!");
          document.contactForm.reset();
          setNextToSendButton1("");
          setNextToSendButton2("");
          setTimeout(() => {
            setNextToSendButton1("이메일로도 문의할 수 있어요!");
            setNextToSendButton2("youngntrend0221@gmail.com");
          }, 3000);
        },
        // 이메일 전송 중에 오류가 발생하면 오류 메시지를 콘솔에 기록합니다.
        (error) => {
          "youngntrend0221@gmail.com";
          console.log(error.text);
        }
      );
  };
  // --------------------------------------------------
  const [focused1, setFocused1] = useState(false);
  const onfocus1 = () => {
    setFocused1(true);
  };
  const onblur1 = () => {
    setFocused1(false);
  };
  //----------------------------------------------------
  const [focused2, setFocused2] = useState(false);
  const onfocus2 = () => {
    setFocused2(true);
  };
  const onblur2 = () => {
    setFocused2(false);
  };
  //-----------------------------------------------------
  const [inputText1, setInputText1] = useState("");
  const onchange1 = (e) => {
    setInputText1(e.target.value);
  };
  // ------------------------------------------------------
  const [inputText2, setInputText2] = useState("");
  const onchange2 = (e) => {
    setInputText2(e.target.value);
  };
  //---------------------------------------------------------
  const [nextToSendButton1, setNextToSendButton1] =
    useState("이메일로도 문의할 수 있어요!");
  const [nextToSendButton2, setNextToSendButton2] = useState(
    "youngntrend0221@gmail.com"
  );
  //----------------------------------------------------------
  const [messageValided, setMessageValided] = useState("");
  const messageOnchange = (e) => {
    setMessageValided(e.target.value);
  };
  // 임시코드 ----------------------------------------------

  const [text, setText] = useState("");

  const handleTextareaChange = (event) => {
    setText(event.target.value);
  };

  // 임시코드 ----------------------------------------------

  // 폼 엘리먼트를 참조하는 useRef를 사용하여 폼을 생성합니다.
  return (
    <>
      <div className="contact-us-main-window">
        <form
          name="contactForm"
          className="contact-form"
          ref={form}
          onSubmit={sendEmail}
          role="article"
        >
          <div className="form-username-and-email">
            <div className="username-div">
              <label
                htmlFor="username-label-id"
                id="username-label"
                className={
                  focused1
                    ? "focused-class"
                    : inputText1
                    ? "focused-class"
                    : "unfocused-class"
                }
              >
                이름
              </label>
              <input
                id="username-label-id"
                type="text"
                name="user_name"
                required
                autoComplete="off"
                onFocus={onfocus1}
                onBlur={onblur1}
                onChange={onchange1}
              />
              <span className="underline-span"></span>
            </div>
            <div className="useremail-div">
              <label
                htmlFor="email-label-id"
                id="email-label"
                className={
                  focused2
                    ? "focused-class"
                    : inputText2
                    ? "focused-class"
                    : "unfocused-class"
                }
              >
                이메일
              </label>
              <input
                type="email"
                id="email-label-id"
                name="user_email"
                required
                autoComplete="off"
                onFocus={onfocus2}
                onBlur={onblur2}
                onChange={onchange2}
              />
              <span className="underline-span"></span>
            </div>
          </div>
          <div className="message-div">
            <div className="message-inner-div">
              <label
                htmlFor="message-label-id"
                className={
                  messageValided ? "message-text-valided" : "message-text"
                }
              >
                문의 내용
              </label>
              <div className="ui-space-up-textarea"></div>
              <textarea
                required
                id="message-label-id"
                name="message"
                className="message-window"
                placeholder="문의 사항을 입력해주세요!"
                onChange={messageOnchange}
              />
              <span className="message-underline-span"></span>
            </div>
          </div>
          <div className="submit-and-noti-div">
            <div className="submit-and-noti">
              <div className="succeed-noti">
                <Toast ref={toastRef} />
              </div>
              <div className="nextToSendButton-div">
                <div className="change-to-email">{nextToSendButton1}</div>
                <div>
                  <span>{nextToSendButton2}</span>
                </div>
              </div>
              <input
                type="submit"
                value="보내기"
                autoComplete="off"
                className="submit-btn"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
