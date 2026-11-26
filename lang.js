// The information pages hold English and Russian on one page. With #ru in the address,
// the links to the other pages carry it along and the labels switch, so a Russian reader
// is not sent back to English. Without JavaScript the links simply stay English.
(function () {
  function apply() {
    var ru = location.hash === "#ru";
    document.documentElement.lang = ru ? "ru" : "en";
    document.querySelectorAll("[data-ru-href]").forEach(function (link) {
      if (!link.dataset.enHref) link.dataset.enHref = link.getAttribute("href");
      link.setAttribute("href", ru ? link.dataset.ruHref : link.dataset.enHref);
    });
    document.querySelectorAll("[data-ru]").forEach(function (node) {
      if (!node.dataset.en) node.dataset.en = node.textContent;
      node.textContent = ru ? node.dataset.ru : node.dataset.en;
    });
  }
  window.addEventListener("hashchange", apply);
  apply();
})();
