// ==========================================
// KONFIGURASI IKLAN
// ==========================================
const AD_LINK = "https://uplcm.com/4/12170890";

// ==========================================
// DATA VIDEO (GANTI DENGAN KONTEN ASLI ANDA)
// ==========================================
const videos = [
  {
    id: "vid-1", // Harus unik, tidak boleh sama
    title: "ajak pacar ke rumah sambil kuda kudaan",
    thumbnail: "https://ik.imagekit.io/lojojcfmt/Screenshot_2026-08-10-20-41-22-423_com.miui.gallery.jpg?updatedAt=1786365807872", 
    duration: "10:15",
    views: 1500,
    likes: 120,
    embedUrl: "https://tv1.indoav.app/e/LinkEmbedVideo1"
  },
  {
    id: "vid-2",
    title: "Judul Video Kedua - Konten Spesial",
    thumbnail: "https://link-gambar-thumbnail-kedua.jpg",
    duration: "05:30",
    views: 3400,
    likes: 450,
    embedUrl: "https://tv1.indoav.app/e/LinkEmbedVideo2"
  },
  // --- TAMBAHKAN VIDEO BARU DI BAWAH INI ---
  // {
  //   id: "vid-3",
  //   title: "Judul Video Ketiga",
  //   thumbnail: "https://link-gambar.jpg",
  //   duration: "15:00",
  //   views: 0,
  //   likes: 0,
  //   embedUrl: "https://tv1.indoav.app/e/LinkEmbedVideo3"
  // },
];

const ITEMS_PER_PAGE = 12; // Jumlah video per halaman
const appContainer = document.getElementById('app');

// ==========================================
// FUNGSI BANTUAN
// ==========================================
function formatNumber(num) {
  return new Intl.NumberFormat('id-ID').format(num);
}

// ==========================================
// LOGIKA IKLAN
// ==========================================
function handleVideoClick(event, videoId) {
  event.preventDefault();
  const hasClickedAd = sessionStorage.getItem('hasClickedAd');
  if (!hasClickedAd) {
    sessionStorage.setItem('hasClickedAd', 'true');
    window.open(AD_LINK, '_blank');
    alert("Terima kasih telah mendukung kami! Silakan klik video sekali lagi untuk mulai menonton.");
  } else {
    window.location.href = `?page=watch&id=${videoId}`;
  }
}

function handlePlayClick(videoId) {
  const hasPaidPlayAd = sessionStorage.getItem(`paid_play_ad_${videoId}`);
  if (!hasPaidPlayAd) {
    sessionStorage.setItem(`paid_play_ad_${videoId}`, 'true');
    window.open(AD_LINK, '_blank');
    alert("Terima kasih! Silakan klik tombol Putar sekali lagi untuk memutar video.");
  } else {
    const iframe = document.getElementById('videoIframe');
    iframe.src = iframe.getAttribute('data-src');
    document.getElementById('videoOverlay').style.display = 'none';
  }
}

function handleRelatedVideoClick(event, videoId) {
  event.preventDefault();
  let clickCount = parseInt(sessionStorage.getItem('relatedAdClicks') || '0');
  if (clickCount < 2) {
    clickCount++;
    sessionStorage.setItem('relatedAdClicks', clickCount);
    window.open(AD_LINK, '_blank');
    if (clickCount === 1) {
      alert("Terima kasih! Silakan klik video terkait sekali lagi.");
    } else {
      alert("Satu langkah lagi! Silakan klik video terkait untuk langsung menonton.");
    }
  } else {
    window.location.href = `?page=watch&id=${videoId}`;
  }
}

