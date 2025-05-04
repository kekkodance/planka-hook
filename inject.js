// Create a link element
var link = document.createElement('link');

// Set attributes for the external stylesheet
link.rel = "stylesheet";
link.type = "text/css";
link.href = "https://cdn.jsdelivr.net/gh/kekkodance/planka-hook@latest/style.css";

// Add it to the <head>
document.getElementsByTagName('head')[0].appendChild(link);

// DOM ready
document.addEventListener("DOMContentLoaded", function() {
    // Change the document title
    document.title = "TwistedFurby's Trello Knockoff";

    // Change the logo link text
    const logoLink = document.querySelector('a.Header_logo__shVBB.Header_title__l+wMf');
    if (logoLink) {
        logoLink.innerText = 'TwistedFurby';
    }

    // Hide all "About Planka" links
    document.querySelectorAll("a").forEach(a => {
        if (a.textContent.includes("About Planka")) {
            a.style.display = "none";
        }
    });
});
