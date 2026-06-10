(() => {
  const { IconInfo, IconChevronDown, IconCheck, IconClock, IconGift, IconExternal } = NKI;
  const { FunnelChip, RewardChip, FriendAvatar, LevelBadge } = NKS;
  function CountUp({ value }) {
    const m = /^([^0-9]*)(\d+)(.*)$/.exec(String(value));
    const target = m ? parseInt(m[2], 10) : 0;
    const [n, setN] = React.useState(0);
    React.useEffect(() => {
      if (!m) return;
      if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setN(target);
        return;
      }
      const t0 = performance.now(), dur = 900;
      let raf;
      const tick = (t) => {
        const p = Math.min(1, (t - t0) / dur);
        setN(Math.round((1 - Math.pow(1 - p, 4)) * target));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf);
    }, []);
    if (!m) return value;
    return m[1] + n + m[3];
  }
  function Skel({ w, h, av }) {
    return /* @__PURE__ */ React.createElement("span", { className: "pg-skel" + (av ? " pg-skel--av" : ""), style: { width: av ? void 0 : w || "100%", height: av ? void 0 : h || 14 } });
  }
  function Loadfail({ onRetry }) {
    return /* @__PURE__ */ React.createElement("div", { className: "pg-loadfail" }, /* @__PURE__ */ React.createElement("p", null, "We couldn't load your stats just now. Your invite link above still works."), /* @__PURE__ */ React.createElement("button", { className: "pg-btn pg-btn--ghost pg-btn--sm", onClick: onRetry }, "Try again"));
  }
  function gate(status, onRetry, loading, content) {
    if (status === "error") return /* @__PURE__ */ React.createElement(Loadfail, { onRetry });
    if (status === "loading") return loading;
    return content;
  }
  function Progress({ data, status, onRetry }) {
    const grants = data.ledger.filter((r) => r.kind === "granted").length;
    const kpis = data.kpis.concat([
      { num: String(grants), label: grants === 1 ? "Reward earned" : "Rewards earned", reward: true }
    ]);
    return /* @__PURE__ */ React.createElement("section", { className: "pg-card pg-rise", "data-screen-label": "Your progress" }, /* @__PURE__ */ React.createElement("div", { className: "pg-card__head" }, /* @__PURE__ */ React.createElement("h2", { className: "pg-card__title" }, "How your invites are doing")), gate(
      status,
      onRetry,
      /* @__PURE__ */ React.createElement("div", { className: "pg-kpis" }, [0, 1, 2, 3].map((i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "pg-kpi" }, /* @__PURE__ */ React.createElement(Skel, { w: "48%", h: 30 }), /* @__PURE__ */ React.createElement(Skel, { w: "72%", h: 12 })))),
      /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "pg-kpis" }, kpis.map((k, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "pg-kpi" + (k.reward ? " pg-kpi--reward" : "") }, /* @__PURE__ */ React.createElement("div", { className: "pg-kpi__num" }, /* @__PURE__ */ React.createElement(CountUp, { value: k.num })), /* @__PURE__ */ React.createElement("div", { className: "pg-kpi__lbl" }, k.label)))), /* @__PURE__ */ React.createElement("p", { className: "pg-note" }, /* @__PURE__ */ React.createElement(IconInfo, { size: 16 }), /* @__PURE__ */ React.createElement("span", null, "Statuses update from the backend as your friends progress; some can take a short while to confirm.")))
    ));
  }
  function HowItWorks() {
    const steps = [
      { h: "Share your link", body: /* @__PURE__ */ React.createElement(React.Fragment, null, "On WhatsApp or a group chat, wherever your friends already are.") },
      { h: "Your friend joins", body: /* @__PURE__ */ React.createElement(React.Fragment, null, "They sign up through your link and get a ", /* @__PURE__ */ React.createElement("b", null, "welcome discount"), " after their trial.") },
      { h: "You earn free lessons", body: /* @__PURE__ */ React.createElement(React.Fragment, null, "Trial \u2192 ", /* @__PURE__ */ React.createElement("b", null, "1 free lesson"), ". Subscribe \u2192 ", /* @__PURE__ */ React.createElement("b", null, "1 free month"), " (8 lessons), no limits.") }
    ];
    return /* @__PURE__ */ React.createElement("section", { className: "pg-card pg-rise", "data-screen-label": "How it works" }, /* @__PURE__ */ React.createElement("div", { className: "pg-card__head" }, /* @__PURE__ */ React.createElement("h2", { className: "pg-card__title" }, "Three steps to free lessons")), /* @__PURE__ */ React.createElement("ol", { className: "pg-how" }, steps.map((s, i) => /* @__PURE__ */ React.createElement("li", { key: i, className: "pg-how__step" }, /* @__PURE__ */ React.createElement("span", { className: "pg-how__num" }, i + 1), /* @__PURE__ */ React.createElement("h3", { className: "pg-how__h" }, s.h), /* @__PURE__ */ React.createElement("p", { className: "pg-how__b" }, s.body)))));
  }
  function SocialProof({ data }) {
    if (!data.proof || !data.proof.length) return null;
    return /* @__PURE__ */ React.createElement("section", { className: "pg-proof pg-rise", "aria-label": "Referral programme stats", "data-screen-label": "Social proof" }, /* @__PURE__ */ React.createElement("div", { className: "pg-proof__grid" }, data.proof.map((s, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "pg-proof__stat" }, /* @__PURE__ */ React.createElement("div", { className: "pg-proof__num" }, /* @__PURE__ */ React.createElement(CountUp, { value: s.num })), /* @__PURE__ */ React.createElement("div", { className: "pg-proof__lbl" }, s.label)))), data.testimonial && /* @__PURE__ */ React.createElement("figure", { className: "pg-quote" }, /* @__PURE__ */ React.createElement("blockquote", { className: "pg-quote__text" }, "\u201C", data.testimonial.quote, "\u201D"), /* @__PURE__ */ React.createElement("figcaption", { className: "pg-quote__by" }, data.testimonial.name, " \xB7 ", data.testimonial.detail, " \xB7 ", data.testimonial.place)), /* @__PURE__ */ React.createElement("p", { className: "pg-proof__note" }, "Based on Novakid referral data, 2026."));
  }
  function FriendRow({ f }) {
    return /* @__PURE__ */ React.createElement("div", { className: "pg-friend-row" }, /* @__PURE__ */ React.createElement(FriendAvatar, { initial: f.initial, id: f.id }), /* @__PURE__ */ React.createElement("div", { className: "pg-friend-meta" }, /* @__PURE__ */ React.createElement("div", { className: "pg-friend-name" }, "Friend #", f.id), /* @__PURE__ */ React.createElement("div", { className: "pg-friend-date" }, "Invited ", f.date)), /* @__PURE__ */ React.createElement("div", { className: "pg-friend-chips" }, /* @__PURE__ */ React.createElement(FunnelChip, { funnel: f.funnel }), /* @__PURE__ */ React.createElement(RewardChip, { reward: f.reward })));
  }
  function FriendCard({ f }) {
    return /* @__PURE__ */ React.createElement("div", { className: "pg-friend-card" }, /* @__PURE__ */ React.createElement("div", { className: "pg-friend-card__top" }, /* @__PURE__ */ React.createElement(FriendAvatar, { initial: f.initial, id: f.id }), /* @__PURE__ */ React.createElement("div", { className: "pg-friend-meta" }, /* @__PURE__ */ React.createElement("div", { className: "pg-friend-name" }, "Friend #", f.id), /* @__PURE__ */ React.createElement("div", { className: "pg-friend-date" }, "Invited ", f.date))), /* @__PURE__ */ React.createElement("div", { className: "pg-friend-card__chips" }, /* @__PURE__ */ React.createElement(FunnelChip, { funnel: f.funnel }), /* @__PURE__ */ React.createElement(RewardChip, { reward: f.reward })));
  }
  function FriendsEmpty() {
    return /* @__PURE__ */ React.createElement("div", { className: "pg-empty" }, /* @__PURE__ */ React.createElement("div", { className: "pg-empty__ic" }, /* @__PURE__ */ React.createElement("img", { src: "assets/icons/design/letter.svg", alt: "" })), /* @__PURE__ */ React.createElement("h3", null, "No invites yet"), /* @__PURE__ */ React.createElement("p", null, "Share your link above \u2014 once a friend signs up, you'll see them here with their status."));
  }
  function Friends({ data, variant, status, onRetry }) {
    const [open, setOpen] = React.useState(false);
    const total = data.friends.length;
    const shown = open ? data.friends : data.friends.slice(0, 4);
    return /* @__PURE__ */ React.createElement("section", { className: "pg-card pg-rise", "data-screen-label": "Invited friends" }, /* @__PURE__ */ React.createElement("div", { className: "pg-card__head" }, /* @__PURE__ */ React.createElement("h2", { className: "pg-card__title" }, "Who you've invited"), /* @__PURE__ */ React.createElement("p", { className: "pg-card__sub" }, "Names are masked for privacy. Statuses update as your friends progress.")), gate(
      status,
      onRetry,
      /* @__PURE__ */ React.createElement("div", null, [0, 1, 2, 3].map((i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "pg-friend-row" }, /* @__PURE__ */ React.createElement(Skel, { av: true }), /* @__PURE__ */ React.createElement("div", { className: "pg-friend-meta" }, /* @__PURE__ */ React.createElement(Skel, { w: "42%", h: 15 }), /* @__PURE__ */ React.createElement(Skel, { w: "26%", h: 11 }))))),
      /* @__PURE__ */ React.createElement(React.Fragment, null, total === 0 ? /* @__PURE__ */ React.createElement(FriendsEmpty, null) : variant === "cards" ? /* @__PURE__ */ React.createElement("div", { className: "pg-friend-grid" }, shown.map((f) => /* @__PURE__ */ React.createElement(FriendCard, { key: f.id, f }))) : /* @__PURE__ */ React.createElement("div", null, shown.map((f) => /* @__PURE__ */ React.createElement(FriendRow, { key: f.id, f }))), total > 4 && /* @__PURE__ */ React.createElement(
        "button",
        {
          className: "pg-showall" + (open ? " is-open" : ""),
          onClick: () => {
            setOpen(!open);
            if (!open) window.nkTrack && window.nkTrack("referral_friends_expand");
          }
        },
        open ? "Show fewer" : `Show all ${total} invited friends`,
        /* @__PURE__ */ React.createElement(IconChevronDown, { size: 16 })
      ))
    ));
  }
  function summarise(ledger) {
    const g = ledger.filter((r) => r.kind === "granted");
    const months = g.filter((r) => /month/i.test(r.amount)).length;
    const lessons = g.filter((r) => /lesson/i.test(r.amount)).length;
    const parts = [];
    if (months) parts.push(months + (months === 1 ? " free month" : " free months"));
    if (lessons) parts.push(lessons + (lessons === 1 ? " free lesson" : " free lessons"));
    return parts;
  }
  function Rewards({ data, status, onRetry }) {
    const parts = summarise(data.ledger);
    return /* @__PURE__ */ React.createElement("section", { className: "pg-card pg-rise", "data-screen-label": "Your rewards" }, /* @__PURE__ */ React.createElement("div", { className: "pg-card__head" }, /* @__PURE__ */ React.createElement("h2", { className: "pg-card__title" }, "What you've earned")), gate(
      status,
      onRetry,
      /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "pg-reward-summary", style: { background: "var(--nk-magnolia)" } }, /* @__PURE__ */ React.createElement("span", { className: "pg-skel", style: { width: 44, height: 44, borderRadius: 12 } }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement(Skel, { w: "30%", h: 12 }), /* @__PURE__ */ React.createElement("div", { style: { height: 8 } }), /* @__PURE__ */ React.createElement(Skel, { w: "55%", h: 20 }))), [0, 1, 2].map((i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "pg-ledger-row" }, /* @__PURE__ */ React.createElement("span", { className: "pg-skel", style: { width: 40, height: 40, borderRadius: 10 } }), /* @__PURE__ */ React.createElement("div", { className: "pg-ledger-meta" }, /* @__PURE__ */ React.createElement(Skel, { w: "48%", h: 15 }), /* @__PURE__ */ React.createElement(Skel, { w: "32%", h: 12 }))))),
      /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "pg-reward-summary" }, /* @__PURE__ */ React.createElement("svg", { className: "pg-reward-summary__spark", viewBox: "0 0 80 80", fill: "none", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("path", { transform: "translate(6 8) scale(1.5)", d: "M12 2.5l1.7 5.3 5.3 1.7-5.3 1.7L12 16.5l-1.7-5.3L5 9.5l5.3-1.7L12 2.5Z", fill: "#6D46FC", opacity: "0.85" }), /* @__PURE__ */ React.createElement("path", { transform: "translate(46 40) scale(0.9)", d: "M12 2.5l1.7 5.3 5.3 1.7-5.3 1.7L12 16.5l-1.7-5.3L5 9.5l5.3-1.7L12 2.5Z", fill: "#fff", opacity: "0.9" }), /* @__PURE__ */ React.createElement("circle", { cx: "62", cy: "16", r: "3.5", fill: "#fff", opacity: "0.85" }), /* @__PURE__ */ React.createElement("circle", { cx: "44", cy: "28", r: "2.5", fill: "#6D46FC", opacity: "0.5" })), /* @__PURE__ */ React.createElement("div", { className: "pg-reward-summary__ic" }, /* @__PURE__ */ React.createElement("img", { src: "assets/icons/design/medal.svg", alt: "" })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "pg-reward-summary__t" }, "Earned so far"), /* @__PURE__ */ React.createElement("div", { className: "pg-reward-summary__v" }, parts.length ? parts.map((p, i) => /* @__PURE__ */ React.createElement(React.Fragment, { key: i }, i > 0 ? " + " : "", /* @__PURE__ */ React.createElement("span", { className: "lemon" }, p))) : /* @__PURE__ */ React.createElement("span", null, "Nothing yet \u2014 rewards land here automatically")))), /* @__PURE__ */ React.createElement("div", null, data.ledger.map((r, i) => {
        const granted = r.kind === "granted";
        return /* @__PURE__ */ React.createElement("div", { key: i, className: "pg-ledger-row" }, /* @__PURE__ */ React.createElement("div", { className: "pg-ledger-ic " + (granted ? "pg-ledger-ic--granted" : "pg-ledger-ic--review") }, granted ? /* @__PURE__ */ React.createElement(IconGift, { size: 22 }) : /* @__PURE__ */ React.createElement(IconClock, { size: 22 })), /* @__PURE__ */ React.createElement("div", { className: "pg-ledger-meta" }, /* @__PURE__ */ React.createElement("div", { className: "pg-ledger-amt" }, r.amount, r.note ? /* @__PURE__ */ React.createElement("span", { style: { color: "var(--nk-text-muted)", fontWeight: 400 } }, " \xB7 ", r.note) : null), /* @__PURE__ */ React.createElement("div", { className: "pg-ledger-sub" }, r.who, " \xB7 ", r.date)), /* @__PURE__ */ React.createElement("span", { className: "pg-chip " + (granted ? "pg-chip--granted" : "pg-chip--pending") }, granted ? /* @__PURE__ */ React.createElement(IconCheck, { size: 15 }) : /* @__PURE__ */ React.createElement(IconClock, { size: 15 }), granted ? "Granted" : "Reward on the way"));
      })), /* @__PURE__ */ React.createElement("p", { className: "pg-reward-nudge" }, "Every friend who subscribes is another free month.", " ", /* @__PURE__ */ React.createElement("a", { href: "#main", onClick: () => window.nkTrack && window.nkTrack("referral_renudge_click") }, "Invite one more \u2192")))
    ));
  }
  function Milestones({ data, status, onRetry }) {
    const tiers = data.levels || [];
    if (!tiers.length) return null;
    const subs = data.friends.filter((f) => f.funnel === "subscribed").length;
    const current = tiers.filter((t) => subs >= t.at).slice(-1)[0] || null;
    const next = tiers.find((t) => subs < t.at);
    return /* @__PURE__ */ React.createElement("section", { className: "pg-card pg-rise", "data-screen-label": "Inviter status" }, /* @__PURE__ */ React.createElement("div", { className: "pg-card__head" }, /* @__PURE__ */ React.createElement("h2", { className: "pg-card__title" }, "Your inviter status"), /* @__PURE__ */ React.createElement("p", { className: "pg-card__sub" }, "Recognition only: your reward stays the free lessons above, always uncapped.")), gate(
      status,
      onRetry,
      /* @__PURE__ */ React.createElement("div", { className: "pg-levels" }, [0, 1, 2].map((i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "pg-level" }, /* @__PURE__ */ React.createElement("span", { className: "pg-skel", style: { width: 32, height: 32, borderRadius: 9999 } }), /* @__PURE__ */ React.createElement(Skel, { w: "60%", h: 15 }), /* @__PURE__ */ React.createElement(Skel, { w: "44%", h: 12 })))),
      /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "pg-levels" }, tiers.map((t, i) => {
        const on = subs >= t.at;
        const isCur = current && current.at === t.at;
        return /* @__PURE__ */ React.createElement("div", { key: i, className: "pg-level" + (on ? " is-on" : "") + (isCur ? " is-current" : "") }, /* @__PURE__ */ React.createElement("span", { className: "pg-level__badge" }, /* @__PURE__ */ React.createElement(LevelBadge, { tier: i + 1 })), /* @__PURE__ */ React.createElement("span", { className: "pg-level__name" }, t.name, on ? /* @__PURE__ */ React.createElement("span", { className: "pg-level__done" }, /* @__PURE__ */ React.createElement(IconCheck, { size: 13 })) : null), /* @__PURE__ */ React.createElement("span", { className: "pg-level__req" }, t.at, " ", t.at === 1 ? "friend subscribed" : "friends subscribed"));
      })), next && /* @__PURE__ */ React.createElement("p", { className: "pg-levels__nudge" }, next.at - subs, " more ", next.at - subs === 1 ? "friend who subscribes" : "friends who subscribe", " to reach ", /* @__PURE__ */ React.createElement("b", null, next.name), "."))
    ));
  }
  function FriendBanner() {
    return /* @__PURE__ */ React.createElement("section", { className: "pg-banner-friend pg-rise", "data-screen-label": "What your friend gets" }, /* @__PURE__ */ React.createElement("div", { className: "pg-banner-friend__ic" }, /* @__PURE__ */ React.createElement("img", { src: "assets/icons/design/gift.svg", alt: "" })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", null, "What your friend gets"), /* @__PURE__ */ React.createElement("p", null, "A welcome discount after their first trial lesson, so the link you send is a real gift, not just an ad.")));
  }
  function Promo({ promo, onLearnMore }) {
    const icon = "assets/icons/design/" + promo.icon + ".svg";
    const cta = promo.ctaHref ? /* @__PURE__ */ React.createElement("a", { className: "pg-btn pg-btn--accent pg-btn--sm pg-promo__cta", href: promo.ctaHref }, promo.ctaLabel, /* @__PURE__ */ React.createElement(IconExternal, { size: 16 })) : /* @__PURE__ */ React.createElement("button", { className: "pg-btn pg-btn--accent pg-btn--sm pg-promo__cta", onClick: onLearnMore }, promo.ctaLabel);
    return /* @__PURE__ */ React.createElement("section", { className: "pg-promo pg-rise", "aria-label": "Seasonal contest", "data-screen-label": "Promo" }, /* @__PURE__ */ React.createElement("div", { className: "pg-promo__ic" }, /* @__PURE__ */ React.createElement("img", { src: icon, alt: "" })), /* @__PURE__ */ React.createElement("div", { className: "pg-promo__body" }, /* @__PURE__ */ React.createElement("div", { className: "pg-promo__title" }, /* @__PURE__ */ React.createElement("h2", null, promo.title), /* @__PURE__ */ React.createElement("span", { className: "pg-promo__badge" }, promo.badge)), /* @__PURE__ */ React.createElement("p", { className: "pg-promo__sub" }, promo.blurb)), cta);
  }
  function FaqItem({ item, idx, isOpen, onToggle }) {
    const bid = "pg-faq-q-" + idx, pid = "pg-faq-a-" + idx;
    return /* @__PURE__ */ React.createElement("div", { className: "pg-faq-item" + (isOpen ? " is-open" : "") }, /* @__PURE__ */ React.createElement("button", { id: bid, className: "pg-faq-q", onClick: onToggle, "aria-expanded": isOpen, "aria-controls": pid }, /* @__PURE__ */ React.createElement("span", null, item.q), /* @__PURE__ */ React.createElement("span", { className: "pg-faq-q__ic" }, /* @__PURE__ */ React.createElement(IconChevronDown, { size: 16 }))), /* @__PURE__ */ React.createElement("div", { id: pid, role: "region", "aria-labelledby": bid, className: "pg-faq-a", "aria-hidden": !isOpen }, /* @__PURE__ */ React.createElement("div", { className: "pg-faq-a__in" }, item.a)));
  }
  function Faq({ data }) {
    const [open, setOpen] = React.useState(-1);
    return /* @__PURE__ */ React.createElement("section", { className: "pg-card pg-rise", "data-screen-label": "FAQ" }, /* @__PURE__ */ React.createElement("div", { className: "pg-card__head" }, /* @__PURE__ */ React.createElement("h2", { className: "pg-card__title" }, "Frequently asked questions")), /* @__PURE__ */ React.createElement("div", null, data.faq.map((item, i) => /* @__PURE__ */ React.createElement(FaqItem, { key: i, item, idx: i, isOpen: open === i, onToggle: () => setOpen(open === i ? -1 : i) }))));
  }
  window.NKS = Object.assign(window.NKS || {}, {
    Progress,
    HowItWorks,
    SocialProof,
    Friends,
    Rewards,
    Milestones,
    FriendBanner,
    Promo,
    Faq
  });
})();
