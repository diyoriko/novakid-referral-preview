/* Referral v3 — interactivity. Renders the market-aware share buttons, wires real
   share intents, copy-link, the single-open FAQ accordion, and the RTL/market demo. */
(function () {
  'use strict';
  var FAQ = [
    { q: 'When do I get my reward?', a: 'You earn a free lesson once your friend finishes a trial, and a free month once they subscribe. Both are added to your account automatically, with no need to claim them, and they never expire.' },
    { q: 'Does a trial count, or only a subscription?', a: 'Both, at different stages. A completed trial lesson earns you 1 free lesson. When that friend buys a subscription, you earn 1 free month (8 individual lessons). There’s no limit on how many friends can count.' },
    { q: 'What does my friend get?', a: 'Your friend gets a special welcome discount on their first paid lesson, right after their trial. So the link you send is a real gift, not just an ad.' },
    { q: 'My friend used my link but I didn’t get a reward. What now?', a: 'Rewards appear once your friend completes the step (trial or subscription) and our team confirms it. If it’s been more than a few days after they completed a step, contact support from your dashboard and we’ll sort it out.' },
    { q: 'Why does a reward say ‘reward on the way’?', a: 'We briefly check each subscription reward before granting it, usually within a couple of days. Once it clears, your free month moves to granted and lands in your account.' }
  ];

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  function variantById(id) {
    for (var i = 0; i < NK_VARIANTS.length; i++) if (NK_VARIANTS[i].id === id) return NK_VARIANTS[i];
    return NK_VARIANTS[0];
  }
  function buildIntent(ch) {
    var url = encodeURIComponent(NK_SHARE.url), text = encodeURIComponent(NK_SHARE.text);
    var subject = encodeURIComponent(NK_SHARE.emailSubject);
    var body = encodeURIComponent(NK_SHARE.emailBody.replace('{url}', NK_SHARE.url));
    return ch.intent.replace('{url}', url).replace('{url}', url).replace('{text}', text)
      .replace('{subject}', subject).replace('{body}', body);
  }

  var toastTimer;
  function toast(msg) {
    var t = $('#toast');
    t.innerHTML = nkSvg('check', 18) + '<span>' + msg + '</span>';
    t.classList.add('is-show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove('is-show'); }, 2400);
  }
  function copyLink() {
    var done = function () { toast('Invite link copied'); flagCopied(); };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(NK_SHARE.url).then(done).catch(fallback);
    } else { fallback(); }
    function fallback() {
      var ta = document.createElement('textarea'); ta.value = NK_SHARE.url;
      ta.style.position = 'fixed'; ta.style.opacity = '0'; document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); done(); } catch (e) { toast('Press ⌘/Ctrl+C to copy'); }
      document.body.removeChild(ta);
    }
  }
  function flagCopied() {
    $$('.copyfield__btn').forEach(function (b) {
      b.classList.add('is-done'); var o = b.textContent; b.textContent = 'Copied';
      setTimeout(function () { b.classList.remove('is-done'); b.textContent = o; }, 1800);
    });
  }
  function handleShare(id) {
    var ch = NK_CHANNELS[id];
    if (!ch) return;
    if (ch.intent === 'copy') { copyLink(); return; }
    if (ch.intent === 'native') {
      if (navigator.share) { navigator.share({ title: 'Novakid', text: NK_SHARE.text, url: NK_SHARE.url }).catch(function () {}); }
      else { copyLink(); toast('Share sheet not available — link copied'); }
      return;
    }
    window.open(buildIntent(ch), '_blank', 'noopener,noreferrer');
  }

  /* ---- renderers per host variant ---- */
  function pill(id, opts) {
    opts = opts || {};
    var ch = NK_CHANNELS[id];
    var el = document.createElement(opts.outlineClass && ch.style === 'outline' ? 'button' : 'button');
    el.type = 'button';
    el.className = 'sharebtn' + (ch.style === 'outline' ? ' sharebtn--outline' : '');
    if (ch.style === 'brand') { el.style.background = ch.brand; el.style.color = ch.ink; }
    el.innerHTML = nkSvg(ch.glyph, 22) + '<span>' + (opts.label || ch.label) + '</span>';
    el.setAttribute('aria-label', (opts.label || ch.label));
    el.addEventListener('click', function () { handleShare(id); });
    return el;
  }
  function chip(id) {
    var ch = NK_CHANNELS[id];
    var el = document.createElement('button');
    el.type = 'button'; el.className = 'bonus__chip';
    el.style.background = ch.style === 'brand' ? ch.brand : '#6d46fc';
    el.style.color = ch.style === 'brand' ? ch.ink : '#fff';
    el.innerHTML = nkSvg(ch.glyph, 22);
    el.setAttribute('aria-label', 'Share via ' + ch.label);
    el.addEventListener('click', function () { handleShare(id); });
    return el;
  }
  function renderHost(host) {
    var v = variantById(currentMarket);
    var variant = host.getAttribute('data-variant') || 'pills';
    host.innerHTML = '';
    if (variant === 'chips') {
      v.visible.filter(function (id) { return id !== 'copy'; }).forEach(function (id) { host.appendChild(chip(id)); });
    } else if (variant === 'closing') {
      var first = v.visible.find(function (id) { return NK_CHANNELS[id].style === 'brand'; }) || 'whatsapp';
      host.appendChild(pill(first, { label: 'Share on ' + NK_CHANNELS[first].label }));
      host.appendChild(pill('copy', { label: 'Copy invite link' }));
    } else if (variant === 'sticky') {
      var f = v.visible.find(function (id) { return NK_CHANNELS[id].style === 'brand'; }) || 'whatsapp';
      host.appendChild(pill(f, { label: 'Share on ' + NK_CHANNELS[f].label }));
      var c = document.createElement('button'); c.type = 'button'; c.className = 'sticky__copy';
      c.innerHTML = nkSvg('copy', 22); c.setAttribute('aria-label', 'Copy invite link');
      c.addEventListener('click', copyLink); host.appendChild(c);
    } else { /* pills */
      v.visible.forEach(function (id) {
        host.appendChild(pill(id, id === 'whatsapp' ? { label: 'Share on WhatsApp' } : {}));
      });
    }
  }
  function renderAllShare() { $$('[data-share-host]').forEach(renderHost); }

  /* ---- FAQ accordion (single-open) ---- */
  function buildFaq() {
    var list = $('#faq');
    FAQ.forEach(function (item, i) {
      var wrap = document.createElement('div');
      wrap.className = 'faq__item'; wrap.setAttribute('aria-expanded', i === 0 ? 'true' : 'false');
      var btn = document.createElement('button');
      btn.type = 'button'; btn.className = 'faq__q'; btn.id = 'faq-q' + i;
      btn.setAttribute('aria-expanded', i === 0 ? 'true' : 'false');
      btn.setAttribute('aria-controls', 'faq-a' + i);
      btn.innerHTML = '<span>' + item.q + '</span><span class="faq__toggle">' + nkSvg('plus', 20) + '</span>';
      var ans = document.createElement('div');
      ans.className = 'faq__a'; ans.id = 'faq-a' + i; ans.setAttribute('role', 'region'); ans.setAttribute('aria-labelledby', 'faq-q' + i);
      ans.innerHTML = '<div class="faq__a-in">' + item.a + '</div>';
      btn.addEventListener('click', function () { toggleFaq(wrap, ans, btn); });
      wrap.appendChild(btn); wrap.appendChild(ans); list.appendChild(wrap);
      if (i === 0) requestAnimationFrame(function () { ans.style.maxHeight = ans.scrollHeight + 'px'; });
    });
  }
  function toggleFaq(wrap, ans, btn) {
    var open = wrap.getAttribute('aria-expanded') === 'true';
    $$('.faq__item').forEach(function (it) {
      it.setAttribute('aria-expanded', 'false');
      it.querySelector('.faq__q').setAttribute('aria-expanded', 'false');
      it.querySelector('.faq__a').style.maxHeight = '0px';
    });
    if (!open) {
      wrap.setAttribute('aria-expanded', 'true'); btn.setAttribute('aria-expanded', 'true');
      ans.style.maxHeight = ans.scrollHeight + 'px';
    }
  }

  /* ---- market + RTL controls ---- */
  var currentMarket = 'global';
  function buildControls() {
    var sel = $('#market');
    NK_VARIANTS.forEach(function (v) {
      var o = document.createElement('option'); o.value = v.id; o.textContent = v.name; sel.appendChild(o);
    });
    sel.value = currentMarket;
    sel.addEventListener('change', function () {
      currentMarket = sel.value;
      var v = variantById(currentMarket);
      var rtl = $('#rtl'); rtl.checked = v.rtl; applyDir(v.rtl);
      renderAllShare();
    });
    $('#rtl').addEventListener('change', function () { applyDir(this.checked); });
  }
  function applyDir(rtl) { document.documentElement.setAttribute('dir', rtl ? 'rtl' : 'ltr'); }

  function init() {
    buildControls();
    buildFaq();
    renderAllShare();
    $$('[data-action="copy"]').forEach(function (b) { b.addEventListener('click', copyLink); });
    // recompute open FAQ height on resize
    window.addEventListener('resize', function () {
      var open = $('.faq__item[aria-expanded="true"] .faq__a');
      if (open) open.style.maxHeight = open.firstChild.scrollHeight + 24 + 'px';
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
