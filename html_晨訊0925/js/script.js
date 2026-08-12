// 畫面載入的Loading
window.addEventListener("load", () => {
  const loading = document.getElementById("loading")
  if (loading) {
    loading.style.display = "none"
  }
})





// 禁止使用者點擊兩下縮放效果
let lastTouchEnd = 0;
document.addEventListener('touchend', function (event) {
  const now = new Date().getTime();
  if (now - lastTouchEnd <= 300) {
    event.preventDefault(); // 阻止雙擊放大
  }
  lastTouchEnd = now;
}, false);




// DOM 載入完成後執行
document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tab-button")
  const carouselContainers = document.querySelectorAll(".carousel-container")

  // ========== 選單切換 ==========
  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const targetTab = this.getAttribute("data-tab")

      // 移除所有按鈕的 active 類別
      tabButtons.forEach((btn) => btn.classList.remove("active"))
      // 隱藏所有輪播容器
      carouselContainers.forEach((container) => container.classList.remove("active"))

      // 添加 active 類別到點擊的按鈕
      this.classList.add("active")

      // 顯示對應的輪播容器
      const targetContainer = document.getElementById(targetTab)
      if (targetContainer) {
        targetContainer.classList.add("active")

        // 重置輪播位置到開始
        const track = targetContainer.querySelector(".carousel-track")
        if (track) track.scrollLeft = 0
      }

      // 👉 控制 body 背景顏色 (範例)
      if (targetTab === "gallery2") {
        document.body.classList.add("dark-bg")
      } else {
        document.body.classList.remove("dark-bg")
      }
    })
  })

  // ========== 左右切換按鈕 ==========
  const navButtons = document.querySelectorAll(".carousel-nav")
  navButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const direction = this.getAttribute("data-direction")
      const container = this.closest(".carousel-container")
      const track = container.querySelector(".carousel-track")
      const slideWidth = 310 // 卡片寬度

      if (direction === "prev") {
        track.scrollBy({ left: -slideWidth, behavior: "smooth" })
      } else if (direction === "next") {
        track.scrollBy({ left: slideWidth, behavior: "smooth" })
      }
    })
  })

  // ========== 桌機滑鼠拖曳 ==========
  const carouselTracks = document.querySelectorAll(".carousel-track")
  carouselTracks.forEach((track) => {
    let isDragging = false
    let startX
    let scrollLeft

    track.addEventListener("mousedown", (e) => {
      isDragging = true
      startX = e.pageX - track.offsetLeft
      scrollLeft = track.scrollLeft
      track.style.cursor = "grabbing"
      e.preventDefault()
    })

    track.addEventListener("mouseleave", () => {
      isDragging = false
      track.style.cursor = "grab"
    })

    track.addEventListener("mouseup", () => {
      isDragging = false
      track.style.cursor = "grab"
    })

    track.addEventListener("mousemove", (e) => {
      if (!isDragging) return
      e.preventDefault()
      const x = e.pageX - track.offsetLeft
      const walk = (x - startX) * 1.5
      track.scrollLeft = scrollLeft - walk
    })
  })

  // ========== 圖片懶載入 ==========
  const images = document.querySelectorAll('img[loading="lazy"]')
  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target
          img.src = img.src
          img.classList.remove("lazy")
          imageObserver.unobserve(img)
        }
      })
    })
    images.forEach((img) => imageObserver.observe(img))
  }

  // ========== 鍵盤導航 ==========
  document.addEventListener("keydown", (e) => {
    const activeContainer = document.querySelector(".carousel-container.active")
    if (!activeContainer) return

    const track = activeContainer.querySelector(".carousel-track")
    const slideWidth = 296 // 280px + 16px gap

    if (e.key === "ArrowLeft") {
      e.preventDefault()
      track.scrollBy({ left: -slideWidth, behavior: "smooth" })
    } else if (e.key === "ArrowRight") {
      e.preventDefault()
      track.scrollBy({ left: slideWidth, behavior: "smooth" })
    }
  })
})
