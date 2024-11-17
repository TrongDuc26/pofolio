// Mô tả cho từng video
const videoDescriptions = {
    "CLME x Yasuo": "Đây là một video highlight về nhân vật Yasuo.",
    "COWBELL WARRIOR - Valorant Edit": "Video chỉnh sửa các khoảnh khắc chơi Valorant với âm nhạc mạnh mẽ.",
    "EU SENTO GABU! - Valorant Edit": "Video này trình bày những khoảnh khắc ấn tượng của nhân vật Gabu.",
    "HATCHBACK ✨ - Valorant edit": "Video này trình bày những khoảnh khắc ấn tượng của nhân vật Hatchback.",
    "money so big 💸 - Valorant edit": "Video này trình bày những khoảnh khắc ấn tượng của nhân vật money so big 💸 - Valorant edit.",
    "WHAT IT IS - Valorant Edit": "Video này trình bày những khoảnh khắc ấn tượng của nhân vật What it is.",
    "5v5 2024": "Video này trình bày những khoảnh khắc ấn tượng của nhân vật 5v5 2024.",
    "🌸 Helen Hồng Liên Tiên Tử | Hiệu ứng chiêu thức 🌸 - Garena Liên Quân Mobile": "Video này trình bày những khoảnh khắc ấn tượng của nhân vật 🌸 Helen Hồng Liên Tiên Tử | Hiệu ứng chiêu thức 🌸 - Garena Liên Quân Mobile.",
    "Hiệu Ứng Chiêu Thức - Tulen Tiêu Dao Vũ Thần": "Video này trình bày những khoảnh khắc ấn tượng của nhân vật Tulen Tiêu Dao Vũ Thần.",
    "🕊 HIỆU ỨNG CHIÊU THỨC | SEPHERA BÁCH NHẠN NGÂN LINH 🕊 - Garena Liên Quân Mobile": "Video này trình bày những khoảnh khắc ấn tượng của nhân vật 🕊 HIỆU ỨNG CHIÊU THỨC | SEPHERA BÁCH NHẠN NGÂN LINH 🕊 - Garena Liên Quân Mobile.",
    "Hiệu Ứng Chiêu Thức | Sổ Sứ Mệnh 49: Chiêu Tài Đại Quán - Garena Liên Quân Mobile": "Video này trình bày những khoảnh khắc ấn tượng của nhân vật Sổ Sứ Mệnh 49.",
    "HIỆU ỨNG CHIÊU THỨC RAZ BÃO VŨ CUỒNG LÔI - Garena Liên Quân Mobile": "Video này trình bày những khoảnh khắc ấn tượng của nhân vật HIỆU ỨNG CHIÊU THỨC RAZ BÃO VŨ CUỒNG LÔI - Garena Liên Quân Mobile.",
    "MURAD TUYỆT THẾ THẦN BINH | Hiệu ứng chiêu thức": "Video này trình bày những khoảnh khắc ấn tượng của nhân vật MURAD TUYỆT THẾ THẦN BINH | Hiệu ứng chiêu thức.",
    "✨ Tâm điểm tướng | Erin Thánh Quang Tinh Linh ✨ - Garena Liên Quân Mobile": "Video này trình bày những khoảnh khắc ấn tượng của nhân vật Erin Thánh Quang Tinh Linh.",
    "Ingame Trailer | Sổ sứ mệnh 57: Chuyện tình Ô Thước✨- Garena Liên Quân Mobile": "Video này trình bày những khoảnh khắc ấn tượng của nhân vật Ingame Trailer | Sổ sứ mệnh 57: Chuyện tình Ô Thước✨- Garena Liên Quân Mobile.",
    "INGAME TRAILER | Paine Tử Xà Bá Tước 🔮 - Garena Liên Quân Mobile": "Video này trình bày những khoảnh khắc ấn tượng của nhân vật INGAME TRAILER | Paine Tử Xà Bá Tước 🔮 - Garena Liên Quân Mobile.",
    "INGAME TRAILER | Grakk Thần Ẩm Thực 🥘 - Garena Liên Quân Mobile": "Video này trình bày những khoảnh khắc ấn tượng của nhân vật Grakk Thần Ẩm Thực.",
    "VIDEO | Tổng hợp phiên bản cập nhật - Ngày Hội Liên Quân🔥 - Garena Liên Quân Mobile": "Video này trình bày những khoảnh khắc ấn tượng của nhân vật VIDEO | Tổng hợp phiên bản cập nhật - Ngày Hội Liên Quân🔥 - Garena Liên Quân Mobile.",
    "HƯỚNG DẪN SỰ KIỆN CHUNG SỨC KỶ NIỆM - Garena Liên Quân Mobile": "Video này trình bày những khoảnh khắc ấn tượng của nhân vật Điểm tin cập nhật phiên bản Lễ Hội 5V5.",
    "CẦM 10K TỎI BUILD TEAM BỒ ĐÀO NHA EURO 2024 TRI ÂN ANH LIÊM | LEEHARIII": "Video này trình bày những khoảnh khắc ấn tượng của nhân vật BUILD TEAM BỒ ĐÀO NHA.",
    "ĐẬP ĐI XÂY LẠI ACC CHÍNH VỚI FULL TEAM NTG + 8 SIÊU ... | LEEHARIII": "Video này trình bày những khoảnh khắc ấn tượng của nhân vật ĐẬP ĐI XÂY LẠI ACC CHÍNH.",
    "MỞ 5 VÒNG BI LẮC FCO CÙNG ANH MC QUEEN VÀ CÁI KẾT | LEEHARIII": "Video này trình bày những khoảnh khắc ấn tượng của nhân vật MỞ 5 VÒNG BI LẮC FCO.",
    "Highlight Showmatch Rực Lửa Cùng Ryy Và Châu Mòe": "Video này trình bày những khoảnh khắc ấn tượng của nhân vật Highlight Showmatch Rực Lửa Cùng Ryy Và Châu Mòe.",
    "MỞ GÌ BUILD ĐẤY CÙNG FULL VÒNG SỰ KIỆN POWERSHOT VỚI SỰ TÀI TRỢ CỦA BẠN MINHLEE | LEEHARIII": "Video này trình bày những khoảnh khắc ấn tượng của nhân vật MỞ GÌ BUILD ĐẤY.",
    "TEST 3 VÒNG SỰ KIỆN POWERSHOT VỚI SỰ TÀI TRỢ CỦA NGỌC HIỆP AUTO VÀ BỈ NGẠN | LEEHARIII": "Video này trình bày những khoảnh khắc ấn tượng của nhân vật TEST 3 VÒNG SỰ KIỆN POWERSHOT.",
    "MUỐN ĐƯỢC GẶP EM - Hiderway | MV Official": "Video này trình bày những khoảnh khắc ấn tượng của nhân vật MUỐN ĐƯỢC GẶP EM - Hiderway.",
    "Không Ai Nói Chia Tay (HuyPT Remix) - Linh Hương Luz Cover | Vì không ai trong chúng ta nhận lỗi": "Video này trình bày những khoảnh khắc ấn tượng của nhân vật Không Ai Nói Chia Tay (HuyPT Remix).",
    "CÁNH HOA HÉO TÀN - KHÁNH PHƯƠNG X DOMINO REMIX": "Video này trình bày những khoảnh khắc ấn tượng của nhân vật CÁNH HOA HÉO TÀN - KHÁNH PHƯƠNG X DOMINO REMIX.",
    "Tứ Phương Đại Chiến 2024" : "Desc",
    "Tết 2024" : "Desc",
    "Sổ sứ mệnh 66" : "Desc",
    "Sổ sứ mệnh 49" : "Desc",
    "lobby veres" : "Desc",
    "lobby errol" : "Desc",
};

