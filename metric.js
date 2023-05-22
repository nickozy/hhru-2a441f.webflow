//metrics

(function (m, e, t, r, i, k, a) {
  m[i] =
    m[i] ||
    function () {
      (m[i].a = m[i].a || []).push(arguments);
    };
  m[i].l = 1 * new Date();
  (k = e.createElement(t)),
    (a = e.getElementsByTagName(t)[0]),
    (k.async = 1),
    (k.src = r),
    a.parentNode.insertBefore(k, a);
})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

// METRIC INIT
//
//
//
//
//

// HEADER

const header_about = document.querySelector('data-metric="1"');
const header_manifest = document.querySelector('data-metric="2"');
const header_support = document.querySelector('data-metric="3"');

// >HEADER

const tass_14631483 = document.querySelector('data-metric="4"');
const instrustion = document.querySelector('data-metric="5"');

const share_citation1 = document.querySelector('data-metric="6"');
const share_citation2 = document.querySelector('data-metric="7"');
const share_citation3 = document.querySelector('data-metric="8"');
const share_citation4 = document.querySelector('data-metric="9"');
const share_citation5 = document.querySelector('data-metric="10"');
const share_citation6 = document.querySelector('data-metric="11"');
const share_citation7 = document.querySelector('data-metric="12"');
const share_citation8 = document.querySelector('data-metric="13"');
const share_citation9 = document.querySelector('data-metric="14"');

const download1 = document.querySelector('data-metric="15"');
const download2 = document.querySelector('data-metric="16"');
const download3 = document.querySelector('data-metric="17"');
const download4 = document.querySelector('data-metric="18"');
const download5 = document.querySelector('data-metric="19"');
const download6 = document.querySelector('data-metric="20"');
const download7 = document.querySelector('data-metric="21"');
const download8 = document.querySelector('data-metric="22"');
const download9 = document.querySelector('data-metric="23"');

const share_social1 = document.querySelector('data-metric="24"');
const share_social2 = document.querySelector('data-metric="25"');
const share_social3 = document.querySelector('data-metric="26"');
const share_social4 = document.querySelector('data-metric="27"');
const share_social5 = document.querySelector('data-metric="28"');
const share_social6 = document.querySelector('data-metric="29"');
const share_social7 = document.querySelector('data-metric="30"');
const share_social8 = document.querySelector('data-metric="31"');
const share_social9 = document.querySelector('data-metric="32"');

const block1 = document.querySelector('data-metric="33"');
const block2 = document.querySelector('data-metric="34"');
const block3 = document.querySelector('data-metric="35"');
const block4 = document.querySelector('data-metric="36"');
const block5 = document.querySelector('data-metric="37"');
const block6 = document.querySelector('data-metric="38"');
const block7 = document.querySelector('data-metric="39"');
const block8 = document.querySelector('data-metric="40"');
const block9 = document.querySelector('data-metric="41"');

// MANIFEST

const share_manifest = document.querySelector('data-metric="42"');

// >MANIFEST

// FOOTER

const footer_manifest = document.querySelector('data-metric="43"');
const footer_support = document.querySelector('data-metric="44"');
const footer_about = document.querySelector('data-metric="45"');
const footer_sharing = document.querySelector('data-metric="46"');

// >FOOTER

//
//
//
//
//
// >METRIC INIT

function metricGoal(event) {
  ym(93639951, "reachGoal", event);
}

// HEADER

header_about.addEventListener("click", metricGoal("header_about"));
header_manifest.addEventListener("click", metricGoal("header_manifest"));
header_support.addEventListener("click", metricGoal("header_support"));

// >HEADER

tass_14631483.addEventListener("click", metricGoal("tass_14631483"));
instrustion.addEventListener("click", metricGoal("instrustion"));

share_citation1.addEventListener("click", metricGoal("1_share_citation"));
share_citation2.addEventListener("click", metricGoal("2_share_citation"));
share_citation3.addEventListener("click", metricGoal("3_share_citation"));
share_citation4.addEventListener("click", metricGoal("4_share_citation"));
share_citation5.addEventListener("click", metricGoal("5_share_citation"));
share_citation6.addEventListener("click", metricGoal("6_share_citation"));
share_citation7.addEventListener("click", metricGoal("7_share_citation"));
share_citation8.addEventListener("click", metricGoal("8_share_citation"));
share_citation9.addEventListener("click", metricGoal("9_share_citation"));

download1.addEventListener("click", metricGoal("1_download"));
download2.addEventListener("click", metricGoal("2_download"));
download3.addEventListener("click", metricGoal("3_download"));
download4.addEventListener("click", metricGoal("4_download"));
download5.addEventListener("click", metricGoal("5_download"));
download6.addEventListener("click", metricGoal("6_download"));
download7.addEventListener("click", metricGoal("7_download"));
download8.addEventListener("click", metricGoal("8_download"));
download9.addEventListener("click", metricGoal("9_download"));

share_social1.addEventListener("click", metricGoal("1_share_social"));
share_social2.addEventListener("click", metricGoal("2_share_social"));
share_social3.addEventListener("click", metricGoal("3_share_social"));
share_social4.addEventListener("click", metricGoal("4_share_social"));
share_social5.addEventListener("click", metricGoal("5_share_social"));
share_social6.addEventListener("click", metricGoal("6_share_social"));
share_social7.addEventListener("click", metricGoal("7_share_social"));
share_social8.addEventListener("click", metricGoal("8_share_social"));
share_social9.addEventListener("click", metricGoal("9_share_social"));

block1.addEventListener("click", metricGoal("1_block"));
block2.addEventListener("click", metricGoal("2_block"));
block3.addEventListener("click", metricGoal("3_block"));
block4.addEventListener("click", metricGoal("4_block"));
block5.addEventListener("click", metricGoal("5_block"));
block6.addEventListener("click", metricGoal("6_block"));
block7.addEventListener("click", metricGoal("7_block"));
block8.addEventListener("click", metricGoal("8_block"));
block9.addEventListener("click", metricGoal("9_block"));

share_manifest.addEventListener("click", metricGoal("share_manifest"));

// FOOTER

footer_manifest.addEventListener("click", metricGoal("footer_manifest"));
footer_support.addEventListener("click", metricGoal("footer_support"));
footer_about.addEventListener("click", metricGoal("footer_about"));
footer_sharing.addEventListener("click", metricGoal("footer_sharing"));

// >FOOTER
