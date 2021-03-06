import React, {Component} from 'react';

class Home extends Component {
    render() {
        return (

            <div className="site-wrapper overflow-hidden ">


                <header
                    className="site-header site-header--menu-right dynamic-sticky-bg py-7 py-lg-0 site-header--absolute site-header--sticky">
                    <div className="container">
                        <nav className="scroll navbar site-navbar offcanvas-active navbar-expand-lg  py-0">


                            <div className="brand-logo">
                                <a href="#/">

                                    <h2 className={"text-white"}>PEPOFFICE</h2>
                                </a>
                            </div>


                            <div className="collapse navbar-collapse" id="mobile-menu">
                                <div className="navbar-nav-wrapper">
                                    <ul className="navbar-nav main-menu">
                                        <li className="nav-item dropdown active">
                                            <a className="nav-header-link dropdown-toggle gr-toggle-arrow"
                                               id="navbarDropdown"
                                               href="#/" role="button" data-toggle="dropdown"
                                               aria-haspopup="true" aria-expanded="false">Home </a>

                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-header-link dropdown-toggle gr-toggle-arrow"
                                               id="navbarDropdown"
                                               href="#/" role="button" data-toggle="dropdown"
                                               aria-haspopup="true" aria-expanded="false">About </a>

                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-header-link dropdown-toggle gr-toggle-arrow"
                                               id="navbarDropdown"
                                               href="#/" role="button" data-toggle="dropdown"
                                               aria-haspopup="true" aria-expanded="false">Contact </a>

                                        </li>
                                    </ul>
                                </div>
                                <button className="d-block d-lg-none offcanvas-btn-close focus-reset" type="button"
                                        data-toggle="collapse" data-target="#mobile-menu" aria-controls="mobile-menu"
                                        aria-expanded="true" aria-label="Toggle navigation">
                                    <i className="gr-cross-icon"></i>
                                </button>
                            </div>
                            <div className="header-btns header-btn-devider ml-auto pr-2 ml-lg-6 d-none d-xs-flex">
                                <a className="btn btn-transparent text-uppercase font-size-3 heading-white-color focus-reset hover-shadow-header"
                                   href="#/" data-toggle="modal" data-target="#login">
                                    Log in
                                </a>
                                <a className="btn btn-green text-uppercase font-size-3" href="#/"
                                   data-toggle="modal" data-target="#signup">
                                    Sign up
                                </a>
                            </div>

                            <button className="navbar-toggler btn-close-off-canvas  hamburger-icon border-0"
                                    type="button" data-toggle="collapse" data-target="#mobile-menu"
                                    aria-controls="mobile-menu" aria-expanded="false" aria-label="Toggle navigation">

                                <span className="hamburger hamburger--squeeze js-hamburger">
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
            </span>
            </span>
                            </button>

                        </nav>
                    </div>

                </header>


                <div
                    className="bg-light-custom pt-26 pt-md-32 pt-lg-33 pt-xl-35 position-relative z-index-1 overflow-hidden">

                    <div className="">
                        <img src="assets/image/slider.jpg" alt="" className="w-100" style={{marginTop: "-252px"}}/>

                    </div>
                    <div className="topSection">
                        <div className="col-lg-12 bg-light-custom">
                            <div className="container">
                                <div className="row position-relative align-items-center">
                                    <div
                                        className="m-264 corners1 col-xxl-12 col-xl-12 col-lg-12 col-md-12 pt-lg-18 pb-lg-33 pb-xl-34 pb-md-33 pb-10"

                                    >
                                        <h1 className="text-white text-center">Find the perfect job
                                            that you deserve.</h1>
                                        <br/>
                                        <div>

                                            <form action="#/" className="search-form shadow-6">
                                                <div className="filter-search-form-1 bg-white rounded-sm shadow-4">
                                                    <div className="filter-inputs">
                                                        <div className="form-group position-relative">
                                                            <select name="country" id="country"
                                                                    className="nice-select pl-13 h-100 arrow-3 font-size-4">
                                                                <option value="" data-display="Industries"
                                                                        className="text-uppercase">Industries
                                                                </option>
                                                                <option value="">IT</option>
                                                                <option value="">Business</option>
                                                                <option value="">Mechanical</option>
                                                                <option value="">Teaching</option>
                                                            </select>
                                                            <span
                                                                className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6">
                                                                <i
                                                                    className="fa fa-search text-primary font-weight-bold"/></span>
                                                        </div>

                                                        <div className="form-group position-relative">
                                                            <select name="country" id="country"
                                                                    className="nice-select pl-13 h-100 arrow-3 font-size-4">
                                                                <option value="" data-display="Location"
                                                                        className="text-uppercase">Location
                                                                </option>
                                                                <option value="">United States of America</option>
                                                                <option value="">United Arab Emirates</option>
                                                                <option value="">Bangladesh</option>
                                                                <option value="">Pakistan</option>
                                                            </select>
                                                            <span
                                                                className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6"><i
                                                                className="fa fa-map-pin text-primary font-weight-bold"/></span>
                                                        </div>

                                                    </div>

                                                    <div className="button-block">
                                                        <button
                                                            className="btn btn-success line-height-reset h-100 btn-submit w-100 text-uppercase">Search
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                        <div className="col-lg-12 bg-light-custom">
                            <h2 className="text-center"> Top companies are hiring !!!</h2>
                            <br/>
                            <section className="example">

    <div className="col-lg-12">
						<div className="gridly">
                            <div className="column brick">
                                        <div className="logo-card tooltip-custom">
                                            <div className="tooltiptext">
                                                <h6 className="text-white">Cognoscente Pvt. Ltd.</h6>
                                                <h5 className="text-uppercase blink">is Hiring</h5>
                                                <ul className="text-left">
                                                    <li>Python Developer</li>
                                                    <li>Full Stack Developer</li>
                                                    <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                     <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                </ul>
                                            </div>
                                            <img className="h-w-custom" src={"assets/image/logos/audi.png"}
                                                 alt="Logo"/>



                                        </div>
                                    </div>
                                    <div className="column brick">
                                        <div className="logo-card tooltip-custom">
                                            <div className="tooltiptext">
                                                <h6 className="text-white">Cognoscente Pvt. Ltd.</h6>
                                                <h5 id="blink" className="text-uppercase blink">is Hiring</h5>
                                                <ul className="text-left">
                                                    <li>Python Developer</li>
                                                    <li>Full Stack Developer</li>
                                                    <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                     <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                </ul>
                                            </div>

                                            <img className="h-w-custom" src={"assets/image/logos/adidas.jpg"}
                                                 alt="Logo"/>



                                        </div>
                                    </div>
                                    <div className="column brick">
                                        <div className="logo-card tooltip-custom">

                                                                          <div className="tooltiptext">
                                                 <h6 className="text-white">Cognoscente Pvt. Ltd.</h6>
                                               <h5 id="blink" className="text-uppercase text-green">is Hiring</h5>
                                                <ul className="text-left">
                                                    <li>Python Developer</li>
                                                    <li>Full Stack Developer</li>
                                                    <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                     <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                </ul>
                                            </div>
                                            <img className="h-w-custom" src={"assets/image/logos/bmw.png"}
                                                 alt="Logo"/>



                                        </div>
                                    </div>
                                    <div className="column brick">
                                        <div className="logo-card tooltip-custom">

                                                                          <div className="tooltiptext">
                                                 <h6 className="text-white">Cognoscente Pvt. Ltd.</h6>
                                              <h5 id="blink" className="text-uppercase text-green">is Hiring</h5>
                                                <ul className="text-left">
                                                    <li>Python Developer</li>
                                                    <li>Full Stack Developer</li>
                                                    <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                     <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                </ul>
                                            </div>
                                            <img className="h-w-custom" src={"assets/image/logos/audi.png"}
                                                 alt="Logo"/>



                                        </div>
                                    </div>
                                    <div className="column brick">
                                        <div className="logo-card tooltip-custom">

                                                          <div className="tooltiptext">
                                              <h6 className="text-white">Cognoscente Pvt. Ltd.</h6>
                                                 <h5 id="blink" className="text-uppercase text-green">is Hiring</h5>
                                                <ul className="text-left">
                                                    <li>Python Developer</li>
                                                    <li>Full Stack Developer</li>
                                                    <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                     <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                </ul>
                                            </div>
                                            <img className="h-w-custom" src={"assets/image/logos/channel.png"}
                                                 alt="Logo"/>



                                        </div>
                                    </div>
                                    <div className="column brick">
                                        <div className="logo-card tooltip-custom">
<div className="tooltiptext">
                                                <h6 className="text-white">Cognoscente Pvt. Ltd.</h6>
                                               <h5 id="blink" className="text-uppercase text-green">is Hiring</h5>
                                                <ul className="text-left">
                                                    <li>Python Developer</li>
                                                    <li>Full Stack Developer</li>
                                                    <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                     <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                </ul>
                                            </div>
                                            <img className="h-w-custom" src={"assets/image/logos/google.png"}
                                                 alt="Logo"/>



                                        </div>
                                    </div>
                                    <div className="column brick">
                                        <div className="logo-card tooltip-custom">
<div className="tooltiptext">
                                               <h6 className="text-white">Cognoscente Pvt. Ltd.</h6>
                                                <h5 id="blink" className="text-uppercase text-green">is Hiring</h5>
                                                <ul className="text-left">
                                                    <li>Python Developer</li>
                                                    <li>Full Stack Developer</li>
                                                    <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                     <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                </ul>
                                            </div>
                                            <img className="h-w-custom" src={"assets/image/logos/apple.png"}
                                                 alt="Logo"/>


                                        </div>
                                    </div>
                                    <div className="column brick">
                                        <div className="logo-card tooltip-custom">
<div className="tooltiptext">
                                                <h6 className="text-white">Cognoscente Pvt. Ltd.</h6>
                                                 <h5 id="blink" className="text-uppercase text-green">is Hiring</h5>
                                                <ul className="text-left">
                                                    <li>Python Developer</li>
                                                    <li>Full Stack Developer</li>
                                                    <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                     <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                </ul>
                                            </div>
                                            <img className="h-w-custom" src={"assets/image/logos/lays.png"}
                                                 alt="Logo"/>



                                        </div>
                                    </div>
                                    <div className="column brick">
                                        <div className="logo-card tooltip-custom">
<div className="tooltiptext">
                                                <h6 className="text-white">Cognoscente Pvt. Ltd.</h6>
                                                <h5 id="blink" className="text-uppercase text-green">is Hiring</h5>
                                                <ul className="text-left">
                                                    <li>Python Developer</li>
                                                    <li>Full Stack Developer</li>
                                                    <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                     <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                </ul>
                                            </div>
                                            <img className="h-w-custom" src={"assets/image/logos/lays.png"}
                                                 alt="Logo"/>


                                        </div>
                                    </div>
                                    <div className="column brick">
                                        <div className="logo-card tooltip-custom">
                                            <div className="tooltiptext">
                                                <h6 className="text-white">Cognoscente Pvt. Ltd.</h6>
                                                 <h5 id="blink" className="text-uppercase text-green">is Hiring</h5>
                                                <ul className="text-left">
                                                    <li>Python Developer</li>
                                                    <li>Full Stack Developer</li>
                                                    <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                     <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                </ul>
                                            </div>
                                            <img className="h-w-custom" src={"assets/image/logos/lays.png"}
                                                 alt="Logo"/>



                                        </div>
                                    </div>


                                    <div className="column brick">
                                        <div className="logo-card tooltip-custom">
                                            <div className="tooltiptext">
                                                 <h6 className="text-white">Cognoscente Pvt. Ltd.</h6>
                                                <h5 id="blink" className="text-uppercase text-green">is Hiring</h5>
                                                <ul className="text-left">
                                                    <li>Python Developer</li>
                                                    <li>Full Stack Developer</li>
                                                    <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                     <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                </ul>
                                            </div>
                                            <img className="h-w-custom" src={"assets/image/logos/hyundai.png"}
                                                 alt="Logo"/>

                                        </div>
                                    </div>
                                    <div className="column brick">
                                        <div className="logo-card tooltip-custom">
                                            <div className="tooltiptext">
                                                 <h6 className="text-white">Cognoscente Pvt. Ltd.</h6>
                                                <h5 id="blink" className="text-uppercase text-green">is Hiring</h5>
                                                <ul className="text-left">
                                                    <li>Python Developer</li>
                                                    <li>Full Stack Developer</li>
                                                    <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                     <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                </ul>
                                            </div>

                                            <img className="h-w-custom" src={"assets/image/logos/mer.png"}
                                                 alt="Logo"/>



                                        </div>
                                    </div>
                                    <div className="column brick">
                                        <div className="logo-card tooltip-custom">
                                            <div className="tooltiptext">
                                              <h6 className="text-white">Cognoscente Pvt. Ltd.</h6>
                                                <h5 id="blink" className="text-uppercase text-green">is Hiring</h5>
                                                <ul className="text-left">
                                                    <li>Python Developer</li>
                                                    <li>Full Stack Developer</li>
                                                    <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                     <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                </ul>
                                            </div>
                                            <img className="h-w-custom" src={"assets/image/logos/apple.png"}
                                                 alt="Logo"/>


                                        </div>
                                    </div>
                                    <div className="column brick">
                                       <div className="logo-card tooltip-custom">
                                            <div className="tooltiptext">
                                                <h6 className="text-white">Cognoscente Pvt. Ltd.</h6>
                                                <h5 id="blink" className="text-uppercase text-green">is Hiring</h5>
                                                <ul className="text-left">
                                                    <li>Python Developer</li>
                                                    <li>Full Stack Developer</li>
                                                    <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                     <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                </ul>
                                            </div>
                                            <img className="h-w-custom" src={"assets/image/logos/lays.png"}
                                                 alt="Logo"/>


                                        </div>
                                    </div>
                                    <div className="column brick">
                                        <div className="logo-card tooltip-custom">
                                            <div className="tooltiptext">
                                               <h6 className="text-white">Cognoscente Pvt. Ltd.</h6>
                                               <h5 id="blink" className="text-uppercase text-green">is Hiring</h5>
                                                <ul className="text-left">
                                                    <li>Python Developer</li>
                                                    <li>Full Stack Developer</li>
                                                    <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                     <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                </ul>
                                            </div>
                                            <img className="h-w-custom" src={"assets/image/logos/tec.png"}
                                                 alt="Logo"/>


                                        </div>
                                    </div>
                                    <div className="column brick">
                                        <div className="logo-card tooltip-custom">
                                            <div className="tooltiptext">
                                               <h6 className="text-white">Cognoscente Pvt. Ltd.</h6>
                                                <h5 id="blink" className="text-uppercase text-green">is Hiring</h5>
                                                <ul className="text-left">
                                                    <li>Python Developer</li>
                                                    <li>Full Stack Developer</li>
                                                    <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                     <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                </ul>
                                            </div>
                                            <img className="h-w-custom" src={"assets/image/logos/logo1.png"}
                                                 alt="Logo"/>

                                        </div>
                                    </div>
                                    <div className="column brick">
                                        <div className="logo-card tooltip-custom">
                                            <div className="tooltiptext">
                                                <h6 className="text-white">Cognoscente Pvt. Ltd.</h6>
                                                 <h5 id="blink" className="text-uppercase text-green">is Hiring</h5>
                                                <ul className="text-left">
                                                    <li>Python Developer</li>
                                                    <li>Full Stack Developer</li>
                                                    <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                     <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                </ul>
                                            </div>

                                            <img className="h-w-custom" src={"assets/image/logos/nike.png"}
                                                 alt="Logo"/>


                                        </div>
                                    </div>
                                    <div className="column brick">
                                       <div className="logo-card tooltip-custom">
                                            <div className="tooltiptext">
                                               <h6 className="text-white">Cognoscente Pvt. Ltd.</h6>
                                                 <h5 id="blink" className="text-uppercase text-green">is Hiring</h5>
                                                <ul className="text-left">
                                                    <li>Python Developer</li>
                                                    <li>Full Stack Developer</li>
                                                    <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                     <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                </ul>
                                            </div>
                                            <img className="h-w-custom" src={"assets/image/logos/it-logo.png"}
                                                 alt="Logo"/>

                                        </div>
                                    </div>
                                    <div className="column brick">
                                       <div className="logo-card tooltip-custom">
                                            <div className="tooltiptext">
                                               <h6 className="text-white">Cognoscente Pvt. Ltd.</h6>
                                                 <h5 id="blink" className="text-uppercase text-green">is Hiring</h5>
                                                <ul className="text-left">
                                                    <li>Python Developer</li>
                                                    <li>Full Stack Developer</li>
                                                    <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                     <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                </ul>
                                            </div>
                                            <img className="h-w-custom" src={"assets/image/logos/hyundai.png"}
                                                 alt="Logo"/>


                                        </div>
                                    </div>
                                    <div className="column brick">
                                       <div className="logo-card tooltip-custom">
                                            <div className="tooltiptext">
                                                <h6 className="text-white">Cognoscente Pvt. Ltd.</h6>
                                                 <h5 id="blink" className="text-uppercase text-green">is Hiring</h5>
                                                <ul className="text-left">
                                                    <li>Python Developer</li>
                                                    <li>Full Stack Developer</li>
                                                    <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                     <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                </ul>
                                            </div>
                                            <img className="h-w-custom" src={"assets/image/logos/pub.png"}
                                                 alt="Logo"/>


                                        </div>
                                    </div>


                                    <div className="column brick">
                                      <div className="logo-card tooltip-custom">
                                            <div className="tooltiptext">
                                               <h6 className="text-white">Cognoscente Pvt. Ltd.</h6>
                                                 <h5 id="blink" className="text-uppercase text-green">is Hiring</h5>
                                                <ul className="text-left">
                                                    <li>Python Developer</li>
                                                    <li>Full Stack Developer</li>
                                                    <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                     <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                </ul>
                                            </div>
                                            <img className="h-w-custom" src={"assets/image/logos/channel.png"}
                                                 alt="Logo"/>




                                        </div>
                                    </div>
                                    <div className="column brick">
                                       <div className="logo-card tooltip-custom">
                                            <div className="tooltiptext">
                                              <h6 className="text-white">Cognoscente Pvt. Ltd.</h6>
                                                 <h5 id="blink" className="text-uppercase text-green">is Hiring</h5>
                                                <ul className="text-left">
                                                    <li>Python Developer</li>
                                                    <li>Full Stack Developer</li>
                                                    <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                     <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                </ul>
                                            </div>
                                            <img className="h-w-custom" src={"assets/image/logos/audi.png"}
                                                 alt="Logo"/>


                                        </div>
                                    </div>
                                    <div className="column brick">
                                        <div className="logo-card tooltip-custom">
                                            <div className="tooltiptext">
                                                <h6 className="text-white">Cognoscente Pvt. Ltd.</h6>
                                                <h5 id="blink" className="text-uppercase text-green">is Hiring</h5>
                                                <ul className="text-left">
                                                    <li>Python Developer</li>
                                                    <li>Full Stack Developer</li>
                                                    <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                     <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                </ul>
                                            </div>
                                            <img className="h-w-custom" src={"assets/image/logos/audi.png"}
                                                 alt="Logo"/>

                                        </div>
                                    </div>
                                    <div className="column brick">
                                       <div className="logo-card tooltip-custom">
                                            <div className="tooltiptext">
                                               <h6 className="text-white">Cognoscente Pvt. Ltd.</h6>
                                                 <h5 id="blink" className="text-uppercase text-green">is Hiring</h5>
                                                <ul className="text-left">
                                                    <li>Python Developer</li>
                                                    <li>Full Stack Developer</li>
                                                    <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                     <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                </ul>
                                            </div>
                                            <img className="h-w-custom" src={"assets/image/logos/google.png"}
                                                 alt="Logo"/>



                                        </div>
                                    </div>
                                    <div className="column brick">
                                      <div className="logo-card tooltip-custom">
                                            <div className="tooltiptext">
                                               <h6 className="text-white">Cognoscente Pvt. Ltd.</h6>
                                                 <h5 id="blink" className="text-uppercase text-green">is Hiring</h5>
                                                <ul className="text-left">
                                                    <li>Python Developer</li>
                                                    <li>Full Stack Developer</li>
                                                    <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                     <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                </ul>
                                            </div>
                                            <img className="h-w-custom" src={"assets/image/logos/apple.png"}
                                                 alt="Logo"/>


                                        </div>
                                    </div>
                                    <div className="column brick">
                                       <div className="logo-card tooltip-custom">
                                            <div className="tooltiptext">
                                               <h6 className="text-white">Cognoscente Pvt. Ltd.</h6>
                                                 <h5 id="blink" className="text-uppercase text-green">is Hiring</h5>
                                                <ul className="text-left">
                                                    <li>Python Developer</li>
                                                    <li>Full Stack Developer</li>
                                                    <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                     <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                </ul>
                                            </div>
                                            <img className="h-w-custom" src={"assets/image/logos/logo1.png"}
                                                 alt="Logo"/>


                                        </div>
                                    </div>
                                    <div className="column brick">
                                       <div className="logo-card tooltip-custom">
                                            <div className="tooltiptext">
                                                <h6 className="text-white">Cognoscente Pvt. Ltd.</h6>
                                                 <h5 id="blink" className="text-uppercase text-green">is Hiring</h5>
                                                <ul className="text-left">
                                                    <li>Python Developer</li>
                                                    <li>Full Stack Developer</li>
                                                    <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                     <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                </ul>
                                            </div>
                                            <img className="h-w-custom" src={"assets/image/logos/adidas.jpg"}
                                                 alt="Logo"/>


                                        </div>
                                    </div>
                                    <div className="column brick">
                                       <div className="logo-card tooltip-custom">
                                            <div className="tooltiptext">
                                               <h6 className="text-white">Cognoscente Pvt. Ltd.</h6>
                                                <h5 id="blink" className="text-uppercase text-green">is Hiring</h5>
                                                <ul className="text-left">
                                                    <li>Python Developer</li>
                                                    <li>Full Stack Developer</li>
                                                    <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                     <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                </ul>
                                            </div>
                                            <img className="h-w-custom" src={"assets/image/logos/bmw.png"}
                                                 alt="Logo"/>

                                        </div>
                                    </div>
                                    <div className="column brick">
                                       <div className="logo-card tooltip-custom">
                                            <div className="tooltiptext">
                                               <h6 className="text-white">Cognoscente Pvt. Ltd.</h6>
                                                 <h5 id="blink" className="text-uppercase text-green">is Hiring</h5>
                                                <ul className="text-left">
                                                    <li>Python Developer</li>
                                                    <li>Full Stack Developer</li>
                                                    <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                     <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                </ul>
                                            </div>
                                            <img className="h-w-custom" src={"assets/image/logos/google.png"}
                                                 alt="Logo"/>

                                        </div>
                                    </div>
                                    <div className="column brick">
                                       <div className="logo-card tooltip-custom">
                                            <div className="tooltiptext">
                                                <h6 className="text-white">Cognoscente Pvt. Ltd.</h6>
                                                 <h5 id="blink" className="text-uppercase text-green">is Hiring</h5>
                                                <ul className="text-left">
                                                    <li>Python Developer</li>
                                                    <li>Full Stack Developer</li>
                                                    <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                     <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                </ul>
                                            </div>
                                            <img className="h-w-custom" src={"assets/image/logos/apple.png"}
                                                 alt="Logo"/>

                                        </div>
                                    </div>


                                    <div className="column brick">
                                       <div className="logo-card tooltip-custom">
                                            <div className="tooltiptext">
                                                <h6 className="text-white">Cognoscente Pvt. Ltd.</h6>
                                                 <h5 id="blink" className="text-uppercase text-green">is Hiring</h5>
                                                <ul className="text-left">
                                                    <li>Python Developer</li>
                                                    <li>Full Stack Developer</li>
                                                    <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                     <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                </ul>
                                            </div>

                                            <img className="h-w-custom" src={"assets/image/logos/hyundai.png"}
                                                 alt="Logo"/>


                                        </div>
                                    </div>
                                    <div className="column brick">
                                        <div className="logo-card tooltip-custom">
                                            <div className="tooltiptext">
                                                 <h6 className="text-white">Cognoscente Pvt. Ltd.</h6>
                                                <h5 id="blink" className="text-uppercase text-green">is Hiring</h5>
                                                <ul className="text-left">
                                                    <li>Python Developer</li>
                                                    <li>Full Stack Developer</li>
                                                    <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                     <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                </ul>
                                            </div>

                                            <img className="h-w-custom" src={"assets/image/logos/mer.png"}
                                                 alt="Logo"/>



                                        </div>
                                    </div>
                                    <div className="column brick">
                                       <div className="logo-card tooltip-custom">
                                            <div className="tooltiptext">
                                                <h6 className="text-white">Cognoscente Pvt. Ltd.</h6>
                                                <h5 id="blink" className="text-uppercase text-green">is Hiring</h5>
                                                <ul className="text-left">
                                                    <li>Python Developer</li>
                                                    <li>Full Stack Developer</li>
                                                    <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                     <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                </ul>
                                            </div>
                                            <img className="h-w-custom" src={"assets/image/logos/tec.png"}
                                                 alt="Logo"/>


                                        </div>
                                    </div>
                                    <div className="column brick">
                                       <div className="logo-card tooltip-custom">
                                            <div className="tooltiptext">
                                                <h6 className="text-white">Cognoscente Pvt. Ltd.</h6>
                                                <h5 id="blink" className="text-uppercase text-green">is Hiring</h5>
                                                <ul className="text-left">
                                                    <li>Python Developer</li>
                                                    <li>Full Stack Developer</li>
                                                    <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                     <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                </ul>
                                            </div>

                                            <img className="h-w-custom" src={"assets/image/logos/mer.png"}
                                                 alt="Logo"/>



                                        </div>
                                    </div>
                                    <div className="column brick">
                                      <div className="logo-card tooltip-custom">
                                            <div className="tooltiptext">
                                                 <h6 className="text-white">Cognoscente Pvt. Ltd.</h6>
                                                 <h5 id="blink" className="text-uppercase text-green">is Hiring</h5>
                                                <ul className="text-left">
                                                    <li>Python Developer</li>
                                                    <li>Full Stack Developer</li>
                                                    <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                     <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                </ul>
                                            </div>
                                            <img className="h-w-custom" src={"assets/image/logos/tec.png"}
                                                 alt="Logo"/>


                                        </div>
                                    </div>
                                    <div className="column brick">
                                        <div className="logo-card tooltip-custom">
                                            <div className="tooltiptext">
                                               <h6 className="text-white">Cognoscente Pvt. Ltd.</h6>
                                                 <h5 id="blink" className="text-uppercase text-green">is Hiring</h5>
                                                <ul className="text-left">
                                                    <li>Python Developer</li>
                                                    <li>Full Stack Developer</li>
                                                    <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                     <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                </ul>
                                            </div>
                                            <img className="h-w-custom" src={"assets/image/logos/logo1.png"}
                                                 alt="Logo"/>


                                        </div>
                                    </div>
                                    <div className="column brick">
                                       <div className="logo-card tooltip-custom">
                                            <div className="tooltiptext">
                                               <h6 className="text-white">Cognoscente Pvt. Ltd.</h6>
                                                 <h5 id="blink" className="text-uppercase text-green">is Hiring</h5>
                                                <ul className="text-left">
                                                    <li>Python Developer</li>
                                                    <li>Full Stack Developer</li>
                                                    <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                     <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                </ul>
                                            </div>
                                            <img className="h-w-custom" src={"assets/image/logos/pub.png"}
                                                 alt="Logo"/>


                                        </div>
                                    </div>
                                    <div className="column brick">
                                       <div className="logo-card tooltip-custom">
                                            <div className="tooltiptext">
                                              <h6 className="text-white">Cognoscente Pvt. Ltd.</h6>
                                                <h5 className="text-uppercase text-green">is Hiring</h5>
                                                <ul className="text-left">
                                                    <li>Python Developer</li>
                                                    <li>Full Stack Developer</li>
                                                    <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                </ul>
                                            </div>

                                            <img className="h-w-custom" src={"assets/image/logos/nike.png"}
                                                 alt="Logo"/>



                                        </div>
                                    </div>
                                    <div className="column brick">
                                       <div className="logo-card tooltip-custom">
                                            <div className="tooltiptext">
                                               <h6 className="text-white">Cognoscente Pvt. Ltd.</h6>
                                                 <h5 id="blink" className="text-uppercase text-green">is Hiring</h5>
                                                <ul className="text-left">
                                                    <li>Python Developer</li>
                                                    <li>Full Stack Developer</li>
                                                    <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                     <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                </ul>
                                            </div>
                                            <img className="h-w-custom" src={"assets/image/logos/it-logo.png"}
                                                 alt="Logo"/>

                                        </div>
                                    </div>
                                    <div className="column brick">
                                       <div className="logo-card tooltip-custom">
                                            <div className="tooltiptext">
                                               <h6 className="text-white">Cognoscente Pvt. Ltd.</h6>
                                                 <h5 id="blink" className="text-uppercase text-green">is Hiring</h5>
                                                <ul className="text-left">
                                                    <li>Python Developer</li>
                                                    <li>Full Stack Developer</li>
                                                    <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                     <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                </ul>
                                            </div>
                                            <img className="h-w-custom" src={"assets/image/logos/hyundai.png"}
                                                 alt="Logo"/>

                                        </div>
                                    </div>

       <div className="column brick">
                                      <div className="logo-card tooltip-custom">
                                            <div className="tooltiptext">
                                                 <h6 className="text-white">Cognoscente Pvt. Ltd.</h6>
                                                 <h5 id="blink" className="text-uppercase text-green">is Hiring</h5>
                                                <ul className="text-left">
                                                    <li>Python Developer</li>
                                                    <li>Full Stack Developer</li>
                                                    <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                     <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                </ul>
                                            </div>
                                            <img className="h-w-custom" src={"assets/image/logos/tec.png"}
                                                 alt="Logo"/>


                                        </div>
                                    </div>
                                    <div className="column brick">
                                        <div className="logo-card tooltip-custom">
                                            <div className="tooltiptext">
                                               <h6 className="text-white">Cognoscente Pvt. Ltd.</h6>
                                                <h5 id="blink" className="text-uppercase text-green">is Hiring</h5>
                                                <ul className="text-left">
                                                    <li>Python Developer</li>
                                                    <li>Full Stack Developer</li>
                                                    <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                     <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                </ul>
                                            </div>
                                            <img className="h-w-custom" src={"assets/image/logos/logo1.png"}
                                                 alt="Logo"/>


                                        </div>
                                    </div>
                                    <div className="column brick">
                                       <div className="logo-card tooltip-custom">
                                            <div className="tooltiptext">
                                               <h6 className="text-white">Cognoscente Pvt. Ltd.</h6>
                                                <h5 id="blink" className="text-uppercase text-green">is Hiring</h5>
                                                <ul className="text-left">
                                                    <li>Python Developer</li>
                                                    <li>Full Stack Developer</li>
                                                    <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                     <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                </ul>
                                            </div>
                                            <img className="h-w-custom" src={"assets/image/logos/pub.png"}
                                                 alt="Logo"/>


                                        </div>
                                    </div>
                                    <div className="column brick">
                                       <div className="logo-card tooltip-custom">
                                            <div className="tooltiptext">
                                              <h6 className="text-white">Cognoscente Pvt. Ltd.</h6>
                                                <h5 id="blink" className="text-uppercase text-green">is Hiring</h5>
                                                <ul className="text-left">
                                                    <li>Python Developer</li>
                                                    <li>Full Stack Developer</li>
                                                    <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                     <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                </ul>
                                            </div>

                                            <img className="h-w-custom" src={"assets/image/logos/nike.png"}
                                                 alt="Logo"/>



                                        </div>
                                    </div>
                                    <div className="column brick">
                                       <div className="logo-card tooltip-custom">
                                            <div className="tooltiptext">
                                               <h6 className="text-white">Cognoscente Pvt. Ltd.</h6>
                                                <h5 id="blink" className="text-uppercase text-green">is Hiring</h5>
                                                <ul className="text-left">
                                                    <li>Python Developer</li>
                                                    <li>Full Stack Developer</li>
                                                    <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                     <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                </ul>
                                            </div>
                                            <img className="h-w-custom" src={"assets/image/logos/it-logo.png"}
                                                 alt="Logo"/>

                                        </div>
                                    </div>
                                    <div className="column brick">
                                       <div className="logo-card tooltip-custom">
                                            <div className="tooltiptext">
                                               <h6 className="text-white">Cognoscente Pvt. Ltd.</h6>
                                                 <h5 id="blink" className="text-uppercase text-green">is Hiring</h5>
                                                <ul className="text-left">
                                                    <li>Python Developer</li>
                                                    <li>Full Stack Developer</li>
                                                    <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                     <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                </ul>
                                            </div>
                                            <img className="h-w-custom" src={"assets/image/logos/hyundai.png"}
                                                 alt="Logo"/>

                                        </div>
                                    </div>
       <div className="column brick">
                                      <div className="logo-card tooltip-custom">
                                            <div className="tooltiptext">
                                                 <h6 className="text-white">Cognoscente Pvt. Ltd.</h6>
                                                <h5 id="blink" className="text-uppercase text-green">is Hiring</h5>
                                                <ul className="text-left">
                                                    <li>Python Developer</li>
                                                    <li>Full Stack Developer</li>
                                                    <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                     <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                </ul>
                                            </div>
                                            <img className="h-w-custom" src={"assets/image/logos/tec.png"}
                                                 alt="Logo"/>


                                        </div>
                                    </div>
                                    <div className="column brick">
                                        <div className="logo-card tooltip-custom">
                                            <div className="tooltiptext">
                                               <h6 className="text-white">Cognoscente Pvt. Ltd.</h6>
                                                <h5 id="blink" className="text-uppercase text-green">is Hiring</h5>
                                                <ul className="text-left">
                                                    <li>Python Developer</li>
                                                    <li>Full Stack Developer</li>
                                                    <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                     <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                </ul>
                                            </div>
                                            <img className="h-w-custom" src={"assets/image/logos/logo1.png"}
                                                 alt="Logo"/>


                                        </div>
                                    </div>
                                    <div className="column brick">
                                       <div className="logo-card tooltip-custom">
                                            <div className="tooltiptext">
                                               <h6 className="text-white">Cognoscente Pvt. Ltd.</h6>
                                                 <h5 id="blink" className="text-uppercase text-green">is Hiring</h5>
                                                <ul className="text-left">
                                                    <li>Python Developer</li>
                                                    <li>Full Stack Developer</li>
                                                    <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                     <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                </ul>
                                            </div>
                                            <img className="h-w-custom" src={"assets/image/logos/pub.png"}
                                                 alt="Logo"/>


                                        </div>
                                    </div>
                                    <div className="column brick">
                                       <div className="logo-card tooltip-custom">
                                            <div className="tooltiptext">
                                              <h6 className="text-white">Cognoscente Pvt. Ltd.</h6>
                                                <h5 id="blink" className="text-uppercase text-green">is Hiring</h5>
                                                <ul className="text-left">
                                                    <li>Python Developer</li>
                                                    <li>Full Stack Developer</li>
                                                    <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                     <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                </ul>
                                            </div>

                                            <img className="h-w-custom" src={"assets/image/logos/nike.png"}
                                                 alt="Logo"/>



                                        </div>
                                    </div>
                                    <div className="column brick">
                                       <div className="logo-card tooltip-custom">
                                            <div className="tooltiptext">
                                               <h6 className="text-white">Cognoscente Pvt. Ltd.</h6>
                                                <h5 className="blink text-uppercase">is Hiring</h5>
                                                <ul className="text-left">
                                                    <li>Python Developer</li>
                                                    <li>Full Stack Developer</li>
                                                    <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                     <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                </ul>
                                            </div>
                                            <img className="h-w-custom" src={"assets/image/logos/it-logo.png"}
                                                 alt="Logo"/>

                                        </div>
                                    </div>
                                    <div className="column brick">
                                       <div className="logo-card tooltip-custom">
                                            <div className="tooltiptext">
                                               <h6 className="text-white">Cognoscente Pvt. Ltd.</h6>
                                                <h5  className="blink text-uppercase">is Hiring</h5>
                                                <ul className="text-left">
                                                    <li>Python Developer</li>
                                                    <li>Full Stack Developer</li>
                                                    <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                     <li>Frontend Developer</li>
                                                    <li>Data Analsyt</li>
                                                    <li>Graphic Designer</li>
                                                </ul>
                                            </div>
                                            <img className="h-w-custom" src={"assets/image/logos/hyundai.png"}
                                                 alt="Logo"/>

                                        </div>
                                    </div>




                        </div>
    </div>
                            </section>
                               <div className="col-12 text-center mt-8 mb-5 pt-md-11 ">
                                        <a className="text-green font-weight-bold text-uppercase font-size-5" href="/#">View
                                            all<i className="fa fa-arrow-right ml-3"/>
                                        </a>
                                    </div>

                        </div>
                    </div>
                <div className="bg-dark pt-4 pt-lg-10 pb-7 pb-lg-15">
                    <div className="container">

                        <div className="row justify-content-center">
                            <div className="col-12 col-md-8 col-lg-6 col-xxl-5">
                                <div className="text-center mt-2 px-xl-9 px-xxl-7">
                                    <h2 className="text-white font-size-9">Featured Jobs</h2>

                                </div>
                            </div>
                        </div>
                        {/*<h2>Hello</h2>*/}
                        {/*            <br/>*/}

                             <div className="featuredSection">
                        <div className="col-lg-12">
                            <div className="container">
                                <div className="row position-relative align-items-center">
                                    <div
                                        className="corners3 col-xxl-12 col-xl-12 col-lg-12 col-md-12 pt-lg-10 pb-lg-20 pb-xl-20 pb-md-20 pb-5">

                                        <div>

                                            <form action="#/" className="search-form shadow-6">
                                                <div className="filter-search-form-1 bg-white rounded-sm shadow-4">
                                                    <div className="filter-inputs">
                                                        <div className="form-group position-relative">
                                                            <select name="country" id="country"
                                                                    className="nice-select pl-13 h-100 arrow-3 font-size-4">
                                                                <option value="" data-display="Industries"
                                                                        className="text-uppercase">Industries
                                                                </option>
                                                                <option value="">IT</option>
                                                                <option value="">Business</option>
                                                                <option value="">Mechanical</option>
                                                                <option value="">Teaching</option>
                                                            </select>
                                                            <span
                                                                className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6">
                                                                <i
                                                                    className="fa fa-search text-primary font-weight-bold"/></span>
                                                        </div>

                                                        <div className="form-group position-relative">
                                                            <select name="country" id="country"
                                                                    className="nice-select pl-13 h-100 arrow-3 font-size-4">
                                                                <option value="" data-display="Location"
                                                                        className="text-uppercase">Location
                                                                </option>
                                                                <option value="">United States of America</option>
                                                                <option value="">United Arab Emirates</option>
                                                                <option value="">Bangladesh</option>
                                                                <option value="">Pakistan</option>
                                                            </select>
                                                            <span
                                                                className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6"><i
                                                                className="fa fa-map-pin text-primary font-weight-bold"/></span>
                                                        </div>

                                                    </div>

                                                    <div className="button-block">
                                                        <button
                                                            className="btn btn-success line-height-reset h-100 btn-submit w-100 text-uppercase">Search
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>


                                        </div>
                                    </div>



                                </div>
                                   <ul id="myTabs" className="nav nav-pills nav-justified set-w" role="tablist" data-tabs="tabs">
                              <li className="tab-menu-items  nav-item" role="presentation">
                        <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#jobs"
                           role="tab" aria-controls="pills-home" aria-selected="true">Jobs Posted</a>
                    </li>
                              <li className="tab-menu-items  nav-item ml-3" role="presentation">
                        <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#jobs"
                           role="tab" aria-controls="pills-home" aria-selected="true">Internships</a>
                    </li>
                        </ul>
                            </div>
                        </div>
                    </div>


                        <div className="row justify-content-center" data-aos="fade-up" data-aos-duration="800"
                             data-aos-once="true">
                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-11 mb-9">

                                <div
                                    className="pt-5 px-xl-5 px-lg-3 px-3 pb-7 light-mode-texts bg-white rounded hover-shadow-3">

                                    <div className="media align-items-center">


                                            <a href="/#"><img src="assets/image/logos/audi.png" alt="" className="h-w-custom-2 mr-4"/></a>


                                        <div>
                                            <a href="/#"
                                               className="font-size-3 text-default-color line-height-2">Leaf.co</a>
                                            <span className="font-size-2 ml-25"><b>Posted on : Oct 21, 2021</b></span>
                                            <h3 className="font-size-6 mb-0"><a
                                                className="heading-default-color font-weight-semibold" href="/#">Full-Stack
                                                Developer</a></h3>

                                        </div>

                                    </div>
                                    <div className="d-flex pt-7">

                                        <ul className="list-unstyled mb-5 card-tag-list d-flex flex-wrap mr-2">
                                            <li><a href="/#"
                                                   className="bg-regent-opacity-15 text-denim font-size-3 rounded-3 mr-7 flex-all-center px-3">
                                                <i className="fa fa-clock mr-2 font-weight-bold"/> 2-3 years
                                            </a></li>
                                            <li><a href="/#"
                                                   className="bg-regent-opacity-15 text-orange-2 font-size-3 rounded-3  mr-7 flex-all-center px-3">
                                                <i className="fa fa-briefcase mr-2 font-weight-bold"></i> Full-time
                                            </a></li>
                                            <li><a href="/#"
                                                   className="bg-regent-opacity-15 text-denim font-size-3 rounded-3  mr-7 flex-all-center px-3 ">
                                                <i className="fa fa-dollar-sign mr-2 font-weight-bold"></i> 5000-10000
                                            </a></li>
                                        </ul>

                                    </div>
                                  <p className="font-size-3 ">We are looking for a senior python developer with good knowledge of django and flask...</p>
                                     <div className="d-flex">

                                        <ul className="list-unstyled mb-5 card-tag-list d-flex flex-wrap mr-2">
                                            <li><a href="/#"
                                                   className="bg-regent-opacity-15 text-green font-size-3 rounded-3 mr-10 flex-all-center px-3">
                                                <i className="fa fa-tasks mr-2 font-weight-bold"/>
                                                Python, Django, Flask, JS, CSS, HTML, React
                                            </a></li>
                                              <li><a href="/#"
                                                   className="bg-regent-opacity-15 text-red font-size-3 rounded-3 mt-2 flex-all-center px-3">
                                                <i className="fa fa-map-marker-alt
                                                 mr-2 font-weight-bold"/>
                                                Jalandhar, Chandigarh, Ludhiana, Firozpur
                                            </a></li>

                                        </ul>
                                    </div>
                                    <div className="card-btn-group">
                                        <a className="btn btn-green text-uppercase btn-medium rounded-3 mr-3" href="/#">Apply
                                            Now</a>
                                        <a className="btn  btn-black-2 text-white  text-uppercase btn-medium rounded-3 mr-7"
                                           href="/#"> View Details</a>
                                        <a href="/#"
                                           className="bookmark-button toggle-item  ml-auto line-height-reset px-0  text-default-color mr-7">
                                        </a>
                                        <a href="/#"
                                           className="share-button toggle-item  ml-auto line-height-reset px-0  text-default-color  clicked">
                                        </a>
                                    </div>


                                </div>

                            </div>
                             <div className="col-xl-4 col-lg-6 col-md-6 col-sm-11 mb-9">

                                <div
                                    className="pt-5 px-xl-5 px-lg-3 px-3 pb-7 light-mode-texts bg-white rounded hover-shadow-3">

                                    <div className="media align-items-center">


                                            <a href="/#"><img src="assets/image/logos/adidas.jpg" alt="" className="h-w-custom-2 mr-4"/></a>


                                        <div>
                                            <a href="/#"
                                               className="font-size-3 text-default-color line-height-2">Leaf.co</a>
                                            <span className="font-size-2 ml-25"><b>Posted on : Oct 21, 2021</b></span>
                                            <h3 className="font-size-6 mb-0"><a
                                                className="heading-default-color font-weight-semibold" href="/#">Full-Stack
                                                Developer</a></h3>

                                        </div>

                                    </div>
                                    <div className="d-flex pt-7">

                                        <ul className="list-unstyled mb-5 card-tag-list d-flex flex-wrap mr-2">
                                            <li><a href="/#"
                                                   className="bg-regent-opacity-15 text-denim font-size-3 rounded-3 mr-7 flex-all-center px-3">
                                                <i className="fa fa-clock mr-2 font-weight-bold"/> 2-3 years
                                            </a></li>
                                            <li><a href="/#"
                                                   className="bg-regent-opacity-15 text-orange-2 font-size-3 rounded-3  mr-7 flex-all-center px-3">
                                                <i className="fa fa-briefcase mr-2 font-weight-bold"></i> Full-time
                                            </a></li>
                                            <li><a href="/#"
                                                   className="bg-regent-opacity-15 text-denim font-size-3 rounded-3  mr-7 flex-all-center px-3 ">
                                                <i className="fa fa-dollar-sign mr-2 font-weight-bold"></i> 80K-90K
                                            </a></li>
                                        </ul>

                                    </div>
                                  <p className="font-size-3 ">We are looking for a senior python developer with good knowledge of django and flask...</p>
                                     <div className="d-flex">

                                        <ul className="list-unstyled mb-5 card-tag-list d-flex flex-wrap mr-2">
                                            <li><a href="/#"
                                                   className="bg-regent-opacity-15 text-green font-size-3 rounded-3 mr-10 flex-all-center px-3">
                                                <i className="fa fa-tasks mr-2 font-weight-bold"/>
                                                Python, Django, Flask, JS, CSS, HTML, React
                                            </a></li>
                                              <li><a href="/#"
                                                   className="bg-regent-opacity-15 text-red font-size-3 rounded-3 mt-2 flex-all-center px-3">
                                                <i className="fa fa-map-marker-alt
                                                 mr-2 font-weight-bold"/>
                                                Jalandhar, Chandigarh, Ludhiana, Firozpur
                                            </a></li>

                                        </ul>
                                    </div>
                                    <div className="card-btn-group">
                                        <a className="btn btn-green text-uppercase btn-medium rounded-3 mr-3" href="/#">Apply
                                            Now</a>
                                        <a className="btn  btn-black-2 text-white text-uppercase btn-medium rounded-3 mr-7"
                                           href="/#"> View Details</a>
                                        <a href="/#"
                                           className="bookmark-button toggle-item  ml-auto line-height-reset px-0  text-default-color mr-7">
                                        </a>
                                        <a href="/#"
                                           className="share-button toggle-item  ml-auto line-height-reset px-0  text-default-color  clicked">
                                        </a>
                                    </div>


                                </div>

                            </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-11 mb-9">

                                <div
                                    className="pt-5 px-xl-5 px-lg-3 px-3 pb-7 light-mode-texts bg-white rounded hover-shadow-3">

                                    <div className="media align-items-center">


                                            <a href="/#"><img src="assets/image/logos/lays.png" alt="" className="h-w-custom-2 mr-4"/></a>


                                        <div>
                                            <a href="/#"
                                               className="font-size-3 text-default-color line-height-2">Leaf.co</a>
                                            <span className="font-size-2 ml-25"><b>Posted on : Oct 21, 2021</b></span>
                                            <h3 className="font-size-6 mb-0"><a
                                                className="heading-default-color font-weight-semibold" href="/#">Full-Stack
                                                Developer</a></h3>

                                        </div>

                                    </div>
                                    <div className="d-flex pt-7">

                                        <ul className="list-unstyled mb-5 card-tag-list d-flex flex-wrap mr-2">
                                            <li><a href="/#"
                                                   className="bg-regent-opacity-15 text-denim font-size-3 rounded-3 mr-7 flex-all-center px-3">
                                                <i className="fa fa-clock mr-2 font-weight-bold"/> 2-3 years
                                            </a></li>
                                            <li><a href="/#"
                                                   className="bg-regent-opacity-15 text-orange-2 font-size-3 rounded-3  mr-7 flex-all-center px-3">
                                                <i className="fa fa-briefcase mr-2 font-weight-bold"></i> Full-time
                                            </a></li>
                                            <li><a href="/#"
                                                   className="bg-regent-opacity-15 text-denim font-size-3 rounded-3  mr-7 flex-all-center px-3 ">
                                                <i className="fa fa-dollar-sign mr-2 font-weight-bold"></i> 80K-90K
                                            </a></li>
                                        </ul>

                                    </div>
                                  <p className="font-size-3 ">We are looking for a senior python developer with good knowledge of django and flask...</p>
                                     <div className="d-flex">

                                        <ul className="list-unstyled mb-5 card-tag-list d-flex flex-wrap mr-2">
                                            <li><a href="/#"
                                                   className="bg-regent-opacity-15 text-green font-size-3 rounded-3 mr-10 flex-all-center px-3">
                                                <i className="fa fa-tasks mr-2 font-weight-bold"/>
                                                Python, Django, Flask, JS, CSS, HTML, React
                                            </a></li>
                                              <li><a href="/#"
                                                   className="bg-regent-opacity-15 text-red font-size-3 rounded-3 mt-2 flex-all-center px-3">
                                                <i className="fa fa-map-marker-alt
                                                 mr-2 font-weight-bold"/>
                                                Jalandhar, Chandigarh, Ludhiana, Firozpur
                                            </a></li>

                                        </ul>
                                    </div>
                                    <div className="card-btn-group">
                                        <a className="btn btn-green text-uppercase btn-medium rounded-3 mr-3" href="/#">Apply
                                            Now</a>
                                        <a className="btn  btn-black-2 text-white  text-uppercase btn-medium rounded-3 mr-7"
                                           href="/#"> View Details</a>
                                        <a href="/#"
                                           className="bookmark-button toggle-item  ml-auto line-height-reset px-0  text-default-color mr-7">
                                        </a>
                                        <a href="/#"
                                           className="share-button toggle-item  ml-auto line-height-reset px-0  text-default-color  clicked">
                                        </a>
                                    </div>


                                </div>

                            </div>
                                 <div className="col-xl-4 col-lg-6 col-md-6 col-sm-11 mb-9">

                                <div
                                    className="pt-5 px-xl-5 px-lg-3 px-3 pb-7 light-mode-texts bg-white rounded hover-shadow-3">

                                    <div className="media align-items-center">


                                            <a href="/#"><img src="assets/image/logos/apple.png" alt="" className="h-w-custom-2 mr-4"/></a>


                                        <div>
                                            <a href="/#"
                                               className="font-size-3 text-default-color line-height-2">Leaf.co</a>
                                            <span className="font-size-2 ml-25"><b>Posted on : Oct 21, 2021</b></span>
                                            <h3 className="font-size-6 mb-0"><a
                                                className="heading-default-color font-weight-semibold" href="/#">Full-Stack
                                                Developer</a></h3>

                                        </div>

                                    </div>
                                    <div className="d-flex pt-7">

                                        <ul className="list-unstyled mb-5 card-tag-list d-flex flex-wrap mr-2">
                                            <li><a href="/#"
                                                   className="bg-regent-opacity-15 text-denim font-size-3 rounded-3 mr-7 flex-all-center px-3">
                                                <i className="fa fa-clock mr-2 font-weight-bold"/> 2-3 years
                                            </a></li>
                                            <li><a href="/#"
                                                   className="bg-regent-opacity-15 text-orange-2 font-size-3 rounded-3  mr-7 flex-all-center px-3">
                                                <i className="fa fa-briefcase mr-2 font-weight-bold"></i> Full-time
                                            </a></li>
                                            <li><a href="/#"
                                                   className="bg-regent-opacity-15 text-denim font-size-3 rounded-3  mr-7 flex-all-center px-3 ">
                                                <i className="fa fa-dollar-sign mr-2 font-weight-bold"></i> 80K-90K
                                            </a></li>
                                        </ul>

                                    </div>
                                  <p className="font-size-3 ">We are looking for a senior python developer with good knowledge of django and flask...</p>
                                     <div className="d-flex">

                                        <ul className="list-unstyled mb-5 card-tag-list d-flex flex-wrap mr-2">
                                            <li><a href="/#"
                                                   className="bg-regent-opacity-15 text-green font-size-3 rounded-3 mr-10 flex-all-center px-3">
                                                <i className="fa fa-tasks mr-2 font-weight-bold"/>
                                                Python, Django, Flask, JS, CSS, HTML, React
                                            </a></li>
                                              <li><a href="/#"
                                                   className="bg-regent-opacity-15 text-red font-size-3 rounded-3 mt-2 flex-all-center px-3">
                                                <i className="fa fa-map-marker-alt
                                                 mr-2 font-weight-bold"/>
                                                Jalandhar, Chandigarh, Ludhiana, Firozpur
                                            </a></li>

                                        </ul>
                                    </div>
                                    <div className="card-btn-group">
                                        <a className="btn btn-green text-uppercase btn-medium rounded-3 mr-3" href="/#">Apply
                                            Now</a>
                                        <a className="btn  btn-black-2 text-white  text-uppercase btn-medium rounded-3 mr-7"
                                           href="/#">View Details</a>
                                        <a href="/#"
                                           className="bookmark-button toggle-item  ml-auto line-height-reset px-0  text-default-color mr-7">
                                        </a>
                                        <a href="/#"
                                           className="share-button toggle-item  ml-auto line-height-reset px-0  text-default-color  clicked">
                                        </a>
                                    </div>


                                </div>

                            </div>
                                 <div className="col-xl-4 col-lg-6 col-md-6 col-sm-11 mb-9">

                                <div
                                    className="pt-5 px-xl-5 px-lg-3 px-3 pb-7 light-mode-texts bg-white rounded hover-shadow-3">

                                    <div className="media align-items-center">


                                            <a href="/#"><img src="assets/image/logos/google.png" alt="" className="h-w-custom-2 mr-4"/></a>


                                        <div>
                                            <a href="/#"
                                               className="font-size-3 text-default-color line-height-2">Leaf.co</a>
                                            <span className="font-size-2 ml-25"><b>Posted on : Oct 21, 2021</b></span>
                                            <h3 className="font-size-6 mb-0"><a
                                                className="heading-default-color font-weight-semibold" href="/#">Full-Stack
                                                Developer</a></h3>

                                        </div>

                                    </div>
                                    <div className="d-flex pt-7">

                                        <ul className="list-unstyled mb-5 card-tag-list d-flex flex-wrap mr-2">
                                            <li><a href="/#"
                                                   className="bg-regent-opacity-15 text-denim font-size-3 rounded-3 mr-7 flex-all-center px-3">
                                                <i className="fa fa-clock mr-2 font-weight-bold"/> 2-3 years
                                            </a></li>
                                            <li><a href="/#"
                                                   className="bg-regent-opacity-15 text-orange-2 font-size-3 rounded-3  mr-7 flex-all-center px-3">
                                                <i className="fa fa-briefcase mr-2 font-weight-bold"></i> Full-time
                                            </a></li>
                                            <li><a href="/#"
                                                   className="bg-regent-opacity-15 text-denim font-size-3 rounded-3  mr-7 flex-all-center px-3 ">
                                                <i className="fa fa-dollar-sign mr-2 font-weight-bold"></i> 80K-90K
                                            </a></li>
                                        </ul>

                                    </div>
                                  <p className="font-size-3 ">We are looking for a senior python developer with good knowledge of django and flask...</p>
                                     <div className="d-flex">

                                        <ul className="list-unstyled mb-5 card-tag-list d-flex flex-wrap mr-2">
                                            <li><a href="/#"
                                                   className="bg-regent-opacity-15 text-green font-size-3 rounded-3 mr-10 flex-all-center px-3">
                                                <i className="fa fa-tasks mr-2 font-weight-bold"/>
                                                Python, Django, Flask, JS, CSS, HTML, React
                                            </a></li>
                                              <li><a href="/#"
                                                   className="bg-regent-opacity-15 text-red font-size-3 rounded-3 mt-2 flex-all-center px-3">
                                                <i className="fa fa-map-marker-alt
                                                 mr-2 font-weight-bold"/>
                                                Jalandhar, Chandigarh, Ludhiana, Firozpur
                                            </a></li>

                                        </ul>
                                    </div>
                                    <div className="card-btn-group">
                                        <a className="btn btn-green text-uppercase btn-medium rounded-3 mr-3" href="/#">Apply
                                            Now</a>
                                        <a className="btn  btn-black-2 text-white  text-uppercase btn-medium rounded-3 mr-7"
                                           href="/#"> View Details</a>
                                        <a href="/#"
                                           className="bookmark-button toggle-item  ml-auto line-height-reset px-0  text-default-color mr-7">
                                        </a>
                                        <a href="/#"
                                           className="share-button toggle-item  ml-auto line-height-reset px-0  text-default-color  clicked">
                                        </a>
                                    </div>


                                </div>

                            </div>
                                 <div className="col-xl-4 col-lg-6 col-md-6 col-sm-11 mb-9">

                                <div
                                    className="pt-5 px-xl-5 px-lg-3 px-3 pb-7 light-mode-texts bg-white rounded hover-shadow-3">

                                    <div className="media align-items-center">


                                            <a href="/#"><img src="assets/image/logos/channel.png" alt="" className="h-w-custom-2 mr-4"/></a>


                                        <div>
                                            <a href="/#"
                                               className="font-size-3 text-default-color line-height-2">Leaf.co</a>
                                            <span className="font-size-2 ml-25"><b>Posted on : Oct 21, 2021</b></span>
                                            <h3 className="font-size-6 mb-0"><a
                                                className="heading-default-color font-weight-semibold" href="/#">Full-Stack
                                                Developer</a></h3>

                                        </div>

                                    </div>
                                    <div className="d-flex pt-7">

                                        <ul className="list-unstyled mb-5 card-tag-list d-flex flex-wrap mr-2">
                                            <li><a href="/#"
                                                   className="bg-regent-opacity-15 text-denim font-size-3 rounded-3 mr-7 flex-all-center px-3">
                                                <i className="fa fa-clock mr-2 font-weight-bold"/> 2-3 years
                                            </a></li>
                                            <li><a href="/#"
                                                   className="bg-regent-opacity-15 text-orange-2 font-size-3 rounded-3  mr-7 flex-all-center px-3">
                                                <i className="fa fa-briefcase mr-2 font-weight-bold"></i> Full-time
                                            </a></li>
                                            <li><a href="/#"
                                                   className="bg-regent-opacity-15 text-denim font-size-3 rounded-3  mr-7 flex-all-center px-3 ">
                                                <i className="fa fa-dollar-sign mr-2 font-weight-bold"></i> 80K-90K
                                            </a></li>
                                        </ul>

                                    </div>
                                  <p className="font-size-3 ">We are looking for a senior python developer with good knowledge of django and flask...</p>
                                     <div className="d-flex">

                                        <ul className="list-unstyled mb-5 card-tag-list d-flex flex-wrap mr-2">
                                            <li><a href="/#"
                                                   className="bg-regent-opacity-15 text-green font-size-3 rounded-3 mr-10 flex-all-center px-3">
                                                <i className="fa fa-tasks mr-2 font-weight-bold"/>
                                                Python, Django, Flask, JS, CSS, HTML, React
                                            </a></li>
                                              <li><a href="/#"
                                                   className="bg-regent-opacity-15 text-red font-size-3 rounded-3 mt-2 flex-all-center px-3">
                                                <i className="fa fa-map-marker-alt
                                                 mr-2 font-weight-bold"/>
                                                Jalandhar, Chandigarh, Ludhiana, Firozpur
                                            </a></li>

                                        </ul>
                                    </div>
                                    <div className="card-btn-group">
                                        <a className="btn btn-green text-uppercase btn-medium rounded-3 mr-3" href="/#">Apply
                                            Now</a>
                                        <a className="btn btn-black-2 text-white text-uppercase btn-medium rounded-3 mr-7"
                                           href="/#"> View Details</a>
                                        <a href="/#"
                                           className="bookmark-button toggle-item  ml-auto line-height-reset px-0  text-default-color mr-7">
                                        </a>
                                        <a href="/#"
                                           className="share-button toggle-item  ml-auto line-height-reset px-0  text-default-color  clicked">
                                        </a>
                                    </div>


                                </div>

                            </div>

                        </div>
                        <div className="row">
                            <div className="col-12 text-center pt-md-11 ">
                                <a className="text-green font-weight-bold text-uppercase font-size-3" href="/#">See 1,294
                                    more jobs <i className="fas fa-arrow-right ml-3"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        );
    }
}

export default Home;