// Link Youtube cho từng video
const videoLinks = {
    "CLME x Yasuo": "https://www.youtube.com/embed/491PNZ8ThCs?autoplay=1&loop=1",
    "COWBELL WARRIOR - Valorant Edit": "https://www.youtube.com/embed/qzirNgQROIc?autoplay=1&loop=1",
    "EU SENTO GABU! - Valorant Edit": "https://www.youtube.com/embed/uFzWNxwAwNI?autoplay=1&loop=1",
    "HATCHBACK ✨ - Valorant edit": "https://www.youtube.com/embed/OUTFb__b6OQ?autoplay=1&loop=1",
    "money so big 💸 - Valorant edit": "https://www.youtube.com/embed/ySB7BwjxFCk?autoplay=1&loop=1",
    "WHAT IT IS - Valorant Edit": "https://www.youtube.com/embed/YV_B1OU7ro8?autoplay=1&loop=1",
    "5v5 2024": "https://www.youtube.com/embed/OUTFb__b6OQ?autoplay=1&loop=1",
    "🌸 Helen Hồng Liên Tiên Tử | Hiệu ứng chiêu thức 🌸 - Garena Liên Quân Mobile": "https://www.youtube.com/embed/Gw9itxmel8M?autoplay=1&loop=1",
    "Tulen Tiêu Dao Vũ Thần": "https://www.youtube.com/embed/DCa1LPYcxvg?autoplay=1&loop=1",
    "🕊 HIỆU ỨNG CHIÊU THỨC | SEPHERA BÁCH NHẠN NGÂN LINH 🕊 - Garena Liên Quân Mobile": "https://www.youtube.com/embed/njNQ-_eCgqE?autoplay=1&loop=1",
    "Hiệu Ứng Chiêu Thức | Sổ Sứ Mệnh 49: Chiêu Tài Đại Quán - Garena Liên Quân Mobile": "https://www.youtube.com/embed/_eE_i4ArHxo&t=5s?autoplay=1&loop=1",
    "HIỆU ỨNG CHIÊU THỨC RAZ BÃO VŨ CUỒNG LÔI - Garena Liên Quân Mobile": "https://www.youtube.com/embed/fCxsdHgEzZg?autoplay=1&loop=1",
    "MURAD TUYỆT THẾ THẦN BINH | Hiệu ứng chiêu thức": "https://www.youtube.com/embed/6EJoyWdQAYg&t=7s&t=7s?autoplay=1&loop=1",
    "✨ Tâm điểm tướng | Erin Thánh Quang Tinh Linh ✨ - Garena Liên Quân Mobile": "https://www.youtube.com/embed/qRMf3aTm0Bk&t=17s?autoplay=1&loop=1",
    "Ingame Trailer | Sổ sứ mệnh 57: Chuyện tình Ô Thước✨- Garena Liên Quân Mobile": "https://www.youtube.com/embed/Lf-JImv0sQ4&t=1s?autoplay=1&loop=1",
    "INGAME TRAILER | Paine Tử Xà Bá Tước 🔮 - Garena Liên Quân Mobile": "https://www.youtube.com/embed/AH8LkrVM6vY&t=1s?autoplay=1&loop=1",
    "INGAME TRAILER | Grakk Thần Ẩm Thực 🥘 - Garena Liên Quân Mobile": "https://www.youtube.com/embed/uMGTL4PgtE4?autoplay=1&loop=1",
    "VIDEO | Tổng hợp phiên bản cập nhật - Ngày Hội Liên Quân🔥 - Garena Liên Quân Mobile": "https://www.youtube.com/embed/v=_dUosHXp964&t=36s?autoplay=1&loop=1",
    "HƯỚNG DẪN SỰ KIỆN CHUNG SỨC KỶ NIỆM - Garena Liên Quân Mobile": "https://www.youtube.com/embed/lmJTlR3iFTI?autoplay=1&loop=1",
    "CẦM 10K TỎI BUILD TEAM BỒ ĐÀO NHA EURO 2024 TRI ÂN ANH LIÊM | LEEHARIII": "https://www.youtube.com/embed/gHxGVsgW9SQ&t=38s?autoplay=1&loop=1",
    "ĐẬP ĐI XÂY LẠI ACC CHÍNH VỚI FULL TEAM NTG + 8 SIÊU ... | LEEHARIII": "https://www.youtube.com/embed/AFm5cwtDezc&t=1022s?autoplay=1&loop=1",
    "MỞ 5 VÒNG BI LẮC FCO CÙNG ANH MC QUEEN VÀ CÁI KẾT | LEEHARIII": "https://www.youtube.com/embed/1IUdm58ohHY&t=35s?autoplay=1&loop=1",
    "Highlight Showmatch Rực Lửa Cùng Ryy Và Châu Mòe": "https://www.youtube.com/embed/KMw7jLN1fkE&t=33s?autoplay=1&loop=1",
    "MỞ GÌ BUILD ĐẤY CÙNG FULL VÒNG SỰ KIỆN POWERSHOT VỚI SỰ TÀI TRỢ CỦA BẠN MINHLEE | LEEHARIII": "https://www.youtube.com/embed/AFm5cwtDezc&t=1022s?autoplay=1&loop=1",
    "TEST 3 VÒNG SỰ KIỆN POWERSHOT VỚI SỰ TÀI TRỢ CỦA NGỌC HIỆP AUTO VÀ BỈ NGẠN | LEEHARIII": "https://www.youtube.com/embed/1IUdm58ohHY&t=35s?autoplay=1&loop=1",
    "MUỐN ĐƯỢC GẶP EM - Hiderway | MV Official": "https://www.youtube.com/embed/eQ4qN9BbKMs?autoplay=1&loop=1",
    "Không Ai Nói Chia Tay (HuyPT Remix) - Linh Hương Luz Cover | Vì không ai trong chúng ta nhận lỗi": "https://www.youtube.com/embed/XXePDetkJIU?autoplay=1&loop=1",
    "CÁNH HOA HÉO TÀN - KHÁNH PHƯƠNG X DOMINO REMIX": "https://www.youtube.com/embed/6ZYq4hHUYNs?autoplay=1&loop=1",
    "Tứ Phương Đại Chiến 2024": "https://www.youtube.com/embed/ZjZKsppAAg0?autoplay=1&loop=1",
    "Tết 2024" : "https://www.youtube.com/embed/OHaRV6LBG14?autoplay=1&loop=1",
    "Sổ sứ mệnh 66" : "https://www.youtube.com/embed/eV2V_XDJ-EA?autoplay=1&loop=1",
    "Hiệu Ứng Chiêu Thức | Sổ Sứ Mệnh 49: Chiêu Tài Đại Quán - Garena Liên Quân Mobile" : "https://www.youtube.com/embed/kaiEneZ0-vc?autoplay=1&loop=1",
    "lobby veres" : "https://www.youtube.com/embed/uRJvssocUtk?autoplay=1&loop=1",
    "lobby errol" : "https://www.youtube.com/embed/7nOVCif-afg?autoplay=1&loop=1",
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
