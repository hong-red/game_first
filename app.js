/**
 * 谷子的家 — 电子吧唧收纳册
 * 收纳册 · 痛桌 · 桌面 三合一
 */

// ===== 吧唧数据（从你的背景图裁剪生成） =====
const BADGES = [
  { id:1, name:'春日樱花', img:'assets/386f7216-b23e-4bb4-8d05-8b28ffb0b1d5_春季背景图.png', pos:'30% 40%', rarity:'SR', desc:'春风拂面，樱花纷飞的季节记忆' },
  { id:2, name:'夏日海边', img:'assets/bc30e759-542c-40cd-a653-74ee7ad280b2_夏季背景图.png', pos:'60% 30%', rarity:'SSR', desc:'阳光、沙滩、冰汽水的完美夏天' },
  { id:3, name:'秋日落叶', img:'assets/e0018974-9664-4694-b237-ddd431d7f9d8_秋季背景图.png', pos:'40% 50%', rarity:'SR', desc:'金黄落叶铺满街道的温馨秋日' },
  { id:4, name:'冬日雪景', img:'assets/c8911682-29e7-41c7-8ade-c8d9fe84e234_冬季背景图.png', pos:'50% 40%', rarity:'SSR', desc:'银装素裹，雪花飘落的浪漫冬季' },
  { id:5, name:'冰淇淋甜筒', img:'assets/17315fe8-216e-463b-b522-c47ee39c2c29_冰淇淋店背景图.png', pos:'45% 35%', rarity:'R', desc:'甜蜜清凉的香草冰淇淋' },
  { id:6, name:'草莓芭菲', img:'assets/4645483f-474c-42d6-b995-1415fe3eae61_冰淇淋店背景图2.png', pos:'50% 45%', rarity:'SR', desc:'层层堆叠的草莓芭菲，少女心爆棚' },
  { id:7, name:'薄荷冰沙', img:'assets/11b6f3b6-ed82-4d6f-8f65-2d987cc7750e_冰淇淋店背景图3.png', pos:'40% 40%', rarity:'R', desc:'透心凉的薄荷口味冰沙' },
  { id:8, name:'柠檬汽水', img:'assets/87dfef34-6d53-4c53-961a-0c6440f62c3c_冷饮店背景图.png', pos:'55% 30%', rarity:'R', desc:'气泡跳跃的清爽柠檬汽水' },
  { id:9, name:'珍珠奶茶', img:'assets/6e82a463-dcfc-45a9-befd-baf5fa59071f_冷饮店背景图2.png', pos:'45% 45%', rarity:'N', desc:'Q弹珍珠配香浓奶茶' },
  { id:10, name:'西瓜冰沙', img:'assets/c6cb622e-9c66-42d1-b32f-96a3cd6aa2af_冷饮店背景图3.png', pos:'35% 35%', rarity:'R', desc:'夏日必备的西瓜冰沙' },
  { id:11, name:'焦糖布丁', img:'assets/fdd9c184-5692-468d-a74d-5b2ceecdc9f7_冷饮店背景图4.png', pos:'50% 50%', rarity:'SR', desc:'香甜滑嫩的焦糖布丁' },
  { id:12, name:'牛角面包', img:'assets/d3622ca4-60d3-4fe2-8efb-b2e011a0f9a6_面包房背景图.png', pos:'40% 40%', rarity:'N', desc:'清晨现烤的酥脆牛角包' },
  { id:13, name:'玫瑰花束', img:'assets/bae9c4b5-80e0-42c9-bd97-e4a087c082ff_花店背景图.png', pos:'45% 35%', rarity:'SR', desc:'精心挑选的浪漫玫瑰花束' },
  { id:14, name:'旧书香气', img:'assets/d27472ff-6f87-4140-b17a-663f89c157e6_书店背景图.png', pos:'50% 40%', rarity:'R', desc:'泛黄书页中沉淀的时光故事' },
  { id:15, name:'调色盘', img:'assets/b50fe241-53ef-4926-8774-e5fc04956448_画室背景图.png', pos:'40% 45%', rarity:'R', desc:'色彩斑斓的灵感调色盘' },
  { id:16, name:'晚酌时光', img:'assets/79ff8b0d-2bcd-4d32-a4bf-6e86e08f05cd_小酒馆背景图.png', pos:'55% 30%', rarity:'SSR', desc:'夜晚小酒馆的温暖灯光' },
  { id:17, name:'洗衣篮', img:'assets/3c46e001-8a17-453c-931d-745033668ca4_洗衣店背景图.png', pos:'45% 40%', rarity:'N', desc:'干干净净的清新气息' },
  { id:18, name:'柴犬美容', img:'assets/a6235c7e-5bea-4db4-b0a2-733855d57283_宠物美容店背景图.png', pos:'50% 35%', rarity:'R', desc:'毛孩子变身可爱小天使' },
  { id:19, name:'复古唱片', img:'assets/4f052b4b-eb0a-41aa-be88-3cded59b4463_旧物杂货店背景图.png', pos:'40% 40%', rarity:'SR', desc:'旋转的黑胶唱片，流淌的老歌' },
  { id:20, name:'小镇全景', img:'assets/e9c4a7d1-adca-42fb-9ee9-236435e3da49_地图背景图.png', pos:'50% 50%', rarity:'UR', desc:'四季小镇的完整地图，传说中的隐藏款' }
];

