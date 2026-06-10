(() => {
  const LANG = typeof window !== "undefined" && window.__LANG__ || "en";
  const SHARE_BASE = {
    link: "novakid.com/r/EMMA-7K2P",
    // Body that travels WITH the link in WhatsApp / Telegram / "Copy message".
    // The URL is appended in code so it unfurls into the preview card below.
    message: "My kids learn English with Novakid. Live 1-on-1 lessons with brilliant teachers, and they actually look forward to them. Here's a welcome discount for your child's first lesson:",
    // Email gets its own subject + a slightly longer body ({url} is substituted).
    emailSubject: "A welcome gift for your child's first English lesson",
    emailBody: "Hi,\n\nMy kids learn English with Novakid. Live 1-on-1 lessons with brilliant teachers, and they actually look forward to them.\n\nHere's a welcome discount for your child's first lesson: {url}\n\nHope they love it too.",
    // The link unfurl / Open Graph card — exactly what the recipient sees when the
    // link is pasted into a chat. Mirrored on-page in the "what your friend gets" preview.
    preview: {
      title: "Learn English with Novakid \u2014 a welcome gift inside",
      desc: "Live 1-on-1 lessons with expert teachers. Your child gets a welcome discount after their free trial.",
      domain: "novakid.com",
      image: "assets/og-card.png"
      // raster — SVG won't unfurl in WhatsApp/Telegram
    }
  };
  const SHARE_L10N = {
    tr: {
      message: "\xC7ocuklar\u0131m Novakid ile \u0130ngilizce \xF6\u011Freniyor. Uzman \xF6\u011Fretmenlerle birebir canl\u0131 dersler ve dersleri ger\xE7ekten d\xF6rt g\xF6zle bekliyorlar. \u0130\u015Fte \xE7ocu\u011Funuzun ilk dersi i\xE7in ho\u015F geldin indirimi:",
      emailSubject: "\xC7ocu\u011Funuzun ilk \u0130ngilizce dersi i\xE7in bir ho\u015F geldin hediyesi",
      emailBody: "Merhaba,\n\n\xC7ocuklar\u0131m Novakid ile \u0130ngilizce \xF6\u011Freniyor. Uzman \xF6\u011Fretmenlerle birebir canl\u0131 dersler ve dersleri ger\xE7ekten d\xF6rt g\xF6zle bekliyorlar.\n\n\xC7ocu\u011Funuzun ilk dersi i\xE7in ho\u015F geldin indirimi: {url}\n\nUmar\u0131m onlar da \xE7ok sever.",
      preview: {
        title: "Novakid ile \u0130ngilizce \u2014 i\xE7inde bir ho\u015F geldin hediyesi",
        desc: "Uzman \xF6\u011Fretmenlerle birebir canl\u0131 dersler. \xC7ocu\u011Funuz \xFCcretsiz deneme dersinin ard\u0131ndan ho\u015F geldin indirimi kazan\u0131r.",
        image: "assets/og-card-tr.png"
      }
    },
    pl: {
      message: "Moje dzieci ucz\u0105 si\u0119 angielskiego z Novakid. Lekcje na \u017Cywo jeden na jeden ze \u015Bwietnymi lektorami, na kt\xF3re naprawd\u0119 czekaj\u0105. Oto zni\u017Cka powitalna na pierwsz\u0105 lekcj\u0119 Twojego dziecka:",
      emailSubject: "Prezent powitalny na pierwsz\u0105 lekcj\u0119 angielskiego Twojego dziecka",
      emailBody: "Cze\u015B\u0107,\n\nMoje dzieci ucz\u0105 si\u0119 angielskiego z Novakid. Lekcje na \u017Cywo jeden na jeden ze \u015Bwietnymi lektorami, na kt\xF3re naprawd\u0119 czekaj\u0105.\n\nOto zni\u017Cka powitalna na pierwsz\u0105 lekcj\u0119 Twojego dziecka: {url}\n\nMam nadziej\u0119, \u017Ce Twojemu dziecku te\u017C si\u0119 spodoba.",
      preview: {
        title: "Angielski z Novakid \u2014 prezent powitalny w \u015Brodku",
        desc: "Lekcje na \u017Cywo jeden na jeden z do\u015Bwiadczonymi lektorami. Po darmowej lekcji pr\xF3bnej dziecko dostaje zni\u017Ck\u0119 powitaln\u0105.",
        image: "assets/og-card-pl.png"
      }
    },
    it: {
      message: "I miei figli imparano l'inglese con Novakid. Lezioni dal vivo uno a uno con insegnanti fantastici, e non vedono l'ora di farle. Ecco uno sconto di benvenuto per la prima lezione di tuo figlio:",
      emailSubject: "Un regalo di benvenuto per la prima lezione di inglese di tuo figlio",
      emailBody: "Ciao,\n\nI miei figli imparano l'inglese con Novakid. Lezioni dal vivo uno a uno con insegnanti fantastici, e non vedono l'ora di farle.\n\nEcco uno sconto di benvenuto per la prima lezione di tuo figlio: {url}\n\nSpero che piaccia anche a loro.",
      preview: {
        title: "Impara l'inglese con Novakid, con un regalo di benvenuto",
        desc: "Lezioni dal vivo uno a uno con insegnanti esperti. Dopo la lezione di prova gratuita, tuo figlio riceve uno sconto di benvenuto.",
        image: "assets/og-card-it.png"
      }
    }
  };
  const l10n = SHARE_L10N[LANG];
  const SHARE = l10n ? Object.assign({}, SHARE_BASE, l10n, { preview: Object.assign({}, SHARE_BASE.preview, l10n.preview) }) : SHARE_BASE;
  window.NKDATA = {
    share: SHARE,
    // Funnel KPIs. The reward KPI is NOT listed here — Progress derives it from
    // the ledger below, so the two can never disagree.
    kpis: [
      { num: "7", label: "Friends invited" },
      { num: "4", label: "Completed a trial" },
      { num: "2", label: "Subscribed" }
    ],
    // Seasonal giveaways — a bonus ON TOP of the always-on free-lessons programme.
    // Templatised: swap/append campaigns here; the first active one renders, and
    // active:false hides the band entirely. Future contest = just edit this.
    promos: [
      {
        active: true,
        badge: "Ends 30 Jun",
        title: "Win a PlayStation 5",
        blurb: "Invite the most friends by 30 June to win, on top of the free lessons you already earn.",
        ctaLabel: "How the contest works",
        ctaHref: "",
        // set a real URL in prod; empty -> opens details
        icon: "joystick"
      }
    ],
    // Social proof — REAL figures. ~582 referral registrations/mo (Metabase card Q3246).
    // 2× = referred trial→purchase 54.7% vs 28.6% non-referred (and referral = 5.6% of
    // paid purchases) — confirmed via the Analytics Bot, 2026-06-09. UTM-proxy; the strict
    // backend referral table is still EU-blocked, so directional but authoritative.
    proof: [
      { num: "~580", label: "families join Novakid through a friend every month" },
      { num: "2\xD7", label: "more likely to keep learning: friends who join stick with it after their trial" }
    ],
    // One specific, on-brand parent voice (DS testimonial = an observation, not adjectives).
    testimonial: {
      quote: "I sent the link to two mums from school. Both kids took a trial that week, and now my daughter has a classmate to practise with.",
      name: "Anna",
      detail: "mum of Mateusz",
      place: "Warsaw"
    },
    // Recognition-only inviter status (NO extra rewards — the reward stays the live,
    // uncapped free lessons). Tiers are by friends who subscribed. Motivational badge.
    levels: [
      { at: 1, name: "Connector" },
      { at: 3, name: "Super-sharer" },
      { at: 5, name: "Novakid legend" }
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
        a: "You earn a free lesson once your friend finishes a trial, and a free month once they subscribe. Both are added to your account automatically, with no need to claim them, and they never expire."
      },
      {
        q: "Does a trial count, or only a subscription?",
        a: "Both, at different stages. A completed trial lesson earns you 1 free lesson. When that friend buys a subscription, you earn 1 free month (8 individual lessons). There's no limit on how many friends can count."
      },
      {
        q: "What does my friend get?",
        a: "Your friend gets a special welcome discount on their first paid lesson, right after their trial. So the link you send is a real gift, not just an ad."
      },
      {
        q: "My friend used my link but I didn't get a reward. What now?",
        a: "Rewards appear once your friend completes the step (trial or subscription) and our team confirms it. If it's been more than a few days after they completed a step, contact support from your dashboard and we'll sort it out."
      },
      {
        q: "Why does a reward say 'reward on the way'?",
        a: "We briefly check each subscription reward before granting it, usually within a couple of days. Once it clears, your free month moves to granted and lands in your account."
      }
    ]
  };
})();
