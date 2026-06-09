(() => {
  const { IconPlus, IconCheck } = NKI;
  const { Hero, Promo, Progress, HowItWorks, Friends, Rewards, FriendBanner, Faq } = NKS;
  const HERO_VARIANT = "whatsapp-led";
  const FRIENDS_VARIANT = "rows";
  window.nkTrack = window.nkTrack || function(event, props) {
    (window.dataLayer = window.dataLayer || []).push(Object.assign({ event }, props || {}));
    if (window.console && console.debug) console.debug("[nkTrack]", event, props || {});
  };
  const NAV_TABS = [
    { label: "Main page" },
    { label: "Schedule" },
    { label: "Summer Challenge" },
    { label: "Courses" },
    { label: "Speaking practice" },
    { label: "Get free lessons", active: true, badge: "New" }
  ];
  function NavBar() {
    return /* @__PURE__ */ React.createElement("header", { className: "pg-nav" }, /* @__PURE__ */ React.createElement("div", { className: "pg-nav__in" }, /* @__PURE__ */ React.createElement("a", { className: "pg-nav__logo", href: "#main", "aria-label": "Novakid \u2014 home" }, /* @__PURE__ */ React.createElement("img", { src: "assets/logo-type.svg", alt: "Novakid" })), /* @__PURE__ */ React.createElement("nav", { className: "pg-nav__tabs", "aria-label": "Primary" }, NAV_TABS.map((t) => /* @__PURE__ */ React.createElement(
      "a",
      {
        key: t.label,
        href: "#",
        className: "pg-nav__tab" + (t.active ? " is-active" : ""),
        "aria-current": t.active ? "page" : void 0,
        onClick: (e) => e.preventDefault()
      },
      t.label,
      t.badge ? /* @__PURE__ */ React.createElement("span", { className: "pg-nav__badge" }, t.badge) : null
    ))), /* @__PURE__ */ React.createElement("div", { className: "pg-nav__right" }, /* @__PURE__ */ React.createElement("button", { className: "pg-nav__icon", "aria-label": "Add a child" }, /* @__PURE__ */ React.createElement(IconPlus, { size: 20 })), /* @__PURE__ */ React.createElement("span", { className: "pg-nav__av pg-nav__av--kid", "aria-hidden": "true" }), /* @__PURE__ */ React.createElement("span", { className: "pg-nav__av pg-nav__av--me", "aria-label": "Your account" }, "DK"))));
  }
  function Toasts({ items }) {
    return /* @__PURE__ */ React.createElement("div", { className: "pg-toast-wrap", "aria-live": "polite" }, items.map((t) => /* @__PURE__ */ React.createElement("div", { key: t.id, className: "pg-toast" }, /* @__PURE__ */ React.createElement(IconCheck, { size: 18 }), t.msg)));
  }
  function App() {
    const [toasts, setToasts] = React.useState([]);
    React.useEffect(() => {
      window.nkTrack("referral_page_view");
    }, []);
    const pushToast = React.useCallback((msg) => {
      const id = Date.now() + Math.random();
      setToasts((prev) => [...prev, { id, msg }]);
      setTimeout(() => setToasts((prev) => prev.filter((x) => x.id !== id)), 2400);
    }, []);
    const onCopy = React.useCallback((text, msg, event) => {
      const success = () => {
        pushToast(msg);
        if (event) window.nkTrack(event);
      };
      const legacyCopy = () => {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        let ok = false;
        try {
          ok = document.execCommand("copy");
        } catch (e) {
          ok = false;
        }
        document.body.removeChild(ta);
        return ok;
      };
      const fail = () => pushToast("Press " + (/Mac/.test(navigator.platform) ? "\u2318" : "Ctrl") + "+C to copy");
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(success).catch(() => {
          legacyCopy() ? success() : fail();
        });
      } else {
        legacyCopy() ? success() : fail();
      }
    }, [pushToast]);
    const promo = (NKDATA.promos || []).filter((p) => p.active)[0];
    return /* @__PURE__ */ React.createElement("div", { className: "pg-page" }, /* @__PURE__ */ React.createElement(NavBar, null), /* @__PURE__ */ React.createElement("main", { className: "pg-wrap pg-main", id: "main" }, /* @__PURE__ */ React.createElement(Hero, { data: NKDATA, onCopy, heroVariant: HERO_VARIANT }), promo ? /* @__PURE__ */ React.createElement(Promo, { promo, onLearnMore: () => {
      window.nkTrack("referral_promo_click");
      pushToast("Contest details coming soon");
    } }) : null, /* @__PURE__ */ React.createElement(Progress, { data: NKDATA }), /* @__PURE__ */ React.createElement(HowItWorks, null), /* @__PURE__ */ React.createElement(Friends, { data: NKDATA, variant: FRIENDS_VARIANT }), /* @__PURE__ */ React.createElement(Rewards, { data: NKDATA }), /* @__PURE__ */ React.createElement(FriendBanner, null), /* @__PURE__ */ React.createElement(Faq, { data: NKDATA })), /* @__PURE__ */ React.createElement(Toasts, { items: toasts }));
  }
  ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ React.createElement(App, null));
})();
