// ==========================================
// KONFIGURASI IKLAN
// ==========================================
const AD_LINK = "https://uplcm.com/4/12170890";

// ==========================================
// DATA VIDEO (KONTEN ASLI ANDA)
// ==========================================
const videos = [
  {
    id: "vid-5",
    title: "ajak pacar ke rumah sambil kuda kudaan",
    thumbnail: "https://ik.imagekit.io/lojojcfmt/Screenshot_2026-08-10-20-41-22-423_com.miui.gallery.jpg?updatedAt=1786365807872", 
    duration: "10:15",
    views: 1500,
    likes: 120,
    embedUrl: "https://tv1.indoav.app/e/Bwrj4aD0re4i"
  },
  {
    id: "vid-4",
    title: "bocil hyper keenakan sama pacar",
    thumbnail: "https://ik.imagekit.io/lojojcfmt/Screenshot_2026-08-10-20-41-22-423_com.miui.gallery.jpg?updatedAt=1786365807872", 
    duration: "10:15",
    views: 1500,
    likes: 120,
    embedUrl: "https://streamtape.com/e/Y7x2ymkpMQhv7XG/lv_0_20261102033338.mp4"
  },
  {
    id: "vid-3",
    title: "dapat abg mekinya mulus banget",
    thumbnail: "https://ik.imagekit.io/lojojcfmt/Screenshot_2026-08-10-20-41-22-423_com.miui.gallery.jpg?updatedAt=1786365807872", 
    duration: "10:15",
    views: 1500,
    likes: 120,
    embedUrl: "https://streamtape.com/e/VBXpYme7KKSKeLy/lv_0_20261102033421.mp4"
  },
  {
    id: "vid-2",
    title: "ajak pacar ke rumah sambil kuda kudaan",
    thumbnail: "https://ik.imagekit.io/lojojcfmt/Screenshot_2026-08-10-20-41-22-423_com.miui.gallery.jpg?updatedAt=1786365807872", 
    duration: "10:15",
    views: 1500,
    likes: 120,
    embedUrl: "https://tv1.indoav.app/e/Bwrj4aD0re4i"
  },
  {
    id: "vid-1",
    title: "dua lawan satu tetap gak nyerah cowonya",
    thumbnail: "https://ik.imagekit.io/lojojcfmt/Screenshot_2026-08-10-21-12-27-451_com.miui.gallery.jpg?updatedAt=1786368049970",
    duration: "05:30",
    views: 3400,
    likes: 450,
    embedUrl: "https://tv1.indoav.app/e/bqDoEXoFUgSx"
  },
  // --- TAMBAHKAN VIDEO BARU DI BAWAH INI ---
];

const ITEMS_PER_PAGE = 12;
const appContainer = document.getElementById('app');

// ==========================================
// STATE (Status Aplikasi untuk Search & Sort)
// ==========================================
let currentSearch = '';
let currentSort = 'trending';

// ==========================================
// FUNGSI BANTUAN
// ==========================================
function formatNumber(num) {
  return new Intl.NumberFormat('id-ID').format(num);
}

function parseDurationToSeconds(duration) {
  const parts = duration.split(':').map(Number);
  return parts.length === 2 ? parts[0] * 60 + parts[1] : (parts[0] || 0) * 60;
}

function getProcessedVideos() {
  let result = [...videos];
  
  if (currentSearch && currentSearch.trim()) {
    const q = currentSearch.toLowerCase().trim();
    result = result.filter(v => v.title.toLowerCase().includes(q));
  }
  
  switch (currentSort) {
    case 'latest':
      result = result.reverse();
      break;
    case 'views':
      result.sort((a, b) => b.views - a.views);
      break;
    case 'likes':
      result.sort((a, b) => b.likes - a.likes);
      break;
    case 'duration':
      result.sort((a, b) => parseDurationToSeconds(b.duration) - parseDurationToSeconds(a.duration));
      break;
    case 'random':
      result.sort(() => Math.random() - 0.5);
      break;
    case 'trending':
    default:
      break;
  }
  return result;
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
  const processedVideos = getProcessedVideos();
  const totalPages = Math.ceil(processedVideos.length / ITEMS_PER_PAGE);
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const currentVideos = processedVideos.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  if (processedVideos.length === 0) {
    if (currentSearch) {
      appContainer.innerHTML = `
        <div class="empty-state">
          <p>Tidak ada video yang cocok dengan pencarian "<strong>${currentSearch}</strong>".</p>
          <p><a href="?sort=${currentSort}" style="color:var(--accent);text-decoration:underline">← Kembali ke semua video</a></p>
        </div>`;
    } else {
      appContainer.innerHTML = `<div class="empty-state">Belum ada video yang diunggah.</div>`;
    }
    return;
  }

  let gridHTML = '';
  
  if (currentSearch) {
    gridHTML += `
      <div class="section-heading" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px">
        <span>Hasil untuk "<strong>${currentSearch}</strong>" — ${processedVideos.length} video</span>
        <a href="?sort=${currentSort}" style="font-size:13px;color:var(--muted);text-decoration:underline">✕ Hapus Pencarian</a>
      </div>`;
  }
  
  gridHTML += `<div class="video-grid">`;
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

  let paginationHTML = '';
  if (totalPages > 1) {
    paginationHTML = `<div class="pagination">`;
    paginationHTML += `<button class="page-btn" ${page === 1 ? 'disabled' : ''} onclick="changePage(${page - 1})">«</button>`;
    for (let i = 1; i <= totalPages; i++) {
      paginationHTML += `<button class="page-btn ${i === page ? 'active' : ''}" onclick="changePage(${i})">${i}</button>`;
    }
    paginationHTML += `<button class="page-btn" ${page === totalPages ? 'disabled' : ''} onclick="changePage(${page + 1})">»</button>`;
    paginationHTML += `</div>`;
  }

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
// ROUTER & INISIALISASI
// ==========================================
function initApp() {
  const urlParams = new URLSearchParams(window.location.search);
  const pageParam = urlParams.get('page');
  const idParam = urlParams.get('id');
  const sortParam = urlParams.get('sort');
  const qParam = urlParams.get('q');

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  if (sortParam) currentSort = sortParam;
  if (qParam) currentSearch = qParam;

  // --- Setup Form Pencarian ---
  const searchForm = document.getElementById('searchForm');
  const searchInput = document.getElementById('searchInput');
  
  if (searchInput) {
    searchInput.value = currentSearch;
  }
  
  if (searchForm) {
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const q = searchInput.value.trim();
      const params = new URLSearchParams();
      params.set('sort', currentSort);
      if (q) params.set('q', q);
      window.location.href = `?${params.toString()}`;
    });
  }

  // --- Setup Tombol Sortir Subnav ---
  document.querySelectorAll('.subnav a[data-sort]').forEach(link => {
    if (link.dataset.sort === currentSort) {
      link.classList.add('active');
    }
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const sort = this.dataset.sort;
      const params = new URLSearchParams();
      params.set('sort', sort);
      if (currentSearch) params.set('q', currentSearch);
      window.location.href = `?${params.toString()}`;
    });
  });

  // --- Setup Tombol Random ---
  const randomLink = document.getElementById('randomLink');
  if (randomLink) {
    randomLink.addEventListener('click', function(e) {
      e.preventDefault();
      currentSort = 'random';
      document.querySelectorAll('.subnav a').forEach(a => a.classList.remove('active'));
      randomLink.classList.add('active');
      renderHome(1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- Routing Halaman ---
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
