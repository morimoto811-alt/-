(function () {
  var page = document.body.getAttribute("data-form");
  var urls = window.LP_FORM_URL || {};
  var url = page && urls[page] ? String(urls[page]).trim() : "";
  if (!/^https?:\/\//i.test(url)) {
    return;
  }
  var links = document.querySelectorAll("[data-form-link]");
  for (var i = 0; i < links.length; i++) {
    links[i].href = url;
    links[i].target = "_blank";
    links[i].rel = "noopener noreferrer";
    links[i].hidden = false;
  }
  document.body.classList.add("has-form");
})();
