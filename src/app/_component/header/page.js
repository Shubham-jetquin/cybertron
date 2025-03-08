'use client';

import { useState } from "react";

const Header = ({ setActiveTab }) => {
    const [openMenu, setOpenMenu] = useState(null);

    const handleMouseEnter = (menu) => {
        setOpenMenu(menu);
    };

    const handleMouseLeave = () => {
        setOpenMenu(null);
    };
    return <>
        <div data-elementor-type="header" data-elementor-id={920} className="elementor elementor-920 elementor-location-header" data-elementor-post-type="elementor_library">
            <div className="elementor-element elementor-element-7e3608e e-flex e-con-boxed e-con e-parent e-lazyloaded" data-id="7e3608e" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                <div className="e-con-inner">
                    <div className="elementor-element elementor-element-6370c0f e-con-full e-flex e-con e-child" data-id="6370c0f" data-element_type="container">
                        <a className="elementor-element elementor-element-58645a6 e-con-full e-flex e-con e-child" data-id="58645a6" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}" href="\">
                            <div className="elementor-element elementor-element-e533f5b elementor-widget elementor-widget-spacer" data-id="e533f5b" data-element_type="widget" data-widget_type="spacer.default">
                                <div className="elementor-widget-container">
                                    <div className="elementor-spacer">
                                        <div className="elementor-spacer-inner" />
                                    </div>
                                </div>
                            </div>
                        </a>
                        <div className="elementor-element elementor-element-7d24c78 e-con-full e-flex e-con e-child" data-id="7d24c78" data-element_type="container">
                            <div className="elementor-element elementor-element-c7dde8b e-full_width e-n-menu-layout-horizontal e-n-menu-tablet elementor-widget elementor-widget-n-menu" data-id="c7dde8b" data-element_type="widget" data-settings="{&quot;menu_items&quot;:[{&quot;item_title&quot;:&quot;Company&quot;,&quot;_id&quot;:&quot;ab17a65&quot;,&quot;item_dropdown_content&quot;:&quot;yes&quot;,&quot;item_link&quot;:{&quot;url&quot;:&quot;&quot;,&quot;is_external&quot;:&quot;&quot;,&quot;nofollow&quot;:&quot;&quot;,&quot;custom_attributes&quot;:&quot;&quot;},&quot;item_icon&quot;:{&quot;value&quot;:&quot;&quot;,&quot;library&quot;:&quot;&quot;},&quot;item_icon_active&quot;:null,&quot;element_id&quot;:&quot;&quot;},{&quot;item_title&quot;:&quot;Platform&quot;,&quot;_id&quot;:&quot;b5c832d&quot;,&quot;item_dropdown_content&quot;:&quot;yes&quot;,&quot;item_link&quot;:{&quot;url&quot;:&quot;&quot;,&quot;is_external&quot;:&quot;&quot;,&quot;nofollow&quot;:&quot;&quot;,&quot;custom_attributes&quot;:&quot;&quot;},&quot;item_icon&quot;:{&quot;value&quot;:&quot;&quot;,&quot;library&quot;:&quot;&quot;},&quot;item_icon_active&quot;:null,&quot;element_id&quot;:&quot;&quot;},{&quot;item_title&quot;:&quot;Services&quot;,&quot;_id&quot;:&quot;35da67f&quot;,&quot;item_dropdown_content&quot;:&quot;yes&quot;,&quot;item_link&quot;:{&quot;url&quot;:&quot;&quot;,&quot;is_external&quot;:&quot;&quot;,&quot;nofollow&quot;:&quot;&quot;,&quot;custom_attributes&quot;:&quot;&quot;},&quot;item_icon&quot;:{&quot;value&quot;:&quot;&quot;,&quot;library&quot;:&quot;&quot;},&quot;item_icon_active&quot;:null,&quot;element_id&quot;:&quot;&quot;},{&quot;item_title&quot;:&quot;Products&quot;,&quot;_id&quot;:&quot;3f64fd7&quot;,&quot;item_dropdown_content&quot;:&quot;yes&quot;,&quot;item_link&quot;:{&quot;url&quot;:&quot;&quot;,&quot;is_external&quot;:&quot;&quot;,&quot;nofollow&quot;:&quot;&quot;,&quot;custom_attributes&quot;:&quot;&quot;},&quot;item_icon&quot;:{&quot;value&quot;:&quot;&quot;,&quot;library&quot;:&quot;&quot;},&quot;item_icon_active&quot;:null,&quot;element_id&quot;:&quot;&quot;},{&quot;item_title&quot;:&quot;Brands    &quot;,&quot;item_dropdown_content&quot;:&quot;yes&quot;,&quot;_id&quot;:&quot;a43d349&quot;,&quot;item_link&quot;:{&quot;url&quot;:&quot;https:\/\/cybertron-tech.com\/brands\/&quot;,&quot;is_external&quot;:&quot;&quot;,&quot;nofollow&quot;:&quot;&quot;,&quot;custom_attributes&quot;:&quot;&quot;},&quot;item_icon&quot;:{&quot;value&quot;:&quot;&quot;,&quot;library&quot;:&quot;&quot;},&quot;item_icon_active&quot;:null,&quot;element_id&quot;:&quot;&quot;},{&quot;_id&quot;:&quot;345e6ca&quot;,&quot;item_title&quot;:&quot;Pricing&quot;,&quot;item_link&quot;:{&quot;url&quot;:&quot;https:\/\/cybertron-tech.com\/pricing\/&quot;,&quot;is_external&quot;:&quot;&quot;,&quot;nofollow&quot;:&quot;&quot;,&quot;custom_attributes&quot;:&quot;&quot;},&quot;item_dropdown_content&quot;:&quot;yes&quot;,&quot;__dynamic__&quot;:[],&quot;item_icon&quot;:{&quot;value&quot;:&quot;&quot;,&quot;library&quot;:&quot;&quot;},&quot;item_icon_active&quot;:null,&quot;element_id&quot;:&quot;&quot;}],&quot;open_animation&quot;:&quot;fadeIn&quot;,&quot;horizontal_scroll_tablet&quot;:&quot;disable&quot;,&quot;content_width&quot;:&quot;full_width&quot;,&quot;item_layout&quot;:&quot;horizontal&quot;,&quot;open_on&quot;:&quot;hover&quot;,&quot;horizontal_scroll&quot;:&quot;disable&quot;,&quot;breakpoint_selector&quot;:&quot;tablet&quot;,&quot;menu_item_title_distance_from_content&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;menu_item_title_distance_from_content_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;menu_item_title_distance_from_content_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]}}" data-widget_type="mega-menu.default">
                                <div className="elementor-widget-container">
                                    <nav className="e-n-menu" data-widget-number={209} aria-label="Menu 1" data-touch-mode="true" data-layout="horizontal">
                                        <button className="e-n-menu-toggle" id="menu-toggle-209" aria-haspopup="true" aria-expanded="false" aria-controls="menubar-209" aria-label="Menu Toggle">
                                            <span className="e-n-menu-toggle-icon e-open">
                                                <svg className="e-font-icon-svg e-eicon-menu-bar" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M104 333H896C929 333 958 304 958 271S929 208 896 208H104C71 208 42 237 42 271S71 333 104 333ZM104 583H896C929 583 958 554 958 521S929 458 896 458H104C71 458 42 487 42 521S71 583 104 583ZM104 833H896C929 833 958 804 958 771S929 708 896 708H104C71 708 42 737 42 771S71 833 104 833Z" /></svg>			</span>
                                            <span className="e-n-menu-toggle-icon e-close">
                                                <svg className="e-font-icon-svg e-eicon-close" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z" /></svg>
                                            </span>
                                        </button>
                                        <div className="e-n-menu-wrapper" id="menubar-209" aria-labelledby="menu-toggle-209" style={{ "--stretch-width": "1561px", "--stretch-left": "-431.484375px" }}>
                                            <ul className="e-n-menu-heading" style={{ display: "flex", justifyContent: "center", listStyle: "none", padding: 0 }}>
                                                <li className="e-n-menu-item" onMouseEnter={() => handleMouseEnter("company")}
                                                    onMouseLeave={handleMouseLeave}>
                                                    <div id="e-n-menu-title-2091" className="e-n-menu-title">
                                                        <div className="e-n-menu-title-container">												<span className="e-n-menu-title-text">
                                                            Company						</span>
                                                        </div>
                                                        <button id="e-n-menu-dropdown-icon-2091" className="e-n-menu-dropdown-icon e-focus" data-tab-index={1} aria-haspopup="true" aria-expanded="false" aria-controls="e-n-menu-content-2091" data-focus-index={1}>

                                                            {openMenu === "company" ? (
                                                                <span className="e-n-menu-dropdown-icon-opened">▲</span>
                                                            ) : (
                                                                <span className="e-n-menu-dropdown-icon-closed">▼</span>
                                                            )}
                                                        </button>
                                                    </div>
                                                    <div className={`e-n-menu-content ${openMenu === "company" ? "e-active" : ""}`}>
                                                        <div id="e-n-menu-content-2091" data-tab-index={1} aria-labelledby="e-n-menu-dropdown-icon-2091" className={`elementor-element elementor-element-678d33b e-flex e-con-boxed e-con e-child animated fadeIn ${openMenu === "company" ? "e-active" : ""}`} data-id="678d33b" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                            <div className="e-con-inner">
                                                                <div className="elementor-element elementor-element-3573b72 e-con-full e-flex e-con e-child" data-id="3573b72" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                                    <div className="elementor-element elementor-element-6eb01e7 e-con-full e-flex e-con e-child" data-id="6eb01e7" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                                        <div className="elementor-element elementor-element-3ceb22c elementor-widget elementor-widget-heading" data-id="3ceb22c" data-element_type="widget" data-widget_type="heading.default">
                                                                            <div className="elementor-widget-container">
                                                                                <h2 className="elementor-heading-title elementor-size-default">Innovative Digital Solutions to Empower Your Business</h2>				</div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="elementor-element elementor-element-c56bc12 e-con-full e-flex e-con e-child" data-id="c56bc12" data-element_type="container">
                                                                        <a className="elementor-element elementor-element-293b11a e-con-full e-flex e-con e-child" data-id="293b11a" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}" href="/home/aboutus/">
                                                                            <div className="elementor-element elementor-element-048135d elementor-widget elementor-widget-heading" data-id="048135d" data-element_type="widget" data-widget_type="heading.default">
                                                                                <div className="elementor-widget-container">
                                                                                    <h2 className="elementor-heading-title elementor-size-default">About Us</h2>				</div>
                                                                            </div>
                                                                            <div className="elementor-element elementor-element-5d0fe2e elementor-widget elementor-widget-heading" data-id="5d0fe2e" data-element_type="widget" data-widget_type="heading.default">
                                                                                <div className="elementor-widget-container">
                                                                                    <h2 className="elementor-heading-title elementor-size-default">The Journey Behind Cybertron’s Innovation</h2>				</div>
                                                                            </div>
                                                                        </a>
                                                                        <a className="elementor-element elementor-element-01a5bcb e-con-full e-flex e-con e-child" data-id="01a5bcb" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}" href="/home/careers/">
                                                                            <div className="elementor-element elementor-element-9682119 elementor-widget elementor-widget-heading" data-id={9682119} data-element_type="widget" data-widget_type="heading.default">
                                                                                <div className="elementor-widget-container">
                                                                                    <h2 className="elementor-heading-title elementor-size-default">Careers</h2>				</div>
                                                                            </div>
                                                                            <div className="elementor-element elementor-element-edb666f elementor-widget elementor-widget-heading" data-id="edb666f" data-element_type="widget" data-widget_type="heading.default">
                                                                                <div className="elementor-widget-container">
                                                                                    <h2 className="elementor-heading-title elementor-size-default">Meet, work &amp; network with innovative minds</h2>				</div>
                                                                            </div>
                                                                        </a>
                                                                        <a className="elementor-element elementor-element-88b997e e-con-full e-flex e-con e-child" data-id="88b997e" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}" href="#">
                                                                            <div className="elementor-element elementor-element-9e4e41f elementor-widget elementor-widget-heading" data-id="9e4e41f" data-element_type="widget" data-widget_type="heading.default">
                                                                                <div className="elementor-widget-container">
                                                                                    <h2 className="elementor-heading-title elementor-size-default">Innovation Hub</h2>				</div>
                                                                            </div>
                                                                            <div className="elementor-element elementor-element-a0f6596 elementor-widget elementor-widget-heading" data-id="a0f6596" data-element_type="widget" data-widget_type="heading.default">
                                                                                <div className="elementor-widget-container">
                                                                                    <h2 className="elementor-heading-title elementor-size-default">Finely-curated Latest Updates, Insights &amp; Innovations
                                                                                    </h2>				</div>
                                                                            </div>
                                                                        </a>
                                                                        <a className="elementor-element elementor-element-b8a3f10 e-con-full e-flex e-con e-child" data-id="b8a3f10" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}" href="https://cybertron-tech.com/contact/">
                                                                            <div className="elementor-element elementor-element-c28331b elementor-widget elementor-widget-heading" data-id="c28331b" data-element_type="widget" data-widget_type="heading.default">
                                                                                <div className="elementor-widget-container">
                                                                                    <h2 className="elementor-heading-title elementor-size-default">Request a callback</h2>				</div>
                                                                            </div>
                                                                            <div className="elementor-element elementor-element-1cb5dec elementor-widget elementor-widget-heading" data-id="1cb5dec" data-element_type="widget" data-widget_type="heading.default">
                                                                                <div className="elementor-widget-container">
                                                                                    <h2 className="elementor-heading-title elementor-size-default">Have Questions? We’re Here to Talk!
                                                                                    </h2>				</div>
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="e-n-menu-item" onMouseEnter={() => handleMouseEnter("platform")}
                                                    onMouseLeave={handleMouseLeave}>
                                                    <div id="e-n-menu-title-2092" className="e-n-menu-title">
                                                        <div className="e-n-menu-title-container">												<span className="e-n-menu-title-text">
                                                            Platform						</span>
                                                        </div>
                                                        <button id="e-n-menu-dropdown-icon-2092" className="e-n-menu-dropdown-icon e-focus" data-tab-index={2} aria-haspopup="true" aria-expanded="false" aria-controls="e-n-menu-content-2092" data-focus-index={2}>
                                                            {openMenu === "platform" ? (
                                                                <span className="e-n-menu-dropdown-icon-opened">▲</span>
                                                            ) : (
                                                                <span className="e-n-menu-dropdown-icon-closed">▼</span>
                                                            )}
                                                        </button>
                                                    </div>
                                                    <div className={`e-n-menu-content ${openMenu === "platform" ? "e-active" : ""}`}>
                                                        <div id="e-n-menu-content-2092" data-tab-index={2} aria-labelledby="e-n-menu-dropdown-icon-2092" className={`elementor-element elementor-element-678d33b e-flex e-con-boxed e-con e-child animated fadeIn ${openMenu === "platform" ? "e-active" : ""}`} data-id="df52d40" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                            <div className="e-con-inner">
                                                                <div className="elementor-element elementor-element-ef57c45 e-con-full e-flex e-con e-child" data-id="ef57c45" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                                    <div className="elementor-element elementor-element-8189d36 e-con-full e-flex e-con e-child" data-id="8189d36" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                                        <div className="elementor-element elementor-element-eabfb30 elementor-widget elementor-widget-heading" data-id="eabfb30" data-element_type="widget" data-widget_type="heading.default">
                                                                            <div className="elementor-widget-container">
                                                                                <h2 className="elementor-heading-title elementor-size-default">Dedicated platforms for self-manage and enterprise.</h2>				</div>
                                                                        </div>
                                                                        <div className="elementor-element elementor-element-cb72994 elementor-widget elementor-widget-text-editor" data-id="cb72994" data-element_type="widget" data-widget_type="text-editor.default">
                                                                            <div className="elementor-widget-container">
                                                                                <p><span style={{ "fontWeight": "400" }}>Strategize,Streamline, and Safeguard your data in the fast-paced digital world.</span></p>								</div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="elementor-element elementor-element-8125114 e-con-full e-flex e-con e-child" data-id={8125114} data-element_type="container">
                                                                        <div className="elementor-element elementor-element-286eeac e-con-full e-flex e-con e-child" data-id="286eeac" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                                            <div className="elementor-element elementor-element-d452d4f elementor-widget elementor-widget-heading" data-id="d452d4f" data-element_type="widget" data-widget_type="heading.default">
                                                                                <div className="elementor-widget-container">
                                                                                    <h2 className="elementor-heading-title elementor-size-default">Web &amp; Software Development </h2>				</div>
                                                                            </div>
                                                                            <a className="elementor-element elementor-element-fabda41 e-con-full e-flex e-con e-child" data-id="fabda41" data-element_type="container" href="https://cybertron-tech.com/wordpress/">
                                                                                <div className="elementor-element elementor-element-18c9a3c elementor-position-left elementor-vertical-align-middle elementor-mobile-position-left elementor-view-default elementor-widget elementor-widget-icon-box" data-id="18c9a3c" data-element_type="widget" data-widget_type="icon-box.default">
                                                                                    <div className="elementor-widget-container">
                                                                                        <div className="elementor-icon-box-wrapper">
                                                                                            <div className="elementor-icon-box-icon">
                                                                                                <span className="elementor-icon">
                                                                                                    <svg aria-hidden="true" className="e-font-icon-svg e-fab-wordpress-simple" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119.3 8 8 119.2 8 256c0 136.7 111.3 248 248 248s248-111.3 248-248C504 119.2 392.7 8 256 8zM33 256c0-32.3 6.9-63 19.3-90.7l106.4 291.4C84.3 420.5 33 344.2 33 256zm223 223c-21.9 0-43-3.2-63-9.1l66.9-194.4 68.5 187.8c.5 1.1 1 2.1 1.6 3.1-23.1 8.1-48 12.6-74 12.6zm30.7-327.5c13.4-.7 25.5-2.1 25.5-2.1 12-1.4 10.6-19.1-1.4-18.4 0 0-36.1 2.8-59.4 2.8-21.9 0-58.7-2.8-58.7-2.8-12-.7-13.4 17.7-1.4 18.4 0 0 11.4 1.4 23.4 2.1l34.7 95.2L200.6 393l-81.2-241.5c13.4-.7 25.5-2.1 25.5-2.1 12-1.4 10.6-19.1-1.4-18.4 0 0-36.1 2.8-59.4 2.8-4.2 0-9.1-.1-14.4-.3C109.6 73 178.1 33 256 33c58 0 110.9 22.2 150.6 58.5-1-.1-1.9-.2-2.9-.2-21.9 0-37.4 19.1-37.4 39.6 0 18.4 10.6 33.9 21.9 52.3 8.5 14.8 18.4 33.9 18.4 61.5 0 19.1-7.3 41.2-17 72.1l-22.2 74.3-80.7-239.6zm81.4 297.2l68.1-196.9c12.7-31.8 17-57.2 17-79.9 0-8.2-.5-15.8-1.5-22.9 17.4 31.8 27.3 68.2 27.3 107 0 82.3-44.6 154.1-110.9 192.7z" /></svg>				</span>
                                                                                            </div>
                                                                                            <div className="elementor-icon-box-content">
                                                                                                <h3 className="elementor-icon-box-title">
                                                                                                    <span>
                                                                                                        Wordpress						</span>
                                                                                                </h3>
                                                                                                <p className="elementor-icon-box-description">
                                                                                                    The world’s leading CMS for website creation.					</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </a>
                                                                            <a className="elementor-element elementor-element-b976b6a e-con-full e-flex e-con e-child" data-id="b976b6a" data-element_type="container" href="https://cybertron-tech.com/wordpress/">
                                                                                <div className="elementor-element elementor-element-4629631 elementor-position-left elementor-vertical-align-middle elementor-mobile-position-left elementor-vertical-align-middle elementor-view-default elementor-widget elementor-widget-icon-box" data-id={4629631} data-element_type="widget" data-widget_type="icon-box.default">
                                                                                    <div className="elementor-widget-container">
                                                                                        <div className="elementor-icon-box-wrapper">
                                                                                            <div className="elementor-icon-box-icon">
                                                                                                <span className="elementor-icon">
                                                                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#0FC7AA" id="Layer_1" width="800px" height="800px" viewBox="0 0 70 70" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <g> <path d="M63.421,2.583h-57c-2.209,0-3.838,1.544-3.838,3.753v57c0,2.209,2.629,3.247,4.838,3.247h56 c2.209,0,3.162-1.038,3.162-3.247v-56C66.583,5.127,65.63,2.583,63.421,2.583z M62.583,6.583v8h-56v-8H62.583z M6.583,62.583v-46 h56v46H6.583z" /> <path d="M10,11.583h2c0.553,0,1-0.447,1-1s-0.447-1-1-1h-2c-0.553,0-1,0.447-1,1S9.447,11.583,10,11.583z" /> <path d="M16,11.583h2c0.553,0,1-0.447,1-1s-0.447-1-1-1h-2c-0.553,0-1,0.447-1,1S15.447,11.583,16,11.583z" /> <path d="M22,11.583h2c0.553,0,1-0.447,1-1s-0.447-1-1-1h-2c-0.553,0-1,0.447-1,1S21.447,11.583,22,11.583z" /> <path d="M26.583,21.583c0-0.552-0.448-1-1-1h-14c-0.552,0-1,0.448-1,1v26c0,0.553,0.448,1,1,1h14c0.552,0,1-0.447,1-1V21.583z M24.583,43.954l-4.672-8.677l4.672-8.677V43.954z M24.084,46.583H13.599l5.243-9.736L24.084,46.583z M18.842,32.875L13.3,22.583 h11.083L18.842,32.875z M17.772,35.277l-5.189,9.638V25.641L17.772,35.277z" /> <path d="M59.583,21.583c0-0.552-0.447-1-1-1h-28c-0.552,0-1,0.448-1,1v26c0,0.553,0.448,1,1,1h28c0.553,0,1-0.447,1-1V21.583z M31.583,23.872l11.999,11.345L31.583,46.357V23.872z M33.472,22.583h23.266L45,33.482L33.472,22.583z M44.988,36.129 l11.057,10.454H33.729L44.988,36.129z M46.406,35.229l11.177-10.377v20.944L46.406,35.229z" /> <path d="M59.583,52.583c0-0.553-0.447-1-1-1h-47c-0.552,0-1,0.447-1,1v7c0,0.553,0.448,1,1,1h47c0.553,0,1-0.447,1-1V52.583z M57.583,58.583h-45v-5h45V58.583z" /> </g> </g></svg>				</span>
                                                                                            </div>
                                                                                            <div className="elementor-icon-box-content">
                                                                                                <h3 className="elementor-icon-box-title">
                                                                                                    <span>
                                                                                                        React | Angular | Vue.js 						</span>
                                                                                                </h3>
                                                                                                <p className="elementor-icon-box-description">
                                                                                                    Powerful front-end frameworks for interactive web apps.					</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </a>
                                                                            <div className="elementor-element elementor-element-c7977d3 elementor-position-left elementor-vertical-align-middle elementor-mobile-position-left elementor-vertical-align-middle elementor-view-default elementor-widget elementor-widget-icon-box" data-id="c7977d3" data-element_type="widget" data-widget_type="icon-box.default">
                                                                                <div className="elementor-widget-container">
                                                                                    <div className="elementor-icon-box-wrapper">
                                                                                        <div className="elementor-icon-box-icon">
                                                                                            <a href="https://cybertron-tech.com/django-laravel-node-js/" className="elementor-icon" tabIndex={-1} aria-label="Django | Laravel | Node.js">
                                                                                                <svg aria-hidden="true" className="e-font-icon-svg e-fas-database" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z" /></svg>				</a>
                                                                                        </div>
                                                                                        <div className="elementor-icon-box-content">
                                                                                            <h3 className="elementor-icon-box-title">
                                                                                                <a href="https://cybertron-tech.com/django-laravel-node-js/">
                                                                                                    Django | Laravel | Node.js						</a>
                                                                                            </h3>
                                                                                            <p className="elementor-icon-box-description">
                                                                                                Robust back-end frameworks for scalable software.					</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="elementor-element elementor-element-6f5223d elementor-position-left elementor-vertical-align-middle elementor-mobile-position-left elementor-vertical-align-middle elementor-view-default elementor-widget elementor-widget-icon-box" data-id="6f5223d" data-element_type="widget" data-widget_type="icon-box.default">
                                                                                <div className="elementor-widget-container">
                                                                                    <div className="elementor-icon-box-wrapper">
                                                                                        <div className="elementor-icon-box-icon">
                                                                                            <a href="https://cybertron-tech.com/github-gitlab-bitbucket/" className="elementor-icon" tabIndex={-1} aria-label="GitHub | GitLab | Bitbucket ">
                                                                                                <svg aria-hidden="true" className="e-font-icon-svg e-fab-github-square" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z" /></svg>				</a>
                                                                                        </div>
                                                                                        <div className="elementor-icon-box-content">
                                                                                            <h3 className="elementor-icon-box-title">
                                                                                                <a href="https://cybertron-tech.com/github-gitlab-bitbucket/">
                                                                                                    GitHub | GitLab | Bitbucket 						</a>
                                                                                            </h3>
                                                                                            <p className="elementor-icon-box-description">
                                                                                                Version control &amp; collaboration for software development.					</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="elementor-element elementor-element-df6a04e e-con-full e-flex e-con e-child" data-id="df6a04e" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                                            <div className="elementor-element elementor-element-e8d1cab elementor-widget elementor-widget-heading" data-id="e8d1cab" data-element_type="widget" data-widget_type="heading.default">
                                                                                <div className="elementor-widget-container">
                                                                                    <h2 className="elementor-heading-title elementor-size-default">Cyber Security </h2>				</div>
                                                                            </div>
                                                                            <div className="elementor-element elementor-element-82b0796 elementor-position-left elementor-vertical-align-middle elementor-mobile-position-left elementor-vertical-align-middle elementor-view-default elementor-widget elementor-widget-icon-box" data-id="82b0796" data-element_type="widget" data-widget_type="icon-box.default">
                                                                                <div className="elementor-widget-container">
                                                                                    <div className="elementor-icon-box-wrapper">
                                                                                        <div className="elementor-icon-box-icon">
                                                                                            <a href="https://cybertron-tech.com/cloudflare/" className="elementor-icon" tabIndex={-1} aria-label="Cloudflare ">
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" aria-label="Cloudflare" viewBox="0 0 512 512" width="800px" height="800px" fill="#14b69e" stroke="#14b69e"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"><rect width={512} height={512} rx="15%" fill="#ffffff" /><path fill="#14b69e" d="M331 326c11-26-4-38-19-38l-148-2c-4 0-4-6 1-7l150-2c17-1 37-15 43-33 0 0 10-21 9-24a97 97 0 0 0-187-11c-38-25-78 9-69 46-48 3-65 46-60 72 0 1 1 2 3 2h274c1 0 3-1 3-3z" /><path fill="#14b69e" d="M381 224c-4 0-6-1-7 1l-5 21c-5 16 3 30 20 31l32 2c4 0 4 6-1 7l-33 1c-36 4-46 39-46 39 0 2 0 3 2 3h113l3-2a81 81 0 0 0-78-103" /></g></svg>				</a>
                                                                                        </div>
                                                                                        <div className="elementor-icon-box-content">
                                                                                            <h3 className="elementor-icon-box-title">
                                                                                                <a href="https://cybertron-tech.com/cloudflare/">
                                                                                                    Cloudflare 						</a>
                                                                                            </h3>
                                                                                            <p className="elementor-icon-box-description">
                                                                                                Website security, performance, and DDoS protection
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="elementor-element elementor-element-5186627 elementor-position-left elementor-vertical-align-middle elementor-mobile-position-left elementor-vertical-align-middle elementor-view-default elementor-widget elementor-widget-icon-box" data-id={5186627} data-element_type="widget" data-widget_type="icon-box.default">
                                                                                <div className="elementor-widget-container">
                                                                                    <div className="elementor-icon-box-wrapper">
                                                                                        <div className="elementor-icon-box-icon">
                                                                                            <a href="https://cybertron-tech.com/palo-alto-networks/" className="elementor-icon" tabIndex={-1} aria-label="Palo Alto Networks ">
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 1024 1024" fill="#14b69e" stroke="#14b69e"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"><circle cx={512} cy={512} r={512} style={{ "fill": "#14b69e" }} /><path d="M592.93 310.51 512.42 391l40 40.06L350.58 633l80.51 80.51L511.6 633l-40-40 201.84-202zM230 512.4l201.89-201.89L512.41 391l-201.9 201.91zM511.59 633l201.9-201.91L794 511.6 592.11 713.49z" style={{ "fill": "#fff" }} /></g></svg>				</a>
                                                                                        </div>
                                                                                        <div className="elementor-icon-box-content">
                                                                                            <h3 className="elementor-icon-box-title">
                                                                                                <a href="https://cybertron-tech.com/palo-alto-networks/">
                                                                                                    Palo Alto Networks 						</a>
                                                                                            </h3>
                                                                                            <p className="elementor-icon-box-description">
                                                                                                Advanced network security solutions.					</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="elementor-element elementor-element-da92921 elementor-position-left elementor-vertical-align-middle elementor-mobile-position-left elementor-vertical-align-middle elementor-view-default elementor-widget elementor-widget-icon-box" data-id="da92921" data-element_type="widget" data-widget_type="icon-box.default">
                                                                                <div className="elementor-widget-container">
                                                                                    <div className="elementor-icon-box-wrapper">
                                                                                        <div className="elementor-icon-box-icon">
                                                                                            <a href="https://cybertron-tech.com/cisco-security/" className="elementor-icon" tabIndex={-1} aria-label="Cisco Security ">
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 1024 1024" fill="#14b69e" stroke="#14b69e"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"><circle cx={512} cy={512} r={512} style={{ "fill": "#14b69e" }} /><path d="M592.93 310.51 512.42 391l40 40.06L350.58 633l80.51 80.51L511.6 633l-40-40 201.84-202zM230 512.4l201.89-201.89L512.41 391l-201.9 201.91zM511.59 633l201.9-201.91L794 511.6 592.11 713.49z" style={{ "fill": "#fff" }} /></g></svg>				</a>
                                                                                        </div>
                                                                                        <div className="elementor-icon-box-content">
                                                                                            <h3 className="elementor-icon-box-title">
                                                                                                <a href="https://cybertron-tech.com/cisco-security/">
                                                                                                    Cisco Security 						</a>
                                                                                            </h3>
                                                                                            <p className="elementor-icon-box-description">
                                                                                                Enterprise-grade cybersecurity and threat management.					</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="elementor-element elementor-element-57c295b elementor-position-left elementor-vertical-align-middle elementor-mobile-position-left elementor-vertical-align-middle elementor-view-default elementor-widget elementor-widget-icon-box" data-id="57c295b" data-element_type="widget" data-widget_type="icon-box.default">
                                                                                <div className="elementor-widget-container">
                                                                                    <div className="elementor-icon-box-wrapper">

                                                                                        <div className="elementor-icon-box-content">
                                                                                            <h3 className="elementor-icon-box-title">
                                                                                                <a href="https://cybertron-tech.com/splunk-ibm-qradar/">
                                                                                                    Splunk | IBM QRadar						</a>
                                                                                            </h3>
                                                                                            <p className="elementor-icon-box-description">
                                                                                                SIEM solutions for real-time threat detection.					</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="elementor-element elementor-element-cbeb568 elementor-position-left elementor-vertical-align-middle elementor-mobile-position-left elementor-vertical-align-middle elementor-view-default elementor-widget elementor-widget-icon-box" data-id="cbeb568" data-element_type="widget" data-widget_type="icon-box.default">
                                                                                <div className="elementor-widget-container">
                                                                                    <div className="elementor-icon-box-wrapper">
                                                                                        <div className="elementor-icon-box-icon">
                                                                                            <a href="https://cybertron-tech.com/fortinet-check-point/" className="elementor-icon" tabIndex={-1} aria-label="Fortinet | Check Point">
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="#14b69e" width="800px" height="800px" viewBox="0 0 24 24"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"><title>Fortinet icon</title><path d="M0 9.785h6.788v4.454H0zm8.666-6.33h6.668v4.453H8.666zm0 12.637h6.668v4.454H8.666zm8.522-6.307H24v4.454h-6.812zM2.792 3.455C1.372 3.814.265 5.404 0 7.425v.506h6.788V3.454zM0 16.091v.554c.24 1.926 1.276 3.466 2.624 3.9h4.188v-4.454zm24-8.184v-.506c-.265-1.998-1.372-3.587-2.792-3.972h-4.02v4.454H24zM21.376 20.57c1.324-.458 2.36-1.974 2.624-3.9v-.554h-6.812v4.454Z" /></g></svg>				</a>
                                                                                        </div>
                                                                                        <div className="elementor-icon-box-content">
                                                                                            <h3 className="elementor-icon-box-title">
                                                                                                <a href="https://cybertron-tech.com/fortinet-check-point/">
                                                                                                    Fortinet | Check Point						</a>
                                                                                            </h3>
                                                                                            <p className="elementor-icon-box-description">
                                                                                                Comprehensive firewall and endpoint security.					</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="elementor-element elementor-element-dc80548 elementor-position-left elementor-vertical-align-middle elementor-mobile-position-left elementor-vertical-align-middle elementor-view-default elementor-widget elementor-widget-icon-box" data-id="dc80548" data-element_type="widget" data-widget_type="icon-box.default">
                                                                                <div className="elementor-widget-container">
                                                                                    <div className="elementor-icon-box-wrapper">
                                                                                        <div className="elementor-icon-box-icon">
                                                                                            <a href="https://cybertron-tech.com/trend-micro-symantec/" className="elementor-icon" tabIndex={-1} aria-label="Trend Micro | Symantec ">
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" clipRule="evenodd" d="M5 5C5 4.44772 4.55228 4 4 4C3.44772 4 3 4.44772 3 5L3 13.9998C3 13.9999 3 14.0001 3 14.0002V19C3 19.5523 3.44772 20 4 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V14.4142L9 10.4142L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071L19 8.41421V11C19 11.5523 19.4477 12 20 12C20.5523 12 21 11.5523 21 11V6C21 5.44772 20.5523 5 20 5H15C14.4477 5 14 5.44772 14 6C14 6.55228 14.4477 7 15 7H17.5858L13 11.5858L9.70711 8.29289C9.31658 7.90237 8.68342 7.90237 8.29289 8.29289L5 11.5858V5Z" fill="#14b69e" /></g></svg>				</a>
                                                                                        </div>
                                                                                        <div className="elementor-icon-box-content">
                                                                                            <h3 className="elementor-icon-box-title">
                                                                                                <a href="https://cybertron-tech.com/trend-micro-symantec/">
                                                                                                    Trend Micro | Symantec 						</a>
                                                                                            </h3>
                                                                                            <p className="elementor-icon-box-description">
                                                                                                Next-gen antivirus &amp; endpoint protection.					</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="elementor-element elementor-element-4cec6eb elementor-position-left elementor-vertical-align-middle elementor-mobile-position-left elementor-vertical-align-middle elementor-view-default elementor-widget elementor-widget-icon-box" data-id="4cec6eb" data-element_type="widget" data-widget_type="icon-box.default">
                                                                                <div className="elementor-widget-container">
                                                                                    <div className="elementor-icon-box-wrapper">
                                                                                        <div className="elementor-icon-box-icon">
                                                                                            <a href="https://cybertron-tech.com/lastpass-1password/" className="elementor-icon" tabIndex={-1} aria-label="LastPass | 1Password ">
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" clipRule="evenodd" d="M5.25 10.0546V8C5.25 4.27208 8.27208 1.25 12 1.25C15.7279 1.25 18.75 4.27208 18.75 8V10.0546C19.8648 10.1379 20.5907 10.348 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16C2 13.1716 2 11.7574 2.87868 10.8787C3.40931 10.348 4.13525 10.1379 5.25 10.0546ZM6.75 8C6.75 5.10051 9.10051 2.75 12 2.75C14.8995 2.75 17.25 5.10051 17.25 8V10.0036C16.867 10 16.4515 10 16 10H8C7.54849 10 7.13301 10 6.75 10.0036V8Z" fill="#0EC9AC" /></g></svg>				</a>
                                                                                        </div>
                                                                                        <div className="elementor-icon-box-content">
                                                                                            <h3 className="elementor-icon-box-title">
                                                                                                <a href="https://cybertron-tech.com/lastpass-1password/">
                                                                                                    LastPass | 1Password 						</a>
                                                                                            </h3>
                                                                                            <p className="elementor-icon-box-description">
                                                                                                Secure password management solutions.					</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="elementor-element elementor-element-4c43c5b e-con-full e-flex e-con e-child" data-id="4c43c5b" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                                            <div className="elementor-element elementor-element-c539518 elementor-widget elementor-widget-heading" data-id="c539518" data-element_type="widget" data-widget_type="heading.default">
                                                                                <div className="elementor-widget-container">
                                                                                    <h2 className="elementor-heading-title elementor-size-default">Online Reputation Management </h2>				</div>
                                                                            </div>
                                                                            <div className="elementor-element elementor-element-912cd83 elementor-position-left elementor-vertical-align-middle elementor-mobile-position-left elementor-vertical-align-middle elementor-view-default elementor-widget elementor-widget-icon-box" data-id="912cd83" data-element_type="widget" data-widget_type="icon-box.default">
                                                                                <div className="elementor-widget-container">
                                                                                    <div className="elementor-icon-box-wrapper">
                                                                                        <div className="elementor-icon-box-icon">
                                                                                            <a href="https://cybertron-tech.com/hubspot/" className="elementor-icon" tabIndex={-1} aria-label="HubSpot ">
                                                                                                <svg aria-hidden="true" className="e-font-icon-svg e-fab-hubspot" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M267.4 211.6c-25.1 23.7-40.8 57.3-40.8 94.6 0 29.3 9.7 56.3 26 78L203.1 434c-4.4-1.6-9.1-2.5-14-2.5-10.8 0-20.9 4.2-28.5 11.8-7.6 7.6-11.8 17.8-11.8 28.6s4.2 20.9 11.8 28.5c7.6 7.6 17.8 11.6 28.5 11.6 10.8 0 20.9-3.9 28.6-11.6 7.6-7.6 11.8-17.8 11.8-28.5 0-4.2-.6-8.2-1.9-12.1l50-50.2c22 16.9 49.4 26.9 79.3 26.9 71.9 0 130-58.3 130-130.2 0-65.2-47.7-119.2-110.2-128.7V116c17.5-7.4 28.2-23.8 28.2-42.9 0-26.1-20.9-47.9-47-47.9S311.2 47 311.2 73.1c0 19.1 10.7 35.5 28.2 42.9v61.2c-15.2 2.1-29.6 6.7-42.7 13.6-27.6-20.9-117.5-85.7-168.9-124.8 1.2-4.4 2-9 2-13.8C129.8 23.4 106.3 0 77.4 0 48.6 0 25.2 23.4 25.2 52.2c0 28.9 23.4 52.3 52.2 52.3 9.8 0 18.9-2.9 26.8-7.6l163.2 114.7zm89.5 163.6c-38.1 0-69-30.9-69-69s30.9-69 69-69 69 30.9 69 69-30.9 69-69 69z" /></svg>				</a>
                                                                                        </div>
                                                                                        <div className="elementor-icon-box-content">
                                                                                            <h3 className="elementor-icon-box-title">
                                                                                                <a href="https://cybertron-tech.com/hubspot/">
                                                                                                    HubSpot 						</a>
                                                                                            </h3>
                                                                                            <p className="elementor-icon-box-description">
                                                                                                All-in-one inbound marketing, sales, and CRM platform.					</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="elementor-element elementor-element-99512f9 elementor-position-left elementor-vertical-align-middle elementor-mobile-position-left elementor-vertical-align-middle elementor-view-default elementor-widget elementor-widget-icon-box" data-id="99512f9" data-element_type="widget" data-widget_type="icon-box.default">
                                                                                <div className="elementor-widget-container">
                                                                                    <div className="elementor-icon-box-wrapper">

                                                                                        <div className="elementor-icon-box-content">
                                                                                            <h3 className="elementor-icon-box-title">
                                                                                                <a href="https://cybertron-tech.com/semrush-ahrefs/">
                                                                                                    SEMrush | Ahrefs 						</a>
                                                                                            </h3>
                                                                                            <p className="elementor-icon-box-description">
                                                                                                SEO &amp; content marketing powerhouse for visibility					</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="elementor-element elementor-element-39b73e6 elementor-position-left elementor-vertical-align-middle elementor-mobile-position-left elementor-vertical-align-middle elementor-view-default elementor-widget elementor-widget-icon-box" data-id="39b73e6" data-element_type="widget" data-widget_type="icon-box.default">
                                                                                <div className="elementor-widget-container">
                                                                                    <div className="elementor-icon-box-wrapper">
                                                                                        <div className="elementor-icon-box-icon">
                                                                                            <a href="https://cybertron-tech.com/mailchimp-klaviyo/" className="elementor-icon" tabIndex={-1} aria-label="Mailchimp | Klaviyo ">
                                                                                                <i aria-hidden="true" className="icon icon-mail" />				</a>
                                                                                        </div>
                                                                                        <div className="elementor-icon-box-content">
                                                                                            <h3 className="elementor-icon-box-title">
                                                                                                <a href="https://cybertron-tech.com/mailchimp-klaviyo/">
                                                                                                    Mailchimp | Klaviyo 						</a>
                                                                                            </h3>
                                                                                            <p className="elementor-icon-box-description">
                                                                                                Email marketing and automation made it simple.
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="elementor-element elementor-element-e181868 elementor-position-left elementor-vertical-align-middle elementor-mobile-position-left elementor-vertical-align-middle elementor-view-default elementor-widget elementor-widget-icon-box" data-id="e181868" data-element_type="widget" data-widget_type="icon-box.default">
                                                                                <div className="elementor-widget-container">
                                                                                    <div className="elementor-icon-box-wrapper">
                                                                                        <div className="elementor-icon-box-icon">
                                                                                            <a href="https://cybertron-tech.com/hootsuite-buffer/" className="elementor-icon" tabIndex={-1} aria-label="Hootsuite | Buffer ">
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#0EC9AC" height="800px" width="800px" id="Layer_1" viewBox="0 0 512 512" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M434.424,38.788c-48.457,0-90.491,27.93-110.921,68.521c-21.74-4.257-44.4-6.461-67.503-6.461s-45.763,2.203-67.503,6.461 c-20.43-40.591-62.464-68.521-110.921-68.521H54.303v102.906c16.908-6.339,35.207-9.815,54.303-9.815 c68.636,0,126.995,44.803,147.394,106.698c20.399-61.895,78.758-106.698,147.394-106.698c19.098,0,37.395,3.475,54.303,9.815 V38.788H434.424z" /> </g> </g> <g> <g> <path d="M403.394,178.424c-59.885,0-108.606,48.721-108.606,108.606h-77.576c0-59.885-48.721-108.606-108.606-108.606 S0,227.145,0,287.03c0,51.329,27.733,99.008,78.091,134.26c47.832,33.482,111.016,51.921,177.909,51.921 s130.077-18.44,177.909-51.921C484.267,386.039,512,338.359,512,287.03C512,227.145,463.279,178.424,403.394,178.424z M108.606,349.091c-34.22,0-62.061-27.84-62.061-62.061s27.84-62.061,62.061-62.061s62.061,27.84,62.061,62.061 S142.826,349.091,108.606,349.091z M282.587,367.709C274.01,378.865,256,387.879,256,387.879s-18.01-9.014-26.587-20.17 c-2.746-2.797-4.444-6.63-4.444-10.861c0-4.231,1.699-8.063,4.444-10.861c8.575-11.155,26.587-20.17,26.587-20.17 s18.01,9.014,26.587,20.17c2.746,2.797,4.444,6.63,4.444,10.861C287.03,361.079,285.331,364.912,282.587,367.709z M403.394,349.091c-34.22,0-62.061-27.84-62.061-62.061s27.84-62.061,62.061-62.061s62.061,27.84,62.061,62.061 S437.614,349.091,403.394,349.091z" /> </g> </g> <g> <g> <circle cx="108.606" cy="287.03" r="23.273" /> </g> </g> <g> <g> <circle cx="403.394" cy="287.03" r="23.273" /> </g> </g> </g></svg>				</a>
                                                                                        </div>
                                                                                        <div className="elementor-icon-box-content">
                                                                                            <h3 className="elementor-icon-box-title">
                                                                                                <a href="https://cybertron-tech.com/hootsuite-buffer/">
                                                                                                    Hootsuite | Buffer 						</a>
                                                                                            </h3>
                                                                                            <p className="elementor-icon-box-description">
                                                                                                Social media management &amp; scheduling tools.					</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li className="e-n-menu-item" onMouseEnter={() => handleMouseEnter("services")}
                                                    onMouseLeave={handleMouseLeave}>
                                                    <div id="e-n-menu-title-2093" className="e-n-menu-title">
                                                        <div className="e-n-menu-title-container">
                                                            <span className="e-n-menu-title-text">
                                                                Services
                                                            </span>
                                                        </div>
                                                        <button id="e-n-menu-dropdown-icon-2093" className="e-n-menu-dropdown-icon e-focus" data-tab-index={3} aria-haspopup="true" aria-expanded="false" aria-controls="e-n-menu-content-2093" data-focus-index={3}>
                                                            {openMenu === "services" ? (
                                                                <span className="e-n-menu-dropdown-icon-opened">
                                                                    <svg aria-hidden="true" className="e-font-icon-svg e-fas-caret-up" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z" /></svg>								<span className="elementor-screen-only">Close Services</span>
                                                                </span>
                                                            ) : (
                                                                <span className="e-n-menu-dropdown-icon-closed">
                                                                    <svg aria-hidden="true" className="e-font-icon-svg e-fas-caret-down" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" /></svg>								<span className="elementor-screen-only">Open Services</span>
                                                                </span>
                                                            )}

                                                        </button>
                                                    </div>
                                                    <div className={`e-n-menu-content ${openMenu === "services" ? "e-active" : ""}`}>
                                                        <div id="e-n-menu-content-2093" data-tab-index={3} aria-labelledby="e-n-menu-dropdown-icon-2093" className={`elementor-element elementor-element-678d33b e-flex e-con-boxed e-con e-child animated fadeIn ${openMenu === "services" ? "e-active" : ""}`} data-id="f0f11e5" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                            <div className="e-con-inner">
                                                                <div className="elementor-element elementor-element-f3dc6bc e-con-full e-flex e-con e-child" data-id="f3dc6bc" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                                    <div className="elementor-element elementor-element-646e7fd e-con-full e-flex e-con e-child" data-id="646e7fd" data-element_type="container">
                                                                        <div className="elementor-element elementor-element-72b441f e-con-full e-flex e-con e-child" data-id="72b441f" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                                            <div className="elementor-element elementor-element-e64bc3e elementor-widget elementor-widget-heading" data-id="e64bc3e" data-element_type="widget" data-widget_type="heading.default">
                                                                                <div className="elementor-widget-container">
                                                                                    <h2 className="elementor-heading-title elementor-size-default">Web &amp; App Solutions </h2>				</div>
                                                                            </div>
                                                                            <div className="elementor-element elementor-element-691e0ff custom-list elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="691e0ff" data-element_type="widget" data-widget_type="icon-list.default">
                                                                                <div className="elementor-widget-container">
                                                                                    <ul className="elementor-icon-list-items">
                                                                                        <li className="elementor-icon-list-item">
                                                                                            <span className="elementor-icon-list-icon">
                                                                                                <svg aria-hidden="true" className="e-font-icon-svg e-fas-chevron-right" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" /></svg>						</span>
                                                                                            <span className="elementor-icon-list-text">Custom Website Development</span>
                                                                                        </li>
                                                                                        <li className="elementor-icon-list-item">
                                                                                            <span className="elementor-icon-list-icon">
                                                                                                <svg aria-hidden="true" className="e-font-icon-svg e-fas-chevron-right" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" /></svg>						</span>
                                                                                            <span className="elementor-icon-list-text">E-Commerce Development</span>
                                                                                        </li>
                                                                                        <li className="elementor-icon-list-item">
                                                                                            <span className="elementor-icon-list-icon">
                                                                                                <svg aria-hidden="true" className="e-font-icon-svg e-fas-chevron-right" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" /></svg>						</span>
                                                                                            <span className="elementor-icon-list-text">UI/UX Design &amp; Prototyping</span>
                                                                                        </li>
                                                                                        <li className="elementor-icon-list-item">
                                                                                            <span className="elementor-icon-list-icon">
                                                                                                <svg aria-hidden="true" className="e-font-icon-svg e-fas-chevron-right" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" /></svg>						</span>
                                                                                            <span className="elementor-icon-list-text">Web Application Development</span>
                                                                                        </li>
                                                                                        <li className="elementor-icon-list-item">
                                                                                            <span className="elementor-icon-list-icon">
                                                                                                <svg aria-hidden="true" className="e-font-icon-svg e-fas-chevron-right" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" /></svg>						</span>
                                                                                            <span className="elementor-icon-list-text">Website Maintenance &amp; Optimization</span>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="elementor-element elementor-element-6004d1d e-con-full e-flex e-con e-child" data-id="6004d1d" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                                            <div className="elementor-element elementor-element-a5ae315 elementor-widget elementor-widget-heading" data-id="a5ae315" data-element_type="widget" data-widget_type="heading.default">
                                                                                <div className="elementor-widget-container">
                                                                                    <h2 className="elementor-heading-title elementor-size-default">Enterprise Software &amp; IT Hub<span style={{ "background-color": "var( --e-global-color-31e911c )", "color": "var( --e-global-color-ef19e03 )" }} /></h2>				</div>
                                                                            </div>
                                                                            <div className="elementor-element elementor-element-5f24ab3 custom-list elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="5f24ab3" data-element_type="widget" data-widget_type="icon-list.default">
                                                                                <div className="elementor-widget-container">
                                                                                    <ul className="elementor-icon-list-items">
                                                                                        <li className="elementor-icon-list-item">
                                                                                            <span className="elementor-icon-list-icon">
                                                                                                <svg aria-hidden="true" className="e-font-icon-svg e-fas-chevron-right" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" /></svg>						</span>
                                                                                            <span className="elementor-icon-list-text">Custom Software Development</span>
                                                                                        </li>
                                                                                        <li className="elementor-icon-list-item">
                                                                                            <span className="elementor-icon-list-icon">
                                                                                                <svg aria-hidden="true" className="e-font-icon-svg e-fas-chevron-right" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" /></svg>						</span>
                                                                                            <span className="elementor-icon-list-text">Enterprise Software Solutions</span>
                                                                                        </li>
                                                                                        <li className="elementor-icon-list-item">
                                                                                            <span className="elementor-icon-list-icon">
                                                                                                <svg aria-hidden="true" className="e-font-icon-svg e-fas-chevron-right" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" /></svg>						</span>
                                                                                            <span className="elementor-icon-list-text">AI &amp;Cloud-Based Applications</span>
                                                                                        </li>
                                                                                        <li className="elementor-icon-list-item">
                                                                                            <span className="elementor-icon-list-icon">
                                                                                                <svg aria-hidden="true" className="e-font-icon-svg e-fas-chevron-right" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" /></svg>						</span>
                                                                                            <span className="elementor-icon-list-text">Machine Learning Integration</span>
                                                                                        </li>
                                                                                        <li className="elementor-icon-list-item">
                                                                                            <span className="elementor-icon-list-icon">
                                                                                                <svg aria-hidden="true" className="e-font-icon-svg e-fas-chevron-right" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" /></svg>						</span>
                                                                                            <span className="elementor-icon-list-text">SaaS Product Development</span>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="elementor-element elementor-element-5c963f4 e-con-full e-flex e-con e-child" data-id="5c963f4" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                                            <div className="elementor-element elementor-element-5b870eb elementor-widget elementor-widget-heading" data-id="5b870eb" data-element_type="widget" data-widget_type="heading.default">
                                                                                <div className="elementor-widget-container">
                                                                                    <h2 className="elementor-heading-title elementor-size-default">Brand Visibility &amp; ORM</h2>				</div>
                                                                            </div>
                                                                            <div className="elementor-element elementor-element-22a7884 custom-list elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="22a7884" data-element_type="widget" data-widget_type="icon-list.default">
                                                                                <div className="elementor-widget-container">
                                                                                    <ul className="elementor-icon-list-items">
                                                                                        <li className="elementor-icon-list-item">
                                                                                            <span className="elementor-icon-list-icon">
                                                                                                <svg aria-hidden="true" className="e-font-icon-svg e-fas-chevron-right" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" /></svg>						</span>
                                                                                            <span className="elementor-icon-list-text">SEO &amp; Content Marketing </span>
                                                                                        </li>
                                                                                        <li className="elementor-icon-list-item">
                                                                                            <span className="elementor-icon-list-icon">
                                                                                                <svg aria-hidden="true" className="e-font-icon-svg e-fas-chevron-right" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" /></svg>						</span>
                                                                                            <span className="elementor-icon-list-text">Social Media Management</span>
                                                                                        </li>
                                                                                        <li className="elementor-icon-list-item">
                                                                                            <span className="elementor-icon-list-icon">
                                                                                                <svg aria-hidden="true" className="e-font-icon-svg e-fas-chevron-right" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" /></svg>						</span>
                                                                                            <span className="elementor-icon-list-text">PPC &amp; Performance Ads</span>
                                                                                        </li>
                                                                                        <li className="elementor-icon-list-item">
                                                                                            <span className="elementor-icon-list-icon">
                                                                                                <svg aria-hidden="true" className="e-font-icon-svg e-fas-chevron-right" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" /></svg>						</span>
                                                                                            <span className="elementor-icon-list-text">Email Marketing &amp; Automation</span>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="elementor-element elementor-element-250e72b e-con-full e-flex e-con e-child" data-id="250e72b" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                                            <div className="elementor-element elementor-element-13e20e2 elementor-widget elementor-widget-heading" data-id="13e20e2" data-element_type="widget" data-widget_type="heading.default">
                                                                                <div className="elementor-widget-container">
                                                                                    <h2 className="elementor-heading-title elementor-size-default">Cyber Security</h2>				</div>
                                                                            </div>
                                                                            <div className="elementor-element elementor-element-8b9fa17 custom-list elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="8b9fa17" data-element_type="widget" data-widget_type="icon-list.default">
                                                                                <div className="elementor-widget-container">
                                                                                    <ul className="elementor-icon-list-items">
                                                                                        <li className="elementor-icon-list-item">
                                                                                            <span className="elementor-icon-list-icon">
                                                                                                <svg aria-hidden="true" className="e-font-icon-svg e-fas-chevron-right" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" /></svg>						</span>
                                                                                            <span className="elementor-icon-list-text">Penetration Testing &amp; Vulnerability Assessment</span>
                                                                                        </li>
                                                                                        <li className="elementor-icon-list-item">
                                                                                            <span className="elementor-icon-list-icon">
                                                                                                <svg aria-hidden="true" className="e-font-icon-svg e-fas-chevron-right" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" /></svg>						</span>
                                                                                            <span className="elementor-icon-list-text">Network Security Solutions </span>
                                                                                        </li>
                                                                                        <li className="elementor-icon-list-item">
                                                                                            <span className="elementor-icon-list-icon">
                                                                                                <svg aria-hidden="true" className="e-font-icon-svg e-fas-chevron-right" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" /></svg>						</span>
                                                                                            <span className="elementor-icon-list-text">Cloud Security Services </span>
                                                                                        </li>
                                                                                        <li className="elementor-icon-list-item">
                                                                                            <span className="elementor-icon-list-icon">
                                                                                                <svg aria-hidden="true" className="e-font-icon-svg e-fas-chevron-right" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" /></svg>						</span>
                                                                                            <span className="elementor-icon-list-text">Cyber Threat Intelligence &amp; Monitoring </span>
                                                                                        </li>
                                                                                        <li className="elementor-icon-list-item">
                                                                                            <span className="elementor-icon-list-icon">
                                                                                                <svg aria-hidden="true" className="e-font-icon-svg e-fas-chevron-right" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" /></svg>						</span>
                                                                                            <span className="elementor-icon-list-text">Compliance &amp; Risk Management</span>
                                                                                        </li>
                                                                                        <li className="elementor-icon-list-item">
                                                                                            <span className="elementor-icon-list-icon">
                                                                                                <svg aria-hidden="true" className="e-font-icon-svg e-fas-chevron-right" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" /></svg>						</span>
                                                                                            <span className="elementor-icon-list-text">Data Privacy &amp; Encryption</span>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li className="e-n-menu-item" onMouseEnter={() => handleMouseEnter("products")}
                                                    onMouseLeave={handleMouseLeave}>
                                                    <div id="e-n-menu-title-2094" className="e-n-menu-title">
                                                        <div className="e-n-menu-title-container">
                                                            {" "}
                                                            <span className="e-n-menu-title-text">Products </span>
                                                        </div>{" "}
                                                        <button
                                                            id="e-n-menu-dropdown-icon-2094"
                                                            className="e-n-menu-dropdown-icon e-focus"
                                                            data-tab-index={4}
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                            aria-controls="e-n-menu-content-2094"
                                                            data-focus-index={4}
                                                        >
                                                            {openMenu === "products" ? (
                                                                <span className="e-n-menu-dropdown-icon-opened">▲</span>
                                                            ) : (
                                                                <span className="e-n-menu-dropdown-icon-closed">▼</span>
                                                            )}
                                                        </button>
                                                    </div>
                                                    <div className={`e-n-menu-content ${openMenu === "products" ? "e-active" : ""}`}>
                                                        <div
                                                            id="e-n-menu-content-2094"
                                                            data-tab-index={4}
                                                            aria-labelledby="e-n-menu-dropdown-icon-2094"
                                                            className={`elementor-element elementor-element-678d33b e-flex e-con-boxed e-con e-child animated fadeIn ${openMenu === "products" ? "e-active" : ""}`}
                                                            data-id="2b5a756"
                                                            data-element_type="container"
                                                            data-settings='{"background_background":"classic"}'

                                                        >
                                                            <div className="e-con-inner">
                                                                <div
                                                                    className="elementor-element elementor-element-0318474 e-con-full e-flex e-con e-child"

                                                                    data-element_type="container"
                                                                    data-settings='{"background_background":"classic"}'
                                                                >
                                                                    <div
                                                                        className="elementor-element elementor-element-d5897bf e-con-full e-flex e-con e-child"
                                                                        data-id="d5897bf"
                                                                        data-element_type="container"
                                                                    >
                                                                        <div
                                                                            className="elementor-element elementor-element-6a439af e-con-full e-flex e-con e-child"
                                                                            data-id="6a439af"
                                                                            data-element_type="container"
                                                                            data-settings='{"background_background":"classic"}'
                                                                        >
                                                                            <div
                                                                                className="elementor-element elementor-element-3b5a614 elementor-widget elementor-widget-heading"
                                                                                data-id="3b5a614"
                                                                                data-element_type="widget"
                                                                                data-widget_type="heading.default"
                                                                            >
                                                                                <div className="elementor-widget-container">
                                                                                    <h2 className="elementor-heading-title elementor-size-default">
                                                                                        Web &amp; Software Development
                                                                                    </h2>{" "}
                                                                                </div>
                                                                            </div>
                                                                            <div
                                                                                className="elementor-element elementor-element-2219dee elementor-position-left elementor-vertical-align-middle elementor-mobile-position-left elementor-vertical-align-middle elementor-view-default elementor-widget elementor-widget-icon-box"
                                                                                data-id="2219dee"
                                                                                data-element_type="widget"
                                                                                data-widget_type="icon-box.default"
                                                                            >
                                                                                <div className="elementor-widget-container">
                                                                                    <div className="elementor-icon-box-wrapper">
                                                                                        <div className="elementor-icon-box-icon">
                                                                                            <a
                                                                                                href="https://cybertron-tech.com/e-commerce-solutions/"
                                                                                                className="elementor-icon"
                                                                                                tabIndex={-1}
                                                                                                aria-label="E-Commerce Solutions"
                                                                                            >
                                                                                                <svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    fill="#14B69E"
                                                                                                    width="800px"
                                                                                                    height="800px"
                                                                                                    viewBox="0 0 64 64"
                                                                                                >
                                                                                                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                                                                                    <g
                                                                                                        id="SVGRepo_tracerCarrier"
                                                                                                        strokeLinecap="round"
                                                                                                        strokeLinejoin="round"
                                                                                                    />
                                                                                                    <g id="SVGRepo_iconCarrier">
                                                                                                        <g data-name="12 site" id="_12_site">
                                                                                                            <path d="M17.5,9.08a2,2,0,1,1-2-2.03A2.021,2.021,0,0,1,17.5,9.08Z" />
                                                                                                            <path d="M11.5,9.08a2,2,0,1,1-2-2.03A2.021,2.021,0,0,1,11.5,9.08Z" />
                                                                                                            <path d="M23.5,9.08a2,2,0,1,1-2-2.03A2.021,2.021,0,0,1,23.5,9.08Z" />
                                                                                                            <path d="M58.5,3.5H5.5a2.006,2.006,0,0,0-2,2v53a2.006,2.006,0,0,0,2,2h53a2.006,2.006,0,0,0,2-2V5.5A2.006,2.006,0,0,0,58.5,3.5Zm0,55H5.5V14.67h53Zm0-45.83H5.5V5.5h53Z" />
                                                                                                            <path d="M56.21,9.91a1,1,0,0,1-.01,1.41.96.96,0,0,1-.7.29.976.976,0,0,1-.71-.3l-.79-.8-.79.8a.976.976,0,0,1-.71.3.96.96,0,0,1-.7-.29,1,1,0,0,1-.01-1.41l.81-.83-.81-.82a1.008,1.008,0,0,1,.01-1.42,1,1,0,0,1,1.41.01l.79.81.79-.81a1,1,0,0,1,1.41-.01,1.008,1.008,0,0,1,.01,1.42l-.81.82Z" />
                                                                                                            <path d="M49.5,9.08a1,1,0,0,1-1,1h-4a1,1,0,0,1,0-2h4A1,1,0,0,1,49.5,9.08Z" />
                                                                                                            <path d="M20.15,42.89l3.63-2.09H41.45A2.889,2.889,0,0,0,44,39.24l5.67-10.71a3.089,3.089,0,0,0-.22-3.22l-.72-1.02a2.906,2.906,0,0,0-2.34-1.22h-.01l-23.57.06-.15-1.54a3.084,3.084,0,0,0-3.03-2.81H13.98a1,1,0,0,0,0,2h5.65a1.09,1.09,0,0,1,1.04,1.02l1.78,17.46-3.37,1.95a3.158,3.158,0,0,0-1.34,2.6v.28a3.113,3.113,0,0,0,2.83,3.13,4.653,4.653,0,0,0-.78,2.59,4.408,4.408,0,1,0,8.81,0,4.684,4.684,0,0,0-.77-2.57H36.9a4.6,4.6,0,0,0-.77,2.57,4.408,4.408,0,1,0,8.81,0,4.684,4.684,0,0,0-.77-2.57h1.81a1,1,0,0,0,0-2H20.79a1.107,1.107,0,0,1-1.05-1.15v-.28A1.211,1.211,0,0,1,20.15,42.89ZM42.24,38.3a.915.915,0,0,1-.79.5H24.41L23.38,28.66l23.96-.01Zm4.14-13.23h.01a.87.87,0,0,1,.71.38l.73,1.02c.03.05.06.11.09.17l-24.75.02-.15-1.53ZM40.53,47.24a2.581,2.581,0,1,1-2.4,2.57A2.494,2.494,0,0,1,40.53,47.24Zm-16.34,0a2.581,2.581,0,1,1-2.4,2.57A2.494,2.494,0,0,1,24.19,47.24Z" />
                                                                                                        </g>
                                                                                                    </g>
                                                                                                </svg>{" "}
                                                                                            </a>
                                                                                        </div>
                                                                                        <div className="elementor-icon-box-content">
                                                                                            <h3 className="elementor-icon-box-title">
                                                                                                <a href="https://cybertron-tech.com/e-commerce-solutions/">
                                                                                                    E-Commerce Solutions{" "}
                                                                                                </a>
                                                                                            </h3>
                                                                                            <p className="elementor-icon-box-description">
                                                                                                Enterprise-grade e-commerce solutions - Shopify,
                                                                                                Magento, WooCommerce, and BigCommerce{" "}
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div
                                                                                className="elementor-element elementor-element-486fdca elementor-position-left elementor-vertical-align-middle elementor-mobile-position-left elementor-vertical-align-middle elementor-view-default elementor-widget elementor-widget-icon-box"
                                                                                data-id="486fdca"
                                                                                data-element_type="widget"
                                                                                data-widget_type="icon-box.default"
                                                                            >
                                                                                <div className="elementor-widget-container">
                                                                                    <div className="elementor-icon-box-wrapper">
                                                                                        <div className="elementor-icon-box-icon">
                                                                                            <a
                                                                                                href="https://cybertron-tech.com/database-management/"
                                                                                                className="elementor-icon"
                                                                                                tabIndex={-1}
                                                                                                aria-label="Database Management"
                                                                                            >
                                                                                                <i aria-hidden="true" className="icon icon-database1" />{" "}
                                                                                            </a>
                                                                                        </div>
                                                                                        <div className="elementor-icon-box-content">
                                                                                            <h3 className="elementor-icon-box-title">
                                                                                                <a href="https://cybertron-tech.com/database-management/">
                                                                                                    Database Management{" "}
                                                                                                </a>
                                                                                            </h3>
                                                                                            <p className="elementor-icon-box-description">
                                                                                                MySQL, PostgreSQL, MongoDB, Microsoft SQL Server, Redis{" "}
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div
                                                                                className="elementor-element elementor-element-85cf35d elementor-position-left elementor-vertical-align-middle elementor-mobile-position-left elementor-vertical-align-middle elementor-view-default elementor-widget elementor-widget-icon-box"
                                                                                data-id="85cf35d"
                                                                                data-element_type="widget"
                                                                                data-widget_type="icon-box.default"
                                                                            >
                                                                                <div className="elementor-widget-container">
                                                                                    <div className="elementor-icon-box-wrapper">
                                                                                        <div className="elementor-icon-box-icon">
                                                                                            <a
                                                                                                href="https://cybertron-tech.com/cloud-hosting-infrastructure/"
                                                                                                className="elementor-icon"
                                                                                                tabIndex={-1}
                                                                                                aria-label="Cloud Hosting & Infrastructure"
                                                                                            >
                                                                                                <svg
                                                                                                    aria-hidden="true"
                                                                                                    className="e-font-icon-svg e-fas-cloud-upload-alt"
                                                                                                    viewBox="0 0 640 512"
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                >
                                                                                                    <path d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4zM393.4 288H328v112c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V288h-65.4c-14.3 0-21.4-17.2-11.3-27.3l105.4-105.4c6.2-6.2 16.4-6.2 22.6 0l105.4 105.4c10.1 10.1 2.9 27.3-11.3 27.3z" />
                                                                                                </svg>{" "}
                                                                                            </a>
                                                                                        </div>
                                                                                        <div className="elementor-icon-box-content">
                                                                                            <h3 className="elementor-icon-box-title">
                                                                                                <a href="https://cybertron-tech.com/cloud-hosting-infrastructure/">
                                                                                                    Cloud Hosting &amp; Infrastructure{" "}
                                                                                                </a>
                                                                                            </h3>
                                                                                            <p className="elementor-icon-box-description">
                                                                                                Amazon Web Services (AWS), Microsoft Azure, Google
                                                                                                Cloud, DigitalOcean
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div
                                                                                className="elementor-element elementor-element-5a09672 elementor-position-left elementor-vertical-align-middle elementor-mobile-position-left elementor-vertical-align-middle elementor-view-default elementor-widget elementor-widget-icon-box"
                                                                                data-id="5a09672"
                                                                                data-element_type="widget"
                                                                                data-widget_type="icon-box.default"
                                                                            >
                                                                                <div className="elementor-widget-container">
                                                                                    <div className="elementor-icon-box-wrapper">
                                                                                        <div className="elementor-icon-box-icon">
                                                                                            <a
                                                                                                href="https://cybertron-tech.com/containerization-devops/"
                                                                                                className="elementor-icon"
                                                                                                tabIndex={-1}
                                                                                                aria-label="Containerization & DevOps"
                                                                                            >
                                                                                                <svg
                                                                                                    aria-hidden="true"
                                                                                                    className="e-font-icon-svg e-fab-dev"
                                                                                                    viewBox="0 0 448 512"
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                >
                                                                                                    <path d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35 3.88-2.9 5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28l.01 70.93zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19l-.01 29.52zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58l-38.46 144.8z" />
                                                                                                </svg>{" "}
                                                                                            </a>
                                                                                        </div>
                                                                                        <div className="elementor-icon-box-content">
                                                                                            <h3 className="elementor-icon-box-title">
                                                                                                <a href="https://cybertron-tech.com/containerization-devops/">
                                                                                                    Containerization &amp; DevOps{" "}
                                                                                                </a>
                                                                                            </h3>
                                                                                            <p className="elementor-icon-box-description">
                                                                                                Docker, Kubernetes, Terraform, Ansible
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="elementor-element elementor-element-90ffba9 e-con-full e-flex e-con e-child"
                                                                            data-id="90ffba9"
                                                                            data-element_type="container"
                                                                            data-settings='{"background_background":"classic"}'
                                                                        >
                                                                            <div
                                                                                className="elementor-element elementor-element-40195b1 elementor-widget elementor-widget-heading"
                                                                                data-id="40195b1"
                                                                                data-element_type="widget"
                                                                                data-widget_type="heading.default"
                                                                            >
                                                                                <div className="elementor-widget-container">
                                                                                    <h2 className="elementor-heading-title elementor-size-default">
                                                                                        {" "}
                                                                                        Digital Marketing &amp; SEO
                                                                                    </h2>{" "}
                                                                                </div>
                                                                            </div>
                                                                            <div
                                                                                className="elementor-element elementor-element-b8287cd elementor-position-left elementor-vertical-align-middle elementor-mobile-position-left elementor-vertical-align-middle elementor-view-default elementor-widget elementor-widget-icon-box"
                                                                                data-id="b8287cd"
                                                                                data-element_type="widget"
                                                                                data-widget_type="icon-box.default"
                                                                            >
                                                                                <div className="elementor-widget-container">
                                                                                    <div className="elementor-icon-box-wrapper">
                                                                                        <div className="elementor-icon-box-icon">
                                                                                            <a
                                                                                                href="https://cybertron-tech.com/seo-analytics-tools/"
                                                                                                className="elementor-icon"
                                                                                                tabIndex={-1}
                                                                                                aria-label="SEO & Analytics Tools"
                                                                                            >
                                                                                                <svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                                                    fill="#14B69E"
                                                                                                    height="800px"
                                                                                                    width="800px"
                                                                                                    id="Layer_1"
                                                                                                    viewBox="0 0 491.52 491.52"
                                                                                                    xmlSpace="preserve"
                                                                                                >
                                                                                                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                                                                                    <g
                                                                                                        id="SVGRepo_tracerCarrier"
                                                                                                        strokeLinecap="round"
                                                                                                        strokeLinejoin="round"
                                                                                                    />
                                                                                                    <g id="SVGRepo_iconCarrier">
                                                                                                        {" "}
                                                                                                        <g>
                                                                                                            {" "}
                                                                                                            <g>
                                                                                                                {" "}
                                                                                                                <path d="M355.345,138.25c-29.08-29.72-67.995-46.09-109.585-46.09c-41.585,0-80.5,16.37-109.555,46.065 C107.8,167.05,92.16,205.24,92.16,245.76s15.64,78.71,44.02,107.51c29.08,29.72,67.995,46.09,109.58,46.09 c41.59,0,80.505-16.37,109.56-46.065c28.4-28.825,44.04-67.015,44.04-107.535S383.72,167.05,355.345,138.25z M192.681,123.691 c-7.003,9.495-13.146,20.801-18.182,33.662c-5.569-3.559-10.899-7.529-15.948-11.944 C168.881,136.372,180.356,129.066,192.681,123.691z M144.188,159.986c7.419,6.596,15.366,12.375,23.756,17.342 c-4.856,17.654-7.85,37.273-8.597,58.191h-46.213C115.259,207.564,126.036,181.354,144.188,159.986z M113.134,256h46.214 c0.747,20.917,3.741,40.535,8.596,58.189c-8.391,4.969-16.338,10.749-23.757,17.345C126.04,310.18,115.258,283.965,113.134,256z M158.552,346.11c5.048-4.416,10.377-8.384,15.946-11.944c5.036,12.861,11.179,24.166,18.181,33.661 C180.357,362.451,168.886,355.148,158.552,346.11z M235.52,377.042c-17.261-5.669-32.501-25.254-42.711-52.709 c13.421-5.834,27.807-9.357,42.711-10.483V377.042z M235.52,293.369c-16.993,1.112-33.453,4.831-48.821,11.24 c-3.781-14.937-6.194-31.352-6.886-48.609h55.708V293.369z M235.52,235.52h-55.708c0.692-17.258,3.105-33.674,6.886-48.611 c15.369,6.411,31.829,10.129,48.821,11.241V235.52z M235.52,177.671c-14.903-1.128-29.289-4.65-42.71-10.485 c10.211-27.454,25.45-47.039,42.71-52.707V177.671z M378.386,235.52h-46.209c-0.747-20.918-3.742-40.537-8.598-58.191 c8.391-4.969,16.338-10.748,23.758-17.344C365.48,181.337,376.262,207.552,378.386,235.52z M332.972,145.409 c-5.049,4.415-10.379,8.384-15.947,11.944c-5.037-12.861-11.181-24.166-18.184-33.661 C311.165,129.067,322.638,136.371,332.972,145.409z M256,114.477c17.263,5.669,32.503,25.253,42.714,52.708 c-13.423,5.836-27.811,9.358-42.714,10.486V114.477z M256,198.151c16.994-1.112,33.454-4.831,48.826-11.242 c3.781,14.938,6.195,31.353,6.887,48.612H256V198.151z M256,256h55.713c-0.692,17.258-3.105,33.674-6.886,48.611 c-15.371-6.41-31.832-10.129-48.826-11.241V256z M256,377.042v-63.193c14.904,1.126,29.292,4.649,42.715,10.484 C288.504,351.789,273.263,371.374,256,377.042z M298.839,367.831c7.004-9.496,13.149-20.802,18.187-33.666 c5.569,3.56,10.9,7.529,15.949,11.945C322.643,355.149,311.167,362.456,298.839,367.831z M347.338,331.533 c-7.42-6.596-15.367-12.376-23.758-17.344c4.855-17.654,7.851-37.272,8.597-58.189h46.208 C376.262,283.959,365.486,310.169,347.338,331.533z" />{" "}
                                                                                                            </g>{" "}
                                                                                                        </g>{" "}
                                                                                                        <g>
                                                                                                            {" "}
                                                                                                            <g>
                                                                                                                {" "}
                                                                                                                <path d="M460.281,235.52C455.044,125.131,366.389,36.476,256,31.239V0h-20.48v31.239C125.131,36.476,36.476,125.131,31.239,235.52 H0V256h31.239c5.237,110.389,93.892,199.044,204.281,204.281v31.239H256v-31.239C366.389,455.044,455.044,366.389,460.281,256 h31.239v-20.48H460.281z M439.801,256C434.605,355.096,355.096,434.605,256,439.801V419.84h-20.48v19.961 C136.424,434.605,56.915,355.096,51.719,256H71.68v-20.48H51.719c5.196-99.096,84.705-178.605,183.801-183.801V71.68H256V51.719 c99.096,5.196,178.605,84.705,183.801,183.801H419.84V256H439.801z" />{" "}
                                                                                                            </g>{" "}
                                                                                                        </g>{" "}
                                                                                                    </g>
                                                                                                </svg>{" "}
                                                                                            </a>
                                                                                        </div>
                                                                                        <div className="elementor-icon-box-content">
                                                                                            <h3 className="elementor-icon-box-title">
                                                                                                <a href="https://cybertron-tech.com/seo-analytics-tools/">
                                                                                                    SEO &amp; Analytics Tools{" "}
                                                                                                </a>
                                                                                            </h3>
                                                                                            <p className="elementor-icon-box-description">
                                                                                                Ahrefs, SEMrush, Moz, Ubersuggest{" "}
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div
                                                                                className="elementor-element elementor-element-f194be1 elementor-position-left elementor-vertical-align-middle elementor-mobile-position-left elementor-vertical-align-middle elementor-view-default elementor-widget elementor-widget-icon-box"
                                                                                data-id="f194be1"
                                                                                data-element_type="widget"
                                                                                data-widget_type="icon-box.default"
                                                                            >
                                                                                <div className="elementor-widget-container">
                                                                                    <div className="elementor-icon-box-wrapper">
                                                                                        <div className="elementor-icon-box-icon">
                                                                                            <a
                                                                                                href="https://cybertron-tech.com/social-media-marketing-management/"
                                                                                                className="elementor-icon"
                                                                                                tabIndex={-1}
                                                                                                aria-label="Social Media Marketing & Management"
                                                                                            >
                                                                                                <svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                                                    fill="#14B69E"
                                                                                                    id="Capa_1"
                                                                                                    width="800px"
                                                                                                    height="800px"
                                                                                                    viewBox="0 0 76.609 76.609"
                                                                                                    xmlSpace="preserve"
                                                                                                >
                                                                                                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                                                                                    <g
                                                                                                        id="SVGRepo_tracerCarrier"
                                                                                                        strokeLinecap="round"
                                                                                                        strokeLinejoin="round"
                                                                                                    />
                                                                                                    <g id="SVGRepo_iconCarrier">
                                                                                                        {" "}
                                                                                                        <g>
                                                                                                            {" "}
                                                                                                            <g>
                                                                                                                {" "}
                                                                                                                <path d="M57.455,16.575c0,1.12,1.121,2.24,2.688,2.24c2.239,0,2.911-0.896,2.911-2.24c0-0.224,0-0.224,0-0.447 c-0.223-0.672-0.896-1.12-1.566-1.568c-0.225,0-0.672-0.224-1.119-0.224C58.799,14.337,57.455,15.232,57.455,16.575z" />{" "}
                                                                                                                <path d="M62.16,9.183c-0.226-1.344-1.121-2.464-2.24-2.464c-1.121,0-1.793,1.12-1.567,2.464c0.226,1.344,1.119,2.464,2.239,2.464 C61.488,11.647,62.383,10.527,62.16,9.183z" />{" "}
                                                                                                                <path d="M52.08,25.983l3.808-3.808c2.239,1.792,4.93,2.912,7.841,2.912c6.943,0,12.544-5.601,12.544-12.544 C76.271,5.599,70.672,0,63.728,0c-6.942,0-12.544,5.6-12.544,12.544c0,3.136,1.119,5.823,2.912,7.84l-3.809,3.809 C50.959,24.864,51.631,25.537,52.08,25.983z M65.744,8.511h2.463V6.048h0.896v2.464h2.465v0.896h-2.465v2.465h-0.896V9.407h-2.463 V8.511L65.744,8.511z M60.144,12.767c0-0.224,0-0.448,0.226-0.672c-0.226,0-0.226,0-0.447,0c-1.793,0-3.137-1.344-3.137-2.912 s1.791-2.912,3.584-2.912H64.4l-0.896,0.672H62.16c0.896,0.225,1.344,1.345,1.344,2.464c0,0.896-0.448,1.568-1.121,2.24 c-0.672,0.448-0.896,0.672-0.896,1.12c0,0.448,0.673,1.12,1.12,1.344c1.119,0.672,1.344,1.568,1.344,2.688 c0,1.567-1.344,2.912-4.031,2.912c-2.239,0-4.256-0.896-4.256-2.464s1.791-2.912,4.031-2.912c0.225,0,0.447,0,0.672,0 C60.367,13.664,60.144,13.216,60.144,12.767z" />{" "}
                                                                                                                <path d="M63.728,51.52c-2.911,0-5.823,1.119-7.841,2.912l-3.807-3.809c-0.449,0.672-1.121,1.118-1.568,1.566l3.809,3.809 c-1.792,2.238-2.912,4.929-2.912,7.841c0,6.943,5.602,12.544,12.545,12.544c6.942,0,12.545-5.601,12.545-12.544 C76.271,56.895,70.672,51.52,63.728,51.52z M60.144,69.664H57.68v-7.841h2.464V69.664z M59.024,60.705L59.024,60.705 c-0.896,0-1.567-0.673-1.567-1.346c0-0.672,0.672-1.344,1.567-1.344s1.567,0.672,1.567,1.344 C60.367,60.256,59.92,60.705,59.024,60.705z M70.224,69.664h-2.912v-4.031c0-1.119-0.447-1.792-1.345-1.792 c-0.672,0-1.119,0.448-1.344,0.896c0,0.227,0,0.449,0,0.673v4.257h-2.688c0,0,0-7.168,0-7.841h2.688v1.12 c0.225-0.447,1.121-1.344,2.465-1.344c1.791,0,3.136,1.119,3.136,3.584V69.664L70.224,69.664z" />{" "}
                                                                                                                <path d="M24.304,50.625l-3.808,3.809c-2.24-1.793-4.928-2.912-7.84-2.912c-6.944,0-12.544,5.602-12.544,12.543 c0,6.944,5.6,12.545,12.544,12.545c6.943,0,12.544-5.601,12.544-12.545c0-2.912-1.12-5.823-2.912-7.84l3.808-3.809 C25.424,51.743,24.752,51.07,24.304,50.625z M18.033,62.048c0,3.808-2.912,8.063-8.064,8.063c-1.567,0-3.136-0.448-4.256-1.346 c0.224,0,0.448,0,0.672,0c1.344,0,2.464-0.447,3.584-1.119c-1.12,0-2.24-0.896-2.688-2.017c0.224,0,0.447,0,0.447,0 c0.225,0,0.448,0,0.673,0c-1.345-0.226-2.24-1.344-2.24-2.688l0,0c0.448,0.225,0.896,0.447,1.344,0.447 c-0.672-0.447-1.344-1.344-1.344-2.24c0-0.446,0.224-0.896,0.448-1.344c1.344,1.793,3.359,2.912,5.823,2.912 c0-0.226,0-0.447,0-0.672c0-1.568,1.345-2.912,2.912-2.912c0.896,0,1.568,0.447,2.017,0.896c0.672-0.225,1.344-0.448,1.792-0.672 c-0.225,0.672-0.673,1.119-1.345,1.566c0.672,0,1.12-0.225,1.568-0.447c-0.448,0.672-0.896,1.119-1.344,1.344 C18.033,61.823,18.033,61.823,18.033,62.048z" />{" "}
                                                                                                                <path d="M12.656,25.088c2.912,0,5.823-1.12,7.84-2.912l3.808,3.808c0.448-0.672,1.12-1.119,1.568-1.567l-3.809-3.808 c1.792-2.24,2.912-4.928,2.912-7.84c0-6.944-5.6-12.544-12.544-12.544c-6.943,0-12.319,5.6-12.319,12.544 C0.112,19.487,5.712,25.088,12.656,25.088z M9.744,10.527h1.344V9.183c0-1.792,0.672-2.912,2.912-2.912h1.792v2.24h-1.12 c-0.896,0-0.896,0.224-0.896,0.896v1.12h2.016l-0.224,2.24H13.55v6.272h-2.688v-6.272H9.519v-2.24H9.744z" />{" "}
                                                                                                                <g>
                                                                                                                    {" "}
                                                                                                                    <path d="M49.617,44.575c-0.226-0.446-0.673-0.673-0.896-0.673c-2.016-0.672-3.807-1.118-5.823-1.791 c-0.224,0-0.672-0.447-0.672-1.344c0-0.449,0-0.673-0.447-0.673c-0.226,0,0,0-0.226-0.224c-0.223-0.896-0.223-1.345-0.223-1.568 c0-0.223,0.223-0.225,0.223-0.448c0.673-0.896,0.896-2.239,0.896-2.688c0,0,0.225,0,0.225-0.225 c0.224-0.448,0.224-0.448,0.224-1.121c0.226-0.446,0.226-1.118-0.224-1.118c-0.225,0.224-0.225,0-0.225-0.448v-2.688 c0-0.896-0.673-1.567-1.119-1.791c-0.674-0.449-0.896-0.673-1.121-0.673c-0.225-0.224-0.225-0.448,0-0.672 c0.224-0.223,0.447-0.223,0.447-0.448c0,0,0,0-0.225,0s-1.567,0.226-2.239,0.448c-1.12,0.224-2.24,0.672-3.137,1.345 c-0.672,0.447-1.12,1.119-1.12,2.017c0,0.446,0,1.791,0,2.688c0,0.226,0,0.448-0.224,0.226c-0.672,0-0.224,0.896-0.224,1.118 c0,0.448,0.224,0.673,0.447,1.121c0,0.225,0.225,0.225,0.225,0.225c0.224,0.672,0.448,2.016,0.896,2.688 c0,0,0.225,0.225,0.225,0.448c0,0.448,0,1.12-0.225,1.568c0,0,0,0.225-0.224,0.225c-0.448,0-0.448,0.224-0.448,0.672 c0,0.672-0.448,1.345-0.672,1.345c-1.12,0.446-4.479,1.567-5.6,1.791c-0.672,0.226-0.896,0.448-1.12,0.672l-1.12,2.688 c4.479,0,6.72,2.688,11.424,3.584h2.24c4.704-0.672,8.063-3.584,11.2-3.584L49.617,44.575z" />{" "}
                                                                                                                </g>{" "}
                                                                                                            </g>{" "}
                                                                                                        </g>{" "}
                                                                                                    </g>
                                                                                                </svg>{" "}
                                                                                            </a>
                                                                                        </div>
                                                                                        <div className="elementor-icon-box-content">
                                                                                            <h3 className="elementor-icon-box-title">
                                                                                                <a href="https://cybertron-tech.com/social-media-marketing-management/">
                                                                                                    Social Media Marketing &amp; Management{" "}
                                                                                                </a>
                                                                                            </h3>
                                                                                            <p className="elementor-icon-box-description">
                                                                                                Hootsuite, Buffer, Sprout Social, Later
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div
                                                                                className="elementor-element elementor-element-cc85690 elementor-position-left elementor-vertical-align-middle elementor-mobile-position-left elementor-vertical-align-middle elementor-view-default elementor-widget elementor-widget-icon-box"
                                                                                data-id="cc85690"
                                                                                data-element_type="widget"
                                                                                data-widget_type="icon-box.default"
                                                                            >
                                                                                <div className="elementor-widget-container">
                                                                                    <div className="elementor-icon-box-wrapper">
                                                                                        <div className="elementor-icon-box-icon">
                                                                                            <a
                                                                                                href="https://cybertron-tech.com/email-marketing-automation/"
                                                                                                className="elementor-icon"
                                                                                                tabIndex={-1}
                                                                                                aria-label="Email Marketing & Automation"
                                                                                            >
                                                                                                <svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                                                    width="800px"
                                                                                                    height="800px"
                                                                                                    viewBox="0 0 1000 1000"
                                                                                                    id="Layer_2"
                                                                                                    xmlSpace="preserve"
                                                                                                    fill="#14B69E"
                                                                                                >
                                                                                                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                                                                                    <g
                                                                                                        id="SVGRepo_tracerCarrier"
                                                                                                        strokeLinecap="round"
                                                                                                        strokeLinejoin="round"
                                                                                                    />
                                                                                                    <g id="SVGRepo_iconCarrier">
                                                                                                        {" "}
                                                                                                        <g>
                                                                                                            {" "}
                                                                                                            <path
                                                                                                                d="M551.907,644.563l-45.125,29.148c-2.064,1.333-4.423,2-6.782,2s-4.718-0.667-6.782-2l-45.125-29.148 L223.692,789.506l-68.266,44.097c5.188,8.965,14.874,15.001,25.977,15.001h637.192c11.103,0,20.79-6.036,25.977-15.001 l-68.266-44.097L551.907,644.563z"
                                                                                                                style={{ fill: "#14B69E" }}
                                                                                                            />{" "}
                                                                                                            <path
                                                                                                                d="M231.84,475.116L500,648.326l49.97-32.27c-5.42,1.61-11.08,2.44-16.76,2.44 c-15.42,0-30-5.91-41.07-16.64l-70.17-68.05c-4.37,1.61-9,2.45-13.66,2.45c-10.01,0-19.48-3.79-26.65-10.34 c-8.86,3.71-18.4,5.65-28,5.65c-13.17,0-25.83-3.57-36.8-10.02c-10.97-6.45-20.24-15.78-26.63-27.29l-17.47-31.47 c-6.18-11.11-9.26-23.36-9.15-35.73H181.4c-6.05,0-11.68,1.8-16.4,4.89l7.96,5.14L231.84,475.116z"
                                                                                                                style={{ fill: "#14B69E" }}
                                                                                                            />{" "}
                                                                                                            <path
                                                                                                                d="M717.14,455.526c-2.75,9.63-9.09,17.61-17.85,22.48c-5.56,3.08-11.85,4.72-18.19,4.72 c-4.23,0-8.36-0.71-12.24-2.06c-3.88-1.34-7.52-3.31-10.75-5.81l-25.56,5.13l-25.72,5.17l-54.34,10.91l21.78,21.12 c13.53,13.12,19.88,31.38,17.4,50.07c-1.53,11.6-6.3,22.15-13.64,30.67l190.13-122.81l58.88-38.03l7.96-5.14 c-4.72-3.09-10.35-4.89-16.4-4.89H713.89C718.73,435.796,719.89,445.906,717.14,455.526z"
                                                                                                                style={{ fill: "#14B69E" }}
                                                                                                            />{" "}
                                                                                                            <path
                                                                                                                d="M848.33,453.096l-34.09,22.02l-239.3,154.57l214.93,138.82l58.73,37.93v-349.38 C848.6,455.716,848.5,454.386,848.33,453.096z"
                                                                                                                style={{ fill: "#14B69E" }}
                                                                                                            />{" "}
                                                                                                            <path
                                                                                                                d="M425.06,629.686l-239.3-154.57l-34.09-22.02c-0.17,1.29-0.27,2.62-0.27,3.96v349.38l58.73-37.93 L425.06,629.686z"
                                                                                                                style={{ fill: "#14B69E" }}
                                                                                                            />{" "}
                                                                                                            <path
                                                                                                                d="M482.418,209.664l137.394,247.382l47.374-9.515c0.265-0.053,0.514-0.137,0.772-0.205l2.201,3.962 c3.352,6.035,10.962,8.21,16.997,4.858c6.035-3.352,8.21-10.961,4.859-16.997l-44.62-80.34 c33.261-18.473,45.292-60.561,26.819-93.823c-18.473-33.261-60.561-45.292-93.823-26.819l-44.62-80.34 c-3.352-6.035-10.962-8.21-16.997-4.858c-6.035,3.352-8.21,10.961-4.858,16.997l2.2,3.962c-0.193,0.184-0.396,0.35-0.581,0.547 L482.418,209.664z M652.357,277.126c11.78,21.21,4.108,48.049-17.102,59.829l-42.727-76.931 C613.738,248.244,640.577,255.916,652.357,277.126z"
                                                                                                                style={{ fill: "#14B69E" }}
                                                                                                            />{" "}
                                                                                                            <path
                                                                                                                d="M312.09,482.122c12.737,22.934,41.654,31.2,64.588,18.463l13.113-7.283l5.826,10.491 c3.888,7.001,12.716,9.524,19.717,5.636l0.15-0.083c7.203-4,16.098-2.199,21.503,4.019c0.639,0.735,1.317,1.452,2.033,2.146 l70.526,68.401c10.752,10.427,27.062,12.586,40.155,5.314c19.927-11.067,23.521-38.228,7.159-54.098l-55.896-54.211l93.12-18.703 l-129.65-233.44l-95.627,101.612c-1.5,1.594-2.56,3.472-3.177,5.469c-0.56,0.225-1.115,0.474-1.656,0.775l-34.095,18.936 c-7.001,3.888-9.524,12.716-5.636,19.716l1.942,3.497l-13.113,7.283c-22.934,12.737-31.2,41.654-18.463,64.588L312.09,482.122z M325.212,407.917l13.113-7.283l39.328,70.811l-13.113,7.283c-10.846,6.024-24.57,2.101-30.594-8.745l-17.479-31.472 C310.442,427.665,314.366,413.941,325.212,407.917z"
                                                                                                                style={{ fill: "#14B69E" }}
                                                                                                            />{" "}
                                                                                                            <path
                                                                                                                d="M671.546,225.664c2.155,1.47,4.605,2.173,7.03,2.173c3.994,0,7.919-1.91,10.339-5.46l30-44 c3.889-5.704,2.418-13.48-3.286-17.369c-5.703-3.89-13.48-2.419-17.369,3.286l-30,44 C664.371,213.998,665.842,221.775,671.546,225.664z"
                                                                                                                style={{ fill: "#14B69E" }}
                                                                                                            />{" "}
                                                                                                            <path
                                                                                                                d="M754.266,339.48c1.789,0.891,3.69,1.313,5.561,1.313c4.593,0,9.014-2.542,11.2-6.933 c3.076-6.18,0.56-13.684-5.62-16.761l-47.674-23.731c-6.181-3.077-13.685-0.56-16.761,5.62c-3.076,6.18-0.56,13.684,5.62,16.761 L754.266,339.48z"
                                                                                                                style={{ fill: "#14B69E" }}
                                                                                                            />{" "}
                                                                                                            <path
                                                                                                                d="M691.673,266.082c2.42,3.548,6.344,5.458,10.338,5.458c2.426,0,4.877-0.704,7.032-2.174 l88.748-60.53c5.703-3.89,7.173-11.666,3.283-17.37c-3.89-5.703-11.667-7.174-17.37-3.283l-88.748,60.53 C689.253,252.602,687.783,260.379,691.673,266.082z"
                                                                                                                style={{ fill: "#14B69E" }}
                                                                                                            />{" "}
                                                                                                        </g>{" "}
                                                                                                    </g>
                                                                                                </svg>{" "}
                                                                                            </a>
                                                                                        </div>
                                                                                        <div className="elementor-icon-box-content">
                                                                                            <h3 className="elementor-icon-box-title">
                                                                                                <a href="https://cybertron-tech.com/email-marketing-automation/">
                                                                                                    Email Marketing &amp; Automation{" "}
                                                                                                </a>
                                                                                            </h3>
                                                                                            <p className="elementor-icon-box-description">
                                                                                                Mailchimp, Klaviyo, ActiveCampaign, HubSpot Marketing
                                                                                                Hub
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="elementor-element elementor-element-d112560 e-con-full e-flex e-con e-child"
                                                                            data-id="d112560"
                                                                            data-element_type="container"
                                                                            data-settings='{"background_background":"classic"}'
                                                                        >
                                                                            <div
                                                                                className="elementor-element elementor-element-101d1a2 elementor-widget elementor-widget-heading"
                                                                                data-id="101d1a2"
                                                                                data-element_type="widget"
                                                                                data-widget_type="heading.default"
                                                                            >
                                                                                <div className="elementor-widget-container">
                                                                                    <h2 className="elementor-heading-title elementor-size-default">
                                                                                        Next-Gen Security
                                                                                    </h2>{" "}
                                                                                </div>
                                                                            </div>
                                                                            <div
                                                                                className="elementor-element elementor-element-b4c02e2 elementor-position-left elementor-vertical-align-middle elementor-mobile-position-left elementor-vertical-align-middle elementor-view-default elementor-widget elementor-widget-icon-box"
                                                                                data-id="b4c02e2"
                                                                                data-element_type="widget"
                                                                                data-widget_type="icon-box.default"
                                                                            >
                                                                                <div className="elementor-widget-container">
                                                                                    <div className="elementor-icon-box-wrapper">
                                                                                        <div className="elementor-icon-box-icon">
                                                                                            <a
                                                                                                href="https://cybertron-tech.com/antivirus-endpoint-security/"
                                                                                                className="elementor-icon"
                                                                                                tabIndex={-1}
                                                                                                aria-label="Antivirus & Endpoint Security"
                                                                                            >
                                                                                                <svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    height={2500}
                                                                                                    viewBox="5 4 38 40"
                                                                                                    width={2500}
                                                                                                >
                                                                                                    <path d="m24 44a1 1 0 0 1 0-2z" fill="#0370c8" />
                                                                                                    <path
                                                                                                        d="m25 43a1 1 0 0 1 -1 1v-2a1 1 0 0 1 1 1z"
                                                                                                        fill="#0f5094"
                                                                                                    />
                                                                                                    <circle cx={42} cy={11} fill="#0883d9" r={1} />
                                                                                                    <circle cx={6} cy={11} fill="#33bff0" r={1} />
                                                                                                    <path
                                                                                                        d="m24 43 .427.907s15.144-7.9 18.08-19.907h-18.507z"
                                                                                                        fill="#0f5094"
                                                                                                    />
                                                                                                    <path
                                                                                                        d="m43 11-1-1c-11.122 0-11.278-6-18-6v20h18.507c.315-1.288.493-2.622.493-4z"
                                                                                                        fill="#0883d9"
                                                                                                    />
                                                                                                    <path
                                                                                                        d="m24 43-.427.907s-15.144-7.9-18.08-19.907h18.507z"
                                                                                                        fill="#0370c8"
                                                                                                    />
                                                                                                    <path
                                                                                                        d="m5 11 1-1c11.122 0 11.278-6 18-6v20h-18.507a16.789 16.789 0 0 1 -.493-4z"
                                                                                                        fill="#33bff0"
                                                                                                    />
                                                                                                </svg>{" "}
                                                                                            </a>
                                                                                        </div>
                                                                                        <div className="elementor-icon-box-content">
                                                                                            <h3 className="elementor-icon-box-title">
                                                                                                <a href="https://cybertron-tech.com/antivirus-endpoint-security/">
                                                                                                    Antivirus &amp; Endpoint Security{" "}
                                                                                                </a>
                                                                                            </h3>
                                                                                            <p className="elementor-icon-box-description">
                                                                                                Choose from Next-gen antivirus to safeguard your digital
                                                                                                world - Bitdefender, Kaspersky, Norton, McAfee, Trend
                                                                                                Micro{" "}
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div
                                                                                className="elementor-element elementor-element-32eaad9 elementor-position-left elementor-vertical-align-middle elementor-mobile-position-left elementor-vertical-align-middle elementor-view-default elementor-widget elementor-widget-icon-box"
                                                                                data-id="32eaad9"
                                                                                data-element_type="widget"
                                                                                data-widget_type="icon-box.default"
                                                                            >
                                                                                <div className="elementor-widget-container">
                                                                                    <div className="elementor-icon-box-wrapper">
                                                                                        <div className="elementor-icon-box-icon">
                                                                                            <a
                                                                                                href="https://cybertron-tech.com/vpn-services/"
                                                                                                className="elementor-icon"
                                                                                                tabIndex={-1}
                                                                                                aria-label="VPN Services"
                                                                                            >
                                                                                                <svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                                                    id="Layer_1"
                                                                                                    viewBox="0 0 496 496"
                                                                                                    xmlSpace="preserve"
                                                                                                    width="800px"
                                                                                                    height="800px"
                                                                                                    fill="#000000"
                                                                                                >
                                                                                                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                                                                                    <g
                                                                                                        id="SVGRepo_tracerCarrier"
                                                                                                        strokeLinecap="round"
                                                                                                        strokeLinejoin="round"
                                                                                                    />
                                                                                                    <g id="SVGRepo_iconCarrier">
                                                                                                        {" "}
                                                                                                        <path
                                                                                                            style={{ fill: "#14B69E" }}
                                                                                                            d="M248,298.4L248,298.4L248,298.4L248,298.4L248,298.4c-8-0.8-16-2.4-24-4v126.4c0,13.6,10.4,24,24,24 s24-10.4,24-24V294.4C264,296,256,297.6,248,298.4z"
                                                                                                        />{" "}
                                                                                                        <path
                                                                                                            style={{ fill: "#14B69E" }}
                                                                                                            d="M248,298.4L248,298.4L248,298.4L248,298.4c-8-0.8-16-2.4-24-4V376h48v-81.6 C264,296,256,297.6,248,298.4L248,298.4z"
                                                                                                        />{" "}
                                                                                                        <path
                                                                                                            style={{ fill: "#AEBFC1" }}
                                                                                                            d="M398.4,456H97.6c-13.6,0-24-10.4-24-24s10.4-24,24-24h301.6c13.6,0,24,10.4,24,24 C422.4,445.6,412,456,398.4,456z"
                                                                                                        />{" "}
                                                                                                        <path
                                                                                                            style={{ fill: "#BECBCC" }}
                                                                                                            d="M73.6,432c0-13.6,10.4-24,24-24h301.6c13.6,0,24,10.4,24,24"
                                                                                                        />{" "}
                                                                                                        <path
                                                                                                            style={{ fill: "#14B69E" }}
                                                                                                            d="M496,317.6c0,13.6-13.6,26.4-26.4,26.4H26.4C13.6,344,0,330.4,0,317.6V64c0-13.6,13.6-24,26.4-24 h442.4c13.6,0,27.2,10.4,27.2,24V317.6z"
                                                                                                        />{" "}
                                                                                                        <path
                                                                                                            style={{ fill: "#14B69E" }}
                                                                                                            d="M469.6,40H26.4C13.6,40,0,50.4,0,64v214.4C0,292,13.6,304,26.4,304h442.4c13.6,0,26.4-12,26.4-25.6 V64C496,50.4,482.4,40,469.6,40z"
                                                                                                        />{" "}
                                                                                                        <path
                                                                                                            style={{ fill: "#14B69E" }}
                                                                                                            d="M496,280V64c0-13.6-13.6-24-26.4-24H26.4C13.6,40,0,50.4,0,64"
                                                                                                        />{" "}
                                                                                                        <rect
                                                                                                            x={160}
                                                                                                            y={408}
                                                                                                            style={{ fill: "#14B69E" }}
                                                                                                            width={176}
                                                                                                            height={48}
                                                                                                        />{" "}
                                                                                                        <rect
                                                                                                            x={160}
                                                                                                            y={408}
                                                                                                            style={{ fill: "#14B69E" }}
                                                                                                            width={176}
                                                                                                            height={24}
                                                                                                        />{" "}
                                                                                                        <g>
                                                                                                            {" "}
                                                                                                            <path
                                                                                                                style={{ fill: "#14B69E" }}
                                                                                                                d="M192,144h-15.2c-3.2,0-6.4,0-7.2,3.2L151.2,200c-1.6,4.8-3.2,8.8-4.8,13.6c-1.6-4.8-2.4-9.6-4-14.4 L125.6,148c-0.8-3.2-4-4-8-4h-15.2c-2.4,0-4.8-0.8-6.4,1.6c-1.6,2.4-1.6,4-0.8,6.4l35.2,107.2c0.8,3.2,4,4.8,8,4.8h15.2 c3.2,0,6.4-2.4,7.2-5.6l38.4-108c0.8-2.4,0.8-3.2-0.8-5.6C196.8,143.2,194.4,144,192,144z"
                                                                                                            />{" "}
                                                                                                            <path
                                                                                                                style={{ fill: "#14B69E" }}
                                                                                                                d="M246.4,139.2c-9.6,0-20.8,0.8-29.6,2.4c-4,0.8-8,4-8,8V256c0,4.8,7.2,8,11.2,8h13.6 c4.8,0,6.4-3.2,6.4-8v-34.4c16,0.8,33.6-4.8,42.4-14.4c7.2-7.2,11.2-16.8,11.2-28.8s-4-21.6-12-28.8 C273.6,143.2,261.6,139.2,246.4,139.2z M264,180c0,9.6-7.2,15.2-20,15.2c-1.6,0-4,0-4,0v-28c0,0,4,0,5.6,0 C263.2,166.4,264,176,264,180z"
                                                                                                            />{" "}
                                                                                                            <path
                                                                                                                style={{ fill: "#14B69E" }}
                                                                                                                d="M393.6,144h-12.8c-4.8,0-4.8,0-4.8,4v44.8c0,4-1.6,7.2-1.6,10.4c-0.8-1.6-3.2-4-4-5.6l-35.2-52.8 c-1.6-1.6-4.8-0.8-7.2-0.8h-15.2c-4.8,0-8.8,0-8.8,4v108c0,4.8,4,8,8.8,8h12.8c4.8,0,10.4-3.2,10.4-8v-46.4c0-4-1.6-8-1.6-12 c1.6,2.4,2.4,4.8,4,8L372,260c1.6,2.4,4,4,6.4,4h14.4c4.8,0,6.4-3.2,6.4-8V148C400,144,397.6,144,393.6,144z"
                                                                                                            />{" "}
                                                                                                        </g>{" "}
                                                                                                        <g>
                                                                                                            {" "}
                                                                                                            <path
                                                                                                                style={{ fill: "#FFFFFF" }}
                                                                                                                d="M192,120h-15.2c-3.2,0-6.4,3.2-7.2,6.4L151.2,180c-1.6,4.8-3.2,9.6-4.8,14.4 c-1.6-4.8-2.4-8.8-4-13.6l-16.8-54.4c-0.8-3.2-4-6.4-8-6.4h-15.2c-2.4,0-4.8,2.4-6.4,4.8s-1.6,5.6-0.8,8l35.2,108.8 c0.8,3.2,4,6.4,8,6.4h15.2c3.2,0,6.4-3.2,7.2-6.4l38.4-108c0.8-2.4,0.8-6.4-0.8-8.8C196.8,122.4,194.4,120,192,120z"
                                                                                                            />{" "}
                                                                                                            <path
                                                                                                                style={{ fill: "#FFFFFF" }}
                                                                                                                d="M246.4,121.6c-9.6,0-20.8,0.8-29.6,2.4c-4,0.8-8,4-8,8v106.4c0,4.8,7.2,9.6,11.2,9.6h13.6 c4.8,0,6.4-5.6,6.4-9.6V204c16,0.8,33.6-4.8,42.4-14.4c7.2-7.2,11.2-16.8,11.2-28.8s-4-21.6-12-28.8 C273.6,125.6,261.6,121.6,246.4,121.6z M264,161.6c0,9.6-7.2,15.2-20,15.2c-1.6,0-4,0-4,0v-28c0,0,4,0,5.6,0 C263.2,148.8,264,158.4,264,161.6z"
                                                                                                            />{" "}
                                                                                                            <path
                                                                                                                style={{ fill: "#FFFFFF" }}
                                                                                                                d="M392,120h-16.8c-4.8,0-7.2,5.6-7.2,10.4v44.8c0,0.8,0,0.8,0,1.6l-32.8-52c-1.6-2.4-4.8-4.8-7.2-4.8 h-15.2c-4.8,0-8.8,5.6-8.8,10.4v108c0,4.8,4,9.6,8.8,9.6h12.8c4.8,0,10.4-5.6,10.4-9.6v-56c0.8,1.6,1.6,3.2,3.2,5.6l33.6,56 c1.6,2.4,4,4.8,6.4,4.8h14.4c4.8,0,6.4-5.6,6.4-9.6V130.4C400,125.6,396.8,120,392,120z"
                                                                                                            />{" "}
                                                                                                        </g>{" "}
                                                                                                    </g>
                                                                                                </svg>{" "}
                                                                                            </a>
                                                                                        </div>
                                                                                        <div className="elementor-icon-box-content">
                                                                                            <h3 className="elementor-icon-box-title">
                                                                                                <a href="https://cybertron-tech.com/vpn-services/">
                                                                                                    VPN Services{" "}
                                                                                                </a>
                                                                                            </h3>
                                                                                            <p className="elementor-icon-box-description">
                                                                                                Secure your online privacy with industry-leading VPNs,
                                                                                                including NordVPN, ExpressVPN, CyberGhost, Surfshark,
                                                                                                ProtonVPN{" "}
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div
                                                                                className="elementor-element elementor-element-839e3f0 elementor-position-left elementor-vertical-align-middle elementor-mobile-position-left elementor-vertical-align-middle elementor-view-default elementor-widget elementor-widget-icon-box"
                                                                                data-id="839e3f0"
                                                                                data-element_type="widget"
                                                                                data-widget_type="icon-box.default"
                                                                            >
                                                                                <div className="elementor-widget-container">
                                                                                    <div className="elementor-icon-box-wrapper">
                                                                                        <div className="elementor-icon-box-icon">
                                                                                            <a
                                                                                                href="https://cybertron-tech.com/firewalls-network-security/"
                                                                                                className="elementor-icon"
                                                                                                tabIndex={-1}
                                                                                                aria-label="Firewalls & Network Security"
                                                                                            >
                                                                                                <svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    width="800px"
                                                                                                    height="800px"
                                                                                                    viewBox="0 0 32 32"
                                                                                                    id="icon"
                                                                                                    fill="#000000"
                                                                                                >
                                                                                                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                                                                                    <g
                                                                                                        id="SVGRepo_tracerCarrier"
                                                                                                        strokeLinecap="round"
                                                                                                        strokeLinejoin="round"
                                                                                                    />
                                                                                                    <g id="SVGRepo_iconCarrier">
                                                                                                        <defs>
                                                                                                            <style
                                                                                                                dangerouslySetInnerHTML={{
                                                                                                                    __html:
                                                                                                                        " .cls-1 { fill: #14B69E; } .cls-2 { fill: none; } "
                                                                                                                }}
                                                                                                            />
                                                                                                        </defs>
                                                                                                        <path
                                                                                                            className="cls-1"
                                                                                                            d="M28,20V17a4,4,0,0,0-8,0v3a2.0023,2.0023,0,0,0-2,2v6a2.0023,2.0023,0,0,0,2,2h8a2.0023,2.0023,0,0,0,2-2V22A2.0023,2.0023,0,0,0,28,20Zm-6-3a2,2,0,0,1,4,0v3H22Zm6,11H20V22h8Z"
                                                                                                            transform="translate(0 0)"
                                                                                                        />
                                                                                                        <path
                                                                                                            className="cls-1"
                                                                                                            d="M15,27H4a2,2,0,0,1-2-2V22a2,2,0,0,1,2-2H15v2H4v3H15Z"
                                                                                                            transform="translate(0 0)"
                                                                                                        />
                                                                                                        <path
                                                                                                            className="cls-1"
                                                                                                            d="M17,18H8a2,2,0,0,1-2-2V13a2,2,0,0,1,2-2H19v2H8v3h9Z"
                                                                                                            transform="translate(0 0)"
                                                                                                        />
                                                                                                        <path
                                                                                                            className="cls-1"
                                                                                                            d="M22,9H4A2,2,0,0,1,2,7V4A2,2,0,0,1,4,2H22a2,2,0,0,1,2,2V7A2,2,0,0,1,22,9ZM4,7H22V4H4Z"
                                                                                                            transform="translate(0 0)"
                                                                                                        />
                                                                                                        <rect
                                                                                                            id="_Transparent_Rectangle_"
                                                                                                            data-name="<Transparent Rectangle>"
                                                                                                            className="cls-2"
                                                                                                            width={32}
                                                                                                            height={32}
                                                                                                        />
                                                                                                    </g>
                                                                                                </svg>{" "}
                                                                                            </a>
                                                                                        </div>
                                                                                        <div className="elementor-icon-box-content">
                                                                                            <h3 className="elementor-icon-box-title">
                                                                                                <a href="https://cybertron-tech.com/firewalls-network-security/">
                                                                                                    Firewalls &amp; Network Security{" "}
                                                                                                </a>
                                                                                            </h3>
                                                                                            <p className="elementor-icon-box-description">
                                                                                                Fortify your network with top-tier firewalls - Palo Alto
                                                                                                Networks, Fortinet, Cisco ASA, Sophos, Check Point{" "}
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div
                                                                                className="elementor-element elementor-element-2c33903 elementor-position-left elementor-vertical-align-middle elementor-mobile-position-left elementor-vertical-align-middle elementor-view-default elementor-widget elementor-widget-icon-box"
                                                                                data-id="2c33903"
                                                                                data-element_type="widget"
                                                                                data-widget_type="icon-box.default"
                                                                            >
                                                                                <div className="elementor-widget-container">
                                                                                    <div className="elementor-icon-box-wrapper">
                                                                                        <div className="elementor-icon-box-icon">
                                                                                            <a
                                                                                                href="https://cybertron-tech.com/threat-detection-response/"
                                                                                                className="elementor-icon"
                                                                                                tabIndex={-1}
                                                                                                aria-label="Threat Detection & Response"
                                                                                            >
                                                                                                <svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                                                    fill="#14B69E"
                                                                                                    height="800px"
                                                                                                    width="800px"
                                                                                                    id="XMLID_80_"
                                                                                                    viewBox="0 0 24 24"
                                                                                                    xmlSpace="preserve"
                                                                                                >
                                                                                                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                                                                                    <g
                                                                                                        id="SVGRepo_tracerCarrier"
                                                                                                        strokeLinecap="round"
                                                                                                        strokeLinejoin="round"
                                                                                                    />
                                                                                                    <g id="SVGRepo_iconCarrier">
                                                                                                        {" "}
                                                                                                        <g>
                                                                                                            {" "}
                                                                                                            <g>
                                                                                                                {" "}
                                                                                                                <path d="M24,24H14v-2h8V8h-6V2H6v2H4V0h14.4L24,5.6V24z M18,6h3.6L18,2.4C18,2.4,18,6,18,6z M7.3,24c-3.6,0-6.5-2.8-6.5-6.3 c0-2.4,1.2-4.5,3.2-5.6V10h2V7.6c0-1.4,1.1-2.5,2.5-2.5h0.7c1.4,0,2.5,1.1,2.5,2.5c0,0.3,0.2,0.5,0.5,0.5h0.3 c0.3,0,0.5-0.2,0.5-0.5h2c0,1.4-1.1,2.5-2.5,2.5h-0.3c-1.4,0-2.5-1.1-2.5-2.5c0-0.3-0.2-0.5-0.5-0.5H8.5C8.2,7.1,8,7.3,8,7.6V10h2 v2.1c2.1,1.1,3.5,3.3,3.5,5.6C13.5,21.2,10.8,24,7.3,24z M6,12v1.4l-0.6,0.3c-1.6,0.6-2.6,2.2-2.6,4c0,2.3,2,4.3,4.5,4.3 c2.4,0,4.3-1.9,4.3-4.3c0-1.7-1.2-3.3-2.9-4l-0.6-0.3V12H6z" />{" "}
                                                                                                            </g>{" "}
                                                                                                        </g>{" "}
                                                                                                    </g>
                                                                                                </svg>{" "}
                                                                                            </a>
                                                                                        </div>
                                                                                        <div className="elementor-icon-box-content">
                                                                                            <h3 className="elementor-icon-box-title">
                                                                                                <a href="https://cybertron-tech.com/threat-detection-response/">
                                                                                                    Threat Detection &amp; Response{" "}
                                                                                                </a>
                                                                                            </h3>
                                                                                            <p className="elementor-icon-box-description">
                                                                                                Advanced threat detection to keep cyber risks at bay -
                                                                                                CrowdStrike Falcon, Microsoft Defender, SentinelOne,
                                                                                                Trend Micro XDR
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div
                                                                                className="elementor-element elementor-element-e7fb289 elementor-position-left elementor-vertical-align-middle elementor-mobile-position-left elementor-vertical-align-middle elementor-view-default elementor-widget elementor-widget-icon-box"
                                                                                data-id="e7fb289"
                                                                                data-element_type="widget"
                                                                                data-widget_type="icon-box.default"
                                                                            >
                                                                                <div className="elementor-widget-container">
                                                                                    <div className="elementor-icon-box-wrapper">
                                                                                        <div className="elementor-icon-box-icon">
                                                                                            <a
                                                                                                href="https://cybertron-tech.com/identity-access-management-iam/"
                                                                                                className="elementor-icon"
                                                                                                tabIndex={-1}
                                                                                                aria-label="Identity & Access Management (IAM)"
                                                                                            >
                                                                                                <svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                                                    width="800px"
                                                                                                    height="800px"
                                                                                                    viewBox="-117 0 490 490"
                                                                                                    preserveAspectRatio="xMidYMid"
                                                                                                    fill="#14B69E"
                                                                                                >
                                                                                                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                                                                                    <g
                                                                                                        id="SVGRepo_tracerCarrier"
                                                                                                        strokeLinecap="round"
                                                                                                        strokeLinejoin="round"
                                                                                                    />
                                                                                                    <g id="SVGRepo_iconCarrier">
                                                                                                        <g>
                                                                                                            <path
                                                                                                                d="M21,165.75 L0,172.606 L21.75,175.125 L21,165.75"
                                                                                                                fill="#345651"
                                                                                                            >
                                                                                                                {" "}
                                                                                                            </path>
                                                                                                            <path
                                                                                                                d="M19.955,206.806 L128,213.714 L236.045,206.806 L128,185.75 L19.955,206.806"
                                                                                                                fill="#345651"
                                                                                                            >
                                                                                                                {" "}
                                                                                                            </path>
                                                                                                            <path
                                                                                                                d="M234.5,175.125 L256,172.606 L234.5,166.875 L234.5,175.125"
                                                                                                                fill="#345651"
                                                                                                            >
                                                                                                                {" "}
                                                                                                            </path>
                                                                                                            <path
                                                                                                                d="M157.387,352.929 L213.993,366.325 L157.237,383.441 L157.387,352.929"
                                                                                                                fill="#3bceb8"
                                                                                                            >
                                                                                                                {" "}
                                                                                                            </path>
                                                                                                            <path
                                                                                                                d="M19.955,92.221 L19.955,54.019 L128,0 L128.482,0.405 L128.234,48.901 L128,49.003 L127.595,50.12 L68.497,73.976 L67.955,158.013 L99.407,152.723 L128,147.002 L128,490.03 L95.631,473.853 L95.631,428.082 L67.277,416.744 L67.277,202.069 L19.955,206.806 L19.955,168.611 L0,172.606 L0,100.198 L19.955,92.221"
                                                                                                                fill="#24bca6"
                                                                                                            >
                                                                                                                {" "}
                                                                                                            </path>
                                                                                                            <path
                                                                                                                d="M99.408,152.727 L67.277,159.151 L67.277,73.28 L99.408,83.298 L99.408,152.727"
                                                                                                                fill="#24bca6"
                                                                                                            >
                                                                                                                {" "}
                                                                                                            </path>
                                                                                                            <path
                                                                                                                d="M183.925,27.959 L236.031,54.019 L236.031,92.221 L256,100.198 L256,172.6 L236.031,168.611 L236.031,206.806 L210.59,204.268 L188.709,202.069 L188.709,245.008 L236.045,245.008 L236.045,284.292 L214.048,286.266 L214.048,325.877 L160.356,336.549 L160.356,382.319 L213.926,366.42 L214.048,406.8 L160.356,428.082 L160.356,473.853 L128,490.03 L128,147.002 L156.572,152.712 L187.155,156.75 L187.155,73.966 L128.817,51.468 L128,49.003 L128,0 L183.925,27.959"
                                                                                                                fill="#24bca6"
                                                                                                            >
                                                                                                                {" "}
                                                                                                            </path>
                                                                                                            <path
                                                                                                                d="M160.356,61.941 L128,49.01 L67.277,73.28 L99.408,83.298 L160.356,61.941"
                                                                                                                fill="#345651"
                                                                                                            >
                                                                                                                {" "}
                                                                                                            </path>
                                                                                                            <path
                                                                                                                d="M67.277,73.28 L128,49.01 L140.775,54.114 L160.356,61.941 L188.709,73.294 L187.194,74.835 L158.318,83.826 L156.578,83.298 L128,73.28 L99.408,83.298 L67.277,73.28"
                                                                                                                fill="#345651"
                                                                                                            >
                                                                                                                {" "}
                                                                                                            </path>
                                                                                                            <path
                                                                                                                d="M156.578,83.298 L188.709,73.294 L188.709,159.158 L156.578,152.712 L156.578,83.298"
                                                                                                                fill="#24bca6"
                                                                                                            >
                                                                                                                {" "}
                                                                                                            </path>
                                                                                                        </g>
                                                                                                    </g>
                                                                                                </svg>{" "}
                                                                                            </a>
                                                                                        </div>
                                                                                        <div className="elementor-icon-box-content">
                                                                                            <h3 className="elementor-icon-box-title">
                                                                                                <a href="https://cybertron-tech.com/identity-access-management-iam/">
                                                                                                    Identity &amp; Access Management (IAM){" "}
                                                                                                </a>
                                                                                            </h3>
                                                                                            <p className="elementor-icon-box-description">
                                                                                                Seamless identity &amp; access management for secure
                                                                                                logins using Okta, Microsoft Entra ID (Azure AD), Ping
                                                                                                Identity, OneLogin alike products{" "}
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div
                                                                                className="elementor-element elementor-element-f104ec7 elementor-position-left elementor-vertical-align-middle elementor-mobile-position-left elementor-vertical-align-middle elementor-view-default elementor-widget elementor-widget-icon-box"
                                                                                data-id="f104ec7"
                                                                                data-element_type="widget"
                                                                                data-widget_type="icon-box.default"
                                                                            >
                                                                                <div className="elementor-widget-container">
                                                                                    <div className="elementor-icon-box-wrapper">
                                                                                        <div className="elementor-icon-box-icon">
                                                                                            <a
                                                                                                href="https://cybertron-tech.com/backup-disaster-recovery/"
                                                                                                className="elementor-icon"
                                                                                                tabIndex={-1}
                                                                                                aria-label="Backup & Disaster Recovery"
                                                                                            >

                                                                                            </a>
                                                                                        </div>
                                                                                        <div className="elementor-icon-box-content">
                                                                                            <h3 className="elementor-icon-box-title">
                                                                                                <a href="https://cybertron-tech.com/backup-disaster-recovery/">
                                                                                                    Backup &amp; Disaster Recovery{" "}
                                                                                                </a>
                                                                                            </h3>
                                                                                            <p className="elementor-icon-box-description">
                                                                                                Let your peace of mind unhindered with these reliable
                                                                                                backup &amp; disaster recovery picks - Acronis, Veeam,
                                                                                                Carbonite, Backblaze
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>


                                                <li className="e-n-menu-item" onMouseEnter={() => handleMouseEnter("brands")}
                                                    onMouseLeave={handleMouseLeave}>
                                                    <div id="e-n-menu-title-2095" className="e-n-menu-title">
                                                        <a
                                                            className="e-n-menu-title-container e-focus e-link"
                                                            href="https://cybertron-tech.com/brands/"
                                                            data-focus-index={5}
                                                        >
                                                            {" "}
                                                            <span className="e-n-menu-title-text">Brands </span>
                                                        </a>{" "}
                                                        <button
                                                            id="e-n-menu-dropdown-icon-2095"
                                                            className="e-n-menu-dropdown-icon e-focus"
                                                            data-tab-index={5}
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                            aria-controls="e-n-menu-content-2095"
                                                            data-focus-index={6}
                                                        >
                                                            {openMenu === "brands" ? (
                                                                <span className="e-n-menu-dropdown-icon-opened">▲</span>
                                                            ) : (
                                                                <span className="e-n-menu-dropdown-icon-closed">▼</span>
                                                            )}
                                                        </button>
                                                    </div>
                                                    <div className={`e-n-menu-content ${openMenu === "brands" ? "e-active" : ""}`}>
                                                        <div
                                                            id="e-n-menu-content-2095"
                                                            data-tab-index={5}
                                                            aria-labelledby="e-n-menu-dropdown-icon-2095"
                                                            className={`elementor-element elementor-element-678d33b e-flex e-con-boxed e-con e-child animated fadeIn ${openMenu === "brands" ? "e-active" : ""}`}
                                                            data-id="46ed26f"
                                                            data-element_type="container"
                                                            data-settings='{"background_background":"classic"}'

                                                        >
                                                            <div className="e-con-inner">
                                                                <div
                                                                    className="elementor-element elementor-element-b04ab87 e-con-full e-flex e-con e-child"
                                                                    data-id="b04ab87"
                                                                    data-element_type="container"
                                                                    data-settings='{"background_background":"classic"}'
                                                                >
                                                                    <div
                                                                        className="elementor-element elementor-element-f8ea101 e-con-full e-flex e-con e-child"
                                                                        data-id="f8ea101"
                                                                        data-element_type="container"
                                                                        data-settings='{"background_background":"classic"}'
                                                                    >
                                                                        <div
                                                                            className="elementor-element elementor-element-382248e elementor-widget elementor-widget-heading"
                                                                            data-id="382248e"
                                                                            data-element_type="widget"
                                                                            data-widget_type="heading.default"
                                                                        >
                                                                            <div className="elementor-widget-container">
                                                                                <h2 className="elementor-heading-title elementor-size-default">
                                                                                    Industry-wise top brands
                                                                                </h2>{" "}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="elementor-element elementor-element-77fa256 e-con-full e-flex e-con e-child"
                                                                        data-id="77fa256"
                                                                        data-element_type="container"
                                                                    >
                                                                        <div
                                                                            className="elementor-element elementor-element-7e07086 e-con-full e-flex e-con e-child"
                                                                            data-id="7e07086"
                                                                            data-element_type="container"
                                                                            data-settings='{"background_background":"classic"}'
                                                                        >
                                                                            <div
                                                                                className="elementor-element elementor-element-597d286 e-con-full e-flex e-con e-child"
                                                                                data-id="597d286"
                                                                                data-element_type="container"
                                                                            >
                                                                                <div
                                                                                    className="elementor-element elementor-element-2a4c42c e-con-full e-flex e-con e-child"
                                                                                    data-id="2a4c42c"
                                                                                    data-element_type="container"
                                                                                    data-settings='{"background_background":"classic"}'
                                                                                >
                                                                                    <div
                                                                                        className="elementor-element elementor-element-e5643bc custom-list elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                                                                                        data-id="e5643bc"
                                                                                        data-element_type="widget"
                                                                                        data-widget_type="icon-list.default"
                                                                                    >
                                                                                        <div className="elementor-widget-container">
                                                                                            <ul className="elementor-icon-list-items">
                                                                                                <li className="elementor-icon-list-item">
                                                                                                    <span className="elementor-icon-list-icon">
                                                                                                        <svg
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                            height={2500}
                                                                                                            viewBox="-1 -.1 949.1 959.8"
                                                                                                            width={2474}
                                                                                                        >
                                                                                                            <path d="m925.8 456.3c10.4 23.2 17 48 19.7 73.3 2.6 25.3 1.3 50.9-4.1 75.8-5.3 24.9-14.5 48.8-27.3 70.8-8.4 14.7-18.3 28.5-29.7 41.2-11.3 12.6-23.9 24-37.6 34-13.8 10-28.5 18.4-44.1 25.3-15.5 6.8-31.7 12-48.3 15.4-7.8 24.2-19.4 47.1-34.4 67.7-14.9 20.6-33 38.7-53.6 53.6-20.6 15-43.4 26.6-67.6 34.4-24.2 7.9-49.5 11.8-75 11.8-16.9.1-33.9-1.7-50.5-5.1-16.5-3.5-32.7-8.8-48.2-15.7s-30.2-15.5-43.9-25.5c-13.6-10-26.2-21.5-37.4-34.2-25 5.4-50.6 6.7-75.9 4.1-25.3-2.7-50.1-9.3-73.4-19.7-23.2-10.3-44.7-24.3-63.6-41.4s-35-37.1-47.7-59.1c-8.5-14.7-15.5-30.2-20.8-46.3s-8.8-32.7-10.6-49.6c-1.8-16.8-1.7-33.8.1-50.7 1.8-16.8 5.5-33.4 10.8-49.5-17-18.9-31-40.4-41.4-63.6-10.3-23.3-17-48-19.6-73.3-2.7-25.3-1.3-50.9 4-75.8s14.5-48.8 27.3-70.8c8.4-14.7 18.3-28.6 29.6-41.2s24-24 37.7-34 28.5-18.5 44-25.3c15.6-6.9 31.8-12 48.4-15.4 7.8-24.3 19.4-47.1 34.3-67.7 15-20.6 33.1-38.7 53.7-53.7 20.6-14.9 43.4-26.5 67.6-34.4 24.2-7.8 49.5-11.8 75-11.7 16.9-.1 33.9 1.6 50.5 5.1s32.8 8.7 48.3 15.6c15.5 7 30.2 15.5 43.9 25.5 13.7 10.1 26.3 21.5 37.5 34.2 24.9-5.3 50.5-6.6 75.8-4s50 9.3 73.3 19.6c23.2 10.4 44.7 24.3 63.6 41.4 18.9 17 35 36.9 47.7 59 8.5 14.6 15.5 30.1 20.8 46.3 5.3 16.1 8.9 32.7 10.6 49.6 1.8 16.9 1.8 33.9-.1 50.8-1.8 16.9-5.5 33.5-10.8 49.6 17.1 18.9 31 40.3 41.4 63.6zm-333.2 426.9c21.8-9 41.6-22.3 58.3-39s30-36.5 39-58.4c9-21.8 13.7-45.2 13.7-68.8v-223q-.1-.3-.2-.7-.1-.3-.3-.6-.2-.3-.5-.5-.3-.3-.6-.4l-80.7-46.6v269.4c0 2.7-.4 5.5-1.1 8.1-.7 2.7-1.7 5.2-3.1 7.6s-3 4.6-5 6.5a32.1 32.1 0 0 1 -6.5 5l-191.1 110.3c-1.6 1-4.3 2.4-5.7 3.2 7.9 6.7 16.5 12.6 25.5 17.8 9.1 5.2 18.5 9.6 28.3 13.2 9.8 3.5 19.9 6.2 30.1 8 10.3 1.8 20.7 2.7 31.1 2.7 23.6 0 47-4.7 68.8-13.8zm-455.1-151.4c11.9 20.5 27.6 38.3 46.3 52.7 18.8 14.4 40.1 24.9 62.9 31s46.6 7.7 70 4.6 45.9-10.7 66.4-22.5l193.2-111.5.5-.5q.2-.2.3-.6.2-.3.3-.6v-94l-233.2 134.9c-2.4 1.4-4.9 2.4-7.5 3.2-2.7.7-5.4 1-8.2 1-2.7 0-5.4-.3-8.1-1-2.6-.8-5.2-1.8-7.6-3.2l-191.1-110.4c-1.7-1-4.2-2.5-5.6-3.4-1.8 10.3-2.7 20.7-2.7 31.1s1 20.8 2.8 31.1c1.8 10.2 4.6 20.3 8.1 30.1 3.6 9.8 8 19.2 13.2 28.2zm-50.2-417c-11.8 20.5-19.4 43.1-22.5 66.5s-1.5 47.1 4.6 70c6.1 22.8 16.6 44.1 31 62.9 14.4 18.7 32.3 34.4 52.7 46.2l193.1 111.6q.3.1.7.2h.7q.4 0 .7-.2.3-.1.6-.3l81-46.8-233.2-134.6c-2.3-1.4-4.5-3.1-6.5-5a32.1 32.1 0 0 1 -5-6.5c-1.3-2.4-2.4-4.9-3.1-7.6-.7-2.6-1.1-5.3-1-8.1v-227.1c-9.8 3.6-19.3 8-28.3 13.2-9 5.3-17.5 11.3-25.5 18-7.9 6.7-15.3 14.1-22 22.1-6.7 7.9-12.6 16.5-17.8 25.5zm663.3 154.4c2.4 1.4 4.6 3 6.6 5 1.9 1.9 3.6 4.1 5 6.5 1.3 2.4 2.4 5 3.1 7.6.6 2.7 1 5.4.9 8.2v227.1c32.1-11.8 60.1-32.5 80.8-59.7 20.8-27.2 33.3-59.7 36.2-93.7s-3.9-68.2-19.7-98.5-39.9-55.5-69.5-72.5l-193.1-111.6q-.3-.1-.7-.2h-.7q-.3.1-.7.2-.3.1-.6.3l-80.6 46.6 233.2 134.7zm80.5-121h-.1v.1zm-.1-.1c5.8-33.6 1.9-68.2-11.3-99.7-13.1-31.5-35-58.6-63-78.2-28-19.5-61-30.7-95.1-32.2-34.2-1.4-68 6.9-97.6 23.9l-193.1 111.5q-.3.2-.5.5l-.4.6q-.1.3-.2.7-.1.3-.1.7v93.2l233.2-134.7c2.4-1.4 5-2.4 7.6-3.2 2.7-.7 5.4-1 8.1-1 2.8 0 5.5.3 8.2 1 2.6.8 5.1 1.8 7.5 3.2l191.1 110.4c1.7 1 4.2 2.4 5.6 3.3zm-505.3-103.2c0-2.7.4-5.4 1.1-8.1.7-2.6 1.7-5.2 3.1-7.6 1.4-2.3 3-4.5 5-6.5 1.9-1.9 4.1-3.6 6.5-4.9l191.1-110.3c1.8-1.1 4.3-2.5 5.7-3.2-26.2-21.9-58.2-35.9-92.1-40.2-33.9-4.4-68.3 1-99.2 15.5-31 14.5-57.2 37.6-75.5 66.4-18.3 28.9-28 62.3-28 96.5v223q.1.4.2.7.1.3.3.6.2.3.5.6.2.2.6.4l80.7 46.6zm43.8 294.7 103.9 60 103.9-60v-119.9l-103.8-60-103.9 60z" />
                                                                                                        </svg>{" "}
                                                                                                    </span>
                                                                                                    <span className="elementor-icon-list-text">
                                                                                                        <b>OpenAI</b> <br />{" "}
                                                                                                        <span
                                                                                                            style={{
                                                                                                                color: "#7A7A7A",
                                                                                                                fontStyle: "italic",
                                                                                                                fontFamily: "Heebo",
                                                                                                                fontSize: 13
                                                                                                            }}
                                                                                                        >
                                                                                                            AI that thinks and creates.
                                                                                                        </span>
                                                                                                    </span>
                                                                                                </li>

                                                                                                <li className="elementor-icon-list-item">
                                                                                                    <span className="elementor-icon-list-icon">
                                                                                                        <svg
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                            fill="#000000"
                                                                                                            width="800px"
                                                                                                            height="800px"
                                                                                                            viewBox="0 0 24 24"
                                                                                                        >
                                                                                                            <path d="M.95 14.184 12 20.403l9.919-5.55v2.21L12 22.662l-10.484-5.96-.565.308v.77L12 24l11.05-6.218v-4.317l-.515-.309L12 19.118l-9.867-5.653v-2.21L12 16.805l11.05-6.218V6.32l-.515-.308L12 11.974 2.647 6.681 12 1.388l7.76 4.368.668-.411v-.566L12 0 .95 6.27v.72L12 13.207l9.919-5.55v2.26L12 15.52 1.516 9.56l-.565.308z" />
                                                                                                        </svg>{" "}
                                                                                                    </span>
                                                                                                    <span className="elementor-icon-list-text">
                                                                                                        <b>Databricks</b> <br />{" "}
                                                                                                        <span
                                                                                                            style={{
                                                                                                                color: "#7A7A7A",
                                                                                                                fontStyle: "italic",
                                                                                                                fontFamily: "Heebo",
                                                                                                                fontSize: 13
                                                                                                            }}
                                                                                                        >
                                                                                                            AI-powered big data platform.
                                                                                                        </span>{" "}
                                                                                                    </span>
                                                                                                </li>

                                                                                                <li className="elementor-icon-list-item">
                                                                                                    <span className="elementor-icon-list-icon">
                                                                                                        <svg
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                            width={28}
                                                                                                            height={28}
                                                                                                        >
                                                                                                            <path
                                                                                                                d="M0 0 C9.24 0 18.48 0 28 0 C28 9.24 28 18.48 28 28 C18.76 28 9.52 28 0 28 C0 18.76 0 9.52 0 0 Z "
                                                                                                                fill="#032D41"
                                                                                                                transform="translate(0,0)"
                                                                                                            />
                                                                                                            <path
                                                                                                                d="M0 0 C3.0190434 1.75299294 5.41511201 3.83022401 7 7 C7.36314739 11.43039813 7.4479438 14.00230699 5.625 18.0625 C2.51116136 20.36080947 1.72150288 20.16167067 -2 19.75 C-2.845625 19.60046875 -3.69125 19.4509375 -4.5625 19.296875 C-7.04201885 18.99488232 -8.64469319 19.23670613 -11 20 C-13.790071 17.12273928 -14.93351879 15.5318497 -15.4375 11.5 C-14.86342004 6.90736029 -13.42122315 4.52649893 -10.3125 1.1875 C-6.89127695 -0.56934427 -3.7048151 -0.78220664 0 0 Z "
                                                                                                                fill="#6DB54E"
                                                                                                                transform="translate(18,4)"
                                                                                                            />
                                                                                                            <path
                                                                                                                d="M0 0 C3 0.25 3 0.25 5 2.25 C5.33661952 5.4142235 5.49943411 7.43513382 3.8125 10.1875 C2 11.25 2 11.25 -0.5625 11.0625 C-3 10.25 -3 10.25 -5 8.25 C-5.25 5.25 -5.25 5.25 -5 2.25 C-3 0.25 -3 0.25 0 0 Z "
                                                                                                                fill="#052F42"
                                                                                                                transform="translate(14,9.75)"
                                                                                                            />
                                                                                                        </svg>{" "}
                                                                                                    </span>
                                                                                                    <span className="elementor-icon-list-text">
                                                                                                        <b>ServiceNow</b> <br />{" "}
                                                                                                        <span
                                                                                                            style={{
                                                                                                                color: "#7A7A7A",
                                                                                                                fontStyle: "italic",
                                                                                                                fontFamily: "Heebo",
                                                                                                                fontSize: 13
                                                                                                            }}
                                                                                                        >
                                                                                                            Automating business workflows.
                                                                                                        </span>
                                                                                                    </span>
                                                                                                </li>
                                                                                                <li className="elementor-icon-list-item">
                                                                                                    <span className="elementor-icon-list-icon">
                                                                                                        <svg
                                                                                                            aria-hidden="true"
                                                                                                            className="e-font-icon-svg e-fas-shopping-bag"
                                                                                                            viewBox="0 0 448 512"
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                        >
                                                                                                            <path d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z" />
                                                                                                        </svg>{" "}
                                                                                                    </span>
                                                                                                    <span className="elementor-icon-list-text">
                                                                                                        <b>Shopify</b> <br />{" "}
                                                                                                        <span
                                                                                                            style={{
                                                                                                                color: "#7A7A7A",
                                                                                                                fontStyle: "italic",
                                                                                                                fontFamily: "Heebo",
                                                                                                                fontSize: 13
                                                                                                            }}
                                                                                                        >
                                                                                                            Easy online store creation.
                                                                                                        </span>
                                                                                                    </span>
                                                                                                </li>
                                                                                                <li className="elementor-icon-list-item">
                                                                                                    <span className="elementor-icon-list-icon">
                                                                                                        <svg
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                                                            width="800px"
                                                                                                            height="800px"
                                                                                                            viewBox="0 -51.5 256 256"
                                                                                                            preserveAspectRatio="xMidYMid"
                                                                                                        >
                                                                                                            <g fillRule="evenodd">
                                                                                                                <path
                                                                                                                    d="M232.137523,0 L23.7592719,0 C10.5720702,0 -0.103257595,10.7799647 0.000639559736,23.862498 L0.000639559736,103.404247 C0.000639559736,116.591115 10.6767385,127.266612 23.8639402,127.266612 L122.558181,127.266612 L167.667206,152.384995 L157.410382,127.266612 L232.137523,127.266612 C245.325059,127.266612 255.999888,116.591115 255.999888,103.404247 L255.999888,23.862498 C255.999888,10.6752964 245.325059,0 232.137523,0 Z M19.3640061,18.4201481 C16.4334946,18.6294847 14.2355942,19.6761007 12.7703719,21.6645976 C11.3051496,23.5484931 10.781875,25.9556632 11.095813,28.6768382 C17.2707741,67.9247058 23.027062,94.4034429 28.3647436,108.113986 C30.4579757,113.137395 32.8651458,115.5451 35.690989,115.335764 C40.086656,115.021425 45.3196694,108.951332 51.4946305,97.1248185 C54.73908,90.4260478 59.7628237,80.3792294 66.5657276,66.9823567 C72.2170797,86.762992 79.9618646,101.625221 89.6956814,111.567705 C92.417057,114.393415 95.2427665,115.649434 97.9634733,115.440098 C100.371178,115.230761 102.254539,113.974742 103.510558,111.672039 C104.557241,109.683676 104.975914,107.380974 104.766578,104.764601 C104.138568,95.2407893 105.080917,81.9489193 107.69729,64.8892584 C110.417997,47.3063898 113.767382,34.6424627 117.849111,27.1069476 C118.686458,25.5370569 119.000128,23.9670994 118.895794,22.0832708 C118.686458,19.6760338 117.639775,17.6875369 115.651411,16.1176463 C113.663048,14.5477557 111.46468,13.8151445 109.057643,14.0244142 C106.022597,14.2337508 103.719895,15.6989731 102.150205,18.6294847 C95.6614396,30.4560654 91.0560348,49.6088916 88.335328,76.1924977 C84.3579328,66.145211 81.0085475,54.3185634 78.3921746,40.3987506 C77.2411578,34.2238564 74.4154483,31.2933449 69.8100434,31.6073497 C66.670329,31.8166194 64.0538892,33.9098515 61.9606572,37.8869122 L39.0401069,81.5302462 C35.2723159,66.3544807 31.7138615,47.8296643 28.4694119,25.9556632 C27.7368007,20.5133802 24.7016209,18.0014749 19.3640061,18.4201481 Z M221.044022,25.9559976 C228.475136,27.5259551 234.022221,31.5030159 237.789611,38.0965832 C241.138996,43.7482697 242.81302,50.5511737 242.81302,58.7146317 C242.81302,69.4943957 240.092314,79.3325464 234.649562,88.3333508 C228.370134,98.7995112 220.206676,104.032257 210.054854,104.032257 C208.275828,104.032257 206.391799,103.82292 204.402767,103.404247 C196.972321,101.834557 191.425236,97.857831 187.657177,91.264063 C184.308461,85.5076413 182.633768,78.6002028 182.633768,70.5410787 C182.633768,59.7612478 185.355144,49.923164 190.797226,41.0270948 C197.181658,30.5610681 205.345116,25.3280548 215.392603,25.3280548 C217.171629,25.3280548 219.055659,25.5373913 221.044022,25.9559976 Z M216.648622,82.5769291 C220.521015,79.1232099 223.137388,73.9947979 224.602744,67.0873594 C225.021417,64.6802562 225.335087,62.0637496 225.335087,59.3425746 C225.335087,56.3074616 224.707078,53.0630121 223.451058,49.8184957 C221.881368,45.7367667 219.788002,43.5389332 217.275963,43.0155917 C213.508574,42.2829805 209.845518,44.3762126 206.391799,49.5045577 C203.566089,53.4816184 201.786394,57.6680157 200.844713,61.9590813 C200.321038,64.3663182 200.111701,66.9830255 200.111701,69.5993984 C200.111701,72.6344445 200.739711,75.8788272 201.99573,79.1232099 C203.566089,83.2049389 205.658786,85.4026386 208.170825,85.9263145 C210.787198,86.4493215 213.612908,85.2983047 216.648622,82.5769291 Z M172.167608,38.0965832 C168.399549,31.5030159 162.74813,27.5259551 155.422019,25.9559976 C153.432987,25.5373913 151.549626,25.3280548 149.769931,25.3280548 C139.723112,25.3280548 131.559654,30.5610681 125.175223,41.0270948 C119.732472,49.923164 117.011765,59.7612478 117.011765,70.5410787 C117.011765,78.6002028 118.686458,85.5076413 122.035174,91.264063 C125.803233,97.857831 131.350318,101.834557 138.780763,103.404247 C140.769126,103.82292 142.653156,104.032257 144.432851,104.032257 C154.584672,104.032257 162.74813,98.7995112 169.027559,88.3333508 C174.47031,79.3325464 177.191017,69.4943957 177.191017,58.7146317 C177.191017,50.5511737 175.516324,43.7482697 172.167608,38.0965832 Z M158.980072,67.0873594 C157.515384,73.9947979 154.898343,79.1232099 151.02595,82.5769291 C147.990904,85.2983047 145.165195,86.4493215 142.548822,85.9263145 C140.036783,85.4026386 137.943417,83.2049389 136.373727,79.1232099 C135.117707,75.8788272 134.489698,72.6344445 134.489698,69.5993984 C134.489698,66.9830255 134.699034,64.3663182 135.22271,61.9590813 C136.16439,57.6680157 137.943417,53.4816184 140.769126,49.5045577 C144.223514,44.3762126 147.88657,42.2829805 151.65396,43.0155917 C154.165999,43.5389332 156.259365,45.7367667 157.829055,49.8184957 C159.085074,53.0630121 159.713084,56.3074616 159.713084,59.3425746 C159.713084,62.0637496 159.503748,64.6802562 158.980072,67.0873594 Z"
                                                                                                                    fill="#7F54B3"
                                                                                                                />
                                                                                                            </g>
                                                                                                        </svg>{" "}
                                                                                                    </span>
                                                                                                    <span className="elementor-icon-list-text">
                                                                                                        <b>WooCommerce</b> <br />{" "}
                                                                                                        <span
                                                                                                            style={{
                                                                                                                color: "#7A7A7A",
                                                                                                                fontStyle: "italic",
                                                                                                                fontFamily: "Heebo",
                                                                                                                fontSize: 13
                                                                                                            }}
                                                                                                        >
                                                                                                            WordPress-based online selling.
                                                                                                        </span>
                                                                                                    </span>
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elementor-element elementor-element-1020688 custom-list elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                                                                                        data-id={1020688}
                                                                                        data-element_type="widget"
                                                                                        data-widget_type="icon-list.default"
                                                                                    >
                                                                                        <div className="elementor-widget-container">
                                                                                            <ul className="elementor-icon-list-items">
                                                                                                <li className="elementor-icon-list-item">
                                                                                                    <span className="elementor-icon-list-icon">
                                                                                                        <svg
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                            width="800px"
                                                                                                            height="800px"
                                                                                                            viewBox="0 0 24 24"
                                                                                                        >
                                                                                                            <path
                                                                                                                fill="#E0B02F"
                                                                                                                d="M21.9101215,0.816194332 L22.7068826,0.816194332 L22.7068826,1.61295547 L21.9101215,1.61295547 L21.9101215,0.816194332 Z M21.9101215,1.61295547 L20.4331984,1.61295547 L20.4331984,2.4097166 L21.9101215,2.4097166 L21.9101215,1.61295547 Z M20.4331984,2.4097166 L20.4331984,3.96437247 L19.6947368,3.96437247 L19.6947368,2.4097166 L20.4331984,2.4097166 Z M20.4331984,3.96437247 L21.1910931,3.96437247 L21.1910931,4.72226721 L20.4331984,4.72226721 L20.4331984,3.96437247 Z M21.1910931,3.96437247 L21.1910931,3.21619433 L22.0267206,3.21619433 L22.0267206,3.96437247 L21.1910931,3.96437247 Z M20.4331984,4.72226721 L20.4331984,6.33522267 L19.7821862,6.33522267 L19.7821862,6.96680162 L19.0923077,6.96680162 L19.0923077,7.88987854 L18.4995951,7.88987854 L18.4995951,8.67692308 L17.7417004,8.67692308 L17.7417004,7.89959514 L16.9838057,7.89959514 L16.9740891,8.67692308 L17.7417004,8.67692308 L17.7417004,9.50283401 L16.9838057,9.50283401 L16.9935223,10.4064777 L16.3425101,10.4064777 L16.3522267,11.1643725 L15.7497976,11.1643725 L15.740081,12.0194332 C14.6042656,13.6541793 13.8165786,15.3703291 13.1068826,17.0817814 C13.0166656,17.2993424 12.9843157,17.4767392 12.8736842,17.6064777 C12.6350495,17.886327 12.2792569,17.974147 11.9894737,17.9659919 C11.4470717,17.9507255 10.9697158,17.6983044 10.7165992,17.1109312 C9.86728944,15.1400551 9.44710048,13.7603465 7.11174089,11.1740891 C6.73552723,10.7574572 6.82323501,10.2253563 7.12145749,10.0566802 C7.40843204,9.89436507 7.80877956,10.0107768 8.2582996,10.2607287 C9.51609859,10.9601153 10.2158747,11.6755026 11.7076923,13.6615385 C12.2511882,12.3496564 13.19015,10.5765708 14.3603239,8.65748988 L14.9044534,8.65748988 L14.9044534,7.89959514 L15.4194332,7.89959514 L15.4194332,7.151417 L16.1773279,7.151417 L16.1773279,5.9562753 L16.9935223,5.9562753 L16.9838057,6.71417004 L17.7417004,6.71417004 L17.7417004,5.9562753 L16.9935223,5.9562753 L16.9935223,5.27611336 L17.6736842,5.27611336 L17.6736842,4.72226721 L18.9271255,4.72226721 L18.9271255,5.49959514 L19.6947368,5.49959514 L19.6947368,4.72226721 L20.4331984,4.72226721 Z M18.9271255,4.72226721 L18.9271255,3.96437247 L19.6947368,3.96437247 L19.6947368,4.72226721 L18.9271255,4.72226721 Z M18.9271255,3.96437247 L18.1595142,3.96437247 L18.1595142,3.23562753 L18.9271255,3.23562753 L18.9271255,3.96437247 Z M20.4331999,2.41353172 L21.1897089,2.41353172 L21.1897089,3.21168583 L20.4331999,3.21168583 L20.4331999,2.41353172 Z M22.7027248,1.61537762 L23.5216979,1.61537762 L23.5216979,2.41353172 L22.7027248,2.41353172 L22.7027248,1.61537762 Z M16.5465587,4.54360314 L16.5465587,5.28582996 L15.6137652,5.28582996 L15.6137652,6.52955466 L14.6809717,6.52955466 L14.6809717,7.26441847 C13.6908876,6.74537522 12.5637461,6.45182186 11.3676113,6.45182186 C7.42126355,6.45182186 4.21619433,9.64716515 4.21619433,13.5935223 C4.21619433,17.5398576 7.42126355,20.7352227 11.3676113,20.7352227 C15.3139591,20.7352227 18.5093117,17.5398576 18.5093117,13.5935223 C18.5093117,12.3895534 18.2119011,11.2554858 17.6864896,10.2607287 L18.4121457,10.2607287 L18.4121457,9.32793522 L19.0340081,9.32793522 L19.0340081,8.3951417 L19.6558704,8.3951417 L19.6558704,7.61781377 L19.9265337,7.61781377 C21.1151026,9.30906076 21.8129555,11.3700091 21.8129555,13.5935223 C21.8129555,19.3395646 17.1525368,24 11.4064777,24 C5.66041864,24 1,19.3395646 1,13.5935223 C1,7.84746131 5.66041864,3.18704453 11.4064777,3.18704453 C13.2757551,3.18704453 15.0301395,3.68025475 16.5465587,4.54360314 L16.5465587,4.54360314 Z M22.7027248,0 L23.5216979,0 L23.5216979,0.817223514 L22.7027248,0.817223514 L22.7027248,0 Z"
                                                                                                            />
                                                                                                        </svg>{" "}
                                                                                                    </span>
                                                                                                    <span className="elementor-icon-list-text">
                                                                                                        <b>Norton</b> <br />{" "}
                                                                                                        <span
                                                                                                            style={{
                                                                                                                color: "#7A7A7A",
                                                                                                                fontStyle: "italic",
                                                                                                                fontFamily: "Heebo",
                                                                                                                fontSize: 13
                                                                                                            }}
                                                                                                        >
                                                                                                            Trusted antivirus and cybersecurity.
                                                                                                        </span>{" "}
                                                                                                    </span>
                                                                                                </li>
                                                                                                <li className="elementor-icon-list-item">
                                                                                                    <span className="elementor-icon-list-icon">
                                                                                                        <i
                                                                                                            aria-hidden="true"
                                                                                                            className="icon icon-wattpad"
                                                                                                        />{" "}
                                                                                                    </span>
                                                                                                    <span className="elementor-icon-list-text">
                                                                                                        <b>Webroot</b> <br />{" "}
                                                                                                        <span
                                                                                                            style={{
                                                                                                                color: "#7A7A7A",
                                                                                                                fontStyle: "italic",
                                                                                                                fontFamily: "Heebo",
                                                                                                                fontSize: 13
                                                                                                            }}
                                                                                                        >
                                                                                                            Lightweight antivirus protection.
                                                                                                        </span>
                                                                                                    </span>
                                                                                                </li>
                                                                                                <li className="elementor-icon-list-item">
                                                                                                    <span className="elementor-icon-list-icon">
                                                                                                        <svg
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                            fill="#000000"
                                                                                                            width="800px"
                                                                                                            height="800px"
                                                                                                            viewBox="0 0 24 24"
                                                                                                        >
                                                                                                            <path d="M12 4.823 1.58 0v19.177L12 24l10.42-4.823V0zm6.172 11.626-6.143 2.843-6.144-2.843V6.69l6.144 2.842 6.143-2.842z" />
                                                                                                        </svg>{" "}
                                                                                                    </span>
                                                                                                    <span className="elementor-icon-list-text">
                                                                                                        <b>McAfee</b> <br />{" "}
                                                                                                        <span
                                                                                                            style={{
                                                                                                                color: "#7A7A7A",
                                                                                                                fontStyle: "italic",
                                                                                                                fontFamily: "Heebo",
                                                                                                                fontSize: 13
                                                                                                            }}
                                                                                                        >
                                                                                                            Cybersecurity for personal and business use.
                                                                                                        </span>
                                                                                                    </span>
                                                                                                </li>
                                                                                                <li className="elementor-icon-list-item">
                                                                                                    <span className="elementor-icon-list-icon">
                                                                                                        <svg
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                            width="800px"
                                                                                                            height="800px"
                                                                                                            viewBox="0 0 1024 1024"
                                                                                                        >
                                                                                                            <circle
                                                                                                                cx={512}
                                                                                                                cy={512}
                                                                                                                r={512}
                                                                                                                style={{ fill: "red" }}
                                                                                                            />
                                                                                                            <path
                                                                                                                d="M608.3 499.9v-1.3c46.5-14 78.2-47.7 78.2-98.6 0-82.1-70-113.3-138-113.3H318.4v6.7l23.1 19.6c27.7 22.6 31.4 27 31.4 47.4v376.8h162.4c85.2 0 170.5-30.6 170.5-128.6-.1-57.7-40.9-102.3-97.5-108.7zM453 355.5h66.1c44.7 0 58.6 6.2 72.2 19 10.3 9.8 15 23.2 15.1 38.9 0 14.5-5 27.6-15.6 37.7-13.2 12.7-31.4 18.9-64.6 18.9H453V355.5zm73.8 313.1H453V538.7h77c64.9 0 95.5 16.5 95.5 63.6 0 59.3-57.4 66.3-98.7 66.3z"
                                                                                                                style={{ fill: "#fff" }}
                                                                                                            />
                                                                                                        </svg>{" "}
                                                                                                    </span>
                                                                                                    <span className="elementor-icon-list-text">
                                                                                                        <b>Bitdefender</b> <br />{" "}
                                                                                                        <span
                                                                                                            style={{
                                                                                                                color: "#7A7A7A",
                                                                                                                fontStyle: "italic",
                                                                                                                fontFamily: "Heebo",
                                                                                                                fontSize: 13
                                                                                                            }}
                                                                                                        >
                                                                                                            Advanced antivirus and security tools.
                                                                                                        </span>
                                                                                                    </span>
                                                                                                </li>
                                                                                                <li className="elementor-icon-list-item">
                                                                                                    <span className="elementor-icon-list-icon">
                                                                                                        <svg
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                            height={854}
                                                                                                            viewBox="-.70970564 1 299.70970564 101.02206659"
                                                                                                            width={2500}
                                                                                                        >
                                                                                                            <path
                                                                                                                d="m101.404 51.204c0 27.727-22.478 50.2-50.2 50.2-27.727 0-50.201-22.473-50.201-50.2s22.474-50.204 50.2-50.204c27.723 0 50.2 22.478 50.2 50.204"
                                                                                                                fill="#fff"
                                                                                                            />
                                                                                                            <path
                                                                                                                d="m116.582 24.67h27.346v5.612h-10.058v28.158h-7.238v-28.16h-10.05zm41.566 5.61h8.943c3.164.049 5.036 1.303 5.036 4.272 0 2.981-1.872 4.567-5.036 4.608h-8.943zm0 14.755h7.652s4.742 10.402 5.35 13.405h8.916l-6.85-13.886c4.828-1.246 6.078-7.002 6.078-11.375 0-6.853-7.644-8.722-14.054-8.51h-14.337v33.77h7.245v-13.403zm30.899-20.365h24.22v5.612h-16.975v7.939h15.617v5.61h-15.617v8.999h17.482v5.611h-24.727zm53.851 33.77-12.401-22.455-.1.093v22.362h-6.772v-33.77h8.98l12.33 22.067.093-.09v-21.977h6.775v33.77zm26.672-27.898h3.745c8.6-.09 9.864 5.634 9.864 11.01 0 5.383-1.265 11.375-9.864 11.278h-3.746zm-7.246 27.899h11.498c10.525.093 17.072-5.141 17.072-16.89 0-11.736-6.547-16.974-17.072-16.88h-11.498zm-123.113 27.752h-3.503v-14.763l-3.69 14.763h-3.637l-3.69-14.763-.056 14.763h-3.506v-18.743h5.655l3.373 12.77 3.38-12.77h5.674zm28.556-.001h-3.776v-18.742h3.776zm74.483-12.094c-.235.507-.638.854-1.209 1.048-.302.108-.66.164-1.078.183-.432.037-1.067.048-1.88.048h-3.246v-4.756h2.959c1.358 0 2.23.015 2.615.048a2.41 2.41 0 0 1 1.093.366c.358.212.6.47.746.787.15.332.224.709.224 1.123 0 .436-.075.82-.224 1.153m.332 4.301 1.168-.347c.91-.365 1.62-1.04 2.108-1.858.515-.839.638-2.287.638-3.331 0-.996-.366-2.07-.847-2.925-.563-.977-1.34-1.649-2.332-2.018a7.057 7.057 0 0 0 -1.31-.317c-.72-.101-1.715-.153-2.988-.153h-7.957v18.743h3.775v-7.387l3.6-.041 3.996 7.428h4.533zm37.168 3.656c-.888.802-1.996 1.205-3.324 1.205-1.06 0-1.973-.254-2.742-.761a4.695 4.695 0 0 1 -1.5-1.593 6.497 6.497 0 0 1 -.645-1.549c-.194-.709-.291-1.555-.291-2.533 0-1.75.336-3.171.992-4.272.877-1.44 2.272-2.167 4.186-2.167 2.026 0 3.466.798 4.324 2.406.556 1.045.84 2.37.84 3.98 0 2.407-.612 4.172-1.84 5.284m3.496-12.118c-1.615-1.873-3.895-2.802-6.838-2.802-2.895 0-5.134.877-6.705 2.62-1.57 1.745-2.357 4.137-2.357 7.17 0 2.585.638 4.715 1.917 6.413 1.578 2.112 3.98 3.167 7.193 3.167 3.078 0 5.406-.996 6.991-2.98 1.362-1.713 2.049-3.94 2.049-6.675 0-2.865-.754-5.17-2.25-6.913m-78.815 3.665c-.306-1.116-.906-3.216-4.118-3.216-1.87 0-4.612 1.246-4.612 6.514 0 3.35 1.317 6.353 4.612 6.353 2.152 0 3.652-1.22 4.118-3.5h3.888c-.773 4.045-3.418 6.854-8.081 6.854-4.95 0-8.499-3.324-8.499-9.756 0-6.517 3.753-9.819 8.547-9.819 5.57 0 7.831 3.82 8.033 6.57zm87.941-13.027h-2.018v5.369h-.806v-5.369h-2.003v-.724h4.827zm6.628 5.369h-.765v-5.1l-1.772 5.1h-.724l-1.742-5.185-.022 5.185h-.776v-6.092h1.216l1.436 4.313.16.503.109.4.35-.978 1.46-4.238h1.07z"
                                                                                                                fill="#231f20"
                                                                                                            />
                                                                                                            <g fill="#d71920">
                                                                                                                <path d="m10.148 60.92.067-.17.198-.538.194-.485.085-.224a52.788 52.788 0 0 1 3.545-7.092c.186-.4.38-.79.574-1.186l-6.014.015 1.459-3.224c4.97-1.354 13.248-4.122 21.15-11.785l.234-.015h4.16l-5.38 11.528 8.64-.026-1.585 3.432-8.625.03s-4.048 8.088-5.421 13.874c-1.063 6.458-.019 11.278 5.768 13.084 3.574 1.108 8.032.854 12.837-.507 11.181-3.481 23.134-11.17 31.879-21.344 14.397-16.724 14.677-33.837.638-38.206-9.01-2.798-21.713.313-33.468 7.32 14.657-9.454 30.774-13.893 41.896-10.431 2.085.649 3.89 1.544 5.428 2.648-9.189-10.128-22.455-16.486-37.207-16.486-27.719 0-50.2 22.478-50.2 50.2a49.993 49.993 0 0 0 8.327 27.694c-1.989-4.906-1.709-11.2.82-18.105" />
                                                                                                                <path d="m93.769 24.702c3.358 9.122-.843 22.735-12.438 36.21-17.408 20.243-44.907 32.484-61.411 27.346-2.049-.638-3.828-1.514-5.347-2.6 9.16 9.775 22.18 15.878 36.629 15.878 27.73 0 50.207-22.474 50.207-50.2 0-9.79-2.809-18.915-7.64-26.634" />
                                                                                                            </g>
                                                                                                        </svg>{" "}
                                                                                                    </span>
                                                                                                    <span className="elementor-icon-list-text">
                                                                                                        <b>Kaspersky</b> <br />{" "}
                                                                                                        <span
                                                                                                            style={{
                                                                                                                color: "#7A7A7A",
                                                                                                                fontStyle: "italic",
                                                                                                                fontFamily: "Heebo",
                                                                                                                fontSize: 13
                                                                                                            }}
                                                                                                        >
                                                                                                            Global cybersecurity and threat defense.
                                                                                                        </span>
                                                                                                    </span>
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div
                                                                                    className="elementor-element elementor-element-2a28aa2 e-con-full e-flex e-con e-child"
                                                                                    data-id="2a28aa2"
                                                                                    data-element_type="container"
                                                                                    data-settings='{"background_background":"classic"}'
                                                                                >
                                                                                    <div
                                                                                        className="elementor-element elementor-element-febc6b8 custom-list elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                                                                                        data-id="febc6b8"
                                                                                        data-element_type="widget"
                                                                                        data-widget_type="icon-list.default"
                                                                                    >
                                                                                        <div className="elementor-widget-container">
                                                                                            <ul className="elementor-icon-list-items">
                                                                                                <li className="elementor-icon-list-item">
                                                                                                    <span className="elementor-icon-list-icon">
                                                                                                        <svg
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                            fill="#000000"
                                                                                                            width="800px"
                                                                                                            height="800px"
                                                                                                            viewBox="0 0 24 24"
                                                                                                        >
                                                                                                            <title>Fortinet icon</title>
                                                                                                            <path d="M0 9.785h6.788v4.454H0zm8.666-6.33h6.668v4.453H8.666zm0 12.637h6.668v4.454H8.666zm8.522-6.307H24v4.454h-6.812zM2.792 3.455C1.372 3.814.265 5.404 0 7.425v.506h6.788V3.454zM0 16.091v.554c.24 1.926 1.276 3.466 2.624 3.9h4.188v-4.454zm24-8.184v-.506c-.265-1.998-1.372-3.587-2.792-3.972h-4.02v4.454H24zM21.376 20.57c1.324-.458 2.36-1.974 2.624-3.9v-.554h-6.812v4.454Z" />
                                                                                                        </svg>{" "}
                                                                                                    </span>
                                                                                                    <span className="elementor-icon-list-text">
                                                                                                        <b>Fortinet</b> <br />{" "}
                                                                                                        <span
                                                                                                            style={{
                                                                                                                color: "#7A7A7A",
                                                                                                                fontStyle: "italic",
                                                                                                                fontFamily: "Heebo",
                                                                                                                fontSize: 13
                                                                                                            }}
                                                                                                        >
                                                                                                            Strong cybersecurity for businesses.
                                                                                                        </span>{" "}
                                                                                                    </span>
                                                                                                </li>
                                                                                                <li className="elementor-icon-list-item">
                                                                                                    <span className="elementor-icon-list-icon">
                                                                                                        <svg
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                            width="800px"
                                                                                                            height="800px"
                                                                                                            viewBox="0 0 16 16"
                                                                                                            fill="none"
                                                                                                        >
                                                                                                            <g fill="#02A5DD">
                                                                                                                <path d="M4.55 6.579V7.8c0 .201-.108.33-.296.364-.192.034-.38-.093-.408-.276a.75.75 0 01-.008-.112V4.388c0-.217.099-.343.295-.381.193-.038.386.092.411.277.005.04.006.08.006.12V6.58zM3.572 9.308v.747a1.275 1.275 0 00-.573-.138c-.34-.007-.625.154-.744.422-.205.465.133.948.677.965.195.006.381-.03.558-.108l.062-.025.008-.003h.006l.009.003v.127c0 .178 0 .356-.002.535 0 .017-.023.044-.04.048-.455.107-.904.12-1.336-.09-.564-.273-.798-.807-.747-1.34.078-.798.8-1.298 1.635-1.223.076.007.152.015.227.027.06.01.12.023.18.036l.08.017zM10.893 10.055v-.756c-.052-.007-.102-.016-.153-.024a4.935 4.935 0 00-.334-.046c-.831-.077-1.555.42-1.634 1.222-.05.503.148 1.028.688 1.316.446.237.918.225 1.396.114.016-.004.038-.028.038-.043.002-.182.002-.364.002-.551v-.127l-.033.014-.054.023a1.277 1.277 0 01-.55.107c-.547-.013-.89-.5-.682-.967.118-.266.404-.427.744-.42.2.003.39.045.572.138z" />
                                                                                                                <path
                                                                                                                    fillRule="evenodd"
                                                                                                                    d="M14.556 10.63c0-.78-.626-1.366-1.462-1.367-.83 0-1.466.592-1.467 1.366-.001.772.638 1.372 1.463 1.37.826 0 1.466-.597 1.466-1.369zm-.732-.002c.004.387-.323.695-.737.695-.407 0-.73-.307-.73-.694.001-.386.325-.692.733-.692.409 0 .73.303.734.69z"
                                                                                                                    clipRule="evenodd"
                                                                                                                />
                                                                                                                <path d="M7.895 9.903v-.535a3.023 3.023 0 00-.757-.084c-.214.01-.419.055-.602.167-.46.285-.5.93-.072 1.235.139.099.295.163.464.207.117.03.237.076.336.14.122.08.106.233-.019.31a.488.488 0 01-.138.058c-.184.046-.37.036-.555.007a5.303 5.303 0 01-.262-.049l-.115-.023v.594c.208.056.749.085.955.058a1.36 1.36 0 00.606-.21c.448-.307.46-.935.017-1.245-.094-.066-.204-.112-.314-.157a6.167 6.167 0 01-.083-.035c-.055-.024-.112-.043-.168-.063a2.566 2.566 0 01-.162-.06c-.08-.034-.13-.097-.124-.184.006-.086.068-.142.148-.157.126-.023.256-.044.383-.039.107.005.213.023.32.042l.142.023zM11.473 5.547V7.83c.002.232.219.385.452.325.163-.042.258-.173.258-.362V4.366c0-.016 0-.032-.002-.049-.021-.218-.22-.356-.44-.307a.331.331 0 00-.268.337v1.2zM4.553 9.308h.7v2.622h-.7V9.308zM14.087 6.624V6.177v-.573a.425.425 0 00-.03-.164c-.064-.146-.227-.221-.398-.19a.335.335 0 00-.28.328c-.004.535-.002 1.07 0 1.605 0 .046.014.096.034.14a.357.357 0 00.392.187.33.33 0 00.281-.317c.002-.19.002-.38.001-.57zM10.272 6.622v.54a.337.337 0 01-.351.352.341.341 0 01-.359-.356V5.6a.34.34 0 01.358-.357c.211.001.352.144.352.36v1.018zM6.458 6.62v-.412-.605c-.001-.214-.145-.359-.355-.359s-.355.144-.356.358V7.16a.34.34 0 00.36.355.34.34 0 00.35-.354v-.54zM1.933 6.374v-.257-.514c0-.201.113-.341.286-.357.207-.019.353.086.395.29.017.082.028.167.028.25.003.458.003.915.001 1.372a.353.353 0 01-.476.339.331.331 0 01-.234-.32l-.001-.574v-.23zM7.657 6.725a23.847 23.847 0 010 .218l.001.237a.334.334 0 00.327.334c.203.009.366-.111.375-.302a7.751 7.751 0 000-.761c-.01-.19-.177-.314-.375-.303a.337.337 0 00-.327.335v.242zM.712 6.837v.344c-.004.192-.157.334-.356.333-.2 0-.352-.142-.354-.335a30.86 30.86 0 010-.697c.002-.192.158-.335.356-.334.199 0 .35.144.354.336v.353zM15.287 6.726V7.178c.003.192.15.334.345.336.202.003.36-.133.364-.326.006-.236.005-.472 0-.707-.003-.194-.158-.334-.358-.333a.342.342 0 00-.35.34c-.002.079-.002.159-.002.238z" />
                                                                                                            </g>
                                                                                                        </svg>{" "}
                                                                                                    </span>
                                                                                                    <span className="elementor-icon-list-text">
                                                                                                        <b>Cisco Security</b> <br />{" "}
                                                                                                        <span
                                                                                                            style={{
                                                                                                                color: "#7A7A7A",
                                                                                                                fontStyle: "italic",
                                                                                                                fontFamily: "Heebo",
                                                                                                                fontSize: 13
                                                                                                            }}
                                                                                                        >
                                                                                                            Protecting networks from threats.
                                                                                                        </span>
                                                                                                    </span>
                                                                                                </li>
                                                                                                <li className="elementor-icon-list-item">
                                                                                                    <span className="elementor-icon-list-icon">
                                                                                                        <svg
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                                                            height={1107}
                                                                                                            viewBox="32.5 18.1 365.1 165.4"
                                                                                                            width={2500}
                                                                                                        >
                                                                                                            <radialGradient
                                                                                                                id="a"
                                                                                                                cx="186.287"
                                                                                                                cy="73.284"
                                                                                                                gradientUnits="userSpaceOnUse"
                                                                                                                r="60.476"
                                                                                                            >
                                                                                                                <stop offset={0} stopColor="#c40047" />
                                                                                                                <stop offset=".887" stopColor="#ff0070" />
                                                                                                            </radialGradient>
                                                                                                            <linearGradient
                                                                                                                id="b"
                                                                                                                gradientUnits="userSpaceOnUse"
                                                                                                                x1="173.692"
                                                                                                                x2="223.853"
                                                                                                                y1="91.303"
                                                                                                                y2="98.407"
                                                                                                            >
                                                                                                                <stop
                                                                                                                    offset={0}
                                                                                                                    stopColor="#d02685"
                                                                                                                    stopOpacity={0}
                                                                                                                />
                                                                                                                <stop
                                                                                                                    offset=".264"
                                                                                                                    stopColor="#cc2579"
                                                                                                                    stopOpacity=".265"
                                                                                                                />
                                                                                                                <stop
                                                                                                                    offset=".734"
                                                                                                                    stopColor="#c0215b"
                                                                                                                    stopOpacity=".737"
                                                                                                                />
                                                                                                                <stop offset=".995" stopColor="#b81e47" />
                                                                                                            </linearGradient>
                                                                                                            <linearGradient
                                                                                                                id="c"
                                                                                                                gradientUnits="userSpaceOnUse"
                                                                                                                x1="182.285"
                                                                                                                x2="266.973"
                                                                                                                y1="52.978"
                                                                                                                y2="66.258"
                                                                                                            >
                                                                                                                <stop
                                                                                                                    offset=".006"
                                                                                                                    stopColor="#d31c5b"
                                                                                                                    stopOpacity={0}
                                                                                                                />
                                                                                                                <stop
                                                                                                                    offset=".081"
                                                                                                                    stopColor="#d63069"
                                                                                                                    stopOpacity=".125"
                                                                                                                />
                                                                                                                <stop
                                                                                                                    offset=".235"
                                                                                                                    stopColor="#dd648d"
                                                                                                                    stopOpacity=".381"
                                                                                                                />
                                                                                                                <stop
                                                                                                                    offset=".453"
                                                                                                                    stopColor="#e8b6c7"
                                                                                                                    stopOpacity=".742"
                                                                                                                />
                                                                                                                <stop offset=".608" stopColor="#f1f5f3" />
                                                                                                            </linearGradient>
                                                                                                            <linearGradient
                                                                                                                id="d"
                                                                                                                gradientUnits="userSpaceOnUse"
                                                                                                                x1="183.704"
                                                                                                                x2="244.672"
                                                                                                                y1="96.112"
                                                                                                                y2="63.596"
                                                                                                            >
                                                                                                                <stop
                                                                                                                    offset=".006"
                                                                                                                    stopColor="#d31c5b"
                                                                                                                    stopOpacity={0}
                                                                                                                />
                                                                                                                <stop
                                                                                                                    offset=".187"
                                                                                                                    stopColor="#d8225f"
                                                                                                                    stopOpacity=".356"
                                                                                                                />
                                                                                                                <stop
                                                                                                                    offset=".436"
                                                                                                                    stopColor="#e7346b"
                                                                                                                    stopOpacity=".845"
                                                                                                                />
                                                                                                                <stop offset=".515" stopColor="#ed3b70" />
                                                                                                                <stop offset=".625" stopColor="#ed6892" />
                                                                                                                <stop offset=".739" stopColor="#ed91af" />
                                                                                                                <stop offset=".844" stopColor="#edaec5" />
                                                                                                                <stop offset=".934" stopColor="#edc0d2" />
                                                                                                                <stop offset={1} stopColor="#edc6d7" />
                                                                                                            </linearGradient>
                                                                                                            <linearGradient
                                                                                                                id="e"
                                                                                                                gradientUnits="userSpaceOnUse"
                                                                                                                x1="179.206"
                                                                                                                x2="202.651"
                                                                                                                y1="30.193"
                                                                                                                y2="88.055"
                                                                                                            >
                                                                                                                <stop
                                                                                                                    offset={0}
                                                                                                                    stopColor="#fff"
                                                                                                                    stopOpacity=".8"
                                                                                                                />
                                                                                                                <stop
                                                                                                                    offset=".397"
                                                                                                                    stopColor="#ffd6ff"
                                                                                                                    stopOpacity=".478"
                                                                                                                />
                                                                                                                <stop
                                                                                                                    offset=".986"
                                                                                                                    stopColor="#ff93ff"
                                                                                                                    stopOpacity={0}
                                                                                                                />
                                                                                                            </linearGradient>
                                                                                                            <path d="m32.5 165.8c0-9.8 7.3-17.8 17.9-17.8 6.5 0 10.3 2.2 13.5 5.3l-4.8 5.5c-2.6-2.4-5.3-3.9-8.8-3.9-5.8 0-9.9 4.8-9.9 10.7v.1c0 5.9 4.1 10.8 9.9 10.8 3.9 0 6.3-1.6 9-4l4.8 4.9c-3.5 3.8-7.4 6.1-14.1 6.1-10 0-17.5-7.8-17.5-17.7zm37.7-17.2h7.5v13.6h13.9v-13.6h7.5v34.3h-7.5v-13.8h-13.9v13.8h-7.5zm38.1 0h25.9v6.7h-18.4v7h16.2v6.7h-16.2v7.2h18.6v6.7h-26.1zm31.3 17.2c0-9.8 7.3-17.8 17.9-17.8 6.5 0 10.3 2.2 13.5 5.3l-4.8 5.5c-2.6-2.4-5.3-3.9-8.8-3.9-5.8 0-9.9 4.8-9.9 10.7v.1c0 5.9 4.1 10.8 9.9 10.8 3.9 0 6.3-1.6 9-4l4.8 4.9c-3.5 3.8-7.4 6.1-14.1 6.1-10 0-17.5-7.8-17.5-17.7zm37.2-17.2h7.5v15l13.9-15h9.1l-14 14.5 14.6 19.7h-8.9l-10.6-14.6-4 4.1v10.5h-7.5v-34.2z" />
                                                                                                            <path
                                                                                                                d="m224.7 148.6h14c8.2 0 13.1 4.9 13.1 11.9v.1c0 7.9-6.2 12-13.9 12h-5.7v10.3h-7.5zm13.5 17.3c3.8 0 6-2.3 6-5.2v-.1c0-3.4-2.3-5.2-6.1-5.2h-5.8v10.5zm18.5-.1c0-9.8 7.7-17.8 18.3-17.8s18.2 7.9 18.2 17.6v.1c0 9.7-7.7 17.7-18.3 17.7-10.6.1-18.2-7.8-18.2-17.6zm28.6 0c0-6-4.3-10.9-10.4-10.9s-10.3 4.8-10.3 10.7v.1c0 5.9 4.3 10.8 10.4 10.8s10.3-4.8 10.3-10.7zm15.2-17.2h7.5v34.3h-7.5zm17 0h7l16.1 21.1v-21.1h7.4v34.3h-6.4l-16.6-21.8v21.8h-7.4v-34.3zm47.6 7h-10.4v-7h28.4v7h-10.4v27.3h-7.6z"
                                                                                                                fill="#da1572"
                                                                                                            />
                                                                                                            <path
                                                                                                                d="m243.4 69.7c-4.3 2-9.5 2-13.9-.5l-12.2 16.3c1.5 1.8 2.4 4 2.5 6.3.1 2-.4 4.1-1.6 6-3.1 4.8-9.4 6.1-14.2 3.1-1.6-1.1-2.9-2.5-3.7-4.1-1.4-2.9-1.4-6.3.1-9.3l-9.9-7.4-3 4.1-11.3-8.5 8.5-11.3 11.3 8.5-3 4.1 10 7.5c3.1-2.6 7.5-3.2 11.3-1.3l12.1-16.2c-4.9-4.8-6.1-12.4-2.6-18.5.7-1.2 1.6-2.3 2.5-3.2-6.6-4.5-14.7-7.1-23.3-7.1-22.9 0-41.5 18.6-41.5 41.5s18.6 41.5 41.5 41.5 41.5-18.6 41.5-41.5c0-3.6-.4-6.8-1.1-10z"
                                                                                                                fill="url(#a)"
                                                                                                            />
                                                                                                            <path
                                                                                                                d="m219.7 91.8c.1 2-.4 4.1-1.6 6-3.1 4.8-9.4 6.1-14.2 3.1-1.6-1.1-2.9-2.5-3.7-4.1-21.9-1.4-36.9-26.7-37.2-17.1-.5 18.9 16.3 38.7 39.3 38.7 22.9 0 39-19.3 39-38.7.1-7.2-8.3 4.8-21.6 12.1z"
                                                                                                                fill="url(#b)"
                                                                                                                opacity=".85"
                                                                                                            />
                                                                                                            <path d="m264.3 45.4c-5.4 6.7-15.2 7.8-21.9 2.4s-7.8-15.2-2.4-21.9 15.2-7.8 21.9-2.4c6.7 5.3 7.8 15.1 2.4 21.9z" />
                                                                                                            <path
                                                                                                                d="m223.8 48.3c.2-.4.5-.7.7-1-7.3-5-17.3-7.6-26.5-6.2-9.9 1.3-19.1 7-24.5 13.3-5.6 6.1-7.8 11.7-7.9 12 35.4-21.7 42.6-.5 57.7 4.5l3-4c-4.9-4.8-6.1-12.5-2.5-18.6z"
                                                                                                                fill="url(#c)"
                                                                                                            />
                                                                                                            <path
                                                                                                                d="m227.5 71.8c2.4.2 5 .1 7.9-.7-2-.2-4-.8-5.9-1.9z"
                                                                                                                fill="url(#d)"
                                                                                                            />
                                                                                                            <path
                                                                                                                d="m204 100.8c-4.5-2.9-6-8.7-3.5-13.4l-9.9-7.4-3 4.1-11.3-8.5 8.5-11.3 11.3 8.5-3 4.1 10 7.5c3.1-2.6 7.5-3.2 11.3-1.3l12.1-16.2c-4.9-4.8-6.1-12.4-2.6-18.5.7-1.2 1.6-2.3 2.5-3.2-6.6-4.5-14.7-7.1-23.3-7.1-22.9 0-41.5 18.6-41.5 41.5s18.6 41.5 41.5 41.5z"
                                                                                                                fill="url(#e)"
                                                                                                            />
                                                                                                            <path
                                                                                                                d="m390.2 153.3h-.8v-4h-1.5v-.8h3.8v.8h-1.5zm5.1-1.2-1.5-2.2v3.4h-.8v-4.7h.9l1.4 2.2 1.4-2.2h.9v4.7h-.8v-3.4z"
                                                                                                                fill="#da1572"
                                                                                                            />
                                                                                                            <path d="m32.5 165.8c0-9.8 7.3-17.8 17.9-17.8 6.5 0 10.3 2.2 13.5 5.3l-4.8 5.5c-2.6-2.4-5.3-3.9-8.8-3.9-5.8 0-9.9 4.8-9.9 10.7v.1c0 5.9 4.1 10.8 9.9 10.8 3.9 0 6.3-1.6 9-4l4.8 4.9c-3.5 3.8-7.4 6.1-14.1 6.1-10 0-17.5-7.8-17.5-17.7zm37.7-17.2h7.5v13.6h13.9v-13.6h7.5v34.3h-7.5v-13.8h-13.9v13.8h-7.5zm38.1 0h25.9v6.7h-18.4v7h16.2v6.7h-16.2v7.2h18.6v6.7h-26.1zm31.3 17.2c0-9.8 7.3-17.8 17.9-17.8 6.5 0 10.3 2.2 13.5 5.3l-4.8 5.5c-2.6-2.4-5.3-3.9-8.8-3.9-5.8 0-9.9 4.8-9.9 10.7v.1c0 5.9 4.1 10.8 9.9 10.8 3.9 0 6.3-1.6 9-4l4.8 4.9c-3.5 3.8-7.4 6.1-14.1 6.1-10 0-17.5-7.8-17.5-17.7zm37.2-17.2h7.5v15l13.9-15h9.1l-14 14.5 14.6 19.7h-8.9l-10.6-14.6-4 4.1v10.5h-7.5v-34.2z" />
                                                                                                            <path
                                                                                                                d="m224.7 148.6h14c8.2 0 13.1 4.9 13.1 11.9v.1c0 7.9-6.2 12-13.9 12h-5.7v10.3h-7.5zm13.5 17.3c3.8 0 6-2.3 6-5.2v-.1c0-3.4-2.3-5.2-6.1-5.2h-5.8v10.5zm18.5-.1c0-9.8 7.7-17.8 18.3-17.8s18.2 7.9 18.2 17.6v.1c0 9.7-7.7 17.7-18.3 17.7-10.6.1-18.2-7.8-18.2-17.6zm28.6 0c0-6-4.3-10.9-10.4-10.9s-10.3 4.8-10.3 10.7v.1c0 5.9 4.3 10.8 10.4 10.8s10.3-4.8 10.3-10.7zm15.2-17.2h7.5v34.3h-7.5zm17 0h7l16.1 21.1v-21.1h7.4v34.3h-6.4l-16.6-21.8v21.8h-7.4v-34.3zm47.6 7h-10.4v-7h28.4v7h-10.4v27.3h-7.6z"
                                                                                                                fill="#da1572"
                                                                                                            />
                                                                                                            <path
                                                                                                                d="m243.4 69.7c-4.3 2-9.5 2-13.9-.5l-12.2 16.3c1.5 1.8 2.4 4 2.5 6.3.1 2-.4 4.1-1.6 6-3.1 4.8-9.4 6.1-14.2 3.1-1.6-1.1-2.9-2.5-3.7-4.1-1.4-2.9-1.4-6.3.1-9.3l-9.9-7.4-3 4.1-11.3-8.5 8.5-11.3 11.3 8.5-3 4.1 10 7.5c3.1-2.6 7.5-3.2 11.3-1.3l12.1-16.2c-4.9-4.8-6.1-12.4-2.6-18.5.7-1.2 1.6-2.3 2.5-3.2-6.6-4.5-14.7-7.1-23.3-7.1-22.9 0-41.5 18.6-41.5 41.5s18.6 41.5 41.5 41.5 41.5-18.6 41.5-41.5c0-3.6-.4-6.8-1.1-10z"
                                                                                                                fill="url(#a)"
                                                                                                            />
                                                                                                            <path
                                                                                                                d="m219.7 91.8c.1 2-.4 4.1-1.6 6-3.1 4.8-9.4 6.1-14.2 3.1-1.6-1.1-2.9-2.5-3.7-4.1-21.9-1.4-36.9-26.7-37.2-17.1-.5 18.9 16.3 38.7 39.3 38.7 22.9 0 39-19.3 39-38.7.1-7.2-8.3 4.8-21.6 12.1z"
                                                                                                                fill="url(#b)"
                                                                                                                opacity=".85"
                                                                                                            />
                                                                                                            <path d="m264.3 45.4c-5.4 6.7-15.2 7.8-21.9 2.4s-7.8-15.2-2.4-21.9 15.2-7.8 21.9-2.4c6.7 5.3 7.8 15.1 2.4 21.9z" />
                                                                                                            <path
                                                                                                                d="m223.8 48.3c.2-.4.5-.7.7-1-7.3-5-17.3-7.6-26.5-6.2-9.9 1.3-19.1 7-24.5 13.3-5.6 6.1-7.8 11.7-7.9 12 35.4-21.7 42.6-.5 57.7 4.5l3-4c-4.9-4.8-6.1-12.5-2.5-18.6z"
                                                                                                                fill="url(#c)"
                                                                                                            />
                                                                                                            <path
                                                                                                                d="m227.5 71.8c2.4.2 5 .1 7.9-.7-2-.2-4-.8-5.9-1.9z"
                                                                                                                fill="url(#d)"
                                                                                                            />
                                                                                                            <path
                                                                                                                d="m204 100.8c-4.5-2.9-6-8.7-3.5-13.4l-9.9-7.4-3 4.1-11.3-8.5 8.5-11.3 11.3 8.5-3 4.1 10 7.5c3.1-2.6 7.5-3.2 11.3-1.3l12.1-16.2c-4.9-4.8-6.1-12.4-2.6-18.5.7-1.2 1.6-2.3 2.5-3.2-6.6-4.5-14.7-7.1-23.3-7.1-22.9 0-41.5 18.6-41.5 41.5s18.6 41.5 41.5 41.5z"
                                                                                                                fill="url(#e)"
                                                                                                            />
                                                                                                            <path
                                                                                                                d="m390.2 153.3h-.8v-4h-1.5v-.8h3.8v.8h-1.5zm5.1-1.2-1.5-2.2v3.4h-.8v-4.7h.9l1.4 2.2 1.4-2.2h.9v4.7h-.8v-3.4z"
                                                                                                                fill="#da1572"
                                                                                                            />
                                                                                                            <path d="m32.5 165.8c0-9.8 7.3-17.8 17.9-17.8 6.5 0 10.3 2.2 13.5 5.3l-4.8 5.5c-2.6-2.4-5.3-3.9-8.8-3.9-5.8 0-9.9 4.8-9.9 10.7v.1c0 5.9 4.1 10.8 9.9 10.8 3.9 0 6.3-1.6 9-4l4.8 4.9c-3.5 3.8-7.4 6.1-14.1 6.1-10 0-17.5-7.8-17.5-17.7zm37.7-17.2h7.5v13.6h13.9v-13.6h7.5v34.3h-7.5v-13.8h-13.9v13.8h-7.5zm38.1 0h25.9v6.7h-18.4v7h16.2v6.7h-16.2v7.2h18.6v6.7h-26.1zm31.3 17.2c0-9.8 7.3-17.8 17.9-17.8 6.5 0 10.3 2.2 13.5 5.3l-4.8 5.5c-2.6-2.4-5.3-3.9-8.8-3.9-5.8 0-9.9 4.8-9.9 10.7v.1c0 5.9 4.1 10.8 9.9 10.8 3.9 0 6.3-1.6 9-4l4.8 4.9c-3.5 3.8-7.4 6.1-14.1 6.1-10 0-17.5-7.8-17.5-17.7zm37.2-17.2h7.5v15l13.9-15h9.1l-14 14.5 14.6 19.7h-8.9l-10.6-14.6-4 4.1v10.5h-7.5v-34.2z" />
                                                                                                            <path
                                                                                                                d="m224.7 148.6h14c8.2 0 13.1 4.9 13.1 11.9v.1c0 7.9-6.2 12-13.9 12h-5.7v10.3h-7.5zm13.5 17.3c3.8 0 6-2.3 6-5.2v-.1c0-3.4-2.3-5.2-6.1-5.2h-5.8v10.5zm18.5-.1c0-9.8 7.7-17.8 18.3-17.8s18.2 7.9 18.2 17.6v.1c0 9.7-7.7 17.7-18.3 17.7-10.6.1-18.2-7.8-18.2-17.6zm28.6 0c0-6-4.3-10.9-10.4-10.9s-10.3 4.8-10.3 10.7v.1c0 5.9 4.3 10.8 10.4 10.8s10.3-4.8 10.3-10.7zm15.2-17.2h7.5v34.3h-7.5zm17 0h7l16.1 21.1v-21.1h7.4v34.3h-6.4l-16.6-21.8v21.8h-7.4v-34.3zm47.6 7h-10.4v-7h28.4v7h-10.4v27.3h-7.6z"
                                                                                                                fill="#da1572"
                                                                                                            />
                                                                                                            <path
                                                                                                                d="m243.4 69.7c-4.3 2-9.5 2-13.9-.5l-12.2 16.3c1.5 1.8 2.4 4 2.5 6.3.1 2-.4 4.1-1.6 6-3.1 4.8-9.4 6.1-14.2 3.1-1.6-1.1-2.9-2.5-3.7-4.1-1.4-2.9-1.4-6.3.1-9.3l-9.9-7.4-3 4.1-11.3-8.5 8.5-11.3 11.3 8.5-3 4.1 10 7.5c3.1-2.6 7.5-3.2 11.3-1.3l12.1-16.2c-4.9-4.8-6.1-12.4-2.6-18.5.7-1.2 1.6-2.3 2.5-3.2-6.6-4.5-14.7-7.1-23.3-7.1-22.9 0-41.5 18.6-41.5 41.5s18.6 41.5 41.5 41.5 41.5-18.6 41.5-41.5c0-3.6-.4-6.8-1.1-10z"
                                                                                                                fill="url(#a)"
                                                                                                            />
                                                                                                            <path
                                                                                                                d="m219.7 91.8c.1 2-.4 4.1-1.6 6-3.1 4.8-9.4 6.1-14.2 3.1-1.6-1.1-2.9-2.5-3.7-4.1-21.9-1.4-36.9-26.7-37.2-17.1-.5 18.9 16.3 38.7 39.3 38.7 22.9 0 39-19.3 39-38.7.1-7.2-8.3 4.8-21.6 12.1z"
                                                                                                                fill="url(#b)"
                                                                                                                opacity=".85"
                                                                                                            />
                                                                                                            <path d="m264.3 45.4c-5.4 6.7-15.2 7.8-21.9 2.4s-7.8-15.2-2.4-21.9 15.2-7.8 21.9-2.4c6.7 5.3 7.8 15.1 2.4 21.9z" />
                                                                                                            <path
                                                                                                                d="m223.8 48.3c.2-.4.5-.7.7-1-7.3-5-17.3-7.6-26.5-6.2-9.9 1.3-19.1 7-24.5 13.3-5.6 6.1-7.8 11.7-7.9 12 35.4-21.7 42.6-.5 57.7 4.5l3-4c-4.9-4.8-6.1-12.5-2.5-18.6z"
                                                                                                                fill="url(#c)"
                                                                                                            />
                                                                                                            <path
                                                                                                                d="m227.5 71.8c2.4.2 5 .1 7.9-.7-2-.2-4-.8-5.9-1.9z"
                                                                                                                fill="url(#d)"
                                                                                                            />
                                                                                                            <path
                                                                                                                d="m204 100.8c-4.5-2.9-6-8.7-3.5-13.4l-9.9-7.4-3 4.1-11.3-8.5 8.5-11.3 11.3 8.5-3 4.1 10 7.5c3.1-2.6 7.5-3.2 11.3-1.3l12.1-16.2c-4.9-4.8-6.1-12.4-2.6-18.5.7-1.2 1.6-2.3 2.5-3.2-6.6-4.5-14.7-7.1-23.3-7.1-22.9 0-41.5 18.6-41.5 41.5s18.6 41.5 41.5 41.5z"
                                                                                                                fill="url(#e)"
                                                                                                            />
                                                                                                            <path
                                                                                                                d="m390.2 153.3h-.8v-4h-1.5v-.8h3.8v.8h-1.5zm5.1-1.2-1.5-2.2v3.4h-.8v-4.7h.9l1.4 2.2 1.4-2.2h.9v4.7h-.8v-3.4z"
                                                                                                                fill="#da1572"
                                                                                                            />
                                                                                                        </svg>{" "}
                                                                                                    </span>
                                                                                                    <span className="elementor-icon-list-text">
                                                                                                        <b>Check Point</b> <br />{" "}
                                                                                                        <span
                                                                                                            style={{
                                                                                                                color: "#7A7A7A",
                                                                                                                fontStyle: "italic",
                                                                                                                fontFamily: "Heebo",
                                                                                                                fontSize: 13
                                                                                                            }}
                                                                                                        >
                                                                                                            Advanced cyber threat defense.
                                                                                                        </span>
                                                                                                    </span>
                                                                                                </li>
                                                                                                <li className="elementor-icon-list-item">
                                                                                                    <span className="elementor-icon-list-icon">
                                                                                                        <svg
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                            width="800px"
                                                                                                            height="800px"
                                                                                                            viewBox="0 0 192 192"
                                                                                                            style={{ enableBackground: "new 0 0 192 192" }}
                                                                                                            xmlSpace="preserve"
                                                                                                        >
                                                                                                            <path
                                                                                                                d="M155.1 155.2h0c9.5-12.6 15.1-28.3 14.9-45.3-.4-40.4-33.8-73.3-74.2-73.2C55 36.8 22 69.9 22 110.6c0 16.7 5.5 32.1 14.9 44.5l34.8-57.6 13.1 21.8-3.3-16.2L96 78l24.4 41.9-3.5-16 3.5-5.6 34.7 56.9"
                                                                                                                style={{
                                                                                                                    fill: "none",
                                                                                                                    stroke: "#000000",
                                                                                                                    strokeWidth: 12,
                                                                                                                    strokeLinecap: "round",
                                                                                                                    strokeLinejoin: "round",
                                                                                                                    strokeMiterlimit: 10
                                                                                                                }}
                                                                                                            />
                                                                                                        </svg>{" "}
                                                                                                    </span>
                                                                                                    <span className="elementor-icon-list-text">
                                                                                                        <b>NordVPN</b> <br />{" "}
                                                                                                        <span
                                                                                                            style={{
                                                                                                                color: "#7A7A7A",
                                                                                                                fontStyle: "italic",
                                                                                                                fontFamily: "Heebo",
                                                                                                                fontSize: 13
                                                                                                            }}
                                                                                                        >
                                                                                                            Private and secure internet browsing.
                                                                                                        </span>
                                                                                                    </span>
                                                                                                </li>
                                                                                                <li className="elementor-icon-list-item">
                                                                                                    <span className="elementor-icon-list-icon">
                                                                                                        <svg
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                            width={28}
                                                                                                            height={28}
                                                                                                        >
                                                                                                            <path
                                                                                                                d="M0 0 C9.24 0 18.48 0 28 0 C28 9.24 28 18.48 28 28 C18.76 28 9.52 28 0 28 C0 18.76 0 9.52 0 0 Z "
                                                                                                                fill="#DB4147"
                                                                                                                transform="translate(0,0)"
                                                                                                            />
                                                                                                            <path
                                                                                                                d="M0 0 C1.62463842 -0.05395478 3.24978541 -0.09277195 4.875 -0.125 C6.23238281 -0.15980469 6.23238281 -0.15980469 7.6171875 -0.1953125 C10 0 10 0 12 2 C12.25 5 12.25 5 12 8 C10 10 10 10 6.7421875 10.1953125 C5.46601563 10.17210937 4.18984375 10.14890625 2.875 10.125 C0.95300781 10.09792969 0.95300781 10.09792969 -1.0078125 10.0703125 C-2.48894531 10.03550781 -2.48894531 10.03550781 -4 10 C-4 10.66 -4 11.32 -4 12 C-0.37 12 3.26 12 7 12 C6.67 13.32 6.34 14.64 6 16 C2.37 16 -1.26 16 -5 16 C-6.58706842 11.8922935 -7.10191901 10.40767604 -6 6 C-0.72 6 4.56 6 10 6 C10 5.34 10 4.68 10 4 C6.04 4 2.08 4 -2 4 C-1.34 2.68 -0.68 1.36 0 0 Z "
                                                                                                                fill="#FEFAFA"
                                                                                                                transform="translate(11,6)"
                                                                                                            />
                                                                                                        </svg>{" "}
                                                                                                    </span>
                                                                                                    <span className="elementor-icon-list-text">
                                                                                                        <b>ExpressVPN</b> <br />{" "}
                                                                                                        <span
                                                                                                            style={{
                                                                                                                color: "#7A7A7A",
                                                                                                                fontStyle: "italic",
                                                                                                                fontFamily: "Heebo",
                                                                                                                fontSize: 13
                                                                                                            }}
                                                                                                        >
                                                                                                            Fast, encrypted online protection.
                                                                                                        </span>{" "}
                                                                                                    </span>
                                                                                                </li>
                                                                                                <li className="elementor-icon-list-item">
                                                                                                    <span className="elementor-icon-list-icon">
                                                                                                        <svg
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                            width={28}
                                                                                                            height={28}
                                                                                                        >
                                                                                                            <path
                                                                                                                d="M0 0 C9.24 0 18.48 0 28 0 C28 9.24 28 18.48 28 28 C18.76 28 9.52 28 0 28 C0 18.76 0 9.52 0 0 Z "
                                                                                                                fill="#FBCA05"
                                                                                                                transform="translate(0,0)"
                                                                                                            />
                                                                                                            <path
                                                                                                                d="M0 0 C9.24 0 18.48 0 28 0 C28 9.24 28 18.48 28 28 C18.76 28 9.52 28 0 28 C0 18.76 0 9.52 0 0 Z M4 8 C2.46785112 11.06429776 2.77061452 13.6165642 3 17 C4.6470114 20.62342508 6.4327343 23.16816086 10 25 C15.30685731 25.50541498 18.73114172 25.51553035 23 22 C25.31037033 19.02952386 25.47390986 15.74827277 25.390625 12.03515625 C24.68178128 8.34208047 22.68861189 6.56356018 20 4 C12.79393291 1.59797764 9.12191896 2.87808104 4 8 Z "
                                                                                                                fill="#FFFDF8"
                                                                                                                transform="translate(0,0)"
                                                                                                            />
                                                                                                            <path
                                                                                                                d="M0 0 C1.4540625 0.2165625 1.4540625 0.2165625 2.9375 0.4375 C3.5975 1.4275 4.2575 2.4175 4.9375 3.4375 C3.9475 3.4375 2.9575 3.4375 1.9375 3.4375 C1.9375 4.7575 1.9375 6.0775 1.9375 7.4375 C3.2575 7.1075 4.5775 6.7775 5.9375 6.4375 C5.9375 8.4175 5.9375 10.3975 5.9375 12.4375 C2.30486489 14.76238647 -0.82935233 14.67711213 -5.0625 14.4375 C-6.63227574 12.86772426 -6.26987081 11.29553613 -6.3125 9.125 C-6.26630283 6.22381781 -6.11642317 4.56032499 -4.9375 1.875 C-3.0625 0.4375 -3.0625 0.4375 0 0 Z "
                                                                                                                fill="#403C2E"
                                                                                                                transform="translate(14.0625,6.5625)"
                                                                                                            />
                                                                                                            <path
                                                                                                                d="M0 0 C0.99 0.103125 1.98 0.20625 3 0.3125 C3.66 1.3025 4.32 2.2925 5 3.3125 C4.01 3.3125 3.02 3.3125 2 3.3125 C1.67 4.6325 1.34 5.9525 1 7.3125 C0.67 6.3225 0.34 5.3325 0 4.3125 C-0.99 4.3125 -1.98 4.3125 -3 4.3125 C-3.66 5.3025 -4.32 6.2925 -5 7.3125 C-5.125 4.9375 -5.125 4.9375 -5 2.3125 C-3 0.3125 -3 0.3125 0 0 Z "
                                                                                                                fill="#2A2D30"
                                                                                                                transform="translate(14,6.6875)"
                                                                                                            />
                                                                                                            <path
                                                                                                                d="M0 0 C1.32 0.33 2.64 0.66 4 1 C3.67 2.32 3.34 3.64 3 5 C2.01 5 1.02 5 0 5 C0 3.35 0 1.7 0 0 Z "
                                                                                                                fill="#F3C704"
                                                                                                                transform="translate(11,10)"
                                                                                                            />
                                                                                                        </svg>{" "}
                                                                                                    </span>
                                                                                                    <span className="elementor-icon-list-text">
                                                                                                        <b>CyberGhost</b> <br />{" "}
                                                                                                        <span
                                                                                                            style={{
                                                                                                                color: "#7A7A7A",
                                                                                                                fontStyle: "italic",
                                                                                                                fontFamily: "Heebo",
                                                                                                                fontSize: 13
                                                                                                            }}
                                                                                                        >
                                                                                                            Simple and safe VPN service.
                                                                                                        </span>
                                                                                                    </span>
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elementor-element elementor-element-4178781 custom-list elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                                                                                        data-id={4178781}
                                                                                        data-element_type="widget"
                                                                                        data-widget_type="icon-list.default"
                                                                                    >
                                                                                        <div className="elementor-widget-container">
                                                                                            <ul className="elementor-icon-list-items">
                                                                                                <li className="elementor-icon-list-item">
                                                                                                    <span className="elementor-icon-list-icon">
                                                                                                        <svg
                                                                                                            aria-hidden="true"
                                                                                                            className="e-font-icon-svg e-fab-google"
                                                                                                            viewBox="0 0 488 512"
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                        >
                                                                                                            <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                                                                                                        </svg>{" "}
                                                                                                    </span>
                                                                                                    <span className="elementor-icon-list-text">
                                                                                                        <b>Google (Alphabet Inc.)</b> <br />{" "}
                                                                                                        <span
                                                                                                            style={{
                                                                                                                color: "#7A7A7A",
                                                                                                                fontStyle: "italic",
                                                                                                                fontFamily: "Heebo",
                                                                                                                fontSize: 13
                                                                                                            }}
                                                                                                        >
                                                                                                            Search, ads, AI, and more.
                                                                                                        </span>{" "}
                                                                                                    </span>
                                                                                                </li>
                                                                                                <li className="elementor-icon-list-item">
                                                                                                    <span className="elementor-icon-list-icon">
                                                                                                        <svg
                                                                                                            aria-hidden="true"
                                                                                                            className="e-font-icon-svg e-fab-aws"
                                                                                                            viewBox="0 0 640 512"
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                        >
                                                                                                            <path d="M180.41 203.01c-.72 22.65 10.6 32.68 10.88 39.05a8.164 8.164 0 0 1-4.1 6.27l-12.8 8.96a10.66 10.66 0 0 1-5.63 1.92c-.43-.02-8.19 1.83-20.48-25.61a78.608 78.608 0 0 1-62.61 29.45c-16.28.89-60.4-9.24-58.13-56.21-1.59-38.28 34.06-62.06 70.93-60.05 7.1.02 21.6.37 46.99 6.27v-15.62c2.69-26.46-14.7-46.99-44.81-43.91-2.4.01-19.4-.5-45.84 10.11-7.36 3.38-8.3 2.82-10.75 2.82-7.41 0-4.36-21.48-2.94-24.2 5.21-6.4 35.86-18.35 65.94-18.18a76.857 76.857 0 0 1 55.69 17.28 70.285 70.285 0 0 1 17.67 52.36l-.01 69.29zM93.99 235.4c32.43-.47 46.16-19.97 49.29-30.47 2.46-10.05 2.05-16.41 2.05-27.4-9.67-2.32-23.59-4.85-39.56-4.87-15.15-1.14-42.82 5.63-41.74 32.26-1.24 16.79 11.12 31.4 29.96 30.48zm170.92 23.05c-7.86.72-11.52-4.86-12.68-10.37l-49.8-164.65c-.97-2.78-1.61-5.65-1.92-8.58a4.61 4.61 0 0 1 3.86-5.25c.24-.04-2.13 0 22.25 0 8.78-.88 11.64 6.03 12.55 10.37l35.72 140.83 33.16-140.83c.53-3.22 2.94-11.07 12.8-10.24h17.16c2.17-.18 11.11-.5 12.68 10.37l33.42 142.63L420.98 80.1c.48-2.18 2.72-11.37 12.68-10.37h19.72c.85-.13 6.15-.81 5.25 8.58-.43 1.85 3.41-10.66-52.75 169.9-1.15 5.51-4.82 11.09-12.68 10.37h-18.69c-10.94 1.15-12.51-9.66-12.68-10.75L328.67 110.7l-32.78 136.99c-.16 1.09-1.73 11.9-12.68 10.75h-18.3zm273.48 5.63c-5.88.01-33.92-.3-57.36-12.29a12.802 12.802 0 0 1-7.81-11.91v-10.75c0-8.45 6.2-6.9 8.83-5.89 10.04 4.06 16.48 7.14 28.81 9.6 36.65 7.53 52.77-2.3 56.72-4.48 13.15-7.81 14.19-25.68 5.25-34.95-10.48-8.79-15.48-9.12-53.13-21-4.64-1.29-43.7-13.61-43.79-52.36-.61-28.24 25.05-56.18 69.52-55.95 12.67-.01 46.43 4.13 55.57 15.62 1.35 2.09 2.02 4.55 1.92 7.04v10.11c0 4.44-1.62 6.66-4.87 6.66-7.71-.86-21.39-11.17-49.16-10.75-6.89-.36-39.89.91-38.41 24.97-.43 18.96 26.61 26.07 29.7 26.89 36.46 10.97 48.65 12.79 63.12 29.58 17.14 22.25 7.9 48.3 4.35 55.44-19.08 37.49-68.42 34.44-69.26 34.42zm40.2 104.86c-70.03 51.72-171.69 79.25-258.49 79.25A469.127 469.127 0 0 1 2.83 327.46c-6.53-5.89-.77-13.96 7.17-9.47a637.37 637.37 0 0 0 316.88 84.12 630.22 630.22 0 0 0 241.59-49.55c11.78-5 21.77 7.8 10.12 16.38zm29.19-33.29c-8.96-11.52-59.28-5.38-81.81-2.69-6.79.77-7.94-5.12-1.79-9.47 40.07-28.17 105.88-20.1 113.44-10.63 7.55 9.47-2.05 75.41-39.56 106.91-5.76 4.87-11.27 2.3-8.71-4.1 8.44-21.25 27.39-68.49 18.43-80.02z" />
                                                                                                        </svg>{" "}
                                                                                                    </span>
                                                                                                    <span className="elementor-icon-list-text">
                                                                                                        <b>Amazon Web Services (AWS)</b> <br />{" "}
                                                                                                        <span
                                                                                                            style={{
                                                                                                                color: "#7A7A7A",
                                                                                                                fontStyle: "italic",
                                                                                                                fontFamily: "Heebo",
                                                                                                                fontSize: 13
                                                                                                            }}
                                                                                                        >
                                                                                                            Cloud services powering the web.
                                                                                                        </span>
                                                                                                    </span>
                                                                                                </li>
                                                                                                <li className="elementor-icon-list-item">
                                                                                                    <span className="elementor-icon-list-icon">
                                                                                                        <svg
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                            width={2500}
                                                                                                            height={1000}
                                                                                                            viewBox="0 0 1000 400"
                                                                                                        >
                                                                                                            <path
                                                                                                                d="M0 0v27.367h194.648V0H0zm222.226 0v27.367h277.383S471.276 0 433.75 0H222.226zm331.797 0v27.367h167.812L711.875 0H554.023zm288.125 0l-9.961 27.367h166.289V0H842.148zM0 53.222v27.367h194.648V53.222H0zm222.226.039V80.59h309.57s-3.615-21.063-9.922-27.329H222.226zm331.797 0V80.59h186.211l-9.219-27.329H554.023zm268.203 0l-9.219 27.329h185.469V53.261h-176.25zM55.937 106.444v27.406h84.297v-27.406H55.937zm222.227 0v27.406h84.297v-27.406h-84.297zm166.289 0v27.406h84.297s5.352-14.473 5.352-27.406h-89.649zm165.508 0v27.406h149.453l-9.961-27.406H609.961zm193.906 0l-10 27.406h150.195v-27.406H803.867zm-747.93 53.262v27.367h84.297v-27.367H55.937zm222.227 0v27.367h215.312s18.012-14.042 23.75-27.367H278.164zm331.797 0v27.367h84.297v-15.234l5.352 15.234h154.414l5.742-15.234v15.234h84.297v-27.367H785.82l-8.398 23.18-8.438-23.18H609.961zM55.937 212.928v27.367h84.297v-27.367H55.937zm222.227 0v27.367h239.062c-5.739-13.281-23.75-27.367-23.75-27.367H278.164zm331.797 0v27.367h84.297v-27.367h-84.297zm99.609 0l10.195 27.367h115.781l9.688-27.367H709.57zm150.195 0v27.367h84.297v-27.367h-84.297zM55.937 266.15v27.366h84.297V266.15H55.937zm222.227 0v27.366h84.297V266.15h-84.297zm166.289 0v27.366h89.648c0-12.915-5.352-27.366-5.352-27.366h-84.296zm165.508 0v27.366h84.297V266.15h-84.297zm118.75 0l9.883 27.366h77.617l9.961-27.366h-97.461zm131.054 0v27.366h84.297V266.15h-84.297zM1.523 319.372v27.406h194.648v-27.406H1.523zm220.703 0v27.406h299.648c6.307-6.275 9.922-27.406 9.922-27.406h-309.57zm333.321 0v27.406h138.711v-27.406H555.547zm192.343 0l10.156 27.406h39.492l9.531-27.406H747.89zm111.875 0v27.406H1000v-27.406H859.765zM1.523 372.633V400h194.648v-27.367H1.523zm220.703 0v27.328H433.75c37.526 0 65.859-27.328 65.859-27.328H222.226zm333.321 0V400h138.711v-27.367H555.547zm211.601 0l9.766 27.29 1.68.038 9.922-27.328h-21.368zm92.617 0V400H1000v-27.367H859.765z"
                                                                                                                fill="#1f70c1"
                                                                                                            />
                                                                                                        </svg>{" "}
                                                                                                    </span>
                                                                                                    <span className="elementor-icon-list-text">
                                                                                                        <b>IBM</b> <br />{" "}
                                                                                                        <span
                                                                                                            style={{
                                                                                                                color: "#7A7A7A",
                                                                                                                fontStyle: "italic",
                                                                                                                fontFamily: "Heebo",
                                                                                                                fontSize: 13
                                                                                                            }}
                                                                                                        >
                                                                                                            AI, cloud, and enterprise tech.
                                                                                                        </span>
                                                                                                    </span>
                                                                                                </li>
                                                                                                <li className="elementor-icon-list-item">
                                                                                                    <span className="elementor-icon-list-icon">
                                                                                                        <svg
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                            width={28}
                                                                                                            height={28}
                                                                                                        >
                                                                                                            <path
                                                                                                                d="M0 0 C0.7940625 -0.01933594 1.588125 -0.03867188 2.40625 -0.05859375 C6.66152271 -0.02313314 8.52172695 0.268918 12.02734375 2.87890625 C14.57837432 6.43014287 14.66863497 8.31140832 14.4296875 12.53515625 C13.8027204 15.58449622 12.5321477 16.88867015 10 18.625 C4.28436434 20.53021189 -3.54002513 20.96513111 -9.21875 18.765625 C-11.00059923 17.5602564 -12.48091315 16.14408685 -14 14.625 C-14.2734375 12.734375 -14.2734375 12.734375 -14.375 10.375 C-14.42398437 9.60671875 -14.47296875 8.8384375 -14.5234375 8.046875 C-12.84615594 0.28631853 -6.63293415 -0.16151625 0 0 Z M-8.95703125 5.94921875 C-10.30232002 7.740674 -10.30232002 7.740674 -9.75 10.75 C-9.29066476 13.50290841 -9.29066476 13.50290841 -8 14.625 C-5.33997189 14.77817991 -2.7237812 14.85659875 -0.0625 14.875 C0.67935547 14.895625 1.42121094 14.91625 2.18554688 14.9375 C4.59467535 14.98962739 4.59467535 14.98962739 8 14.625 C10.29637779 11.86604365 10.29637779 11.86604365 9.75 9.0625 C9.16191948 6.47499433 9.16191948 6.47499433 7 4.625 C3.74742036 4.26593106 3.74742036 4.26593106 0.0625 4.3125 C-1.18402344 4.29574219 -2.43054688 4.27898438 -3.71484375 4.26171875 C-6.93520482 4.35957717 -6.93520482 4.35957717 -8.95703125 5.94921875 Z "
                                                                                                                fill="#E55743"
                                                                                                                transform="translate(14,4.375)"
                                                                                                            />
                                                                                                        </svg>{" "}
                                                                                                    </span>
                                                                                                    <span className="elementor-icon-list-text">
                                                                                                        <b>Oracle</b> <br />{" "}
                                                                                                        <span
                                                                                                            style={{
                                                                                                                color: "#7A7A7A",
                                                                                                                fontStyle: "italic",
                                                                                                                fontFamily: "Heebo",
                                                                                                                fontSize: 13
                                                                                                            }}
                                                                                                        >
                                                                                                            Business software and databases.
                                                                                                        </span>
                                                                                                    </span>
                                                                                                </li>
                                                                                                <li className="elementor-icon-list-item">
                                                                                                    <span className="elementor-icon-list-icon">
                                                                                                        <svg
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                            viewBox="0 0 2499.6 2500"
                                                                                                        >
                                                                                                            <path
                                                                                                                d="m1187.9 1187.9h-1187.9v-1187.9h1187.9z"
                                                                                                                fill="#f1511b"
                                                                                                            />
                                                                                                            <path
                                                                                                                d="m2499.6 1187.9h-1188v-1187.9h1187.9v1187.9z"
                                                                                                                fill="#80cc28"
                                                                                                            />
                                                                                                            <path
                                                                                                                d="m1187.9 2500h-1187.9v-1187.9h1187.9z"
                                                                                                                fill="#00adef"
                                                                                                            />
                                                                                                            <path
                                                                                                                d="m2499.6 2500h-1188v-1187.9h1187.9v1187.9z"
                                                                                                                fill="#fbbc09"
                                                                                                            />
                                                                                                        </svg>{" "}
                                                                                                    </span>
                                                                                                    <span className="elementor-icon-list-text">
                                                                                                        <b>Microsoft</b> <br />{" "}
                                                                                                        <span
                                                                                                            style={{
                                                                                                                color: "#7A7A7A",
                                                                                                                fontStyle: "italic",
                                                                                                                fontFamily: "Heebo",
                                                                                                                fontSize: 13
                                                                                                            }}
                                                                                                        >
                                                                                                            Software, cloud, and computing leader.
                                                                                                        </span>
                                                                                                    </span>
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div
                                                                                    className="elementor-element elementor-element-2c37344 e-con-full e-flex e-con e-child"
                                                                                    data-id="2c37344"
                                                                                    data-element_type="container"
                                                                                    data-settings='{"background_background":"classic"}'
                                                                                >
                                                                                    <div
                                                                                        className="elementor-element elementor-element-462f04e custom-list elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                                                                                        data-id="462f04e"
                                                                                        data-element_type="widget"
                                                                                        data-widget_type="icon-list.default"
                                                                                    >
                                                                                        <div className="elementor-widget-container">
                                                                                            <ul className="elementor-icon-list-items">
                                                                                                <li className="elementor-icon-list-item">
                                                                                                    <span className="elementor-icon-list-icon">
                                                                                                        <svg
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                            width={2259}
                                                                                                            height={2500}
                                                                                                            viewBox="0 0 123.16 136.326"
                                                                                                        >
                                                                                                            <g fillRule="evenodd" clipRule="evenodd">
                                                                                                                <path d="M105.166 3.116h7.479l-.235 1.324h-1.402c-.701 0-1.168-.155-1.168-.155V6.7c0 .856-.234 1.714-.234 2.57 0 .857-.234 1.714-.234 2.182h-1.869V9.27c0-.856.234-1.714.234-2.57 0-.935.232-2.025.232-2.415h-.934-.936c-.467 0-.934.155-.934.155V3.116h.001zM113.578 3.116h2.57c0 .467.234.935.234 1.168 0 .39.467 1.09.701 1.947 0 .234.234.857.234 1.324.232.857.701 1.714.701 1.714 0-.467.467-1.09.701-1.947.232-.623.701-1.558.934-2.181.234-.702.701-1.558.701-2.025h2.805v2.648c0 .935-.234 2.181-.234 3.038v2.649h-1.869V9.737 7.555c0-.701.234-1.324.234-1.792v-.855l-2.57 6.544h-1.871c0-.468-.467-1.324-.467-1.948-.234-1.09-.701-1.948-.701-2.181 0-.467-.467-1.324-.701-2.181v2.181c0 .623-.234 1.48-.234 2.181v1.948h-1.869c0-.857.234-1.948.234-2.882 0-.779.232-1.87.232-2.805.001-.857.235-1.714.235-2.649zM23.682 135.779h-4.986l-1.947-7.01H7.556l-1.947 7.01H.779l8.491-31.004h5.453l8.959 31.004zm-8.336-12.074l-3.271-11.684-3.039 11.684h6.31zM41.599 135.779h-4.207v-3.193c-.701 1.402-1.636 2.338-2.493 2.727-.856.467-1.792 1.014-2.727 1.014-1.714 0-3.427-1.17-4.674-3.117-1.402-1.791-2.025-4.906-2.025-8.568 0-3.738.624-7.012 1.792-8.959 1.246-1.869 3.038-3.037 5.142-3.037 1.636 0 3.35 1.168 4.829 3.271v-11.141h4.363v31.003zm-11.841-11.683c0 2.336.312 4.439.701 5.375.702 1.402 1.714 2.336 2.883 2.336 1.09 0 1.947-.701 2.648-1.557.701-1.17 1.246-3.117 1.246-5.453 0-2.494-.389-4.596-1.09-5.766-.624-1.168-1.714-1.947-2.804-1.947-.935 0-1.792.779-2.571 1.715-.702 1.168-1.013 2.959-1.013 5.297zM45.182 124.096c0-1.793.233-3.74.935-5.531.779-1.869 1.792-3.271 3.038-4.207 1.324-1.012 2.96-1.713 4.519-1.713 2.415 0 4.674 1.168 6.154 3.271 1.636 2.336 2.493 5.453 2.493 8.725s-.857 6.232-2.493 8.336c-1.714 2.18-3.739 3.35-6.154 3.35-1.48 0-2.96-.547-4.362-1.402-1.402-.936-2.415-2.338-3.194-4.051-.701-1.793-.935-4.129-.935-6.467v-.311h-.001zm4.362.545c0 2.338.234 4.129.935 5.297.779 1.168 1.948 1.869 3.039 1.869 1.012 0 2.181-.701 2.882-1.869.779-1.168 1.246-2.959 1.246-5.297s-.467-4.285-1.246-5.453c-.701-1.324-1.87-2.104-2.882-2.104-1.091 0-2.181.779-2.805 1.947-.701 1.324-1.169 3.272-1.169 5.61zM65.748 135.779v-31.004h4.361v11.141c1.248-2.104 3.039-3.271 4.752-3.271 2.025 0 3.74 1.168 5.064 3.037 1.324 1.947 2.104 4.908 2.104 8.725 0 3.74-.779 7.012-2.104 8.803-1.402 1.947-3.115 3.117-4.83 3.117-.934 0-1.947-.547-2.805-1.014-.934-.389-1.791-1.557-2.26-2.727v3.193h-4.282zm4.361-11.683c0 2.336.391 4.439.779 5.375.701 1.402 1.871 2.336 3.117 2.336 1.09 0 1.947-.701 2.57-1.557.701-.936 1.09-3.117 1.09-5.453 0-2.494-.389-4.596-1.09-5.766-.623-1.168-1.715-1.947-2.805-1.947-1.012 0-1.869.779-2.57 1.715-.7 1.168-1.091 2.959-1.091 5.297zM95.271 128.77l4.363.701c-.469 2.336-1.559 4.285-2.648 5.141-1.246.936-2.961 1.715-4.752 1.715-2.648 0-4.986-1.402-6.311-3.74-1.09-1.947-1.559-4.674-1.559-7.789 0-3.662.623-6.777 2.025-8.881s3.428-3.271 5.609-3.271c2.414 0 4.363 1.168 5.688 3.271 1.479 2.336 2.336 5.842 2.336 10.283H88.729c0 1.947.234 3.271 1.014 4.283.699.936 1.557 1.324 2.492 1.324.779 0 1.48-.154 1.791-.701.388-.467.857-1.401 1.245-2.336zm.391-6.233c0-1.635-.623-3.115-1.092-3.973-.623-.936-1.557-1.48-2.414-1.48-1.014 0-1.947.779-2.414 1.715-.779.934-1.014 2.336-1.014 3.738h6.934z" />
                                                                                                                <path
                                                                                                                    d="M0 0h37.392L0 91.066V0zm62.865 0h37.859v89.896L62.865 0zM50.557 34.821L71.201 89.43H58.425l-8.803-17.293H35.6l14.957-37.316z"
                                                                                                                    fill="#cc2229"
                                                                                                                />
                                                                                                            </g>
                                                                                                        </svg>{" "}
                                                                                                    </span>
                                                                                                    <span className="elementor-icon-list-text">
                                                                                                        <b>Adobe</b> <br />{" "}
                                                                                                        <span
                                                                                                            style={{
                                                                                                                color: "#7A7A7A",
                                                                                                                fontStyle: "italic",
                                                                                                                fontFamily: "Heebo",
                                                                                                                fontSize: 13
                                                                                                            }}
                                                                                                        >
                                                                                                            Creative tools for design and media.
                                                                                                        </span>{" "}
                                                                                                    </span>
                                                                                                </li>
                                                                                                <li className="elementor-icon-list-item">
                                                                                                    <span className="elementor-icon-list-icon">
                                                                                                        <svg
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                            width={2500}
                                                                                                            height={1750}
                                                                                                            viewBox="0.5 0.5 999 699.242"
                                                                                                        >
                                                                                                            <path
                                                                                                                fill="#00A1E0"
                                                                                                                d="M416.224 76.763c32.219-33.57 77.074-54.391 126.682-54.391 65.946 0 123.48 36.772 154.12 91.361 26.626-11.896 56.098-18.514 87.106-18.514 118.94 0 215.368 97.268 215.368 217.247 0 119.993-96.428 217.261-215.368 217.261a213.735 213.735 0 0 1-42.422-4.227c-26.981 48.128-78.397 80.646-137.412 80.646-24.705 0-48.072-5.706-68.877-15.853-27.352 64.337-91.077 109.448-165.348 109.448-77.344 0-143.261-48.939-168.563-117.574-11.057 2.348-22.513 3.572-34.268 3.572C75.155 585.74.5 510.317.5 417.262c0-62.359 33.542-116.807 83.378-145.937-10.26-23.608-15.967-49.665-15.967-77.06C67.911 87.25 154.79.5 261.948.5c62.914 0 118.827 29.913 154.276 76.263"
                                                                                                            />
                                                                                                            <path
                                                                                                                fill="#FFF"
                                                                                                                d="M145.196 363.11c-.626 1.637.228 1.979.427 2.263 1.878 1.366 3.786 2.349 5.707 3.444 10.189 5.407 19.81 6.986 29.871 6.986 20.492 0 33.214-10.9 33.214-28.447v-.341c0-16.224-14.358-22.115-27.835-26.37l-1.75-.569c-10.161-3.302-18.927-6.147-18.927-12.836v-.355c0-5.721 5.123-9.934 13.064-9.934 8.823 0 19.297 2.932 26.042 6.66 0 0 1.978 1.281 2.704-.64.398-1.025 3.814-10.218 4.17-11.214.384-1.082-.299-1.879-.996-2.306-7.699-4.682-18.344-7.884-29.358-7.884l-2.049.014c-18.756 0-31.848 11.328-31.848 27.565v.342c0 17.119 14.444 22.669 27.978 26.54l2.177.669c9.862 3.031 18.358 5.635 18.358 12.58v.342c0 6.347-5.521 11.071-14.43 11.071-3.458 0-14.487-.071-26.398-7.6-1.438-.84-2.277-1.451-3.387-2.12-.583-.37-2.049-1.011-2.689.925l-4.045 11.215zM445.194 363.11c-.626 1.637.228 1.979.427 2.263 1.878 1.366 3.786 2.349 5.706 3.444 10.189 5.407 19.811 6.986 29.871 6.986 20.492 0 33.215-10.9 33.215-28.447v-.341c0-16.224-14.359-22.115-27.836-26.37l-1.75-.569c-10.161-3.302-18.928-6.147-18.928-12.836v-.355c0-5.721 5.123-9.934 13.064-9.934 8.823 0 19.297 2.932 26.043 6.66 0 0 1.978 1.281 2.703-.64.398-1.025 3.814-10.218 4.17-11.214.385-1.082-.299-1.879-.996-2.306-7.699-4.682-18.344-7.884-29.358-7.884l-2.05.014c-18.756 0-31.848 11.328-31.848 27.565v.342c0 17.119 14.444 22.669 27.978 26.54l2.177.669c9.862 3.031 18.373 5.635 18.373 12.58v.342c0 6.347-5.536 11.071-14.445 11.071-3.457 0-14.486-.071-26.397-7.6-1.438-.84-2.291-1.423-3.372-2.12-.371-.242-2.107-.911-2.705.925l-4.042 11.215zM649.995 328.74c0 9.919-1.85 17.731-5.493 23.253-3.601 5.465-9.051 8.126-16.649 8.126-7.613 0-13.035-2.647-16.579-8.126-3.587-5.507-5.407-13.334-5.407-23.253 0-9.904 1.82-17.703 5.407-23.168 3.544-5.407 8.966-8.04 16.579-8.04 7.599 0 13.049 2.633 16.664 8.04 3.629 5.464 5.478 13.263 5.478 23.168m17.106-18.386c-1.68-5.679-4.298-10.688-7.784-14.857-3.487-4.184-7.898-7.542-13.136-9.99-5.223-2.433-11.398-3.671-18.328-3.671-6.945 0-13.121 1.238-18.344 3.671-5.237 2.448-9.648 5.807-13.149 9.99-3.472 4.184-6.091 9.193-7.784 14.857-1.665 5.649-2.505 11.825-2.505 18.386s.84 12.751 2.505 18.386c1.693 5.664 4.298 10.674 7.799 14.857 3.486 4.184 7.912 7.528 13.135 9.904 5.236 2.377 11.398 3.586 18.344 3.586 6.93 0 13.092-1.209 18.328-3.586 5.223-2.376 9.648-5.721 13.136-9.904 3.486-4.17 6.104-9.179 7.784-14.857 1.68-5.649 2.519-11.84 2.519-18.386s-.841-12.737-2.52-18.386M807.568 357.47c-.569-1.665-2.177-1.039-2.177-1.039-2.49.954-5.138 1.836-7.955 2.277-2.861.44-6.006.669-9.379.669-8.281 0-14.856-2.462-19.566-7.329-4.725-4.867-7.372-12.736-7.344-23.381.029-9.691 2.362-16.978 6.561-22.527 4.17-5.521 10.517-8.354 18.984-8.354 7.059 0 12.438.811 18.072 2.59 0 0 1.352.583 1.992-1.181 1.494-4.156 2.604-7.13 4.198-11.698.456-1.295-.654-1.85-1.053-2.007-2.22-.868-7.457-2.276-11.413-2.874-3.7-.569-8.026-.868-12.836-.868-7.188 0-13.591 1.224-19.069 3.672-5.465 2.433-10.104 5.791-13.775 9.976-3.672 4.184-6.461 9.192-8.325 14.856-1.85 5.649-2.789 11.854-2.789 18.415 0 14.188 3.828 25.657 11.385 34.054 7.57 8.425 18.941 12.708 33.77 12.708 8.766 0 17.76-1.778 24.221-4.326 0 0 1.238-.598.697-2.034l-4.199-11.599zM837.497 319.238c.811-5.507 2.334-10.09 4.682-13.661 3.544-5.422 8.951-8.396 16.551-8.396s12.623 2.988 16.223 8.396c2.391 3.571 3.43 8.354 3.843 13.661h-41.299zm57.592-12.111c-1.451-5.479-5.052-11.015-7.414-13.548-3.729-4.013-7.371-6.816-10.986-8.382-4.725-2.021-10.389-3.358-16.593-3.358-7.229 0-13.79 1.21-19.112 3.714-5.336 2.505-9.818 5.921-13.334 10.176-3.516 4.24-6.162 9.292-7.842 15.027-1.693 5.707-2.547 11.926-2.547 18.485 0 6.675.883 12.894 2.633 18.486 1.765 5.636 4.582 10.602 8.396 14.714 3.799 4.142 8.695 7.387 14.558 9.648 5.821 2.249 12.894 3.416 21.019 3.401 16.722-.057 25.53-3.785 29.159-5.792.641-.355 1.253-.981.483-2.774l-3.785-10.603c-.568-1.579-2.177-.996-2.177-.996-4.142 1.537-10.032 4.298-23.766 4.27-8.979-.014-15.64-2.661-19.81-6.803-4.283-4.24-6.375-10.474-6.745-19.268l57.905.057s1.522-.028 1.68-1.509c.057-.624 1.993-11.895-1.722-24.945M373.762 319.238c.825-5.507 2.334-10.09 4.682-13.661 3.543-5.422 8.951-8.396 16.55-8.396s12.623 2.988 16.237 8.396c2.376 3.571 3.415 8.354 3.828 13.661h-41.297zm57.577-12.111c-1.451-5.479-5.037-11.015-7.399-13.548-3.729-4.013-7.372-6.816-10.986-8.382-4.725-2.021-10.388-3.358-16.593-3.358-7.215 0-13.79 1.21-19.112 3.714-5.336 2.505-9.819 5.921-13.334 10.176-3.515 4.24-6.162 9.292-7.841 15.027-1.679 5.707-2.547 11.926-2.547 18.485 0 6.675.882 12.894 2.633 18.486 1.765 5.636 4.583 10.602 8.396 14.714 3.8 4.142 8.695 7.387 14.558 9.648 5.821 2.249 12.893 3.416 21.019 3.401 16.721-.057 25.53-3.785 29.159-5.792.641-.355 1.252-.981.484-2.774l-3.771-10.603c-.584-1.579-2.191-.996-2.191-.996-4.141 1.537-10.019 4.298-23.78 4.27-8.965-.014-15.625-2.661-19.795-6.803-4.284-4.24-6.375-10.474-6.746-19.268l57.905.057s1.522-.028 1.679-1.509c.055-.624 1.99-11.895-1.738-24.945M248.601 357.153c-2.263-1.808-2.576-2.263-3.344-3.43-1.139-1.779-1.722-4.312-1.722-7.528 0-5.095 1.679-8.752 5.166-11.214-.042.015 4.981-4.34 16.792-4.184 8.296.114 15.71 1.338 15.71 1.338v26.327h.014s-7.357 1.579-15.639 2.077c-11.783.712-17.02-3.4-16.977-3.386m23.039-40.686c-2.348-.171-5.394-.271-9.037-.271-4.966 0-9.762.626-14.259 1.836-4.525 1.209-8.595 3.103-12.096 5.606a27.927 27.927 0 0 0-8.396 9.549c-2.049 3.814-3.088 8.311-3.088 13.349 0 5.123.882 9.577 2.647 13.221 1.765 3.657 4.312 6.702 7.556 9.051 3.216 2.348 7.187 4.069 11.797 5.108 4.54 1.039 9.691 1.565 15.327 1.565 5.934 0 11.854-.483 17.589-1.466 5.678-.968 12.651-2.377 14.586-2.817a146.25 146.25 0 0 0 4.056-1.039c1.438-.355 1.324-1.893 1.324-1.893l-.029-52.952c0-11.613-3.102-20.223-9.207-25.559-6.077-5.322-15.028-8.013-26.597-8.013-4.341 0-11.328.599-15.512 1.438 0 0-12.651 2.448-17.86 6.518 0 0-1.138.712-.512 2.306l4.099 11.015c.512 1.423 1.893.939 1.893.939s.441-.171.954-.47c11.143-6.062 25.231-5.877 25.231-5.877 6.262 0 11.072 1.252 14.316 3.742 3.159 2.419 4.767 6.076 4.767 13.789v2.448c-4.981-.711-9.549-1.123-9.549-1.123M738.669 286.631c.44-1.31-.484-1.936-.869-2.078-.981-.384-5.905-1.423-9.705-1.665-7.271-.441-11.312.783-14.928 2.405-3.586 1.622-7.57 4.24-9.791 7.215v-7.044c0-.982-.697-1.765-1.665-1.765h-14.843c-.967 0-1.664.782-1.664 1.765v86.366c0 .968.797 1.765 1.764 1.765h15.213a1.76 1.76 0 0 0 1.75-1.765v-43.147c0-5.792.641-11.569 1.922-15.198 1.252-3.587 2.96-6.461 5.066-8.525 2.12-2.049 4.525-3.486 7.158-4.297 2.689-.826 5.663-1.096 7.77-1.096 3.031 0 6.361.782 6.361.782 1.109.128 1.736-.555 2.105-1.565.997-2.647 3.815-10.574 4.356-12.153"
                                                                                                            />
                                                                                                            <path
                                                                                                                fill="#FFF"
                                                                                                                d="M595.874 246.603c-1.85-.569-3.529-.954-5.721-1.366-2.221-.398-4.867-.598-7.869-.598-10.475 0-18.729 2.96-24.52 8.794-5.764 5.807-9.678 14.644-11.642 26.271l-.712 3.913h-13.148s-1.594-.057-1.936 1.68l-2.148 12.053c-.157 1.139.342 1.864 1.878 1.864h12.794l-12.979 72.463c-1.011 5.835-2.178 10.631-3.473 14.273-1.267 3.587-2.504 6.276-4.041 8.24-1.48 1.879-2.875 3.273-5.295 4.084-1.992.669-4.297.982-6.816.982-1.395 0-3.258-.229-4.639-.513-1.366-.271-2.092-.569-3.131-1.011 0 0-1.494-.568-2.092.926-.47 1.238-3.885 10.615-4.298 11.769-.398 1.152.171 2.049.896 2.319 1.708.598 2.974.996 5.294 1.551 3.217.755 5.934.797 8.481.797 5.322 0 10.189-.754 14.217-2.205 4.042-1.466 7.57-4.014 10.701-7.457 3.373-3.729 5.493-7.628 7.515-12.964 2.006-5.266 3.729-11.812 5.094-19.439l13.05-73.815h19.069s1.607.057 1.936-1.693l2.162-12.039c.143-1.152-.341-1.864-1.893-1.864h-18.514c.1-.412.939-6.931 3.06-13.063.911-2.604 2.618-4.725 4.056-6.177 1.424-1.423 3.06-2.433 4.854-3.017 1.835-.598 3.928-.882 6.219-.882 1.736 0 3.457.199 4.752.469 1.793.385 2.49.584 2.961.727 1.893.569 2.148.014 2.519-.896l4.426-12.153c.455-1.312-.669-1.867-1.067-2.023M337.194 371.834c0 .968-.697 1.751-1.665 1.751h-15.355c-.968 0-1.651-.783-1.651-1.751v-123.58c0-.967.683-1.75 1.651-1.75h15.355c.968 0 1.665.783 1.665 1.75v123.58z"
                                                                                                            />
                                                                                                        </svg>{" "}
                                                                                                    </span>
                                                                                                    <span className="elementor-icon-list-text">
                                                                                                        <b>Salesforce</b> <br />{" "}
                                                                                                        <span
                                                                                                            style={{
                                                                                                                color: "#7A7A7A",
                                                                                                                fontStyle: "italic",
                                                                                                                fontFamily: "Heebo",
                                                                                                                fontSize: 13
                                                                                                            }}
                                                                                                        >
                                                                                                            The leader in CRM software.
                                                                                                        </span>
                                                                                                    </span>
                                                                                                </li>
                                                                                                <li className="elementor-icon-list-item">
                                                                                                    <span className="elementor-icon-list-icon">
                                                                                                        <svg
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                            width={2500}
                                                                                                            height={1223}
                                                                                                            viewBox="0 0 92 45"
                                                                                                        >
                                                                                                            <linearGradient
                                                                                                                id="a"
                                                                                                                gradientUnits="userSpaceOnUse"
                                                                                                                x1="45.483"
                                                                                                                x2="45.483"
                                                                                                                y2="45.001"
                                                                                                            >
                                                                                                                <stop offset={0} stopColor="#00AEEF" />
                                                                                                                <stop offset=".212" stopColor="#0097DC" />
                                                                                                                <stop offset=".519" stopColor="#007CC5" />
                                                                                                                <stop offset=".792" stopColor="#006CB8" />
                                                                                                                <stop offset={1} stopColor="#0066B3" />
                                                                                                            </linearGradient>
                                                                                                            <path
                                                                                                                fillRule="evenodd"
                                                                                                                clipRule="evenodd"
                                                                                                                fill="url(#a)"
                                                                                                                d="M0 45h45.974L90.966 0H0v45"
                                                                                                            />
                                                                                                            <path
                                                                                                                fillRule="evenodd"
                                                                                                                clipRule="evenodd"
                                                                                                                fill="#fff"
                                                                                                                d="M53.984 9H45l.03 21.13-7.823-21.137H29.45l-6.678 17.653c-.71-4.492-5.354-6.042-9.008-7.203-2.413-.775-4.974-1.915-4.948-3.175.02-1.034 1.37-1.993 4.053-1.85 1.8.097 3.39.242 6.553 1.77l3.11-5.42C19.648 9.3 15.66 8.373 12.39 8.37h-.02c-3.813 0-6.988 1.235-8.956 3.27-1.372 1.42-2.112 3.226-2.142 5.223-.05 2.748.957 4.696 3.073 6.253 1.788 1.31 4.075 2.16 6.09 2.784 2.485.77 4.515 1.44 4.49 2.866a2.112 2.112 0 0 1-.59 1.398c-.62.64-1.57.88-2.885.906-2.537.054-4.417-.345-7.413-2.116l-2.767 5.49C4.263 36.146 7.44 37 11.05 37l.812-.006c3.142-.057 5.692-.81 7.718-2.44.116-.093.22-.187.328-.282l-.34 1.752 7.58-.024 1.36-3.482c1.43.488 3.056.758 4.782.758 1.682 0 3.264-.256 4.667-.716l.948 3.44 13.6.013.033-7.938h2.894c6.995 0 11.13-3.56 11.13-9.53C66.56 11.896 62.54 9 53.984 9zM33.29 27.062a8.128 8.128 0 0 1-2.868-.502l2.836-8.955h.055l2.79 8.98c-.84.3-1.797.477-2.814.477zm21.22-5.145h-1.974V14.7h1.975c2.63 0 4.73.876 4.73 3.562-.002 2.78-2.1 3.655-4.73 3.655"
                                                                                                            />
                                                                                                            <path fill="none" d="M0 0h92v45H0z" />
                                                                                                        </svg>{" "}
                                                                                                    </span>
                                                                                                    <span className="elementor-icon-list-text">
                                                                                                        <b>SAP</b> <br />{" "}
                                                                                                        <span
                                                                                                            style={{
                                                                                                                color: "#7A7A7A",
                                                                                                                fontStyle: "italic",
                                                                                                                fontFamily: "Heebo",
                                                                                                                fontSize: 13
                                                                                                            }}
                                                                                                        >
                                                                                                            Enterprise business management software.
                                                                                                        </span>{" "}
                                                                                                    </span>
                                                                                                </li>
                                                                                                <li className="elementor-icon-list-item">
                                                                                                    <span className="elementor-icon-list-icon">
                                                                                                        <svg
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                            viewBox="0.29136862699701993 -41.138268758326056 145.22149045698177 186.73799623391153"
                                                                                                            width={1590}
                                                                                                            height={2500}
                                                                                                        >
                                                                                                            <linearGradient
                                                                                                                id="a"
                                                                                                                gradientTransform="matrix(1 0 0 -1 0 228)"
                                                                                                                gradientUnits="userSpaceOnUse"
                                                                                                                x1="62.57"
                                                                                                                x2="25.03"
                                                                                                                y1="150.13"
                                                                                                                y2="85.11"
                                                                                                            >
                                                                                                                <stop offset={0} stopColor="#0052cc" />
                                                                                                                <stop offset=".92" stopColor="#2684ff" />
                                                                                                            </linearGradient>
                                                                                                            <path
                                                                                                                d="M43 67a4.14 4.14 0 0 0-5.79-.78A4.29 4.29 0 0 0 36 67.73L.45 138.85a4.25 4.25 0 0 0 1.9 5.7 4.18 4.18 0 0 0 1.9.45h49.53a4.08 4.08 0 0 0 3.8-2.35C68.27 120.57 61.79 87 43 67z"
                                                                                                                fill="url(#a)"
                                                                                                            />
                                                                                                            <path
                                                                                                                d="M69.13 2.28a93.82 93.82 0 0 0-5.48 92.61l23.88 47.76a4.25 4.25 0 0 0 3.8 2.35h49.52a4.24 4.24 0 0 0 4.25-4.25 4.31 4.31 0 0 0-.44-1.9L76.36 2.26a4 4 0 0 0-7.23 0z"
                                                                                                                fill="#2684ff"
                                                                                                            />
                                                                                                        </svg>{" "}
                                                                                                    </span>
                                                                                                    <span className="elementor-icon-list-text">
                                                                                                        <b>Atlassian</b> <br />{" "}
                                                                                                        <span
                                                                                                            style={{
                                                                                                                color: "#7A7A7A",
                                                                                                                fontStyle: "italic",
                                                                                                                fontFamily: "Heebo",
                                                                                                                fontSize: 13
                                                                                                            }}
                                                                                                        >
                                                                                                            Tools for team collaboration.
                                                                                                        </span>
                                                                                                    </span>
                                                                                                </li>
                                                                                                <li className="elementor-icon-list-item">
                                                                                                    <span className="elementor-icon-list-icon">
                                                                                                        <svg
                                                                                                            aria-hidden="true"
                                                                                                            className="e-font-icon-svg e-fab-github-alt"
                                                                                                            viewBox="0 0 480 512"
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                        >
                                                                                                            <path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z" />
                                                                                                        </svg>{" "}
                                                                                                    </span>
                                                                                                    <span className="elementor-icon-list-text">
                                                                                                        <b>GitHub</b> <br />{" "}
                                                                                                        <span
                                                                                                            style={{
                                                                                                                color: "#7A7A7A",
                                                                                                                fontStyle: "italic",
                                                                                                                fontFamily: "Heebo",
                                                                                                                fontSize: 13
                                                                                                            }}
                                                                                                        >
                                                                                                            Code storage and collaboration.
                                                                                                        </span>{" "}
                                                                                                    </span>
                                                                                                </li>
                                                                                                <li className="elementor-icon-list-item">
                                                                                                    <span className="elementor-icon-list-icon">
                                                                                                        <svg
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                            id="Layer_1"
                                                                                                            viewBox="0 0 363.2 259.5"
                                                                                                            width={2500}
                                                                                                            height={1786}
                                                                                                        >
                                                                                                            <style
                                                                                                                dangerouslySetInnerHTML={{
                                                                                                                    __html: ".st0{fill:#03363d}"
                                                                                                                }}
                                                                                                            />
                                                                                                            <title>golion-z-sourcefile-algae</title>
                                                                                                            <path
                                                                                                                className="st0"
                                                                                                                d="M173.8 40.5v112.9H80.3zM173.8 0c0 25.8-20.9 46.7-46.7 46.7S80.3 25.8 80.3 0h93.5zM189.2 153.4c0-25.8 20.9-46.7 46.7-46.7 25.8 0 46.7 20.9 46.7 46.7h-93.4zM189.2 112.9V0h93.5zM241.5 249.9c4.8.1 9.5-1.7 13-5l6.4 6.9c-4.2 4.4-10.1 7.6-19.3 7.6-15.7 0-25.8-10.4-25.8-24.5-.3-13.3 10.3-24.2 23.5-24.5h.8c15.6 0 24.4 11.8 23.6 28.3H227c1.3 6.9 6.1 11.3 14.5 11.2m11.2-18.9c-1-6.4-4.8-11.1-12.4-11.1-7.1 0-12 4-13.3 11.1h25.7zM0 249.4l28.3-28.8H.7v-9h40.7v9.2l-28.3 28.8h28.7v9H0zM73.6 249.9c4.8.1 9.5-1.7 12.9-5l6.4 6.9c-4.2 4.4-10.1 7.6-19.3 7.6-15.7 0-25.8-10.4-25.8-24.5-.3-13.3 10.3-24.2 23.5-24.5h.8c15.6 0 24.4 11.8 23.6 28.3H59.1c1.3 6.9 6.1 11.3 14.5 11.2M84.8 231c-1-6.4-4.8-11.1-12.4-11.1-7.1 0-12 4-13.3 11.1h25.7zM157 235c0-15 11.2-24.4 23.6-24.4 6-.1 11.7 2.5 15.7 7v-27.7h10v68.6h-10V252c-3.9 4.7-9.7 7.5-15.8 7.4-12 0-23.5-9.5-23.5-24.4m39.8-.1c-.2-8.2-7.1-14.7-15.3-14.5-8.2.2-14.7 7.1-14.5 15.3.2 8.1 6.8 14.5 14.9 14.5 8.6 0 14.9-6.8 14.9-15.3M270.3 248.5l9.1-4.7c2.4 4.4 7.1 7 12.1 6.9 5.7 0 8.6-2.9 8.6-6.2 0-3.8-5.5-4.6-11.4-5.8-8-1.7-16.3-4.3-16.3-14 0-7.4 7.1-14.3 18.2-14.2 8.8 0 15.3 3.5 19 9.1l-8.4 4.6c-2.4-3.5-6.4-5.5-10.6-5.4-5.4 0-8.1 2.6-8.1 5.6 0 3.4 4.3 4.3 11.1 5.8 7.7 1.7 16.5 4.2 16.5 14 0 6.5-5.7 15.2-19.1 15.1-9.8.1-16.7-3.8-20.7-10.8M337.2 237.6l-7.9 8.7v12.2h-10v-68.6h10v44.9l21.2-23.3h12.2l-18.4 20.1 18.9 26.9h-11.3zM126.8 210.5c-11.9 0-21.9 7.7-21.9 20.5v27.5h10.2v-26.2c0-7.7 4.4-12.3 12-12.3s11.3 4.6 11.3 12.3v26.2h10.1V231c.1-12.8-9.9-20.5-21.7-20.5"
                                                                                                            />
                                                                                                        </svg>{" "}
                                                                                                    </span>
                                                                                                    <span className="elementor-icon-list-text">
                                                                                                        <b>Zendesk</b> <br />{" "}
                                                                                                        <span
                                                                                                            style={{
                                                                                                                color: "#7A7A7A",
                                                                                                                fontStyle: "italic",
                                                                                                                fontFamily: "Heebo",
                                                                                                                fontSize: 13
                                                                                                            }}
                                                                                                        >
                                                                                                            Customer support software solutions.
                                                                                                        </span>
                                                                                                    </span>
                                                                                                </li>
                                                                                                <li className="elementor-icon-list-item">
                                                                                                    <span className="elementor-icon-list-icon">
                                                                                                        <svg
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                            width="800px"
                                                                                                            height="800px"
                                                                                                            viewBox="0 0 1024 1024"
                                                                                                        >
                                                                                                            <circle
                                                                                                                cx={512}
                                                                                                                cy={512}
                                                                                                                r={512}
                                                                                                                style={{ fill: "#178a9e" }}
                                                                                                            />
                                                                                                            <path
                                                                                                                d="M706 356.3v-.3c-.3-4.3-.6-9.3-.9-14.6-.6-10-1.3-20.8-1.9-29-1-5.7-2.4-10.8-4-15.4-10.2-22.6-30.1-33.5-51.1-38.7-9.6-1.7-21.3-2-33.8-2.3H493.7c-77.7 4.2-110.3 49.2-119.1 73.1-34 101.7-55.2 233.5-70.5 328.6-.3 1.9-.6 3.7-.9 5.5l-5 45.2c-.3 7.1.4 14.9 2.3 22.4 9.5 27.6 38.3 50.8 101.7 27.7 59.9-26 130.6-58.4 203.7-94.7 41.6-24 102.6-79.2 105.8-148.9-.5-51.6-2.2-105.8-5.7-158.6zm-96.3 38.2c0 6-4.9 10.9-10.9 10.9-36.3 0-65.6 29.4-65.6 65.6v40.2c0 67.5-54.7 122.1-122.1 122.1-5.9 0-10.6-4.8-10.6-10.6v-33.3c0-6 4.9-10.9 10.9-10.9 36.3 0 65.6-29.4 65.6-65.6v-40.2c0-67.4 54.7-122.1 122.1-122.1 5.9 0 10.6 4.8 10.6 10.6v33.3z"
                                                                                                                style={{ fill: "#fff" }}
                                                                                                            />
                                                                                                        </svg>{" "}
                                                                                                    </span>
                                                                                                    <span className="elementor-icon-list-text">
                                                                                                        <b>Surfshark</b> <br />{" "}
                                                                                                        <span
                                                                                                            style={{
                                                                                                                color: "#7A7A7A",
                                                                                                                fontStyle: "italic",
                                                                                                                fontFamily: "Heebo",
                                                                                                                fontSize: 13
                                                                                                            }}
                                                                                                        >
                                                                                                            Affordable, reliable VPN service.
                                                                                                        </span>{" "}
                                                                                                    </span>
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elementor-element elementor-element-91c59d2 custom-list elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                                                                                        data-id="91c59d2"
                                                                                        data-element_type="widget"
                                                                                        data-widget_type="icon-list.default"
                                                                                    >
                                                                                        <div className="elementor-widget-container">
                                                                                            <ul className="elementor-icon-list-items">
                                                                                                <li className="elementor-icon-list-item">
                                                                                                    <span className="elementor-icon-list-icon">
                                                                                                        <svg
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                            height={428}
                                                                                                            viewBox="0 1.007 172.2 30.52"
                                                                                                            width={2500}
                                                                                                        >
                                                                                                            <g fill="#fc0000" fillRule="evenodd">
                                                                                                                <path d="m27.52 15.767v-.307l-2.6-2.238h-.303c-.715.79-1.819 1.382-3.054 1.382-1.928 0-3.445-1.47-3.445-3.488s1.517-3.488 3.445-3.488c1.235 0 2.339.592 3.054 1.382h.303l2.6-2.238v-.307c-1.365-1.667-3.509-2.742-5.936-2.742-4.462 0-7.841 3.159-7.841 7.393 0 .164.037.315.048.476 1.826 1.242 3.438 2.236 4.826 3.146 2.001 1.266 3.616 2.431 4.946 3.514a7.466 7.466 0 0 0 3.957-2.485m-12.15-.079c1.042 1.28 2.513 2.198 4.248 2.59-1.172-.659-2.307-1.306-3.364-2.022-.31-.192-.586-.378-.884-.568m27.2 1.879-.65-2.808-.238-.154c-.13.066-.238.154-.563.154-.499 0-.802-.527-1.062-.943-.433-.659-.78-1.01-1.083-1.163 1.581-.702 2.643-2.018 2.643-3.905 0-2.918-1.993-4.761-5.697-4.761h-6.456v14.26h4.289v-5.002h.39c.953 0 2.167 2.062 2.73 2.984 1.17 1.865 2.101 2.281 3.769 2.281.78 0 1.43-.285 1.82-.636zm-5.329-8.578c0 .944-.693 1.404-1.495 1.404h-1.993v-2.896h1.993c.802 0 1.495.527 1.495 1.492zm21.899 2.132c0-4.234-3.379-7.393-7.863-7.393-4.485 0-7.864 3.159-7.864 7.393s3.379 7.393 7.864 7.393c4.484 0 7.863-3.181 7.863-7.393m-4.376 0c0 2.04-1.56 3.488-3.487 3.488-1.928 0-3.488-1.448-3.488-3.488s1.56-3.488 3.488-3.488c1.927 0 3.487 1.448 3.487 3.488m13.936-7.13-2.67 7.849-2.53-7.849h-4.1l-.19.329 5.24 13.93h2.6l2.95-7.77 2.96 7.77h2.6l5.25-13.93-.2-.329h-4.09l-2.54 7.899-2.68-7.899zm27.81 7.109c0-4.256-2.838-7.108-7.452-7.108h-6.564v14.26h6.564c4.614 0 7.452-2.852 7.452-7.152m-4.376.022c0 2.325-1.365 3.62-3.249 3.62h-2.102v-7.24h2.102c1.884 0 3.249 1.295 3.249 3.62m18.566-3.621h4.2v10.749h4.3v-10.749h4.3v-3.51h-12.8zm26.5 1.25c0-2.918-1.993-4.761-5.697-4.761h-6.456v14.26h4.29v-5.002h1.018l2.664 5.002h4.268l.195-.329-2.86-5.287c1.538-.724 2.578-2.018 2.578-3.883m-4.376.241c0 .944-.693 1.404-1.495 1.404h-1.992v-2.896h1.992c.802 0 1.495.527 1.495 1.492m6.976 9.258h4.3v-14.259h-4.3zm11.3-9.191v-5.068h-4.3v14.259h4.3v-4.39l.8-.92 3.6 5.31h4.5l.2-.33-5.2-7.55 4.8-6.05-.1-.329h-4.6zm14.6 5.681v-1.97h4.9v-3.295h-4.9v-1.974h6.4v-3.511h-10.7v14.26h10.8v-3.51z" />
                                                                                                                <path d="m103.8 18.417c3.142 0 5.869-1.535 5.869-4.495 0-3.226-2.749-4.06-5.175-4.762-.954-.285-1.93-.615-1.93-1.317 0-.505.542-.812 1.366-.812 1.409 0 2.6.878 3.206 1.449h.303l2.014-2.413v-.307c-1.061-1.206-3.226-2.127-5.61-2.127-3.336 0-5.652 1.798-5.652 4.408 0 2.809 2.554 4.038 4.72 4.652 1.409.395 2.364.46 2.364 1.229 0 .549-.673.878-1.714.878-1.322 0-2.924-.856-3.703-1.624h-.303l-1.992 2.5v.308c1.277 1.425 3.572 2.433 6.237 2.433m-73.98 13.11c-1.039-2.378-3.126-5.43-11.3-9.786-3.77-2.096-10.21-5.323-16-11.46.525 2.214 3.215 7.079 14.78 13.15 3.204 1.753 8.622 3.397 12.52 8.088m-.52-4.062c-.986-2.81-2.766-6.408-11.21-11.75-4.111-2.694-10.15-6.077-18.09-14.7.568 2.325 3.078 8.37 15.73 16.22 4.156 2.816 9.52 4.553 13.57 10.23" />
                                                                                                            </g>
                                                                                                        </svg>{" "}
                                                                                                    </span>
                                                                                                    <span className="elementor-icon-list-text">
                                                                                                        <b>CrowdStrike</b> <br />{" "}
                                                                                                        <span
                                                                                                            style={{
                                                                                                                color: "#7A7A7A",
                                                                                                                fontStyle: "italic",
                                                                                                                fontFamily: "Heebo",
                                                                                                                fontSize: 13
                                                                                                            }}
                                                                                                        >
                                                                                                            AI-driven cybersecurity protection.
                                                                                                        </span>
                                                                                                    </span>
                                                                                                </li>
                                                                                                <li className="elementor-icon-list-item">
                                                                                                    <span className="elementor-icon-list-icon">
                                                                                                        <svg
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                            height={2500}
                                                                                                            viewBox="5 4 38 40"
                                                                                                            width={2500}
                                                                                                        >
                                                                                                            <path d="m24 44a1 1 0 0 1 0-2z" fill="#0370c8" />
                                                                                                            <path
                                                                                                                d="m25 43a1 1 0 0 1 -1 1v-2a1 1 0 0 1 1 1z"
                                                                                                                fill="#0f5094"
                                                                                                            />
                                                                                                            <circle cx={42} cy={11} fill="#0883d9" r={1} />
                                                                                                            <circle cx={6} cy={11} fill="#33bff0" r={1} />
                                                                                                            <path
                                                                                                                d="m24 43 .427.907s15.144-7.9 18.08-19.907h-18.507z"
                                                                                                                fill="#0f5094"
                                                                                                            />
                                                                                                            <path
                                                                                                                d="m43 11-1-1c-11.122 0-11.278-6-18-6v20h18.507c.315-1.288.493-2.622.493-4z"
                                                                                                                fill="#0883d9"
                                                                                                            />
                                                                                                            <path
                                                                                                                d="m24 43-.427.907s-15.144-7.9-18.08-19.907h18.507z"
                                                                                                                fill="#0370c8"
                                                                                                            />
                                                                                                            <path
                                                                                                                d="m5 11 1-1c11.122 0 11.278-6 18-6v20h-18.507a16.789 16.789 0 0 1 -.493-4z"
                                                                                                                fill="#33bff0"
                                                                                                            />
                                                                                                        </svg>{" "}
                                                                                                    </span>
                                                                                                    <span className="elementor-icon-list-text">
                                                                                                        <b>Microsoft Defender</b> <br />{" "}
                                                                                                        <span
                                                                                                            style={{
                                                                                                                color: "#7A7A7A",
                                                                                                                fontStyle: "italic",
                                                                                                                fontFamily: "Heebo",
                                                                                                                fontSize: 13
                                                                                                            }}
                                                                                                        >
                                                                                                            Built-in Windows security software.
                                                                                                        </span>
                                                                                                    </span>
                                                                                                </li>
                                                                                                <li className="elementor-icon-list-item">
                                                                                                    <span className="elementor-icon-list-icon">
                                                                                                        <svg
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                            width={30}
                                                                                                            height={32}
                                                                                                        >
                                                                                                            <path
                                                                                                                d="M0 0 C0.9075 0.804375 1.815 1.60875 2.75 2.4375 C6.03600351 5.26359633 9.45421755 7.85925291 12.9375 10.4375 C25.64311374 19.8950621 25.64311374 19.8950621 30 26 C29.67 26.66 29.34 27.32 29 28 C28.55011719 27.57589844 28.10023437 27.15179687 27.63671875 26.71484375 C23.79469326 23.21159406 19.95251488 20.25760664 15.5 17.5625 C9.23667964 13.70345839 4.09157103 9.13735654 0 3 C0 2.01 0 1.02 0 0 Z M2 9 C3.03125 9.804375 4.0625 10.60875 5.125 11.4375 C9.58757415 14.7984011 14.25522841 17.78884893 18.98681641 20.75170898 C28.56406931 26.79280732 28.56406931 26.79280732 29.8125 30.25 C29.874375 30.8275 29.93625 31.405 30 32 C29.32195313 31.56429688 28.64390625 31.12859375 27.9453125 30.6796875 C27.01460937 30.08414062 26.08390625 29.48859375 25.125 28.875 C23.62066406 27.91013672 23.62066406 27.91013672 22.0859375 26.92578125 C19.34633104 25.2161281 16.56838141 23.63645762 13.75 22.0625 C8.91695263 19.19818598 5.16672035 15.65570807 2 11 C2 10.34 2 9.68 2 9 Z "
                                                                                                                fill="#FC0000"
                                                                                                                transform="translate(0,0)"
                                                                                                            />
                                                                                                        </svg>{" "}
                                                                                                    </span>
                                                                                                    <span className="elementor-icon-list-text">
                                                                                                        <b>SentinelOne</b> <br />{" "}
                                                                                                        <span
                                                                                                            style={{
                                                                                                                color: "#7A7A7A",
                                                                                                                fontStyle: "italic",
                                                                                                                fontFamily: "Heebo",
                                                                                                                fontSize: 13
                                                                                                            }}
                                                                                                        >
                                                                                                            Automated threat detection and response.
                                                                                                        </span>
                                                                                                    </span>
                                                                                                </li>
                                                                                                <li className="elementor-icon-list-item">
                                                                                                    <span className="elementor-icon-list-icon">

                                                                                                    </span>
                                                                                                    <span className="elementor-icon-list-text">
                                                                                                        <b>Trend Micro XDR</b> <br />{" "}
                                                                                                        <span
                                                                                                            style={{
                                                                                                                color: "#7A7A7A",
                                                                                                                fontStyle: "italic",
                                                                                                                fontFamily: "Heebo",
                                                                                                                fontSize: 13
                                                                                                            }}
                                                                                                        >
                                                                                                            Cyber threat detection across systems.
                                                                                                        </span>
                                                                                                    </span>
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li className="e-n-menu-item" onMouseEnter={() => handleMouseEnter("prices")}
                                                    onMouseLeave={handleMouseLeave}>
                                                    <div id="e-n-menu-title-2096" className="e-n-menu-title">
                                                        <a
                                                            className="e-n-menu-title-container e-focus e-link"
                                                            href="/home/prices"
                                                            data-focus-index={7}
                                                        >
                                                            {" "}
                                                            <span className="e-n-menu-title-text">Pricing </span>
                                                        </a>{" "}
                                                        <button
                                                            id="e-n-menu-dropdown-icon-2096"
                                                            className="e-n-menu-dropdown-icon e-focus"
                                                            data-tab-index={6}
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                            aria-controls="e-n-menu-content-2096"
                                                            data-focus-index={8}
                                                        >
                                                            {openMenu === "prices" ? (
                                                                <span className="e-n-menu-dropdown-icon-opened">▲</span>
                                                            ) : (
                                                                <span className="e-n-menu-dropdown-icon-closed">▼</span>
                                                            )}
                                                        </button>
                                                    </div>
                                                    <div className={`e-n-menu-content ${openMenu === "prices" ? "e-active" : ""}`}>
                                                        <div
                                                            id="e-n-menu-content-2096"
                                                            data-tab-index={6}
                                                            aria-labelledby="e-n-menu-dropdown-icon-2096"
                                                            className={`elementor-element elementor-element-678d33b e-flex e-con-boxed e-con e-child animated fadeIn ${openMenu === "prices" ? "e-active" : ""}`}
                                                            data-id="aa5a588"
                                                            data-element_type="container"
                                                            data-settings='{"background_background":"classic"}'

                                                        >
                                                            <div className="e-con-inner">
                                                                <div
                                                                    className="elementor-element elementor-element-b2fe010 e-con-full e-flex e-con e-child"
                                                                    data-id="b2fe010"
                                                                    data-element_type="container"
                                                                    data-settings='{"background_background":"classic"}'
                                                                >
                                                                    <div
                                                                        className="elementor-element elementor-element-40dc135 e-con-full e-flex e-con e-child"
                                                                        data-id="40dc135"
                                                                        data-element_type="container"
                                                                        data-settings='{"background_background":"classic"}'
                                                                    >
                                                                        <div
                                                                            className="elementor-element elementor-element-e48de69 custom-list elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                                                                            data-id="e48de69"
                                                                            data-element_type="widget"
                                                                            data-widget_type="icon-list.default"
                                                                        >
                                                                            <div className="elementor-widget-container">
                                                                                <ul className="elementor-icon-list-items">
                                                                                    <li className="elementor-icon-list-item">
                                                                                        <a href="/home/prices">
                                                                                            <span className="elementor-icon-list-text">
                                                                                                Individual
                                                                                            </span>
                                                                                        </a>
                                                                                    </li>
                                                                                    <li className="elementor-icon-list-item">
                                                                                        <a href="/home/prices">
                                                                                            <span className="elementor-icon-list-text">Business</span>
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>






                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="elementor-element elementor-element-42281b7 e-con-full elementor-hidden-mobile e-flex e-con e-child" data-id="42281b7" data-element_type="container">
                            <div className="elementor-element elementor-element-990a26e elementor-widget elementor-widget-button" data-id="990a26e" data-element_type="widget" data-widget_type="button.default">
                                <div className="elementor-widget-container">
                                    <div className="elementor-button-wrapper">
                                        <a className="elementor-button elementor-button-link elementor-size-sm" href="/home/contactus">
                                            <span className="elementor-button-content-wrapper">
                                                <span className="elementor-button-text">Get A Demo</span>
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
    </>
}
export default Header;