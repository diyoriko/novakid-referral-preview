(() => {
  const { IconCheck, IconClock, IconSearch, IconCheckCircle, IconSparkle } = NKI;
  function FunnelChip({ funnel }) {
    const map = {
      subscribed: { label: "Subscribed", cls: "pg-chip--funnel is-sub" },
      trial: { label: "Trial completed", cls: "pg-chip--funnel" },
      "signed-up": { label: "Signed up", cls: "pg-chip--funnel" }
    };
    const m = map[funnel] || map["signed-up"];
    return /* @__PURE__ */ React.createElement("span", { className: `pg-chip ${m.cls}` }, m.label);
  }
  function RewardChip({ reward }) {
    const map = {
      "granted-month": { label: "Granted +1 month", cls: "pg-chip--granted", Ic: IconCheck },
      "granted-lesson": { label: "Granted +1 lesson", cls: "pg-chip--granted", Ic: IconCheck },
      pending: { label: "Reward on the way", cls: "pg-chip--pending", Ic: IconClock },
      review: { label: "Reward on the way", cls: "pg-chip--pending", Ic: IconClock },
      none: { label: "No reward yet", cls: "pg-chip--review", Ic: null }
    };
    const m = map[reward] || map.none;
    return /* @__PURE__ */ React.createElement("span", { className: `pg-chip ${m.cls}` }, m.Ic && /* @__PURE__ */ React.createElement(m.Ic, { size: 15 }), m.label);
  }
  function FriendAvatar({ initial, id, size = 46 }) {
    return /* @__PURE__ */ React.createElement("div", { className: "pg-friend-av", style: { width: size, height: size, fontSize: size * 0.37 } }, /* @__PURE__ */ React.createElement("span", { "aria-hidden": "true" }, initial), /* @__PURE__ */ React.createElement("span", { className: "pg-friend-av__n" }, id));
  }
  function LevelBadge({ tier }) {
    const common = { stroke: "#2C2A33", strokeWidth: 2, strokeLinejoin: "round", strokeLinecap: "round" };
    if (tier === 1) {
      return /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 48 48", fill: "none", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("circle", { cx: "24", cy: "24", r: "20", fill: "#F0ECFF", ...common }), /* @__PURE__ */ React.createElement("path", { d: "M14 17h13a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4h-5l-4.5 4V29H14a4 4 0 0 1-4-4v-4a4 4 0 0 1 4-4Z", fill: "#6D46FC", ...common }), /* @__PURE__ */ React.createElement("circle", { cx: "18", cy: "23", r: "1.4", fill: "#fff", stroke: "none" }), /* @__PURE__ */ React.createElement("circle", { cx: "23", cy: "23", r: "1.4", fill: "#fff", stroke: "none" }), /* @__PURE__ */ React.createElement("circle", { cx: "28", cy: "23", r: "1.4", fill: "#fff", stroke: "none" }), /* @__PURE__ */ React.createElement("circle", { cx: "35", cy: "13.5", r: "5", fill: "#FFE60A", ...common }));
    }
    if (tier === 2) {
      return /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 48 48", fill: "none", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("circle", { cx: "24", cy: "24", r: "20", fill: "#FFF8DF", ...common }), /* @__PURE__ */ React.createElement("path", { d: "M36 13 12.5 23.2l8.2 2.9L36 13Z", fill: "#6D46FC", ...common }), /* @__PURE__ */ React.createElement("path", { d: "M36 13 20.7 26.1l1.9 7.6 4.1-5.2L36 13Z", fill: "#9593FF", ...common }), /* @__PURE__ */ React.createElement("path", { d: "M9 15.5c2.4 0 2.4-2 4.8-2", ...common, opacity: "0.7" }), /* @__PURE__ */ React.createElement("path", { d: "M7.5 19.5c1.8 0 1.8-1.6 3.6-1.6", ...common, opacity: "0.45" }));
    }
    return /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 48 48", fill: "none", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("circle", { cx: "24", cy: "24", r: "20", fill: "#F7F5FF", ...common }), /* @__PURE__ */ React.createElement("path", { d: "M24 8c4.6 3.2 6.8 8.3 6.8 14 0 3.5-.8 6.3-1.8 8.2h-10c-1-1.9-1.8-4.7-1.8-8.2 0-5.7 2.2-10.8 6.8-14Z", fill: "#6D46FC", ...common }), /* @__PURE__ */ React.createElement("circle", { cx: "24", cy: "19.5", r: "3.4", fill: "#fff", ...common }), /* @__PURE__ */ React.createElement("path", { d: "M17.4 26.5 13 32.4h5.7", fill: "#FFE60A", ...common }), /* @__PURE__ */ React.createElement("path", { d: "M30.6 26.5l4.4 5.9h-5.7", fill: "#FFE60A", ...common }), /* @__PURE__ */ React.createElement("path", { d: "M24 31.5c2 1.8 2 4.8 0 7.2-2-2.4-2-5.4 0-7.2Z", fill: "#C76EF2", ...common }));
  }
  window.NKS = Object.assign(window.NKS || {}, { FunnelChip, RewardChip, FriendAvatar, LevelBadge });
})();
