// Show popup on page load
window.onload = function () {
    setTimeout(showPopup, 500); // Delay to make it smooth
};

function showPopup() {
    const popup = document.getElementById('popup');
    // if (!localStorage.getItem('popupClosed')) {
    //     popup.style.display = 'block';
    // }
    popup.style.display = 'block';
    localStorage.removeItem('popupClosed');
}

// Close popup and store in localStorage
function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
    // localStorage.setItem('popupClosed', 'true'); // Remember user has closed it
}
