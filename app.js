// ── Global state ──
var currentDir = 'eu';
var dragSrc = null;
var activeRefTarget = null;

// ── Segment data for S01E02 ──
var SEG_DATA = [
  { id:'SEG01', scene:'Starleaf Hotel Room', time:'00:00-00:08', dur:'8s', chars:['Elena'], refs:[{s:'assets/img/Elena_Outfit2.jpg',t:'Elena_Outfit2'},{s:'assets/img/Starleaf Hotel Room.jpg',t:'Starleaf Hotel Room'}], vi:1,
    prompt:'@[Starleaf Hotel Room]，自然光从窗户斜射入为主光，暖白色壁灯辅助，整体明暗对比柔和。0-8秒：固定机位，全景平拍，画面取景酒店大床区域，大床横贯画面中部，@[Elena_White Towel]躺在凌乱的白色床铺上，眉头微皱，缓缓睁开眼睛，伸出手揉了揉太阳穴，柔软的白色被子搭在身上，慵懒清晨氛围。无BGM无背景音乐，仅保留对白和场景音效。'},
  { id:'SEG02', scene:'Starleaf Hotel Room', time:'00:08-00:15', dur:'7s', chars:['Elena'], refs:[{s:'assets/img/Elena_Outfit2.jpg',t:'Elena_Outfit2'}], vi:2,
    prompt:'@[Starleaf Hotel Room]，自然光从窗户斜射入为主光，暖白色壁灯辅助，整体明暗对比柔和。0-7秒：镜头缓慢推近，中景平拍，画面取景大床一侧，@[Elena_White Towel]猛地坐起身，神色惊恐，双手紧紧抓着白色被子捂在胸前，转头环顾四周，光线打在白皙的肩膀上，紧张氛围。无BGM无背景音乐，仅保留对白和场景音效。'},
  { id:'SEG03_A', scene:'Starleaf Hotel Room', time:'00:15-00:23', dur:'8s', chars:['Elena'], refs:[{s:'assets/img/Elena_Outfit2.jpg',t:'Elena_Outfit2'}], vi:3,
    prompt:'@[Starleaf Hotel Room]，自然光从窗户斜射入为主光，暖白色壁灯辅助，整体明暗对比柔和。0-8秒：固定机位，近景平拍，@[Elena_White Towel]（声音：清亮女声，语调懊恼）咬着嘴唇，眉头紧锁，低声自语\'What exactly did I do last night?\'。无BGM无背景音乐，仅保留对白和场景音效。'},
  { id:'SEG03_B', scene:'Starleaf Hotel Room', time:'00:23-00:31', dur:'8s', chars:['Elena'], refs:[{s:'assets/img/Elena_Outfit2.jpg',t:'Elena_Outfit2'}], vi:4,
    prompt:'@[Starleaf Hotel Room]，自然光从窗户斜射入为主光，暖白色壁灯辅助，整体明暗对比柔和。0-8秒：镜头拉出，全景平拍，@[Elena_White Towel]掀开被子，匆忙下床，弯腰在木质地板上捡起散落的黑色衣物，慌乱逃离氛围。无BGM无背景音乐，仅保留对白和场景音效。'},
  { id:'SEG04', scene:'Starleaf Hotel Lobby and Corridor', time:'00:31-00:46', dur:'15s', chars:['Elena','Mia'], refs:[{s:'assets/img/Elena_Outfit3.jpg',t:'Elena_Outfit3'},{s:'assets/img/StarleafHotelLobbyAndCorridor.jpg',t:'Starleaf Hotel Lobby'}], vi:5,
    prompt:'@[Starleaf Hotel Lobby and Corridor]，冷白色LED顶灯为主光，大堂自然光辅助，整体明亮通透。0-5秒：固定机位，中景平拍，画面取景前台区域，深色实木前台横贯画面，@[Elena_Hotel Black Suit Uniform]坐在前台后整理文件；5-12秒：镜头横移，@[Mia_White Suit Jacket]凑近前台，双手撑在桌面上，笑着说\'Elena, why didn\'t you go on the blind date with the hot guy I recommended last night?\'，接着撇嘴说\'I stayed up all night waiting for the gossip.\'；12-15秒：近景切至@[Elena_Hotel Black Suit Uniform]，猛地抬头，眼睛睁大，脱口而出\'What did you say?\'，职场八卦氛围。无BGM无背景音乐，仅保留对白和场景音效。'},
  { id:'SEG05_A', scene:'Starleaf Hotel Lobby and Corridor', time:'00:46-00:53', dur:'7s', chars:['Elena'], refs:[{s:'assets/img/Elena_Outfit3.jpg',t:'Elena_Outfit3'},{s:'assets/img/StarleafHotelLobbyAndCorridor.jpg',t:'Starleaf Hotel Lobby'}], vi:6,
    prompt:'@[Starleaf Hotel Lobby and Corridor]，冷白色LED顶灯为主光，大堂自然光辅助，整体明亮通透。0-7秒：固定机位，近景平拍，@[Elena_Hotel Black Suit Uniform]（声音：清亮女声，语调迟疑）眼神闪躲，结巴地说\'That guy last night, he...\'，【画面闪回】模糊的酒店大床画面【闪回结束，回到现实】。无BGM无背景音乐，仅保留对白和场景音效。'},
  { id:'SEG05_B', scene:'Starleaf Hotel Lobby and Corridor', time:'00:53-01:04', dur:'11s', chars:['Elena','Mia'], refs:[{s:'assets/img/Elena_Outfit3.jpg',t:'Elena_Outfit3'},{s:'assets/img/StarleafHotelLobbyAndCorridor.jpg',t:'Starleaf Hotel Lobby'}], vi:7,
    prompt:'@[Starleaf Hotel Lobby and Corridor]，冷白色LED顶灯为主光，大堂自然光辅助，整体明亮通透。0-8秒：近景切至@[Mia_White Suit Jacket]，指着Elena的脸，惊呼\'Oh my god!\'，接着说\'Your dark circles are practically down to your chin. Hurry up and touch up your makeup, or a client might complain later.\'；8-11秒：中景双人，@[Elena_Hotel Black Suit Uniform]慌乱地从口袋掏出粉饼盒打开补妆，哑光塑料粉饼盒反光，轻松日常氛围。无BGM无背景音乐，仅保留对白和场景音效。'},
  { id:'SEG06', scene:'Starleaf Hotel Lobby and Corridor', time:'01:04-01:15', dur:'11s', chars:['Victor'], refs:[{s:'assets/img/Victor_BlackSuitGreyShirt.jpg',t:'Victor_BlackSuitGreyShirt'},{s:'assets/img/StarleafHotelLobbyAndCorridor.jpg',t:'Starleaf Hotel Lobby'}], vi:8,
    prompt:'@[Starleaf Hotel Lobby and Corridor]，室外强烈自然光为主光，画面明亮。0-6秒：固定机位，全景平拍，画面取景酒店大门外车道，一辆黑色迈巴赫平稳驶入画面停下，黑色车漆在阳光下闪烁；6-11秒：镜头推近，近景平拍，车门打开，@[Victor_Black Suit Dark Grey Shirt]迈出长腿下车，整理了一下深色西装外套，面无表情，霸总出场氛围。无BGM无背景音乐，仅保留对白和场景音效。'},
  { id:'SEG07', scene:'Starleaf Hotel Lobby and Corridor', time:'01:15-01:28', dur:'13s', chars:['Victor'], refs:[{s:'assets/img/Victor_BlackSuitGreyShirt.jpg',t:'Victor_BlackSuitGreyShirt'},{s:'assets/img/StarleafHotelLobbyAndCorridor.jpg',t:'Starleaf Hotel Lobby'}], vi:9,
    prompt:'@[Starleaf Hotel Lobby and Corridor]，冷白色LED顶灯为主光，大堂自然光辅助，整体明亮通透。0-13秒：稳定器跟随，中景平拍，画面取景大堂中央，@[Victor_Black Suit Dark Grey Shirt]单手插兜，迈着沉稳的步伐穿过大堂，周围虚化，画外音\'Oh my god, I heard the Jiang family is marrying into the Shen family to push forward a merger, it\'s going to be another corporate earthquake.\'，另一画外音\'So that\'s the legendary Mr. Jiang, he\'s so handsome.\'，高冷气场氛围。无BGM无背景音乐，仅保留对白和场景音效。'},
  { id:'SEG08', scene:'Starleaf Hotel Lobby and Corridor', time:'01:28-01:38', dur:'10s', chars:['Elena','Mia','Victor'], refs:[{s:'assets/img/Elena_Outfit3.jpg',t:'Elena_Outfit3'},{s:'assets/img/Victor_BlackSuitGreyShirt.jpg',t:'Victor_BlackSuitGreyShirt'},{s:'assets/img/StarleafHotelLobbyAndCorridor.jpg',t:'Starleaf Hotel Lobby'}], vi:10,
    prompt:'@[Starleaf Hotel Lobby and Corridor]，冷白色LED顶灯为主光，大堂自然光辅助，整体明亮通透。0-10秒：固定机位，中景平拍，画面取景前台，@[Mia_White Suit Jacket]激动地摇晃@[Elena_Hotel Black Suit Uniform]的肩膀，指着前方，喊道\'Look, look!\'，接着双手捧心说\'Perfect proportions, flawless face, he is the absolute ceiling of my ideal type!\'，画面远景处可见@[Victor_Black Suit Dark Grey Shirt]离去的背影，@[Elena_Hotel Black Suit Uniform]顺着视线看去，神色微怔，花痴氛围。无BGM无背景音乐，仅保留对白和场景音效。'},
  { id:'SEG09', scene:'Jiang Estate Reception Room', time:'01:38-01:53', dur:'15s', chars:['Victor'], refs:[{s:'assets/img/Victor_BlackSuitGreyShirt.jpg',t:'Victor_BlackSuitGreyShirt'}], vi:11,
    prompt:'@[Jiang Estate Reception Room]，自然光从落地窗斜射入为主光，冷白色顶灯辅助，整体明亮但气氛压抑。0-15秒：固定机位，中景平拍，画面取景沙发区，@[Victor_Black Suit Dark Grey Shirt]坐在米色布艺沙发上双手交握抵着下巴神色冷峻，@[Thomas_Dark Grey Suit]站在一旁微微弯腰，满脸焦急，恳求道\'Mr. Jiang, our Shen family has wronged you. Zhiyi, she got into an accident abroad. Because of a hit-and-run, she is now in prison waiting for sentencing. We... we really couldn\'t hide it anymore.\'，深色西装面料泛着微光，沉重压抑氛围。无BGM无背景音乐，仅保留对白和场景音效。'},
  { id:'SEG10', scene:'Jiang Estate Reception Room', time:'01:53-02:06', dur:'13s', chars:['Victor'], refs:[{s:'assets/img/Victor_BlackSuitGreyShirt.jpg',t:'Victor_BlackSuitGreyShirt'}], vi:12,
    prompt:'@[Jiang Estate Reception Room]，自然光从落地窗斜射入为主光，冷白色顶灯辅助，整体明亮但气氛压抑。0-7秒：近景切至@[Margaret_White Tweed Jacket]，眼眶泛红，双手合十，哀求\'The cooperation between the Jiang and Shen families cannot stop, Victor. If the capital chain breaks, we really can\'t afford to pay for it.\'，粗花呢面料纹理清晰；7-13秒：近景正反打切至@[Victor_Black Suit Dark Grey Shirt]，眼神冷漠，放下交握的双手，淡淡地说\'The cooperation can continue. The engagement can also proceed normally. However...\'，冷酷对峙氛围。无BGM无背景音乐，仅保留对白和场景音效。'},
  { id:'SEG11', scene:'Jiang Estate Reception Room', time:'02:06-02:16', dur:'10s', chars:['Elena','Victor'], refs:[{s:'assets/img/Elena_Outfit3.jpg',t:'Elena_Outfit3'},{s:'assets/img/Victor_BlackSuitGreyShirt.jpg',t:'Victor_BlackSuitGreyShirt'}], vi:13,
    prompt:'@[Jiang Estate Reception Room]，自然光从落地窗斜射入为主光，冷白色顶灯辅助，整体明亮。0-10秒：固定机位，中景平拍，画面取景会议室大门，【木门被推开的吱呀声】，@[Elena_Hotel Black Suit Uniform]双手端着一杯咖啡走进来，低着头，走到@[Victor_Black Suit Dark Grey Shirt]面前的实木茶几旁，将咖啡轻轻放下【瓷杯接触玻璃桌面的轻响】，@[Victor_Black Suit Dark Grey Shirt]坐在沙发上抬头看向她，视线交汇，意外重逢氛围。无BGM无背景音乐，仅保留对白和场景音效。'},
  { id:'SEG12', scene:'Jiang Estate Reception Room', time:'02:16-02:24', dur:'8s', chars:['Elena','Victor'], refs:[{s:'assets/img/Elena_Outfit3.jpg',t:'Elena_Outfit3'},{s:'assets/img/Victor_BlackSuitGreyShirt.jpg',t:'Victor_BlackSuitGreyShirt'}], vi:13,
    prompt:'@[Jiang Estate Reception Room]，自然光从落地窗斜射入为主光，冷白色顶灯辅助，整体明亮。0-8秒：镜头缓慢推近，近景双人，@[Victor_Black Suit]目光直视面前的@[Elena_Hotel Black Suit Uniform]，嘴角勾起一抹不易察觉的弧度，一字一句地说\'The bride needs to be changed.\'，@[Elena_Hotel Black Suit Uniform]端着托盘的手微微一顿，满脸错愕，西装制服笔挺，悬念反转氛围。无BGM无背景音乐，仅保留对白和场景音效。'}
];

