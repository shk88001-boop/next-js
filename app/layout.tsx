import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Script from "next/script";

export const metadata: Metadata = {
  title: 'Lumière Studio',
  description: 'Crafting extraordinary digital experiences',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://optimize.visiopt.com/" />
        <link rel="dns-prefetch" href="https://optimize.visiopt.com/" />

        <Script
          id="visiopt-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.visiopt_code = window.visiopt_code ||(function () {var visi_wid = 1092;var visi_flicker_time = 4000;var visi_flicker_element = "html";var d = document;var c = false;var lastPath = location.pathname;var visi_fn = {begin: function () {if (d.getElementById("visi_flicker")) return;var css = visi_flicker_element + "{opacity:0!important;background:none!important;}";var st = d.createElement("style");st.id = "visi_flicker";st.type = "text/css";if (st.styleSheet) st.styleSheet.cssText = css;else st.appendChild(d.createTextNode(css));d.head.appendChild(st);},complete: function () {c = true;var f = d.getElementById("visi_flicker");if (f) f.remove();},completed: function () {return c;},pack: function (src) {if (window.__visi_vt_loaded__) {runVisiForCurrentPage();return;}window.__visi_vt_loaded__ = true;var s = d.createElement("script");s.src = src;s.type = "text/javascript";s.async = true;s.onerror = function () {visi_fn.complete();};d.head.appendChild(s);},init: function () {visi_fn.begin();setTimeout(function () {visi_fn.complete();}, visi_flicker_time);visi_fn.pack("https://optimize.visiopt.com/vt.1092.js");return true;}};window.visiopt_code_status = visi_fn.init();function setupRouteListeners(callback) {window.addEventListener("popstate", function () {callback();});var origPushState = history.pushState;history.pushState = function () {origPushState.apply(this, arguments);callback();};var origReplaceState = history.replaceState;history.replaceState = function () {origReplaceState.apply(this, arguments);callback();};}function runVisiForCurrentPage() {if (typeof VisiPageMatcher === "undefined") {console.warn("VisiPageMatcher not loaded yet");return;}var pageJson = VisiPageMatcher.getPageIdByURL(visiopt_settings.pages, location.href);if (!pageJson) {console.warn("Page json not found");return;}VisioptConfig.set(pageJson);if (typeof resetVisioptBeforeRouteChange !== "undefined") {if (!window.__visi_resetter__) {window.__visi_resetter__ = new resetVisioptBeforeRouteChange();}window.__visi_resetter__.init();}if (typeof VisiOptSDK === "undefined") {console.warn("VisiOptSDK missing");return;}window.VisiBoot();}setupRouteListeners(function () {if (location.pathname !== lastPath) {lastPath = location.pathname;runVisiForCurrentPage();}});return visi_fn;})();`
          }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
