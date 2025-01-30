let shareCount = 0;

document.getElementById("share-btn").addEventListener("click", function() {
    // প্রথমে Monetag অ্যাড লিংকে যাবে
    window.open("https://poawooptugroo.com/4/8871192", "_blank");

    // ৫ বার শেয়ার হয়ে গেলে আর শেয়ার অপশন না আনবে
    if (shareCount >= 5) {
        alert("✅ আপনি ইতোমধ্যে ৫ বার শেয়ার করেছেন! পরবর্তী ধাপে যান।");
        return;
    }

    // ১ সেকেন্ড পর শেয়ার অপশন চালু করবে
    setTimeout(() => {
        if (navigator.share) {
            navigator.share({
                title: "ফ্রি ১০০GB MB নিন!",
                text: "আমি ফ্রি ১০০GB MB পেয়েছি, আপনিও নিয়ে নিন!",
                url: window.location.href
            }).then(() => {
                // শেয়ার করলে কাউন্ট বাড়াবে
                shareCount++;
                document.getElementById("share-count").innerText = shareCount + "/5 শেয়ার সম্পন্ন";

                // ✅ প্রত্যেকবার শেয়ার করার পর নতুন অ্যাড লোড করবে
                loadNewAd();

                // যদি ৫ বার শেয়ার হয়, তাহলে ২ সেকেন্ড পর নতুন পেজে নিয়ে যাবে
                if (shareCount === 5) {
                    alert("✅ আপনি ৫ জনকে শেয়ার করেছেন! অফার পেতে পরবর্তী ধাপে যান।");
                    document.getElementById("share-btn").disabled = true; // শেয়ার বাটন বন্ধ করবে

                    setTimeout(() => {
                        window.location.href = "/final.html"; // এখানে ফাইনাল পেজের লিংক বসাও
                    }, 2000);
                }
            }).catch((error) => {
                console.log("শেয়ার বাতিল হয়েছে:", error);
            });
        } else {
            alert("⚠️ দুঃখিত, আপনার ব্রাউজারে শেয়ার ফিচার সাপোর্ট করে না!");
        }
    }, 1000); // ১ সেকেন্ড অপেক্ষা করবে
});
  



// ✅ নতুন অ্যাড লোড করার ফাংশন (Monetag অ্যাড যুক্ত)
function loadNewAd() {
    let adContainer = document.getElementById("dynamic-ad");
    adContainer.innerHTML = ""; // পুরাতন অ্যাড রিসেট করবে

    let adScript = document.createElement("script");

    // 🔴 এখানে তোমার Monetag অ্যাড স্ক্রিপ্ট যুক্ত করা হয়েছে
    adScript.innerHTML = `(function(d,z,s){s.src='https://'+d+'/401/'+z;try{(document.body||document.documentElement).appendChild(s)}catch(e){}})('gizokraijaw.net',8868822,document.createElement('script'))`;

    adContainer.appendChild(adScript);
}