// ==========================================
// KONFIGURASI IKLAN
// ==========================================
const AD_LINK = "https://uplcm.com/4/12170890";
const AD_LINK_2 = "https://uplcm.com/4/12175415"; // 🆕 Ganti dengan link iklan baru Anda

// ==========================================
// DATA VIDEO
// ==========================================
const videos = [
  {
    id: "vid-15", title: "Kena hajar ampe lemes",
    thumbnail: "https://ik.imagekit.io/lojojcfmt/20261103_103716.jpg", 
    duration: "7:18", views: 108, likes: 78,
    category: "Lokal", description: "abg, skandal, terbaru, viral, bocil, tocil, hyper, keenakan, pacar, mulus, meki pink, cantik, tobrut, ngentod pacar, ngewe pacar, tocil hyper, keenakan bngett, sange parah, cewek colmek, coolmex.",
    embedUrl: "https://streamtape.com/e/KXGAG4zpB3C00Gg"
  },
  {
    id: "vid-14", title: "Dengerin percakapannya bikin sangne",
    thumbnail: "https://ik.imagekit.io/lojojcfmt/20261103_103716.jpg", 
    duration: "7:18", views: 521, likes: 132,
    category: "Lokal", description: "abg, skandal, terbaru, viral, bocil, tocil, hyper, keenakan, pacar, mulus, meki pink, cantik, tobrut, ngentod pacar, ngewe pacar, tocil hyper, keenakan bngett, sange parah, cewek colmek, coolmex.",
    embedUrl: "https://streamtape.com/e/KXGAG4zpB3C00Gg"
  },
  {
    id: "vid-13", title: "Kena hajar ampe lemes",
    thumbnail: "https://ik.imagekit.io/lojojcfmt/20261103_103716.jpg", 
    duration: "7:18", views: 952, likes: 352,
    category: "Lokal", description: "abg, skandal, terbaru, viral, bocil, tocil, hyper, keenakan, pacar, mulus, meki pink, cantik, tobrut, ngentod pacar, ngewe pacar, tocil hyper, keenakan bngett, sange parah, cewek colmek, coolmex.",
    embedUrl: "https://streamtape.com/e/KXGAG4zpB3C00Gg"
  },
  {
    id: "vid-12", title: "bocil udah jago main di atas",
    thumbnail: "https://ik.imagekit.io/lojojcfmt/20261103_103556.jpg", 
    duration: "19:15", views: 1739, likes: 321,
    category: "Lokal", description: "abg, skandal, terbaru, viral, bocil, tocil, hyper, keenakan, pacar, mulus, meki pink, cantik, tobrut, ngentod pacar, ngewe pacar, tocil hyper, keenakan bngett, sange parah, cewek colmek, coolmex.",
    embedUrl: "https://streamtape.com/e/qJWXP1ZAb2TzgJL"
  },
  {
    id: "vid-11", title: "bocil dapat pacar batang gede",
    thumbnail: "https://ik.imagekit.io/lojojcfmt/20261103_103614.jpg", 
    duration: "6:16", views: 567, likes: 241,
    category: "Lokal", description: "abg, skandal, terbaru, viral, bocil, tocil, hyper, keenakan, pacar, mulus, meki pink, cantik, tobrut, ngentod pacar, ngewe pacar, tocil hyper, keenakan bngett, sange parah, cewek colmek, coolmex.",
    embedUrl: "https://streamtape.com/e/OdRj964BBLIz0Q"
  },  
  {
    id: "vid-10", title: "Ga ekspek ibu bantuin ampe kluar",
    thumbnail: "https://ik.imagekit.io/lojojcfmt/20261103_103638.jpg", 
    duration: "4:33", views: 478, likes: 34,
    category: "Lokal", description: "abg, skandal, terbaru, viral, bocil, tocil, hyper, keenakan, pacar, mulus, meki pink, cantik, tobrut, ngentod pacar, ngewe pacar, tocil hyper, keenakan bngett, sange parah, cewek colmek, coolmex.",
    embedUrl: "https://streamtape.com/e/a4xBmmGgbJuxkVj"
  },
  {
    id: "vid-9", title: "Yang lagi viral habis dipake pacar dipake lagi ama temennya",
    thumbnail: "https://ik.imagekit.io/lojojcfmt/IMG_20261103_091842.jpg", 
    duration: "3:31", views: 2136, likes: 173,
    category: "Lokal", description: "abg, skandal, terbaru, viral, bocil, tocil, hyper, keenakan, pacar, mulus, meki pink, cantik, tobrut, ngentod pacar, ngewe pacar, tocil hyper, keenakan bngett, sange parah, cewek colmek, coolmex.",
    embedUrl: "https://streamtape.com/e/3DG8pX7Zd7FdKOx"
  },
  {
    id: "vid-8", title: "anjay ngentodnya di billiard",
    thumbnail: "https://ik.imagekit.io/lojojcfmt/IMG_20261103_002639.jpg", 
    duration: "20:11", views: 382, likes: 67,
    category: "Lokal", description: "Sempat sempatnya main billiard sambil ngenwe, klo gini mah pulang jam bepapun gw siap.",
    embedUrl: "https://streamtape.com/e/vKkQ9kgrgBI438Q"
  },
  {
    id: "vid-7", title: "bawa pacar ke rumah terus di sepong dulu",
    thumbnail: "https://ik.imagekit.io/lojojcfmt/IMG_20261103_002438.jpg", 
    duration: "1:20", views: 936, likes: 73,
    category: "Lokal", description: "bocil spek albino emang ga ada obat bikin sange bangettt.",
    embedUrl: "https://streamtape.com/e/BaMYBrOVWjtVXD"
  },
  {
    id: "vid-6", title: "tocil cantik masih polos keenakan bgett",
    thumbnail: "https://ik.imagekit.io/lojojcfmt/20261102_213330.jpg?updatedAt=1793626515205", 
    duration: "3:19", views: 6472, likes: 235,
    category: "Lokal", description: "Video tocil yang sangat hyper dan bikin keenakan.",
    embedUrl: "https://streamtape.com/e/GkGReO4qxdTo39"
  },
  {
    id: "vid-5", title: "tocil hyper keenakan bgett",
    thumbnail: "https://ik.imagekit.io/lojojcfmt/IMG_20261102_160832.jpg?updatedAt=1793606976999", 
    duration: "14:50", views: 8739, likes: 657,
    category: "Lokal", description: "Video tocil yang sangat hyper dan bikin keenakan. Kualitas gambar jernih dan suara jernih.",
    embedUrl: "https://streamtape.com/e/MZVJj6Vpq9FmkBv"
  },
  {
    id: "vid-4", title: "bocil hyper keenakan sama pacar",
    thumbnail: "https://ik.imagekit.io/lojojcfmt/IMG_20261102_160717.jpg?updatedAt=1793606976913", 
    duration: "12:39", views: 2387, likes: 967,
    category: "Lokal", description: "Bocil hyper dengan pacarnya, adegan romantis dan menegangkan sepanjang video.",
    embedUrl: "https://streamtape.com/e/Y7x2ymkpMQhv7XG"
  },
  {
    id: "vid-3", title: "dapat abg mekinya mulus banget",
    thumbnail: "https://ik.imagekit.io/lojojcfmt/IMG_20261102_160523.jpg?updatedAt=1793606977314", 
    duration: "3:42", views: 678, likes: 63,
    category: "ABG", description: "ABG dengan meki yang sangat mulus, durasi singkat tapi padat berisi.",
    embedUrl: "https://streamtape.com/e/VBXpYme7KKSKeLy"
  },
  {
    id: "vid-2", title: "abg pantat bulat dan hyper",
    thumbnail: "https://ik.imagekit.io/lojojcfmt/aTNPUVRPbnRUZktQZkl5eU1HbmhGUndFYndZckREb1NYLzh6c2pkY0M2VjBiY1FVM0JvaytRbWxycjBOK0RlSFFLc2R2TGJER1huOVBURzFQODZmZ0E9PTo6Ex3m4zpaPp0zxyeZab3X+Q==.jpeg", 
    duration: "05:34", views: 3678, likes: 121,
    category: "ABG", description: "ABG dengan pantat bulat yang sangat hyper. Wajib ditonton!",
    embedUrl: "https://tv1.indoav.app/e/Bwrj4aD0re4i"
  },
  {
    id: "vid-1", title: "dua chindo sedang keenakan",
    thumbnail: "https://ik.imagekit.io/lojojcfmt/eDBPM0RnN09jTXVBemErZjlUUnFzQzFmL2V3U1doem81MGxscjVIVTAzRW5nSFZrY2tlR2kxMFdXdmpmR0p4Yzo6Ex3m4zpaPp0zxyeZab3X+Q==.jpeg?updatedAt=1793606009631",
    duration: "20:16", views: 3400, likes: 897,
    category: "Chindo", description: "Dua chindo yang sedang keenakan, durasi panjang 20 menit penuh adegan hot.",
    embedUrl: "https://tv1.indoav.app/e/bqDoEXoFUgSx"
  },
];

