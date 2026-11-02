// ==========================================
// KONFIGURASI IKLAN
// ==========================================
const AD_LINK = "https://uplcm.com/4/12170890";

// ==========================================
// DATA DUMMY (SIMULASI DATABASE)
// ==========================================
const generateDummyData = () => {
  const data = [];
  for (let i = 1; i <= 60; i++) {
    data.push({
      id: `vid-${i}`,
      title: `Video Kuchayy AV #${i} - Konten Menarik Untuk Ditonton`,
      thumbnail: `https://picsum.photos/seed/${i + 10}/400/225`, // Gambar random
      duration: `0${Math.floor(Math.random() * 9) + 1}:${Math.floor(Math.random() * 50) + 10}`,
      views: Math.floor(Math.random() * 100000) + 1000,
      likes: Math.floor(Math.random() * 5000) + 100,
      // Link embed asli Anda dimasukkan ke sini
      embedUrl: `https://tv1.indoav.app/e/Bwrj4aD0re4i` 
    });
  }
  return data;
};

const dummyVideos = generateDummyData();
const ITEMS_PER_PAGE = 12; // Jumlah video per halaman

// ==========================================
// ELEMEN DOM
// ==========================================
const appContainer = document.getElementById('app');

// ==========================================
// FUNGSI BANTUAN
// ==========================================
function formatNumber(num) {
  return new Intl.NumberFormat('id-ID').format(num);
}

// ==========================================
// LOGIKA IKLAN (DIRECT LINK)
// ==========================================
function handleVideoClick(event, videoId) {
  event.preventDefault(); // Mencegah link langsung terbuka

  const hasClickedAd = sessionStorage.getItem('hasClickedAd');

  if (!hasClickedAd) {
    // Klik Pertama: Buka Iklan di Tab Baru
    sessionStorage.setItem('hasClickedAd', 'true');
    window.open(AD_LINK, '_blank');
    
    // Beri tahu user
    alert("Terima kasih telah mendukung kami! Silakan klik video sekali lagi untuk mulai menonton.");
  } else {
    // Klik Kedua dan seterusnya: Masuk ke Halaman Tonton
    window.location.href = `?page=watch&id=${videoId}`;
  }
}

// ==========================================
// RENDER HALAMAN UTAMA (GRID & PAGINASI)
// ==========================================
function renderHome(page = 1, sort = 'trending') {
  // Hitung Paginasi
  const totalPages = Math.ceil(dummyVideos.length / ITEMS_PER_PAGE);
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const currentVideos = dummyVideos.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // 1. Render Grid Video
  let gridHTML = `<div class="video-grid">`;
  
  currentVideos.forEach(video => {
    gridHTML += `
      <article class="video-card">
        <!-- PERBAIKAN: Gunakan video.id untuk link -->
        <a href="?page=watch&id=${video.id}" class="thumb-link" onclick="handleVideoClick(event, '${video.id}')">
          <img src="${video.thumbnail}" alt="${video.title}" loading="lazy">
          <span class="duration-pill">${video.duration}</span>
        </a>
        <div class="card-body">
          <!-- PERBAIKAN: Gunakan video.id untuk link -->
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

  // 2. Render Paginasi
  let paginationHTML = `<div class="pagination">`;
  
  // Tombol Prev
  paginationHTML += `<button class="page-btn" ${page === 1 ? 'disabled' : ''} onclick="changePage(${page - 1})">«</button>`;
  
  // Tombol Angka (1 s/d Tak Terbatas)
  for (let i = 1; i <= totalPages; i++) {
    paginationHTML += `<button class="page-btn ${i === page ? 'active' : ''}" onclick="changePage(${i})">${i}</button>`;
  }
  
  // Tombol Next
  paginationHTML += `<button class="page-btn" ${page === totalPages ? 'disabled' : ''} onclick="changePage(${page + 1})">»</button>`;
  
  paginationHTML += `</div>`;

  // Tampilkan ke layar
  appContainer.innerHTML = gridHTML + paginationHTML;
}

// ==========================================
// RENDER HALAMAN TONTON (WATCH PAGE)
// ==========================================
function renderWatchPage(videoId) {
  const video = dummyVideos.find(v => v.id === videoId);

  if (!video) {
    appContainer.innerHTML = `<div class="empty-state">Video tidak ditemukan.</div>`;
    return;
  }

  // Menggunakan class CSS .detail-layout yang sudah ada di styles.css
  appContainer.innerHTML = `
    <div class="page-shell">
      <div class="detail-layout">
        <div>
          <!-- PERBAIKAN: Gunakan video.embedUrl dan video.title -->
          <iframe class="player" src="${video.embedUrl}" title="${video.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          
          <!-- PERBAIKAN: Gunakan video.title -->
          <h1 class="detail-title">${video.title}</h1>
          
          <div class="stat-line">
            ${formatNumber(video.views)} tayangan • ${formatNumber(video.likes)} suka
          </div>
          <div class="detail-actions">
            <button class="primary-btn">Suka</button>
            <button class="secondary-btn">Bagikan</button>
          </div>
        </div>
        
        <!-- Sidebar Rekomendasi -->
        <div class="related-grid">
          <h3 class="section-heading" style="margin-top:0">Video Terkait</h3>
          ${dummyVideos.filter(v => v.id !== videoId).slice(0, 6).map(rel => `
            <a href="?page=watch&id=${rel.id}" class="related-item" onclick="handleVideoClick(event, '${rel.id}')">
              <img src="${rel.thumbnail}" alt="${rel.title}">
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
// ROUTER / INISIALISASI APLIKASI
// ==========================================
function initApp() {
  // Ambil parameter URL
  const urlParams = new URLSearchParams(window.location.search);
  const pageParam = urlParams.get('page');
  const idParam = urlParams.get('id');

  // Set Tahun di Footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Tentukan Halaman yang dirender
  if (pageParam === 'watch' && idParam) {
    renderWatchPage(idParam);
    
    // Sembunyikan subnav (opsional, agar fokus menonton)
    const subnav = document.getElementById('subnav');
    if (subnav) subnav.style.display = 'none';
  } else {
    renderHome(1);
  }
}

// Fungsi global untuk navigasi paginasi
window.changePage = function(page) {
  renderHome(page);
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Jalankan saat halaman selesai dimuat
document.addEventListener('DOMContentLoaded', initApp);
