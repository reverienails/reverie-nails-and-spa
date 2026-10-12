// Sends book, call, and directions clicks to Google Analytics.
// Loaded with defer. Listens on the document so links added later still count.
(function () {
  function eventName(href) {
    if (!href) return "";
    var h = href.toLowerCase();
    if (h.indexOf("book.reverienailstx.com") !== -1) return "book_click";
    if (h.indexOf("tel:") === 0) return "call_click";
    if (h.indexOf("google.com/maps") !== -1 || h.indexOf("maps.google.") !== -1 || h.indexOf("maps.app.goo.gl") !== -1) return "directions_click";
    return "";
  }

  function linkLocation(el) {
    if (el.closest("nav, #mobile-menu")) return "header";
    if (el.closest("footer")) return "footer";
    var section = el.closest("section");
    if (section && section.querySelector("a[aria-label='Instagram']")) return "footer";
    if (el.closest("#full-menu")) return "menu";
    if (section && section.id) return section.id;
    if (section && section === document.querySelector("section")) return "hero";
    return "page";
  }

  document.addEventListener("click", function (e) {
    var a = e.target && e.target.closest ? e.target.closest("a") : null;
    if (!a || typeof gtag !== "function") return;
    var name = eventName(a.getAttribute("href") || "");
    if (!name) return;
    gtag("event", name, {
      link_location: linkLocation(a),
      transport_type: "beacon"
    });
  });
})();
