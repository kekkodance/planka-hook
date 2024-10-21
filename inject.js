document.addEventListener("DOMContentLoaded", function() {
    // Change the document title
    document.title = "hello world";

    // Change the link text if it exists
    const logoLink = document.querySelector('a.Header_logo__shVBB.Header_title__l+wMf');
    if (logoLink) {
        logoLink.innerText = 'TwistedFurby';
    }
});
