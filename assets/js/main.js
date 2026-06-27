/* Devesh Chetan Shah — landing page interactions */
(function () {
  "use strict";

  /* ---- Mobile nav toggle ---- */
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("primaryNav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    // Close menu when a link is tapped
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A" && nav.classList.contains("open")) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
      }
    });
  }

  /* ---- Footer year ---- */
  var yearEl = document.getElementById("year");
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }

  /* ---- Email reveal (assembled from parts; never present in raw HTML) ---- */
  var EMAIL_USER = "shahdevesh223435";
  var EMAIL_HOST = "gmail.com";
  function emailAddr() { return EMAIL_USER + "@" + EMAIL_HOST; }

  function revealEmail() {
    // Fill the inline slot with a clickable address
    var slot = document.getElementById("emailSlot");
    if (slot) {
      slot.innerHTML =
        '<a href="mailto:' + emailAddr() + '">' + emailAddr() + "</a>";
    }
    // Convert the big CTA button into a mailto link
    var bigBtn = document.querySelector("button.btn[data-email-reveal]");
    if (bigBtn) {
      var a = document.createElement("a");
      a.className = "btn btn-primary lg";
      a.href = "mailto:" + emailAddr();
      a.textContent = "Write to Devesh — " + emailAddr();
      bigBtn.replaceWith(a);
    }
  }

  Array.prototype.slice
    .call(document.querySelectorAll("[data-email-reveal]"))
    .forEach(function (el) {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        revealEmail();
      });
    });

  /* ---- Scroll reveal ---- */
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var sections = Array.prototype.slice.call(document.querySelectorAll("main .section"));

  if (!reduceMotion && "IntersectionObserver" in window) {
    sections.forEach(function (s) { s.classList.add("reveal"); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    sections.forEach(function (s) { io.observe(s); });
  }

  /* ---- Active nav link on scroll ---- */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".primary-nav a"));
  var ids = navLinks
    .map(function (a) { return a.getAttribute("href"); })
    .filter(function (h) { return h && h.charAt(0) === "#"; })
    .map(function (h) { return h.slice(1); });

  if (ids.length && "IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          navLinks.forEach(function (a) {
            a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id);
          });
        }
      });
    }, { threshold: 0.4 });
    ids.forEach(function (id) {
      var el = document.getElementById(id);
      if (el) { spy.observe(el); }
    });
  }
})();
