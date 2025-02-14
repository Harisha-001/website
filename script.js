let shareCount = 0;
const minShares = 1;
const maxShares = 2;
const groupLink = "https://whatsapp.com/channel/0029Vb5FIc63QxS8TU3Teu1M"; // Replace with your actual group link

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
