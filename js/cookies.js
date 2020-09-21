const $main = jQuery('.main');
const $toggleThemeSwitch = jQuery('.toggleState');
const $toggleThemeLabel = jQuery('.toggle-label');
const $toggleTitle = jQuery('#toggle-title');
const $cookieConsent = jQuery('.cookie-consent');
const $cookieOkayBtn = jQuery('.cookie-okay');

const getCookieValue = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
};

const setTheme = (mode) => {
  $toggleThemeSwitch.prop('checked', mode == 'dark' ? false : true);
  $toggleThemeLabel.attr('title', `Toggle to ${mode == 'dark' ? 'light' : 'dark'} mode`);
  $toggleTitle.text(`Toggle to ${mode == 'dark' ? 'light' : 'dark'} mode`);
  document.cookie = `theme=${mode}; path=/; expires=Wed, 14 Jun 3017 07:00:00 GMT`;
};

$cookieOkayBtn.on('click', () => {
  $cookieConsent.css('display', 'none');
  document.cookie = 'consent=yes';
});

$toggleThemeSwitch.click(() => {
  $main.toggleClass('light-mode');
  if ($main.hasClass('light-mode')) {
    setTheme('light');
  } else {
    setTheme('dark');
  }
});

jQuery(document).ready(function() {
  jQuery('.collapse-button').on('click', () => {
    jQuery('.animated-icon').toggleClass('open');
  });

  if (!getCookieValue('consent')) {
    $cookieConsent.css('display', 'block');
  }

  if (getCookieValue('theme')) {
    let themeValue = getCookieValue('theme');

    if (themeValue != 'dark') {
      $main.addClass('light-mode');
      setTheme('light');
    } else {
      $main.removeClass('light-mode');
      setTheme('dark');
    }
  } else {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      $main.removeClass('light-mode');
      setTheme('dark');
    } else {
      $main.addClass('light-mode');
      setTheme('light');
    }
  }
});
