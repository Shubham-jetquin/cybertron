
'use client';

import { useState } from "react";
const prices = () => {
    const [activeTab, setActiveTab] = useState("individual");
    return <>
        <div
            className="elementor elementor-352"
            data-elementor-id="352"
            data-elementor-post-type="page"
            data-elementor-type="wp-page">
            <div
                className="elementor-element elementor-element-4462b03 e-flex e-con-boxed e-con e-parent e-lazyloaded"
                data-element_type="container"
                data-id="4462b03">
                <div className="e-con-inner">
                    <div
                        className="elementor-element elementor-element-0478cd0 e-n-tabs-none elementor-widget__width-inherit elementor-widget elementor-widget-n-tabs"
                        data-element_type="widget"
                        data-id="0478cd0"
                        data-settings='{"tabs_justify_horizontal":"start","horizontal_scroll":"disable"}'
                        data-widget_type="nested-tabs.default">
                        <div className="elementor-widget-container">
                            <div
                                aria-label="Tabs. Open items with Enter or Space, close with Escape and navigate using the Arrow keys."
                                className="e-n-tabs e-activated"
                                data-touch-mode="true"
                                data-widget-number="4689104">
                                <div className="e-n-tabs-heading" data-page-x="" role="tablist">
                                    <button
                                        aria-controls="e-n-tab-content-46891041"
                                        aria-selected={activeTab === "individual"}
                                        className="e-n-tab-title"
                                        data-tab-index="1"
                                        id="e-n-tab-title-46891041"
                                        role="tab"
                                        style={{
                                            "--n-tabs-title-order": "1",
                                        }}
                                        onClick={() => setActiveTab("individual")}
                                        tabIndex="0">
                                        <span className="e-n-tab-title-text">Individual</span>
                                    </button>
                                    <button
                                        aria-controls="e-n-tab-content-46891042"
                                        aria-selected={activeTab === "business"}
                                        className="e-n-tab-title"
                                        data-tab-index="2"
                                        id="e-n-tab-title-46891042"
                                        role="tab"
                                        style={{
                                            "--n-tabs-title-order": "2",
                                        }}
                                        onClick={() => setActiveTab("business")}
                                        tabIndex="-1">
                                        <span className="e-n-tab-title-text">Business</span>
                                    </button>
                                </div>
                                <div className="e-n-tabs-content">
                                    {activeTab === "individual" && (
                                        <div
                                            aria-labelledby="e-n-tab-title-46891041"
                                            className="e-active elementor-element elementor-element-442f990 e-con-full e-flex e-con e-child"
                                            data-element_type="container"
                                            data-id="442f990"
                                            data-tab-index="1"
                                            id="e-n-tab-content-46891041"
                                            role="tabpanel"
                                            style={{
                                                "--n-tabs-title-order": "1",
                                            }}>
                                            <div
                                                className="elementor-element elementor-element-0f85cef e-con-full e-flex e-con e-child"
                                                data-element_type="container"
                                                data-id="0f85cef">
                                                <div
                                                    className="elementor-element elementor-element-526b2f5 e-con-full e-flex e-con e-child"
                                                    data-element_type="container"
                                                    data-id="526b2f5">
                                                    <div
                                                        className="elementor-element elementor-element-3bf79cc elementor-widget elementor-widget-heading"
                                                        data-element_type="widget"
                                                        data-id="3bf79cc"
                                                        data-widget_type="heading.default">
                                                        <div className="elementor-widget-container">
                                                            <h2 className="elementor-heading-title elementor-size-default">
                                                                Contact Us
                                                            </h2>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="elementor-element elementor-element-684da40 elementor-widget elementor-widget-heading"
                                                        data-element_type="widget"
                                                        data-id="684da40"
                                                        data-widget_type="heading.default">
                                                        <div className="elementor-widget-container">
                                                            <h2 className="elementor-heading-title elementor-size-default">
                                                                Get Your Custom Quote
                                                            </h2>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="elementor-element elementor-element-e8ca177 elementor-widget elementor-widget-text-editor"
                                                        data-element_type="widget"
                                                        data-id="e8ca177"
                                                        data-widget_type="text-editor.default">
                                                        <div className="elementor-widget-container">
                                                            <p>
                                                                Our pricing is tailored to your specific environment
                                                                so you pay for what you really need.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="elementor-element elementor-element-7467d7e e-con-full e-flex e-con e-child"
                                                        data-element_type="container"
                                                        data-id="7467d7e"
                                                        data-settings='{"background_background":"classic"}'>
                                                        <div
                                                            className="elementor-element elementor-element-5a04a38 elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-n-accordion"
                                                            data-element_type="widget"
                                                            data-id="5a04a38"
                                                            data-settings='{"default_state":"expanded","max_items_expended":"one","n_accordion_animation_duration":{"unit":"ms","size":400,"sizes":[]}}'
                                                            data-widget_type="nested-accordion.default">
                                                            <div className="elementor-widget-container">
                                                                <div
                                                                    aria-label="Accordion. Open links with Enter or Space, close with Escape, and navigate with Arrow Keys"
                                                                    className="e-n-accordion">
                                                                    <details
                                                                        className="e-n-accordion-item"
                                                                        id="e-n-accordion-item-9430"
                                                                        open>
                                                                        <summary
                                                                            aria-controls="e-n-accordion-item-9430"
                                                                            aria-expanded="true"
                                                                            className="e-n-accordion-item-title"
                                                                            data-accordion-index="1"
                                                                            tabIndex="0">
                                                                            <span className="e-n-accordion-item-title-header">
                                                                                <div className="e-n-accordion-item-title-text">
                                                                                    {" "}
                                                                                    How is Cybertron Priced?{" "}
                                                                                </div>
                                                                            </span>
                                                                            <span className="e-n-accordion-item-title-icon">
                                                                                <span className="e-opened">
                                                                                    <svg
                                                                                        aria-hidden="true"
                                                                                        className="e-font-icon-svg e-fas-chevron-circle-up"
                                                                                        viewBox="0 0 512 512"
                                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                                        <path d="M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm231-113.9L103.5 277.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L256 226.9l101.6 101.6c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L273 142.1c-9.4-9.4-24.6-9.4-34 0z" />
                                                                                    </svg>
                                                                                </span>
                                                                                <span className="e-closed">
                                                                                    <svg
                                                                                        aria-hidden="true"
                                                                                        className="e-font-icon-svg e-fas-chevron-circle-down"
                                                                                        viewBox="0 0 512 512"
                                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                                        <path d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zM273 369.9l135.5-135.5c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L256 285.1 154.4 183.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L239 369.9c9.4 9.4 24.6 9.4 34 0z" />
                                                                                    </svg>
                                                                                </span>
                                                                            </span>
                                                                        </summary>
                                                                        <div
                                                                            aria-labelledby="e-n-accordion-item-9430"
                                                                            className="elementor-element elementor-element-1d46ae6 e-con-full e-flex e-con e-child"
                                                                            data-element_type="container"
                                                                            data-id="1d46ae6"
                                                                            role="region">
                                                                            <div
                                                                                className="elementor-element elementor-element-124248a elementor-widget elementor-widget-text-editor"
                                                                                data-element_type="widget"
                                                                                data-id="124248a"
                                                                                data-widget_type="text-editor.default">
                                                                                <div className="elementor-widget-container">
                                                                                    <p>
                                                                                        Lorem ipsum dolor sit amet, consectetur
                                                                                        adipiscing elit. Ut elit tellus, luctus
                                                                                        nec ullamcorper mattis, pulvinar dapibus
                                                                                        leo.
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </details>
                                                                    <details
                                                                        className="e-n-accordion-item"
                                                                        id="e-n-accordion-item-9431">
                                                                        <summary
                                                                            aria-controls="e-n-accordion-item-9431"
                                                                            aria-expanded="false"
                                                                            className="e-n-accordion-item-title"
                                                                            data-accordion-index="2"
                                                                            tabIndex="-1">
                                                                            <span className="e-n-accordion-item-title-header">
                                                                                <div className="e-n-accordion-item-title-text">
                                                                                    {" "}
                                                                                    Who is Cybertron For ?{" "}
                                                                                </div>
                                                                            </span>
                                                                            <span className="e-n-accordion-item-title-icon">
                                                                                <span className="e-opened">
                                                                                    <svg
                                                                                        aria-hidden="true"
                                                                                        className="e-font-icon-svg e-fas-chevron-circle-up"
                                                                                        viewBox="0 0 512 512"
                                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                                        <path d="M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm231-113.9L103.5 277.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L256 226.9l101.6 101.6c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L273 142.1c-9.4-9.4-24.6-9.4-34 0z" />
                                                                                    </svg>
                                                                                </span>
                                                                                <span className="e-closed">
                                                                                    <svg
                                                                                        aria-hidden="true"
                                                                                        className="e-font-icon-svg e-fas-chevron-circle-down"
                                                                                        viewBox="0 0 512 512"
                                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                                        <path d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zM273 369.9l135.5-135.5c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L256 285.1 154.4 183.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L239 369.9c9.4 9.4 24.6 9.4 34 0z" />
                                                                                    </svg>
                                                                                </span>
                                                                            </span>
                                                                        </summary>
                                                                        <div
                                                                            aria-labelledby="e-n-accordion-item-9431"
                                                                            className="elementor-element elementor-element-94c6113 e-con-full e-flex e-con e-child"
                                                                            data-element_type="container"
                                                                            data-id="94c6113"
                                                                            role="region">
                                                                            <div
                                                                                className="elementor-element elementor-element-f2a2b0e elementor-widget elementor-widget-text-editor"
                                                                                data-element_type="widget"
                                                                                data-id="f2a2b0e"
                                                                                data-widget_type="text-editor.default">
                                                                                <div className="elementor-widget-container">
                                                                                    <p>
                                                                                        Lorem ipsum dolor sit amet, consectetur
                                                                                        adipiscing elit. Ut elit tellus, luctus
                                                                                        nec ullamcorper mattis, pulvinar dapibus
                                                                                        leo.
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </details>
                                                                </div>
                                                                <script
                                                                    dangerouslySetInnerHTML={{
                                                                        __html:
                                                                            '{"@context":"https:\/\/schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How is Cybertron Priced?","acceptedAnswer":{"@type":"Answer","text":""}},{"@type":"Question","name":"Who is Cybertron For ?","acceptedAnswer":{"@type":"Answer","text":""}}]}',
                                                                    }}
                                                                    type="application/ld+json"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="elementor-element elementor-element-12b7eae e-con-full e-flex e-con e-child"
                                                    data-element_type="container"
                                                    data-id="12b7eae"
                                                    data-settings='{"background_background":"classic"}'>
                                                    <div
                                                        className="elementor-element elementor-element-a630468 elementor-widget elementor-widget-heading"
                                                        data-element_type="widget"
                                                        data-id="a630468"
                                                        data-widget_type="heading.default">
                                                        <div className="elementor-widget-container">
                                                            <h2 className="elementor-heading-title elementor-size-default">
                                                                Your details
                                                            </h2>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="elementor-element elementor-element-7562298 elementor-widget elementor-widget-text-editor"
                                                        data-element_type="widget"
                                                        data-id="7562298"
                                                        data-widget_type="text-editor.default">
                                                        <div className="elementor-widget-container">
                                                            <p>We are excited to put your custom quote</p>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="elementor-element elementor-element-e2a8ddb elementor-button-align-stretch elementor-widget elementor-widget-form"
                                                        data-element_type="widget"
                                                        data-id="e2a8ddb"
                                                        data-settings='{"step_next_label":"Next","step_previous_label":"Previous","button_width":"100","step_type":"number_text","step_icon_shape":"circle"}'
                                                        data-widget_type="form.default">
                                                        <div className="elementor-widget-container">
                                                            <form
                                                                className="elementor-form"
                                                                method="post"
                                                                name="New Form">
                                                                <input
                                                                    defaultValue="352"
                                                                    name="post_id"
                                                                    type="hidden"
                                                                />
                                                                <input
                                                                    defaultValue="e2a8ddb"
                                                                    name="form_id"
                                                                    type="hidden"
                                                                />
                                                                <input
                                                                    defaultValue="Pricing - Cybertron"
                                                                    name="referer_title"
                                                                    type="hidden"
                                                                />
                                                                <input
                                                                    defaultValue="352"
                                                                    name="queried_id"
                                                                    type="hidden"
                                                                />
                                                                <div className="elementor-form-fields-wrapper elementor-labels-above">
                                                                    <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-name elementor-col-100 elementor-field-required elementor-mark-required">
                                                                        <label
                                                                            className="elementor-field-label"
                                                                            htmlFor="form-field-name">
                                                                            Your Name
                                                                        </label>
                                                                        <input
                                                                            aria-required="true"
                                                                            className="elementor-field elementor-size-sm  elementor-field-textual"
                                                                            id="form-field-name"
                                                                            name="form_fields[name]"
                                                                            placeholder="Your name"
                                                                            required
                                                                            size="1"
                                                                            type="text"
                                                                        />
                                                                    </div>
                                                                    <div className="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-email elementor-col-100 elementor-field-required elementor-mark-required">
                                                                        <label
                                                                            className="elementor-field-label"
                                                                            htmlFor="form-field-email">
                                                                            Email Address
                                                                        </label>
                                                                        <input
                                                                            aria-required="true"
                                                                            className="elementor-field elementor-size-sm  elementor-field-textual"
                                                                            id="form-field-email"
                                                                            name="form_fields[email]"
                                                                            placeholder="Work Email"
                                                                            required
                                                                            size="1"
                                                                            type="email"
                                                                        />
                                                                    </div>
                                                                    <div className="elementor-field-type-tel elementor-field-group elementor-column elementor-field-group-field_fef4f38 elementor-col-100 elementor-field-required elementor-mark-required">
                                                                        <label
                                                                            className="elementor-field-label"
                                                                            htmlFor="form-field-field_fef4f38">
                                                                            Phone Number
                                                                        </label>
                                                                        <input
                                                                            aria-required="true"
                                                                            className="elementor-field elementor-size-sm  elementor-field-textual"
                                                                            id="form-field-field_fef4f38"
                                                                            name="form_fields[field_fef4f38]"
                                                                            pattern="[0-9()#&+*-=.]+"
                                                                            placeholder="Your Phone  Number"
                                                                            required
                                                                            size="1"
                                                                            title="Only numbers and phone characters (#, -, *, etc) are accepted."
                                                                            type="tel"
                                                                        />
                                                                    </div>
                                                                    <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-field_6ebf6a0 elementor-col-100">
                                                                        <label
                                                                            className="elementor-field-label"
                                                                            htmlFor="form-field-field_6ebf6a0">
                                                                            Company Name
                                                                        </label>
                                                                        <input
                                                                            className="elementor-field elementor-size-sm  elementor-field-textual"
                                                                            id="form-field-field_6ebf6a0"
                                                                            name="form_fields[field_6ebf6a0]"
                                                                            placeholder="Enter Your Company Name"
                                                                            size="1"
                                                                            type="text"
                                                                        />
                                                                    </div>
                                                                    <div className="elementor-field-type-textarea elementor-field-group elementor-column elementor-field-group-message elementor-col-100">
                                                                        <label
                                                                            className="elementor-field-label"
                                                                            htmlFor="form-field-message">
                                                                            Describe the service you're looking to purchase
                                                                            - please be as detailed as possible:
                                                                        </label>
                                                                        <textarea
                                                                            className="elementor-field-textual elementor-field  elementor-size-sm"
                                                                            id="form-field-message"
                                                                            name="form_fields[message]"
                                                                            placeholder="Enter Service Details.."
                                                                            rows="4"
                                                                        />
                                                                    </div>
                                                                    <div className="elementor-field-type-checkbox elementor-field-group elementor-column elementor-field-group-field_e77f866 elementor-col-100">
                                                                        <div className="elementor-field-subgroup  ">
                                                                            <span className="elementor-field-option">
                                                                                <input
                                                                                    defaultValue='I agree to our friendly <span><a href="https://cybertron-tech.com/privacy-policy/">privacy policy </a>.</span>'
                                                                                    id="form-field-field_e77f866-0"
                                                                                    name="form_fields[field_e77f866]"
                                                                                    type="checkbox"
                                                                                />{" "}
                                                                                <label htmlFor="form-field-field_e77f866-0">
                                                                                    I agree to our friendly{" "}
                                                                                    <span>
                                                                                        <a href="https://cybertron-tech.com/privacy-policy/">
                                                                                            privacy policy{" "}
                                                                                        </a>
                                                                                        .
                                                                                    </span>
                                                                                </label>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100 e-form__buttons">
                                                                        <button
                                                                            className="elementor-button elementor-size-sm"
                                                                            type="submit">
                                                                            <span className="elementor-button-content-wrapper">
                                                                                <span className="elementor-button-text">
                                                                                    SUBMIT REQUEST
                                                                                </span>
                                                                            </span>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === "business" && (
                                        <div
                                            aria-labelledby="e-n-tab-title-46891042"
                                            className=" elementor-element elementor-element-6a72da5 e-con-full e-flex e-con e-child"
                                            data-element_type="container"
                                            data-id="6a72da5"
                                            data-tab-index="2"
                                            id="e-n-tab-content-46891042"
                                            role="tabpanel"
                                            style={{
                                                "--n-tabs-title-order": "2",
                                            }}>
                                            <div
                                                className="elementor-element elementor-element-3bada8d e-con-full e-flex e-con e-child"
                                                data-element_type="container"
                                                data-id="3bada8d">
                                                <div
                                                    className="elementor-element elementor-element-fb42273 e-con-full e-flex e-con e-child"
                                                    data-element_type="container"
                                                    data-id="fb42273">
                                                    <div
                                                        className="elementor-element elementor-element-0352b72 elementor-widget elementor-widget-heading"
                                                        data-element_type="widget"
                                                        data-id="0352b72"
                                                        data-widget_type="heading.default">
                                                        <div className="elementor-widget-container">
                                                            <h2 className="elementor-heading-title elementor-size-default">
                                                                Contact Us
                                                            </h2>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="elementor-element elementor-element-c6dd707 elementor-widget elementor-widget-heading"
                                                        data-element_type="widget"
                                                        data-id="c6dd707"
                                                        data-widget_type="heading.default">
                                                        <div className="elementor-widget-container">
                                                            <h2 className="elementor-heading-title elementor-size-default">
                                                                Get Your Custom Quote
                                                            </h2>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="elementor-element elementor-element-9c9d6cb elementor-widget elementor-widget-text-editor"
                                                        data-element_type="widget"
                                                        data-id="9c9d6cb"
                                                        data-widget_type="text-editor.default">
                                                        <div className="elementor-widget-container">
                                                            <p>
                                                                Our pricing is tailored to your specific environment
                                                                so you pay for what you really need.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="elementor-element elementor-element-1a18abe e-con-full e-flex e-con e-child"
                                                    data-element_type="container"
                                                    data-id="1a18abe"
                                                    data-settings='{"background_background":"classic"}'>
                                                    <div
                                                        className="elementor-element elementor-element-84e6760 elementor-widget elementor-widget-heading"
                                                        data-element_type="widget"
                                                        data-id="84e6760"
                                                        data-widget_type="heading.default">
                                                        <div className="elementor-widget-container">
                                                            <h2 className="elementor-heading-title elementor-size-default">
                                                                Your details
                                                            </h2>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="elementor-element elementor-element-420f7fb elementor-widget elementor-widget-text-editor"
                                                        data-element_type="widget"
                                                        data-id="420f7fb"
                                                        data-widget_type="text-editor.default">
                                                        <div className="elementor-widget-container">
                                                            <p>We are excited to put your custom quote</p>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="elementor-element elementor-element-b376312 elementor-button-align-stretch elementor-widget elementor-widget-form"
                                                        data-element_type="widget"
                                                        data-id="b376312"
                                                        data-settings='{"step_next_label":"Next","step_previous_label":"Previous","button_width":"100","step_type":"number_text","step_icon_shape":"circle"}'
                                                        data-widget_type="form.default">
                                                        <div className="elementor-widget-container">
                                                            <form
                                                                className="elementor-form"
                                                                method="post"
                                                                name="New Form">
                                                                <input
                                                                    defaultValue="352"
                                                                    name="post_id"
                                                                    type="hidden"
                                                                />
                                                                <input
                                                                    defaultValue="b376312"
                                                                    name="form_id"
                                                                    type="hidden"
                                                                />
                                                                <input
                                                                    defaultValue="Pricing - Cybertron"
                                                                    name="referer_title"
                                                                    type="hidden"
                                                                />
                                                                <input
                                                                    defaultValue="352"
                                                                    name="queried_id"
                                                                    type="hidden"
                                                                />
                                                                <div className="elementor-form-fields-wrapper elementor-labels-above">
                                                                    <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-name elementor-col-100 elementor-field-required elementor-mark-required">
                                                                        <label
                                                                            className="elementor-field-label"
                                                                            htmlFor="form-field-name">
                                                                            Your Name
                                                                        </label>
                                                                        <input
                                                                            aria-required="true"
                                                                            className="elementor-field elementor-size-sm  elementor-field-textual"
                                                                            id="form-field-name"
                                                                            name="form_fields[name]"
                                                                            placeholder="Your name"
                                                                            required
                                                                            size="1"
                                                                            type="text"
                                                                        />
                                                                    </div>
                                                                    <div className="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-email elementor-col-100 elementor-field-required elementor-mark-required">
                                                                        <label
                                                                            className="elementor-field-label"
                                                                            htmlFor="form-field-email">
                                                                            Email Address
                                                                        </label>
                                                                        <input
                                                                            aria-required="true"
                                                                            className="elementor-field elementor-size-sm  elementor-field-textual"
                                                                            id="form-field-email"
                                                                            name="form_fields[email]"
                                                                            placeholder="Work Email"
                                                                            required
                                                                            size="1"
                                                                            type="email"
                                                                        />
                                                                    </div>
                                                                    <div className="elementor-field-type-tel elementor-field-group elementor-column elementor-field-group-field_fef4f38 elementor-col-100 elementor-field-required elementor-mark-required">
                                                                        <label
                                                                            className="elementor-field-label"
                                                                            htmlFor="form-field-field_fef4f38">
                                                                            Phone Number
                                                                        </label>
                                                                        <input
                                                                            aria-required="true"
                                                                            className="elementor-field elementor-size-sm  elementor-field-textual"
                                                                            id="form-field-field_fef4f38"
                                                                            name="form_fields[field_fef4f38]"
                                                                            pattern="[0-9()#&+*-=.]+"
                                                                            placeholder="Your Phone  Number"
                                                                            required
                                                                            size="1"
                                                                            title="Only numbers and phone characters (#, -, *, etc) are accepted."
                                                                            type="tel"
                                                                        />
                                                                    </div>
                                                                    <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-field_6ebf6a0 elementor-col-100 elementor-field-required elementor-mark-required">
                                                                        <label
                                                                            className="elementor-field-label"
                                                                            htmlFor="form-field-field_6ebf6a0">
                                                                            Company Name
                                                                        </label>
                                                                        <input
                                                                            aria-required="true"
                                                                            className="elementor-field elementor-size-sm  elementor-field-textual"
                                                                            id="form-field-field_6ebf6a0"
                                                                            name="form_fields[field_6ebf6a0]"
                                                                            placeholder="Enter Your Company Name"
                                                                            required
                                                                            size="1"
                                                                            type="text"
                                                                        />
                                                                    </div>
                                                                    <div className="elementor-field-type-select elementor-field-group elementor-column elementor-field-group-field_f02257a elementor-col-100 elementor-field-required elementor-mark-required">
                                                                        <label
                                                                            className="elementor-field-label"
                                                                            htmlFor="form-field-field_f02257a">
                                                                            Company Size
                                                                        </label>
                                                                        <div className="elementor-field elementor-select-wrapper remove-before ">
                                                                            <div className="select-caret-down-wrapper">
                                                                                <svg
                                                                                    aria-hidden="true"
                                                                                    className="e-font-icon-svg e-eicon-caret-down"
                                                                                    viewBox="0 0 571.4 571.4"
                                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                                    <path d="M571 393Q571 407 561 418L311 668Q300 679 286 679T261 668L11 418Q0 407 0 393T11 368 36 357H536Q550 357 561 368T571 393Z" />
                                                                                </svg>
                                                                            </div>
                                                                            <select
                                                                                aria-required="true"
                                                                                className="elementor-field-textual elementor-size-sm"
                                                                                id="form-field-field_f02257a"
                                                                                name="form_fields[field_f02257a]"
                                                                                required>
                                                                                <option value="1 - 299">1 - 299</option>
                                                                                <option value="300 - 499">300 - 499</option>
                                                                                <option value="500 - 999">500 - 999</option>
                                                                                <option value="1000+">1000+</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                    <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-field_8273df3 elementor-col-100">
                                                                        <label
                                                                            className="elementor-field-label"
                                                                            htmlFor="form-field-field_8273df3">
                                                                            Your Job Role
                                                                        </label>
                                                                        <input
                                                                            className="elementor-field elementor-size-sm  elementor-field-textual"
                                                                            id="form-field-field_8273df3"
                                                                            name="form_fields[field_8273df3]"
                                                                            placeholder="Enter Your Company Name"
                                                                            size="1"
                                                                            type="text"
                                                                        />
                                                                    </div>
                                                                    <div className="elementor-field-type-textarea elementor-field-group elementor-column elementor-field-group-message elementor-col-100">
                                                                        <label
                                                                            className="elementor-field-label"
                                                                            htmlFor="form-field-message">
                                                                            Describe the service you're looking to purchase
                                                                            - please be as detailed as possible:
                                                                        </label>
                                                                        <textarea
                                                                            className="elementor-field-textual elementor-field  elementor-size-sm"
                                                                            id="form-field-message"
                                                                            name="form_fields[message]"
                                                                            placeholder="Enter Service Details.."
                                                                            rows="4"
                                                                        />
                                                                    </div>
                                                                    <div className="elementor-field-type-checkbox elementor-field-group elementor-column elementor-field-group-field_7d5ddde elementor-col-100">
                                                                        <div className="elementor-field-subgroup  ">
                                                                            <span className="elementor-field-option">
                                                                                <input
                                                                                    defaultValue='I agree to our friendly <span><a href="https://cybertron-tech.com/privacy-policy/">privacy policy </a>.</span>'
                                                                                    id="form-field-field_7d5ddde-0"
                                                                                    name="form_fields[field_7d5ddde]"
                                                                                    type="checkbox"
                                                                                />{" "}
                                                                                <label htmlFor="form-field-field_7d5ddde-0">
                                                                                    I agree to our friendly{" "}
                                                                                    <span>
                                                                                        <a href="https://cybertron-tech.com/privacy-policy/">
                                                                                            privacy policy{" "}
                                                                                        </a>
                                                                                        .
                                                                                    </span>
                                                                                </label>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100 e-form__buttons">
                                                                        <button
                                                                            className="elementor-button elementor-size-sm"
                                                                            type="submit">
                                                                            <span className="elementor-button-content-wrapper">
                                                                                <span className="elementor-button-text">
                                                                                    SUBMIT REQUEST
                                                                                </span>
                                                                            </span>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default prices