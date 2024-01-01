

function setLanguage() {
  var url_string = window.location.href;
  var url = new URL(url_string);
  var c = url.searchParams.get("lang");
  if(c != null) {
    GV_lang = c;
  }
}
setLanguage();
