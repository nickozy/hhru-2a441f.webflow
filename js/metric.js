(function (d, w, c) {
  (w[c] = w[c] || []).push(function () {
    try {
      w.yaCounter93639951 = new Ya.Metrika({
        id: 93639951,
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
      });
    } catch (e) {}
  });

  var n = d.getElementsByTagName("script")[0],
    x = "https://mc.yandex.ru/metrika/watch.js",
    s = d.createElement("script"),
    f = function () {
      n.parentNode.insertBefore(s, n);
    };
  for (var i = 0; i < document.scripts.length; i++) {
    if (document.scripts[i].src === x) {
      return;
    }
  }
  s.type = "text/javascript";
  s.async = true;
  s.src = x;

  if (w.opera == "[object Opera]") {
    d.addEventListener("DOMContentLoaded", f, false);
  } else {
    f();
  }
})(document, window, "yandex_metrika_callbacks");
