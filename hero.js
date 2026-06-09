(() => {
  const { IconWhatsApp, IconTelegram, IconMail, IconCopy, IconLink, IconCheck, IconSparkle, IconGift, IconChevronDown } = NKI;
  function shareUrls(S) {
    const url = "https://" + S.link;
    const withLink = S.message + "\n" + url;
    const emailBody = S.emailBody.replace("{url}", url);
    return {
      whatsapp: "https://wa.me/?text=" + encodeURIComponent(withLink),
      telegram: "https://t.me/share/url?url=" + encodeURIComponent(url) + "&text=" + encodeURIComponent(S.message),
      email: "mailto:?subject=" + encodeURIComponent(S.emailSubject) + "&body=" + encodeURIComponent(emailBody),
      // full text the "Copy message" action puts on the clipboard
      copyText: withLink
    };
  }
  function LinkField({ link, onCopy }) {
    const [done, setDone] = React.useState(false);
    const click = () => {
      onCopy(link, "Invite link copied");
      setDone(true);
      setTimeout(() => setDone(false), 1800);
    };
    return /* @__PURE__ */ React.createElement("div", { className: "pg-linkfield" }, /* @__PURE__ */ React.createElement(IconLink, { size: 18, style: { color: "var(--nk-silver)", flex: "none" } }), /* @__PURE__ */ React.createElement("input", { readOnly: true, value: link, onFocus: (e) => e.target.select(), "aria-label": "Your invite link" }), /* @__PURE__ */ React.createElement("button", { className: "pg-linkfield__copy" + (done ? " is-done" : ""), onClick: click }, done ? /* @__PURE__ */ React.createElement(IconCheck, { size: 16 }) : /* @__PURE__ */ React.createElement(IconCopy, { size: 16 }), done ? "Copied" : "Copy"));
  }
  function ShareRow({ urls, message, onCopy, compact }) {
    return /* @__PURE__ */ React.createElement("div", { className: "pg-share-row" }, /* @__PURE__ */ React.createElement("a", { className: "pg-share-pill", href: urls.telegram, target: "_blank", rel: "noopener noreferrer" }, /* @__PURE__ */ React.createElement(IconTelegram, { size: 18, style: { color: "#2AABEE" } }), " ", compact ? "" : "Telegram"), /* @__PURE__ */ React.createElement("a", { className: "pg-share-pill", href: urls.email, target: "_blank", rel: "noopener noreferrer" }, /* @__PURE__ */ React.createElement(IconMail, { size: 18, style: { color: "var(--nk-daisy-bush)" } }), " ", compact ? "" : "Email"), /* @__PURE__ */ React.createElement("button", { className: "pg-share-pill", onClick: () => onCopy(message, "Message copied \u2014 paste it anywhere") }, /* @__PURE__ */ React.createElement(IconCopy, { size: 18, style: { color: "var(--nk-daisy-bush)" } }), " ", compact ? "" : "Copy message"));
  }
  function Tip() {
    return /* @__PURE__ */ React.createElement("p", { className: "pg-tip", style: { marginTop: 16 } }, /* @__PURE__ */ React.createElement(IconSparkle, { size: 16 }), /* @__PURE__ */ React.createElement("span", null, "Share in your family or school group chat \u2014 that's where it converts best."));
  }
  function MessagePreview({ S }) {
    const p = S.preview;
    return /* @__PURE__ */ React.createElement("div", { className: "pg-msg-preview", role: "group", "aria-label": "Preview of what your friend receives" }, /* @__PURE__ */ React.createElement("div", { className: "pg-msg-preview__head" }, /* @__PURE__ */ React.createElement(IconWhatsApp, { size: 15, style: { color: "var(--pg-wa-green)" } }), /* @__PURE__ */ React.createElement("span", null, "What your friend receives")), /* @__PURE__ */ React.createElement("div", { className: "pg-chat" }, /* @__PURE__ */ React.createElement("div", { className: "pg-bubble" }, /* @__PURE__ */ React.createElement("a", { className: "pg-unfurl", href: "https://" + S.link, target: "_blank", rel: "noopener noreferrer" }, /* @__PURE__ */ React.createElement("div", { className: "pg-unfurl__img" }, /* @__PURE__ */ React.createElement("img", { src: p.image, alt: "" })), /* @__PURE__ */ React.createElement("div", { className: "pg-unfurl__meta" }, /* @__PURE__ */ React.createElement("div", { className: "pg-unfurl__title" }, p.title), /* @__PURE__ */ React.createElement("div", { className: "pg-unfurl__desc" }, p.desc), /* @__PURE__ */ React.createElement("div", { className: "pg-unfurl__domain" }, p.domain))), /* @__PURE__ */ React.createElement("p", { className: "pg-bubble__text" }, S.message), /* @__PURE__ */ React.createElement("span", { className: "pg-bubble__link" }, "https://" + S.link), /* @__PURE__ */ React.createElement("span", { className: "pg-bubble__time" }, "9:41 ", /* @__PURE__ */ React.createElement(IconCheck, { size: 13 })))));
  }
  function ShareCard({ data, onCopy, variant }) {
    const S = data.share;
    const urls = shareUrls(S);
    const [showPreview, setShowPreview] = React.useState(false);
    const waBtn = /* @__PURE__ */ React.createElement("a", { className: "pg-btn pg-btn--wa pg-btn--block", href: urls.whatsapp, target: "_blank", rel: "noopener noreferrer" }, /* @__PURE__ */ React.createElement(IconWhatsApp, { size: 22 }), " Share on WhatsApp");
    const previewBlock = /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "pg-preview-toggle" + (showPreview ? " is-open" : ""),
        onClick: () => setShowPreview((v) => !v),
        "aria-expanded": showPreview
      },
      /* @__PURE__ */ React.createElement(IconChevronDown, { size: 16 }),
      showPreview ? "Hide preview" : "See what your friend gets"
    ), showPreview && /* @__PURE__ */ React.createElement(MessagePreview, { S }));
    if (variant === "whatsapp-led") {
      return /* @__PURE__ */ React.createElement("div", { className: "pg-share-card" }, /* @__PURE__ */ React.createElement("div", { className: "pg-share-card__label" }, /* @__PURE__ */ React.createElement("span", null, "Send your invite"), /* @__PURE__ */ React.createElement("span", { className: "free" }, "It's free")), waBtn, /* @__PURE__ */ React.createElement("div", { className: "pg-share-divider" }, "or copy your link"), /* @__PURE__ */ React.createElement(LinkField, { link: S.link, onCopy }), /* @__PURE__ */ React.createElement("div", { style: { height: 14 } }), /* @__PURE__ */ React.createElement(ShareRow, { urls, message: urls.copyText, onCopy }), /* @__PURE__ */ React.createElement(Tip, null), previewBlock);
    }
    if (variant === "compact") {
      return /* @__PURE__ */ React.createElement("div", { className: "pg-share-card" }, /* @__PURE__ */ React.createElement("div", { className: "pg-share-card__label" }, /* @__PURE__ */ React.createElement("span", null, "Your invite link"), /* @__PURE__ */ React.createElement("span", { className: "free" }, "It's free")), /* @__PURE__ */ React.createElement(LinkField, { link: S.link, onCopy }), /* @__PURE__ */ React.createElement("div", { style: { height: 14 } }), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 10, alignItems: "stretch" } }, /* @__PURE__ */ React.createElement("a", { className: "pg-btn pg-btn--wa", style: { flex: 1 }, href: urls.whatsapp, target: "_blank", rel: "noopener noreferrer" }, /* @__PURE__ */ React.createElement(IconWhatsApp, { size: 22 }), " WhatsApp"), /* @__PURE__ */ React.createElement("a", { className: "pg-share-pill", style: { flex: "none", width: 52 }, href: urls.telegram, target: "_blank", rel: "noopener noreferrer", "aria-label": "Telegram" }, /* @__PURE__ */ React.createElement(IconTelegram, { size: 20, style: { color: "#2AABEE" } })), /* @__PURE__ */ React.createElement("a", { className: "pg-share-pill", style: { flex: "none", width: 52 }, href: urls.email, target: "_blank", rel: "noopener noreferrer", "aria-label": "Email" }, /* @__PURE__ */ React.createElement(IconMail, { size: 20, style: { color: "var(--nk-daisy-bush)" } }))), /* @__PURE__ */ React.createElement(Tip, null), previewBlock);
    }
    return /* @__PURE__ */ React.createElement("div", { className: "pg-share-card" }, /* @__PURE__ */ React.createElement("div", { className: "pg-share-card__label" }, /* @__PURE__ */ React.createElement("span", null, "Your invite link"), /* @__PURE__ */ React.createElement("span", { className: "free" }, "It's free")), /* @__PURE__ */ React.createElement(LinkField, { link: S.link, onCopy }), /* @__PURE__ */ React.createElement("div", { style: { height: 16 } }), waBtn, /* @__PURE__ */ React.createElement("div", { className: "pg-share-divider" }, "or share via"), /* @__PURE__ */ React.createElement(ShareRow, { urls, message: urls.copyText, onCopy }), /* @__PURE__ */ React.createElement(Tip, null), previewBlock);
  }
  function Hero({ data, onCopy, heroVariant }) {
    return /* @__PURE__ */ React.createElement("section", { className: "pg-hero pg-rise", "data-screen-label": "Hero" }, /* @__PURE__ */ React.createElement("div", { className: "pg-hero__deco", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("svg", { width: "100%", height: "100%", viewBox: "0 0 600 400", preserveAspectRatio: "xMaxYMin slice", fill: "none" }, /* @__PURE__ */ React.createElement("circle", { cx: "540", cy: "60", r: "120", fill: "#fff", opacity: "0.06" }), /* @__PURE__ */ React.createElement("circle", { cx: "470", cy: "330", r: "80", fill: "#fff", opacity: "0.05" }), /* @__PURE__ */ React.createElement("circle", { cx: "60", cy: "360", r: "60", fill: "#fff", opacity: "0.05" }))), /* @__PURE__ */ React.createElement("div", { className: "pg-hero__l" }, /* @__PURE__ */ React.createElement("span", { className: "pg-hero__eyebrow" }, /* @__PURE__ */ React.createElement(IconGift, { size: 14 }), " Refer & earn"), /* @__PURE__ */ React.createElement("h1", null, "Invite friends, ", /* @__PURE__ */ React.createElement("br", null), "get ", /* @__PURE__ */ React.createElement("span", { className: "hl" }, "free lessons")), /* @__PURE__ */ React.createElement("p", { className: "pg-hero__sub" }, "When a friend you invite starts learning, you earn free lessons \u2014 and a free month (8 lessons) for every friend who subscribes. No limits.")), /* @__PURE__ */ React.createElement("div", { className: "pg-hero__r" }, /* @__PURE__ */ React.createElement(ShareCard, { data, onCopy, variant: heroVariant })));
  }
  window.NKS = Object.assign(window.NKS || {}, { Hero });
})();