// ── Render segments ──
function renderSegments() {
  var c = document.getElementById('gen-segments');
  if (!c) return;
  c.innerHTML = '';
  SEG_DATA.forEach(function(seg, i) {
    if (i > 0) {
      var div = document.createElement('div');
      div.className = 'seg-divider';
      div.innerHTML = '<span class="seg-add-line"></span><button class="seg-add-btn" onclick="addSegmentBefore(this)">+</button><span class="seg-add-line"></span>';
      c.appendChild(div);
    }
    c.appendChild(createSegEl(seg));
  });
}

function createSegEl(seg) {
  var vn = seg.vi < 10 ? '0' + seg.vi : '' + seg.vi;
  var card = document.createElement('div');
  card.className = 'seg-gen';
  card.draggable = true;
  card.addEventListener('dragstart', handleDragStart);
  card.addEventListener('dragover', handleDragOver);
  card.addEventListener('drop', handleDrop);
  card.addEventListener('dragend', handleDragEnd);

  var charTags = seg.chars.map(function(ch) { return '<span class="tg tg-a">' + ch + '</span>'; }).join('');
  var refThumbs = seg.refs.map(function(r) { return '<div class="ref-thumb"><img src="' + r.s + '" alt="' + r.t + '" title="' + r.t + '"><button class="ref-thumb-del" onclick="event.stopPropagation();this.parentElement.remove()" title="移除参考">x</button></div>'; }).join('');
  var durOpts = ['5s','7s','8s','10s','11s','13s','15s'];
  var durSel = durOpts.map(function(d) { return '<option' + (d === seg.dur ? ' selected' : '') + '>' + d + '</option>'; }).join('');

  card.innerHTML =
    
    '<div class="seg-gen-h">' +
      '<div style="display:flex;align-items:center;gap:8px"><input type="checkbox" class="seg-chk" onchange="updateSelAll()"><span class="seg-gen-id">' + seg.id + '</span><span class="seg-gen-time">' + seg.time + '</span><span class="seg-gen-loc">' + seg.scene + '</span>' + charTags + '</div>' +
      '<div class="seg-gen-acts"><button class="seg-drag-handle" title="拖动排序">⠿</button><button class="seg-del" onclick="deleteSeg(this)" title="删除">x</button></div>' +
    '</div>' +
    '<div class="seg-body">' +
      '<div class="seg-left">' +
        '<div class="seg-card-lbl">分镜提示词</div>' +
        '<div class="etx etx-p" contenteditable="true">' + seg.prompt + '</div>' +
        '<div class="seg-card-lbl" style="margin-top:10px">参考</div>' +
        '<div class="seg-refs">' + refThumbs + '</div>' +
        '<div style="margin-top:8px"><button class="b bg" style="font-size:11px;padding:2px 8px" onclick="openRefOverlay(this)">+ 添加参考</button></div>' +
      '</div>' +
      '<div class="seg-right">' +
        '<div class="vid-box">' + (seg.vi > 0 ? '<video src="assets/video/S01E02_SEG' + vn + '.mp4" controls playsinline></video>' : '<span style="color:#555;font-size:12px">暂无视频</span>') + '</div>' +
        '<div class="seg-actions">' +
          '<div class="seg-acts-left">' +
            
            '<button class="seg-act-tag">多参考 ▾</button>' +
            '<button class="seg-act-cfg-trigger" onclick="toggleCfgPop(this)"><span>Seedance 2.0</span><span class="cfg-sep">|</span><span>9:16</span><span class="cfg-sep">|</span><span>1080p</span><span class="cfg-sep">|</span><span>5s</span><span class="cfg-sep">|</span><span>1条</span></button>' +
          '</div>' +
          '<button class="b ba seg-gen-btn">生成</button>' +
          '<div class="seg-cfg-pop">' +
            '<div class="cfg-tabs"><button class="cfg-tab on">即梦</button><button class="cfg-tab">Vidu</button><button class="cfg-tab">奇智</button></div>' +
            '<div class="cfg-sub"><span class="cfg-badge">音画同步</span><span class="cfg-desc">全能参考，高品质，智能多镜（已支持真人图片及视频）</span></div>' +
            '<div class="cfg-row"><span class="cfg-lbl">模型版本</span><div class="cfg-opts"><button class="cfg-opt on" onclick="selCfg(this)">Seedance 2.0</button><button class="cfg-opt" onclick="selCfg(this)">Seedance 2.0 Fast</button></div></div>' +
            '<div class="cfg-row"><span class="cfg-lbl">画幅比</span><div class="cfg-opts"><button class="cfg-opt" onclick="selCfg(this)">16:9</button><button class="cfg-opt on" onclick="selCfg(this)">9:16</button><button class="cfg-opt" onclick="selCfg(this)">21:9</button></div></div>' +
            '<div class="cfg-row"><span class="cfg-lbl">分辨率</span><div class="cfg-opts"><button class="cfg-opt" onclick="selCfg(this)">720p</button><button class="cfg-opt on" onclick="selCfg(this)">1080p</button></div></div>' +
            '<div class="cfg-row"><span class="cfg-lbl">音画同步</span><div class="cfg-opts"><button class="cfg-opt on" onclick="selCfg(this)">开</button><button class="cfg-opt" onclick="selCfg(this)">关</button></div></div>' +
            '<div class="cfg-row"><span class="cfg-lbl">视频时长</span><div class="cfg-opts"><button class="cfg-opt" onclick="selCfg(this)">4s</button><button class="cfg-opt on" onclick="selCfg(this)">5s</button><button class="cfg-opt" onclick="selCfg(this)">8s</button><button class="cfg-opt" onclick="selCfg(this)">10s</button></div></div>' +
            '<div class="cfg-row"><span class="cfg-lbl">生成数量</span><div class="cfg-opts"><button class="cfg-opt on" onclick="selCfg(this)">1条</button><button class="cfg-opt" onclick="selCfg(this)">2条</button><button class="cfg-opt" onclick="selCfg(this)">3条</button><button class="cfg-opt" onclick="selCfg(this)">4条</button></div></div>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>' +
  '</div>';
  return card;
}

