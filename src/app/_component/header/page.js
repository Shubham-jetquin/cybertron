'use client';

import { useState } from "react";

const Header = () => {
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
                        <a className="elementor-element elementor-element-58645a6 e-con-full e-flex e-con e-child" data-id="58645a6" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}" href="https://cybertron-tech.com/">
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
                                                <svg className="e-font-icon-svg e-eicon-close" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z" /></svg>			</span>
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
                                                                        <a className="elementor-element elementor-element-293b11a e-con-full e-flex e-con e-child" data-id="293b11a" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}" href="https://cybertron-tech.com/about-us/">
                                                                            <div className="elementor-element elementor-element-048135d elementor-widget elementor-widget-heading" data-id="048135d" data-element_type="widget" data-widget_type="heading.default">
                                                                                <div className="elementor-widget-container">
                                                                                    <h2 className="elementor-heading-title elementor-size-default">About Us</h2>				</div>
                                                                            </div>
                                                                            <div className="elementor-element elementor-element-5d0fe2e elementor-widget elementor-widget-heading" data-id="5d0fe2e" data-element_type="widget" data-widget_type="heading.default">
                                                                                <div className="elementor-widget-container">
                                                                                    <h2 className="elementor-heading-title elementor-size-default">The Journey Behind Cybertron’s Innovation</h2>				</div>
                                                                            </div>
                                                                        </a>
                                                                        <a className="elementor-element elementor-element-01a5bcb e-con-full e-flex e-con e-child" data-id="01a5bcb" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}" href="https://cybertron-tech.com/careers/">
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
                                        <a className="elementor-button elementor-button-link elementor-size-sm" href="https://cybertron-tech.com/contact/">
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