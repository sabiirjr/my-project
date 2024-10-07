function showHome() {
    document.getElementById('content').innerHTML = `
        <div id="home">
            <h2>Welcome to GreenThumb!</h2>
            <p>Your community gardening platform.</p>
        </div>
    `;
}

function showGardenLocator() {
    fetch('/api/gardens')
        .then(response => response.json())
        .then(gardens => {
            let gardenList = '<h2>Garden Locator</h2><ul>';
            gardens.forEach(garden => {
                gardenList += `<li>${garden.name} - ${garden.location}</li>`;
            });
            gardenList += '</ul>';
            document.getElementById('content').innerHTML = gardenList;
        });
}

function showResources() {
    document.getElementById('content').innerHTML = `
        <div id="resources">
            <h2>Resource Library</h2>
            <p>Coming soon!</p>
        </div>
    `;
}