// ── View switching ──
function sw(v) {
  document.querySelectorAll('.vw').forEach(function(e) { e.classList.remove('on') });
  document.querySelectorAll('.step').forEach(function(e) { e.classList.remove('on') });
  document.getElementById('v-' + v).classList.add('on');
  var m = { l: -1, o: 0, a: 1, g: 2 };
  if (m[v] >= 0) document.querySelectorAll('.step')[m[v]].classList.add('on');
  document.querySelector('.steps').style.display = v === 'l' ? 'none' : 'flex';
  if (v === 'o') updateDirBoards();
  if (v === 'a') updateAssetDir();
  if (v === 'g') updateGenDir();
}

function enterProject(id) {
  sw('o');
  var analyzed = document.getElementById('proj-analyzed');
  var empty = document.getElementById('proj-empty');
  var title = document.querySelector('#v-o .hd-t');
  if (id === 'p-empty') {
    if (analyzed) analyzed.style.display = 'none';
    if (empty) empty.style.display = 'block';
    if (title) title.textContent = '闪婚后大佬跪求原谅';
  } else {
    if (analyzed) analyzed.style.display = 'block';
    if (empty) empty.style.display = 'none';
    if (title) title.textContent = '非婚不可';
  }
}

// ── Direction management ──
function selDir(el, dir) {
  el.parentElement.querySelectorAll('.dir-opt').forEach(function(e) { e.classList.remove('on') });
  el.classList.add('on');
  currentDir = dir;
  updateDirBoards();
  updateAssetDir();
  updateGenDir();
}

