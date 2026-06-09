(() => {
  const { IconWhatsApp, IconTelegram, IconMail, IconCopy, IconLink, IconCheck, IconSparkle, IconGift, IconReverse } = NKI;
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
  function LinkField({ link, onCopy }) {
    const [done, setDone] = React.useState(false);
    const click = () => {
      onCopy(link, "Invite link copied", "referral_link_copy");
      setDone(true);
      setTimeout(() => setDone(false), 1800);
    };
    return /* @__PURE__ */ React.createElement("div", { className: "pg-linkfield" }, /* @__PURE__ */ React.createElement(IconLink, { size: 18, style: { color: "var(--nk-silver)", flex: "none" } }), /* @__PURE__ */ React.createElement("input", { readOnly: true, value: link, onFocus: (e) => e.target.select(), "aria-label": "Your invite link" }), /* @__PURE__ */ React.createElement("button", { className: "pg-linkfield__copy" + (done ? " is-done" : ""), onClick: click }, done ? /* @__PURE__ */ React.createElement(IconCheck, { size: 16 }) : /* @__PURE__ */ React.createElement(IconCopy, { size: 16 }), done ? "Copied" : "Copy"));
  }
  function Tip() {
    return /* @__PURE__ */ React.createElement("p", { className: "pg-tip", style: { marginTop: 16 } }, /* @__PURE__ */ React.createElement(IconSparkle, { size: 16 }), /* @__PURE__ */ React.createElement("span", null, "Share in your family or school group chat \u2014 that's where it converts best."));
  }
  function MessagePreview({ S }) {
    const p = S.preview;
    const url = shareLinkFor(S);
    return /* @__PURE__ */ React.createElement("div", { className: "pg-msg-preview", role: "group", "aria-label": "Preview of what your friend receives" }, /* @__PURE__ */ React.createElement("div", { className: "pg-msg-preview__head" }, /* @__PURE__ */ React.createElement(IconWhatsApp, { size: 15, style: { color: "var(--pg-wa-green)" } }), /* @__PURE__ */ React.createElement("span", null, "What your friend receives")), /* @__PURE__ */ React.createElement("div", { className: "pg-chat" }, /* @__PURE__ */ React.createElement("div", { className: "pg-bubble" }, /* @__PURE__ */ React.createElement("a", { className: "pg-unfurl", href: url, target: "_blank", rel: "noopener noreferrer" }, /* @__PURE__ */ React.createElement("div", { className: "pg-unfurl__img" }, /* @__PURE__ */ React.createElement("img", { src: p.image, alt: "" })), /* @__PURE__ */ React.createElement("div", { className: "pg-unfurl__meta" }, /* @__PURE__ */ React.createElement("div", { className: "pg-unfurl__title" }, p.title), /* @__PURE__ */ React.createElement("div", { className: "pg-unfurl__desc" }, p.desc), /* @__PURE__ */ React.createElement("div", { className: "pg-unfurl__domain" }, p.domain))), /* @__PURE__ */ React.createElement("p", { className: "pg-bubble__text" }, S.message), /* @__PURE__ */ React.createElement("span", { className: "pg-bubble__link" }, url), /* @__PURE__ */ React.createElement("span", { className: "pg-bubble__time" }, "9:41 ", /* @__PURE__ */ React.createElement(IconCheck, { size: 13 })))));
  }
  function ShareCard({ data, onCopy }) {
    const S = data.share;
    const urls = shareUrls(S);
    const [flipped, setFlipped] = React.useState(false);
    const toggleRef = React.useRef(null);
    const backRef = React.useRef(null);
    const first = React.useRef(true);
    React.useEffect(() => {
      if (first.current) {
        first.current = false;
        return;
      }
      const target = flipped ? backRef.current : toggleRef.current;
      if (target) target.focus();
    }, [flipped]);
    const waBtn = /* @__PURE__ */ React.createElement("a", { className: "pg-btn pg-btn--wa pg-btn--block", href: urls.whatsapp, target: "_blank", rel: "noopener noreferrer", onClick: () => track("whatsapp") }, /* @__PURE__ */ React.createElement(IconWhatsApp, { size: 22 }), " Share on WhatsApp");
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "pg-flip" + (flipped ? " is-flipped" : ""),
        onKeyDown: (e) => {
          if (e.key === "Escape" && flipped) setFlipped(false);
        }
      },
      /* @__PURE__ */ React.createElement("div", { className: "pg-flip__inner" }, /* @__PURE__ */ React.createElement("div", { className: "pg-share-card pg-flip__face pg-flip__face--front", "aria-hidden": flipped }, /* @__PURE__ */ React.createElement(
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
      ), waBtn, /* @__PURE__ */ React.createElement("div", { className: "pg-share-row" }, /* @__PURE__ */ React.createElement("a", { className: "pg-share-pill", href: urls.telegram, target: "_blank", rel: "noopener noreferrer", onClick: () => track("telegram") }, /* @__PURE__ */ React.createElement(IconTelegram, { size: 18, style: { color: "#2AABEE" } }), " Telegram"), /* @__PURE__ */ React.createElement("a", { className: "pg-share-pill", href: urls.email, target: "_blank", rel: "noopener noreferrer", onClick: () => track("email") }, /* @__PURE__ */ React.createElement(IconMail, { size: 18, style: { color: "var(--nk-daisy-bush)" } }), " Email")), /* @__PURE__ */ React.createElement("div", { className: "pg-share-divider" }, "or copy your link"), /* @__PURE__ */ React.createElement(LinkField, { link: urls.link, onCopy }), /* @__PURE__ */ React.createElement(Tip, null)), /* @__PURE__ */ React.createElement("div", { className: "pg-share-card pg-flip__face pg-flip__face--back", "aria-hidden": !flipped }, /* @__PURE__ */ React.createElement("button", { ref: backRef, className: "pg-flip__ctl", onClick: () => setFlipped(false) }, /* @__PURE__ */ React.createElement(IconReverse, { size: 15 }), " Reverse"), /* @__PURE__ */ React.createElement(MessagePreview, { S })))
    );
  }
  function Hero({ data, onCopy, heroVariant }) {
    return /* @__PURE__ */ React.createElement("section", { className: "pg-hero pg-rise", "data-screen-label": "Hero" }, /* @__PURE__ */ React.createElement("div", { className: "pg-hero__deco", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("svg", { width: "100%", height: "100%", viewBox: "0 0 600 400", preserveAspectRatio: "xMaxYMin slice", fill: "none" }, /* @__PURE__ */ React.createElement("circle", { cx: "540", cy: "60", r: "120", fill: "#fff", opacity: "0.06" }), /* @__PURE__ */ React.createElement("circle", { cx: "470", cy: "330", r: "80", fill: "#fff", opacity: "0.05" }), /* @__PURE__ */ React.createElement("circle", { cx: "60", cy: "360", r: "60", fill: "#fff", opacity: "0.05" }))), /* @__PURE__ */ React.createElement("div", { className: "pg-hero__l" }, /* @__PURE__ */ React.createElement("span", { className: "pg-hero__eyebrow" }, /* @__PURE__ */ React.createElement(IconGift, { size: 14 }), " Refer & earn"), /* @__PURE__ */ React.createElement("h1", null, "Invite friends, ", /* @__PURE__ */ React.createElement("br", null), "get ", /* @__PURE__ */ React.createElement("span", { className: "hl" }, "free lessons")), /* @__PURE__ */ React.createElement("p", { className: "pg-hero__sub" }, "When a friend you invite completes their trial, you earn free lessons \u2014 and a free month (8 lessons) for every friend who subscribes. No limits.")), /* @__PURE__ */ React.createElement("div", { className: "pg-hero__r" }, /* @__PURE__ */ React.createElement(ShareCard, { data, onCopy, variant: heroVariant })));
  }
  window.NKS = Object.assign(window.NKS || {}, { Hero });
})();
