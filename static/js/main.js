
function validateForm() {
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  if (!email || !message) {
    alert("이메일과 메시지를 모두 입력해주세요.");
    return false;
  }
  alert("메시지가 전송되었습니다!");
  return true;
}
