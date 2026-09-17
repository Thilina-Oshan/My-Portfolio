// Function to load external HTML content into an element
function includeHTML(elementId, filePath, callback) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${filePath}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
            // Execute callback function after content is loaded
            if (callback) callback();
        })
        .catch(error => console.error("Error loading component:", error));
}

// Function to handle mobile menu auto-close on link click
function setupMobileNavAutoClose() {
    const navLinks = document.querySelectorAll('.nav-link-custom');
    const navbarCollapse = document.getElementById('navbarNav');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Check if the navbar menu is currently expanded
            if (navbarCollapse.classList.contains('show')) {
                // Get Bootstrap Collapse instance and hide it
                const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) || new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        });
    });
}

// Load Navbar and Footer when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    // Reset URL anchor hashtag on page refresh to load top/default state
    if (window.location.hash) {
        history.replaceState("", document.title, window.location.pathname + window.location.search);
        window.scrollTo(0, 0);
    }

    // Load navbar and apply auto-close handler after loading completes
    includeHTML("navbar-placeholder", "includes/navbar.html", setupMobileNavAutoClose);
    includeHTML("footer-placeholder", "includes/footer.html");
});