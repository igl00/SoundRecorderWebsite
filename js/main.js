// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-92975192-1', 'auto');
ga('send', 'pageview');

// Doorbell.io
window.doorbellOptions = {
    appKey: 'julf16JqaLTaHombXbfarLxdaRTKsxhbnWVGTbWcFo72FdF1vt05Z3r2g154Ll6R',
    // hideButton: true,
    // container: document.getElementById('feedback-container'),
};
(function(w, d, t) {
    var hasLoaded = false;
    function l() { if (hasLoaded) { return; } hasLoaded = true; window.doorbellOptions.windowLoaded = true; var g = d.createElement(t);g.id = 'doorbellScript';g.type = 'text/javascript';g.async = true;g.src = 'https://embed.doorbell.io/button/5814?t='+(new Date().getTime());(d.getElementsByTagName('head')[0]||d.getElementsByTagName('body')[0]).appendChild(g); }
    if (w.attachEvent) { w.attachEvent('onload', l); } else if (w.addEventListener) { w.addEventListener('load', l, false); } else { l(); }
    if (d.readyState == 'complete') { l(); }
}(window, document, 'script'));

