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
      pending: { label: "Reward pending", cls: "pg-chip--pending", Ic: IconClock },
      review: { label: "Under review", cls: "pg-chip--review", Ic: IconSearch },
      none: { label: "No reward yet", cls: "pg-chip--review", Ic: null }
    };
    const m = map[reward] || map.none;
    return /* @__PURE__ */ React.createElement("span", { className: `pg-chip ${m.cls}` }, m.Ic && /* @__PURE__ */ React.createElement(m.Ic, { size: 15 }), m.label);
  }
  function FriendAvatar({ initial, id, size = 46 }) {
    return /* @__PURE__ */ React.createElement("div", { className: "pg-friend-av", style: { width: size, height: size, fontSize: size * 0.37 } }, /* @__PURE__ */ React.createElement("span", { "aria-hidden": "true" }, initial), /* @__PURE__ */ React.createElement("span", { className: "pg-friend-av__n" }, id));
  }
  window.NKS = Object.assign(window.NKS || {}, { FunnelChip, RewardChip, FriendAvatar });
})();