function updateDirBoards() {
  document.querySelectorAll('.dir-board').forEach(function(b) {
    b.classList.toggle('active', b.dataset.dir === currentDir);
  });
}

function updateAssetDir() {
  var sub = document.getElementById('asset-dir-sub');
  if (sub) {
    var n = { eu: '欧美', jp: '日韩', sea: '东南亚' };
    sub.textContent = '非婚不可 / ' + (n[currentDir] || '欧美') + '方向';
  }
}

function updateGenDir() {
  var sub = document.getElementById('gen-dir-sub');
  if (sub) {
    var n = { eu: '欧美', jp: '日韩', sea: '东南亚' };
    sub.textContent = '非婚不可 / ' + (n[currentDir] || '欧美') + '方向 / S01E02';
  }
}

// ── Asset tab switching ──
function stab(t, el) {
  document.querySelectorAll('.tab').forEach(function(e) { e.classList.remove('on') });
  el.classList.add('on');
  document.querySelectorAll('.tc').forEach(function(e) { e.style.display = 'none' });
  document.getElementById('t-' + t).style.display = 'block';
}

// ── Expand/collapse ──
function togEx(id) {
  var el = document.getElementById(id);
  if (el.classList.contains('open')) {
    el.classList.remove('open');
    el.style.display = 'none';
  } else {
    el.classList.add('open');
    el.style.display = el.tagName === 'TR' ? 'table-row' : 'block';
  }
}

