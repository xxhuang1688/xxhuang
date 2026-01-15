document.addEventListener("DOMContentLoaded", function() {
    fetch('nav.html')
        .then(response => {
            if (!response.ok) throw new Error("Nav file not found");
            return response.text();
        })
        .then(data => {
            document.getElementById('nav-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading navigation:', error));
});