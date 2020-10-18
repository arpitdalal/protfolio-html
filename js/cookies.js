const $main = jQuery('.main');
const $toggleThemeSwitch = jQuery('.toggleState');
const $cookieConsent = jQuery('.cookie-consent');

const getCookieValue = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
};

const setTheme = (mode) => {
  $toggleThemeSwitch.prop('checked', mode == 'dark' ? false : true);
  jQuery('.toggle-label').attr('title', `Toggle to ${mode == 'dark' ? 'light' : 'dark'} mode`);
  jQuery('#toggle-title').text(`Toggle to ${mode == 'dark' ? 'light' : 'dark'} mode`);
  document.cookie = `theme=${mode}; path=/; expires=Wed, 14 Jun 3017 07:00:00 GMT; SameSite=Strict;`;
};

jQuery('.cookie-okay').on('click', () => {
  $cookieConsent.css('display', 'none');
  document.cookie = 'consent=yes; path=/; expires=Wed, 14 Jun 3017 07:00:00 GMT; SameSite=Strict;';
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
  } else {
    $cookieConsent.css('display', 'none');
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
