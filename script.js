// script.js
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("darkModeToggle");
  const body = document.body;

  if (!toggleBtn) {
    console.warn("darkModeToggle not found in the DOM.");
    return;
  }

  const ICON_MOON = '<i class="bi bi-moon"></i>';
  const ICON_SUN  = '<i class="bi bi-sun"></i>';

  // 1) وضع مبدئي: من localStorage أو من prefered color scheme
  const saved = localStorage.getItem("theme");
  if (saved === "dark" || (!saved && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    body.classList.add("dark");
    toggleBtn.innerHTML = ICON_SUN;
  } else {
    body.classList.remove("dark");
    toggleBtn.innerHTML = ICON_MOON;
  }

  // 2) حدث الضغط على الزر
  toggleBtn.addEventListener("click", () => {
    const isDark = body.classList.toggle("dark"); // يبدّل كلاس 'dark' على الـ body
    toggleBtn.innerHTML = isDark ? ICON_SUN : ICON_MOON;
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
});
