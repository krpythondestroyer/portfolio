document.addEventListener("DOMContentLoaded", function() {
    // 요소 선택
    const link = document.getElementById("feedbackLink");
    const popup = document.getElementById("popup");
    const overlay = document.getElementById("overlay");
    const confirmYes1 = document.getElementById("confirmYes1");
    const confirmYes2 = document.getElementById("confirmYes2");
    const confirmYes3 = document.getElementById("confirmYes3");
    const confirmNo = document.getElementById("confirmNo");

    const targetUrl1 = "https://docs.google.com/forms/d/e/1FAIpQLSdoTWd8JKbFUzhIDFV3awxU0VNc8jvNuRLrIIzcQADtPoVmdA/viewform?usp=header";
    const targetUrl2 = "https://brunch.co.kr/magazine/uxlabel";
    const targetUrl3 = "https://docs.google.com/forms/d/e/1FAIpQLSc2GcE_3kBHR5beVBwI2P0mEq3LfkRURghw6-w7ttjuY-oBEA/viewform?usp=sf_link";

    // 확인: confirmYes2가 null이 아닌지 콘솔에서 확인
    console.log(confirmYes2);

    // 링크 클릭 시 팝업 열기
    link.addEventListener("click", (e) => {
        e.preventDefault(); // 기본 링크 동작 막기
        popup.style.display = "block";
        overlay.style.display = "block";
    });

    // "예" 버튼 클릭 시 링크 이동
    if (confirmYes1) {
        confirmYes1.addEventListener("click", () => {
            window.location.href = targetUrl1;
        });
    } else {
        console.error("confirmYes1 버튼을 찾을 수 없습니다.");
    }

    if (confirmYes2) {
        confirmYes2.addEventListener("click", () => {
            window.location.href = targetUrl2;
        });
    } else {
        console.error("confirmYes2 버튼을 찾을 수 없습니다.");
    }

    if (confirmYes3) {
        confirmYes3.addEventListener("click", () => {
            window.location.href = targetUrl3;
        });
    } else {
        console.error("confirmYes3 버튼을 찾을 수 없습니다.");
    }

    // "아니오" 버튼 클릭 시 팝업 닫기
    confirmNo.addEventListener("click", () => {
        popup.style.display = "none";
        overlay.style.display = "none";
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".toggle-button");
    const noteContent = document.querySelector(".note-content");
    const noteWidget = document.querySelector(".note-widget");
  
    // 토글 버튼 클릭 이벤트
    toggleButton.addEventListener("click", () => {
      const isVisible = noteContent.style.display === "block";
      if (isVisible) {
        noteContent.style.display = "none";
      } else {
        // 새로운 내용을 표시
        const newContent = "웹 페이지 사용 설명서.\n줄바꿈 입니다.";
        noteContent.querySelector("p").textContent = newContent;
        noteContent.style.display = "block";
      }
    });
  
    // 드래그 앤 드롭 구현
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;
  
    noteWidget.addEventListener("mousedown", (e) => {
      isDragging = true;
      offsetX = e.clientX - noteWidget.offsetLeft;
      offsetY = e.clientY - noteWidget.offsetTop;
      noteWidget.style.cursor = "grabbing";
    });
  
    document.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      noteWidget.style.left = `${e.clientX - offsetX}px`;
      noteWidget.style.top = `${e.clientY - offsetY}px`;
    });
  
    document.addEventListener("mouseup", () => {
      isDragging = false;
      noteWidget.style.cursor = "grab";
    });
  });
  
  