// ── Direction selector (create dialog) ──
function selDirOpt(el) {
  el.parentElement.querySelectorAll('.dir-opt').forEach(function(e) { e.classList.remove('on') });
  el.classList.add('on');
}

// ── Checkbox management ──
function uBB() {
  var n = document.querySelectorAll('.ci:checked').length;
  var d = document.getElementById('bdel');
  var r = document.getElementById('brc');
  if (d) d.disabled = !n;
  if (r) r.disabled = !n;
}

function toggleAll(el) {
  var checked = el.checked;
  document.querySelectorAll('.ci').forEach(function(c) { c.checked = checked; });
  uBB();
}

// ── Modal management ──
function openModal(id) { document.getElementById(id).classList.add('on'); }
function closeModal(id) { document.getElementById(id).classList.remove('on'); }
function createAndEnter() { closeModal('newProjDlg'); enterProject('p1'); }

// ── Asset edit dialog ──
function openAssetEdit(type, cnName, enName, desc, prompt, imgSrc) {
  document.getElementById('ae-type').textContent = type;
  document.getElementById('ae-name').value = cnName || '';
  document.getElementById('ae-name-en').value = enName || '';
  document.getElementById('ae-desc').value = desc || '';
  document.getElementById('ae-prompt').value = prompt || '';
  var preview = document.getElementById('ae-preview');
  if (preview) {
    preview.innerHTML = imgSrc ? '<img src="' + imgSrc + '" style="width:100%;height:100%;object-fit:cover;display:block">' : '生成结果';
  }
  openModal('assetEditDlg');
}

