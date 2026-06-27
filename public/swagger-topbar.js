(function () {
  function injectTopbarButtons() {
    var topbar = document.querySelector('.swagger-ui .topbar');
    if (!topbar || document.getElementById('doitcha-topbar-actions')) return;

    var wrapper = document.createElement('div');
    wrapper.id = 'doitcha-topbar-actions';
    wrapper.style.cssText = [
      'display:flex',
      'align-items:center',
      'gap:10px',
      'margin-left:auto',
      'padding-right:1.5rem',
    ].join(';');

    // Logout button
    var logoutBtn = document.createElement('a');
    logoutBtn.href = '/admin-logout';
    logoutBtn.textContent = 'Logout';
    logoutBtn.style.cssText = [
      'display:inline-flex',
      'align-items:center',
      'gap:6px',
      'padding:6px 14px',
      'background:transparent',
      'color:#f93e3e',
      'border:1px solid #f93e3e',
      'border-radius:6px',
      'font-size:0.8rem',
      'font-weight:600',
      'text-decoration:none',
      'letter-spacing:0.03em',
      'transition:background 0.2s,color 0.2s',
    ].join(';');
    logoutBtn.addEventListener('mouseenter', function () {
      logoutBtn.style.background = 'rgba(249,62,62,0.12)';
    });
    logoutBtn.addEventListener('mouseleave', function () {
      logoutBtn.style.background = 'transparent';
    });

    wrapper.appendChild(logoutBtn);
    topbar.appendChild(wrapper);
  }

  // Swagger UI renders asynchronously, poll until topbar is available
  var attempts = 0;
  var interval = setInterval(function () {
    injectTopbarButtons();
    attempts++;
    if (document.getElementById('doitcha-topbar-actions') || attempts > 40) {
      clearInterval(interval);
    }
  }, 250);
})();
