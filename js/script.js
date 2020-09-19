const $navLinks = $('.nav-link');
const $load = $('#load');

if (gsap) {
  let tl = gsap.timeline({ duration: 0.05 });
  tl
    .from('.left-div', { x: -20, opacity: 0, duration: 0.2 })
    .from('.right-div', { x: 20, opacity: 0, duration: 0.2 }, '-=0.2')
    .from('.toggle-label', { scale: 0, opacity: 0 })
    .from('.anim', { y: -20, opacity: 0, stagger: 0.05 });
}

$(document).ready(function() {
  $load.load('/me #meDiv');

  $($navLinks).on('click', function() {
    $('.nav-link.active').removeClass('active');
    $(this).addClass('active');
    if ($(this).attr('id') === 'resume') {
      console.log('eee');
      $load.empty();
      return $load.append('<iframe width="100%" height="100%" style="border: none;" src="/resume"></iframe>');
    }
    return $load.load(`/${$(this).attr('id')} #${$(this).attr('id')}Div`);
  });
});
