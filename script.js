window.onbeforeunload = function (e) {
    e = e || window.event;

    // For IE and Firefox prior to version 4
    if (e) {
        e.returnValue = 'Are you sure?';
    }

    // For Safari
    return 'Are you sure?';
};

embed = document.getElementById("webview");
code = document.getElementById("html");
rel = document.getElementById("reload");

function writehtm() {
  embed.src = "about:blank";
  doc = embed.contentDocument || embed.contentWindow.document;
  doc.open();
  doc.write(code.value);
  doc.close();
}

code.addEventListener("keyup", function(e) {
  if (rel.checked) {
    writehtm();
  }
});

function download() {
  var blob = new Blob([code.value], {type: "text/plain;charset=utf-8"});
  saveAs(blob, "MyPage1.html");
}

function saveAs(blob, filename) {
  var a = document.createElement("a");
  var url = URL.createObjectURL(blob);
  a.href = url;
  a.download = filename;
  a.click()
}

function view() {
  var win = window.open("about:blank#DONT-SHARE-THIS-LINK-IT-WONT-DISPLAY-FOR-OTHERS", "MyPage1");
  win.document.body.innerHTML = code.value;
}

writehtm()