// ==========================================
// KONTEN HALAMAN STATIS
// ==========================================
const staticPages = {
  about: { title: 'Tentang KuchayyAV', content: `<p><strong>KuchayyAV</strong> adalah platform streaming video untuk menemukan dan menonton video pilihan.</p>` },
  terms: { title: 'Syarat & Ketentuan', content: `<p>Dengan mengakses situs ini, Anda dianggap telah menyetujui seluruh syarat dan ketentuan.</p>` },
  contact: { title: 'Hubungi Kami', content: `<p>Email: contact@kuchayyav.example</p>` },
  privacy: { title: 'Kebijakan Privasi', content: `<p>Data tema dan like disimpan di perangkat Anda (localStorage).</p>` },
  dmca: { title: 'Hak Cipta / DMCA', content: `<p>Email: dmca@kuchayyav.example</p>` },
  legal: { title: 'Informasi Legal', content: `<p>Kami tidak meng-host video. Semua konten dari pihak ketiga.</p>` },
  partners: { title: 'Mitra', content: `<p>Email: partner@kuchayyav.example</p>` },
  report: { title: 'Laporkan Konten', content: `<p>Email: report@kuchayyav.example</p>` },
  transparency: { title: 'Laporan Transparansi', content: `<p>Total Video: ${videos.length}</p>` }
};