const RARITY_LABEL = { N:'普通', R:'稀有', SR:'超稀有', SSR:'特级超稀有', UR:'传说' };
const RARITY_COLOR = { N:'#b8b8b8', R:'#74b9ff', SR:'#a29bfe', SSR:'#fdcb6e', UR:'#ff6b6b' };

// ===== 全局状态 =====
let currentMode = 'album';
let albumPage = 0;
const PER_PAGE = 6;
let deskPositions = []; // 痛桌上吧唧的位置

// ===== 初始化 =====
function init() {
  initModeSwitch();
  initAlbum();
  initDesk();
  initDesktop();
  initModal();
}

// ===== 模式切换 =====
function initModeSwitch() {
  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.dataset.mode;
      switchMode(mode);
    });
  });
}

function switchMode(mode) {
  currentMode = mode;
  document.querySelectorAll('.mode-btn').forEach(b => b.classList.toggle('active', b.dataset.mode === mode));
  document.querySelectorAll('.mode-view').forEach(v => v.classList.toggle('active', v.id === mode + '-mode'));
}

// ===== 吧唧DOM工厂 =====
function createBadgeEl(badge, cls = '') {
  const el = document.createElement('div');
  el.className = `badge ${cls}`;
  el.style.backgroundImage = `url('${badge.img}')`;
  el.style.backgroundPosition = badge.pos;
  el.dataset.id = badge.id;

  // 稀有度角标
  const r = document.createElement('span');
  r.className = `badge-rarity rarity-${badge.rarity}`;
  r.textContent = badge.rarity;
  el.appendChild(r);

  // 名称提示
  const name = document.createElement('span');
  name.className = 'badge-name';
  name.textContent = badge.name;
  el.appendChild(name);

  // 点击事件
  el.addEventListener('click', () => openModal(badge));

  return el;
}

// ===== 收纳册模式 =====
function initAlbum() {
  renderAlbumPage();
  document.getElementById('prev-page').addEventListener('click', () => {
    if (albumPage > 0) { albumPage--; renderAlbumPage(); }
  });
  document.getElementById('next-page').addEventListener('click', () => {
    const maxPage = Math.ceil(BADGES.length / PER_PAGE) - 1;
    if (albumPage < maxPage) { albumPage++; renderAlbumPage(); }
  });
}

function renderAlbumPage() {
  const left = document.getElementById('left-page');
  const right = document.getElementById('right-page');
  left.innerHTML = ''; right.innerHTML = '';

  const start = albumPage * PER_PAGE;
  const pageBadges = BADGES.slice(start, start + PER_PAGE);

  pageBadges.forEach((b, i) => {
    const el = createBadgeEl(b, 'album-badge');
    (i < 3 ? left : right).appendChild(el);
  });

  const totalPages = Math.ceil(BADGES.length / PER_PAGE);
  document.getElementById('page-num').textContent = `第 ${albumPage + 1} / ${totalPages} 页`;
}

// ===== 痛桌模式 =====
function initDesk() {
  const surface = document.getElementById('desk-surface');

  // 初始化随机位置
  deskPositions = BADGES.map((b, i) => ({
    id: b.id,
    x: 10 + (i % 5) * 18 + Math.random() * 8,
    y: 15 + Math.floor(i / 5) * 20 + Math.random() * 10,
    rot: (Math.random() - 0.5) * 30
  }));

  deskPositions.forEach((pos, i) => {
    const el = createBadgeEl(BADGES[i], 'desk-badge');
    el.style.left = pos.x + '%';
    el.style.top = pos.y + '%';
    el.style.transform = `rotate(${pos.rot}deg)`;
    el.dataset.idx = i;

    // 拖拽
    makeDraggable(el, i);
    surface.appendChild(el);
  });
}

