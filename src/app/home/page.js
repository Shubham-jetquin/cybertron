'use client';

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const images = [
        "https://cybertron-tech.com/wp-content/uploads/2025/02/logoo-9VAKXU.png",
        "https://cybertron-tech.com/wp-content/uploads/2025/02/logo-GR7E54.png",
        "https://cybertron-tech.com/wp-content/uploads/2025/02/logoo-JQLHGD.png",
    ];

    const secondSetting = {
        infinite: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                },
            },
        ],
    };

    const thirdSetting = {
        infinite: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                },
            },
        ],
    };


    return <>

        <div data-elementor-type="wp-page" data-elementor-id={8} className="elementor elementor-8" data-elementor-post-type="page">
            <div className="elementor-element elementor-element-6476a41 e-con-full e-flex e-con e-parent" data-id="6476a41" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}" style={{
                backgroundImage: "url('/assets/bannebg.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "auto",
            }}>

                <div className="elementor-element elementor-element-2a2c767 e-con-full e-flex e-con e-child" data-id="2a2c767" data-element_type="container">
                    <div className="elementor-element elementor-element-1241e02 elementor-widget elementor-widget-heading" data-id="1241e02" data-element_type="widget" data-widget_type="heading.default">
                        <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">Welcome To Cybertron</h2>				</div>
                    </div>
                    <div className="elementor-element elementor-element-6830591 elementor-widget elementor-widget-heading" data-id={6830591} data-element_type="widget" data-widget_type="heading.default">
                        <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default" style={{color:'white'}}>The Ultimate Solution <br />for All Your Digital Needs</h2>				</div>
                    </div>
                    <div className="elementor-element elementor-element-ffb2597 elementor-widget elementor-widget-text-editor" data-id="ffb2597" data-element_type="widget" data-widget_type="text-editor.default">
                        <div className="elementor-widget-container">
                            <p><span style={{ "font-weight": "400", color:'white' }}>Cybertron offers a complete range of cybersecurity, digital marketing, SEO, and software solutions to help you stay secure and succeed in the digital world.</span></p>								</div>
                    </div>

                    <div className="elementor-element elementor-element-1cd0e62 e-con-full e-flex e-con e-child" data-id="1cd0e62" data-element_type="container">
                        <div className="elementor-element elementor-element-f5b9f7e elementor-widget elementor-widget-button" data-id="f5b9f7e" data-element_type="widget" data-widget_type="button.default">
                            <div className="elementor-widget-container">
                                <div className="elementor-button-wrapper">
                                    <a className="elementor-button elementor-button-link elementor-size-sm" href="/home/contactus/">
                                        <span className="elementor-button-content-wrapper">
                                            <span className="elementor-button-text">GET FREE TRIAL</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="elementor-element elementor-element-e8d9aa1 e-con-full e-flex e-con e-parent e-lazyloaded" data-id="e8d9aa1" data-element_type="container">
                <div className="elementor-element elementor-element-b0e27e1 e-con-full e-flex e-con e-child" data-id="b0e27e1" data-element_type="container">
                    <div className="elementor-element elementor-element-6a9458e elementor-widget elementor-widget-heading" data-id="6a9458e" data-element_type="widget" data-widget_type="heading.default">
                        <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">Reputation Strong, Security Tight, Software Smart – That’s Cybertron</h2>				</div>
                    </div>
                    <div className="elementor-element elementor-element-51ea08c elementor-widget__width-initial elementor-widget elementor-widget-text-editor" data-id="51ea08c" data-element_type="widget" data-widget_type="text-editor.default">
                        <div className="elementor-widget-container">
                            <p>In a world where cyber threats evolve by the second, Cybertron stands as your first line of defense and trusted digital partner. We don’t just protect businesses and individuals from digital threats – we anticipate them, neutralize them, and fortify your digital ecosystem with cutting-edge cybersecurity solutions. From real-time threat detection to unbreakable data privacy and enterprise-grade network security, we ensure that you stay steps ahead in an ever-shifting cyber landscape.</p>								</div>
                    </div>
                </div>
            </div>
            <div className="elementor-element elementor-element-eb7d7b0 elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile e-flex e-con-boxed e-con e-parent" data-id="eb7d7b0" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                <div className="e-con-inner">
                    <div className="elementor-element elementor-element-6b1cdde e-con-full e-flex e-con e-child" data-id="6b1cdde" data-element_type="container">
                        <div className="elementor-element elementor-element-71cb86a e-con-full e-flex e-con e-child" data-id="71cb86a" data-element_type="container">
                            <div className="elementor-element elementor-element-56da4d9 e-con-full e-flex e-con e-child" data-id="56da4d9" data-element_type="container">
                                <div className="elementor-element elementor-element-69f33be elementor-widget elementor-widget-heading" data-id="69f33be" data-element_type="widget" data-widget_type="heading.default">
                                    <div className="elementor-widget-container">
                                        <h2 className="elementor-heading-title elementor-size-default">Building the <span style={{ "fontSize": "28px", "color": "#14B69E", "font-weight": "800" }}>digital backbone for businesses</span>  <br />
                                            through innovation, protection, and limitless potential</h2>				</div>
                                </div>
                            </div>
                            <div className="elementor-element elementor-element-4631203 elementor-widget elementor-widget-text-editor" data-id={4631203} data-element_type="widget" data-widget_type="text-editor.default">
                                <div className="elementor-widget-container">
                                    <p><span style={{ "font-weight": "400" }}>we fuse innovative software development, cutting-edge marketing strategies, and top-tier cybersecurity to create a secure foundation that fosters growth.</span></p>								</div>
                            </div>
                            <div className="elementor-element elementor-element-af4540f e-con-full e-flex e-con e-child" data-id="af4540f" data-element_type="container">
                                <div className="elementor-element elementor-element-a792940 elementor-widget elementor-widget-button" data-id="a792940" data-element_type="widget" data-widget_type="button.default">
                                    <div className="elementor-widget-container">
                                        <div className="elementor-button-wrapper">
                                            <a className="elementor-button elementor-button-link elementor-size-sm" href="https://cybertron-tech.com/contact/">
                                                <span className="elementor-button-content-wrapper">
                                                    <span className="elementor-button-text">Get a Demo</span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="elementor-element elementor-element-31d0df8 elementor-widget__width-initial e-transform elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="31d0df8" data-element_type="widget" data-settings="{&quot;_transform_rotateZ_effect&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:90,&quot;sizes&quot;:[]},&quot;_transform_rotateZ_effect_tablet&quot;:{&quot;unit&quot;:&quot;deg&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_rotateZ_effect_mobile&quot;:{&quot;unit&quot;:&quot;deg&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]}}" data-widget_type="divider.default">
                                    <div className="elementor-widget-container">
                                        <div className="elementor-divider">
                                            <span className="elementor-divider-separator">
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="elementor-element elementor-element-d6dee17 elementor-widget elementor-widget-button" data-id="d6dee17" data-element_type="widget" data-widget_type="button.default">
                                    <div className="elementor-widget-container">
                                        <div className="elementor-button-wrapper">
                                            <a className="elementor-button elementor-button-link elementor-size-sm" href="https://cybertron-tech.com/about-us/">
                                                <span className="elementor-button-content-wrapper">
                                                    <span className="elementor-button-text">Learn More</span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="elementor-element elementor-element-19f386b e-flex e-con-boxed e-con e-parent e-lazyloaded" data-id="19f386b" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                <div className="e-con-inner">
                    <div className="elementor-element elementor-element-0196d41 e-con-full e-flex e-con e-child" data-id="0196d41" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                        <div className="elementor-element elementor-element-5cad5ed e-con-full e-flex e-con e-child" data-id="5cad5ed" data-element_type="container">
                            <div className="elementor-element elementor-element-481ba60 e-con-full e-flex e-con e-child" data-id="481ba60" data-element_type="container">
                                <div className="elementor-element elementor-element-ebf3857 elementor-widget elementor-widget-image" data-id="ebf3857" data-element_type="widget" data-widget_type="image.default">
                                    <div className="elementor-widget-container">
                                        <img fetchPriority="high" decoding="async" width={300} height={301} src="https://cybertron-tech.com/wp-content/uploads/2025/02/security-1.png" className="attachment-large size-large wp-image-316" alt srcSet="https://cybertron-tech.com/wp-content/uploads/2025/02/security-1.png 300w, https://cybertron-tech.com/wp-content/uploads/2025/02/security-1-150x150.png 150w" sizes="(max-width: 300px) 100vw, 300px" />															</div>
                                </div>
                            </div>
                            <div className="elementor-element elementor-element-464a22e e-con-full e-flex e-con e-child" data-id="464a22e" data-element_type="container">
                                <div className="elementor-element elementor-element-6d75aff elementor-widget elementor-widget-heading" data-id="6d75aff" data-element_type="widget" data-widget_type="heading.default">
                                    <div className="elementor-widget-container">
                                        <h2 className="elementor-heading-title elementor-size-default">Security Services</h2>				</div>
                                </div>
                            </div>
                        </div>
                        <div className="elementor-element elementor-element-34331b9 e-con-full e-flex e-con e-child" data-id="34331b9" data-element_type="container">
                            <div className="elementor-element elementor-element-1e69407 elementor-widget elementor-widget-text-editor" data-id="1e69407" data-element_type="widget" data-widget_type="text-editor.default">
                                <div className="elementor-widget-container">
                                    <p>Protect your business with advanced cybersecurity solutions and real-time threat defense.</p>								</div>
                            </div>
                        </div>
                    </div>
                    <div className="elementor-element elementor-element-d10a20e e-con-full e-flex e-con e-child" data-id="d10a20e" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                        <div className="elementor-element elementor-element-3b43941 e-con-full e-flex e-con e-child" data-id="3b43941" data-element_type="container">
                            <div className="elementor-element elementor-element-33ac7bb e-con-full e-flex e-con e-child" data-id="33ac7bb" data-element_type="container">
                                <div className="elementor-element elementor-element-887b850 elementor-widget elementor-widget-image" data-id="887b850" data-element_type="widget" data-widget_type="image.default">
                                    <div className="elementor-widget-container">
                                        <img decoding="async" width={300} height={300} src="https://cybertron-tech.com/wp-content/uploads/2025/02/privacy.png" className="attachment-large size-large wp-image-317" alt srcSet="https://cybertron-tech.com/wp-content/uploads/2025/02/privacy.png 300w, https://cybertron-tech.com/wp-content/uploads/2025/02/privacy-150x150.png 150w" sizes="(max-width: 300px) 100vw, 300px" />															</div>
                                </div>
                            </div>
                            <div className="elementor-element elementor-element-683e59a e-con-full e-flex e-con e-child" data-id="683e59a" data-element_type="container">
                                <div className="elementor-element elementor-element-f5b2942 elementor-widget elementor-widget-heading" data-id="f5b2942" data-element_type="widget" data-widget_type="heading.default">
                                    <div className="elementor-widget-container">
                                        <h2 className="elementor-heading-title elementor-size-default">Data Privacy</h2>				</div>
                                </div>
                            </div>
                        </div>
                        <div className="elementor-element elementor-element-b2308e5 e-con-full e-flex e-con e-child" data-id="b2308e5" data-element_type="container">
                            <div className="elementor-element elementor-element-80f47b8 elementor-widget elementor-widget-text-editor" data-id="80f47b8" data-element_type="widget" data-widget_type="text-editor.default">
                                <div className="elementor-widget-container">
                                    <p><span style={{ "font-weight": "400" }}>Keep your sensitive information safe with encrypted security and strict privacy measures.</span></p>								</div>
                            </div>
                        </div>
                    </div>
                    <div className="elementor-element elementor-element-0f26e91 e-con-full e-flex e-con e-child" data-id="0f26e91" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                        <div className="elementor-element elementor-element-3dc96b8 e-con-full e-flex e-con e-child" data-id="3dc96b8" data-element_type="container">
                            <div className="elementor-element elementor-element-9b19dd5 e-con-full e-flex e-con e-child" data-id="9b19dd5" data-element_type="container">
                                <div className="elementor-element elementor-element-0feebf5 elementor-widget elementor-widget-image" data-id="0feebf5" data-element_type="widget" data-widget_type="image.default">
                                    <div className="elementor-widget-container">
                                        <img decoding="async" width={300} height={301} src="https://cybertron-tech.com/wp-content/uploads/2025/02/certified-industry.png" className="attachment-large size-large wp-image-318" alt srcSet="https://cybertron-tech.com/wp-content/uploads/2025/02/certified-industry.png 300w, https://cybertron-tech.com/wp-content/uploads/2025/02/certified-industry-150x150.png 150w" sizes="(max-width: 300px) 100vw, 300px" />															</div>
                                </div>
                            </div>
                            <div className="elementor-element elementor-element-5e4e7d9 e-con-full e-flex e-con e-child" data-id="5e4e7d9" data-element_type="container">
                                <div className="elementor-element elementor-element-050baaa elementor-widget elementor-widget-heading" data-id="050baaa" data-element_type="widget" data-widget_type="heading.default">
                                    <div className="elementor-widget-container">
                                        <h2 className="elementor-heading-title elementor-size-default">Industry Certified</h2>				</div>
                                </div>
                            </div>
                        </div>
                        <div className="elementor-element elementor-element-eff53d6 e-con-full e-flex e-con e-child" data-id="eff53d6" data-element_type="container">
                            <div className="elementor-element elementor-element-46f7235 elementor-widget elementor-widget-text-editor" data-id="46f7235" data-element_type="widget" data-widget_type="text-editor.default">
                                <div className="elementor-widget-container">
                                    <p>Trusted and certified cybersecurity solutions that meet global security standards.</p>								</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="elementor-element elementor-element-772da88 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-id="772da88" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                <div className="e-con-inner">
                    <div className="elementor-element elementor-element-9dfa537 e-con-full e-flex e-con e-child" data-id="9dfa537" data-element_type="container">
                        <div className="elementor-element elementor-element-58103f9 elementor-widget elementor-widget-text-editor" data-id="58103f9" data-element_type="widget" data-widget_type="text-editor.default">
                            <div className="elementor-widget-container">
                                <p>Trusted Over<span style={{ "color": "#20bdbd" }}> 2300 + </span>Companies in the World</p>								</div>
                        </div>
                    </div>
                    <div className="slider-container">
                        <Slider {...settings}>
                            {images.map((src, index) => (
                                <div key={index} className="slide-item">
                                    <div className="elementor elementor-989">
                                        <div className="elementor-element elementor-widget-image">
                                            <div className="elementor-widget-container">
                                                <img
                                                    loading="lazy"
                                                    decoding="async"
                                                    src={src}
                                                    alt={`Slide ${index + 1}`}
                                                    className="attachment-large size-large wp-image-319"
                                                // style={{ width: "100%", height: "auto" }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>

                    </div>
                </div>
            </div>
            <div className="elementor-element elementor-element-6476a41 e-con-full e-flex e-con e-parent" data-id="6476a41" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                <div className="elementor-element elementor-element-f178965 e-con-full e-flex e-con e-child" data-id="f178965" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                    <div className="elementor-element elementor-element-e292c7f e-con-full e-flex e-con e-child" data-id="e292c7f" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                        <div className="elementor-element elementor-element-4d18787 elementor-widget elementor-widget-heading" data-id="4d18787" data-element_type="widget" data-widget_type="heading.default">
                            <div className="elementor-widget-container">
                                <h2 className="elementor-heading-title elementor-size-default">We Are Open For Opportunities!</h2>				</div>
                        </div>
                        <div className="elementor-element elementor-element-6fa722b elementor-widget elementor-widget-text-editor" data-id="6fa722b" data-element_type="widget" data-widget_type="text-editor.default">
                            <div className="elementor-widget-container">
                                <p>
                                    <span style={{ "font-weight": "400" }}>Partner with Cybertron for innovative cybersecurity, digital solutions, and business growth. Let’s create something great together!</span>
                                </p>
                            </div>
                        </div>
                        <div className="elementor-element elementor-element-44aef2a elementor-widget elementor-widget-button" data-id="44aef2a" data-element_type="widget" data-widget_type="button.default">
                            <div className="elementor-widget-container">
                                <div className="elementor-button-wrapper">
                                    <a className="elementor-button elementor-button-link elementor-size-sm" href="#">
                                        <span className="elementor-button-content-wrapper">
                                            <span className="elementor-button-icon">
                                                <svg aria-hidden="true" className="e-font-icon-svg e-fas-long-arrow-alt-right" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" /></svg>			</span>
                                            <span className="elementor-button-text">Consult Now</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="elementor-element elementor-element-2a2c767 e-con-full e-flex e-con e-child" data-id="2a2c767" data-element_type="container">
                    <div className="elementor-element elementor-element-1241e02 elementor-widget elementor-widget-heading" data-id="1241e02" data-element_type="widget" data-widget_type="heading.default">
                        <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">Welcome To Cybertron</h2>				</div>
                    </div>
                    <div className="elementor-element elementor-element-6830591 elementor-widget elementor-widget-heading" data-id={6830591} data-element_type="widget" data-widget_type="heading.default">
                        <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">The Ultimate Solution <br />for All Your Digital Needs</h2>				</div>
                    </div>
                    <div className="elementor-element elementor-element-ffb2597 elementor-widget elementor-widget-text-editor" data-id="ffb2597" data-element_type="widget" data-widget_type="text-editor.default">
                        <div className="elementor-widget-container">
                            <p><span style={{ "font-weight": "400" }}>Cybertron offers a complete range of cybersecurity, digital marketing, SEO, and software solutions to help you stay secure and succeed in the digital world.</span></p>								</div>
                    </div>
                    <div className="elementor-element elementor-element-c11ed2c e-con-full e-flex e-con e-child" data-id="c11ed2c" data-element_type="container">
                        <div className="elementor-element elementor-element-5719726 e-con-full e-flex e-con e-child" data-id={5719726} data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                            <div className="elementor-element elementor-element-37be888 e-con-full e-flex e-con e-child" data-id="37be888" data-element_type="container">
                                <div className="elementor-element elementor-element-78311a3 e-con-full e-flex e-con e-child" data-id="78311a3" data-element_type="container">
                                    <div className="elementor-element elementor-element-b631abf elementor-widget elementor-widget-image" data-id="b631abf" data-element_type="widget" data-widget_type="image.default">
                                        <div className="elementor-widget-container">
                                            <img loading="lazy" decoding="async" width={150} height={150} src="https://cybertron-tech.com/wp-content/uploads/2025/02/cloud-150x150-1.png" className="attachment-large size-large wp-image-325" alt />															</div>
                                    </div>
                                </div>
                                <div className="elementor-element elementor-element-fb17566 e-con-full e-flex e-con e-child" data-id="fb17566" data-element_type="container">
                                    <div className="elementor-element elementor-element-263ae2d elementor-widget elementor-widget-heading" data-id="263ae2d" data-element_type="widget" data-widget_type="heading.default">
                                        <div className="elementor-widget-container">
                                            <h2 className="elementor-heading-title elementor-size-default">High Quality Service</h2>				</div>
                                    </div>
                                </div>
                            </div>
                            <div className="elementor-element elementor-element-3cc237c e-con-full e-flex e-con e-child" data-id="3cc237c" data-element_type="container">
                                <div className="elementor-element elementor-element-83ce533 elementor-widget elementor-widget-text-editor" data-id="83ce533" data-element_type="widget" data-widget_type="text-editor.default">
                                    <div className="elementor-widget-container">
                                        <p><span style={{ "font-weight": "400" }}>we provide top-quality cybersecurity, digital marketing, and software solutions with reliability, innovation, and customer satisfaction.</span></p>								</div>
                                </div>
                            </div>
                        </div>
                        <div className="elementor-element elementor-element-c57dad6 e-con-full e-flex e-con e-child" data-id="c57dad6" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                            <div className="elementor-element elementor-element-9b21477 e-con-full e-flex e-con e-child" data-id="9b21477" data-element_type="container">
                                <div className="elementor-element elementor-element-733ce85 e-con-full e-flex e-con e-child" data-id="733ce85" data-element_type="container">
                                    <div className="elementor-element elementor-element-2385e99 elementor-widget elementor-widget-image" data-id="2385e99" data-element_type="widget" data-widget_type="image.default">
                                        <div className="elementor-widget-container">
                                            <img loading="lazy" decoding="async" width={150} height={150} src="https://cybertron-tech.com/wp-content/uploads/2025/02/asser2x-150x150-1.png" className="attachment-large size-large wp-image-326" alt />															</div>
                                    </div>
                                </div>
                                <div className="elementor-element elementor-element-c1eb2d2 e-con-full e-flex e-con e-child" data-id="c1eb2d2" data-element_type="container">
                                    <div className="elementor-element elementor-element-b2574aa elementor-widget elementor-widget-heading" data-id="b2574aa" data-element_type="widget" data-widget_type="heading.default">
                                        <div className="elementor-widget-container">
                                            <h2 className="elementor-heading-title elementor-size-default">Effective Protection</h2>				</div>
                                    </div>
                                </div>
                            </div>
                            <div className="elementor-element elementor-element-38dd509 e-con-full e-flex e-con e-child" data-id="38dd509" data-element_type="container">
                                <div className="elementor-element elementor-element-72279bf elementor-widget elementor-widget-text-editor" data-id="72279bf" data-element_type="widget" data-widget_type="text-editor.default">
                                    <div className="elementor-widget-container">
                                        <p><span style={{ "font-weight": "400" }}>Cybertron ensures powerful and reliable protection against cyber threats, keeping your data and digital assets secure at all times.</span></p>								</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="elementor-element elementor-element-1cd0e62 e-con-full e-flex e-con e-child" data-id="1cd0e62" data-element_type="container">
                        <div className="elementor-element elementor-element-f5b9f7e elementor-widget elementor-widget-button" data-id="f5b9f7e" data-element_type="widget" data-widget_type="button.default">
                            <div className="elementor-widget-container">
                                <div className="elementor-button-wrapper">
                                    <a className="elementor-button elementor-button-link elementor-size-sm" href="https://cybertron-tech.com/contact/">
                                        <span className="elementor-button-content-wrapper">
                                            <span className="elementor-button-text">GET FREE TRIAL</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="elementor-element elementor-element-44a1406 e-con-full e-flex e-con e-parent" data-id="44a1406" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                <div className="elementor-element elementor-element-2106eff e-con-full e-flex e-con e-child" data-id="2106eff" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                </div>
                <div className="elementor-element elementor-element-e2a2e30 e-con-full e-flex e-con e-child" data-id="e2a2e30" data-element_type="container">
                    <div className="elementor-element elementor-element-d18a6b4 elementor-widget elementor-widget-heading" data-id="d18a6b4" data-element_type="widget" data-widget_type="heading.default">
                        <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">Why Choose Us</h2>				</div>
                    </div>
                    <div className="elementor-element elementor-element-0f7cce7 elementor-widget elementor-widget-heading" data-id="0f7cce7" data-element_type="widget" data-widget_type="heading.default">
                        <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">Provide Advanced Security for Advanced Threat</h2>				</div>
                    </div>
                    <div className="elementor-element elementor-element-0e2c05a elementor-widget elementor-widget-text-editor" data-id="0e2c05a" data-element_type="widget" data-widget_type="text-editor.default">
                        <div className="elementor-widget-container">
                            <p>At Cybertron, we provide advanced security for advanced threats, ensuring cutting-edge protection, real-time threat detection, and reliable digital solutions to keep you safe and ahead in the digital world.</p>								</div>
                    </div>
                    <div className="elementor-element elementor-element-80afc70 e-con-full e-flex e-con e-child" data-id="80afc70" data-element_type="container">
                        <div className="elementor-element elementor-element-f60164d elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="f60164d" data-element_type="widget" data-widget_type="icon-list.default">
                            <div className="elementor-widget-container">
                                <ul className="elementor-icon-list-items">
                                    <li className="elementor-icon-list-item">
                                        <span className="elementor-icon-list-icon">
                                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-check" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" /></svg>						</span>
                                        <span className="elementor-icon-list-text">Content Delivery Network</span>
                                    </li>
                                    <li className="elementor-icon-list-item">
                                        <span className="elementor-icon-list-icon">
                                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-check" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" /></svg>						</span>
                                        <span className="elementor-icon-list-text">Malware Detection Removal</span>
                                    </li>
                                    <li className="elementor-icon-list-item">
                                        <span className="elementor-icon-list-icon">
                                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-check" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" /></svg>						</span>
                                        <span className="elementor-icon-list-text">24/7 Support And Remote Admit</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="elementor-element elementor-element-7ce0306 e-con-full e-flex e-con e-child" data-id="7ce0306" data-element_type="container">
                        <div className="elementor-element elementor-element-acc6061 elementor-widget elementor-widget-button" data-id="acc6061" data-element_type="widget" data-widget_type="button.default">
                            <div className="elementor-widget-container">
                                <div className="elementor-button-wrapper">
                                    <a className="elementor-button elementor-button-link elementor-size-sm" href="https://cybertron-tech.com/about-us/">
                                        <span className="elementor-button-content-wrapper">
                                            <span className="elementor-button-text">READ MORE...</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="elementor-element elementor-element-57d5e5f e-flex e-con-boxed e-con e-parent" data-id="57d5e5f" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                <div className="e-con-inner">
                    <div className="elementor-element elementor-element-7504dfc e-con-full e-flex e-con e-child" data-id="7504dfc" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                        <div className="elementor-element elementor-element-187e27c e-con-full e-flex e-con e-child" data-id="187e27c" data-element_type="container">
                            <div className="elementor-element elementor-element-89e3dd9 elementor-view-default elementor-widget elementor-widget-icon" data-id="89e3dd9" data-element_type="widget" data-widget_type="icon.default">
                                <div className="elementor-widget-container">
                                    <div className="elementor-icon-wrapper">
                                        <div className="elementor-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#0EC9AC" height="800px" width="800px" id="Capa_1" viewBox="0 0 490 490" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M245,0C109.69,0,0,109.69,0,245s109.69,245,245,245s245-109.69,245-245S380.31,0,245,0z M31.401,260.313h52.542 c1.169,25.423,5.011,48.683,10.978,69.572H48.232C38.883,308.299,33.148,284.858,31.401,260.313z M320.58,229.688 c-1.152-24.613-4.07-47.927-8.02-69.572h50.192c6.681,20.544,11.267,43.71,12.65,69.572H320.58z M206.38,329.885 c-4.322-23.863-6.443-47.156-6.836-69.572h90.913c-0.392,22.416-2.514,45.709-6.837,69.572H206.38z M276.948,360.51 c-7.18,27.563-17.573,55.66-31.951,83.818c-14.376-28.158-24.767-56.255-31.946-83.818H276.948z M199.961,229.688 c1.213-24.754,4.343-48.08,8.499-69.572h73.08c4.157,21.492,7.286,44.818,8.5,69.572H199.961z M215.342,129.492 c9.57-37.359,21.394-66.835,29.656-84.983c8.263,18.148,20.088,47.624,29.66,84.983H215.342z M306.07,129.492 c-9.77-40.487-22.315-73.01-31.627-94.03c11.573,8.235,50.022,38.673,76.25,94.03H306.07z M215.553,35.46 c-9.312,21.02-21.855,53.544-31.624,94.032h-44.628C165.532,74.13,203.984,43.692,215.553,35.46z M177.44,160.117 c-3.95,21.645-6.867,44.959-8.019,69.572h-54.828c1.383-25.861,5.968-49.028,12.65-69.572H177.44z M83.976,229.688H31.401 c1.747-24.545,7.481-47.984,16.83-69.572h46.902C89.122,181.002,85.204,204.246,83.976,229.688z M114.577,260.313h54.424 c0.348,22.454,2.237,45.716,6.241,69.572h-47.983C120.521,309.288,115.92,286.115,114.577,260.313z M181.584,360.51 c7.512,31.183,18.67,63.054,34.744,95.053c-10.847-7.766-50.278-38.782-77.013-95.053H181.584z M273.635,455.632 c16.094-32.022,27.262-63.916,34.781-95.122h42.575C324.336,417.068,284.736,447.827,273.635,455.632z M314.759,329.885 c4.005-23.856,5.894-47.118,6.241-69.572h54.434c-1.317,25.849-5.844,49.016-12.483,69.572H314.759z M406.051,260.313h52.548 c-1.748,24.545-7.482,47.985-16.831,69.572h-46.694C401.041,308.996,404.882,285.736,406.051,260.313z M406.019,229.688 c-1.228-25.443-5.146-48.686-11.157-69.572h46.908c9.35,21.587,15.083,45.026,16.83,69.572H406.019z M425.309,129.492h-41.242 c-13.689-32.974-31.535-59.058-48.329-78.436C372.475,68.316,403.518,95.596,425.309,129.492z M154.252,51.06 c-16.792,19.378-34.636,45.461-48.324,78.432H64.691C86.48,95.598,117.52,68.321,154.252,51.06z M64.692,360.51h40.987 c13.482,32.637,31.076,58.634,47.752,78.034C117.059,421.262,86.318,394.148,64.692,360.51z M336.576,438.54 c16.672-19.398,34.263-45.395,47.742-78.03h40.99C403.684,394.146,372.945,421.258,336.576,438.54z" /> </g></svg>			</div>
                                    </div>
                                </div>
                            </div>
                            <div className="elementor-element elementor-element-744ddf0 elementor-widget elementor-widget-counter" data-id="744ddf0" data-element_type="widget" data-widget_type="counter.default">
                                <div className="elementor-widget-container">
                                    <div className="elementor-counter">
                                        <div className="elementor-counter-title">Cybersecurity Projects</div>			<div className="elementor-counter-number-wrapper">
                                            <span className="elementor-counter-number-prefix" />
                                            <span className="elementor-counter-number" data-duration={10000} data-to-value={1352} data-from-value={0} data-delimiter=",">0</span>
                                            <span className="elementor-counter-number-suffix">+</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="elementor-element elementor-element-11615b6 e-con-full e-flex e-con e-child" data-id="11615b6" data-element_type="container">
                            <div className="elementor-element elementor-element-3380d7b elementor-view-default elementor-widget elementor-widget-icon" data-id="3380d7b" data-element_type="widget" data-widget_type="icon.default">
                                <div className="elementor-widget-container">
                                    <div className="elementor-icon-wrapper">
                                        <div className="elementor-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#0EC9AC" id="Layer_1" width="800px" height="800px" viewBox="924 578 200 200" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M984.585,638.942c0,13.999-9.609,25.348-21.462,25.348c-11.852,0-21.459-11.349-21.459-25.348 c0-13.998,9.607-25.346,21.459-25.346C974.976,613.596,984.585,624.944,984.585,638.942z" /> <path d="M987.585,683.641c1.55-0.945,3.265-1.561,5.041-1.855c-3.606-5.088-6.161-10.546-7.637-17.078 c-0.404-2.387-3.672-2.667-6.102-0.687c-4.546,3.706-9.849,6.186-15.765,6.186c-6.03,0-11.577-2.399-16.024-6.414 c-1.419-1.282-3.51-1.476-5.143-0.479c-8.443,5.158-14.834,13.344-17.622,23.067c-0.749,2.605-0.223,5.42,1.411,7.588 c1.636,2.166,4.192,3.443,6.906,3.443h38.668C975.947,692.072,981.41,687.41,987.585,683.641z" /> </g> <g> <path d="M1063.416,638.942c0,13.999,9.608,25.348,21.461,25.348c11.854,0,21.46-11.349,21.46-25.348 c0-13.998-9.606-25.346-21.46-25.346C1073.024,613.596,1063.416,624.944,1063.416,638.942z" /> <path d="M1060.415,683.641c-1.55-0.945-3.266-1.561-5.041-1.855c3.606-5.088,6.161-10.546,7.637-17.078 c0.405-2.387,3.673-2.667,6.103-0.687c4.546,3.706,9.848,6.186,15.764,6.186c6.029,0,11.577-2.399,16.025-6.414 c1.419-1.282,3.509-1.476,5.142-0.479c8.444,5.158,14.836,13.344,17.622,23.067c0.748,2.605,0.223,5.42-1.41,7.588 c-1.637,2.166-4.192,3.443-6.905,3.443h-38.67C1072.053,692.072,1066.591,687.41,1060.415,683.641z" /> </g> <g> <path d="M1082.475,725.451c-4.198-14.654-13.72-27.045-26.326-34.992c-2.487-1.566-5.715-1.313-7.921,0.631 c-6.766,5.959-15.138,9.506-24.228,9.506c-9.269,0-17.791-3.686-24.626-9.855c-2.182-1.971-5.393-2.268-7.902-0.734 c-12.977,7.924-22.799,20.504-27.082,35.445c-1.151,4.008-0.344,8.328,2.166,11.662c2.516,3.33,6.443,5.291,10.615,5.291h92.523 c4.173,0,8.103-1.955,10.618-5.291C1082.823,733.779,1083.626,729.463,1082.475,725.451z" /> <path d="M1056.981,652.547c0,21.513-14.766,38.955-32.981,38.955c-18.214,0-32.979-17.442-32.979-38.955 c0-21.515,14.765-38.951,32.979-38.951C1042.216,613.596,1056.981,631.033,1056.981,652.547z" /> </g> </g> </g></svg>			</div>
                                    </div>
                                </div>
                            </div>
                            <div className="elementor-element elementor-element-04775e4 elementor-widget elementor-widget-counter" data-id="04775e4" data-element_type="widget" data-widget_type="counter.default">
                                <div className="elementor-widget-container">
                                    <div className="elementor-counter">
                                        <div className="elementor-counter-title">Clients Protection</div>			<div className="elementor-counter-number-wrapper">
                                            <span className="elementor-counter-number-prefix" />
                                            <span className="elementor-counter-number" data-duration={5000} data-to-value={1458} data-from-value={0} data-delimiter=",">0</span>
                                            <span className="elementor-counter-number-suffix">+</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="elementor-element elementor-element-5e5cfa0 e-con-full e-flex e-con e-child" data-id="5e5cfa0" data-element_type="container">
                            <div className="elementor-element elementor-element-5901f8b elementor-view-default elementor-widget elementor-widget-icon" data-id="5901f8b" data-element_type="widget" data-widget_type="icon.default">
                                <div className="elementor-widget-container">
                                    <div className="elementor-icon-wrapper">
                                        <div className="elementor-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" clipRule="evenodd" d="M5.25 10.0546V8C5.25 4.27208 8.27208 1.25 12 1.25C15.7279 1.25 18.75 4.27208 18.75 8V10.0546C19.8648 10.1379 20.5907 10.348 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16C2 13.1716 2 11.7574 2.87868 10.8787C3.40931 10.348 4.13525 10.1379 5.25 10.0546ZM6.75 8C6.75 5.10051 9.10051 2.75 12 2.75C14.8995 2.75 17.25 5.10051 17.25 8V10.0036C16.867 10 16.4515 10 16 10H8C7.54849 10 7.13301 10 6.75 10.0036V8Z" fill="#0EC9AC" /></g></svg>			</div>
                                    </div>
                                </div>
                            </div>
                            <div className="elementor-element elementor-element-bd38357 elementor-widget elementor-widget-counter" data-id="bd38357" data-element_type="widget" data-widget_type="counter.default">
                                <div className="elementor-widget-container">
                                    <div className="elementor-counter">
                                        <div className="elementor-counter-title">Service Guarantee</div>			<div className="elementor-counter-number-wrapper">
                                            <span className="elementor-counter-number-prefix" />
                                            <span className="elementor-counter-number" data-duration={5000} data-to-value={100} data-from-value={0} data-delimiter=",">0</span>
                                            <span className="elementor-counter-number-suffix">%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="elementor-element elementor-element-04499ab e-con-full e-flex e-con e-child" data-id="04499ab" data-element_type="container">
                            <div className="elementor-element elementor-element-b046c0a elementor-view-default elementor-widget elementor-widget-icon" data-id="b046c0a" data-element_type="widget" data-widget_type="icon.default">
                                <div className="elementor-widget-container">
                                    <div className="elementor-icon-wrapper">
                                        <div className="elementor-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height="800px" width="800px" id="_x32_" viewBox="0 0 512 512" xmlSpace="preserve" fill="#0EC9AC"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <style type="text/css" dangerouslySetInnerHTML={{ __html: " .st0{fill:#0EC9AC;} " }} /> <g> <path className="st0" d="M256.495,96.434c26.632,0,48.213-21.597,48.213-48.205C304.708,21.58,283.128,0,256.495,0 c-26.65,0-48.222,21.58-48.222,48.229C208.274,74.837,229.846,96.434,256.495,96.434z" /> <path className="st0" d="M298.267,119.279h-42.271h-42.271c-23.362,0-48.779,25.418-48.779,48.788v162.058 c0,11.685,9.463,21.156,21.148,21.156c5.743,0,0,0,14.756,0l8.048,138.206c0,12.434,10.078,22.513,22.513,22.513 c5.244,0,14.923,0,24.585,0c9.671,0,19.35,0,24.593,0c12.434,0,22.513-10.078,22.513-22.513l8.04-138.206 c14.764,0,9.013,0,14.764,0c11.676,0,21.148-9.471,21.148-21.156V168.067C347.054,144.697,321.636,119.279,298.267,119.279z" /> <path className="st0" d="M104.141,149.083c23.262,0,42.105-18.85,42.105-42.104c0-23.262-18.843-42.112-42.105-42.112 c-23.27,0-42.104,18.851-42.104,42.112C62.037,130.232,80.871,149.083,104.141,149.083z" /> <path className="st0" d="M408.716,149.083c23.27,0,42.104-18.85,42.104-42.104c0-23.262-18.834-42.112-42.104-42.112 c-23.253,0-42.104,18.851-42.104,42.112C366.612,130.232,385.463,149.083,408.716,149.083z" /> <path className="st0" d="M137.257,169.024h-33.548h-36.92c-20.398,0-42.595,22.213-42.595,42.612v141.526 c0,10.212,8.264,18.476,18.468,18.476c5.018,0,0,0,12.884,0l7.024,120.704c0,10.852,8.805,19.658,19.666,19.658 c4.577,0,13.024,0,21.473,0c8.439,0,16.895,0,21.472,0c10.861,0,19.666-8.805,19.666-19.658l7.016-120.704v-6.849 c-8.98-8.856-14.606-21.082-14.606-34.664V169.024z" /> <path className="st0" d="M445.211,169.024h-36.928h-33.54v161.101c0,13.582-5.626,25.808-14.615,34.664v6.849l7.017,120.704 c0,10.852,8.814,19.658,19.674,19.658c4.578,0,13.025,0,21.464,0c8.456,0,16.904,0,21.481,0c10.862,0,19.659-8.805,19.659-19.658 l7.032-120.704c12.883,0,7.865,0,12.883,0c10.204,0,18.468-8.265,18.468-18.476V211.636 C487.806,191.237,465.61,169.024,445.211,169.024z" /> </g> </g></svg>			</div>
                                    </div>
                                </div>
                            </div>
                            <div className="elementor-element elementor-element-23897d2 elementor-widget elementor-widget-counter" data-id="23897d2" data-element_type="widget" data-widget_type="counter.default">
                                <div className="elementor-widget-container">
                                    <div className="elementor-counter">
                                        <div className="elementor-counter-title">Team Experts</div>			<div className="elementor-counter-number-wrapper">
                                            <span className="elementor-counter-number-prefix" />
                                            <span className="elementor-counter-number" data-duration={5000} data-to-value={90} data-from-value={0} data-delimiter=",">0</span>
                                            <span className="elementor-counter-number-suffix">+</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="elementor-element elementor-element-b7197d1 e-con-full e-flex e-con e-child" data-id="b7197d1" data-element_type="container">
                        <div className="elementor-element elementor-element-cdf7dfb elementor-widget elementor-widget-heading" data-id="cdf7dfb" data-element_type="widget" data-widget_type="heading.default">
                            <div className="elementor-widget-container">
                                <h2 className="elementor-heading-title elementor-size-default">Your business, our solutions</h2>				</div>
                        </div>
                        <div className="elementor-element elementor-element-b91524a elementor-widget elementor-widget-heading" data-id="b91524a" data-element_type="widget" data-widget_type="heading.default">
                            <div className="elementor-widget-container">
                                <h2 className="elementor-heading-title elementor-size-default">secure, innovative, and future-ready.</h2>				</div>
                        </div>
                        <div className="elementor-element elementor-element-7499030 e-con-full e-flex e-con e-child" data-id={7499030} data-element_type="container">
                            <div className="elementor-element elementor-element-cbb8a18 e-con-full e-flex e-con e-child" data-id="cbb8a18" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                <div className="elementor-element elementor-element-4c12d06 e-con-full e-flex e-con e-child" data-id="4c12d06" data-element_type="container">
                                    <div className="elementor-element elementor-element-bd6e747 e-con-full e-flex e-con e-child" data-id="bd6e747" data-element_type="container">
                                        <div className="elementor-element elementor-element-f616360 elementor-widget elementor-widget-image" data-id="f616360" data-element_type="widget" data-widget_type="image.default">
                                            <div className="elementor-widget-container">
                                                <img loading="lazy" decoding="async" width={300} height={300} src="https://cybertron-tech.com/wp-content/uploads/2025/02/net.png" className="attachment-large size-large wp-image-329" alt srcSet="https://cybertron-tech.com/wp-content/uploads/2025/02/net.png 300w, https://cybertron-tech.com/wp-content/uploads/2025/02/net-150x150.png 150w" sizes="(max-width: 300px) 100vw, 300px" />															</div>
                                        </div>
                                    </div>
                                    <div className="elementor-element elementor-element-e5c4b35 e-con-full e-flex e-con e-child" data-id="e5c4b35" data-element_type="container">
                                        <div className="elementor-element elementor-element-04b6042 elementor-widget elementor-widget-heading" data-id="04b6042" data-element_type="widget" data-widget_type="heading.default">
                                            <div className="elementor-widget-container">
                                                <h2 className="elementor-heading-title elementor-size-default">Network Security</h2>				</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="elementor-element elementor-element-3cdae9b e-con-full e-flex e-con e-child" data-id="3cdae9b" data-element_type="container">
                                    <div className="elementor-element elementor-element-81a8217 elementor-widget elementor-widget-text-editor" data-id="81a8217" data-element_type="widget" data-widget_type="text-editor.default">
                                        <div className="elementor-widget-container">
                                            <p><span style={{ "font-weight": "400" }}>Cybertron safeguards your network with advanced security, real-time monitoring, and strong encryption to prevent cyber threats</span></p>								</div>
                                    </div>
                                </div>
                                <div className="elementor-element elementor-element-be2b794 elementor-widget elementor-widget-button" data-id="be2b794" data-element_type="widget" data-widget_type="button.default">
                                    <div className="elementor-widget-container">
                                        <div className="elementor-button-wrapper">
                                            <a className="elementor-button elementor-button-link elementor-size-sm" href="#">
                                                <span className="elementor-button-content-wrapper">
                                                    <span className="elementor-button-icon">
                                                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-long-arrow-alt-right" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" /></svg>			</span>
                                                    <span className="elementor-button-text">read more</span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="elementor-element elementor-element-6381179 e-con-full e-flex e-con e-child" data-id={6381179} data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                <div className="elementor-element elementor-element-fb7b2d5 e-con-full e-flex e-con e-child" data-id="fb7b2d5" data-element_type="container">
                                    <div className="elementor-element elementor-element-3134095 e-con-full e-flex e-con e-child" data-id={3134095} data-element_type="container">
                                        <div className="elementor-element elementor-element-5ca1072 elementor-widget elementor-widget-image" data-id="5ca1072" data-element_type="widget" data-widget_type="image.default">
                                            <div className="elementor-widget-container">
                                                <img loading="lazy" decoding="async" width={300} height={300} src="https://cybertron-tech.com/wp-content/uploads/2025/02/database.png" className="attachment-large size-large wp-image-330" alt srcSet="https://cybertron-tech.com/wp-content/uploads/2025/02/database.png 300w, https://cybertron-tech.com/wp-content/uploads/2025/02/database-150x150.png 150w" sizes="(max-width: 300px) 100vw, 300px" />															</div>
                                        </div>
                                    </div>
                                    <div className="elementor-element elementor-element-da55896 e-con-full e-flex e-con e-child" data-id="da55896" data-element_type="container">
                                        <div className="elementor-element elementor-element-a38a484 elementor-widget elementor-widget-heading" data-id="a38a484" data-element_type="widget" data-widget_type="heading.default">
                                            <div className="elementor-widget-container">
                                                <h2 className="elementor-heading-title elementor-size-default">Smart Cloud Solutions</h2>				</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="elementor-element elementor-element-045278f e-con-full e-flex e-con e-child" data-id="045278f" data-element_type="container">
                                    <div className="elementor-element elementor-element-30fa7b2 elementor-widget elementor-widget-text-editor" data-id="30fa7b2" data-element_type="widget" data-widget_type="text-editor.default">
                                        <div className="elementor-widget-container">
                                            <p>Empower your business with secure, scalable, and efficient cloud services for seamless data storage and management.</p>								</div>
                                    </div>
                                </div>
                                <div className="elementor-element elementor-element-58a8a8d elementor-widget elementor-widget-button" data-id="58a8a8d" data-element_type="widget" data-widget_type="button.default">
                                    <div className="elementor-widget-container">
                                        <div className="elementor-button-wrapper">
                                            <a className="elementor-button elementor-button-link elementor-size-sm" href="#">
                                                <span className="elementor-button-content-wrapper">
                                                    <span className="elementor-button-icon">
                                                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-long-arrow-alt-right" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" /></svg>			</span>
                                                    <span className="elementor-button-text">read more</span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="elementor-element elementor-element-cb5f01a e-con-full e-flex e-con e-child" data-id="cb5f01a" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                <div className="elementor-element elementor-element-9f05d08 e-con-full e-flex e-con e-child" data-id="9f05d08" data-element_type="container">
                                    <div className="elementor-element elementor-element-ebdebf7 e-con-full e-flex e-con e-child" data-id="ebdebf7" data-element_type="container">
                                        <div className="elementor-element elementor-element-40b27a6 elementor-widget elementor-widget-image" data-id="40b27a6" data-element_type="widget" data-widget_type="image.default">
                                            <div className="elementor-widget-container">
                                                <img loading="lazy" decoding="async" width={150} height={150} src="https://cybertron-tech.com/wp-content/uploads/2025/02/asser2x-150x150-1.png" className="attachment-large size-large wp-image-326" alt />															</div>
                                        </div>
                                    </div>
                                    <div className="elementor-element elementor-element-acc6d80 e-con-full e-flex e-con e-child" data-id="acc6d80" data-element_type="container">
                                        <div className="elementor-element elementor-element-31cbb5b elementor-widget elementor-widget-heading" data-id="31cbb5b" data-element_type="widget" data-widget_type="heading.default">
                                            <div className="elementor-widget-container">
                                                <h2 className="elementor-heading-title elementor-size-default">Web Security</h2>				</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="elementor-element elementor-element-395ef34 e-con-full e-flex e-con e-child" data-id="395ef34" data-element_type="container">
                                    <div className="elementor-element elementor-element-5f9ec0a elementor-widget elementor-widget-text-editor" data-id="5f9ec0a" data-element_type="widget" data-widget_type="text-editor.default">
                                        <div className="elementor-widget-container">
                                            <p><span style={{ "font-weight": "400" }}>Cybertron protects your website from cyber threats with firewalls, encryption, and real-time threat monitoring, ensuring safe and secure.</span></p>								</div>
                                    </div>
                                </div>
                                <div className="elementor-element elementor-element-39ca6eb elementor-widget elementor-widget-button" data-id="39ca6eb" data-element_type="widget" data-widget_type="button.default">
                                    <div className="elementor-widget-container">
                                        <div className="elementor-button-wrapper">
                                            <a className="elementor-button elementor-button-link elementor-size-sm" href="#">
                                                <span className="elementor-button-content-wrapper">
                                                    <span className="elementor-button-icon">
                                                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-long-arrow-alt-right" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" /></svg>			</span>
                                                    <span className="elementor-button-text">read more</span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="elementor-element elementor-element-865aabe e-con-full e-flex e-con e-child" data-id="865aabe" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                <div className="elementor-element elementor-element-d31e028 e-con-full e-flex e-con e-child" data-id="d31e028" data-element_type="container">
                                    <div className="elementor-element elementor-element-6bdecc7 e-con-full e-flex e-con e-child" data-id="6bdecc7" data-element_type="container">
                                        <div className="elementor-element elementor-element-f7d6549 elementor-widget elementor-widget-image" data-id="f7d6549" data-element_type="widget" data-widget_type="image.default">
                                            <div className="elementor-widget-container">
                                                <img loading="lazy" decoding="async" width={800} height={800} src="https://cybertron-tech.com/wp-content/uploads/2025/02/internet-target-svgrepo-com-1.svg" className="attachment-large size-large wp-image-1027" alt />															</div>
                                        </div>
                                    </div>
                                    <div className="elementor-element elementor-element-2034a37 e-con-full e-flex e-con e-child" data-id="2034a37" data-element_type="container">
                                        <div className="elementor-element elementor-element-d096fc0 elementor-widget elementor-widget-heading" data-id="d096fc0" data-element_type="widget" data-widget_type="heading.default">
                                            <div className="elementor-widget-container">
                                                <h2 className="elementor-heading-title elementor-size-default">Digital Presence</h2>				</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="elementor-element elementor-element-14dce9c e-con-full e-flex e-con e-child" data-id="14dce9c" data-element_type="container">
                                    <div className="elementor-element elementor-element-0da97d9 elementor-widget elementor-widget-text-editor" data-id="0da97d9" data-element_type="widget" data-widget_type="text-editor.default">
                                        <div className="elementor-widget-container">
                                            <p><span style={{ "font-weight": "400" }}>Cybertron boosts your brand with expert digital marketing, SEO, and security to enhance visibility and protection.</span></p>								</div>
                                    </div>
                                </div>
                                <div className="elementor-element elementor-element-b5f1cb5 elementor-widget elementor-widget-button" data-id="b5f1cb5" data-element_type="widget" data-widget_type="button.default">
                                    <div className="elementor-widget-container">
                                        <div className="elementor-button-wrapper">
                                            <a className="elementor-button elementor-button-link elementor-size-sm" href="#">
                                                <span className="elementor-button-content-wrapper">
                                                    <span className="elementor-button-icon">
                                                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-long-arrow-alt-right" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" /></svg>			</span>
                                                    <span className="elementor-button-text">read more</span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="elementor-element elementor-element-e1e1c82 e-con-full e-flex e-con e-child" data-id="e1e1c82" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                <div className="elementor-element elementor-element-e0b8d95 e-con-full e-flex e-con e-child" data-id="e0b8d95" data-element_type="container">
                                    <div className="elementor-element elementor-element-5c1d06b e-con-full e-flex e-con e-child" data-id="5c1d06b" data-element_type="container">
                                        <div className="elementor-element elementor-element-1945e54 elementor-widget elementor-widget-image" data-id="1945e54" data-element_type="widget" data-widget_type="image.default">
                                            <div className="elementor-widget-container">
                                                <img loading="lazy" decoding="async" width={800} height={800} src="https://cybertron-tech.com/wp-content/uploads/2025/02/web-svgrepo-com.svg" className="attachment-large size-large wp-image-1028" alt />															</div>
                                        </div>
                                    </div>
                                    <div className="elementor-element elementor-element-0d80d89 e-con-full e-flex e-con e-child" data-id="0d80d89" data-element_type="container">
                                        <div className="elementor-element elementor-element-a7117f6 elementor-widget elementor-widget-heading" data-id="a7117f6" data-element_type="widget" data-widget_type="heading.default">
                                            <div className="elementor-widget-container">
                                                <h2 className="elementor-heading-title elementor-size-default">Web Solutions
                                                </h2>				</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="elementor-element elementor-element-78ba29a e-con-full e-flex e-con e-child" data-id="78ba29a" data-element_type="container">
                                    <div className="elementor-element elementor-element-3fc52dc elementor-widget elementor-widget-text-editor" data-id="3fc52dc" data-element_type="widget" data-widget_type="text-editor.default">
                                        <div className="elementor-widget-container">
                                            <p><span style={{ "font-weight": "400" }}>Cybertron creates secure, high-performance websites with built-in protection for a safe digital experience.</span></p>								</div>
                                    </div>
                                </div>
                                <div className="elementor-element elementor-element-11d038a elementor-widget elementor-widget-button" data-id="11d038a" data-element_type="widget" data-widget_type="button.default">
                                    <div className="elementor-widget-container">
                                        <div className="elementor-button-wrapper">
                                            <a className="elementor-button elementor-button-link elementor-size-sm" href="#">
                                                <span className="elementor-button-content-wrapper">
                                                    <span className="elementor-button-icon">
                                                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-long-arrow-alt-right" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" /></svg>			</span>
                                                    <span className="elementor-button-text">read more</span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="elementor-element elementor-element-f1fdb7c e-con-full e-flex e-con e-child" data-id="f1fdb7c" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                <div className="elementor-element elementor-element-0c9562f e-con-full e-flex e-con e-child" data-id="0c9562f" data-element_type="container">
                                    <div className="elementor-element elementor-element-a49edab e-con-full e-flex e-con e-child" data-id="a49edab" data-element_type="container">
                                        <div className="elementor-element elementor-element-aee5440 elementor-widget elementor-widget-image" data-id="aee5440" data-element_type="widget" data-widget_type="image.default">
                                            <div className="elementor-widget-container">
                                                <img loading="lazy" decoding="async" width={800} height={800} src="https://cybertron-tech.com/wp-content/uploads/2025/02/shop-svgrepo-com.svg" className="attachment-large size-large wp-image-1053" alt />															</div>
                                        </div>
                                    </div>
                                    <div className="elementor-element elementor-element-3d90c06 e-con-full e-flex e-con e-child" data-id="3d90c06" data-element_type="container">
                                        <div className="elementor-element elementor-element-5d93939 elementor-widget elementor-widget-heading" data-id="5d93939" data-element_type="widget" data-widget_type="heading.default">
                                            <div className="elementor-widget-container">
                                                <h2 className="elementor-heading-title elementor-size-default">E-Commerce Solutions</h2>				</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="elementor-element elementor-element-f4b0ad2 e-con-full e-flex e-con e-child" data-id="f4b0ad2" data-element_type="container">
                                    <div className="elementor-element elementor-element-321a693 elementor-widget elementor-widget-text-editor" data-id="321a693" data-element_type="widget" data-widget_type="text-editor.default">
                                        <div className="elementor-widget-container">
                                            <p><span style={{ "font-weight": "400" }}>Cybertron delivers </span><b>fast, secure, and growth-focused e-commerce solutions</b><span style={{ "font-weight": "400" }}> for seamless online selling.</span></p>								</div>
                                    </div>
                                </div>
                                <div className="elementor-element elementor-element-df4df63 elementor-widget elementor-widget-button" data-id="df4df63" data-element_type="widget" data-widget_type="button.default">
                                    <div className="elementor-widget-container">
                                        <div className="elementor-button-wrapper">
                                            <a className="elementor-button elementor-button-link elementor-size-sm" href="#">
                                                <span className="elementor-button-content-wrapper">
                                                    <span className="elementor-button-icon">
                                                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-long-arrow-alt-right" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" /></svg>			</span>
                                                    <span className="elementor-button-text">read more</span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="elementor-element elementor-element-df218e3 e-con-full e-flex e-con e-child" data-id="df218e3" data-element_type="container">
                            <div className="elementor-element elementor-element-daa8dab elementor-widget elementor-widget-button" data-id="daa8dab" data-element_type="widget" data-widget_type="button.default">
                                <div className="elementor-widget-container">
                                    <div className="elementor-button-wrapper">
                                        <a className="elementor-button elementor-button-link elementor-size-sm" href="#">
                                            <span className="elementor-button-content-wrapper">
                                                <span className="elementor-button-icon">
                                                    <svg aria-hidden="true" className="e-font-icon-svg e-fas-long-arrow-alt-right" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" /></svg>			</span>
                                                <span className="elementor-button-text">View More Services</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="elementor-element elementor-element-23ec23c e-flex e-con-boxed e-con e-parent" data-id="23ec23c" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                <div className="e-con-inner">
                    <div className="elementor-element elementor-element-727765b e-con-full e-flex e-con e-child" data-id="727765b" data-element_type="container">
                        <div className="elementor-element elementor-element-6c2e658 elementor-widget elementor-widget-heading" data-id="6c2e658" data-element_type="widget" data-widget_type="heading.default">
                            <div className="elementor-widget-container">
                                <h2 className="elementor-heading-title elementor-size-default">Still Confused About Our Features? Get a Free Trial</h2>				</div>
                        </div>
                        <div className="elementor-element elementor-element-865f31b elementor-widget elementor-widget-text-editor" data-id="865f31b" data-element_type="widget" data-widget_type="text-editor.default">
                            <div className="elementor-widget-container">
                                <p>At Cybertron, we provide advanced security for advanced threats,<br />ensuring cutting-edge protection, real-time threat detection, and reliable digital <br />solutions to keep you safe and ahead in the digital world.</p>								</div>
                        </div>
                    </div>
                    <div className="elementor-element elementor-element-746e670 elementor-widget elementor-widget-button" data-id="746e670" data-element_type="widget" data-widget_type="button.default">
                        <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                                <a className="elementor-button elementor-button-link elementor-size-sm" href="https://cybertron-tech.com/contact/">
                                    <span className="elementor-button-content-wrapper">
                                        <span className="elementor-button-text">Get a Free Trial</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="elementor-element elementor-element-87a64bc e-flex e-con-boxed e-con e-parent" data-id="87a64bc" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                <div className="e-con-inner">
                    <div className="elementor-element elementor-element-c5b60c2 elementor-widget elementor-widget-heading" data-id="c5b60c2" data-element_type="widget" data-widget_type="heading.default">
                        <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">
                                <a href="http://o">
                                    Preferred by IT and Marketing Pros
                                </a>
                            </h2>
                        </div>
                    </div>
                    <div className="elementor-element elementor-element-1357363 elementor-widget-mobile__width-inherit elementor-arrows-position-inside elementor-widget elementor-widget-n-carousel e-widget-swiper" data-id={1357363} data-element_type="widget" data-settings="{&quot;carousel_items&quot;:[{&quot;slide_title&quot;:&quot;Slide #1&quot;,&quot;_id&quot;:&quot;5799731&quot;},{&quot;slide_title&quot;:&quot;Slide #1&quot;,&quot;_id&quot;:&quot;c46e617&quot;},{&quot;slide_title&quot;:&quot;Slide #1&quot;,&quot;_id&quot;:&quot;887c09e&quot;},{&quot;slide_title&quot;:&quot;Slide #1&quot;,&quot;_id&quot;:&quot;68a8029&quot;}],&quot;slides_to_show&quot;:&quot;3&quot;,&quot;_animation&quot;:&quot;none&quot;,&quot;slides_to_show_tablet&quot;:&quot;2&quot;,&quot;slides_to_show_mobile&quot;:&quot;1&quot;,&quot;autoplay&quot;:&quot;yes&quot;,&quot;autoplay_speed&quot;:5000,&quot;pause_on_hover&quot;:&quot;yes&quot;,&quot;pause_on_interaction&quot;:&quot;yes&quot;,&quot;infinite&quot;:&quot;yes&quot;,&quot;speed&quot;:500,&quot;offset_sides&quot;:&quot;none&quot;,&quot;arrows&quot;:&quot;yes&quot;,&quot;image_spacing_custom&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:10,&quot;sizes&quot;:[]},&quot;image_spacing_custom_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;image_spacing_custom_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]}}" data-widget_type="nested-carousel.default">

                        <div className="elementor-widget-container">
                            <Slider {...secondSetting}>
                                <div
                                    className="swiper-slide swiper-slide-active"
                                    data-slide={3}
                                    role="group"
                                    aria-roledescription="slide"
                                    aria-label="3 / 4"
                                    style={{ width: 360, marginRight: 10 }}
                                    data-swiper-slide-index={2}
                                >
                                    <div
                                        className="elementor-element elementor-element-3d60158 animated-slow e-flex e-con-boxed e-con e-child"
                                        data-id="3d60158"
                                        data-element_type="container"
                                        data-settings='{"animation":"none"}'
                                    >
                                        <div className="e-con-inner">
                                            <div
                                                className="elementor-element elementor-element-3ec6968 e-con-full e-flex e-con e-child"
                                                data-id="3ec6968"
                                                data-element_type="container"
                                            >
                                                <div
                                                    className="elementor-element elementor-element-94f63d2 e-con-full e-flex e-con e-child"
                                                    data-id="94f63d2"
                                                    data-element_type="container"
                                                >
                                                    <div
                                                        className="elementor-element elementor-element-5ff5abe elementor-position-left elementor-position-top elementor-vertical-align-bottom elementor-widget elementor-widget-image-box"
                                                        data-id="5ff5abe"
                                                        data-element_type="widget"
                                                        data-widget_type="image-box.default"
                                                    >
                                                        <div className="elementor-widget-container">
                                                            <div className="elementor-image-box-wrapper">
                                                                <figure className="elementor-image-box-img">
                                                                    <img
                                                                        loading="lazy"
                                                                        decoding="async"
                                                                        width={150}
                                                                        height={150}
                                                                        src="https://cybertron-tech.com/wp-content/uploads/2025/02/testimonialllll-150x150.jpg"
                                                                        className="attachment-thumbnail size-thumbnail wp-image-343"
                                                                        alt=""
                                                                        srcSet="https://cybertron-tech.com/wp-content/uploads/2025/02/testimonialllll-150x150.jpg 150w, https://cybertron-tech.com/wp-content/uploads/2025/02/testimonialllll.jpg 160w"
                                                                        sizes="(max-width: 150px) 100vw, 150px"
                                                                    />
                                                                </figure>
                                                                <div className="elementor-image-box-content">
                                                                    <h3 className="elementor-image-box-title">Gaurav</h3>
                                                                    <p className="elementor-image-box-description">
                                                                        E-commerce Manager
                                                                    </p>
                                                                </div>
                                                            </div>{" "}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="elementor-element elementor-element-fc87786 elementor-widget elementor-widget-rating"
                                                    data-id="fc87786"
                                                    data-element_type="widget"
                                                    data-widget_type="rating.default"
                                                >
                                                    <div className="elementor-widget-container">
                                                        <div
                                                            className="e-rating"
                                                            itemType="https://schema.org/Rating"
                                                            itemScope=""
                                                            itemProp="reviewRating"
                                                        >
                                                            <meta itemProp="worstRating" content={0} />
                                                            <meta itemProp="bestRating" content={5} />
                                                            <div
                                                                className="e-rating-wrapper"
                                                                itemProp="ratingValue"
                                                                content={5}
                                                                role="img"
                                                                aria-label="Rated 5 out of 5"
                                                            >
                                                                <div className="e-icon">
                                                                    <div className="e-icon-wrapper e-icon-marked">
                                                                        <svg
                                                                            aria-hidden="true"
                                                                            className="e-font-icon-svg e-eicon-star"
                                                                            viewBox="0 0 1000 1000"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" />
                                                                        </svg>{" "}
                                                                    </div>
                                                                    <div className="e-icon-wrapper e-icon-unmarked">
                                                                        <svg
                                                                            aria-hidden="true"
                                                                            className="e-font-icon-svg e-eicon-star"
                                                                            viewBox="0 0 1000 1000"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" />
                                                                        </svg>{" "}
                                                                    </div>
                                                                </div>
                                                                <div className="e-icon">
                                                                    <div className="e-icon-wrapper e-icon-marked">
                                                                        <svg
                                                                            aria-hidden="true"
                                                                            className="e-font-icon-svg e-eicon-star"
                                                                            viewBox="0 0 1000 1000"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" />
                                                                        </svg>{" "}
                                                                    </div>
                                                                    <div className="e-icon-wrapper e-icon-unmarked">
                                                                        <svg
                                                                            aria-hidden="true"
                                                                            className="e-font-icon-svg e-eicon-star"
                                                                            viewBox="0 0 1000 1000"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" />
                                                                        </svg>{" "}
                                                                    </div>
                                                                </div>
                                                                <div className="e-icon">
                                                                    <div className="e-icon-wrapper e-icon-marked">
                                                                        <svg
                                                                            aria-hidden="true"
                                                                            className="e-font-icon-svg e-eicon-star"
                                                                            viewBox="0 0 1000 1000"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" />
                                                                        </svg>{" "}
                                                                    </div>
                                                                    <div className="e-icon-wrapper e-icon-unmarked">
                                                                        <svg
                                                                            aria-hidden="true"
                                                                            className="e-font-icon-svg e-eicon-star"
                                                                            viewBox="0 0 1000 1000"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" />
                                                                        </svg>{" "}
                                                                    </div>
                                                                </div>
                                                                <div className="e-icon">
                                                                    <div className="e-icon-wrapper e-icon-marked">
                                                                        <svg
                                                                            aria-hidden="true"
                                                                            className="e-font-icon-svg e-eicon-star"
                                                                            viewBox="0 0 1000 1000"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" />
                                                                        </svg>{" "}
                                                                    </div>
                                                                    <div className="e-icon-wrapper e-icon-unmarked">
                                                                        <svg
                                                                            aria-hidden="true"
                                                                            className="e-font-icon-svg e-eicon-star"
                                                                            viewBox="0 0 1000 1000"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" />
                                                                        </svg>{" "}
                                                                    </div>
                                                                </div>
                                                                <div className="e-icon">
                                                                    <div className="e-icon-wrapper e-icon-marked">
                                                                        <svg
                                                                            aria-hidden="true"
                                                                            className="e-font-icon-svg e-eicon-star"
                                                                            viewBox="0 0 1000 1000"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" />
                                                                        </svg>{" "}
                                                                    </div>
                                                                    <div className="e-icon-wrapper e-icon-unmarked">
                                                                        <svg
                                                                            aria-hidden="true"
                                                                            className="e-font-icon-svg e-eicon-star"
                                                                            viewBox="0 0 1000 1000"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" />
                                                                        </svg>{" "}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="elementor-element elementor-element-59dc73f elementor-widget elementor-widget-text-editor"
                                                    data-id="59dc73f"
                                                    data-element_type="widget"
                                                    data-widget_type="text-editor.default"
                                                >
                                                    <div className="elementor-widget-container">
                                                        <p>
                                                            The team at Cybertrom helped us build a seamless e-commerce
                                                            platform that not only drives sales but also offers a smooth
                                                            customer experience. Truly a game-changer!
                                                        </p>{" "}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div
                                    className="swiper-slide swiper-slide-next"
                                    data-slide={4}
                                    role="group"
                                    aria-roledescription="slide"
                                    aria-label="4 / 4"
                                    style={{ width: 360, marginRight: 10 }}
                                    data-swiper-slide-index={3}
                                >
                                    <div
                                        className="elementor-element elementor-element-5eea65f animated-slow e-flex e-con-boxed e-con e-child"
                                        data-id="5eea65f"
                                        data-element_type="container"
                                        data-settings='{"animation":"none"}'
                                    >
                                        <div className="e-con-inner">
                                            <div
                                                className="elementor-element elementor-element-de56b7b e-con-full e-flex e-con e-child"
                                                data-id="de56b7b"
                                                data-element_type="container"
                                            >
                                                <div
                                                    className="elementor-element elementor-element-170e512 e-con-full e-flex e-con e-child"
                                                    data-id="170e512"
                                                    data-element_type="container"
                                                >
                                                    <div
                                                        className="elementor-element elementor-element-dade242 elementor-position-left elementor-position-top elementor-vertical-align-bottom elementor-widget elementor-widget-image-box"
                                                        data-id="dade242"
                                                        data-element_type="widget"
                                                        data-widget_type="image-box.default"
                                                    >
                                                        <div className="elementor-widget-container">
                                                            <div className="elementor-image-box-wrapper">
                                                                <figure className="elementor-image-box-img">
                                                                    <img
                                                                        loading="lazy"
                                                                        decoding="async"
                                                                        width={150}
                                                                        height={150}
                                                                        src="https://cybertron-tech.com/wp-content/uploads/2025/02/team-SMNZUJQ-150x150.jpg"
                                                                        className="attachment-thumbnail size-thumbnail wp-image-333"
                                                                        alt=""
                                                                    />
                                                                </figure>
                                                                <div className="elementor-image-box-content">
                                                                    <h3 className="elementor-image-box-title">Mark T.</h3>
                                                                    <p className="elementor-image-box-description">Founder</p>
                                                                </div>
                                                            </div>{" "}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="elementor-element elementor-element-360607f elementor-widget elementor-widget-rating"
                                                    data-id="360607f"
                                                    data-element_type="widget"
                                                    data-widget_type="rating.default"
                                                >
                                                    <div className="elementor-widget-container">
                                                        <div
                                                            className="e-rating"
                                                            itemType="https://schema.org/Rating"
                                                            itemScope=""
                                                            itemProp="reviewRating"
                                                        >
                                                            <meta itemProp="worstRating" content={0} />
                                                            <meta itemProp="bestRating" content={5} />
                                                            <div
                                                                className="e-rating-wrapper"
                                                                itemProp="ratingValue"
                                                                content={5}
                                                                role="img"
                                                                aria-label="Rated 5 out of 5"
                                                            >
                                                                <div className="e-icon">
                                                                    <div className="e-icon-wrapper e-icon-marked">
                                                                        <svg
                                                                            aria-hidden="true"
                                                                            className="e-font-icon-svg e-eicon-star"
                                                                            viewBox="0 0 1000 1000"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" />
                                                                        </svg>{" "}
                                                                    </div>
                                                                    <div className="e-icon-wrapper e-icon-unmarked">
                                                                        <svg
                                                                            aria-hidden="true"
                                                                            className="e-font-icon-svg e-eicon-star"
                                                                            viewBox="0 0 1000 1000"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" />
                                                                        </svg>{" "}
                                                                    </div>
                                                                </div>
                                                                <div className="e-icon">
                                                                    <div className="e-icon-wrapper e-icon-marked">
                                                                        <svg
                                                                            aria-hidden="true"
                                                                            className="e-font-icon-svg e-eicon-star"
                                                                            viewBox="0 0 1000 1000"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" />
                                                                        </svg>{" "}
                                                                    </div>
                                                                    <div className="e-icon-wrapper e-icon-unmarked">
                                                                        <svg
                                                                            aria-hidden="true"
                                                                            className="e-font-icon-svg e-eicon-star"
                                                                            viewBox="0 0 1000 1000"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" />
                                                                        </svg>{" "}
                                                                    </div>
                                                                </div>
                                                                <div className="e-icon">
                                                                    <div className="e-icon-wrapper e-icon-marked">
                                                                        <svg
                                                                            aria-hidden="true"
                                                                            className="e-font-icon-svg e-eicon-star"
                                                                            viewBox="0 0 1000 1000"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" />
                                                                        </svg>{" "}
                                                                    </div>
                                                                    <div className="e-icon-wrapper e-icon-unmarked">
                                                                        <svg
                                                                            aria-hidden="true"
                                                                            className="e-font-icon-svg e-eicon-star"
                                                                            viewBox="0 0 1000 1000"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" />
                                                                        </svg>{" "}
                                                                    </div>
                                                                </div>
                                                                <div className="e-icon">
                                                                    <div className="e-icon-wrapper e-icon-marked">
                                                                        <svg
                                                                            aria-hidden="true"
                                                                            className="e-font-icon-svg e-eicon-star"
                                                                            viewBox="0 0 1000 1000"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" />
                                                                        </svg>{" "}
                                                                    </div>
                                                                    <div className="e-icon-wrapper e-icon-unmarked">
                                                                        <svg
                                                                            aria-hidden="true"
                                                                            className="e-font-icon-svg e-eicon-star"
                                                                            viewBox="0 0 1000 1000"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" />
                                                                        </svg>{" "}
                                                                    </div>
                                                                </div>
                                                                <div className="e-icon">
                                                                    <div className="e-icon-wrapper e-icon-marked">
                                                                        <svg
                                                                            aria-hidden="true"
                                                                            className="e-font-icon-svg e-eicon-star"
                                                                            viewBox="0 0 1000 1000"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" />
                                                                        </svg>{" "}
                                                                    </div>
                                                                    <div className="e-icon-wrapper e-icon-unmarked">
                                                                        <svg
                                                                            aria-hidden="true"
                                                                            className="e-font-icon-svg e-eicon-star"
                                                                            viewBox="0 0 1000 1000"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" />
                                                                        </svg>{" "}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="elementor-element elementor-element-7348cb3 elementor-widget elementor-widget-text-editor"
                                                    data-id="7348cb3"
                                                    data-element_type="widget"
                                                    data-widget_type="text-editor.default"
                                                >
                                                    <div className="elementor-widget-container">
                                                        <p>
                                                            From web development to SEO and social media marketing,
                                                            Cybertrom’s holistic approach has taken our business to new
                                                            heights, combining innovation with security for endless
                                                            possibilities.
                                                        </p>{" "}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="swiper-slide swiper-slide-duplicate"
                                    data-slide={1}
                                    role="group"
                                    aria-roledescription="slide"
                                    aria-label="1 / 4"
                                    style={{ width: 360, marginRight: 10 }}
                                    data-swiper-slide-index={0}
                                >
                                    <div
                                        className="elementor-element elementor-element-e5a9437 animated-slow e-flex e-con-boxed e-con e-child"
                                        data-id="e5a9437"
                                        data-element_type="container"
                                        data-settings='{"animation":"none"}'
                                    >
                                        <div className="e-con-inner">
                                            <div
                                                className="elementor-element elementor-element-58e1d35 e-con-full e-flex e-con e-child"
                                                data-id="58e1d35"
                                                data-element_type="container"
                                                data-settings='{"background_background":"classic"}'
                                            >
                                                <div
                                                    className="elementor-element elementor-element-2781ad3 e-con-full e-flex e-con e-child"
                                                    data-id="2781ad3"
                                                    data-element_type="container"
                                                >
                                                    <div
                                                        className="elementor-element elementor-element-3394fe9 elementor-position-left elementor-position-top elementor-vertical-align-bottom elementor-widget elementor-widget-image-box"
                                                        data-id="3394fe9"
                                                        data-element_type="widget"
                                                        data-widget_type="image-box.default"
                                                    >
                                                        <div className="elementor-widget-container">
                                                            <div className="elementor-image-box-wrapper">
                                                                <figure className="elementor-image-box-img">
                                                                    <img
                                                                        loading="lazy"
                                                                        decoding="async"
                                                                        width={150}
                                                                        height={150}
                                                                        src="https://cybertron-tech.com/wp-content/uploads/2025/02/team-52G3BWD-150x150.jpg"
                                                                        className="attachment-thumbnail size-thumbnail wp-image-334"
                                                                        alt=""
                                                                    />
                                                                </figure>
                                                                <div className="elementor-image-box-content">
                                                                    <h3 className="elementor-image-box-title">Vinod Agarwal</h3>
                                                                    <p className="elementor-image-box-description">IT Director</p>
                                                                </div>
                                                            </div>{" "}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="elementor-element elementor-element-1f13f01 elementor-widget elementor-widget-rating"
                                                    data-id="1f13f01"
                                                    data-element_type="widget"
                                                    data-widget_type="rating.default"
                                                >
                                                    <div className="elementor-widget-container">
                                                        <div
                                                            className="e-rating"
                                                            itemType="https://schema.org/Rating"
                                                            itemScope=""
                                                            itemProp="reviewRating"
                                                        >
                                                            <meta itemProp="worstRating" content={0} />
                                                            <meta itemProp="bestRating" content={5} />
                                                            <div
                                                                className="e-rating-wrapper"
                                                                itemProp="ratingValue"
                                                                content={5}
                                                                role="img"
                                                                aria-label="Rated 5 out of 5"
                                                            >
                                                                <div className="e-icon">
                                                                    <div className="e-icon-wrapper e-icon-marked">
                                                                        <svg
                                                                            aria-hidden="true"
                                                                            className="e-font-icon-svg e-eicon-star"
                                                                            viewBox="0 0 1000 1000"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" />
                                                                        </svg>{" "}
                                                                    </div>
                                                                    <div className="e-icon-wrapper e-icon-unmarked">
                                                                        <svg
                                                                            aria-hidden="true"
                                                                            className="e-font-icon-svg e-eicon-star"
                                                                            viewBox="0 0 1000 1000"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" />
                                                                        </svg>{" "}
                                                                    </div>
                                                                </div>
                                                                <div className="e-icon">
                                                                    <div className="e-icon-wrapper e-icon-marked">
                                                                        <svg
                                                                            aria-hidden="true"
                                                                            className="e-font-icon-svg e-eicon-star"
                                                                            viewBox="0 0 1000 1000"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" />
                                                                        </svg>{" "}
                                                                    </div>
                                                                    <div className="e-icon-wrapper e-icon-unmarked">
                                                                        <svg
                                                                            aria-hidden="true"
                                                                            className="e-font-icon-svg e-eicon-star"
                                                                            viewBox="0 0 1000 1000"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" />
                                                                        </svg>{" "}
                                                                    </div>
                                                                </div>
                                                                <div className="e-icon">
                                                                    <div className="e-icon-wrapper e-icon-marked">
                                                                        <svg
                                                                            aria-hidden="true"
                                                                            className="e-font-icon-svg e-eicon-star"
                                                                            viewBox="0 0 1000 1000"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" />
                                                                        </svg>{" "}
                                                                    </div>
                                                                    <div className="e-icon-wrapper e-icon-unmarked">
                                                                        <svg
                                                                            aria-hidden="true"
                                                                            className="e-font-icon-svg e-eicon-star"
                                                                            viewBox="0 0 1000 1000"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" />
                                                                        </svg>{" "}
                                                                    </div>
                                                                </div>
                                                                <div className="e-icon">
                                                                    <div className="e-icon-wrapper e-icon-marked">
                                                                        <svg
                                                                            aria-hidden="true"
                                                                            className="e-font-icon-svg e-eicon-star"
                                                                            viewBox="0 0 1000 1000"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" />
                                                                        </svg>{" "}
                                                                    </div>
                                                                    <div className="e-icon-wrapper e-icon-unmarked">
                                                                        <svg
                                                                            aria-hidden="true"
                                                                            className="e-font-icon-svg e-eicon-star"
                                                                            viewBox="0 0 1000 1000"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" />
                                                                        </svg>{" "}
                                                                    </div>
                                                                </div>
                                                                <div className="e-icon">
                                                                    <div className="e-icon-wrapper e-icon-marked">
                                                                        <svg
                                                                            aria-hidden="true"
                                                                            className="e-font-icon-svg e-eicon-star"
                                                                            viewBox="0 0 1000 1000"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" />
                                                                        </svg>{" "}
                                                                    </div>
                                                                    <div className="e-icon-wrapper e-icon-unmarked">
                                                                        <svg
                                                                            aria-hidden="true"
                                                                            className="e-font-icon-svg e-eicon-star"
                                                                            viewBox="0 0 1000 1000"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" />
                                                                        </svg>{" "}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="elementor-element elementor-element-477ac2d elementor-widget elementor-widget-text-editor"
                                                    data-id="477ac2d"
                                                    data-element_type="widget"
                                                    data-widget_type="text-editor.default"
                                                >
                                                    <div className="elementor-widget-container">
                                                        <p>
                                                            Cybertrom transformed our online presence with their innovative
                                                            web development and digital marketing expertise. Our business has
                                                            seen remarkable growth thanks to their tailored solutions.
                                                        </p>{" "}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
                                    data-slide={2}
                                    role="group"
                                    aria-roledescription="slide"
                                    aria-label="2 / 4"
                                    style={{ width: 360, marginRight: 10 }}
                                    data-swiper-slide-index={1}
                                >
                                    <div
                                        className="elementor-element elementor-element-43958c3 animated-slow e-flex e-con-boxed e-con e-child"
                                        data-id="43958c3"
                                        data-element_type="container"
                                        data-settings='{"animation":"none"}'
                                    >
                                        <div className="e-con-inner">
                                            <div
                                                className="elementor-element elementor-element-0b82941 e-con-full e-flex e-con e-child"
                                                data-id="0b82941"
                                                data-element_type="container"
                                            >
                                                <div
                                                    className="elementor-element elementor-element-3732acf e-con-full e-flex e-con e-child"
                                                    data-id="3732acf"
                                                    data-element_type="container"
                                                >
                                                    <div
                                                        className="elementor-element elementor-element-23d9963 elementor-position-left elementor-position-top elementor-vertical-align-bottom elementor-widget elementor-widget-image-box"
                                                        data-id="23d9963"
                                                        data-element_type="widget"
                                                        data-widget_type="image-box.default"
                                                    >
                                                        <div className="elementor-widget-container">
                                                            <div className="elementor-image-box-wrapper">
                                                                <figure className="elementor-image-box-img">
                                                                    <img
                                                                        loading="lazy"
                                                                        decoding="async"
                                                                        width={150}
                                                                        height={150}
                                                                        src="https://cybertron-tech.com/wp-content/uploads/2025/02/testimonial-150x150.jpg"
                                                                        className="attachment-thumbnail size-thumbnail wp-image-342"
                                                                        alt=""
                                                                        srcSet="https://cybertron-tech.com/wp-content/uploads/2025/02/testimonial-150x150.jpg 150w, https://cybertron-tech.com/wp-content/uploads/2025/02/testimonial.jpg 160w"
                                                                        sizes="(max-width: 150px) 100vw, 150px"
                                                                    />
                                                                </figure>
                                                                <div className="elementor-image-box-content">
                                                                    <h3 className="elementor-image-box-title">Shally</h3>
                                                                    <p className="elementor-image-box-description">CEO</p>
                                                                </div>
                                                            </div>{" "}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="elementor-element elementor-element-bdf7cd5 elementor-widget elementor-widget-rating"
                                                    data-id="bdf7cd5"
                                                    data-element_type="widget"
                                                    data-widget_type="rating.default"
                                                >
                                                    <div className="elementor-widget-container">
                                                        <div
                                                            className="e-rating"
                                                            itemType="https://schema.org/Rating"
                                                            itemScope=""
                                                            itemProp="reviewRating"
                                                        >
                                                            <meta itemProp="worstRating" content={0} />
                                                            <meta itemProp="bestRating" content={5} />
                                                            <div
                                                                className="e-rating-wrapper"
                                                                itemProp="ratingValue"
                                                                content={5}
                                                                role="img"
                                                                aria-label="Rated 5 out of 5"
                                                            >
                                                                <div className="e-icon">
                                                                    <div className="e-icon-wrapper e-icon-marked">
                                                                        <svg
                                                                            aria-hidden="true"
                                                                            className="e-font-icon-svg e-eicon-star"
                                                                            viewBox="0 0 1000 1000"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" />
                                                                        </svg>{" "}
                                                                    </div>
                                                                    <div className="e-icon-wrapper e-icon-unmarked">
                                                                        <svg
                                                                            aria-hidden="true"
                                                                            className="e-font-icon-svg e-eicon-star"
                                                                            viewBox="0 0 1000 1000"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" />
                                                                        </svg>{" "}
                                                                    </div>
                                                                </div>
                                                                <div className="e-icon">
                                                                    <div className="e-icon-wrapper e-icon-marked">
                                                                        <svg
                                                                            aria-hidden="true"
                                                                            className="e-font-icon-svg e-eicon-star"
                                                                            viewBox="0 0 1000 1000"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" />
                                                                        </svg>{" "}
                                                                    </div>
                                                                    <div className="e-icon-wrapper e-icon-unmarked">
                                                                        <svg
                                                                            aria-hidden="true"
                                                                            className="e-font-icon-svg e-eicon-star"
                                                                            viewBox="0 0 1000 1000"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" />
                                                                        </svg>{" "}
                                                                    </div>
                                                                </div>
                                                                <div className="e-icon">
                                                                    <div className="e-icon-wrapper e-icon-marked">
                                                                        <svg
                                                                            aria-hidden="true"
                                                                            className="e-font-icon-svg e-eicon-star"
                                                                            viewBox="0 0 1000 1000"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" />
                                                                        </svg>{" "}
                                                                    </div>
                                                                    <div className="e-icon-wrapper e-icon-unmarked">
                                                                        <svg
                                                                            aria-hidden="true"
                                                                            className="e-font-icon-svg e-eicon-star"
                                                                            viewBox="0 0 1000 1000"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" />
                                                                        </svg>{" "}
                                                                    </div>
                                                                </div>
                                                                <div className="e-icon">
                                                                    <div className="e-icon-wrapper e-icon-marked">
                                                                        <svg
                                                                            aria-hidden="true"
                                                                            className="e-font-icon-svg e-eicon-star"
                                                                            viewBox="0 0 1000 1000"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" />
                                                                        </svg>{" "}
                                                                    </div>
                                                                    <div className="e-icon-wrapper e-icon-unmarked">
                                                                        <svg
                                                                            aria-hidden="true"
                                                                            className="e-font-icon-svg e-eicon-star"
                                                                            viewBox="0 0 1000 1000"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" />
                                                                        </svg>{" "}
                                                                    </div>
                                                                </div>
                                                                <div className="e-icon">
                                                                    <div className="e-icon-wrapper e-icon-marked">
                                                                        <svg
                                                                            aria-hidden="true"
                                                                            className="e-font-icon-svg e-eicon-star"
                                                                            viewBox="0 0 1000 1000"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" />
                                                                        </svg>{" "}
                                                                    </div>
                                                                    <div className="e-icon-wrapper e-icon-unmarked">
                                                                        <svg
                                                                            aria-hidden="true"
                                                                            className="e-font-icon-svg e-eicon-star"
                                                                            viewBox="0 0 1000 1000"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" />
                                                                        </svg>{" "}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="elementor-element elementor-element-40c2b5b elementor-widget elementor-widget-text-editor"
                                                    data-id="40c2b5b"
                                                    data-element_type="widget"
                                                    data-widget_type="text-editor.default"
                                                >
                                                    <div className="elementor-widget-container">
                                                        <p>
                                                            Thanks to Cybertrom’s cutting-edge cybersecurity services, we now
                                                            feel confident that our data is safe, giving us peace of mind to
                                                            focus on business growth.
                                                        </p>{" "}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </Slider>
                        </div>


                    </div>
                </div>
            </div>
            <div className="elementor-element elementor-element-e11dbce e-flex e-con-boxed e-con e-parent" data-id="e11dbce" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                <div className="e-con-inner">
                    <div className="elementor-element elementor-element-cfb5142 elementor-widget elementor-widget-heading" data-id="cfb5142" data-element_type="widget" data-widget_type="heading.default">
                        <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">Our News</h2>				</div>
                    </div>
                    <div className="elementor-element elementor-element-8067bb5 elementor-widget elementor-widget-heading" data-id="8067bb5" data-element_type="widget" data-widget_type="heading.default">
                        <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">Latest News</h2>				</div>
                    </div>

                    <div className="elementor-element elementor-element-ef83494 elementor-arrows-position-outside elementor-pagination-type-bullets elementor-pagination-position-outside elementor-widget elementor-widget-loop-carousel e-widget-swiper" data-id="ef83494" data-element_type="widget" data-settings="{&quot;template_id&quot;:&quot;1058&quot;,&quot;_skin&quot;:&quot;post&quot;,&quot;slides_to_show&quot;:&quot;3&quot;,&quot;slides_to_show_tablet&quot;:&quot;2&quot;,&quot;slides_to_show_mobile&quot;:&quot;1&quot;,&quot;slides_to_scroll&quot;:&quot;1&quot;,&quot;edit_handle_selector&quot;:&quot;.elementor-widget-container&quot;,&quot;autoplay&quot;:&quot;yes&quot;,&quot;autoplay_speed&quot;:5000,&quot;pause_on_hover&quot;:&quot;yes&quot;,&quot;pause_on_interaction&quot;:&quot;yes&quot;,&quot;infinite&quot;:&quot;yes&quot;,&quot;speed&quot;:500,&quot;offset_sides&quot;:&quot;none&quot;,&quot;arrows&quot;:&quot;yes&quot;,&quot;pagination&quot;:&quot;bullets&quot;,&quot;image_spacing_custom&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:10,&quot;sizes&quot;:[]},&quot;image_spacing_custom_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;image_spacing_custom_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]}}" data-widget_type="loop-carousel.post">
                        <div className="elementor-widget-container">
                            <div className="swiper elementor-loop-container elementor-grid swiper-initialized swiper-horizontal" dir="ltr">
                                <div className="swiper-wrapper" aria-live="off" id="swiper-wrapper-5885dc1ffa36b014" style={{ "WebkitTransitionDuration": "0ms", "transitionDuration": "0ms", "WebkitTransform": "translate3d(-3633.33px, 0px, 0px)", "msTransform": "translate3d(-3633.33px, 0px, 0px)", "transform": "translate3d(-3633.33px, 0px, 0px)" }}><div data-elementor-type="loop-item" data-elementor-id={1058} className="elementor elementor-1058 swiper-slide e-loop-item e-loop-item-1459 post-1459 post type-post status-publish format-standard has-post-thumbnail hentry category-blog tag-blog tag-latest swiper-slide-duplicate swiper-slide-duplicate-active" data-elementor-post-type="elementor_library" role="group" aria-roledescription="slide" data-custom-edit-handle={1} aria-label="8 / 10" data-swiper-slide-index={7} aria-hidden="true" inert style={{ "width": "353.333px", "marginRight": "10px" }}>
                                    <div className="elementor-element elementor-element-b005434 e-flex e-con-boxed e-con e-parent" data-id="b005434" data-element_type="container">
                                        <div className="e-con-inner">
                                            <div className="elementor-element elementor-element-9c95904 e-con-full e-flex e-con e-child" data-id="9c95904" data-element_type="container">
                                                <div className="elementor-element elementor-element-6cf45a8 e-con-full e-flex e-con e-child" data-id="6cf45a8" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                    <div className="elementor-element elementor-element-73bb0fa elementor-widget elementor-widget-spacer" data-id="73bb0fa" data-element_type="widget" data-widget_type="spacer.default">
                                                        <div className="elementor-widget-container">
                                                            <div className="elementor-spacer">
                                                                <div className="elementor-spacer-inner" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="elementor-element elementor-element-d7c6a63 e-con-full e-flex e-con e-child" data-id="d7c6a63" data-element_type="container">
                                                    <div className="elementor-element elementor-element-0e58752 elementor-post__title elementor-widget elementor-widget-heading" data-id={0e58752} data-element_type="widget" data-widget_type="heading.default">
                                                        <div className="elementor-widget-container">
                                                            <div className="elementor-heading-title elementor-size-default"><a href="https://cybertron-tech.com/amazon-alexa-event-live-latest-news-and-rumors-ahead-of-devices-and-service-announcements/">Amazon Alexa event live – latest news and rumors ahead of devices and service announcements</a></div>				</div>
                                                    </div>
                                                    <div className="elementor-element elementor-element-68f0856 elementor-post__excerpt elementor-widget elementor-widget-theme-post-excerpt" data-id="68f0856" data-element_type="widget" data-widget_type="theme-post-excerpt.default">
                                                        <div className="elementor-widget-container">
                                                            Amazon’s first Devices event since 2023 is on February 26 at 10 AM EST, expected to unveil AI-enhanced Alexa, new Echo, and Fire TV devices.				</div>
                                                    </div>
                                                    <div className="elementor-element elementor-element-dec7c57 elementor-widget__width-auto elementor-widget elementor-widget-button" data-id="dec7c57" data-element_type="widget" data-widget_type="button.default">
                                                        <div className="elementor-widget-container">
                                                            <div className="elementor-button-wrapper">
                                                                <a className="elementor-button elementor-button-link elementor-size-sm" href="https://cybertron-tech.com/amazon-alexa-event-live-latest-news-and-rumors-ahead-of-devices-and-service-announcements/">
                                                                    <span className="elementor-button-content-wrapper">
                                                                        <span className="elementor-button-text">Read more &gt;&gt;</span>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                    <div data-elementor-type="loop-item" data-elementor-id={1058} className="elementor elementor-1058 swiper-slide e-loop-item e-loop-item-1403 post-1403 post type-post status-publish format-standard has-post-thumbnail hentry category-blog tag-latest-news swiper-slide-duplicate swiper-slide-duplicate-next" data-elementor-post-type="elementor_library" role="group" aria-roledescription="slide" data-custom-edit-handle={1} aria-label="9 / 10" data-swiper-slide-index={8} aria-hidden="true" inert style={{ "width": "353.333px", "marginRight": "10px" }}>
                                        <div className="elementor-element elementor-element-b005434 e-flex e-con-boxed e-con e-parent" data-id="b005434" data-element_type="container">
                                            <div className="e-con-inner">
                                                <div className="elementor-element elementor-element-9c95904 e-con-full e-flex e-con e-child" data-id="9c95904" data-element_type="container">
                                                    <div className="elementor-element elementor-element-6cf45a8 e-con-full e-flex e-con e-child" data-id="6cf45a8" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                        <div className="elementor-element elementor-element-73bb0fa elementor-widget elementor-widget-spacer" data-id="73bb0fa" data-element_type="widget" data-widget_type="spacer.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-spacer">
                                                                    <div className="elementor-spacer-inner" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="elementor-element elementor-element-d7c6a63 e-con-full e-flex e-con e-child" data-id="d7c6a63" data-element_type="container">
                                                        <div className="elementor-element elementor-element-0e58752 elementor-post__title elementor-widget elementor-widget-heading" data-id={0e58752} data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-heading-title elementor-size-default"><a href="https://cybertron-tech.com/study-challenges-myths-about-cannabis-brain-health-and-iq/">Study Challenges Myths About Cannabis, Brain Health, and IQ</a></div>				</div>
                                                        </div>
                                                        <div className="elementor-element elementor-element-68f0856 elementor-post__excerpt elementor-widget elementor-widget-theme-post-excerpt" data-id="68f0856" data-element_type="widget" data-widget_type="theme-post-excerpt.default">
                                                            <div className="elementor-widget-container">
                                                                Researchers found that cannabis users experienced slightly less cognitive decline from early adulthood to late midlife compared to nonusers.				</div>
                                                        </div>
                                                        <div className="elementor-element elementor-element-dec7c57 elementor-widget__width-auto elementor-widget elementor-widget-button" data-id="dec7c57" data-element_type="widget" data-widget_type="button.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-button-wrapper">
                                                                    <a className="elementor-button elementor-button-link elementor-size-sm" href="https://cybertron-tech.com/study-challenges-myths-about-cannabis-brain-health-and-iq/">
                                                                        <span className="elementor-button-content-wrapper">
                                                                            <span className="elementor-button-text">Read more &gt;&gt;</span>
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-elementor-type="loop-item" data-elementor-id={1058} className="elementor elementor-1058 swiper-slide e-loop-item e-loop-item-1081 post-1081 post type-post status-publish format-standard has-post-thumbnail hentry category-web-solution swiper-slide-duplicate" data-elementor-post-type="elementor_library" role="group" aria-roledescription="slide" data-custom-edit-handle={1} aria-label="10 / 10" data-swiper-slide-index={9} aria-hidden="true" inert style={{ "width": "353.333px", "marginRight": "10px" }}>
                                        <div className="elementor-element elementor-element-b005434 e-flex e-con-boxed e-con e-parent" data-id="b005434" data-element_type="container">
                                            <div className="e-con-inner">
                                                <div className="elementor-element elementor-element-9c95904 e-con-full e-flex e-con e-child" data-id="9c95904" data-element_type="container">
                                                    <div className="elementor-element elementor-element-6cf45a8 e-con-full e-flex e-con e-child" data-id="6cf45a8" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                        <div className="elementor-element elementor-element-73bb0fa elementor-widget elementor-widget-spacer" data-id="73bb0fa" data-element_type="widget" data-widget_type="spacer.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-spacer">
                                                                    <div className="elementor-spacer-inner" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="elementor-element elementor-element-d7c6a63 e-con-full e-flex e-con e-child" data-id="d7c6a63" data-element_type="container">
                                                        <div className="elementor-element elementor-element-0e58752 elementor-post__title elementor-widget elementor-widget-heading" data-id={0e58752} data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-heading-title elementor-size-default"><a href="https://cybertron-tech.com/secure-web-development-prevent-risks-when-changing-ownership/">Secure Web Development: Prevent Risks When Changing Ownership</a></div>				</div>
                                                        </div>
                                                        <div className="elementor-element elementor-element-68f0856 elementor-post__excerpt elementor-widget elementor-widget-theme-post-excerpt" data-id="68f0856" data-element_type="widget" data-widget_type="theme-post-excerpt.default">
                                                            <div className="elementor-widget-container">
                                                                Transferring website ownership can expose security vulnerabilities. Ensure safe transitions, protect data, and maintain website integrity with...				</div>
                                                        </div>
                                                        <div className="elementor-element elementor-element-dec7c57 elementor-widget__width-auto elementor-widget elementor-widget-button" data-id="dec7c57" data-element_type="widget" data-widget_type="button.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-button-wrapper">
                                                                    <a className="elementor-button elementor-button-link elementor-size-sm" href="https://cybertron-tech.com/secure-web-development-prevent-risks-when-changing-ownership/">
                                                                        <span className="elementor-button-content-wrapper">
                                                                            <span className="elementor-button-text">Read more &gt;&gt;</span>
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <style id="loop-dynamic-1058" dangerouslySetInnerHTML={{ __html: ".e-loop-item-1553 .elementor-element.elementor-element-6cf45a8:not(.elementor-motion-effects-element-type-background), .e-loop-item-1553 .elementor-element.elementor-element-6cf45a8 > .elementor-motion-effects-container > .elementor-motion-effects-layer{background-image:url(\"https://cybertron-tech.com/wp-content/uploads/2025/02/vpn.webp\");}" }} /><style id="loop-1058" dangerouslySetInnerHTML={{ __html: ".elementor-1058 .elementor-element.elementor-element-b005434{--display:flex;--flex-direction:column;--container-widget-width:100%;--container-widget-height:initial;--container-widget-flex-grow:0;--container-widget-align-self:initial;--flex-wrap-mobile:wrap;box-shadow:8px 8px 10px 0px rgba(0,0,0,0.5);--padding-top:15px;--padding-bottom:15px;--padding-left:15px;--padding-right:15px;}.elementor-1058 .elementor-element.elementor-element-b005434:hover{box-shadow:0px 0px 10px 0px rgba(0,0,0,0.5);}.elementor-1058 .elementor-element.elementor-element-9c95904{--display:flex;--gap:0px 0px;--row-gap:0px;--column-gap:0px;border-style:none;--border-style:none;--border-radius:10px 10px 10px 10px;--margin-top:0px;--margin-bottom:0px;--margin-left:0px;--marginRight:0px;--padding-top:0px;--padding-bottom:0px;--padding-left:0px;--padding-right:0px;}.elementor-1058 .elementor-element.elementor-element-6cf45a8{--display:flex;--justify-content:center;--gap:0px 0px;--row-gap:0px;--column-gap:0px;border-style:none;--border-style:none;--border-radius:13px 13px 13px 13px;--margin-top:0px;--margin-bottom:0px;--margin-left:0px;--marginRight:0px;--padding-top:0px;--padding-bottom:0px;--padding-left:0px;--padding-right:0px;}.elementor-1058 .elementor-element.elementor-element-6cf45a8:not(.elementor-motion-effects-element-type-background), .elementor-1058 .elementor-element.elementor-element-6cf45a8 > .elementor-motion-effects-container > .elementor-motion-effects-layer{background-color:#3A3A3A00;background-position:center center;background-repeat:no-repeat;background-size:cover;}.elementor-1058 .elementor-element.elementor-element-73bb0fa{--spacer-size:50px;}.elementor-1058 .elementor-element.elementor-element-73bb0fa > .elementor-widget-container{padding:100px 0px 190px 0px;}.elementor-1058 .elementor-element.elementor-element-d7c6a63{--display:flex;--gap:10px 10px;--row-gap:10px;--column-gap:10px;--margin-top:0px;--margin-bottom:0px;--margin-left:0px;--marginRight:0px;--padding-top:16px;--padding-bottom:16px;--padding-left:16px;--padding-right:16px;}.elementor-widget-heading .elementor-heading-title{font-family:var( --e-global-typography-primary-font-family ), Sans-serif;fontSize:var( --e-global-typography-primary-fontSize );font-weight:var( --e-global-typography-primary-font-weight );color:var( --e-global-color-primary );}.elementor-1058 .elementor-element.elementor-element-0e58752 > .elementor-widget-container{box-shadow:0px 0px 10px 0px rgba(0,0,0,0.5);}.elementor-1058 .elementor-element.elementor-element-0e58752 .elementor-heading-title{font-family:\"Inter\", Sans-serif;fontSize:22px;font-weight:600;line-height:26px;-webkit-text-stroke-color:#000;stroke:#000;color:#FFFFFF;}.elementor-1058 .elementor-element.elementor-element-0e58752 .elementor-heading-title:hover{color:#A1E3FF;}.elementor-widget-theme-post-excerpt .elementor-widget-container{color:var( --e-global-color-text );font-family:var( --e-global-typography-text-font-family ), Sans-serif;fontSize:var( --e-global-typography-text-fontSize );font-weight:var( --e-global-typography-text-font-weight );}.elementor-1058 .elementor-element.elementor-element-68f0856 .elementor-widget-container{text-align:justify;color:var( --e-global-color-text );font-family:\"Inter Tight\", Sans-serif;fontSize:14px;font-weight:400;line-height:1.2rem;}.elementor-widget-button .elementor-button{background-color:var( --e-global-color-accent );font-family:var( --e-global-typography-accent-font-family ), Sans-serif;fontSize:var( --e-global-typography-accent-fontSize );font-weight:var( --e-global-typography-accent-font-weight );}.elementor-1058 .elementor-element.elementor-element-dec7c57 .elementor-button{background-color:#77777700;font-family:\"Inter\", Sans-serif;fontSize:14px;font-weight:400;line-height:1.2em;fill:#E7E7E7;color:#E7E7E7;border-radius:0px 0px 0px 0px;padding:0px 0px 0px 0px;}.elementor-1058 .elementor-element.elementor-element-dec7c57{width:auto;max-width:auto;}.elementor-1058 .elementor-element.elementor-element-dec7c57 .elementor-button:hover, .elementor-1058 .elementor-element.elementor-element-dec7c57 .elementor-button:focus{color:#A1E3FF;}.elementor-1058 .elementor-element.elementor-element-dec7c57 .elementor-button:hover svg, .elementor-1058 .elementor-element.elementor-element-dec7c57 .elementor-button:focus svg{fill:#A1E3FF;}@media(max-width:1024px){.elementor-widget-heading .elementor-heading-title{fontSize:var( --e-global-typography-primary-fontSize );}.elementor-1058 .elementor-element.elementor-element-0e58752 .elementor-heading-title{fontSize:26px;}.elementor-widget-theme-post-excerpt .elementor-widget-container{fontSize:var( --e-global-typography-text-fontSize );}.elementor-widget-button .elementor-button{fontSize:var( --e-global-typography-accent-fontSize );}}@media(max-width:767px){.elementor-widget-heading .elementor-heading-title{fontSize:var( --e-global-typography-primary-fontSize );}.elementor-1058 .elementor-element.elementor-element-0e58752 .elementor-heading-title{fontSize:24px;}.elementor-widget-theme-post-excerpt .elementor-widget-container{fontSize:var( --e-global-typography-text-fontSize );}.elementor-1058 .elementor-element.elementor-element-68f0856 .elementor-widget-container{fontSize:14px;}.elementor-widget-button .elementor-button{fontSize:var( --e-global-typography-accent-fontSize );}.elementor-1058 .elementor-element.elementor-element-dec7c57 .elementor-button{fontSize:10px;}}/* Start custom CSS for container, class: .elementor-element-d7c6a63 *//*Excerpt Line Count*/\n.elementor-1058 .elementor-element.elementor-element-d7c6a63 .elementor-post__excerpt{ overflow: hidden; \n    width:100%; \n    display: -webkit-box; \n    -webkit-line-clamp:3;\n    -webkit-box-orient: vertical; \n}\n/*Title Line Count*/\n.elementor-1058 .elementor-element.elementor-element-d7c6a63 .elementor-post__title{ overflow: hidden; \n    width:100%;\n    display: -webkit-box; \n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical; \n}/* End custom CSS */\n/* Start custom CSS for container, class: .elementor-element-9c95904 *//*Excerpt Line Count*/\n.elementor-1058 .elementor-element.elementor-element-9c95904 .elementor-post__excerpt{ overflow: hidden; \n    width:100%; \n    display: -webkit-box; \n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical; \n}\n/*Title Line Count*/\n.elementor-1058 .elementor-element.elementor-element-9c95904 .elementor-post__title{ overflow: hidden; \n    width:100%;\n    display: -webkit-box; \n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical; \n}/* End custom CSS */" }} />		<div data-elementor-type="loop-item" data-elementor-id={1058} className="elementor elementor-1058 swiper-slide e-loop-item e-loop-item-1553 post-1553 post type-post status-publish format-standard has-post-thumbnail hentry category-vpn tag-blog tag-cyber-security tag-vpn" data-elementor-post-type="elementor_library" role="group" aria-roledescription="slide" data-custom-edit-handle={1} aria-label="1 / 10" data-swiper-slide-index={0} style={{ "width": "353.333px", "marginRight": "10px" }} aria-hidden="true" inert>
                                        <div className="elementor-element elementor-element-b005434 e-flex e-con-boxed e-con e-parent" data-id="b005434" data-element_type="container">
                                            <div className="e-con-inner">
                                                <div className="elementor-element elementor-element-9c95904 e-con-full e-flex e-con e-child" data-id="9c95904" data-element_type="container">
                                                    <div className="elementor-element elementor-element-6cf45a8 e-con-full e-flex e-con e-child" data-id="6cf45a8" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                        <div className="elementor-element elementor-element-73bb0fa elementor-widget elementor-widget-spacer" data-id="73bb0fa" data-element_type="widget" data-widget_type="spacer.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-spacer">
                                                                    <div className="elementor-spacer-inner" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="elementor-element elementor-element-d7c6a63 e-con-full e-flex e-con e-child" data-id="d7c6a63" data-element_type="container">
                                                        <div className="elementor-element elementor-element-0e58752 elementor-post__title elementor-widget elementor-widget-heading" data-id={0e58752} data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-heading-title elementor-size-default"><a href="https://cybertron-tech.com/can-your-workplace-tell-that-youre-using-a-vpn/">Can your workplace tell that you’re using a VPN?</a></div>				</div>
                                                        </div>
                                                        <div className="elementor-element elementor-element-68f0856 elementor-post__excerpt elementor-widget elementor-widget-theme-post-excerpt" data-id="68f0856" data-element_type="widget" data-widget_type="theme-post-excerpt.default">
                                                            <div className="elementor-widget-container">
                                                                VPNs ensure secure remote work and unrestricted content access. Essential for home and business, they provide encrypted connections, protecting data while bypassing geographic restrictions effortlessly.				</div>
                                                        </div>
                                                        <div className="elementor-element elementor-element-dec7c57 elementor-widget__width-auto elementor-widget elementor-widget-button" data-id="dec7c57" data-element_type="widget" data-widget_type="button.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-button-wrapper">
                                                                    <a className="elementor-button elementor-button-link elementor-size-sm" href="https://cybertron-tech.com/can-your-workplace-tell-that-youre-using-a-vpn/">
                                                                        <span className="elementor-button-content-wrapper">
                                                                            <span className="elementor-button-text">Read more &gt;&gt;</span>
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <style id="loop-dynamic-1058" dangerouslySetInnerHTML={{ __html: ".e-loop-item-1537 .elementor-element.elementor-element-6cf45a8:not(.elementor-motion-effects-element-type-background), .e-loop-item-1537 .elementor-element.elementor-element-6cf45a8 > .elementor-motion-effects-container > .elementor-motion-effects-layer{background-image:url(\"https://cybertron-tech.com/wp-content/uploads/2025/02/open.webp\");}" }} />		<div data-elementor-type="loop-item" data-elementor-id={1058} className="elementor elementor-1058 swiper-slide e-loop-item e-loop-item-1537 post-1537 post type-post status-publish format-standard has-post-thumbnail hentry category-cloud-it-solution tag-ai tag-cloud-it-solution" data-elementor-post-type="elementor_library" role="group" aria-roledescription="slide" data-custom-edit-handle={1} aria-label="2 / 10" data-swiper-slide-index={1} style={{ "width": "353.333px", "marginRight": "10px" }} aria-hidden="true" inert>
                                        <div className="elementor-element elementor-element-b005434 e-flex e-con-boxed e-con e-parent" data-id="b005434" data-element_type="container">
                                            <div className="e-con-inner">
                                                <div className="elementor-element elementor-element-9c95904 e-con-full e-flex e-con e-child" data-id="9c95904" data-element_type="container">
                                                    <div className="elementor-element elementor-element-6cf45a8 e-con-full e-flex e-con e-child" data-id="6cf45a8" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                        <div className="elementor-element elementor-element-73bb0fa elementor-widget elementor-widget-spacer" data-id="73bb0fa" data-element_type="widget" data-widget_type="spacer.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-spacer">
                                                                    <div className="elementor-spacer-inner" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="elementor-element elementor-element-d7c6a63 e-con-full e-flex e-con e-child" data-id="d7c6a63" data-element_type="container">
                                                        <div className="elementor-element elementor-element-0e58752 elementor-post__title elementor-widget elementor-widget-heading" data-id={0e58752} data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-heading-title elementor-size-default"><a href="https://cybertron-tech.com/this-ai-tool-works-overtime-so-you-dont-have-to-and-now-its-on-sale/">This AI Tool Works Overtime So You Don’t Have To (And Now It’s on Sale)</a></div>				</div>
                                                        </div>
                                                        <div className="elementor-element elementor-element-68f0856 elementor-post__excerpt elementor-widget elementor-widget-theme-post-excerpt" data-id="68f0856" data-element_type="widget" data-widget_type="theme-post-excerpt.default">
                                                            <div className="elementor-widget-container">
                                                                AI makes it easy to handle a variety of tasks with a user-friendly setup.				</div>
                                                        </div>
                                                        <div className="elementor-element elementor-element-dec7c57 elementor-widget__width-auto elementor-widget elementor-widget-button" data-id="dec7c57" data-element_type="widget" data-widget_type="button.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-button-wrapper">
                                                                    <a className="elementor-button elementor-button-link elementor-size-sm" href="https://cybertron-tech.com/this-ai-tool-works-overtime-so-you-dont-have-to-and-now-its-on-sale/">
                                                                        <span className="elementor-button-content-wrapper">
                                                                            <span className="elementor-button-text">Read more &gt;&gt;</span>
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <style id="loop-dynamic-1058" dangerouslySetInnerHTML={{ __html: ".e-loop-item-1515 .elementor-element.elementor-element-6cf45a8:not(.elementor-motion-effects-element-type-background), .e-loop-item-1515 .elementor-element.elementor-element-6cf45a8 > .elementor-motion-effects-container > .elementor-motion-effects-layer{background-image:url(\"https://cybertron-tech.com/wp-content/uploads/2025/02/4q24-emerging-risk-universe-map.png\");}" }} />		<div data-elementor-type="loop-item" data-elementor-id={1058} className="elementor elementor-1058 swiper-slide e-loop-item e-loop-item-1515 post-1515 post type-post status-publish format-standard has-post-thumbnail hentry category-blog tag-blog" data-elementor-post-type="elementor_library" role="group" aria-roledescription="slide" data-custom-edit-handle={1} aria-label="3 / 10" data-swiper-slide-index={2} style={{ "width": "353.333px", "marginRight": "10px" }} aria-hidden="true" inert>
                                        <div className="elementor-element elementor-element-b005434 e-flex e-con-boxed e-con e-parent" data-id="b005434" data-element_type="container">
                                            <div className="e-con-inner">
                                                <div className="elementor-element elementor-element-9c95904 e-con-full e-flex e-con e-child" data-id="9c95904" data-element_type="container">
                                                    <div className="elementor-element elementor-element-6cf45a8 e-con-full e-flex e-con e-child" data-id="6cf45a8" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                        <div className="elementor-element elementor-element-73bb0fa elementor-widget elementor-widget-spacer" data-id="73bb0fa" data-element_type="widget" data-widget_type="spacer.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-spacer">
                                                                    <div className="elementor-spacer-inner" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="elementor-element elementor-element-d7c6a63 e-con-full e-flex e-con e-child" data-id="d7c6a63" data-element_type="container">
                                                        <div className="elementor-element elementor-element-0e58752 elementor-post__title elementor-widget elementor-widget-heading" data-id={0e58752} data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-heading-title elementor-size-default"><a href="https://cybertron-tech.com/emerging-risks-your-c-suite-should-consider-now/">Emerging Risks Your C-Suite Should Consider Now</a></div>				</div>
                                                        </div>
                                                        <div className="elementor-element elementor-element-68f0856 elementor-post__excerpt elementor-widget elementor-widget-theme-post-excerpt" data-id="68f0856" data-element_type="widget" data-widget_type="theme-post-excerpt.default">
                                                            <div className="elementor-widget-container">
                                                                C-suite executives need an efficient way to drive action on emerging risks				</div>
                                                        </div>
                                                        <div className="elementor-element elementor-element-dec7c57 elementor-widget__width-auto elementor-widget elementor-widget-button" data-id="dec7c57" data-element_type="widget" data-widget_type="button.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-button-wrapper">
                                                                    <a className="elementor-button elementor-button-link elementor-size-sm" href="https://cybertron-tech.com/emerging-risks-your-c-suite-should-consider-now/">
                                                                        <span className="elementor-button-content-wrapper">
                                                                            <span className="elementor-button-text">Read more &gt;&gt;</span>
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <style id="loop-dynamic-1058" dangerouslySetInnerHTML={{ __html: ".e-loop-item-1502 .elementor-element.elementor-element-6cf45a8:not(.elementor-motion-effects-element-type-background), .e-loop-item-1502 .elementor-element.elementor-element-6cf45a8 > .elementor-motion-effects-container > .elementor-motion-effects-layer{background-image:url(\"https://cybertron-tech.com/wp-content/uploads/2025/02/p1.webp\");}" }} />		<div data-elementor-type="loop-item" data-elementor-id={1058} className="elementor elementor-1058 swiper-slide e-loop-item e-loop-item-1502 post-1502 post type-post status-publish format-standard has-post-thumbnail hentry category-brand tag-blog tag-latest-news" data-elementor-post-type="elementor_library" role="group" aria-roledescription="slide" data-custom-edit-handle={1} aria-label="4 / 10" data-swiper-slide-index={3} style={{ "width": "353.333px", "marginRight": "10px" }} aria-hidden="true" inert>
                                        <div className="elementor-element elementor-element-b005434 e-flex e-con-boxed e-con e-parent" data-id="b005434" data-element_type="container">
                                            <div className="e-con-inner">
                                                <div className="elementor-element elementor-element-9c95904 e-con-full e-flex e-con e-child" data-id="9c95904" data-element_type="container">
                                                    <div className="elementor-element elementor-element-6cf45a8 e-con-full e-flex e-con e-child" data-id="6cf45a8" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                        <div className="elementor-element elementor-element-73bb0fa elementor-widget elementor-widget-spacer" data-id="73bb0fa" data-element_type="widget" data-widget_type="spacer.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-spacer">
                                                                    <div className="elementor-spacer-inner" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="elementor-element elementor-element-d7c6a63 e-con-full e-flex e-con e-child" data-id="d7c6a63" data-element_type="container">
                                                        <div className="elementor-element elementor-element-0e58752 elementor-post__title elementor-widget elementor-widget-heading" data-id={0e58752} data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-heading-title elementor-size-default"><a href="https://cybertron-tech.com/adobe-tries-again-with-another-photoshop-app-this-time-adding-ai/">Adobe Tries Again With Another Photoshop App, This Time Adding AI</a></div>				</div>
                                                        </div>
                                                        <div className="elementor-element elementor-element-68f0856 elementor-post__excerpt elementor-widget elementor-widget-theme-post-excerpt" data-id="68f0856" data-element_type="widget" data-widget_type="theme-post-excerpt.default">
                                                            <div className="elementor-widget-container">
                                                                The app includes many standard and even some advanced Photoshop features, but its recent generative AI tools				</div>
                                                        </div>
                                                        <div className="elementor-element elementor-element-dec7c57 elementor-widget__width-auto elementor-widget elementor-widget-button" data-id="dec7c57" data-element_type="widget" data-widget_type="button.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-button-wrapper">
                                                                    <a className="elementor-button elementor-button-link elementor-size-sm" href="https://cybertron-tech.com/adobe-tries-again-with-another-photoshop-app-this-time-adding-ai/">
                                                                        <span className="elementor-button-content-wrapper">
                                                                            <span className="elementor-button-text">Read more &gt;&gt;</span>
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <style id="loop-dynamic-1058" dangerouslySetInnerHTML={{ __html: ".e-loop-item-1496 .elementor-element.elementor-element-6cf45a8:not(.elementor-motion-effects-element-type-background), .e-loop-item-1496 .elementor-element.elementor-element-6cf45a8 > .elementor-motion-effects-container > .elementor-motion-effects-layer{background-image:url(\"https://cybertron-tech.com/wp-content/uploads/2025/02/c1.webp\");}" }} />		<div data-elementor-type="loop-item" data-elementor-id={1058} className="elementor elementor-1058 swiper-slide e-loop-item e-loop-item-1496 post-1496 post type-post status-publish format-standard has-post-thumbnail hentry category-cyber-security tag-cyber-security tag-latest-news" data-elementor-post-type="elementor_library" role="group" aria-roledescription="slide" data-custom-edit-handle={1} aria-label="5 / 10" data-swiper-slide-index={4} style={{ "width": "353.333px", "marginRight": "10px" }} aria-hidden="true" inert>
                                        <div className="elementor-element elementor-element-b005434 e-flex e-con-boxed e-con e-parent" data-id="b005434" data-element_type="container">
                                            <div className="e-con-inner">
                                                <div className="elementor-element elementor-element-9c95904 e-con-full e-flex e-con e-child" data-id="9c95904" data-element_type="container">
                                                    <div className="elementor-element elementor-element-6cf45a8 e-con-full e-flex e-con e-child" data-id="6cf45a8" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                        <div className="elementor-element elementor-element-73bb0fa elementor-widget elementor-widget-spacer" data-id="73bb0fa" data-element_type="widget" data-widget_type="spacer.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-spacer">
                                                                    <div className="elementor-spacer-inner" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="elementor-element elementor-element-d7c6a63 e-con-full e-flex e-con e-child" data-id="d7c6a63" data-element_type="container">
                                                        <div className="elementor-element elementor-element-0e58752 elementor-post__title elementor-widget elementor-widget-heading" data-id={0e58752} data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-heading-title elementor-size-default"><a href="https://cybertron-tech.com/hack-at-employee-screening-firm-disa-exposes-personal-data-of-3-3m-people/">Hack at Employee Screening Firm DISA Exposes Personal Data of 3.3M People</a></div>				</div>
                                                        </div>
                                                        <div className="elementor-element elementor-element-68f0856 elementor-post__excerpt elementor-widget elementor-widget-theme-post-excerpt" data-id="68f0856" data-element_type="widget" data-widget_type="theme-post-excerpt.default">
                                                            <div className="elementor-widget-container">
                                                                DISA provides employment screening solutions, such as drug and alcohol testing and background verifications, for franchises.				</div>
                                                        </div>
                                                        <div className="elementor-element elementor-element-dec7c57 elementor-widget__width-auto elementor-widget elementor-widget-button" data-id="dec7c57" data-element_type="widget" data-widget_type="button.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-button-wrapper">
                                                                    <a className="elementor-button elementor-button-link elementor-size-sm" href="https://cybertron-tech.com/hack-at-employee-screening-firm-disa-exposes-personal-data-of-3-3m-people/">
                                                                        <span className="elementor-button-content-wrapper">
                                                                            <span className="elementor-button-text">Read more &gt;&gt;</span>
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <style id="loop-dynamic-1058" dangerouslySetInnerHTML={{ __html: ".e-loop-item-1488 .elementor-element.elementor-element-6cf45a8:not(.elementor-motion-effects-element-type-background), .e-loop-item-1488 .elementor-element.elementor-element-6cf45a8 > .elementor-motion-effects-container > .elementor-motion-effects-layer{background-image:url(\"https://cybertron-tech.com/wp-content/uploads/2025/02/deep.webp\");}" }} />		<div data-elementor-type="loop-item" data-elementor-id={1058} className="elementor elementor-1058 swiper-slide e-loop-item e-loop-item-1488 post-1488 post type-post status-publish format-standard has-post-thumbnail hentry category-cyber-security tag-cyber-security tag-latest-news" data-elementor-post-type="elementor_library" role="group" aria-roledescription="slide" data-custom-edit-handle={1} aria-label="6 / 10" data-swiper-slide-index={5} style={{ "width": "353.333px", "marginRight": "10px" }} aria-hidden="true" inert>
                                        <div className="elementor-element elementor-element-b005434 e-flex e-con-boxed e-con e-parent" data-id="b005434" data-element_type="container">
                                            <div className="e-con-inner">
                                                <div className="elementor-element elementor-element-9c95904 e-con-full e-flex e-con e-child" data-id="9c95904" data-element_type="container">
                                                    <div className="elementor-element elementor-element-6cf45a8 e-con-full e-flex e-con e-child" data-id="6cf45a8" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                        <div className="elementor-element elementor-element-73bb0fa elementor-widget elementor-widget-spacer" data-id="73bb0fa" data-element_type="widget" data-widget_type="spacer.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-spacer">
                                                                    <div className="elementor-spacer-inner" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="elementor-element elementor-element-d7c6a63 e-con-full e-flex e-con e-child" data-id="d7c6a63" data-element_type="container">
                                                        <div className="elementor-element elementor-element-0e58752 elementor-post__title elementor-widget elementor-widget-heading" data-id={0e58752} data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-heading-title elementor-size-default"><a href="https://cybertron-tech.com/deepfake-scam-calls-on-the-rise-in-the-us-how-to-stay-safe/">Deepfake Scam Calls on the Rise in the US: How to Stay Safe</a></div>				</div>
                                                        </div>
                                                        <div className="elementor-element elementor-element-68f0856 elementor-post__excerpt elementor-widget elementor-widget-theme-post-excerpt" data-id="68f0856" data-element_type="widget" data-widget_type="theme-post-excerpt.default">
                                                            <div className="elementor-widget-container">
                                                                AI-generated deepfake videos are rampant on social media, but there’s another AI-enabled scam Americans need to guard against: deepfake calls.&nbsp;				</div>
                                                        </div>
                                                        <div className="elementor-element elementor-element-dec7c57 elementor-widget__width-auto elementor-widget elementor-widget-button" data-id="dec7c57" data-element_type="widget" data-widget_type="button.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-button-wrapper">
                                                                    <a className="elementor-button elementor-button-link elementor-size-sm" href="https://cybertron-tech.com/deepfake-scam-calls-on-the-rise-in-the-us-how-to-stay-safe/">
                                                                        <span className="elementor-button-content-wrapper">
                                                                            <span className="elementor-button-text">Read more &gt;&gt;</span>
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <style id="loop-dynamic-1058" dangerouslySetInnerHTML={{ __html: ".e-loop-item-1474 .elementor-element.elementor-element-6cf45a8:not(.elementor-motion-effects-element-type-background), .e-loop-item-1474 .elementor-element.elementor-element-6cf45a8 > .elementor-motion-effects-container > .elementor-motion-effects-layer{background-image:url(\"https://cybertron-tech.com/wp-content/uploads/2025/02/6.webp\");}" }} />		<div data-elementor-type="loop-item" data-elementor-id={1058} className="elementor elementor-1058 swiper-slide e-loop-item e-loop-item-1474 post-1474 post type-post status-publish format-standard has-post-thumbnail hentry category-services tag-blog tag-latest-news swiper-slide-prev" data-elementor-post-type="elementor_library" role="group" aria-roledescription="slide" data-custom-edit-handle={1} aria-label="7 / 10" data-swiper-slide-index={6} style={{ "width": "353.333px", "marginRight": "10px" }} aria-hidden="true" inert>
                                        <div className="elementor-element elementor-element-b005434 e-flex e-con-boxed e-con e-parent" data-id="b005434" data-element_type="container">
                                            <div className="e-con-inner">
                                                <div className="elementor-element elementor-element-9c95904 e-con-full e-flex e-con e-child" data-id="9c95904" data-element_type="container">
                                                    <div className="elementor-element elementor-element-6cf45a8 e-con-full e-flex e-con e-child" data-id="6cf45a8" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                        <div className="elementor-element elementor-element-73bb0fa elementor-widget elementor-widget-spacer" data-id="73bb0fa" data-element_type="widget" data-widget_type="spacer.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-spacer">
                                                                    <div className="elementor-spacer-inner" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="elementor-element elementor-element-d7c6a63 e-con-full e-flex e-con e-child" data-id="d7c6a63" data-element_type="container">
                                                        <div className="elementor-element elementor-element-0e58752 elementor-post__title elementor-widget elementor-widget-heading" data-id={0e58752} data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-heading-title elementor-size-default"><a href="https://cybertron-tech.com/hands-on-with-the-framework-desktop-a-speedy-tweak-easy-mini-itx-pc/">Hands On With the Framework Desktop: A Speedy, Tweak-Easy Mini-ITX PC</a></div>				</div>
                                                        </div>
                                                        <div className="elementor-element elementor-element-68f0856 elementor-post__excerpt elementor-widget elementor-widget-theme-post-excerpt" data-id="68f0856" data-element_type="widget" data-widget_type="theme-post-excerpt.default">
                                                            <div className="elementor-widget-container">
                                                                The company's debut desktop is a compact microtower that combines Framework's signature swappable I/O modules with quirky design touches.				</div>
                                                        </div>
                                                        <div className="elementor-element elementor-element-dec7c57 elementor-widget__width-auto elementor-widget elementor-widget-button" data-id="dec7c57" data-element_type="widget" data-widget_type="button.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-button-wrapper">
                                                                    <a className="elementor-button elementor-button-link elementor-size-sm" href="https://cybertron-tech.com/hands-on-with-the-framework-desktop-a-speedy-tweak-easy-mini-itx-pc/">
                                                                        <span className="elementor-button-content-wrapper">
                                                                            <span className="elementor-button-text">Read more &gt;&gt;</span>
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <style id="loop-dynamic-1058" dangerouslySetInnerHTML={{ __html: ".e-loop-item-1459 .elementor-element.elementor-element-6cf45a8:not(.elementor-motion-effects-element-type-background), .e-loop-item-1459 .elementor-element.elementor-element-6cf45a8 > .elementor-motion-effects-container > .elementor-motion-effects-layer{background-image:url(\"https://cybertron-tech.com/wp-content/uploads/2025/02/TQg3osv6QfkZRyTxPdJR2k-1600-80.jpg.webp\");}" }} />		<div data-elementor-type="loop-item" data-elementor-id={1058} className="elementor elementor-1058 swiper-slide e-loop-item e-loop-item-1459 post-1459 post type-post status-publish format-standard has-post-thumbnail hentry category-blog tag-blog tag-latest swiper-slide-active" data-elementor-post-type="elementor_library" role="group" aria-roledescription="slide" data-custom-edit-handle={1} aria-label="8 / 10" data-swiper-slide-index={7} style={{ "width": "353.333px", "marginRight": "10px" }}>
                                        <div className="elementor-element elementor-element-b005434 e-flex e-con-boxed e-con e-parent" data-id="b005434" data-element_type="container">
                                            <div className="e-con-inner">
                                                <div className="elementor-element elementor-element-9c95904 e-con-full e-flex e-con e-child" data-id="9c95904" data-element_type="container">
                                                    <div className="elementor-element elementor-element-6cf45a8 e-con-full e-flex e-con e-child" data-id="6cf45a8" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                        <div className="elementor-element elementor-element-73bb0fa elementor-widget elementor-widget-spacer" data-id="73bb0fa" data-element_type="widget" data-widget_type="spacer.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-spacer">
                                                                    <div className="elementor-spacer-inner" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="elementor-element elementor-element-d7c6a63 e-con-full e-flex e-con e-child" data-id="d7c6a63" data-element_type="container">
                                                        <div className="elementor-element elementor-element-0e58752 elementor-post__title elementor-widget elementor-widget-heading" data-id={0e58752} data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-heading-title elementor-size-default"><a href="https://cybertron-tech.com/amazon-alexa-event-live-latest-news-and-rumors-ahead-of-devices-and-service-announcements/">Amazon Alexa event live – latest news and rumors ahead of devices and service announcements</a></div>				</div>
                                                        </div>
                                                        <div className="elementor-element elementor-element-68f0856 elementor-post__excerpt elementor-widget elementor-widget-theme-post-excerpt" data-id="68f0856" data-element_type="widget" data-widget_type="theme-post-excerpt.default">
                                                            <div className="elementor-widget-container">
                                                                Amazon’s first Devices event since 2023 is on February 26 at 10 AM EST, expected to unveil AI-enhanced Alexa, new Echo, and Fire TV devices.				</div>
                                                        </div>
                                                        <div className="elementor-element elementor-element-dec7c57 elementor-widget__width-auto elementor-widget elementor-widget-button" data-id="dec7c57" data-element_type="widget" data-widget_type="button.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-button-wrapper">
                                                                    <a className="elementor-button elementor-button-link elementor-size-sm" href="https://cybertron-tech.com/amazon-alexa-event-live-latest-news-and-rumors-ahead-of-devices-and-service-announcements/">
                                                                        <span className="elementor-button-content-wrapper">
                                                                            <span className="elementor-button-text">Read more &gt;&gt;</span>
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <style id="loop-dynamic-1058" dangerouslySetInnerHTML={{ __html: ".e-loop-item-1403 .elementor-element.elementor-element-6cf45a8:not(.elementor-motion-effects-element-type-background), .e-loop-item-1403 .elementor-element.elementor-element-6cf45a8 > .elementor-motion-effects-container > .elementor-motion-effects-layer{background-image:url(\"https://cybertron-tech.com/wp-content/uploads/2025/02/ai-generated-8634900_1280.jpg\");}" }} />		<div data-elementor-type="loop-item" data-elementor-id={1058} className="elementor elementor-1058 swiper-slide e-loop-item e-loop-item-1403 post-1403 post type-post status-publish format-standard has-post-thumbnail hentry category-blog tag-latest-news swiper-slide-next" data-elementor-post-type="elementor_library" role="group" aria-roledescription="slide" data-custom-edit-handle={1} aria-label="9 / 10" data-swiper-slide-index={8} style={{ "width": "353.333px", "marginRight": "10px" }}>
                                        <div className="elementor-element elementor-element-b005434 e-flex e-con-boxed e-con e-parent" data-id="b005434" data-element_type="container">
                                            <div className="e-con-inner">
                                                <div className="elementor-element elementor-element-9c95904 e-con-full e-flex e-con e-child" data-id="9c95904" data-element_type="container">
                                                    <div className="elementor-element elementor-element-6cf45a8 e-con-full e-flex e-con e-child" data-id="6cf45a8" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                        <div className="elementor-element elementor-element-73bb0fa elementor-widget elementor-widget-spacer" data-id="73bb0fa" data-element_type="widget" data-widget_type="spacer.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-spacer">
                                                                    <div className="elementor-spacer-inner" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="elementor-element elementor-element-d7c6a63 e-con-full e-flex e-con e-child" data-id="d7c6a63" data-element_type="container">
                                                        <div className="elementor-element elementor-element-0e58752 elementor-post__title elementor-widget elementor-widget-heading" data-id={0e58752} data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-heading-title elementor-size-default"><a href="https://cybertron-tech.com/study-challenges-myths-about-cannabis-brain-health-and-iq/">Study Challenges Myths About Cannabis, Brain Health, and IQ</a></div>				</div>
                                                        </div>
                                                        <div className="elementor-element elementor-element-68f0856 elementor-post__excerpt elementor-widget elementor-widget-theme-post-excerpt" data-id="68f0856" data-element_type="widget" data-widget_type="theme-post-excerpt.default">
                                                            <div className="elementor-widget-container">
                                                                Researchers found that cannabis users experienced slightly less cognitive decline from early adulthood to late midlife compared to nonusers.				</div>
                                                        </div>
                                                        <div className="elementor-element elementor-element-dec7c57 elementor-widget__width-auto elementor-widget elementor-widget-button" data-id="dec7c57" data-element_type="widget" data-widget_type="button.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-button-wrapper">
                                                                    <a className="elementor-button elementor-button-link elementor-size-sm" href="https://cybertron-tech.com/study-challenges-myths-about-cannabis-brain-health-and-iq/">
                                                                        <span className="elementor-button-content-wrapper">
                                                                            <span className="elementor-button-text">Read more &gt;&gt;</span>
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <style id="loop-dynamic-1058" dangerouslySetInnerHTML={{ __html: ".e-loop-item-1081 .elementor-element.elementor-element-6cf45a8:not(.elementor-motion-effects-element-type-background), .e-loop-item-1081 .elementor-element.elementor-element-6cf45a8 > .elementor-motion-effects-container > .elementor-motion-effects-layer{background-image:url(\"https://cybertron-tech.com/wp-content/uploads/2025/02/WhatsApp_Image_2025-02-24_at_6.38.50_PM-removebg-preview.png\");}" }} />		<div data-elementor-type="loop-item" data-elementor-id={1058} className="elementor elementor-1058 swiper-slide e-loop-item e-loop-item-1081 post-1081 post type-post status-publish format-standard has-post-thumbnail hentry category-web-solution" data-elementor-post-type="elementor_library" role="group" aria-roledescription="slide" data-custom-edit-handle={1} aria-label="10 / 10" data-swiper-slide-index={9} style={{ "width": "353.333px", "marginRight": "10px" }}>
                                        <div className="elementor-element elementor-element-b005434 e-flex e-con-boxed e-con e-parent" data-id="b005434" data-element_type="container">
                                            <div className="e-con-inner">
                                                <div className="elementor-element elementor-element-9c95904 e-con-full e-flex e-con e-child" data-id="9c95904" data-element_type="container">
                                                    <div className="elementor-element elementor-element-6cf45a8 e-con-full e-flex e-con e-child" data-id="6cf45a8" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                        <div className="elementor-element elementor-element-73bb0fa elementor-widget elementor-widget-spacer" data-id="73bb0fa" data-element_type="widget" data-widget_type="spacer.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-spacer">
                                                                    <div className="elementor-spacer-inner" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="elementor-element elementor-element-d7c6a63 e-con-full e-flex e-con e-child" data-id="d7c6a63" data-element_type="container">
                                                        <div className="elementor-element elementor-element-0e58752 elementor-post__title elementor-widget elementor-widget-heading" data-id={0e58752} data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-heading-title elementor-size-default"><a href="https://cybertron-tech.com/secure-web-development-prevent-risks-when-changing-ownership/">Secure Web Development: Prevent Risks When Changing Ownership</a></div>				</div>
                                                        </div>
                                                        <div className="elementor-element elementor-element-68f0856 elementor-post__excerpt elementor-widget elementor-widget-theme-post-excerpt" data-id="68f0856" data-element_type="widget" data-widget_type="theme-post-excerpt.default">
                                                            <div className="elementor-widget-container">
                                                                Transferring website ownership can expose security vulnerabilities. Ensure safe transitions, protect data, and maintain website integrity with...				</div>
                                                        </div>
                                                        <div className="elementor-element elementor-element-dec7c57 elementor-widget__width-auto elementor-widget elementor-widget-button" data-id="dec7c57" data-element_type="widget" data-widget_type="button.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-button-wrapper">
                                                                    <a className="elementor-button elementor-button-link elementor-size-sm" href="https://cybertron-tech.com/secure-web-development-prevent-risks-when-changing-ownership/">
                                                                        <span className="elementor-button-content-wrapper">
                                                                            <span className="elementor-button-text">Read more &gt;&gt;</span>
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-elementor-type="loop-item" data-elementor-id={1058} className="elementor elementor-1058 swiper-slide e-loop-item e-loop-item-1553 post-1553 post type-post status-publish format-standard has-post-thumbnail hentry category-vpn tag-blog tag-cyber-security tag-vpn swiper-slide-duplicate" data-elementor-post-type="elementor_library" role="group" aria-roledescription="slide" data-custom-edit-handle={1} aria-label="1 / 10" data-swiper-slide-index={0} style={{ "width": "353.333px", "marginRight": "10px" }}>
                                        <div className="elementor-element elementor-element-b005434 e-flex e-con-boxed e-con e-parent" data-id="b005434" data-element_type="container">
                                            <div className="e-con-inner">
                                                <div className="elementor-element elementor-element-9c95904 e-con-full e-flex e-con e-child" data-id="9c95904" data-element_type="container">
                                                    <div className="elementor-element elementor-element-6cf45a8 e-con-full e-flex e-con e-child" data-id="6cf45a8" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                        <div className="elementor-element elementor-element-73bb0fa elementor-widget elementor-widget-spacer" data-id="73bb0fa" data-element_type="widget" data-widget_type="spacer.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-spacer">
                                                                    <div className="elementor-spacer-inner" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="elementor-element elementor-element-d7c6a63 e-con-full e-flex e-con e-child" data-id="d7c6a63" data-element_type="container">
                                                        <div className="elementor-element elementor-element-0e58752 elementor-post__title elementor-widget elementor-widget-heading" data-id={0e58752} data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-heading-title elementor-size-default"><a href="https://cybertron-tech.com/can-your-workplace-tell-that-youre-using-a-vpn/">Can your workplace tell that you’re using a VPN?</a></div>				</div>
                                                        </div>
                                                        <div className="elementor-element elementor-element-68f0856 elementor-post__excerpt elementor-widget elementor-widget-theme-post-excerpt" data-id="68f0856" data-element_type="widget" data-widget_type="theme-post-excerpt.default">
                                                            <div className="elementor-widget-container">
                                                                VPNs ensure secure remote work and unrestricted content access. Essential for home and business, they provide encrypted connections, protecting data while bypassing geographic restrictions effortlessly.				</div>
                                                        </div>
                                                        <div className="elementor-element elementor-element-dec7c57 elementor-widget__width-auto elementor-widget elementor-widget-button" data-id="dec7c57" data-element_type="widget" data-widget_type="button.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-button-wrapper">
                                                                    <a className="elementor-button elementor-button-link elementor-size-sm" href="https://cybertron-tech.com/can-your-workplace-tell-that-youre-using-a-vpn/">
                                                                        <span className="elementor-button-content-wrapper">
                                                                            <span className="elementor-button-text">Read more &gt;&gt;</span>
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-elementor-type="loop-item" data-elementor-id={1058} className="elementor elementor-1058 swiper-slide e-loop-item e-loop-item-1537 post-1537 post type-post status-publish format-standard has-post-thumbnail hentry category-cloud-it-solution tag-ai tag-cloud-it-solution swiper-slide-duplicate" data-elementor-post-type="elementor_library" role="group" aria-roledescription="slide" data-custom-edit-handle={1} aria-label="2 / 10" data-swiper-slide-index={1} style={{ "width": "353.333px", "marginRight": "10px" }}>
                                        <div className="elementor-element elementor-element-b005434 e-flex e-con-boxed e-con e-parent" data-id="b005434" data-element_type="container">
                                            <div className="e-con-inner">
                                                <div className="elementor-element elementor-element-9c95904 e-con-full e-flex e-con e-child" data-id="9c95904" data-element_type="container">
                                                    <div className="elementor-element elementor-element-6cf45a8 e-con-full e-flex e-con e-child" data-id="6cf45a8" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                        <div className="elementor-element elementor-element-73bb0fa elementor-widget elementor-widget-spacer" data-id="73bb0fa" data-element_type="widget" data-widget_type="spacer.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-spacer">
                                                                    <div className="elementor-spacer-inner" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="elementor-element elementor-element-d7c6a63 e-con-full e-flex e-con e-child" data-id="d7c6a63" data-element_type="container">
                                                        <div className="elementor-element elementor-element-0e58752 elementor-post__title elementor-widget elementor-widget-heading" data-id={0e58752} data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-heading-title elementor-size-default"><a href="https://cybertron-tech.com/this-ai-tool-works-overtime-so-you-dont-have-to-and-now-its-on-sale/">This AI Tool Works Overtime So You Don’t Have To (And Now It’s on Sale)</a></div>				</div>
                                                        </div>
                                                        <div className="elementor-element elementor-element-68f0856 elementor-post__excerpt elementor-widget elementor-widget-theme-post-excerpt" data-id="68f0856" data-element_type="widget" data-widget_type="theme-post-excerpt.default">
                                                            <div className="elementor-widget-container">
                                                                AI makes it easy to handle a variety of tasks with a user-friendly setup.				</div>
                                                        </div>
                                                        <div className="elementor-element elementor-element-dec7c57 elementor-widget__width-auto elementor-widget elementor-widget-button" data-id="dec7c57" data-element_type="widget" data-widget_type="button.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-button-wrapper">
                                                                    <a className="elementor-button elementor-button-link elementor-size-sm" href="https://cybertron-tech.com/this-ai-tool-works-overtime-so-you-dont-have-to-and-now-its-on-sale/">
                                                                        <span className="elementor-button-content-wrapper">
                                                                            <span className="elementor-button-text">Read more &gt;&gt;</span>
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-elementor-type="loop-item" data-elementor-id={1058} className="elementor elementor-1058 swiper-slide e-loop-item e-loop-item-1515 post-1515 post type-post status-publish format-standard has-post-thumbnail hentry category-blog tag-blog swiper-slide-duplicate" data-elementor-post-type="elementor_library" role="group" aria-roledescription="slide" data-custom-edit-handle={1} aria-label="3 / 10" data-swiper-slide-index={2} style={{ "width": "353.333px", "marginRight": "10px" }}>
                                        <div className="elementor-element elementor-element-b005434 e-flex e-con-boxed e-con e-parent" data-id="b005434" data-element_type="container">
                                            <div className="e-con-inner">
                                                <div className="elementor-element elementor-element-9c95904 e-con-full e-flex e-con e-child" data-id="9c95904" data-element_type="container">
                                                    <div className="elementor-element elementor-element-6cf45a8 e-con-full e-flex e-con e-child" data-id="6cf45a8" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                        <div className="elementor-element elementor-element-73bb0fa elementor-widget elementor-widget-spacer" data-id="73bb0fa" data-element_type="widget" data-widget_type="spacer.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-spacer">
                                                                    <div className="elementor-spacer-inner" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="elementor-element elementor-element-d7c6a63 e-con-full e-flex e-con e-child" data-id="d7c6a63" data-element_type="container">
                                                        <div className="elementor-element elementor-element-0e58752 elementor-post__title elementor-widget elementor-widget-heading" data-id={0e58752} data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-heading-title elementor-size-default"><a href="https://cybertron-tech.com/emerging-risks-your-c-suite-should-consider-now/">Emerging Risks Your C-Suite Should Consider Now</a></div>				</div>
                                                        </div>
                                                        <div className="elementor-element elementor-element-68f0856 elementor-post__excerpt elementor-widget elementor-widget-theme-post-excerpt" data-id="68f0856" data-element_type="widget" data-widget_type="theme-post-excerpt.default">
                                                            <div className="elementor-widget-container">
                                                                C-suite executives need an efficient way to drive action on emerging risks				</div>
                                                        </div>
                                                        <div className="elementor-element elementor-element-dec7c57 elementor-widget__width-auto elementor-widget elementor-widget-button" data-id="dec7c57" data-element_type="widget" data-widget_type="button.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-button-wrapper">
                                                                    <a className="elementor-button elementor-button-link elementor-size-sm" href="https://cybertron-tech.com/emerging-risks-your-c-suite-should-consider-now/">
                                                                        <span className="elementor-button-content-wrapper">
                                                                            <span className="elementor-button-text">Read more &gt;&gt;</span>
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <span className="swiper-notification" aria-live="assertive" aria-atomic="true" /></div>
                            <div className="elementor-swiper-button elementor-swiper-button-prev" role="button" tabIndex={0} aria-label="Previous slide" aria-controls="swiper-wrapper-5885dc1ffa36b014">
                                <svg aria-hidden="true" className="e-font-icon-svg e-eicon-chevron-left" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z" /></svg>			</div>
                            <div className="elementor-swiper-button elementor-swiper-button-next" role="button" tabIndex={0} aria-label="Next slide" aria-controls="swiper-wrapper-5885dc1ffa36b014">
                                <svg aria-hidden="true" className="e-font-icon-svg e-eicon-chevron-right" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z" /></svg>			</div>
                            <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"><span className="swiper-pagination-bullet" role="button" data-bullet-index={0} aria-label="Go to slide 1" /><span className="swiper-pagination-bullet" role="button" data-bullet-index={1} aria-label="Go to slide 2" /><span className="swiper-pagination-bullet" role="button" data-bullet-index={2} aria-label="Go to slide 3" /><span className="swiper-pagination-bullet" role="button" data-bullet-index={3} aria-label="Go to slide 4" /><span className="swiper-pagination-bullet" role="button" data-bullet-index={4} aria-label="Go to slide 5" /><span className="swiper-pagination-bullet" role="button" data-bullet-index={5} aria-label="Go to slide 6" /><span className="swiper-pagination-bullet" role="button" data-bullet-index={6} aria-label="Go to slide 7" /><span className="swiper-pagination-bullet swiper-pagination-bullet-active" role="button" data-bullet-index={7} aria-label="Go to slide 8" tabIndex={0} aria-current="true" /><span className="swiper-pagination-bullet" role="button" data-bullet-index={8} aria-label="Go to slide 9" /><span className="swiper-pagination-bullet" role="button" data-bullet-index={9} aria-label="Go to slide 10" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default Home;