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
code1 = document.getElementById("js");
code2 = document.getElementById("css");
rel = document.getElementById("reload");
tabs = [
  document.getElementById("tab1"),
  document.getElementById("tab2"),
  document.getElementById("tab3")
]

function writehtm() {
  embed.src = "about:blank";
  doc = embed.contentDocument || embed.contentWindow.document;
  doc.open();
  doc.write(code.value);
  doc.write("<style>" + code2.value + "</style>");
  doc.write("<script>" + code1.value + "</script>");
  doc.close();
}

function opentab(tab) {
  for (i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }
  tabs[tab].style.display = "inline flex";
}

code.addEventListener("keyup", function(e) {
  if (rel.checked) {
    writehtm();
  }
});

code1.addEventListener("keyup", function(e) {
  if (rel.checked) {
    writehtm();
  }
});

code2.addEventListener("keyup", function(e) {
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
  win.document.body.innerHTML = code.value+"<style>" + code2.value + "</style>"+"<script>" + code1.value + "</script>";
}

writehtm()