const $main = $('.main');
const $toggleThemeSwitch = $('.toggleState');
const $toggleThemeLabel = $('.toggle-label');
const $toggleTitle = $('#toggle-title');
const $cookieConsent = $('.cookie-consent');
const $cookieOkayBtn = $('.cookie-okay');

const getCookieValue = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
};

const setTheme = (mode) => {
  $toggleThemeSwitch.prop('checked', mode == 'dark' ? false : true);
  $toggleThemeLabel.attr('title', `Toggle to ${mode == 'dark' ? 'light' : 'dark'} mode`);
  $toggleTitle.text(`Toggle to ${mode == 'dark' ? 'light' : 'dark'} mode`);
  document.cookie = `theme=${mode}; expires=Wed, 14 Jun 3017 07:00:00 GMT`;
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

$(document).ready(function() {
  $('.collapse-button').on('click', () => {
    $('.animated-icon').toggleClass('open');
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
