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

// 작성 페이지 이동
function goWrite() {
  window.location.href = "write.html";
}

// 편지들 화면에 출력
function displayLetters() {
  const wrapper = document.getElementById("wrapper");

  // localStorage에 저장된 편지 불러오기
  const savedData = JSON.parse(localStorage.getItem("dataFile")) || [];

  // 기존 dataFile + 저장된 편지를 합치기
  const allData = dataFile.concat(savedData);

  allData.forEach((letter) => {
    const letterElement = document.createElement("div");
    letterElement.classList.add("letter");
    letterElement.textContent = letter.title;

    letterElement.onclick = function () {
      window.location.href = `read.html?postId=${letter.postId}`;
    };

    wrapper.appendChild(letterElement);
  });
}

document.addEventListener("DOMContentLoaded", displayLetters);
