(() => {
  const Icon = ({ d, fill = false, size, vb = "0 0 24 24", children, style }) => /* @__PURE__ */ React.createElement(
    "svg",
    {
      viewBox: vb,
      width: size,
      height: size,
      style,
      fill: fill ? "currentColor" : "none",
      stroke: fill ? "none" : "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true"
    },
    children || d && /* @__PURE__ */ React.createElement("path", { d })
  );
  const IconWhatsApp = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p, fill: true }, /* @__PURE__ */ React.createElement("path", { d: "M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.8c2.16 0 4.19.84 5.72 2.37a8.05 8.05 0 0 1 2.37 5.73c0 4.46-3.63 8.09-8.1 8.09a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.11.82.83-3.04-.2-.31a8.07 8.07 0 0 1-1.24-4.3c0-4.46 3.63-8.1 8.1-8.1Zm-3.07 4.3c-.14 0-.37.05-.57.27-.2.22-.75.74-.75 1.79 0 1.06.77 2.08.88 2.22.1.14 1.5 2.29 3.64 3.21.51.22.9.35 1.21.45.51.16.97.14 1.34.08.41-.06 1.26-.51 1.43-1.01.18-.5.18-.92.13-1.01-.05-.09-.2-.14-.41-.25-.21-.11-1.26-.62-1.46-.69-.2-.07-.34-.11-.48.11-.14.21-.55.68-.67.82-.12.14-.25.16-.46.05-.21-.11-.88-.32-1.68-1.04-.62-.55-1.04-1.24-1.16-1.45-.12-.21-.01-.32.09-.43.1-.1.21-.25.32-.38.1-.13.14-.22.21-.36.07-.14.04-.27-.02-.38-.05-.11-.47-1.17-.66-1.6-.17-.4-.35-.35-.48-.36h-.41Z" }));
  const IconTelegram = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p, fill: true }, /* @__PURE__ */ React.createElement("path", { d: "M21.94 4.3 18.9 19.1c-.23 1.02-.84 1.27-1.7.79l-4.7-3.46-2.27 2.18c-.25.25-.46.46-.94.46l.34-4.78L18.4 6.4c.38-.34-.08-.53-.59-.19L7.05 13.2l-4.64-1.45c-1.01-.32-1.03-1.01.21-1.5L20.63 2.9c.84-.31 1.58.2 1.31 1.4Z" }));
  const IconMail = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("rect", { x: "3", y: "5", width: "18", height: "14", rx: "2.5" }), /* @__PURE__ */ React.createElement("path", { d: "M4 7l8 5.5L20 7" }));
  const IconCopy = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("rect", { x: "9", y: "9", width: "12", height: "12", rx: "2.5" }), /* @__PURE__ */ React.createElement("path", { d: "M5 15a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2" }));
  const IconLink = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M9.5 14.5l5-5" }), /* @__PURE__ */ React.createElement("path", { d: "M8 11l-2 2a3.5 3.5 0 0 0 5 5l2-2" }), /* @__PURE__ */ React.createElement("path", { d: "M16 13l2-2a3.5 3.5 0 0 0-5-5l-2 2" }));
  const IconCheck = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M5 12.5l4.2 4.2L19 7" }));
  const IconCheckCircle = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "9" }), /* @__PURE__ */ React.createElement("path", { d: "M8.2 12.3l2.6 2.6 5-5.2" }));
  const IconClock = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "9" }), /* @__PURE__ */ React.createElement("path", { d: "M12 7.5V12l3 2" }));
  const IconSearch = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "11", cy: "11", r: "6.5" }), /* @__PURE__ */ React.createElement("path", { d: "M16 16l4 4" }));
  const IconInfo = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "9" }), /* @__PURE__ */ React.createElement("path", { d: "M12 11v5" }), /* @__PURE__ */ React.createElement("path", { d: "M12 7.6v.4" }));
  const IconChevronDown = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M6 9.5l6 6 6-6" }));
  const IconArrowRight = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M5 12h13" }), /* @__PURE__ */ React.createElement("path", { d: "M12.5 6l6 6-6 6" }));
  const IconGift = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("rect", { x: "4", y: "9", width: "16", height: "11", rx: "1.5" }), /* @__PURE__ */ React.createElement("path", { d: "M3.5 9h17v3.5h-17z" }), /* @__PURE__ */ React.createElement("path", { d: "M12 9v11" }), /* @__PURE__ */ React.createElement("path", { d: "M12 9S10.5 4.5 8 5.5 9.5 9 12 9Zm0 0s1.5-4.5 4-3.5-1.5 3.5-4 3.5Z" }));
  const IconSparkle = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p, fill: true }, /* @__PURE__ */ React.createElement("path", { d: "M12 2.5l1.7 5.3 5.3 1.7-5.3 1.7L12 16.5l-1.7-5.3L5 9.5l5.3-1.7L12 2.5Z" }));
  const IconUser = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "8", r: "3.5" }), /* @__PURE__ */ React.createElement("path", { d: "M5.5 20a6.5 6.5 0 0 1 13 0" }));
  const IconWallet = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("rect", { x: "3", y: "6", width: "18", height: "13", rx: "2.5" }), /* @__PURE__ */ React.createElement("path", { d: "M3 9.5h18" }), /* @__PURE__ */ React.createElement("circle", { cx: "16.5", cy: "13.5", r: "1.2", fill: "currentColor", stroke: "none" }));
  const IconExternal = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M14 5h5v5" }), /* @__PURE__ */ React.createElement("path", { d: "M19 5l-7 7" }), /* @__PURE__ */ React.createElement("path", { d: "M18 13v5a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 5 18V8a1.5 1.5 0 0 1 1.5-1.5H11" }));
  const IconPlus = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M12 5v14" }), /* @__PURE__ */ React.createElement("path", { d: "M5 12h14" }));
  const IconX = (p) => /* @__PURE__ */ React.createElement(Icon, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M6 6l12 12" }), /* @__PURE__ */ React.createElement("path", { d: "M18 6L6 18" }));
  window.NKI = {
    IconWhatsApp,
    IconTelegram,
    IconMail,
    IconCopy,
    IconLink,
    IconCheck,
    IconCheckCircle,
    IconClock,
    IconSearch,
    IconInfo,
    IconChevronDown,
    IconArrowRight,
    IconGift,
    IconSparkle,
    IconUser,
    IconWallet,
    IconExternal,
    IconPlus,
    IconX
  };
})();