// ==========================================
// STATE
// ==========================================
const ITEMS_PER_PAGE = 12;
const appContainer = document.getElementById('app');
let currentSearch = '';
let currentSort = 'trending';
let currentCategory = '';

// ==========================================
// FUNGSI BANTUAN
// ==========================================
function formatNumber(num) { return new Intl.NumberFormat('id-ID').format(num); }
function parseDurationToSeconds(duration) {
  const parts = duration.split(':').map(Number);
  return parts.length === 2 ? parts[0] * 60 + parts[1] : (parts[0] || 0) * 60;
}
function getUniqueCategories() {
  return [...new Set(videos.map(v => v.category).filter(Boolean))];
}

// HITUNG VIEW OTOMATIS
function incrementView(video) {
  const viewedKey = 'viewed_' + video.id;
  if (!localStorage.getItem(viewedKey)) {
    video.views += 1;
    localStorage.setItem(viewedKey, 'true');
  }
}

// LIKE
function getLikedVideos() { try { return JSON.parse(localStorage.getItem('likedVideos') || '[]'); } catch (e) { return []; } }
function isLiked(videoId) { return getLikedVideos().includes(videoId); }
function getDisplayLikes(video) { return video.likes + (isLiked(video.id) ? 1 : 0); }
function toggleLike(videoId) {
  const liked = getLikedVideos();
  const idx = liked.indexOf(videoId);
  if (idx > -1) liked.splice(idx, 1); else liked.push(videoId);
  localStorage.setItem('likedVideos', JSON.stringify(liked));
  return idx === -1;
}
function handleLikeClick(event, videoId) {
  event.preventDefault(); event.stopPropagation();
  const nowLiked = toggleLike(videoId);
  const video = videos.find(v => v.id === videoId);
  const btn = event.currentTarget;
  btn.classList.toggle('liked', nowLiked);
  btn.innerHTML = `<i class="${nowLiked ? 'fa-solid' : 'fa-regular'} fa-heart"></i> ${formatNumber(getDisplayLikes(video))}`;
}
function handleWatchLike(videoId) {
  const nowLiked = toggleLike(videoId);
  const btn = document.getElementById('likeBtn');
  const video = videos.find(v => v.id === videoId);
  btn.classList.toggle('liked', nowLiked);
  btn.innerHTML = `<i class="${nowLiked ? 'fa-solid' : 'fa-regular'} fa-heart"></i> ${nowLiked ? 'Disukai' : 'Suka'}`;
  const statLine = document.querySelector('.stat-line');
  if (statLine) statLine.innerHTML = `<i class="fa-regular fa-eye"></i> ${formatNumber(video.views)} tayangan &bull; <i class="fa-solid fa-heart" style="color:var(--muted)"></i> ${formatNumber(getDisplayLikes(video))} suka`;
}

