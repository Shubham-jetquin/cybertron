import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Header from "./_component/header/page";
import Footer from "./_component/footer/page";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/wp-content/uploads/2025/02/logo-removebg-preview-75x75.png" sizes="32x32" />
        <link rel="icon" href="/assets/wp-content/uploads/2025/02/logo-removebg-preview.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/assets/wp-content/uploads/2025/02/logo-removebg-preview.png" />





        <link rel='stylesheet' id='cute-alert-css' href='/assets/wp-content/plugins/metform/public/assets/lib/cute-alert/style.css?ver=3.9.5' media='all' />
        <link rel='stylesheet' id='text-editor-style-css' href='/assets/wp-content/plugins/metform/public/assets/css/text-editor.css?ver=3.9.5' media='all' />
        <link rel='stylesheet' id='hello-elementor-css' href='/assets/wp-content/themes/hello-elementor/style.min.css?ver=3.3.0' media='all' />
        <link rel='stylesheet' id='hello-elementor-theme-style-css' href='/assets/wp-content/themes/hello-elementor/theme.min.css?ver=3.3.0' media='all' />
        <link rel='stylesheet' id='hello-elementor-header-footer-css' href='/assets/wp-content/themes/hello-elementor/header-footer.min.css?ver=3.3.0' media='all' />
        <link rel='stylesheet' id='elementor-frontend-css' href='/assets/wp-content/plugins/elementor/assets/css/frontend.min.css?ver=3.27.6' media='all' />
        <link rel='stylesheet' id='elementor-post-591-css' href='/assets/wp-content/uploads/elementor/css/post-1198.css?ver=1741320363' media='all' />
        <link rel='stylesheet' id='elementor-post-352-css' href='/assets/wp-content/uploads/elementor/css/post-265.css?ver=1741320363' media='all' />
        <link rel='stylesheet' id='elementor-post-591-css' href='/assets/wp-content/uploads/elementor/css/post-591.css?ver=1741320363' media='all' />
        <link rel='stylesheet' id='elementor-post-352-css' href='/assets/wp-content/uploads/elementor/css/post-352.css?ver=1741320363' media='all' />
        <link rel='stylesheet' id='elementor-post-10-css' href='/assets/wp-content/uploads/elementor/css/post-10.css?ver=1741320363' media='all' />
        <link rel='stylesheet' id='elementor-post-131-css' href='/assets/wp-content/uploads/elementor/css/post-1331.css?ver=1741320363' media='all' />
        <link rel='stylesheet' id='widget-spacer-css' href='/assets/wp-content/plugins/elementor/assets/css/widget-spacer.min.css?ver=3.27.6' media='all' />
        <link rel='stylesheet' id='widget-heading-css' href='/assets/wp-content/plugins/elementor/assets/css/widget-heading.min.css?ver=3.27.6' media='all' />
        <link rel='stylesheet' id='widget-text-editor-css' href='/assets/wp-content/plugins/elementor/assets/css/widget-text-editor.min.css?ver=3.27.6' media='all' />
        <link rel='stylesheet' id='widget-icon-box-css' href='/assets/wp-content/plugins/elementor/assets/css/widget-icon-box.min.css?ver=3.27.6' media='all' />
        <link rel='stylesheet' id='widget-icon-box-css' href='/assets/wp-content/plugins/elementor/assets/css/widget-nested-accordion.min.css?ver=3.27.6' media='all' />
        <link rel='stylesheet' id='widget-icon-list-css' href='/assets/wp-content/plugins/elementor/assets/css/widget-icon-list.min.css?ver=3.27.6' media='all' />
        <link rel='stylesheet' id='e-animation-fadeIn-css' href='/assets/wp-content/plugins/elementor/assets/lib/animations/styles/fadeIn.min.css?ver=3.27.6' media='all' />
        <link rel='stylesheet' id='widget-mega-menu-css' href='/assets/wp-content/plugins/elementor-pro/assets/css/widget-mega-menu.min.css?ver=3.26.3' media='all' />
        <link rel='stylesheet' id='widget-image-css' href='/assets/wp-content/plugins/elementor/assets/css/widget-image.min.css?ver=3.27.6' media='all' />
        <link rel='stylesheet' id='widget-social-icons-css' href='/assets/wp-content/plugins/elementor/assets/css/widget-social-icons.min.css?ver=3.27.6' media='all' />
        <link rel='stylesheet' id='e-apple-webkit-css' href='/assets/wp-content/plugins/elementor/assets/css/conditionals/apple-webkit.min.css?ver=3.27.6' media='all' />
        <link rel='stylesheet' id='font-awesome-5-all-css' href='/assets/wp-content/plugins/elementor/assets/lib/font-awesome/css/all.min.css?ver=3.27.6' media='all' />
        <link rel='stylesheet' id='font-awesome-4-shim-css' href='/assets/wp-content/plugins/elementor/assets/lib/font-awesome/css/v4-shims.min.css?ver=3.27.6' media='all' />
        <link rel='stylesheet' id='widget-divider-css' href='/assets/wp-content/plugins/elementor/assets/css/widget-divider.min.css?ver=3.27.6' media='all' />
        <link rel='stylesheet' id='swiper-css' href='/assets/wp-content/plugins/elementor/assets/lib/swiper/v8/css/swiper.min.css?ver=8.4.5' media='all' />
        <link rel='stylesheet' id='e-swiper-css' href='/assets/wp-content/plugins/elementor/assets/css/conditionals/e-swiper.min.css?ver=3.27.6' media='all' />
        <link rel='stylesheet' id='widget-loop-common-css' href='/assets/wp-content/plugins/elementor-pro/assets/css/widget-loop-common.min.css?ver=3.26.3' media='all' />
        <link rel='stylesheet' id='widget-loop-carousel-css' href='/assets/wp-content/plugins/elementor-pro/assets/css/widget-loop-carousel.min.css?ver=3.26.3' media='all' />
        <link rel='stylesheet' id='widget-counter-css' href='/assets/wp-content/plugins/elementor/assets/css/widget-counter.min.css?ver=3.27.6' media='all' />
        <link rel='stylesheet' id='widget-image-box-css' href='/assets/wp-content/plugins/elementor/assets/css/widget-image-box.min.css?ver=3.27.6' media='all' />
        <link rel='stylesheet' id='widget-rating-css' href='/assets/wp-content/plugins/elementor/assets/css/widget-rating.min.css?ver=3.27.6' media='all' />
        <link rel='stylesheet' id='widget-nested-carousel-css' href='/assets/wp-content/plugins/elementor-pro/assets/css/widget-nested-carousel.min.css?ver=3.26.3' media='all' />
        <link rel='stylesheet' id='elementor-post-8-css' href='/assets/wp-content/uploads/elementor/css/post-8.css?ver=1741322650' media='all' />
        <link rel='stylesheet' id='elementor-post-920-css' href='/assets/wp-content/uploads/elementor/css/post-920.css?ver=1741320365' media='all' />
        <link rel='stylesheet' id='elementor-post-940-css' href='/assets/wp-content/uploads/elementor/css/post-940.css?ver=1741320365' media='all' />
        <link rel='stylesheet' id='ekit-widget-styles-css' href='/assets/wp-content/plugins/elementskit-lite/widgets/init/assets/css/widget-styles.css?ver=3.4.4' media='all' />
        <link rel='stylesheet' id='ekit-responsive-css' href='/assets/wp-content/plugins/elementskit-lite/widgets/init/assets/css/responsive.css?ver=3.4.4' media='all' />
        <link rel='stylesheet' id='google-fonts-1-css' href='https://fonts.googleapis.com/css?family=Inter%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CHeebo%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CInter+Tight%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CPlus+Jakarta+Sans%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&#038;display=swap&#038;ver=6.7.2'
          media='all' />
        <link rel='stylesheet' id='elementor-icons-ekiticons-css' href='/assets/wp-content/plugins/elementskit-lite/modules/elementskit-icon-pack/assets/css/ekiticons.css?ver=3.4.4' media='all' />








      </head>
      <body
        className="home page-template page-template-elementor_header_footer page page-id-8 wp-custom-logo wp-embed-responsive theme-default elementor-default elementor-template-full-width elementor-kit-591 elementor-page elementor-page-8 e--ua-isTouchDevice e--ua-blink e--ua-chrome e--ua-webkit" data-elementor-device-mode="desktop"
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
