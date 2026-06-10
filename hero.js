(() => {
  const { IconWhatsApp, IconTelegram, IconMail, IconCopy, IconLink, IconCheck, IconGift, IconReverse } = NKI;
  function shareLinkFor(S) {
    return typeof window !== "undefined" && window.__SHARE_URL__ || "https://" + S.link;
  }
  function withUtm(base, medium) {
    return base + (base.indexOf("?") >= 0 ? "&" : "?") + "utm_source=referral&utm_medium=" + medium + "&utm_campaign=referral_programme";
  }
  function shareUrls(S) {
    const link = shareLinkFor(S);
    const emailBody = S.emailBody.replace("{url}", withUtm(link, "email"));
    return {
      whatsapp: "https://wa.me/?text=" + encodeURIComponent(S.message + "\n" + withUtm(link, "whatsapp")),
      telegram: "https://t.me/share/url?url=" + encodeURIComponent(withUtm(link, "telegram")) + "&text=" + encodeURIComponent(S.message),
      email: "mailto:?subject=" + encodeURIComponent(S.emailSubject) + "&body=" + encodeURIComponent(emailBody),
      copyText: S.message + "\n" + withUtm(link, "copy"),
      link
    };
  }
  function track(channel) {
    window.nkTrack && window.nkTrack("referral_share_click", { channel });
  }
  const STAR = "M12 2.5l1.7 5.3 5.3 1.7-5.3 1.7L12 16.5l-1.7-5.3L5 9.5l5.3-1.7L12 2.5Z";
  function LinkField({ link, onCopy }) {
    const [done, setDone] = React.useState(false);
    const click = () => {
      onCopy(link, "Invite link copied", "referral_link_copy");
      setDone(true);
      setTimeout(() => setDone(false), 1800);
    };
    return /* @__PURE__ */ React.createElement("div", { className: "pg-linkfield" }, /* @__PURE__ */ React.createElement(IconLink, { size: 18, style: { color: "var(--nk-silver)", flex: "none" } }), /* @__PURE__ */ React.createElement(
      "input",
      {
        readOnly: true,
        id: "pg-invite-link",
        name: "invite-link",
        value: link,
        onFocus: (e) => e.target.select(),
        "aria-label": "Your invite link"
      }
    ), /* @__PURE__ */ React.createElement("button", { className: "pg-linkfield__copy" + (done ? " is-done" : ""), onClick: click }, done ? /* @__PURE__ */ React.createElement(IconCheck, { size: 16 }) : /* @__PURE__ */ React.createElement(IconCopy, { size: 16 }), done ? "Copied" : "Copy"));
  }
  function MessagePreview({ S }) {
    const p = S.preview;
    const url = shareLinkFor(S);
    return /* @__PURE__ */ React.createElement("div", { className: "pg-msg-preview", role: "group", "aria-label": "Preview of what your friend receives" }, /* @__PURE__ */ React.createElement("div", { className: "pg-chat" }, /* @__PURE__ */ React.createElement("div", { className: "pg-bubble" }, /* @__PURE__ */ React.createElement("a", { className: "pg-unfurl", href: url, target: "_blank", rel: "noopener noreferrer" }, /* @__PURE__ */ React.createElement("div", { className: "pg-unfurl__img" }, /* @__PURE__ */ React.createElement("img", { src: p.image, alt: "" })), /* @__PURE__ */ React.createElement("div", { className: "pg-unfurl__meta" }, /* @__PURE__ */ React.createElement("div", { className: "pg-unfurl__title" }, p.title), /* @__PURE__ */ React.createElement("div", { className: "pg-unfurl__desc" }, p.desc), /* @__PURE__ */ React.createElement("div", { className: "pg-unfurl__domain" }, p.domain))), /* @__PURE__ */ React.createElement("p", { className: "pg-bubble__text" }, S.message), /* @__PURE__ */ React.createElement("span", { className: "pg-bubble__link" }, url), /* @__PURE__ */ React.createElement("span", { className: "pg-bubble__time" }, "9:41 ", /* @__PURE__ */ React.createElement(IconCheck, { size: 13 })))));
  }
  function ShareCard({ data, onCopy }) {
    const S = data.share;
    const urls = shareUrls(S);
    const [flipped, setFlipped] = React.useState(false);
    const toggleRef = React.useRef(null);
    const backRef = React.useRef(null);
    const innerRef = React.useRef(null);
    const frontFaceRef = React.useRef(null);
    const backFaceRef = React.useRef(null);
    const first = React.useRef(true);
    React.useEffect(() => {
      if (first.current) {
        first.current = false;
        return;
      }
      const target = flipped ? backRef.current : toggleRef.current;
      if (target) target.focus();
    }, [flipped]);
    const measure = React.useCallback(() => {
      const face = flipped ? backFaceRef.current : frontFaceRef.current;
      if (face && innerRef.current) innerRef.current.style.height = face.offsetHeight + "px";
    }, [flipped]);
    React.useLayoutEffect(measure, [measure]);
    React.useEffect(() => {
      window.addEventListener("resize", measure);
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
      return () => window.removeEventListener("resize", measure);
    }, [measure]);
    const waBtn = /* @__PURE__ */ React.createElement("a", { className: "pg-btn pg-btn--wa pg-btn--block", href: urls.whatsapp, target: "_blank", rel: "noopener noreferrer", onClick: () => track("whatsapp") }, /* @__PURE__ */ React.createElement(IconWhatsApp, { size: 22 }), " Share on WhatsApp");
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "pg-flip" + (flipped ? " is-flipped" : ""),
        onKeyDown: (e) => {
          if (e.key === "Escape" && flipped) setFlipped(false);
        }
      },
      /* @__PURE__ */ React.createElement("div", { className: "pg-flip__inner", ref: innerRef }, /* @__PURE__ */ React.createElement("div", { ref: frontFaceRef, className: "pg-share-card pg-flip__face pg-flip__face--front", "aria-hidden": flipped }, /* @__PURE__ */ React.createElement(
        "button",
        {
          ref: toggleRef,
          className: "pg-flip__ctl",
          "aria-expanded": flipped,
          onClick: () => {
            setFlipped(true);
            window.nkTrack && window.nkTrack("referral_preview_open");
          }
        },
        /* @__PURE__ */ React.createElement(IconReverse, { size: 15 }),
        " See what your friend gets"
      ), waBtn, /* @__PURE__ */ React.createElement("div", { className: "pg-share-row" }, /* @__PURE__ */ React.createElement("a", { className: "pg-share-pill", href: urls.telegram, target: "_blank", rel: "noopener noreferrer", onClick: () => track("telegram") }, /* @__PURE__ */ React.createElement(IconTelegram, { size: 18, style: { color: "#2AABEE" } }), " Telegram"), /* @__PURE__ */ React.createElement("a", { className: "pg-share-pill", href: urls.email, target: "_blank", rel: "noopener noreferrer", onClick: () => track("email") }, /* @__PURE__ */ React.createElement(IconMail, { size: 18, style: { color: "var(--nk-daisy-bush)" } }), " Email")), /* @__PURE__ */ React.createElement("div", { className: "pg-share-divider" }, "or copy your link"), /* @__PURE__ */ React.createElement(LinkField, { link: urls.link, onCopy })), /* @__PURE__ */ React.createElement("div", { ref: backFaceRef, className: "pg-share-card pg-flip__face pg-flip__face--back", "aria-hidden": !flipped }, /* @__PURE__ */ React.createElement("button", { ref: backRef, className: "pg-flip__ctl", onClick: () => setFlipped(false) }, /* @__PURE__ */ React.createElement(IconReverse, { size: 15 }), " Back to sharing"), /* @__PURE__ */ React.createElement(MessagePreview, { S })))
    );
  }
  function HeroDeco() {
    return /* @__PURE__ */ React.createElement("div", { className: "pg-hero__deco", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("svg", { width: "100%", height: "100%", viewBox: "0 0 600 400", preserveAspectRatio: "xMaxYMin slice", fill: "none" }, /* @__PURE__ */ React.createElement("g", { transform: "translate(282 212) rotate(38)", stroke: "#fff", strokeWidth: "2", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M14 0c5 3.4 7.4 9 7.4 15.2 0 3.8-.9 6.8-1.9 8.8H8.5c-1-2-1.9-5-1.9-8.8C6.6 9 9 3.4 14 0Z", fill: "rgba(255,255,255,0.22)" }), /* @__PURE__ */ React.createElement("circle", { cx: "14", cy: "12.5", r: "3.4", fill: "#FFE60A", stroke: "#fff" }), /* @__PURE__ */ React.createElement("path", { d: "M7 21l-4.6 6.4h5.8", fill: "rgba(255,255,255,0.22)" }), /* @__PURE__ */ React.createElement("path", { d: "M21 21l4.6 6.4h-5.8", fill: "rgba(255,255,255,0.22)" }), /* @__PURE__ */ React.createElement("path", { d: "M14 26.5c2 1.9 2 5.1 0 7.5-2-2.4-2-5.6 0-7.5Z", fill: "#C76EF2", stroke: "none" })), /* @__PURE__ */ React.createElement("path", { transform: "translate(294 52) scale(1.0)", d: STAR, fill: "#FFE60A", opacity: "0.9" }), /* @__PURE__ */ React.createElement("path", { transform: "translate(300 140) scale(0.6)", d: STAR, fill: "#fff", opacity: "0.5" }), /* @__PURE__ */ React.createElement("path", { transform: "translate(126 36) scale(0.8)", d: STAR, fill: "#FFE60A", opacity: "0.55" }), /* @__PURE__ */ React.createElement("path", { transform: "translate(44 312) scale(1.1)", d: STAR, fill: "#fff", opacity: "0.35" }), /* @__PURE__ */ React.createElement("path", { transform: "translate(196 296) scale(0.7)", d: STAR, fill: "#FFE60A", opacity: "0.5" }), /* @__PURE__ */ React.createElement("circle", { cx: "84", cy: "98", r: "3", fill: "#fff", opacity: "0.5" }), /* @__PURE__ */ React.createElement("circle", { cx: "250", cy: "22", r: "4", fill: "#C76EF2", opacity: "0.8" }), /* @__PURE__ */ React.createElement("circle", { cx: "306", cy: "330", r: "3", fill: "#fff", opacity: "0.4" })));
  }
  function Hero({ data, onCopy, heroVariant }) {
    return /* @__PURE__ */ React.createElement("section", { className: "pg-hero pg-rise", "data-screen-label": "Hero" }, /* @__PURE__ */ React.createElement(HeroDeco, null), /* @__PURE__ */ React.createElement("div", { className: "pg-hero__l" }, /* @__PURE__ */ React.createElement("span", { className: "pg-hero__eyebrow" }, /* @__PURE__ */ React.createElement(IconGift, { size: 14 }), " Refer & earn"), /* @__PURE__ */ React.createElement("h1", null, "Invite friends, ", /* @__PURE__ */ React.createElement("br", null), "get ", /* @__PURE__ */ React.createElement("span", { className: "hl" }, "free lessons")), /* @__PURE__ */ React.createElement("p", { className: "pg-hero__sub" }, "Share in your family or school group chat. That's where it converts best."), /* @__PURE__ */ React.createElement("div", { className: "pg-hero__rewards" }, /* @__PURE__ */ React.createElement("div", { className: "pg-reward-tile" }, /* @__PURE__ */ React.createElement("span", { className: "pg-reward-tile__who" }, "You get"), /* @__PURE__ */ React.createElement("span", { className: "pg-reward-tile__val" }, "Free lessons"), /* @__PURE__ */ React.createElement("span", { className: "pg-reward-tile__sub" }, "1 per trial \xB7 a free month per subscriber")), /* @__PURE__ */ React.createElement("div", { className: "pg-reward-tile" }, /* @__PURE__ */ React.createElement("span", { className: "pg-reward-tile__who" }, "Your friend gets"), /* @__PURE__ */ React.createElement("span", { className: "pg-reward-tile__val" }, "A welcome discount"), /* @__PURE__ */ React.createElement("span", { className: "pg-reward-tile__sub" }, "on their first trial lesson")))), /* @__PURE__ */ React.createElement("div", { className: "pg-hero__r" }, /* @__PURE__ */ React.createElement(ShareCard, { data, onCopy, variant: heroVariant })));
  }
  function ClosingCta({ data, onCopy }) {
    const urls = shareUrls(data.share);
    return /* @__PURE__ */ React.createElement("section", { className: "pg-closing pg-rise", "data-screen-label": "Closing" }, /* @__PURE__ */ React.createElement("div", { className: "pg-closing__deco", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("svg", { width: "100%", height: "100%", viewBox: "0 0 600 240", preserveAspectRatio: "xMidYMid slice", fill: "none" }, /* @__PURE__ */ React.createElement("path", { transform: "translate(58 86) scale(1.1)", d: STAR, fill: "#FFE60A", opacity: "0.85" }), /* @__PURE__ */ React.createElement("path", { transform: "translate(522 88) scale(0.85)", d: STAR, fill: "#fff", opacity: "0.5" }), /* @__PURE__ */ React.createElement("path", { transform: "translate(474 142) scale(1.2)", d: STAR, fill: "#FFE60A", opacity: "0.6" }), /* @__PURE__ */ React.createElement("path", { transform: "translate(112 144) scale(0.7)", d: STAR, fill: "#fff", opacity: "0.4" }), /* @__PURE__ */ React.createElement("circle", { cx: "560", cy: "128", r: "4", fill: "#C76EF2", opacity: "0.7" }), /* @__PURE__ */ React.createElement("circle", { cx: "36", cy: "120", r: "3", fill: "#C76EF2", opacity: "0.6" }))), /* @__PURE__ */ React.createElement("h2", null, "Know one more parent? ", /* @__PURE__ */ React.createElement("span", { className: "hl" }, "That's one more free lesson.")), /* @__PURE__ */ React.createElement("p", null, "A gift for them, free lessons for you. It takes ten seconds."), /* @__PURE__ */ React.createElement("div", { className: "pg-closing__btns" }, /* @__PURE__ */ React.createElement(
      "a",
      {
        className: "pg-btn pg-btn--wa",
        href: urls.whatsapp,
        target: "_blank",
        rel: "noopener noreferrer",
        onClick: () => track("whatsapp_footer")
      },
      /* @__PURE__ */ React.createElement(IconWhatsApp, { size: 22 }),
      " Share on WhatsApp"
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "pg-btn pg-btn--onbrand",
        onClick: () => onCopy(urls.copyText, "Invite message copied", "referral_footer_copy")
      },
      /* @__PURE__ */ React.createElement(IconCopy, { size: 18 }),
      " Copy invite"
    )));
  }
  function StickyShare({ data }) {
    const urls = shareUrls(data.share);
    const [on, setOn] = React.useState(false);
    React.useEffect(() => {
      const onScroll = () => setOn(window.scrollY > 620);
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
      return () => window.removeEventListener("scroll", onScroll);
    }, []);
    if (!on) return null;
    return /* @__PURE__ */ React.createElement("div", { className: "pg-sticky-share" }, /* @__PURE__ */ React.createElement(
      "a",
      {
        className: "pg-btn pg-btn--wa pg-btn--block",
        href: urls.whatsapp,
        target: "_blank",
        rel: "noopener noreferrer",
        onClick: () => track("whatsapp_sticky")
      },
      /* @__PURE__ */ React.createElement(IconWhatsApp, { size: 22 }),
      " Share on WhatsApp"
    ));
  }
  window.NKS = Object.assign(window.NKS || {}, { Hero, ClosingCta, StickyShare });
})();
