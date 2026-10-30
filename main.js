(function () {
  'use strict';

  // 页面标题、描述及动态文案的多语言映射
  const i18n = {
    zh: {
      title: '一杯咖啡引起的伟大畅想',
      description: '一杯咖啡引起的伟大畅想 - Lee 的个人页面。每天至少喝一杯咖啡，这是我给自己的片刻宁静。',
      copy: '复制',
      copied: '已复制',
      copyFailed: '复制失败'
    },
    en: {
      title: "A Cup of Coffee's Great Vision",
      description: "A Cup of Coffee's Great Vision - Lee's personal page. At least one cup of coffee every day, a moment of peace for myself.",
      copy: 'Copy',
      copied: 'Copied',
      copyFailed: 'Copy failed'
    }
  };

  // 邮箱以 Base64 存放，点击后才解码写入页面，避免出现在静态 HTML 中被简单爬虫抓取
  const ENCODED_EMAIL = 'aGVsbG9AYWNvZmZlZS5jb20=';

  function detectLanguage() {
    const lang = (navigator.languages && navigator.languages[0]) || navigator.language || 'en';
    return lang.toLowerCase().startsWith('zh') ? 'zh' : 'en';
  }

  const lang = detectLanguage();
  const t = i18n[lang];

  function applyLanguage() {
    document.documentElement.lang = lang;
    document.title = t.title;
    document.querySelector('meta[name="description"]').content = t.description;

    document.querySelectorAll('[data-en][data-zh]').forEach(function (el) {
      const text = el.getAttribute('data-' + lang);
      // 文案均为页面内静态内容；含标签（如 <span class="highlight">）时才用 innerHTML
      if (text.includes('<')) {
        el.innerHTML = text;
      } else {
        el.textContent = text;
      }
    });

    document.querySelectorAll('[data-alt-en][data-alt-zh]').forEach(function (el) {
      el.alt = el.getAttribute('data-alt-' + lang);
    });
  }

  function showContact() {
    const button = document.getElementById('contactBtn');
    const panel = document.getElementById('qrcodeContainer');
    const qrImg = document.getElementById('qrImg');
    const emailLink = document.getElementById('emailAddress');
    const email = atob(ENCODED_EMAIL);

    // 二维码按需加载，未点击时不请求
    qrImg.src = qrImg.getAttribute('data-src');
    emailLink.textContent = email;
    emailLink.href = 'mailto:' + email;

    button.setAttribute('aria-expanded', 'true');
    button.hidden = true;
    panel.hidden = false;
    // 按钮隐藏后把焦点移到面板，避免键盘焦点丢失
    panel.focus();
  }

  function copyEmail() {
    const copyBtn = document.getElementById('copyBtn');
    const email = document.getElementById('emailAddress').textContent;

    function feedback(text) {
      copyBtn.textContent = text;
      setTimeout(function () { copyBtn.textContent = t.copy; }, 2000);
    }

    if (!navigator.clipboard) {
      feedback(t.copyFailed);
      return;
    }
    navigator.clipboard.writeText(email).then(
      function () { feedback(t.copied); },
      function () { feedback(t.copyFailed); }
    );
  }

  applyLanguage();
  document.getElementById('contactBtn').addEventListener('click', showContact);
  document.getElementById('copyBtn').addEventListener('click', copyEmail);
})();
