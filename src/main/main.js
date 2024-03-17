import React, { useRef, useEffect } from "react";
import "./main.css";
import Page1 from "./main-pages/page1";
import Page2 from "./main-pages/page2";
import Page3 from "./main-pages/page3";
import Page4 from "./main-pages/page4";
import Page5 from "./main-pages/page5";
// import Page6 from "./main-pages/page6";

const Main = () => {
  //--------------------------------------------------
  const updateCurrentPage = (page) => {
    currentPageRef.current = page;
    const targetSection = sectionsRef.current[page];
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: "smooth",
    });
  };
  //--------------------------------------------------

  // 섹션들의 ref를 저장하는 배열
  const sectionsRef = useRef([]);
  // 현재 페이지를 나타내는 ref
  const currentPageRef = useRef(0);
  // 스크롤 타임아웃을 관리하는 ref
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault(); // 기본 스크롤 동작 방지

      // 스크롤 타임아웃이 있으면 스크롤 이벤트를 처리하지 않음
      if (scrollTimeoutRef.current) {
        return;
      }

      // 1초의 딜레이를 가진 타임아웃 설정으로 즉시 발생하는 연속 스크롤을 방지
      scrollTimeoutRef.current = setTimeout(() => {
        scrollTimeoutRef.current = null; // 타임아웃 참조 초기화
      }, 550);

      // 스크롤 방향을 확인하고 현재 페이지를 업데이트
      if (
        e.deltaY > 0 &&
        currentPageRef.current < sectionsRef.current.length - 1
      ) {
        currentPageRef.current += 1; // 얘가 현제 페이지
      } else if (e.deltaY < 0 && currentPageRef.current > 0) {
        currentPageRef.current -= 1;
      }

      // 대상 섹션의 상단 위치로 스크롤
      const targetSection = sectionsRef.current[currentPageRef.current];
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth",
        });
      }
    };

    // 휠 이벤트에 대한 리스너 추가
    window.addEventListener("wheel", handleScroll, { passive: false });

    // 정리: 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  const toTopOfPage = () => {
    updateCurrentPage(0);
  };

  return (
    <div className="top-div">
      <div className="to-top-of-page-btn" onClick={toTopOfPage}>
        <img
          className="arrow-to-top"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAYAAAAcaxDBAAAAAXNSR0IArs4c6QAAAyVJREFUeF7tm2tOxDAMhLM3g5MBJwNOBkTaFauq7YyTceLsuhK/cB3760xe0l5KPlICF2m2TFYSqFgECTSBigmI06VCE6iYgDhdKjSBigmI06VCE6iYgDhdKjSBigmI06VCnxDoWynl5fr3Xkr5EDOQpouu0M8ryG3TYesOW1gppSqzKnLv+SqlvEqlJUoWFWi1eFXn2ROy9pBF/anzhxRMuPrDFXRVZlUo84SzfjSgjNW3oOtcWsGGeCIBbYF5gximjzCFGK2+p8YQvYQo4rrXRKs6snSITX8EoIzVb3tOBH16P9MLIKx+v5Iz26mpPU0dHJyGjhYcBHWq9WcCZa2+3RIx703ra9rARqtvF6SjS5P7uCm9TRmUsDpzAkLWZ3KgnYP5/zOAMpZlTz8I6vD+hg9IXHxYFpWzK74pp6jRQNHc12JTpNKWnGarz/h6SqtvG0ZQ2SmkGeRooAxMi9W3jYex/ijLe1jdqtIa796v+wDkxYfKksj6PS6gpgNvoIzVVTBrw8x4rj27Ju88DVGK2AlCKnW1vifQmQsFgupmfS+gjPWUVt8KlRnfpXeXpJOsHuICxQMosvrIkwuyvrwWNVDGap5W31vIEFQpA2ky8cVH6yo/9RSlBDriNNQKGalUZn0V0IhWtx5NJVORAigD023fZ5AsWiwlG34F0MhWt6q0G2ovUEadEisZlIhC0Xza5aYeoCvCdL9A6QG6ktWHWb8V6JAJHnm38/8u1m8BuqrVh1ygtABd2eruFyhWoMjqshNHp50tryPrm3qyAH0Uq7teoFiAoi/ZtX+zSMohFjmP3vCzQB9p3jz6HkgwlPUZoIzV62BhftrSoeCjn0LeUsJTHwLKwOyof8lXT5khoMjqSxLpLPrU+ggomlc6a1v29UNuCbTtmzYDZbYTbSWt+1aX5Wvbafv/jw+3Tsjy9zqqan3m55vZGlqAPjNMuvcESqPiAhMox4mOSqA0Ki4wgXKc6KgESqPiAhMox4mOSqA0Ki4wgXKc6KgESqPiAhMox4mOSqA0Ki4wgXKc6KgESqPiAhMox4mOSqA0Ki4wgXKc6KhfvSeQVZIuYMEAAAAASUVORK5CYII="
          alt="위로"
        />
      </div>
      <div className="main">
        {/* 각 섹션에 ref 추가 */}
        <section
          ref={(el) => (sectionsRef.current[0] = el)}
          className="section se1-bg"
        >
          <div className="empty-space"></div>
          <Page1 updateCurrentPage={updateCurrentPage} />
        </section>
        <section
          ref={(el) => (sectionsRef.current[1] = el)}
          className="section se2-bg"
        >
          <div className="empty-space"></div>
          <Page2 updateCurrentPage={updateCurrentPage} />
        </section>
        {/* ---------------------- */}

        {/*  ----------------------------*/}
        <section
          ref={(el) => (sectionsRef.current[2] = el)}
          className="section se3-bg"
        >
          <div className="empty-space"></div>
          <Page3 updateCurrentPage={updateCurrentPage} />
        </section>
        {/* <section
          ref={(el) => (sectionsRef.current[3] = el)}
          className="section se4-bg"
        >
          <div className="empty-space"></div>
          <Page4 updateCurrentPage={updateCurrentPage} />
        </section>
        <section
          ref={(el) => (sectionsRef.current[4] = el)}
          className="section se5-bg"
        >
          <div className="empty-space"></div>
          <Page5 updateCurrentPage={updateCurrentPage} />
        </section> */}
        {/* <section
          ref={(el) => (sectionsRef.current[5] = el)}
          className="section se6-bg"
        >
          <div className="empty-space"></div>
          <Page6 updateCurrentPage={updateCurrentPage} />
        </section> */}
      </div>
    </div>
  );
};

export default Main;