// ── Reference overlay ──
function openRefOverlay(btn) {
  if (btn) {
    var seg = btn.closest('.seg-gen');
    activeRefTarget = seg ? seg.querySelector('.seg-refs') : null;
  }
  document.getElementById('refOverlay').classList.add('on');
}

function closeRefOverlay() {
  document.getElementById('refOverlay').classList.remove('on');
  document.querySelectorAll('.ref-item.selected').forEach(function(el) {
    el.classList.remove('selected');
    var ck = el.querySelector('.ck');
    if (ck) ck.checked = false;
  });
  updateRefCount();
}

function selRefTab(el) {
  el.parentElement.querySelectorAll('.ref-tab').forEach(function(e) { e.classList.remove('on') });
  el.classList.add('on');
  var tab = el.dataset.tab;
  document.querySelectorAll('.ref-section').forEach(function(s) { s.style.display = 'none' });
  var sec = document.getElementById('ref-sec-' + tab);
  if (sec) sec.style.display = 'block';
}

function toggleRefItem(el) {
  el.classList.toggle('selected');
  var ck = el.querySelector('.ck');
  if (ck) ck.checked = el.classList.contains('selected');
  updateRefCount();
}

function updateRefCount() {
  // Update ref overlay count
  var n = document.querySelectorAll('#refOverlay .ref-item.selected').length;
  var el = document.getElementById('refSelCount');
  if (el) el.textContent = n;
  // Update add asset overlay count
  var n2 = document.querySelectorAll('#addAssetOverlay .ref-item.selected').length;
  var el2 = document.getElementById('aaSelCount');
  if (el2) el2.textContent = n2;
}

