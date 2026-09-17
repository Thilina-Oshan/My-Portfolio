// Function to load external HTML content into an element
function includeHTML(elementId, filePath) {
    fetch(filePath)
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
    includeHTML("navbar-placeholder", "includes/navbar.html");
    includeHTML("footer-placeholder", "includes/footer.html");
});