function makeDraggable(el, idx) {
  let dragging = false;
  let startX, startY, origLeft, origTop;

  const onStart = (e) => {
    dragging = true;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    startX = clientX; startY = clientY;
    const rect = el.getBoundingClientRect();
    const parent = el.offsetParent.getBoundingClientRect();
    origLeft = rect.left - parent.left;
    origTop = rect.top - parent.top;
    el.style.zIndex = 100;
    el.style.transition = 'none';
  };

  const onMove = (e) => {
    if (!dragging) return;
    e.preventDefault();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const dx = clientX - startX;
    const dy = clientY - startY;
    el.style.left = (origLeft + dx) + 'px';
    el.style.top = (origTop + dy) + 'px';
  };

  const onEnd = () => {
    if (!dragging) return;
    dragging = false;
    el.style.zIndex = '';
    el.style.transition = 'transform 0.2s, box-shadow 0.2s';
    // 更新位置百分比
    const parent = el.offsetParent.getBoundingClientRect();
    const rect = el.getBoundingClientRect();
    deskPositions[idx].x = ((rect.left - parent.left) / parent.width) * 100;
    deskPositions[idx].y = ((rect.top - parent.top) / parent.height) * 100;
  };

  el.addEventListener('mousedown', onStart);
  el.addEventListener('touchstart', onStart, { passive: false });
  document.addEventListener('mousemove', onMove);
  document.addEventListener('touchmove', onMove, { passive: false });
  document.addEventListener('mouseup', onEnd);
  document.addEventListener('touchend', onEnd);
}

// ===== 桌面模式 =====
function initDesktop() {
  // 默认春季壁纸
  setWallpaper('spring');

  document.querySelectorAll('.wp-thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      setWallpaper(thumb.dataset.wp);
      document.querySelectorAll('.wp-thumb').forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
    });
  });
  document.querySelector('.wp-thumb[data-wp="spring"]').classList.add('active');

  renderCalendar();
  startClock();
}

function setWallpaper(season) {
  const wp = document.getElementById('wallpaper');
  const map = {
    spring: 'assets/386f7216-b23e-4bb4-8d05-8b28ffb0b1d5_春季背景图.png',
    summer: 'assets/bc30e759-542c-40cd-a653-74ee7ad280b2_夏季背景图.png',
    autumn: 'assets/e0018974-9664-4694-b237-ddd431d7f9d8_秋季背景图.png',
    winter: 'assets/c8911682-29e7-41c7-8ade-c8d9fe84e234_冬季背景图.png'
  };
  wp.style.backgroundImage = `url('${map[season]}')`;
}

function startClock() {
  const update = () => {
    const now = new Date();
    const h = now.getHours(), m = now.getMinutes(), s = now.getSeconds();
    document.getElementById('hour-hand').style.transform = `rotate(${(h % 12) * 30 + m * 0.5}deg)`;
    document.getElementById('minute-hand').style.transform = `rotate(${m * 6}deg)`;
    document.getElementById('second-hand').style.transform = `rotate(${s * 6}deg)`;
    document.getElementById('digital-time').textContent =
      String(h).padStart(2,'0') + ':' + String(m).padStart(2,'0');
  };
  update();
  setInterval(update, 1000);
}

function renderCalendar() {
  const now = new Date();
  const year = now.getFullYear(), month = now.getMonth(), day = now.getDate();
  document.getElementById('cal-month').textContent = `${year}年${month + 1}月`;

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const weekdays = ['日','一','二','三','四','五','六'];

  let html = weekdays.map(w => `<div class="cal-weekday">${w}</div>`).join('');
  for (let i = 0; i < firstDay; i++) html += '<div></div>';
  for (let d = 1; d <= daysInMonth; d++) {
    const cls = d === day ? 'cal-day today' : 'cal-day';
    html += `<div class="${cls}">${d}</div>`;
  }
  document.getElementById('cal-body').innerHTML = html;
}

// ===== 弹窗 =====
function initModal() {
  document.querySelector('.modal-overlay').addEventListener('click', closeModal);
  document.querySelector('.modal-close').addEventListener('click', closeModal);
}

function openModal(badge) {
  document.getElementById('modal-badge').style.backgroundImage = `url('${badge.img}')`;
  document.getElementById('modal-badge').style.backgroundPosition = badge.pos;
  document.getElementById('modal-name').textContent = badge.name;
  document.getElementById('modal-rarity').textContent = `${badge.rarity} · ${RARITY_LABEL[badge.rarity]}`;
  document.getElementById('modal-rarity').style.color = RARITY_COLOR[badge.rarity];
  document.getElementById('modal-desc').textContent = badge.desc;
  document.getElementById('badge-modal').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('badge-modal').classList.add('hidden');
}

// ===== 启动 =====
init();
