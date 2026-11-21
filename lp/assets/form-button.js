(function () {
  var page = document.body.getAttribute("data-form");
  var urls = window.LP_FORM_URL || {};
  var url = page && urls[page] ? String(urls[page]).trim() : "";
  if (/^https?:\/\//i.test(url)) {
    var links = document.querySelectorAll("[data-form-link]");
    for (var i = 0; i < links.length; i++) {
      links[i].href = url;
      links[i].target = "_blank";
      links[i].rel = "noopener noreferrer";
      links[i].hidden = false;
    }
    document.body.classList.add("has-form");
  }

  var heroCta = document.querySelector(".hero .cta-actions");
  var bar = document.querySelector(".sticky-call");
  if (!bar) {
    return;
  }
  function showBar(show) {
    bar.classList.toggle("is-visible", show);
    bar.setAttribute("aria-hidden", show ? "false" : "true");
    document.body.classList.toggle("sticky-on", show);
  }
  if (!heroCta || !("IntersectionObserver" in window)) {
    showBar(true);
    return;
  }
  showBar(false);
  var observer = new IntersectionObserver(function (entries) {
    showBar(!entries[0].isIntersecting);
  }, { threshold: 0 });
  observer.observe(heroCta);
})();
