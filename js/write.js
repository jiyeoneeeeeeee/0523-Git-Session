function goBack() {
  window.location.href = "main.html";
}

function getToday() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const date = String(today.getDate()).padStart(2, "0");
  return `${year}.${month}.${date}`;
}

function handleWrite() {
  const title = document.getElementById("titleInput").value;
  const content = document.getElementById("contentInput").value;
  const today = getToday();

  if (!title || !content) {
    alert("제목과 내용을 모두 입력해 주세요.");
    return;
  }

  const newPost = {
    postId: Date.now(), // 고유 ID로 timestamp 사용
    title,
    content,
    date: today,
  };

  const existingData = JSON.parse(localStorage.getItem("dataFile")) || [];
  existingData.push(newPost);
  localStorage.setItem("dataFile", JSON.stringify(existingData));

  alert("편지가 저장되었습니다!");
  window.location.href = "main.html";
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("dateDisplay").textContent = getToday();
});
