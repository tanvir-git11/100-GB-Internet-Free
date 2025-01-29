let clickCount = 0;

document.getElementById("claim-btn").addEventListener("click", function() {
    if (clickCount === 0) {
        // প্রথমবার ক্লিকে অ্যাড শো করানো
        window.open("https://www.monetag.com/ad.html", "_blank"); // এখানে Monetag অ্যাড URL বসাও
        alert("⚡ অফার চালু হচ্ছে! আবার ক্লিক করুন।");
        clickCount++;
    } else {
        // দ্বিতীয়বার ক্লিকে নির্দিষ্ট পেজে পাঠানো
        window.location.href = "https://example.com"; // এখানে তোমার লিংক বসাও
    }
});

// নোটিফিকেশন অ্যাড বন্ধ করার ফাংশন
function closeNotification() {
    document.getElementById("notification-ad").style.display = "none";
}

// ৫ সেকেন্ড পরে নোটিফিকেশন অ্যাড দেখাও
setTimeout(function() {
    document.getElementById("notification-ad").classList.remove("hidden");
}, 5000);
