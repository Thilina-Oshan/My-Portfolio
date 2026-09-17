// Function to load external HTML content into an element
function includeHTML(elementId, filePath) {
    return fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${filePath}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error("Error loading component:", error));
}

// Load Navbar and Footer when DOM is ready
document.addEventListener("DOMContentLoaded", () => {

    // 1. Reset URL hash tag on page refresh to always load default site view
    if (window.location.hash) {
        history.replaceState(null, document.title, window.location.pathname + window.location.search);
        window.scrollTo(0, 0);
    }

    // 2. Load Navbar and Footer components dynamically
    includeHTML("navbar-placeholder", "includes/navbar.html");
    includeHTML("footer-placeholder", "includes/footer.html");
});