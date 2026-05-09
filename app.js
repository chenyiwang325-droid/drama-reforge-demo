function sw(v) {
  document.querySelectorAll('.vw').forEach(function(e) { e.classList.remove('on') });
  document.querySelectorAll('.step').forEach(function(e) { e.classList.remove('on') });
  document.getElementById('v-' + v).classList.add('on');
  var m = { p: 0, a: 1, g: 2 };
  document.querySelectorAll('.step')[m[v]].classList.add('on');
}

function stab(t, el) {
  document.querySelectorAll('.tab').forEach(function(e) { e.classList.remove('on') });
  el.classList.add('on');
  document.querySelectorAll('.tc').forEach(function(e) { e.style.display = 'none' });
  document.getElementById('t-' + t).style.display = 'block';
  document.getElementById('bdel').disabled = true;
  document.getElementById('brc').disabled = true;
}

function togEx(id) {
  document.getElementById(id).classList.toggle('open');
}

function selDir(el) {
  el.parentElement.querySelectorAll('.dir-opt').forEach(function(e) { e.classList.remove('on') });
  el.classList.add('on');
}

function togAll(ck) {
  document.querySelectorAll('.ci').forEach(function(c) { c.checked = ck.checked });
  uBB();
}

function uBB() {
  var n = document.querySelectorAll('.ci:checked').length;
  document.getElementById('bdel').disabled = !n;
  document.getElementById('brc').disabled = !n;
}

// Build episode board
(function() {
  var b = document.getElementById('ebd'), s = [];
  for (var i = 0; i < 47; i++) s.push('d');
  for (var i = 0; i < 3; i++) s.push('p');
  for (var i = 0; i < 15; i++) s.push('w');
  s.forEach(function(c, i) {
    var e = document.createElement('div');
    e.className = 'ec ec-' + c;
    e.textContent = i + 1;
    e.title = 'S01E' + String(i + 1).padStart(2, '0');
    b.appendChild(e);
  });
})();
