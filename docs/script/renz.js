// Smooth Scroll for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetHref = link.getAttribute('href');
        if (targetHref.startsWith('#')) {
            document.querySelector(targetHref).scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            // Redirect to an external or relative page
            window.location.href = targetHref;
        }
    });
});

// Event listener for More Info button
document.getElementById('moreInfoBtn').addEventListener('click', () => {
    alert("Discover more about Renz's journey and projects!");
});

// Event listener for Follow button
document.getElementById('followBtn').addEventListener('click', () => {
    alert("Thanks for following Renz! Stay updated with the latest projects.");
});

// Console message
console.log("Portfolio is running smoothly!");