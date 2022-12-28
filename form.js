/**
 * 新旧パスワードチェック
 * @returns {bool}
 */
function checkPassword() {
  const password = document.getElementById("new_password").value;
  const checkPassword = document.getElementById("check_password").value;
  const alertElem = document.getElementById("alert");
  if (password === checkPassword) {
    return true;
  } else {
    alertElem.textContent = "パスワードが異なります。";
    return false;
  }
}
