const Footer = () => {
    return <>
        <div
            data-elementor-type="footer"
            data-elementor-id={940}
            className="elementor elementor-940 elementor-location-footer"
            data-elementor-post-type="elementor_library"
        >
            <div
                className="elementor-element elementor-element-a542a45 e-flex e-con-boxed e-con e-parent e-lazyloaded"
                data-id="a542a45"
                data-element_type="container"
            >
                <div className="e-con-inner">
                    <div
                        className="elementor-element elementor-element-f4eb5fb elementor-widget elementor-widget-html"
                        data-id="f4eb5fb"
                        data-element_type="widget"
                        data-widget_type="html.default"
                    >
                        <div className="elementor-widget-container">
                            <style
                                dangerouslySetInnerHTML={{
                                    __html:
                                        '\n    /* Styling for the button */\n#split-button {\n  position: relative; /* To position the layers correctly */\n  background-color: #F59630; /* Orange background */\n  \n  overflow: hidden; /* Hide any overflow content */\n  border: 1px solid #F59630; /* Border color matches the background */\n  cursor: pointer;\n  transition: border-color 0.5s ease-in-out, transform 0.3s ease-in-out; /* Transition for border color and scaling */\n}\n\n/* Button Text */\n.button-text {\n  position: relative; /* Keep text layer on top */\n  z-index: 2; /* Ensure the text is above the background */\n  transition: color 0.5s ease-in-out; /* Transition for text color */\n}\n\n/* Pseudo-elements for the split effect */\n#split-button::before,\n#split-button::after {\n  content: \'\'; /* Empty content */\n  position: absolute;\n  top: 0;\n  width: 50%;\n  height: 100%;\n  background-color: #000000; /* Black background for the split */\n  transition: transform 0.5s ease-in-out, background-color 0.5s ease-in-out; /* Smooth transition for the split */\n  z-index: 1; /* Put this behind the text layer */\n}\n\n/* Left side split effect */\n#split-button::before {\n  left: 0;\n  transform: scaleX(0); /* Initially hidden (scale to 0) */\n  transform-origin: right; /* Start from the right side */\n}\n\n/* Right side split effect */\n#split-button::after {\n  right: 0;\n  transform: scaleX(0); /* Initially hidden (scale to 0) */\n  transform-origin: left; /* Start from the left side */\n}\n\n/* Hover effect */\n#split-button:hover::before {\n  transform: scaleX(1); /* Expand the left side */\n  background-color: #00000; /* Keep the left background orange */\n}\n\n#split-button:hover::after {\n  transform: scaleX(1); /* Expand the right side */\n  background-color: #000000; /* Keep the right background orange */\n}\n\n#split-button:hover {\n  color: #FFFFFF; /* Change text color to white */\n  border-color: #000000; /* Change border color to black */\n  \n  transform: scale(0.95); /* Shrink the button by 5% */\n}\n\n/* Hover effect on list icon */\n\n/* Apply a smooth transition to all child list items of .custom-list */\n.custom-list li {\n  transition: transform 0.3s ease; /* Smooth transition */\n}\n\n/* On hover, translate all child list items in the X-axis */\n.custom-list li:hover {\n  transform: translateX(5px); /* Adjust the value for desired movement */\n}\n/*work portfolio*/\n .badge {\n  background-color: #046435; /* Background color for the "New" badge (tomato) */\n  color: white;              /* Text color */\n  padding: 1px 5px;         /* Add some padding */\n  font-weight: bold;         /* Make the text bold */\n  border-radius: 6px;       /* Rounded corners for the badge */\n  position: absolute;        /* Positioning the badge */\n  top: 0;                    /* Place it at the top of the list item */\n  right: 0;                  /* Align it to the right */\n  transform: translate(-40%, -20%); /* Fine-tune positioning */\n  \n  font-size: 8px;           /* Adjust font size */\n}\n\n/*work portfolio*/\n .badge1 {\n  background-color: #F45F26; /* Background color for the "New" badge (tomato) */\n  color: white;              /* Text color */\n  padding: 1px 5px;         /* Add some padding */\n  font-weight: bold;         /* Make the text bold */\n  border-radius: 6px;       /* Rounded corners for the badge */\n  position: absolute;        /* Positioning the badge */\n  top: 0;                    /* Place it at the top of the list item */\n  right: 0;                  /* Align it to the right */\n  transform: translate(120%, -20%); /* Fine-tune positioning */\n  \n  font-size: 8px;           /* Adjust font size */\n}\n/*contact*/\n .badge2 {\n  background-color: #B0226C; /* Background color for the "New" badge (tomato) */\n  color: white;              /* Text color */\n  padding: 1px 5px;         /* Add some padding */\n  font-weight: bold;         /* Make the text bold */\n  border-radius: 6px;       /* Rounded corners for the badge */\n  position: absolute;        /* Positioning the badge */\n  top: 0;                    /* Place it at the top of the list item */\n  right: 0;                  /* Align it to the right */\n  transform: translate(70%, -20%); /* Fine-tune positioning */\n  \n  font-size: 8px;           /* Adjust font size */\n}\n\n/*contact*/\n .badge4 {\n  background-color: #6514C8; /* Background color for the "New" badge (tomato) */\n  color: white;              /* Text color */\n  padding: 1px 5px;         /* Add some padding */\n  font-weight: bold;         /* Make the text bold */\n  border-radius: 6px;       /* Rounded corners for the badge */\n  position: absolute;        /* Positioning the badge */\n  top: 0;                    /* Place it at the top of the list item */\n  right: 0;                  /* Align it to the right */\n  transform: translate(120%, -20%); /* Fine-tune positioning */\n  \n  font-size: 8px;           /* Adjust font size */\n}\n@keyframes wave {\n  0% {\n    box-shadow: 0 0 0px 0px rgba(255, 255, 255, 0.5);\n  }\n  100% {\n    box-shadow: 0 0 10px 10px rgba(255, 255, 255, 0);\n  }\n}\n\n.wave  {\n  animation-name: wave; /* Specify the animation name */\n  animation-duration: 1s; /* Duration for each cycle */\n  animation-timing-function: linear; /* Linear timing function */\n  animation-iteration-count: infinite; /* Infinite loop */\n}\n\n'
                                }}
                            />{" "}
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="elementor-element elementor-element-4b93929 e-flex e-con-boxed e-con e-parent e-lazyloaded"
                data-id="4b93929"
                data-element_type="container"
                data-settings='{"background_background":"classic"}'
            >
                <div className="e-con-inner">
                    <div
                        className="elementor-element elementor-element-cc838f4 e-con-full e-flex e-con e-child"
                        data-id="cc838f4"
                        data-element_type="container"
                        data-settings='{"background_background":"classic"}'
                    >
                        <div
                            className="elementor-element elementor-element-d67f9ca e-con-full e-flex e-con e-child"
                            data-id="d67f9ca"
                            data-element_type="container"
                        >
                            <div
                                className="elementor-element elementor-element-4d125ca elementor-widget elementor-widget-heading"
                                data-id="4d125ca"
                                data-element_type="widget"
                                data-widget_type="heading.default"
                            >
                                <div className="elementor-widget-container">
                                    <h2 className="elementor-heading-title elementor-size-default">
                                        Services &amp; Solutions
                                    </h2>{" "}
                                </div>
                            </div>
                            <div
                                className="elementor-element elementor-element-f37c6cd custom-list elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                                data-id="f37c6cd"
                                data-element_type="widget"
                                data-widget_type="icon-list.default"
                            >
                                <div className="elementor-widget-container">
                                    <ul className="elementor-icon-list-items">
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">
                                                Custom Website Development
                                            </span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">
                                                E-Commerce Development
                                            </span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">
                                                UI/UX Design &amp; Prototyping
                                            </span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">
                                                Website Maintenance &amp; Optimization
                                            </span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">
                                                Custom Software Development
                                            </span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">
                                                Enterprise Software Solutions
                                            </span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">
                                                SEO &amp; Content Marketing
                                            </span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">
                                                Cyber Security Solutions
                                            </span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">
                                                Cloud Hosting &amp; Infrastructure
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div
                            className="elementor-element elementor-element-f237dc9 e-con-full e-flex e-con e-child"
                            data-id="f237dc9"
                            data-element_type="container"
                        >
                            <div
                                className="elementor-element elementor-element-d2866da elementor-widget elementor-widget-heading"
                                data-id="d2866da"
                                data-element_type="widget"
                                data-widget_type="heading.default"
                            >
                                <div className="elementor-widget-container">
                                    <h2 className="elementor-heading-title elementor-size-default">
                                        Technology &amp; Tools
                                    </h2>{" "}
                                </div>
                            </div>
                            <div
                                className="elementor-element elementor-element-752416a custom-list elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                                data-id="752416a"
                                data-element_type="widget"
                                data-widget_type="icon-list.default"
                            >
                                <div className="elementor-widget-container">
                                    <ul className="elementor-icon-list-items">
                                        <li className="elementor-icon-list-item">
                                            <a href="/home/webdev/wordpress/">
                                                <span className="elementor-icon-list-text">WordPress</span>
                                            </a>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <a href="/home/webdev/react/">
                                                <span className="elementor-icon-list-text">
                                                    React | Angular | Vue.js{" "}
                                                </span>
                                            </a>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <a href="/home/webdev/django">
                                                <span className="elementor-icon-list-text">
                                                    Django | Laravel | Node.js
                                                </span>
                                            </a>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">
                                                AWS | Microsoft Azure | Google Cloud{" "}
                                            </span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">
                                                Docker | Kubernetes | Terraform
                                            </span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <a href="/home/cybersecurity/paloalto/">
                                                <span className="elementor-icon-list-text">
                                                    Palo Alto Networks
                                                </span>
                                            </a>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <a href="/home/cybersecurity/cloudfare/">
                                                <span className="elementor-icon-list-text">Cloudflare</span>
                                            </a>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <a href="/home/cybersecurity/fortinet/">
                                                <span className="elementor-icon-list-text">
                                                    Fortinet | Check Point
                                                </span>
                                            </a>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <a href="https://cybertron-tech.com/semrush-ahrefs/">
                                                <span className="elementor-icon-list-text">
                                                    SEMrush | Ahrefs
                                                </span>
                                            </a>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <a href="https://cybertron-tech.com/mailchimp-klaviyo/">
                                                <span className="elementor-icon-list-text">
                                                    Mailchimp | Klaviyo
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div
                            className="elementor-element elementor-element-f7c670a e-con-full e-flex e-con e-child"
                            data-id="f7c670a"
                            data-element_type="container"
                        >
                            <div
                                className="elementor-element elementor-element-0779970 elementor-widget elementor-widget-heading"

                                data-element_type="widget"
                                data-widget_type="heading.default"
                            >
                                <div className="elementor-widget-container">
                                    <h2 className="elementor-heading-title elementor-size-default">
                                        Quick Links
                                    </h2>{" "}
                                </div>
                            </div>
                            <div
                                className="elementor-element elementor-element-d13bf84 custom-list elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                                data-id="d13bf84"
                                data-element_type="widget"
                                data-widget_type="icon-list.default"
                            >
                                <div className="elementor-widget-container">
                                    <ul className="elementor-icon-list-items">
                                        <li className="elementor-icon-list-item">
                                            <a href="/">
                                                <span className="elementor-icon-list-text">Home</span>
                                            </a>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <a href="/home/infozone/">
                                                <span className="elementor-icon-list-text">InfoZone</span>
                                            </a>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <a href="/home/aboutus/">
                                                <span className="elementor-icon-list-text">About Us</span>
                                            </a>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <a href="/home/careers/">
                                                <span className="elementor-icon-list-text">Careers</span>
                                            </a>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <a href="/home/contactus/">
                                                <span className="elementor-icon-list-text">Contact Us</span>
                                            </a>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <a href="/home/faqs/">
                                                <span className="elementor-icon-list-text">FAQs</span>
                                            </a>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <a href="/home/prices/">
                                                <span className="elementor-icon-list-text">Pricing</span>
                                            </a>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <a href="/home/privacy-policy/">
                                                <span className="elementor-icon-list-text">
                                                    Privacy Policy
                                                </span>
                                            </a>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <a href="/home/refund-policy/">
                                                <span className="elementor-icon-list-text">
                                                    Refund Policy
                                                </span>
                                            </a>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <a href="/home/terms-of-use/">
                                                <span className="elementor-icon-list-text">
                                                    Terms of Use
                                                </span>
                                            </a>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <a href="#">
                                                <span className="elementor-icon-list-text">Sitemap</span>
                                            </a>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <a href="#">
                                                <span className="elementor-icon-list-text">Downloads</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div
                            className="elementor-element elementor-element-2fccfbf e-con-full e-flex e-con e-child"
                            data-id="2fccfbf"
                            data-element_type="container"
                        >
                            <div
                                className="elementor-element elementor-element-26a34bb elementor-widget elementor-widget-heading"
                                data-id="26a34bb"
                                data-element_type="widget"
                                data-widget_type="heading.default"
                            >
                                <div className="elementor-widget-container">
                                    <h2 className="elementor-heading-title elementor-size-default">
                                        Get In Touch
                                    </h2>{" "}
                                </div>
                            </div>
                            <div
                                className="elementor-element elementor-element-1b2e6a2 custom-list elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                                data-id="1b2e6a2"
                                data-element_type="widget"
                                data-widget_type="icon-list.default"
                            >
                                <div className="elementor-widget-container">
                                    <ul className="elementor-icon-list-items">
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">
                                                <b>Phone:</b> <br /> 1-888-453-5101
                                            </span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-text">
                                                <b>Working Hours:</b> <br /> Monday - Friday: 9 AM - 6 PM
                                            </span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <a href="http://contact@cybertron-tech.com">
                                                <span className="elementor-icon-list-text">
                                                    <b>Email:</b> <br />
                                                    contact@cybertron-tech.com
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div
                                className="elementor-element elementor-element-ab4db63 elementor-align-left elementor-widget elementor-widget-button"
                                data-id="ab4db63"
                                data-element_type="widget"
                                data-widget_type="button.default"
                            >
                                <div className="elementor-widget-container">
                                    <div className="elementor-button-wrapper">
                                        <a
                                            className="elementor-button elementor-button-link elementor-size-sm"
                                            href="https://cybertron-tech.com/contact/"
                                        >
                                            <span className="elementor-button-content-wrapper">
                                                <span className="elementor-button-text">
                                                    Get A Free Quote Now
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="elementor-element elementor-element-6edccea e-con-full e-flex e-con e-child"
                        data-id="6edccea"
                        data-element_type="container"
                    >
                        <div
                            className="elementor-element elementor-element-213370a e-con-full e-flex e-con e-child"
                            data-id="213370a"
                            data-element_type="container"
                        >
                            <div
                                className="elementor-element elementor-element-34e714f elementor-widget elementor-widget-image"
                                data-id="34e714f"
                                data-element_type="widget"
                                data-widget_type="image.default"
                            >
                                <div className="elementor-widget-container">
                                    <a href="https://cybertron-tech.com/">
                                        <img
                                            width={800}
                                            height={101}
                                            src="https://cybertron-tech.com/wp-content/uploads/2025/02/Picsart_25-02-26_12-03-18-104.png"
                                            className="attachment-large size-large wp-image-1213"
                                            alt=""
                                            srcSet="https://cybertron-tech.com/wp-content/uploads/2025/02/Picsart_25-02-26_12-03-18-104.png 971w, https://cybertron-tech.com/wp-content/uploads/2025/02/Picsart_25-02-26_12-03-18-104-300x38.png 300w, https://cybertron-tech.com/wp-content/uploads/2025/02/Picsart_25-02-26_12-03-18-104-768x97.png 768w"
                                            sizes="(max-width: 800px) 100vw, 800px"
                                        />{" "}
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div
                            className="elementor-element elementor-element-f285c1c e-con-full e-flex e-con e-child"
                            data-id="f285c1c"
                            data-element_type="container"
                        >
                            <div
                                className="elementor-element elementor-element-516e612 elementor-widget elementor-widget-text-editor"
                                data-id="516e612"
                                data-element_type="widget"
                                data-widget_type="text-editor.default"
                            >
                                <div className="elementor-widget-container">
                                    <p>
                                        Copyright © 2025 Cybertron . All rights reserved by{" "}
                                        <strong>
                                            <a href="https://cybertron-tech.com/">
                                                Cybertron&nbsp;Technologies
                                            </a>
                                        </strong>
                                    </p>{" "}
                                </div>
                            </div>
                        </div>
                        <div
                            className="elementor-element elementor-element-240cc50 e-con-full e-flex e-con e-child"
                            data-id="240cc50"
                            data-element_type="container"
                        >
                            <div
                                className="elementor-element elementor-element-d0e7c34 e-grid-align-left elementor-shape-rounded elementor-grid-0 elementor-widget elementor-widget-social-icons"
                                data-id="d0e7c34"
                                data-element_type="widget"
                                data-widget_type="social-icons.default"
                            >
                                <div className="elementor-widget-container">
                                    <div className="elementor-social-icons-wrapper elementor-grid">
                                        <span className="elementor-grid-item">
                                            <a
                                                className="elementor-icon elementor-social-icon elementor-social-icon-facebook elementor-repeater-item-90a0069"
                                                href="https://www.facebook.com/profile.php?id=61572533186906"
                                                target="_blank"
                                            >
                                                <span className="elementor-screen-only">Facebook</span>
                                                <svg
                                                    className="e-font-icon-svg e-fab-facebook"
                                                    viewBox="0 0 512 512"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                                                </svg>{" "}
                                            </a>
                                        </span>
                                        <span className="elementor-grid-item">
                                            <a
                                                className="elementor-icon elementor-social-icon elementor-social-icon-x-twitter elementor-repeater-item-021425d"
                                                href="https://x.com/cybrontron_Tech"
                                                target="_blank"
                                            >
                                                <span className="elementor-screen-only">X-twitter</span>
                                                <svg
                                                    className="e-font-icon-svg e-fab-x-twitter"
                                                    viewBox="0 0 512 512"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                                                </svg>{" "}
                                            </a>
                                        </span>
                                        <span className="elementor-grid-item">
                                            <a
                                                className="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-repeater-item-853fc4e"
                                                href="https://www.instagram.com/cybertr0n.tech/"
                                                target="_blank"
                                            >
                                                <span className="elementor-screen-only">Instagram</span>
                                                <svg
                                                    className="e-font-icon-svg e-fab-instagram"
                                                    viewBox="0 0 448 512"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                                </svg>{" "}
                                            </a>
                                        </span>
                                        <span className="elementor-grid-item">
                                            <a
                                                className="elementor-icon elementor-social-icon elementor-social-icon-linkedin elementor-repeater-item-1a8730f"
                                                href="https://www.linkedin.com/in/cyber-tron-2875b3352/"
                                                target="_blank"
                                            >
                                                <span className="elementor-screen-only">Linkedin</span>
                                                <svg
                                                    className="e-font-icon-svg e-fab-linkedin"
                                                    viewBox="0 0 448 512"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                                                </svg>{" "}
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
}
export default Footer;