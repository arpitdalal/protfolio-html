const $load = jQuery('#load');
let tl = gsap.timeline({ duration: 0.05 });

if (gsap) {
  tl
    .from('.toggle-label', { scale: 0, opacity: 0 })
    .from('.anim', { y: -20, opacity: 0, stagger: 0.02 });
}

function getUrlVars() {
  var vars = [], hash;
  var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
  for(var i = 0; i < hashes.length; i++)
  {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
  }
  return vars;
}

jQuery(document).ready(function() {
  const tab = getUrlVars()['tab'];
  // removing the query part from the url
  const url = window.location.href.split('?')[0];
  window.history.replaceState({}, document.title, url);

  jQuery('.cookie-policy').on('click', function(e) {
    e.preventDefault();
    let policyId = jQuery(this).attr('id');
    jQuery('.nav-link.active').removeClass('active');
    $load.load(`/cookie-Policy #${policyId}Div`);
  })

  jQuery('.nav-link').on('click', function() {
    let navLinkId = jQuery(this).attr('id');
    jQuery('.nav-link.active').removeClass('active');
    jQuery(this).addClass('active');
    if (navLinkId === 'resume') {
      $load.empty();
      $load.append('<iframe width="100%" height="100%" style="border: none;" src="/pdfs/resume.pdf"></iframe>');
      return;
    }
    if (navLinkId === 'contact') {
      $load.load(`/${navLinkId} #${navLinkId}Div`);
      // check if scripts are already loaded before
      if (!window.JotForm) {
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
      return;
    }
    if (navLinkId === 'projects') {
      $load.load(`/${navLinkId} #${navLinkId}Div`);
      // check if script is already loaded before
      if (!window.projectLink) {
        jQuery.getScript('/js/projectLinks.js');
      }
      return;
    }
    $load.load(`/${navLinkId} #${navLinkId}Div`);
  });

  tab !== undefined ? jQuery(`span#${tab}`).click() : $load.load('/me #meDiv');

  // mobile
  jQuery('.nav-link-mb').on('click', function() {
    if (jQuery(this).attr('id') === 'resume') {
      return;
    }
    window.location.href = `/${jQuery(this).attr('id')}`;
  });

  // 404
  jQuery('.nav-link-not-found').on('click', function() {
    let notFoundLinkId = jQuery(this).attr('id');
    window.location.replace(`/?tab=${notFoundLinkId}`);
  });
});
