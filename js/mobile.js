jQuery(document).ready(function() {
  jQuery('.nav-link-mb').on('click', function() {
    if (jQuery(this).attr('id') === 'resume') {
      return;
    }
    window.location.href = `/${jQuery(this).attr('id')}`;
  });
});
