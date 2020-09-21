const $navLinks = jQuery('.nav-link');
const $load = jQuery('#load');

if (gsap) {
  let tl = gsap.timeline({ duration: 0.05 });
  tl
    .from('.left-div', { x: -20, opacity: 0, duration: 0.2 })
    .from('.right-div', { x: 20, opacity: 0, duration: 0.2 }, '-=0.2')
    .from('.toggle-label', { scale: 0, opacity: 0 })
    .from('.anim', { y: -20, opacity: 0, stagger: 0.05 });
}

jQuery(document).ready(function() {
  $load.load('/me #meDiv');

  jQuery($navLinks).on('click', function() {
    jQuery('.nav-link.active').removeClass('active');
    jQuery(this).addClass('active');
    if (jQuery(this).attr('id') === 'resume') {
      $load.empty();
      return $load.append('<iframe width="100%" height="100%" style="border: none;" src="./pdfs/resume.pdf"></iframe>');
    }
    if (jQuery(this).attr('id') === 'contact') {
      $load.load(`/${jQuery(this).attr('id')} #${jQuery(this).attr('id')}Div`);
      jQuery.getScript('https://cdnjs.cloudflare.com/ajax/libs/punycode/1.4.1/punycode.min.js').then(() => {
        jQuery.getScript('https://cdn.jotfor.ms/js/vendor/maskedinput.min.js?v=3.3.20399').then(() => {
          jQuery.getScript('https://cdn.jotfor.ms/js/vendor/jquery.maskedinput.min.js?v=3.3.20399').then(() => {
            jQuery.getScript('https://cdn.jotfor.ms/static/prototype.forms.js').then(() => {
              jQuery.getScript('https://cdn.jotfor.ms/static/jotform.forms.js?3.3.20399').then(() => {
                jQuery.getScript('/js/jotform.js');
              });
            });
          });
        });
      });
    }
    return $load.load(`/${jQuery(this).attr('id')} #${jQuery(this).attr('id')}Div`);
  });
});