// TOAST & SHARE
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color:#4ade80"></i> <span>${msg}</span>`;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}
async function handleShare(videoId) {
  const video = videos.find(v => v.id === videoId);
  if (!video) return;
  const url = `${window.location.origin}${window.location.pathname}?page=watch&id=${videoId}`;
  if (navigator.share) {
    try {
      await navigator.share({ title: video.title, text: `Tonton "${video.title}" di Kuchayy AV`, url });
      return;
    } catch (e) { if (e.name === 'AbortError') return; }
  }
  try {
    await navigator.clipboard.writeText(url);
    showToast('Link berhasil disalin!');
  } catch (e) { prompt('Salin link ini:', url); }
}

// 🆕 TOMBOL DOWNLOAD (IKLAN)
function handleDownloadClick() {
  window.open(AD_LINK_2 || AD_LINK, '_blank');
  showToast('Mempersiapkan link download...');
}

// SCROLL TO TOP
function initScrollToTop() {
  const btn = document.getElementById('scrollTopBtn');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) btn.classList.add('show');
    else btn.classList.remove('show');
  });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// TEMA & MOBILE
function initTheme() {
  const themeToggle = document.getElementById('themeToggle');
  if (!themeToggle) return;
  
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light');
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
  
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
    const isLight = document.body.classList.contains('light');
    themeToggle.innerHTML = isLight ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });
}
function initMobileMenu() {
  const btn = document.getElementById('mobileMenu');
  const links = document.getElementById('mobileLinks');
  if (!btn || !links) return;
  btn.addEventListener('click', () => links.classList.toggle('open'));
  document.addEventListener('click', (e) => {
    if (links.classList.contains('open') && !links.contains(e.target) && !btn.contains(e.target)) {
      links.classList.remove('open');
    }
  });
}

// KATEGORI MENU
function initCategoryMenu() {
  const menu = document.getElementById('categoryMenu');
  if (!menu) return;
  const cats = getUniqueCategories();
  let html = `<a href="?sort=${currentSort}" ${!currentCategory ? 'style="font-weight:bold;color:var(--text)"' : ''}><i class="fa-solid fa-layer-group" style="margin-right:8px"></i> Semua Kategori</a>`;
  cats.forEach(cat => {
    const isActive = currentCategory === cat;
    html += `<a href="?sort=${currentSort}&cat=${encodeURIComponent(cat)}" ${isActive ? 'style="font-weight:bold;color:var(--text)"' : ''}><i class="fa-solid fa-folder" style="margin-right:8px"></i> ${cat}</a>`;
  });
  menu.innerHTML = html;
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
    
    const video = videos.find(v => v.id === videoId);
    if (video) incrementView(video);
  }
}
function handleRelatedVideoClick(event, videoId) {
  event.preventDefault();
  let clickCount = parseInt(sessionStorage.getItem('relatedAdClicks') || '0');
  if (clickCount < 2) {
    clickCount++;
    sessionStorage.setItem('relatedAdClicks', clickCount);
    window.open(AD_LINK, '_blank');
    if (clickCount === 1) alert("Terima kasih! Silakan klik video terkait sekali lagi.");
    else alert("Satu langkah lagi! Silakan klik video terkait untuk langsung menonton.");
  } else {
    window.location.href = `?page=watch&id=${videoId}`;
  }
}

