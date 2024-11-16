// Mô tả cho từng video
const videoDescriptions = {
    "clme x yasuo tiktok": "Đây là một video highlight về nhân vật Yasuo.",
    "COWBELL WARRIOR - Valorant Edit": "Video chỉnh sửa các khoảnh khắc chơi Valorant với âm nhạc mạnh mẽ.",
    "EU SENTO GABU fin_2": "Video này trình bày những khoảnh khắc ấn tượng của nhân vật Gabu.",
    "Hatchback valorant": "Video này trình bày những khoảnh khắc ấn tượng của nhân vật Hatchback.",
    "money so big": "Video này trình bày những khoảnh khắc ấn tượng của nhân vật Money so big.",
    "WHAT IT IS - Valorant Edit": "Video này trình bày những khoảnh khắc ấn tượng của nhân vật What it is.",
    "5v5 2024": "Video này trình bày những khoảnh khắc ấn tượng của nhân vật 5v5 2024.",
    "Helen Hồng Liên Tiên Tử": "Video này trình bày những khoảnh khắc ấn tượng của nhân vật Helen Hồng Liên Tiên Tử.",
    "Tulen Tiêu Dao Vũ Thần": "Video này trình bày những khoảnh khắc ấn tượng của nhân vật Tulen Tiêu Dao Vũ Thần.",
    "SEPHERA BÁCH NHẠN NGÂN LINH": "Video này trình bày những khoảnh khắc ấn tượng của nhân vật SEPHERA BÁCH NHẠN NGÂN LINH.",
    "Sổ Sứ Mệnh 49": "Video này trình bày những khoảnh khắc ấn tượng của nhân vật Sổ Sứ Mệnh 49.",
    "HIỆU ỨNG CHIÊU THỨC RAZ BÃO VŨ CUỒNG LÔI": "Video này trình bày những khoảnh khắc ấn tượng của nhân vật HIỆU ỨNG CHIÊU THỨC RAZ BÃO VŨ CUỒNG LÔI.",
    "MURAD TUYỆT THẾ THẦN BINH": "Video này trình bày những khoảnh khắc ấn tượng của nhân vật MURAD TUYỆT THẾ THẦN BINH.",
    "Erin Thánh Quang Tinh Linh": "Video này trình bày những khoảnh khắc ấn tượng của nhân vật Erin Thánh Quang Tinh Linh.",
    "Sổ sứ mệnh 57": "Video này trình bày những khoảnh khắc ấn tượng của nhân vật Sổ sứ mệnh 57.",
    "Paine Tử Xà Bá Tước": "Video này trình bày những khoảnh khắc ấn tượng của nhân vật Paine Tử Xà Bá Tước.",
    "Grakk Thần Ẩm Thực": "Video này trình bày những khoảnh khắc ấn tượng của nhân vật Grakk Thần Ẩm Thực.",
    "Arduin Bạch Vệ Chiến Giáp": "Video này trình bày những khoảnh khắc ấn tượng của nhân vật Arduin Bạch Vệ Chiến Giáp.",
    "Điểm tin cập nhật phiên bản Lễ Hội 5V5": "Video này trình bày những khoảnh khắc ấn tượng của nhân vật Điểm tin cập nhật phiên bản Lễ Hội 5V5.",
    "BUILD TEAM BỒ ĐÀO NHA": "Video này trình bày những khoảnh khắc ấn tượng của nhân vật BUILD TEAM BỒ ĐÀO NHA.",
    "ĐẬP ĐI XÂY LẠI ACC CHÍNH": "Video này trình bày những khoảnh khắc ấn tượng của nhân vật ĐẬP ĐI XÂY LẠI ACC CHÍNH.",
    "MỞ 5 VÒNG BI LẮC FCO": "Video này trình bày những khoảnh khắc ấn tượng của nhân vật MỞ 5 VÒNG BI LẮC FCO.",
    "Highlight Showmatch Rực Lửa Cùng Ryy Và Châu Mòe": "Video này trình bày những khoảnh khắc ấn tượng của nhân vật Highlight Showmatch Rực Lửa Cùng Ryy Và Châu Mòe.",
    "MỞ GÌ BUILD ĐẤY": "Video này trình bày những khoảnh khắc ấn tượng của nhân vật MỞ GÌ BUILD ĐẤY.",
    "TEST 3 VÒNG SỰ KIỆN POWERSHOT": "Video này trình bày những khoảnh khắc ấn tượng của nhân vật TEST 3 VÒNG SỰ KIỆN POWERSHOT.",
    "MUỐN ĐƯỢC GẶP EM - Hiderway": "Video này trình bày những khoảnh khắc ấn tượng của nhân vật MUỐN ĐƯỢC GẶP EM - Hiderway.",
    "Không Ai Nói Chia Tay (HuyPT Remix)": "Video này trình bày những khoảnh khắc ấn tượng của nhân vật Không Ai Nói Chia Tay (HuyPT Remix).",
    "CÁNH HOA HÉO TÀN - KHÁNH PHƯƠNG X DOMINO REMIX": "Video này trình bày những khoảnh khắc ấn tượng của nhân vật CÁNH HOA HÉO TÀN - KHÁNH PHƯƠNG X DOMINO REMIX."
};

