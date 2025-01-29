let clickCount = 0;

// পেজ লোড হলে 10 সেকেন্ড ওয়েট করবে
window.onload = function() {
    let button = document.getElementById("claim-btn");
    button.disabled = true; // শুরুতে বাটন ডিসেবল থাকবে
    button.innerText = "অনুগ্রহ করে অপেক্ষা করুন ১০ সেকেন্ড ...";

    setTimeout(function() {
        button.disabled = false; // ১০ সেকেন্ড পর এনাবেল হবে
        button.innerText = "এখনই নিন";
    }, 10000); // ১০ সেকেন্ড অপেক্ষা করবে
};

// বাটনের ক্লিক ইভেন্ট
document.getElementById("claim-btn").addEventListener("click", function() {
    if (clickCount === 0) {
        // প্রথমবার ক্লিকে অ্যাড শো করানো
        window.open("https://www.monetag.com/ad.html", "_blank"); // এখানে Monetag অ্যাড URL বসাও
       
        alert("⚡ অফার চালু হচ্ছে! আবার ক্লিক করুন।");
        clickCount++;
    } else {
        // দ্বিতীয়বার ক্লিকে নির্দিষ্ট পেজে পাঠানো
        window.location.href = "/shear.html"; // এখানে তোমার লিংক বসাও
    }
});