// ==========================================
// GET PROCESSED VIDEOS
// ==========================================
function getProcessedVideos() {
  let result = [...videos];
  if (currentSearch && currentSearch.trim()) {
    const q = currentSearch.toLowerCase().trim();
    result = result.filter(v => v.title.toLowerCase().includes(q));
  }
  if (currentCategory) result = result.filter(v => v.category === currentCategory);
  switch (currentSort) {
    case 'latest': result = result.reverse(); break;
    case 'views': result.sort((a, b) => b.views - a.views); break;
    case 'likes': result.sort((a, b) => getDisplayLikes(b) - getDisplayLikes(a)); break;
    case 'duration': result.sort((a, b) => parseDurationToSeconds(b.duration) - parseDurationToSeconds(a.duration)); break;
    case 'random': result.sort(() => Math.random() - 0.5); break;
  }
  return result;
}

// ==========================================
// RENDER: HALAMAN UTAMA
// ==========================================
function renderHome(page = 1) {
  const processedVideos = getProcessedVideos();
  const totalPages = Math.ceil(processedVideos.length / ITEMS_PER_PAGE);
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const currentVideos = processedVideos.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  if (processedVideos.length === 0) {
    let msg = `<p>Tidak ada video yang cocok dengan filter.</p>`;
    if (currentSearch) msg = `<p>Tidak ada video yang cocok dengan pencarian "<strong>${currentSearch}</strong>".</p>`;
    if (currentCategory) msg = `<p>Tidak ada video di kategori "<strong>${currentCategory}</strong>".</p>`;
    appContainer.innerHTML = `<div class="empty-state">${msg}<p><a href="?sort=${currentSort}" style="color:var(--accent);text-decoration:underline">← Kembali ke semua video</a></p></div>`;
    return;
  }

  let gridHTML = '';
  if (currentSearch || currentCategory) {
    let title = '';
    if (currentSearch) title += `Hasil untuk "<strong>${currentSearch}</strong>" `;
    if (currentCategory) title += `di Kategori "<strong>${currentCategory}</strong>" `;
    gridHTML += `<div class="section-heading" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px"><span>${title} — ${processedVideos.length} video</span><a href="?sort=${currentSort}" style="font-size:13px;color:var(--muted);text-decoration:underline">✕ Reset Filter</a></div>`;
  }
  
  gridHTML += `<div class="video-grid">`;
  currentVideos.forEach(video => {
    const liked = isLiked(video.id);
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
              <span><i class="fa-regular fa-eye"></i> ${formatNumber(video.views)}</span>
              <button class="like-inline ${liked ? 'liked' : ''}" onclick="handleLikeClick(event, '${video.id}')">
                <i class="${liked ? 'fa-solid' : 'fa-regular'} fa-heart"></i> ${formatNumber(getDisplayLikes(video))}
              </button>
            </div>
          </div>
        </div>
      </article>`;
  });
  gridHTML += `</div>`;

  // 🆕 PAGINASI DENGAN IKLAN
  let paginationHTML = '';
  if (totalPages > 1) {
    paginationHTML = `<div class="pagination">`;
    
    // Tombol Prev (Iklan jika bukan halaman 1)
    const prevAction = page > 1 ? `window.open(AD_LINK_2 || AD_LINK, '_blank'); changePage(${page - 1})` : '';
    paginationHTML += `<button class="page-btn" ${page === 1 ? 'disabled' : ''} onclick="${prevAction}"><i class="fa-solid fa-chevron-left"></i></button>`;
    
    for (let i = 1; i <= totalPages; i++) {
      // Tombol Angka (Iklan jika yang diklik bukan halaman aktif)
      const clickAction = i !== page ? `window.open(AD_LINK_2 || AD_LINK, '_blank'); changePage(${i})` : `changePage(${i})`;
      paginationHTML += `<button class="page-btn ${i === page ? 'active' : ''}" onclick="${clickAction}">${i}</button>`;
    }
    
    // Tombol Next (Iklan jika bukan halaman terakhir)
    const nextAction = page < totalPages ? `window.open(AD_LINK_2 || AD_LINK, '_blank'); changePage(${page + 1})` : '';
    paginationHTML += `<button class="page-btn" ${page === totalPages ? 'disabled' : ''} onclick="${nextAction}"><i class="fa-solid fa-chevron-right"></i></button>`;
    
    paginationHTML += `</div>`;
  }
  appContainer.innerHTML = gridHTML + paginationHTML;
}

// ==========================================
// RENDER: HALAMAN TONTON
// ==========================================
function renderWatchPage(videoId) {
  const video = videos.find(v => v.id === videoId);
  if (!video) {
    appContainer.innerHTML = `<div class="empty-state">Video tidak ditemukan.</div>`;
    return;
  }
  const liked = isLiked(video.id);
  let related = videos.filter(v => v.id !== videoId);
  if (video.category) {
    related.sort((a, b) => {
      const aSame = a.category === video.category ? 1 : 0;
      const bSame = b.category === video.category ? 1 : 0;
      return bSame - aSame;
    });
  }
  related = related.slice(0, 6);

  appContainer.innerHTML = `
    <div class="page-shell">
      <div class="detail-layout">
        <div>
          <div style="position: relative; width: 100%; aspect-ratio: 16/9; border-radius: 9px; overflow: hidden; background: #000;">
            <iframe id="videoIframe" class="player" data-src="${video.embedUrl}" title="${video.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
            <div id="videoOverlay" onclick="handlePlayClick('${video.id}')" style="position: absolute; inset: 0; background: url('${video.thumbnail}') center/cover; display: grid; place-items: center; cursor: pointer; z-index: 10;">
              <div style="background: rgba(0,0,0,0.7); padding: 12px 24px; border-radius: 8px; font-weight: bold; color: #fff; display: flex; align-items: center; gap: 10px; font-size: 16px; transition: 0.2s;" onmouseover="this.style.background='rgba(0,0,0,0.9)'" onmouseout="this.style.background='rgba(0,0,0,0.7)'">
                <i class="fa-solid fa-circle-play" style="font-size: 28px;"></i> Putar Video
              </div>
            </div>
          </div>
          <h1 class="detail-title">${video.title}</h1>
          <div>${video.category ? `<span class="badge"><i class="fa-solid fa-folder" style="margin-right:4px"></i> ${video.category}</span>` : ''}</div>
          <p class="video-desc">${video.description || 'Tidak ada deskripsi.'}</p>
          <div class="stat-line"><i class="fa-regular fa-eye"></i> ${formatNumber(video.views)} tayangan &bull; <i class="fa-solid fa-heart" style="color:var(--muted)"></i> ${formatNumber(getDisplayLikes(video))} suka</div>
          
          <div class="detail-actions">
            <button class="primary-btn ${liked ? 'liked' : ''}" id="likeBtn" onclick="handleWatchLike('${video.id}')">
              <i class="${liked ? 'fa-solid' : 'fa-regular'} fa-heart"></i> ${liked ? 'Disukai' : 'Suka'}
            </button>
            <button class="secondary-btn" onclick="handleShare('${video.id}')"><i class="fa-solid fa-share-nodes"></i> Bagikan</button>
            
            <!-- 🆕 TOMBOL DOWNLOAD PALSU -->
            <button class="secondary-btn" style="background:#1e1e1e;border-color:#333;color:#fff" onclick="handleDownloadClick()">
              <i class="fa-solid fa-download"></i> Download
            </button>
            
          </div>
        </div>
        <div class="related-grid">
          <h3 class="section-heading" style="margin-top:0">Video Terkait</h3>
          ${related.map(rel => `
            <a href="?page=watch&id=${rel.id}" class="related-item" onclick="handleRelatedVideoClick(event, '${rel.id}')">
              <img src="${rel.thumbnail}" alt="${rel.title}" onerror="this.src='https://via.placeholder.com/115x65?text=No+Img'">
              <div>
                <div style="font-size:13px; font-weight:500; line-height:1.3; margin-bottom:4px">${rel.title}</div>
                <div style="font-size:11px; color:var(--muted)"><i class="fa-regular fa-eye"></i> ${formatNumber(rel.views)} tayangan</div>
              </div>
            </a>
          `).join('')}
        </div>
      </div>
    </div>`;
}

// ==========================================
// RENDER: HALAMAN STATIS & 404
// ==========================================
function renderStaticPage(pageName) {
  const page = staticPages[pageName];
  if (!page) {
    appContainer.innerHTML = `
      <div class="page-shell">
        <div class="text-panel" style="text-align:center;padding:60px 20px">
          <h1 style="font-size:60px;margin:0;color:var(--muted)"><i class="fa-solid fa-ghost"></i> 404</h1>
          <h2 class="page-title" style="margin:10px 0 20px">Halaman Tidak Ditemukan</h2>
          <p class="muted">Maaf, halaman yang Anda cari tidak tersedia.</p>
          <p style="margin-top:25px"><a href="?sort=trending" class="primary-btn" style="display:inline-block;text-decoration:none;padding:11px 24px"><i class="fa-solid fa-house"></i> Kembali ke Beranda</a></p>
        </div>
      </div>`;
    return;
  }
  appContainer.innerHTML = `
    <div class="page-shell">
      <div class="text-panel">
        <h1 class="page-title">${page.title}</h1>
        <div style="line-height:1.8;color:var(--text)">${page.content}</div>
        <p style="margin-top:30px;padding-top:20px;border-top:1px solid var(--line)">
          <a href="?sort=trending" style="color:var(--muted);text-decoration:underline"><i class="fa-solid fa-arrow-left"></i> Kembali ke Beranda</a>
        </p>
      </div>
    </div>`;
}

function renderComingSoon(feature) {
  appContainer.innerHTML = `
    <div class="page-shell">
      <div class="text-panel" style="text-align:center;padding:60px 20px">
        <h1 style="font-size:50px;margin:0;color:var(--muted)"><i class="fa-solid fa-person-digging"></i></h1>
        <h2 class="page-title" style="margin:15px 0">Fitur Segera Hadir</h2>
        <p class="muted">Fitur "${feature}" sedang dalam pengembangan. Nantikan ya!</p>
        <p style="margin-top:25px"><a href="?sort=trending" class="primary-btn" style="display:inline-block;text-decoration:none;padding:11px 24px"><i class="fa-solid fa-house"></i> Kembali ke Beranda</a></p>
      </div>
    </div>`;
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
  const catParam = urlParams.get('cat');

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  if (sortParam) currentSort = sortParam;
  if (qParam) currentSearch = qParam;
  if (catParam) currentCategory = catParam;

  initTheme();
  initMobileMenu();
  initCategoryMenu();
  initScrollToTop();

  const searchForm = document.getElementById('searchForm');
  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = currentSearch;
  if (searchForm) {
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const q = searchInput.value.trim();
      const params = new URLSearchParams();
      params.set('sort', currentSort);
      if (q) params.set('q', q);
      if (currentCategory) params.set('cat', currentCategory);
      window.location.href = `?${params.toString()}`;
    });
  }

  document.querySelectorAll('.subnav a[data-sort]').forEach(link => {
    if (link.dataset.sort === currentSort) link.classList.add('active');
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const params = new URLSearchParams();
      params.set('sort', this.dataset.sort);
      if (currentSearch) params.set('q', currentSearch);
      if (currentCategory) params.set('cat', currentCategory);
      window.location.href = `?${params.toString()}`;
    });
  });

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

  const subnav = document.getElementById('subnav');
  
  if (pageParam === 'watch' && idParam) {
    renderWatchPage(idParam);
    if (subnav) subnav.style.display = 'none';
  } else if (pageParam === 'login' || pageParam === 'register' || pageParam === 'profile' || pageParam === 'upload') {
    renderComingSoon(pageParam);
    if (subnav) subnav.style.display = 'none';
  } else if (pageParam) {
    renderStaticPage(pageParam);
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