// ── Add Asset to Episode overlay ──
function openAddAssetOverlay() {
  document.getElementById('addAssetOverlay').classList.add('on');
}
function closeAddAssetOverlay() {
  document.getElementById('addAssetOverlay').classList.remove('on');
  document.querySelectorAll('#addAssetOverlay .ref-item.selected').forEach(function(el) {
    el.classList.remove('selected');
    var ck = el.querySelector('.ck');
    if (ck) ck.checked = false;
  });
  var c = document.getElementById('aaSelCount');
  if (c) c.textContent = '0';
}
function confirmAddAsset() {
  var count = document.querySelectorAll('#addAssetOverlay .ref-item.selected').length;
  if (count > 0) alert('已将 ' + count + ' 项资产添加到本集');
  closeAddAssetOverlay();
}

// ── Config option selector ──
function selCfg(btn) {
  btn.parentElement.querySelectorAll('.cfg-opt').forEach(function(b) { b.classList.remove('on') });
  btn.classList.add('on');
}

// ── Toggle config popover ──
function toggleCfgPop(el) {
  var pop = el.closest('.seg-actions').querySelector('.seg-cfg-pop');
  document.querySelectorAll('.seg-cfg-pop.open').forEach(function(p) {
    if (p !== pop) p.classList.remove('open');
  });
  if (pop) pop.classList.toggle('open');
}

// Close popover on outside click
document.addEventListener('click', function(e) {
  if (!e.target.closest('.seg-cfg-pop') && !e.target.closest('.seg-act-cfg-trigger')) {
    document.querySelectorAll('.seg-cfg-pop.open').forEach(function(p) { p.classList.remove('open'); });
  }
});

function confirmRefs() {
  if (activeRefTarget) {
    document.querySelectorAll('.ref-item.selected').forEach(function(item) {
      var img = item.querySelector('img');
      var name = item.querySelector('.ref-item-name');
      if (img) {
        var title = name ? name.textContent : '';
        // Check if already added
        var exists = false;
        activeRefTarget.querySelectorAll('.ref-thumb img').forEach(function(t) {
          if (t.getAttribute('src') === img.getAttribute('src')) exists = true;
        });
        if (!exists) {
          var thumb = document.createElement('div');
          thumb.className = 'ref-thumb';
          thumb.innerHTML = '<img src="' + img.src + '" alt="' + title + '" title="' + title + '"><button class="ref-thumb-del" onclick="event.stopPropagation();this.parentElement.remove()" title="移除参考">x</button>';
          activeRefTarget.appendChild(thumb);
        }
      }
    });
  }
  closeRefOverlay();
  activeRefTarget = null;
}

// ── Full episode preview ──
function openFullPreview() {
  var vid = document.getElementById('fullVideo');
  if (vid) vid.src = 'assets/video/S01E02_full.mp4';
  openModal('fullPreview');
  var modal = document.querySelector('#fullPreview .modal');
  if (modal && !modal.dataset.dragInit) {
    makeDraggable(modal, modal.querySelector('.modal-hd'));
    modal.dataset.dragInit = '1';
  }
}
function closeFullPreview() {
  var vid = document.getElementById('fullVideo');
  if (vid) { vid.pause(); vid.src = ''; }
  closeModal('fullPreview');
}

function makeDraggable(el, handle) {
  var ox = 0, oy = 0, sx = 0, sy = 0;
  handle.style.cursor = 'move';
  handle.addEventListener('mousedown', function(e) {
    if (e.target.closest('.modal-close')) return;
    e.preventDefault();
    ox = e.clientX;
    oy = e.clientY;
    function onMove(ev) {
      sx = ox - ev.clientX;
      sy = oy - ev.clientY;
      ox = ev.clientX;
      oy = ev.clientY;
      var top = el.offsetTop - sy;
      var left = el.offsetLeft - sx;
      el.style.margin = '0';
      el.style.position = 'fixed';
      el.style.top = top + 'px';
      el.style.left = left + 'px';
    }
    function onUp() {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
    }
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  });
}

