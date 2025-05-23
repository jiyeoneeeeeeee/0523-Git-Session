document.addEventListener("DOMContentLoaded", function () {
  // "홈으로" 버튼 클릭 시 main.html로 이동
  document.getElementById("home").addEventListener("click", function () {
    window.location.href = "main.html";
  });

  // "네" 버튼 클릭 시 main.html로 이동
  document.getElementById("yes").addEventListener("click", function () {
    window.location.href = "main.html";
  });
});
