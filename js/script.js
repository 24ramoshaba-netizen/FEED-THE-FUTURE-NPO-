/*FEED THE FUTURE NPO javaScript file*/

document.addEventListener("DOMContentLoaded", () => {
    // highlight the current page in the navigation bar
    initNavigationHighlight();

    //validate the data entry application form on volunteer.html
    if (document.getElementById('volunteer-form')) {
        initVolunteerValidation();
    }

    //make the financial metric matrix on impact.html interactive
    if (document.querySelector('.impact-table')) {
        initTableCalculations();
    }

    //add dynamic interaction to the photograhic documentation gallery.html
    if (document.querySelector('.gallery-container')) {
        initGalleryLightbox();
    }
});