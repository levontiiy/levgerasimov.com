(function () {
  var heroBg = document.getElementById("hero-bg");
  var heroOverlay = document.getElementById("hero-overlay");
  var nav = document.getElementById("nav");
  var themeButton = document.getElementById("theme-button");
  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var ticking = false;

  function setTheme(theme) {
    var nextTheme = theme === "light" ? "light" : "dark";
    var isDark = nextTheme === "dark";

    document.documentElement.setAttribute("data-theme", nextTheme);

    if (themeButton) {
      themeButton.setAttribute("aria-pressed", String(isDark));
      themeButton.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
      themeButton.setAttribute("title", isDark ? "Switch to light theme" : "Switch to dark theme");
    }

    try {
      localStorage.setItem("preferred-theme", nextTheme);
    } catch (error) {
      // localStorage can be unavailable in restricted browsing contexts.
    }
  }

  if (themeButton) {
    themeButton.addEventListener("click", function () {
      var currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
      setTheme(currentTheme === "dark" ? "light" : "dark");
    });
  }

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      var scrollY = window.scrollY;
      var heroHeight = window.innerHeight;
      var progress = Math.min(scrollY / heroHeight, 1);

      if (nav) {
        nav.classList.toggle("scrolled", scrollY > 60);
      }

      if (!prefersReducedMotion && heroBg && heroOverlay) {
        var translateY = scrollY * 0.4;
        var opacity = 1 - progress * 0.85;
        var overlayOpacity = 0.45 + progress * 0.55;

        heroBg.style.transform = "translateY(" + translateY + "px) scale(" + (1 + progress * 0.05) + ")";
        heroBg.style.opacity = opacity;
        heroOverlay.style.opacity = overlayOpacity;
      }

      ticking = false;
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });

  try {
    setTheme(localStorage.getItem("preferred-theme") || "dark");
  } catch (error) {
    setTheme("dark");
  }

  onScroll();
})();