// Link Youtube cho từng video
const videoLinks = {
    "clme x yasuo tiktok": "https://www.youtube.com/embed/491PNZ8ThCs?autoplay=1&loop=1",
    "COWBELL WARRIOR - Valorant Edit": "https://www.youtube.com/embed/qzirNgQROIc?autoplay=1&loop=1",
    "EU SENTO GABU fin_2": "https://www.youtube.com/embed/uFzWNxwAwNI?autoplay=1&loop=1",
    "Hatchback valorant": "https://www.youtube.com/embed/OUTFb__b6OQ?autoplay=1&loop=1",
    "money so big": "https://www.youtube.com/embed/ySB7BwjxFCk?autoplay=1&loop=1",
    "WHAT IT IS - Valorant Edit": "https://www.youtube.com/embed/YV_B1OU7ro8?autoplay=1&loop=1",
    "5v5 2024": "https://www.youtube.com/embed/OUTFb__b6OQ?autoplay=1&loop=1",
    "Helen Hồng Liên Tiên Tử": "https://www.youtube.com/embed/Gw9itxmel8M?autoplay=1&loop=1",
    "Tulen Tiêu Dao Vũ Thần": "https://www.youtube.com/embed/DCa1LPYcxvg?autoplay=1&loop=1",
    "SEPHERA BÁCH NHẠN NGÂN LINH": "https://www.youtube.com/embed/njNQ-_eCgqE?autoplay=1&loop=1",
    "Sổ Sứ Mệnh 49": "https://www.youtube.com/embed/_eE_i4ArHxo&t=5s?autoplay=1&loop=1",
    "HIỆU ỨNG CHIÊU THỨC RAZ BÃO VŨ CUỒNG LÔI": "https://www.youtube.com/embed/fCxsdHgEzZg?autoplay=1&loop=1",
    "MURAD TUYỆT THẾ THẦN BINH": "https://www.youtube.com/embed/6EJoyWdQAYg&t=7s&t=7s?autoplay=1&loop=1",
    "Erin Thánh Quang Tinh Linh": "https://www.youtube.com/embed/qRMf3aTm0Bk&t=17s?autoplay=1&loop=1",
    "Sổ sứ mệnh 57": "https://www.youtube.com/embed/Lf-JImv0sQ4&t=1s?autoplay=1&loop=1",
    "Paine Tử Xà Bá Tước": "https://www.youtube.com/embed/AH8LkrVM6vY&t=1s?autoplay=1&loop=1",
    "Grakk Thần Ẩm Thực": "https://www.youtube.com/embed/uMGTL4PgtE4?autoplay=1&loop=1",
    "Arduin Bạch Vệ Chiến Giáp": "https://www.youtube.com/embed/v=93-UPx-KFsA?autoplay=1&loop=1",
    "Điểm tin cập nhật phiên bản Lễ Hội 5V5": "https://www.youtube.com/embed/fbwKcdSsyNE?autoplay=1&loop=1",
    "BUILD TEAM BỒ ĐÀO NHA": "https://www.youtube.com/embed/gHxGVsgW9SQ&t=38s?autoplay=1&loop=1",
    "ĐẬP ĐI XÂY LẠI ACC CHÍNH": "https://www.youtube.com/embed/AFm5cwtDezc&t=1022s?autoplay=1&loop=1",
    "MỞ 5 VÒNG BI LẮC FCO": "https://www.youtube.com/embed/1IUdm58ohHY&t=35s?autoplay=1&loop=1",
    "Highlight Showmatch Rực Lửa Cùng Ryy Và Châu Mòe": "https://www.youtube.com/embed/KMw7jLN1fkE&t=33s?autoplay=1&loop=1",
    "MỞ GÌ BUILD ĐẤY": "https://www.youtube.com/embed/AFm5cwtDezc&t=1022s?autoplay=1&loop=1",
    "TEST 3 VÒNG SỰ KIỆN POWERSHOT": "https://www.youtube.com/embed/1IUdm58ohHY&t=35s?autoplay=1&loop=1",
    "MUỐN ĐƯỢC GẶP EM - Hiderway": "https://www.youtube.com/embed/eQ4qN9BbKMs?autoplay=1&loop=1",
    "Không Ai Nói Chia Tay (HuyPT Remix)": "https://www.youtube.com/embed/XXePDetkJIU?autoplay=1&loop=1",
    "CÁNH HOA HÉO TÀN - KHÁNH PHƯƠNG X DOMINO REMIX": "https://www.youtube.com/embed/6ZYq4hHUYNs?autoplay=1&loop=1"
};

