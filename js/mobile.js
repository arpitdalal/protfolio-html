const $navLinksMb = jQuery('.nav-link-mb');
const $stickyNavbar = jQuery('.fixed-top');
const $ctaBtn = jQuery('.cta');

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

jQuery(document).ready(function() {
  jQuery($ctaBtn).on('click', function() {
    window.location.href = `/${jQuery(this).attr('name')}`;
  });

  jQuery($navLinksMb).on('click', function() {
    if (jQuery(this).attr('id') === 'resume') {
      return;
    }
    window.location.href = `/${jQuery(this).attr('id')}`;
  });
});
