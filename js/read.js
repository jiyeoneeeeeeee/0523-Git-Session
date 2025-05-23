// 기본 편지 데이터
const dataFile = [
  {
    postId: 1,
    title: "첫 편지",
    content: "안뇽안뇽",
    date: "2025.04.04",
  },
  {
    postId: 2,
    title: "🧡마음을 보내요🧡",
    content: "내용내용",
    date: "2025.04.07",
  },
  {
    postId: 3,
    title: "반가워~",
    content: "나는 멋쟁이다",
    date: "2025.04.06",
  },
  {
    postId: 4,
    title: "천재가 쓴 편지😎",
    content: "난 왜 이렇게 똑똑할까",
    date: "2025.04.04",
  },
  {
    postId: 5,
    title: "사자들아",
    content: "파이팅",
    date: "2025.04.10",
  },
  {
    postId: 6,
    title: "심바랑 친구할래",
    content: "난 품바니까",
    date: "2025.04.02",
  },
  {
    postId: 7,
    title: "저메추🤔",
    content: "마라탕",
    date: "2025.04.04",
  },
  {
    postId: 8,
    title: "아 배고파",
    content: "붕어빵계란빵국화빵",
    date: "2025.03.24",
  },
  {
    postId: 9,
    title: "슈퍼이끌림💌",
    content: "유유유유",
    date: "2025.04.08",
  },
  {
    postId: 10,
    title: "네잎클로버🍀",
    content: "행운을 보냅니다",
    date: "2025.04.01",
  },
];

function getPostDetails(postId) {
  return dataFile.find((post) => post.postId == postId);
}

function goBack() {
  window.location.href = "main.html";
}

document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get("postId");

  if (postId) {
    const post = getPostDetails(postId);

    if (post) {
      document.getElementById("title").textContent = post.title;
      document.getElementById("date").textContent = post.date;
      document.getElementById("post-content").textContent = post.content;
      console.log("Post ID:", postId);
    } else {
      console.log("Post not found");
    }
  } else {
    console.log("No postId found in URL");
  }

  // ✅ 삭제 버튼 클릭 시 delete.html로 이동
  const deleteBtn = document.getElementById("delete-btn");
  deleteBtn.addEventListener("click", function () {
    window.location.href = "delete.html";
  });
});
