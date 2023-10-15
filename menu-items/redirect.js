function redirect() {
  window.location.href = "https://github.com/feeshmaster/feeshmaster.github.io/issues";
}
function redirect_animation(__) {
  document.getElementById("redirect-text").innerHTML = "Redirecting" + __;
};
setTimeout(redirect_animation, 1000, "..");
setTimeout(redirect_animation, 2000, "...");
setTimeout(redirect_animation, 3000, ".");
setTimeout(redirect_animation, 4000, "..");
setTimeout(redirect, 4500);