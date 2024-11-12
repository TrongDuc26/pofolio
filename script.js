// Mô tả cho từng video
const videoDescriptions = {
    "clme x yasuo tiktok": "Đây là một video highlight về nhân vật Yasuo.",
    "COWBELL WARRIOR - Valorant Edit": "Video chỉnh sửa các khoảnh khắc chơi Valorant với âm nhạc mạnh mẽ.",
    "EU SENTO GABU fin_2": "Video này trình bày những khoảnh khắc ấn tượng của nhân vật Gabu.",
    "Hatchback valorant": "Video này trình bày những khoảnh khắc ấn tượng của nhân vật Hatchback.",
    "money so big": "Video này trình bày những khoảnh khắc ấn tượng của nhân vật Money so big.",
    "WHAT IT IS - Valorant Edit": "Video này trình bày những khoảnh khắc ấn tượng của nhân vật What it is."
};

// Link Youtube cho từng video
const videoLinks = {
    "clme x yasuo tiktok": "https://www.youtube.com/embed/491PNZ8ThCs?autoplay=1&loop=1",
    "COWBELL WARRIOR - Valorant Edit": "https://www.youtube.com/embed/qzirNgQROIc?autoplay=1&loop=1",
    "EU SENTO GABU fin_2": "https://www.youtube.com/embed/uFzWNxwAwNI?autoplay=1&loop=1",
    "Hatchback valorant": "https://www.youtube.com/embed/OUTFb__b6OQ?autoplay=1&loop=1",
    "money so big": "https://www.youtube.com/embed/ySB7BwjxFCk?autoplay=1&loop=1",
    "WHAT IT IS - Valorant Edit": "https://www.youtube.com/embed/YV_B1OU7ro8?autoplay=1&loop=1"
};

// Hàm mở popup và hiển thị mô tả
function openPopup(videoTitle) {
    // Hiển thị popup
    document.getElementById("videoPopup").style.display = "flex";
    
    // Cập nhật tiêu đề và mô tả
    document.getElementById("videoTitle").innerText = videoTitle;
    document.getElementById("videoDescription").innerText = videoDescriptions[videoTitle];
    
    // Cập nhật link cho iframe
    document.getElementById("youtubeIframe").src = videoLinks[videoTitle];
}

// Hàm đóng popup
function closePopup() {
    document.getElementById("videoPopup").style.display = "none";
    
    // Xóa link trong iframe để dừng video khi đóng popup
    document.getElementById("youtubeIframe").src = "";
}
