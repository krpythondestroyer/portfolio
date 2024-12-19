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

