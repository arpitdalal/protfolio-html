jQuery(document).on('click', '.project-links', function(e) {
  e.preventDefault();
  let projectLinkName = jQuery(this).attr('name');
  return $load.load(`/projects/${projectLinkName} #${projectLinkName}Div`);
});

jQuery(document).on('click', '.in-project-link', function(e) {
  e.preventDefault();
  let inProjectLinkName = jQuery(this).attr('name');
  return $load.load(`/${inProjectLinkName} #${inProjectLinkName}Div`);
});
