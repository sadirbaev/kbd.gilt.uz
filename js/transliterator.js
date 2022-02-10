// Clear
function clearText() {
    document.getElementById("cyr-text").value = "";
    document.getElementById("lat-text").value = "";
    cnt = 0;
    document.getElementById("cnt").innerText=cnt;
}

// Copy
function copyText() {
    document.getElementById("lat-text").select();
    document.execCommand('copy');
}

// Convert
let n;
let cnt = 0;
let btnradio1 = document.getElementById("btnradio1");
let btnradio2 = document.getElementById("btnradio2");
function cyrlat() {
    if (btnradio1.checked == 1){
    n = document.getElementById("cyr-text").value;
    document.getElementById("cnt").innerText=n.length;
    
    n = n.replace(/а/g, "a");
    n = n.replace(/б/g, "b");
    n = n.replace(/в/g, "v");
    n = n.replace(/г/g, "g");
    n = n.replace(/д/g, "d");
    n = n.replace(/е/g, "e");
    n = n.replace(/ё/g, "yo");
    n = n.replace(/ж/g, "j");
    n = n.replace(/з/g, "z");
    n = n.replace(/и/g, "i");
    n = n.replace(/й/g, "y");
    n = n.replace(/к/g, "k");
    n = n.replace(/л/g, "l");
    n = n.replace(/м/g, "m");
    n = n.replace(/н/g, "n");
    n = n.replace(/ң/g, "ń");
    n = n.replace(/о/g, "o");
    n = n.replace(/п/g, "p");
    n = n.replace(/р/g, "r");
    n = n.replace(/с/g, "s");
    n = n.replace(/т/g, "t");
    n = n.replace(/у/g, "u");
    n = n.replace(/ф/g, "f");
    n = n.replace(/ц/g, "c");
    n = n.replace(/ч/g, "ch");
    n = n.replace(/ш/g, "sh");
    n = n.replace(/ы/g, "ı");
    n = n.replace(/э/g, "e");
    n = n.replace(/х/g, "x");
    n = n.replace(/ю/g, "yu");
    n = n.replace(/я/g, "ya");
    n = n.replace(/ь/g, "'");
    n = n.replace(/ў/g, "w");
    n = n.replace(/ғ/g, "ǵ");
    n = n.replace(/қ/g, "q");
    n = n.replace(/ҳ/g, "h");
    n = n.replace(/ә/g, "á");
    n = n.replace(/ў/g, "w");
    n = n.replace(/ұ/g, "ú");
    n = n.replace(/ө/g, "ó");
    
    n = n.replace(/А/g, "A");
    n = n.replace(/Б/g, "B");
    n = n.replace(/В/g, "V");
    n = n.replace(/Г/g, "G");
    n = n.replace(/Д/g, "D");
    n = n.replace(/Е/g, "E");
    n = n.replace(/Ё/g, "Yo");
    n = n.replace(/Ж/g, "J");
    n = n.replace(/З/g, "Z");
    n = n.replace(/И/g, "I");
    n = n.replace(/Й/g, "Y");
    n = n.replace(/К/g, "K");
    n = n.replace(/Л/g, "L");
    n = n.replace(/М/g, "M");
    n = n.replace(/Н/g, "N");
    n = n.replace(/НГ/g, "Ń");
    n = n.replace(/О/g, "O");
    n = n.replace(/П/g, "P");
    n = n.replace(/Р/g, "R");
    n = n.replace(/С/g, "S");
    n = n.replace(/Т/g, "T");
    n = n.replace(/У/g, "U");
    n = n.replace(/Ф/g, "F");
    n = n.replace(/Х/g, "H");
    n = n.replace(/Ц/g, "C");
    n = n.replace(/Ч/g, "Ch");
    n = n.replace(/Ш/g, "Sh");
    n = n.replace(/Ы/g, "Í");
    n = n.replace(/Э/g, "E");
    n = n.replace(/Ю/g, "Yu");
    n = n.replace(/Я/g, "Ya");
    n = n.replace(/ў/g, "w");
    n = n.replace(/Ғ/g, "Ǵ");
    n = n.replace(/Қ/g, "Q");
    n = n.replace(/Ә/g, "Á");
    n = n.replace(/Ө/g, "Ó");
    n = n.replace(/Ў/g, "W");
    n = n.replace(/Ұ/g, "Ú");
    document.getElementById("lat-text").value = n;
    }
 }

 function latcyr() {
    if (btnradio2.checked == 1){
    n = document.getElementById("cyr-text").value;
    document.getElementById("cnt").innerText=n.length;
    n = n.replace(/Ch/g, "Ч");
    n = n.replace(/Yu/g, "Ю");
    n = n.replace(/Ya/g, "Я");
    n = n.replace(/Sh/g, "Ш");
    n = n.replace(/Yo/g, "Ё");
    n = n.replace(/yu/g, "ю");
    n = n.replace(/ya/g, "я");
    n = n.replace(/sh/g, "ш");
    n = n.replace(/yo/g, "ё");

    n = n.replace(/a/g, "а");
    n = n.replace(/b/g, "б");
    n = n.replace(/v/g, "в");
    n = n.replace(/g/g, "г");
    n = n.replace(/d/g, "д");
    n = n.replace(/e/g, "е");
    n = n.replace(/j/g, "ж");
    n = n.replace(/z/g, "з");
    n = n.replace(/i/g, "и");
    n = n.replace(/y/g, "й");
    n = n.replace(/k/g, "к");
    n = n.replace(/l/g, "л");
    n = n.replace(/m/g, "м");
    n = n.replace(/n/g, "н");
    n = n.replace(/ń/g, "ң");
    n = n.replace(/o/g, "о");
    n = n.replace(/p/g, "п");
    n = n.replace(/r/g, "р");
    n = n.replace(/s/g, "с");
    n = n.replace(/t/g, "т");
    n = n.replace(/u/g, "у");
    n = n.replace(/f/g, "ф");
    n = n.replace(/c/g, "ц");
    n = n.replace(/ch/g, "ч");
    n = n.replace(/ı/g, "ы");
    n = n.replace(/e/g, "э");
    n = n.replace(/x/g, "х");  
    n = n.replace(/w/g, "ў");
    n = n.replace(/ǵ/g, "ғ");
    n = n.replace(/q/g, "қ");
    n = n.replace(/h/g, "ҳ");
    n = n.replace(/á/g, "ә");
    n = n.replace(/w/g, "ў");
    n = n.replace(/ú/g, "ү");
    n = n.replace(/ó/g, "ө");
    
    n = n.replace(/A/g, "А");
    n = n.replace(/B/g, "Б");
    n = n.replace(/V/g, "В");
    n = n.replace(/G/g, "Г");
    n = n.replace(/D/g, "Д");
    n = n.replace(/E/g, "Е");   
    n = n.replace(/J/g, "Ж");
    n = n.replace(/Z/g, "З");
    n = n.replace(/I/g, "И");
    n = n.replace(/Y/g, "Й");
    n = n.replace(/K/g, "К");
    n = n.replace(/L/g, "Л");
    n = n.replace(/M/g, "М");
    n = n.replace(/N/g, "Н");
    n = n.replace(/Нг/g, "Ń");
    n = n.replace(/O/g, "О");
    n = n.replace(/P/g, "П");
    n = n.replace(/R/g, "Р");
    n = n.replace(/S/g, "С");
    n = n.replace(/T/g, "Т");
    n = n.replace(/U/g, "У");
    n = n.replace(/F/g, "Ф");
    n = n.replace(/H/g, "Х");
    n = n.replace(/C/g, "Ц");
    
    n = n.replace(/Í/g, "Ы");
    n = n.replace(/E/g, "Э");
    
    n = n.replace(/Ǵ/g, "Ғ");
    n = n.replace(/Q/g, "Қ");
    n = n.replace(/Á/g, "Ә");
    n = n.replace(/Ó/g, "Ө");
    n = n.replace(/W/g, "Ў");
    n = n.replace(/Ú/g, "Ү");
    document.getElementById("lat-text").value = n;
    }
 }