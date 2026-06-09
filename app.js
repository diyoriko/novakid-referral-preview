(() => {
  const { IconWallet, IconCheck } = NKI;
  const { Hero, Progress, HowItWorks, Friends, Rewards, FriendBanner, Promo, Faq } = NKS;
  const HERO_VARIANT = "stacked";
  const FRIENDS_VARIANT = "rows";
  function TopBar() {
    return /* @__PURE__ */ React.createElement("header", { className: "pg-topbar" }, /* @__PURE__ */ React.createElement("div", { className: "pg-topbar__in" }, /* @__PURE__ */ React.createElement("div", { className: "pg-brand" }, /* @__PURE__ */ React.createElement("img", { src: "assets/logo-type.svg", alt: "Novakid" }), /* @__PURE__ */ React.createElement("span", { className: "pg-brand__divider" }), /* @__PURE__ */ React.createElement("span", { className: "pg-brand__crumb" }, "Invite friends")), /* @__PURE__ */ React.createElement("div", { className: "pg-account" }, /* @__PURE__ */ React.createElement("span", { className: "pg-account__bal" }, /* @__PURE__ */ React.createElement(IconWallet, { size: 18 }), /* @__PURE__ */ React.createElement("span", { className: "lbl" }, "Balance:"), "\xA04 lessons"), /* @__PURE__ */ React.createElement("span", { className: "pg-avatar" }, "E"))));
  }
  function Toasts({ items }) {
    return /* @__PURE__ */ React.createElement("div", { className: "pg-toast-wrap", "aria-live": "polite" }, items.map((t) => /* @__PURE__ */ React.createElement("div", { key: t.id, className: "pg-toast" }, /* @__PURE__ */ React.createElement(IconCheck, { size: 18 }), t.msg)));
  }
  function App() {
    const [toasts, setToasts] = React.useState([]);
    const pushToast = React.useCallback((msg) => {
      const id = Date.now() + Math.random();
      setToasts((prev) => [...prev, { id, msg }]);
      setTimeout(() => setToasts((prev) => prev.filter((x) => x.id !== id)), 2400);
    }, []);
    const onCopy = React.useCallback((text, msg) => {
      const fallback = () => {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        try {
          document.execCommand("copy");
        } catch (e) {
        }
        document.body.removeChild(ta);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => pushToast(msg)).catch(() => {
          fallback();
          pushToast(msg);
        });
      } else {
        fallback();
        pushToast(msg);
      }
    }, [pushToast]);
    return /* @__PURE__ */ React.createElement("div", { className: "pg-page" }, /* @__PURE__ */ React.createElement(TopBar, null), /* @__PURE__ */ React.createElement("main", { className: "pg-wrap pg-main" }, /* @__PURE__ */ React.createElement(Hero, { data: NKDATA, onCopy, heroVariant: HERO_VARIANT }), /* @__PURE__ */ React.createElement(Progress, { data: NKDATA }), /* @__PURE__ */ React.createElement(HowItWorks, null), /* @__PURE__ */ React.createElement(Friends, { data: NKDATA, variant: FRIENDS_VARIANT }), /* @__PURE__ */ React.createElement(Rewards, { data: NKDATA }), /* @__PURE__ */ React.createElement(FriendBanner, null), /* @__PURE__ */ React.createElement(Promo, { onLearnMore: () => pushToast("Promo details \u2014 coming soon") }), /* @__PURE__ */ React.createElement(Faq, { data: NKDATA })), /* @__PURE__ */ React.createElement(Toasts, { items: toasts }));
  }
  ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ React.createElement(App, null));
})();
