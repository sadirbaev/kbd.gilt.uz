const map = new Map();
map.set('A', 'Á');
map.set('a', 'á');
map.set('G', 'Ǵ');
map.set('g', 'ǵ');
map.set('U', 'Ú');
map.set('u', 'ú');
map.set('N', 'Ń');
map.set('n', 'ń');
map.set('I', 'Í');
map.set('i', 'ı');
map.set('O', 'Ó');
map.set('o', 'ó');
map.set('А', 'Ә');
map.set('а', 'ә');
map.set('Г', 'Ғ');
map.set('г', 'ғ');
map.set('И', 'Ү');
map.set('и', 'ү');
map.set('Н', 'Ң');
map.set('н', 'ң');
map.set('О', 'Ө');
map.set('о', 'ө');
map.set('Х', 'Ҳ');
map.set('х', 'ҳ');
map.set('К', 'Қ');
map.set('к', 'қ');
map.set('У', 'Ў');
map.set('у', 'ў');
const set = new Set(['`', '~', 'Ë', 'ё']);

const btnCopy = document.getElementById('copy');
const btnSpecial = document.getElementById('special');
const area = document.getElementById('textarea');

let specialCnt = 0;
let isBackspace = false;

document.addEventListener('keydown', function(e) {
  if (e.code === "Backquote"){
    specialCnt++;
    btnSpecial.disabled = (specialCnt === 1)
  }
  isBackspace = (e.code === "Backspace");
  if (e.code === "Backspace") specialCnt=0;
});

btnSpecial.addEventListener("click", function () {
  specialCnt++;
  this.disabled = true;
  area.focus();
});


area.addEventListener('input', function (event) {
    
    let s = event.target.value;
    btnCopy.disabled = !s;
    if (!s) return;
    if (isBackspace) return;
    let start = this.selectionStart;
    let lastChar = s[start-1];
    if (set.has(lastChar)){
      if (specialCnt === 1){
        area.value = s.slice(0,start-1) + s.slice(start);
        this.selectionEnd = start-1;
      } else {
        btnSpecial.disabled = false;
        area.value = s.slice(0,start-1) + lastChar + s.slice(start) ;
        specialCnt = 0;
        this.selectionEnd = start;
      }
    } else {
      if (specialCnt === 1){
        if (map.has(lastChar)){
          area.value = s.slice(0,start-1) + map.get(lastChar) + s.slice(start);
        } 
        btnSpecial.disabled = false;
        this.selectionEnd = start;
        specialCnt = 0;
      }
      
    }
    
  });



$(document).ready(function() {
  
  let tooltip = new bootstrap.Tooltip(btnCopy, {
    boundary: document.body,
    trigger: 'manual',
    placement: 'bottom'
  });
  function setTooltip(message) {
    tooltip.hide();
    btnCopy.setAttribute('data-bs-original-title', message);
    tooltip = bootstrap.Tooltip.getInstance(btnCopy);
    tooltip.show();
  }
  
  function hideTooltip() {
    setTimeout(function() {
      tooltip.hide();
    }, 1000);
  }
  if (ClipboardJS.isSupported()) {
    btnCopy.style.display = 'block';

    let clipboard = new ClipboardJS(btnCopy);
    clipboard.on('success', function(e) {
      setTooltip("Nusqalandı!");
      hideTooltip();
    });
  
    clipboard.on('error', function(e) {
      setTooltip("Qáteshilik júz berdi!");
      hideTooltip();
    });
  
  } else {
    btnCopy.style.display = 'none';
    console.log("does not support");
  }
});