/**
 * 四季小镇 - 游戏主逻辑
 * 探索 · 经营 · 遇见温暖的故事
 */

// ===== 游戏数据 =====
const SEASONS = {
  spring: { name: '春季', icon: '🌸', color: '#ffb7c5', bg: '.uploads/386f7216-b23e-4bb4-8d05-8b28ffb0b1d5_春季背景图.png' },
  summer: { name: '夏季', icon: '☀️', color: '#7fdbda', bg: '.uploads/bc30e759-542c-40cd-a653-74ee7ad280b2_夏季背景图.png' },
  autumn: { name: '秋季', icon: '🍂', color: '#f4a261', bg: '.uploads/e0018974-9664-4694-b237-ddd431d7f9d8_秋季背景图.png' },
  winter: { name: '冬季', icon: '❄️', color: '#a8d8ea', bg: '.uploads/c8911682-29e7-41c7-8ade-c8d9fe84e234_冬季背景图.png' }
};

const SHOPS = [
  {
    id: 'icecream', name: '冰淇淋店', icon: '🍦', owner: '小雪', avatar: '👩‍🍳',
    bg: '.uploads/17315fe8-216e-463b-b522-c47ee39c2c29_冰淇淋店背景图.png',
    desc: '甜蜜清凉的冰淇淋小店',
    items: ['香草冰淇淋', '草莓甜筒', '抹茶芭菲'],
    pos: { left: '18%', top: '28%' },
    firstDialogue: [
      { speaker: '小雪', avatar: '👩‍🍳', text: '欢迎光临！我是小雪，这家冰淇淋店的店主。' },
      { speaker: '小雪', avatar: '👩‍🍳', text: '无论哪个季节，总有一款冰淇淋适合你的心情~ 要尝尝我今天新做的口味吗？' }
    ],
    dailyDialogue: [
      { speaker: '小雪', avatar: '👩‍🍳', text: '今天想尝尝什么口味的冰淇淋呢？' },
      { speaker: '小雪', avatar: '👩‍🍳', text: '刚做好的草莓甜筒，特别新鲜哦！' }
    ],
    seasonalDialogue: {
      winter: { speaker: '小雪', avatar: '👩‍🍳', text: '冬天吃冰淇淋才是真爱！来挑战一下极限吗？' }
    }
  },
  {
    id: 'colddrink', name: '冷饮店', icon: '🥤', owner: '阿凉', avatar: '🧑‍🌾',
    bg: '.uploads/87dfef34-6d53-4c53-961a-0c6440f62c3c_冷饮店背景图.png',
    desc: '清爽解暑的饮品驿站',
    items: ['柠檬汽水', '珍珠奶茶', '西瓜冰沙'],
    pos: { left: '42%', top: '18%' },
    firstDialogue: [
      { speaker: '阿凉', avatar: '🧑‍🌾', text: '嘿！欢迎光临冷饮店！我是阿凉。' },
      { speaker: '阿凉', avatar: '🧑‍🌾', text: '这里的每一杯饮品都是用心调制的，喝一口就能忘记所有烦恼！' }
    ],
    dailyDialogue: [
      { speaker: '阿凉', avatar: '🧑‍🌾', text: '天气这么热，来杯冰饮降降温吧！' },
      { speaker: '阿凉', avatar: '🧑‍🌾', text: '新出的薄荷柠檬茶，要不要试试？' }
    ],
    seasonalDialogue: {
      summer: { speaker: '阿凉', avatar: '🧑‍🌾', text: '夏天是冷饮店的旺季！忙不过来了，能来帮个忙吗？' },
      winter: { speaker: '阿凉', avatar: '🧑‍🌾', text: '冬天也有热饮供应哦，暖胃又暖心~' }
    }
  },
  {
    id: 'bakery', name: '面包房', icon: '🍞', owner: '麦叔', avatar: '👨‍🍳',
    bg: '.uploads/d3622ca4-60d3-4fe2-8efb-b2e011a0f9a6_面包房背景图.png',
    desc: '香喷喷的现烤面包',
    items: ['牛角面包', '法棍', '草莓蛋糕'],
    pos: { left: '68%', top: '25%' },
    firstDialogue: [
      { speaker: '麦叔', avatar: '👨‍🍳', text: '欢迎欢迎！我是麦叔，这家面包房的老板。' },
      { speaker: '麦叔', avatar: '👨‍🍳', text: '每天清晨四点我就起来揉面了，只为让你吃到最新鲜的面包！' }
    ],
    dailyDialogue: [
      { speaker: '麦叔', avatar: '👨‍🍳', text: '刚出炉的牛角包，香气扑鼻啊！' },
      { speaker: '麦叔', avatar: '👨‍🍳', text: '今天想带点什么面包回家？' }
    ],
    seasonalDialogue: {
      autumn: { speaker: '麦叔', avatar: '👨‍🍳', text: '秋天是收获的季节，南瓜面包特别受欢迎！' }
    }
  },
  {
    id: 'flower', name: '花店', icon: '🌸', owner: '花姐', avatar: '👩‍🌾',
    bg: '.uploads/bae9c4b5-80e0-42c9-bd97-e4a087c082ff_花店背景图.png',
    desc: '芬芳四溢的花卉世界',
    items: ['玫瑰花束', '向日葵', '满天星'],
    pos: { left: '12%', top: '55%' },
    firstDialogue: [
      { speaker: '花姐', avatar: '👩‍🌾', text: '你好呀！欢迎来到花店，我是花姐。' },
      { speaker: '花姐', avatar: '👩‍🌾', text: '每一朵花都有自己的语言，你想听听它们的故事吗？' }
    ],
    dailyDialogue: [
      { speaker: '花姐', avatar: '👩‍🌾', text: '今天的玫瑰开得特别好呢！' },
      { speaker: '花姐', avatar: '👩‍🌾', text: '送花是表达心意的最好方式哦~' }
    ],
    seasonalDialogue: {
      spring: { speaker: '花姐', avatar: '👩‍🌾', text: '春天来了，百花齐放！这是花店最美的季节！' }
    }
  },
  {
    id: 'bookstore', name: '书店', icon: '📚', owner: '墨先生', avatar: '👨‍🏫',
    bg: '.uploads/d27472ff-6f87-4140-b17a-663f89c157e6_书店背景图.png',
    desc: '安静温暖的阅读角落',
    items: ['散文集', '推理小说', '绘本'],
    pos: { left: '38%', top: '50%' },
    firstDialogue: [
      { speaker: '墨先生', avatar: '👨‍🏫', text: '欢迎光临。我是墨先生，这家书店的店主。' },
      { speaker: '墨先生', avatar: '👨‍🏫', text: '在这里，你可以找到任何你想读的书。没有的话，我就去帮你找。' }
    ],
    dailyDialogue: [
      { speaker: '墨先生', avatar: '👨‍🏫', text: '最近新进了一批好书，有兴趣看看吗？' },
      { speaker: '墨先生', avatar: '👨‍🏫', text: '读书是最好的旅行。' }
    ],
    seasonalDialogue: {
      winter: { speaker: '墨先生', avatar: '👨‍🏫', text: '冬天最适合窝在书里，来杯热茶配本好书吧。' }
    }
  },
  {
    id: 'artstudio', name: '画室', icon: '🎨', owner: '林画家', avatar: '👩‍🎨',
    bg: '.uploads/b50fe241-53ef-4926-8774-e5fc04956448_画室背景图.png',
    desc: '色彩斑斓的创作天地',
    items: ['风景画', '肖像画', '水彩明信片'],
    pos: { left: '62%', top: '52%' },
    firstDialogue: [
      { speaker: '林画家', avatar: '👩‍🎨', text: '嗨！欢迎来到我的画室！我是林画家。' },
      { speaker: '林画家', avatar: '👩‍🎨', text: '每个人心中都有一幅画，我可以帮你把它画出来！' }
    ],
    dailyDialogue: [
      { speaker: '林画家', avatar: '👩‍🎨', text: '今天灵感爆棚，正在画一幅新作！' },
      { speaker: '林画家', avatar: '👩‍🎨', text: '想试试自己动手画画吗？' }
    ],
    seasonalDialogue: {
      autumn: { speaker: '林画家', avatar: '👩‍🎨', text: '秋天的颜色太美了，正是写生的好时节！' }
    }
  },
  {
    id: 'tavern', name: '小酒馆', icon: '🍺', owner: '老陈', avatar: '👨‍🦳',
    bg: '.uploads/79ff8b0d-2bcd-4d32-a4bf-6e86e08f05cd_小酒馆背景图.png',
    desc: '温馨放松的夜晚去处',
    items: ['精酿啤酒', '果酒', '小食拼盘'],
    pos: { left: '85%', top: '40%' },
    firstDialogue: [
      { speaker: '老陈', avatar: '👨‍🦳', text: '来啦！我是老陈，这家小酒馆的老板。' },
      { speaker: '老陈', avatar: '👨‍🦳', text: '白天经营店铺辛苦了，晚上来我这儿坐坐，喝杯小酒放松一下吧。' }
    ],
    dailyDialogue: [
      { speaker: '老陈', avatar: '👨‍🦳', text: '今晚想喝点什么？老陈给你推荐！' },
      { speaker: '老陈', avatar: '👨‍🦳', text: '人生不如意十之八九，但一杯好酒能解千愁。' }
    ],
    seasonalDialogue: {
      winter: { speaker: '老陈', avatar: '👨‍🦳', text: '冬天来杯温热的果酒，从头暖到脚！' }
    }
  },
  {
    id: 'laundry', name: '洗衣店', icon: '👕', owner: '阿洁', avatar: '👩‍🔧',
    bg: '.uploads/3c46e001-8a17-453c-931d-745033668ca4_洗衣店背景图.png',
    desc: '干净整洁的洗衣服务',
    items: ['普通洗护', '精细洗护', '熨烫服务'],
    pos: { left: '8%', top: '78%' },
    firstDialogue: [
      { speaker: '阿洁', avatar: '👩‍🔧', text: '你好！欢迎光临洗衣店，我是阿洁。' },
      { speaker: '阿洁', avatar: '👩‍🔧', text: '把你的衣服交给我吧，保证洗得干干净净、香喷喷的！' }
    ],
    dailyDialogue: [
      { speaker: '阿洁', avatar: '👩‍🔧', text: '有衣服需要洗吗？今天优惠活动哦！' },
      { speaker: '阿洁', avatar: '👩‍🔧', text: '干净的衣裳，愉快的心情~' }
    ],
    seasonalDialogue: {
      spring: { speaker: '阿洁', avatar: '👩‍🔧', text: '春天容易过敏，我把你的衣服都用温和洗涤剂处理啦！' }
    }
  },
  {
    id: 'pet', name: '宠物美容店', icon: '🐕', owner: '小喵', avatar: '👩‍⚕️',
    bg: '.uploads/a6235c7e-5bea-4db4-b0a2-733855d57283_宠物美容店背景图.png',
    desc: '萌宠变美的秘密基地',
    items: ['洗澡美容', '毛发修剪', '宠物SPA'],
    pos: { left: '35%', top: '78%' },
    firstDialogue: [
      { speaker: '小喵', avatar: '👩‍⚕️', text: '欢迎欢迎！我是小喵，宠物美容师！' },
      { speaker: '小喵', avatar: '👩‍⚕️', text: '每个毛孩子都是小天使，我要让它们变得更可爱！' }
    ],
    dailyDialogue: [
      { speaker: '小喵', avatar: '👩‍⚕️', text: '今天有带小宝贝来美容吗？' },
      { speaker: '小喵', avatar: '👩‍⚕️', text: '刚给一只柴犬剪了造型，超萌的！' }
    ],
    seasonalDialogue: {
      summer: { speaker: '小喵', avatar: '👩‍⚕️', text: '夏天给宠物剃毛清凉一下，它们会舒服很多哦！' }
    }
  },
  {
    id: 'vintage', name: '旧物杂货店', icon: '📻', owner: '古爷', avatar: '👴',
    bg: '.uploads/4f052b4b-eb0a-41aa-be88-3cded59b4463_旧物杂货店背景图.png',
    desc: '装满回忆的老物件',
    items: ['复古唱片', '老相机', '手工饰品'],
    pos: { left: '65%', top: '78%' },
    firstDialogue: [
      { speaker: '古爷', avatar: '👴', text: '年轻人，欢迎来到旧物杂货店。我是古爷。' },
      { speaker: '古爷', avatar: '👴', text: '这里的每件东西都有自己的故事。慢慢看，说不定能找到属于你的那件。' }
    ],
    dailyDialogue: [
      { speaker: '古爷', avatar: '👴', text: '又收到一批老物件，来看看有没有喜欢的？' },
      { speaker: '古爷', avatar: '👴', text: '旧物虽旧，回忆却是新的。' }
    ],
    seasonalDialogue: {
      autumn: { speaker: '古爷', avatar: '👴', text: '秋天让人怀旧，这些老物件正好应景。' }
    }
  }
];