// ==========================================
// RENDER HALAMAN UTAMA
// ==========================================
function renderHome(page = 1) {
  const totalPages = Math.ceil(videos.length / ITEMS_PER_PAGE);
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const currentVideos = videos.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  if (videos.length === 0) {
    appContainer.innerHTML = `<div class="empty-state">Belum ada video yang diunggah.</div>`;
    return;
  }

  let gridHTML = `<div class="video-grid">`;
  currentVideos.forEach(video => {
    gridHTML += `
      <article class="video-card">
        <a href="?page=watch&id=${video.id}" class="thumb-link" onclick="handleVideoClick(event, '${video.id}')">
          <img src="${video.thumbnail}" alt="${video.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x225?text=No+Thumbnail'">
          <span class="duration-pill">${video.duration}</span>
        </a>
        <div class="card-body">
          <a href="?page=watch&id=${video.id}" class="video-title" onclick="handleVideoClick(event, '${video.id}')">${video.title}</a>
          <div class="card-meta">
            <div class="meta-left">
              <span>${formatNumber(video.views)} tayangan</span>
              <button class="like-inline">♡ ${formatNumber(video.likes)}</button>
            </div>
          </div>
        </div>
      </article>
    `;
  });
  gridHTML += `</div>`;

  let paginationHTML = `<div class="pagination">`;
  paginationHTML += `<button class="page-btn" ${page === 1 ? 'disabled' : ''} onclick="changePage(${page - 1})">«</button>`;
  for (let i = 1; i <= totalPages; i++) {
    paginationHTML += `<button class="page-btn ${i === page ? 'active' : ''}" onclick="changePage(${i})">${i}</button>`;
  }
  paginationHTML += `<button class="page-btn" ${page === totalPages ? 'disabled' : ''} onclick="changePage(${page + 1})">»</button>`;
  paginationHTML += `</div>`;

  appContainer.innerHTML = gridHTML + paginationHTML;
}

// ==========================================
// RENDER HALAMAN TONTON
// ==========================================
function renderWatchPage(videoId) {
  const video = videos.find(v => v.id === videoId);
  if (!video) {
    appContainer.innerHTML = `<div class="empty-state">Video tidak ditemukan.</div>`;
    return;
  }

  appContainer.innerHTML = `
    <div class="page-shell">
      <div class="detail-layout">
        <div>
          <div style="position: relative; width: 100%; aspect-ratio: 16/9; border-radius: 9px; overflow: hidden; background: #000;">
            <iframe id="videoIframe" class="player" data-src="${video.embedUrl}" title="${video.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
            <div id="videoOverlay" onclick="handlePlayClick('${video.id}')" style="position: absolute; inset: 0; background: url('${video.thumbnail}') center/cover; display: grid; place-items: center; cursor: pointer; z-index: 10;">
              <div style="background: rgba(0,0,0,0.7); padding: 12px 24px; border-radius: 8px; font-weight: bold; color: #fff; display: flex; align-items: center; gap: 8px;">
                <span style="font-size: 24px;">▶</span> Putar Video
              </div>
            </div>
          </div>
          <h1 class="detail-title">${video.title}</h1>
          <div class="stat-line">${formatNumber(video.views)} tayangan • ${formatNumber(video.likes)} suka</div>
          <div class="detail-actions">
            <button class="primary-btn">Suka</button>
            <button class="secondary-btn">Bagikan</button>
          </div>
        </div>
        <div class="related-grid">
          <h3 class="section-heading" style="margin-top:0">Video Terkait</h3>
          ${videos.filter(v => v.id !== videoId).slice(0, 6).map(rel => `
            <a href="?page=watch&id=${rel.id}" class="related-item" onclick="handleRelatedVideoClick(event, '${rel.id}')">
              <img src="${rel.thumbnail}" alt="${rel.title}" onerror="this.src='https://via.placeholder.com/115x65?text=No+Img'">
              <div>
                <div style="font-size:13px; font-weight:500; line-height:1.3; margin-bottom:4px">${rel.title}</div>
                <div style="font-size:11px; color:var(--muted)">${formatNumber(rel.views)} tayangan</div>
              </div>
            </a>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

// ==========================================
// ROUTER
// ==========================================
function initApp() {
  const urlParams = new URLSearchParams(window.location.search);
  const pageParam = urlParams.get('page');
  const idParam = urlParams.get('id');

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  if (pageParam === 'watch' && idParam) {
    renderWatchPage(idParam);
    const subnav = document.getElementById('subnav');
    if (subnav) subnav.style.display = 'none';
  } else {
    renderHome(1);
  }
}

window.changePage = function(page) {
  renderHome(page);
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

document.addEventListener('DOMContentLoaded', initApp);
