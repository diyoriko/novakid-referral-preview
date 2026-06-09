(() => {
  window.NKDATA = {
    // ── Share content ──────────────────────────────────────────────────────────
    // Everything the parent sends and the friend receives lives here, so copy can
    // be tuned/localised without touching components. Voice: parent-to-parent —
    // warm, British English, sentence case, no emoji (translation-safe for TR/PL/IT).
    share: {
      link: "novakid.com/r/EMMA-7K2P",
      // Body that travels WITH the link in WhatsApp / Telegram / "Copy message".
      // The URL is appended in code so it unfurls into the preview card below.
      message: "My kids learn English with Novakid \u2014 live 1-on-1 lessons with brilliant teachers, and they actually look forward to them. Here's a welcome discount for your child's first lesson:",
      // Email gets its own subject + a slightly longer body ({url} is substituted).
      emailSubject: "A welcome gift for your child's first English lesson",
      emailBody: "Hi,\n\nMy kids learn English with Novakid \u2014 live 1-on-1 lessons with brilliant teachers, and they actually look forward to them.\n\nHere's a welcome discount for your child's first lesson: {url}\n\nHope they love it too.",
      // The link unfurl / Open Graph card — exactly what the recipient sees when the
      // link is pasted into a chat. Mirrored on-page in the "what your friend gets" preview.
      preview: {
        title: "Learn English with Novakid \u2014 a welcome gift inside",
        desc: "Live 1-on-1 lessons with expert teachers. Your child gets a welcome discount after their free trial.",
        domain: "novakid.com",
        image: "assets/og-card.png"
        // raster — SVG won't unfurl in WhatsApp/Telegram
      }
    },
    kpis: [
      { num: "7", label: "Friends invited" },
      { num: "4", label: "Started a trial" },
      { num: "2", label: "Subscribed" },
      { num: "+1 mo", label: "Reward earned", reward: true }
    ],
    // Seasonal giveaways — a bonus ON TOP of the always-on free-lessons programme.
    // Templatised: swap/append campaigns here; the first active one renders, and
    // active:false hides the band entirely. Future contest = just edit this.
    promos: [
      {
        active: true,
        badge: "Ends 30 Jun",
        eyebrow: "Seasonal bonus",
        title: "Win a PlayStation 5",
        blurb: "Invite the most friends by 30 June to win \u2014 on top of the free lessons you already earn.",
        ctaLabel: "How the contest works",
        ctaHref: "",
        // set a real URL in prod; empty -> opens details
        icon: "joystick"
      }
    ],
    // funnel: signed-up | trial | subscribed
    // reward: granted-month | granted-lesson | pending | review | none
    friends: [
      { id: 1, initial: "M", date: "5 Jun", funnel: "subscribed", reward: "granted-month" },
      { id: 2, initial: "A", date: "3 Jun", funnel: "trial", reward: "granted-lesson" },
      { id: 3, initial: "K", date: "28 May", funnel: "subscribed", reward: "review" },
      { id: 4, initial: "S", date: "24 May", funnel: "trial", reward: "granted-lesson" },
      { id: 5, initial: "D", date: "19 May", funnel: "signed-up", reward: "none" },
      { id: 6, initial: "L", date: "14 May", funnel: "signed-up", reward: "none" },
      { id: 7, initial: "T", date: "8 May", funnel: "signed-up", reward: "none" }
    ],
    ledger: [
      { kind: "granted", amount: "+1 free month", note: "8 lessons", who: "Friend #1 subscribed", date: "5 Jun" },
      { kind: "granted", amount: "+1 free lesson", note: "", who: "Friend #2 completed a trial", date: "3 Jun" },
      { kind: "granted", amount: "+1 free lesson", note: "", who: "Friend #4 completed a trial", date: "24 May" },
      { kind: "review", amount: "Reward on the way", note: "1 free month", who: "Friend #3 subscribed", date: "28 May" }
    ],
    faq: [
      {
        q: "When do I get my reward?",
        a: "You earn a free lesson once your friend finishes a trial, and a free month once they subscribe. Both are added to your account automatically \u2014 no need to claim them."
      },
      {
        q: "What counts \u2014 a trial or a subscription?",
        a: "Both, at different stages. A completed trial lesson earns you 1 free lesson. When that friend buys a subscription, you earn 1 free month (8 individual lessons). There's no limit on how many friends can count."
      },
      {
        q: "What does my friend get?",
        a: "Your friend gets a special welcome discount on their first paid lesson, right after their trial. So the link you send is a real gift, not just an ad."
      },
      {
        q: "My friend used my link but I didn't get a reward \u2014 what now?",
        a: "Rewards appear once your friend completes the step (trial or subscription) and our team confirms it. If it's been more than a few days after they completed a step, contact support and we'll sort it out."
      },
      {
        q: "Why does a reward say 'reward on the way'?",
        a: "We briefly check each subscription reward before granting it, usually within a couple of days. Once it clears, your free month moves to granted and lands in your account."
      }
    ]
  };
})();