// ===== 游戏主类 =====
class Game {
  constructor() {
    this.season = 'spring';
    this.gold = 100;
    this.mood = 50;
    this.day = 1;
    this.visited = new Set();
    this.currentShop = null;
    this.dialogueQueue = [];
    this.isTyping = false;
    this.minigameActive = false;
    this.combo = 0;
    this.progress = 0;
    this.init();
  }

  init() {
    this.bindEvents();
    this.renderMap();
    this.updateUI();
  }

  bindEvents() {
    // 开始游戏
    document.getElementById('start-btn').addEventListener('click', () => this.startGame());

    // 季节切换
    const seasonBtn = document.getElementById('season-btn');
    const seasonMenu = document.getElementById('season-menu');
    seasonBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      seasonMenu.classList.toggle('hidden');
    });
    document.addEventListener('click', () => seasonMenu.classList.add('hidden'));
    seasonMenu.addEventListener('click', (e) => {
      e.stopPropagation();
      const item = e.target.closest('.dropdown-item');
      if (item) {
        this.changeSeason(item.dataset.season);
        seasonMenu.classList.add('hidden');
      }
    });

    // 店铺操作
    document.getElementById('back-btn').addEventListener('click', () => this.showMap());
    document.getElementById('chat-btn').addEventListener('click', () => this.chatWithOwner());
    document.getElementById('work-btn').addEventListener('click', () => this.startMinigame());
    document.getElementById('gift-btn').addEventListener('click', () => this.giftOwner());

    // 对话
    document.getElementById('dialogue-next').addEventListener('click', () => this.nextDialogue());
    document.getElementById('dialogue-box').addEventListener('click', () => {
      if (!this.isTyping) this.nextDialogue();
    });

    // 小游戏
    document.getElementById('action-btn').addEventListener('click', () => this.minigameClick());
    document.getElementById('close-minigame').addEventListener('click', () => this.closeMinigame());
  }

  startGame() {
    document.getElementById('start-screen').classList.remove('active');
    document.getElementById('game-screen').classList.add('active');
    this.showNotification('欢迎来到四季小镇！');
  }

  changeSeason(season) {
    if (this.season === season) return;
    this.season = season;
    const s = SEASONS[season];

    // 更新季节按钮
    const badge = document.getElementById('season-btn');
    badge.style.background = s.color;
    document.getElementById('season-icon').textContent = s.icon;
    document.getElementById('season-name').textContent = s.name;

    // 更新地图滤镜
    const mapBg = document.querySelector('.map-bg');
    const filters = {
      spring: 'hue-rotate(0deg) brightness(1.05)',
      summer: 'hue-rotate(-10deg) brightness(1.1) saturate(1.2)',
      autumn: 'hue-rotate(30deg) brightness(0.95) saturate(0.9)',
      winter: 'hue-rotate(180deg) brightness(1.05) saturate(0.6)'
    };
    mapBg.style.filter = filters[season];

    this.showNotification(`季节切换为${s.name} ${s.icon}`);
  }

  renderMap() {
    const container = document.getElementById('shop-markers');
    container.innerHTML = '';

    SHOPS.forEach(shop => {
      const marker = document.createElement('div');
      marker.className = 'shop-marker';
      marker.style.left = shop.pos.left;
      marker.style.top = shop.pos.top;
      marker.innerHTML = `
        <div class="marker-icon" style="border-color: ${SEASONS[this.season].color}">${shop.icon}</div>
        <div class="marker-label">${shop.name}</div>
      `;
      marker.addEventListener('click', () => this.enterShop(shop.id));
      container.appendChild(marker);
    });
  }

  enterShop(shopId) {
    const shop = SHOPS.find(s => s.id === shopId);
    if (!shop) return;

    this.currentShop = shop;
    const isFirst = !this.visited.has(shopId);

    // 切换视图
    document.getElementById('map-view').classList.remove('active');
    document.getElementById('shop-view').classList.add('active');

    // 设置背景
    document.querySelector('.shop-bg').style.backgroundImage = `url('${shop.bg}')`;
    document.getElementById('shop-name').textContent = shop.name;
    document.getElementById('shop-owner').textContent = `店主：${shop.owner}`;
    document.getElementById('owner-avatar').textContent = shop.avatar;

    // 标记已访问
    this.visited.add(shopId);

    // 播放首次剧情对话
    if (isFirst && shop.firstDialogue) {
      this.showDialogue([...shop.firstDialogue]);
    }
  }

  showMap() {
    document.getElementById('shop-view').classList.remove('active');
    document.getElementById('map-view').classList.add('active');
    this.currentShop = null;
    this.renderMap(); // 重新渲染以更新季节边框色
  }

  // ===== 对话系统 =====
  showDialogue(dialogues) {
    this.dialogueQueue = dialogues;
    document.getElementById('dialogue-box').classList.remove('hidden');
    this.nextDialogue();
  }

  nextDialogue() {
    if (this.isTyping) {
      // 跳过打字动画，直接显示完整文本
      this.isTyping = false;
      const current = this.dialogueQueue[0];
      if (current) {
        document.getElementById('dialogue-text').textContent = current.text;
      }
      return;
    }

    if (this.dialogueQueue.length === 0) {
      document.getElementById('dialogue-box').classList.add('hidden');
      return;
    }

    const line = this.dialogueQueue.shift();
    document.getElementById('speaker-name').textContent = line.speaker;
    document.getElementById('speaker-avatar').textContent = line.avatar || '👤';

    // 打字机效果
    const textEl = document.getElementById('dialogue-text');
    textEl.textContent = '';
    this.isTyping = true;
    let i = 0;
    const type = () => {
      if (!this.isTyping) return;
      if (i < line.text.length) {
        textEl.textContent += line.text[i];
        i++;
        setTimeout(type, 30);
      } else {
        this.isTyping = false;
      }
    };
    type();
  }

  chatWithOwner() {
    if (!this.currentShop) return;
    const shop = this.currentShop;
    const seasonLine = shop.seasonalDialogue?.[this.season];

    let dialogues;
    if (seasonLine && Math.random() > 0.5) {
      dialogues = [seasonLine];
    } else {
      const daily = shop.dailyDialogue;
      dialogues = [daily[Math.floor(Math.random() * daily.length)]];
    }

    this.showDialogue(dialogues);
    this.mood = Math.min(100, this.mood + 3);
    this.updateUI();
  }

  giftOwner() {
    if (!this.currentShop) return;
    if (this.gold < 10) {
      this.showNotification('金币不足... 去帮忙经营赚点吧！');
      return;
    }
    this.gold -= 10;
    this.mood = Math.min(100, this.mood + 8);
    this.updateUI();
    this.showNotification(`送给${this.currentShop.owner}一份礼物，心情提升了！`);
  }

  // ===== 经营小游戏 =====
  startMinigame() {
    if (!this.currentShop) return;
    this.minigameActive = true;
    this.combo = 0;
    this.progress = 0;
    document.getElementById('minigame-overlay').classList.remove('hidden');
    document.getElementById('minigame-title').textContent = `在${this.currentShop.name}帮忙`;
    document.getElementById('minigame-desc').textContent = `快速点击按钮，帮助${this.currentShop.owner}完成制作！`;
    this.updateMinigameUI();
  }

  minigameClick() {
    if (!this.minigameActive) return;
    this.combo++;
    const increment = Math.min(8 + this.combo, 25);
    this.progress = Math.min(100, this.progress + increment);
    this.updateMinigameUI();

    if (this.progress >= 100) {
      this.completeMinigame();
    }
  }

  updateMinigameUI() {
    document.getElementById('progress-bar').style.width = this.progress + '%';
    document.getElementById('progress-text').textContent = Math.floor(this.progress) + '%';
    document.getElementById('combo').textContent = this.combo;
  }

  completeMinigame() {
    this.minigameActive = false;
    const reward = 15 + Math.floor(this.combo / 3);
    this.gold += reward;
    this.mood = Math.min(100, this.mood + 5);
    this.updateUI();
    document.getElementById('minigame-overlay').classList.add('hidden');
    this.showNotification(`经营完成！获得 ${reward} 金币`);

    // 可能触发剧情
    if (this.currentShop && Math.random() > 0.6) {
      setTimeout(() => {
        const extra = [
          { speaker: this.currentShop.owner, avatar: this.currentShop.avatar, text: '谢谢你帮忙！有你在轻松多了~' }
        ];
        this.showDialogue(extra);
      }, 400);
    }
  }

  closeMinigame() {
    this.minigameActive = false;
    document.getElementById('minigame-overlay').classList.add('hidden');
  }

  // ===== 工具方法 =====
  updateUI() {
    document.getElementById('gold').textContent = this.gold;
    document.getElementById('mood').textContent = this.mood;
    document.getElementById('day').textContent = `第${this.day}天`;
  }

  showNotification(text) {
    const el = document.getElementById('notification');
    document.getElementById('notification-text').textContent = text;
    el.classList.remove('hidden');
    setTimeout(() => el.classList.add('hidden'), 2200);
  }
}

// ===== 启动 =====
const game = new Game();
