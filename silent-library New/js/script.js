$(document).ready(function() {
    // Load header and footer using jQuery
    $('#header-placeholder').load('header.html', function() {
        // Optional: Add active class to current page link in navbar
        var path = window.location.pathname;
        var page = path.split("/").pop();
        $('.navbar-nav .nav-link').each(function() {
            var href = $(this).attr('href');
            if (href === page) {
                $(this).addClass('active');
            }
        });
    });
    $('#footer-placeholder').load('footer.html');

    // --- Event Filtering Logic for events.html ---
    // Only run this code if we are on the events.html page
    if ($('body').hasClass('events-page-body')) { // We'll add this class to the body tag in events.html
        $('.btn[data-filter]').on('click', function() {
            const filterType = $(this).data('filter');

            // Remove 'active' class from all filter buttons and add to the clicked one
            $('.btn[data-filter]').removeClass('active');
            $(this).addClass('active');

            // Show/hide event cards based on filter type
            $('.event-card').each(function() {
                if (filterType === 'all' || $(this).data('event-type') === filterType) {
                    $(this).show(); // Show the card
                } else {
                    $(this).hide(); // Hide the card
                }
            });
        });
    }
});