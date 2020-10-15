jQuery(document).ready(function() {
    jQuery('.nav-link-not-found').on('click', function() {
        let notFoundLinkId = jQuery(this).attr('id');
        window.location.replace(`/?tab=${notFoundLinkId}`);
    })
});