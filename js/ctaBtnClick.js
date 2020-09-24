const $projectsCtaBtn = jQuery('.projects .cta');
jQuery($projectsCtaBtn).on('click', function() {
  location = `/${jQuery(this).attr('name')}`;
  location === '/cheapresume.net' ? window.open('https://cheapresume.net') : (window.location.href = location);
  console.log('HERE');
});

var loaded = true;