// ── Drag-and-drop for segments ──
function handleDragStart(e) {
  dragSrc = this;
  this.classList.add('dragging');
  e.dataTransfer.effectAllowed = 'move';
}

function handleDragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  var target = e.target.closest('.seg-gen');
  if (target && target !== dragSrc) {
    document.querySelectorAll('.seg-gen.drag-over').forEach(function(el) { el.classList.remove('drag-over') });
    target.classList.add('drag-over');
  }
}

function handleDrop(e) {
  e.preventDefault();
  var target = e.target.closest('.seg-gen');
  if (!target || target === dragSrc || !dragSrc) return;
  var container = target.parentElement;
  container.insertBefore(dragSrc, target);
  document.querySelectorAll('.seg-gen.drag-over').forEach(function(el) { el.classList.remove('drag-over') });
}

function handleDragEnd() {
  this.classList.remove('dragging');
  document.querySelectorAll('.seg-gen.drag-over').forEach(function(el) { el.classList.remove('drag-over') });
  dragSrc = null;
}

// ── Delete segment ──
function deleteSeg(btn) {
  var card = btn.closest('.seg-gen');
  card.remove();
  rebuildDividers('gen-segments');
}

// ── Add segment before current divider ──
function addSegmentBefore(btn) {
  var divider = btn.closest('.seg-divider');
  var container = divider.parentElement;
  var idx = 0;
  for (var i = 0; i < container.children.length; i++) {
    if (container.children[i] === divider) break;
    if (container.children[i].classList.contains('seg-gen')) idx++;
  }
  var newSeg = createSegEl({
    id: 'SEG' + String(idx + 1).padStart(2, '0'), scene: '新场景', time: '00:00-00:00', dur: '8s', chars: [],
    refs: [], vi: 0,
    prompt: '新分镜提示词...'
  });
  container.insertBefore(newSeg, divider);
  rebuildDividers('gen-segments');
}

// ── Rebuild dividers and renumber segments ──
function rebuildDividers(containerId) {
  var c = document.getElementById(containerId);
  if (!c) return;
  var cards = [];
  for (var i = 0; i < c.children.length; i++) {
    if (c.children[i].classList.contains('seg-gen')) cards.push(c.children[i]);
  }
  c.innerHTML = '';
  cards.forEach(function(card, idx) {
    if (idx > 0) {
      var div = document.createElement('div');
      div.className = 'seg-divider';
      div.innerHTML = '<span class="seg-add-line"></span><button class="seg-add-btn" onclick="addSegmentBefore(this)">+</button><span class="seg-add-line"></span>';
      c.appendChild(div);
    }
    var idEl = card.querySelector('.seg-gen-id');
    if (idEl) idEl.textContent = 'SEG' + String(idx + 1).padStart(2, '0');
    c.appendChild(card);
  });
}


// ── Segment selection ──
function toggleAllSeg(checked) {
  document.querySelectorAll('.seg-chk').forEach(function(cb) { cb.checked = checked; });
}
function updateSelAll() {
  var all = document.querySelectorAll('.seg-chk');
  var checked = document.querySelectorAll('.seg-chk:checked');
  var sa = document.getElementById('selAllSeg');
  if (sa) sa.checked = all.length > 0 && checked.length === all.length;
}
function batchGenSelected() {
  var checked = document.querySelectorAll('.seg-chk:checked');
  if (checked.length === 0) { alert('请先勾选要生成的分镜片段'); return; }
  var ids = [];
  checked.forEach(function(cb) {
    var card = cb.closest('.seg-gen');
    var idEl = card.querySelector('.seg-gen-id');
    if (idEl) ids.push(idEl.textContent);
  });
  alert('批量生成: ' + ids.join(', '));
}

// ── Init ──
document.addEventListener('DOMContentLoaded', function() {
  renderSegments();
  // Build episode boards
  function buildBoard(id, total, done) {
    var b = document.getElementById(id);
    if (!b) return;
    for (var i = 0; i < done; i++) { var e = document.createElement('div'); e.className = 'ec ec-d'; e.textContent = i + 1; b.appendChild(e); }
    for (var i = done; i < total; i++) { var e = document.createElement('div'); e.className = 'ec ec-w'; e.textContent = i + 1; b.appendChild(e); }
  }
  buildBoard('ebd-eu', 65, 47);
  buildBoard('ebd-jp', 65, 12);
});
