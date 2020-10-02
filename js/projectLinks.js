jQuery(document).on('click', '.project-links', function(e) {
  e.preventDefault();
  let projectLinkName = jQuery(this).attr('name');
  return $load.load(`/projects/${projectLinkName} #${projectLinkName}Div`);
});
