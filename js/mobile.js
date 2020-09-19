const $navLinksMb = $('.nav-link-mb');
const $stickyNavbar = $('.fixed-top');
const $ctaBtn = $('.cta');

let oldScrollPosition = 0;
let isScrollingUp = false;
let isHeaderVisible = true;

window.addEventListener('scroll', () => {
  isScrollingUp = oldScrollPosition > window.scrollY;
  oldScrollPosition = window.scrollY;

  if (!isScrollingUp && window.scrollY > 50 && isHeaderVisible) {
    $stickyNavbar.addClass('invisible');
    isHeaderVisible = false;
  }

  if (isScrollingUp && !isHeaderVisible) {
    $stickyNavbar.removeClass('invisible');
    isHeaderVisible = true;
  }
});

$(document).ready(function() {
  $($ctaBtn).on('click', function() {
    window.location.href = `/${$(this).attr('name')}`;
  });

  $($navLinksMb).on('click', function() {
    if ($(this).attr('id') === 'resume') {
      return;
    }
    window.location.href = `/${$(this).attr('id')}`;
  });
});
