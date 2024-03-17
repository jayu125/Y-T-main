import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import "./showToastNoti.css";
// import './Toast.css';

const Toast = forwardRef(({ message }, ref) => {
  useImperativeHandle(ref, () => ({
    showToastMessage: (message) => showToastMessage(message),
  }));

  const showToastMessage = (message) => {
    setToastMessage(message);
    setShowToast(true);
  };

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        hideToast();
      }, 3000); // 3초 후에 토스트 알림을 숨김

      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const hideToast = () => {
    setToastMessage("");
    setShowToast(false);
  };

  return <div>{showToast && <div className="toast">{toastMessage}</div>}</div>;
});

export default Toast;
