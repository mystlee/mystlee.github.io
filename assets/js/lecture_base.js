window.addEventListener('DOMContentLoaded', () => {
    fetch('/lecture/2025_spring/web.html')
        .then(res => res.text())
        .then(html => {
            document
                .getElementById('web-modal-placeholder')
                .innerHTML = html;
        });
});

function copyLink(url) {
    const fullUrl = window.location.origin + url;
    navigator
        .clipboard
        .writeText(fullUrl)
        .then(() => {
            alert('Link copied to clipboard:\n' + fullUrl);
        })
        .catch(err => {
            console.error('Copy failed', err);
            alert('Failed to copy link.');
        });
}