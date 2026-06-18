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

/**AUTOMATIC NAVIGATION HIGHLIGHTING */
function initNavigationHighlight() {
    const currentPath = window.location.pathname.split("/").pop() || 'index.html'; // default to index.html if path is empty
    const navLinks = document.querySelectorAll('.nav a, header a');

    navLinks.forEach(link => {
        const linkAttribute = link.getAttribute('href');
        if (linkAttribute === currentPath) {
            link.classList.add('active-nav-link');
            //inline styling fallback if explicit CSS class isn't defined yet
            link.style.fontWeight = 'bold';
            link.style.borderBottom = '2px solid var(--primary-color, #ff6b6b)';
        }
    });
}

/**VOLUNTEER FORM VALIDATION & ENHANCEMENT */
function initVolunteerValidation() {
    const form = document.getElementById('volunteer-form');

    form.addEventListener('submit', (event) => {
        //prevent default submission to execute custom script checks
        event.preventDefault();

        //target form elements using the explicit structural configurations
        const nameField = form.querySelector('input[type="text"]');
        const emailField = form.querySelector('input[type="email"]');
        const phoneField = form.querySelector('input[type="tel"]');
        const roleSelection = form.querySelector('select');
        const termsCheckbox = form.querySelector('input[type="checkbox"]');

        let hasErrors= false;
        let errorMessage = "Please correct the following errors:\n";

        //clean values
        const nameValue = nameField ? nameField.value.trim() : "";
        const emailValue = emailField ? emailField.value.trim() : "";

        //text validation
        if (nameField.length < 3) {
            hasErrors = true;
            errorMessage += "- Full Name must be at least 3 characters long.\n";
            if (nameField) nameField.style.borderColor = 'red';
        } else if (nameField) {
            nameField.style.borderColor = '';
        }

        //email format validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailValue)) {
            hasErrors = true;
            errorMessage += "- Please enter a valid email address.\n";
            if (emailField) emailField.style.borderColor = 'red';
        } else if (emailField) {
            emailField.style.borderColor = '';
        }

        //check verification (terms/consent)
        if (termsCheckbox && !termsCheckbox.checked) {
            hasErrors = true;
            errorMessage += "- You must accept the volunteering terms and conditions.\n";
        }

        //processing result
        if (hasErrors) {
            alert(errorMessage);
        } else {
            alert('Thank you for signing up, ${nameValue}! The Feed The Future team will contact you shortly.');
            form.reset(); //reset the form after successful submission
        }  
    });
}        

/**FINANCIAL MATRIX INTERACTION (impact.html) */
function initTableCalculations() {
    const table = document.querySelector('.impact-table');
    const rows = table.querySelectorAll('tbody tr');
    let generatedTotalMeals = 0;

    //iterate through each row to calculate total meals generated
    rows.forEach(row => {
        const mealCell = row.cells[1]; // assuumes cell index 1 maps to a quantitive data column
        if (mealCell) {
            const numericValue = parseInt(mealCell.textContent.replace(/[^0-9]/g, ''), 10);
            if (!isNaN(numericValue)) {
                generatedTotalMeals += numericValue;
            }
        }
    });

    // automatically updates calculations inside the semantic <tfoot> element
    const tfootTotalCell = table.querySelector('tfoot td.total-calculated-value');
    if (tfootTotalCell) {
        tfootTotalCell.textContent = generatedTotalMeals.toLocaleString() + " Meals Provided";
    }
}

/**PHOTOGRAPHIC DOCUMENTATION ENHANCEMENT (gallery.html) */
function initGalleryLightbox() {
    const images = document.querySelectorAll('.gallery-container img, gallery img, [src*="images/"]');

    images.forEach(img => {
        //enforce smooth structural interactions via pointer alterations
        img.style.cursor = 'pointer';
        img.style.transition = 'transform 0.2s ease-in-out';

        img.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.04)';
        });

        img.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1.0)';
        });

        img.addEventListener('click', () => {
            alert(`Viewing Image Asset: ${img.getAttribute('alt') || 'FEED THE FUTURE NPO Image'}`);
        });
    });
}
        
