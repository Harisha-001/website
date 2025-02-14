let shareCount = 0;
const minShares = 10;
const maxShares = 15;
const groupLink = "https://chat.whatsapp.com/YOUR_GROUP_LINK"; // Replace with your actual group link

function selectOption(option) {
    if (option === 3) {
        document.getElementById("shareContainer").style.display = "block";
    }
}

function shareOnWhatsApp() {
    if (shareCount < maxShares) {
        const shareMessage = encodeURIComponent("Join this amazing WPL 2025 free report group: " + groupLink);
        const whatsappURL = `https://api.whatsapp.com/send?text=${shareMessage}`;
        window.open(whatsappURL, '_blank');
        shareCount++;
    }
    if (shareCount >= minShares) {
        document.getElementById("joinGroup").style.display = "block";
        document.getElementById("whatsappGroupLink").href = groupLink;
    }
}
