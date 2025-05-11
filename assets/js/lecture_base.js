window.addEventListener('DOMContentLoaded', () => {
    fetch('/lecture/2025_spring/web.html')
        .then(res => res.text())
        .then(html => {
            document
                .getElementById('web25-modal-placeholder')
                .innerHTML = html;
        });
    fetch('/lecture/2025_spring/seminar.html')
        .then(res => res.text())
        .then(html => {
            document
                .getElementById('seminar25-modal-placeholder')
                .innerHTML = html;
        });
    fetch('/lecture/2025_spring/java.html')
        .then(res => res.text())
        .then(html => {
            document
                .getElementById('java25-modal-placeholder')
                .innerHTML = html;
        });
    fetch('/lecture/2025_spring/opensw.html')
        .then(res => res.text())
        .then(html => {
            document
                .getElementById('opensw25-modal-placeholder')
                .innerHTML = html;
        });
    fetch('/lecture/2025_spring/cloud.html')
        .then(res => res.text())
        .then(html => {
            document
                .getElementById('cloud25-modal-placeholder')
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