// Đường dẫn video trong dự án
// const videoSources = {
//     "Banner Bijan": "./media/banner Bijan.mp4",
//     "banner Helen": "./media/banner Helen.mp4",
//     "ssm 49": "./media/ssm 49.mp4",
//     "ssm 66": "./media/ssm 66.mp4",
//     "lobby errol": "./media/lobby errol.mp4",
//     "lobby veres": "./media/lobby veres.mp4",
// };

// Hàm mở popup và hiển thị mô tả
function openPopup(videoTitle) {
    // Hiển thị popup
    document.getElementById("videoPopup").style.display = "flex";
    
    // Cập nhật tiêu đề và mô tả
    document.getElementById("videoTitle").innerText = videoTitle;
    
    // Cập nhật link cho iframe
    document.getElementById("youtubeIframe").src = videoLinks[videoTitle];
}

// function openPopupVideo(videoTitle) {
//     document.getElementById("videoPopupVideo").style.display = "flex";
//     document.getElementById("videoTitle").innerText = videoTitle;
//     document.getElementById("sourceVideo").src = videoSources[videoTitle];
//     console.log("Opening popup for:", videoTitle);
//     console.log("Link file:", videoSources[videoTitle]);
// }

// Hàm đóng popup
function closePopup() {
    document.getElementById("videoPopup").style.display = "none";
    
    // Xóa link trong iframe để dừng video khi đóng popup
    document.getElementById("youtubeIframe").src = "";
}

// function closePopupVideo() {
//     const videoPopup = document.getElementById("videoPopupVideo");
//     const popupVideo = document.getElementById("videoPopup");
  
//     // Dừng video khi đóng popup
//     // popupVideo.pause();
//     popupVideo.src = ""; // Reset video source
  
//     // Ẩn popup
//     videoPopup.style.display = "none";
//     console.log("Closing popup");
// }
