// Function to load external HTML content into an element
function includeHTML(elementId, filePath, callback) {
    return fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${filePath}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            const targetElement = document.getElementById(elementId);
            if (targetElement) {
                targetElement.innerHTML = data;
            }
            // Execute callback function after dynamic content is inserted
            if (callback) callback();
        })
        .catch(error => console.error("Error loading component:", error));
}

// Function to handle auto-closing mobile navbar on link click
function initMobileNavAutoClose() {
    const navLinks = document.querySelectorAll('#navbarNav .nav-link-custom');
    const navbarCollapse = document.getElementById('navbarNav');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Check if mobile menu is currently expanded
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                // Get or initialize Bootstrap Collapse instance and hide menu
                const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) || new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        });
    });
}

// Load Navbar and Footer when DOM is ready
document.addEventListener("DOMContentLoaded", () => {

    // 1. Reset URL hash tag on page refresh
    if (window.location.hash) {
        history.replaceState(null, document.title, window.location.pathname + window.location.search);
        window.scrollTo(0, 0);
    }

    // 2. Load Navbar with auto-close callback, then load Footer
    includeHTML("navbar-placeholder", "./includes/navbar.html", initMobileNavAutoClose);
    includeHTML("footer-placeholder", "./includes/footer.html");
});