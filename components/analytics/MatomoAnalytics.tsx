import Script from 'next/script'

import siteMetadata from '@/data/siteMetadata'

const MAScript = () => {
  return (
    <>
      <Script id="ma-script">
        {`
            var _paq = window._paq = window._paq || [];
            /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);
            (function() {var u="https://meson.store/";
            _paq.push(['setTrackerUrl', u+'matomo.php']);
            _paq.push(['setSiteId', '${siteMetadata.analytics.matomoAnalyticsId}']);
            var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
            g.async=true; g.src=u+'matomo.js';
            s.parentNode.insertBefore(g,s);})();
        `}
      </Script>
    </>
  )
}

export default MAScript
