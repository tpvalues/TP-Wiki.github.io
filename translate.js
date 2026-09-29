window.TP_LANGS = [
  { value: "", label: "Original (English)" },
  { value: "fr", label: "Français" },
  { value: "de", label: "Deutsch" },
  { value: "es", label: "Español" },
  { value: "it", label: "Italiano" },
  { value: "pt", label: "Português" },
  { value: "nl", label: "Nederlands" },
  { value: "pl", label: "Polski" },
  { value: "sv", label: "Svenska" },
  { value: "da", label: "Dansk" },
  { value: "fi", label: "Suomi" },
  { value: "no", label: "Norsk" },
  { value: "cs", label: "Čeština" },
  { value: "sk", label: "Slovenčina" },
  { value: "hu", label: "Magyar" },
  { value: "ro", label: "Română" },
  { value: "bg", label: "Български" },
  { value: "el", label: "Ελληνικά" },
  { value: "hr", label: "Hrvatski" },
  { value: "sr", label: "Српски" },
  { value: "sl", label: "Slovenščina" },
  { value: "lt", label: "Lietuvių" },
  { value: "lv", label: "Latviešu" },
  { value: "et", label: "Eesti" },
  { value: "ga", label: "Gaeilge" },
  { value: "uk", label: "Українська" },
  { value: "ru", label: "Русский" },
  { value: "zh-CN", label: "中文 (简体)" },
  { value: "zh-TW", label: "中文 (繁體)" },
  { value: "ja", label: "日本語" },
  { value: "ko", label: "한국어" },
  { value: "hi", label: "हिन्दी" },
  { value: "ar", label: "العربية" },
  { value: "tr", label: "Türkçe" },
  { value: "th", label: "ไทย" },
  { value: "vi", label: "Tiếng Việt" },
  { value: "id", label: "Bahasa Indonesia" },
  { value: "ms", label: "Bahasa Melayu" },
  { value: "sw", label: "Kiswahili" },
  { value: "af", label: "Afrikaans" }
];

window.TP_INCLUDED_LANGUAGES = window.TP_LANGS
  .map(function (l) { return l.value; })
  .filter(Boolean)
  .join(",");

function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: "en",
    includedLanguages: window.TP_INCLUDED_LANGUAGES,
    layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL,
    autoDisplay: false
  }, "google_translate_element");
}

window.tpDoTranslate = function (lang) {
  var select = document.querySelector(".goog-te-combo");
  if (!select) return;
  select.value = lang || "";
  select.dispatchEvent(new Event("change"));
};

window.tpFillTranslateSelect = function (selectEl) {
  if (!selectEl) return;
  selectEl.innerHTML = "";
  window.TP_LANGS.forEach(function (lang) {
    var opt = document.createElement("option");
    opt.value = lang.value;
    opt.textContent = lang.label;
    selectEl.appendChild(opt);
  });
};

document.addEventListener("DOMContentLoaded", function () {
  var select = document.getElementById("translateSelect");
  if (select) window.tpFillTranslateSelect(select);
});
