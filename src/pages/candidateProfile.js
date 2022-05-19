import React, {Component} from 'react';

class candidateProfile extends Component {


    render() {
        return (

            <div className="site-wrapper overflow-hidden ">
                <header
                    className="site-header site-header--menu-right dynamic-sticky-bg py-7 py-lg-0 site-header--absolute site-header--sticky">
                    <div className="container">
                        <nav className="scroll navbar site-navbar offcanvas-active navbar-expand-lg  py-0">


                            <div className="brand-logo">
                                <a href="/#">

                                    <h2 className={"text-white"}>PEPOFFICE</h2>
                                </a>
                            </div>


                            <div className="collapse navbar-collapse" id="mobile-menu">
                                <div className="navbar-nav-wrapper">
                                    <ul className="navbar-nav main-menu">
                                        <li className="nav-item dropdown active">
                                            <a className="nav-header-link dropdown-toggle gr-toggle-arrow"
                                               id="navbarDropdown"
                                               href="/#" role="button" data-toggle="dropdown"
                                               aria-haspopup="true" aria-expanded="false">Home </a>

                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-header-link dropdown-toggle gr-toggle-arrow"
                                               id="navbarDropdown"
                                               href="/#" role="button" data-toggle="dropdown"
                                               aria-haspopup="true" aria-expanded="false">About </a>

                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-header-link dropdown-toggle gr-toggle-arrow"
                                               id="navbarDropdown"
                                               href="/#" role="button" data-toggle="dropdown"
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
                                   href="/#" data-toggle="modal" data-target="#login">
                                    Log in
                                </a>
                                <a className="btn btn-green text-uppercase font-size-3" href="/#"
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
                <div className="bg-default-2 pt-22 pt-lg-25 pb-7 pb-lg-23">
                    <div
                        className="container">

                        {/*start*/}
                        <div className="row">

                            <div className="col-12 col-xxl-4 col-lg-4 col-md-5 mb-11 mb-lg-0">
                                <div className="pl-lg-5">

                                    <div className="bg-dark shadow-9 rounded-4">
                                        <div className="px-1 py-4 text-center border-bottom bor border-mercury">
                                            <a className="mb-4" href="#/"><img className="h-w-custom-3"
                                                                               src="assets/image/user1.jpg" alt=""/></a>
                                            <h4 className="mb-2"><a
                                                className="text-white font-size-5 font-weight-semibold" href="#/">David
                                                Henricks</a></h4>

                                            <div
                                                className="icon-link d-flex align-items-center justify-content-center flex-wrap ">
                                                <button className="btn btn-primary mr-5"><i className="fab fa-linkedin-in mr-2"/>Linkedin</button>
                                                <button className="btn btn-primary"><i className="fa fa-download mr-2"/>Download Resume</button>
                                            </div>
                                        </div>

                                        <div className="px-9 pt-lg-3 pt-7 pt-xl-7 pb-5">
                                             <div className="mb-5">
                                                <p className="font-size-4 text-green font-weight-bold mb-0"><i
                                                    className="fa fa-envelope mr-4"/>E-mail</p>
                                                <h5 className="font-size-4 font-weight-semibold mb-0 ml-8"><a
                                                    className="text-white text-break"
                                                    href="mailto:name_ac@gmail.com">name_ac@gmail.com</a></h5>
                                            </div>

                                             <div className="mb-5">
                                                <p className="font-size-4 font-weight-bold text-green mb-0"><i
                                                    className="fa fa-clock mr-4"/>Total experience</p>
                                                <h5 className="font-size-4 ml-8 font-weight-semibold mb-0 text-white text-break">
                                                    0 years 6 months</h5>
                                            </div>

                                             <div className="mb-5">
                                                <p className="font-size-4 mb-0 font-weight-bold text-green"><i
                                                    className="fa fa-briefcase mr-4"/>Current Profile</p>
                                                <h5 className="font-size-4 font-weight-semibold mb-0 text-white text-break ml-8">Python
                                                    Developer</h5>
                                            </div>

                                            <div className="mb-5">
                                                <p className="font-size-4 mb-0 font-weight-bold text-green"><i
                                                    className="fa fa-building mr-4"/>Industry</p>
                                                <h5 className="font-size-4 font-weight-semibold mb-0 text-white text-break ml-8">IT</h5>
                                            </div>


                                              <div className="mb-5">
                                                <p className="font-size-4 mb-0 font-weight-bold text-green"><i
                                                    className="fa fa-money-check-alt mr-4"/>Current Salary</p>
                                                <h5 className="ml-8 font-size-4 font-weight-semibold mb-0 text-white text-break">15k</h5>
                                            </div>


                                             <div className="mb-5">
                                                <p className="font-size-4 mb-0 font-weight-bold text-green"><i
                                                    className="fa fa-birthday-cake mr-4"/>Date of Birth</p>
                                                <h5 className="ml-8 font-size-4 font-weight-semibold mb-0 text-white text-break">17-08-1995</h5>
                                            </div>


                                              <div className="mb-5">
                                                <p className="font-size-4 text-green font-weight-bold mb-0"><i
                                                    className="fa fa-phone mr-4"/>Phone</p>
                                                <h5 className="font-size-4 ml-8 font-weight-semibold mb-0"><a
                                                    className="text-white text-break" href="tel:+999565562">+999 565
                                                    562</a></h5>
                                            </div>


                                              <div className="mb-5">
                                                <p className="font-size-4 text-green font-weight-bold mb-0"><i
                                                    className="fa fa-phone-alt mr-4"/>Additional Phone</p>
                                                <h5 className="font-size-4 ml-8 font-weight-semibold mb-0"><a
                                                    className="text-white text-break" href="tel:+999565562">+999 565
                                                    562</a></h5>
                                            </div>


                                            <div className="mb-5">
                                                <p className="font-size-4 text-green font-weight-bold mb-0"><i
                                                    className="fa fa-laptop mr-4"/>Job Type</p>
                                                <h5 className="font-size-4 ml-8 font-weight-semibold mb-0"><a
                                                    className="text-white text-break">Full-time</a></h5>
                                            </div>


                                            <div className="mb-5">
                                                <p className="font-size-4 mb-0 font-weight-bold text-green"><i
                                                    className="fa fa-map-pin mr-4"/>Preffered Location</p>
                                                <h5 className="font-size-4 ml-8 font-weight-semibold mb-0 text-white text-break">London/
                                                    Canada/ India</h5>
                                            </div>

                                            <div className="mb-5">

                                                <p className="font-size-4 font-weight-bold text-green mb-0"><i
                                                    className="fa fa-map-marker-alt mr-4"/>Current Location</p>
                                                <h5 className="font-size-4 font-weight-semibold mb-0 text-white text-break ml-8">New
                                                    York
                                                </h5>
                                            </div>



                                              <div className="mb-5">

                                                <p className="font-size-4 font-weight-bold text-green mb-0"><i
                                                    className="fa fa-home mr-4"/>Current Organization</p>
                                                <h5 className="font-size-4 font-weight-semibold mb-0 text-white text-break ml-8">Google Inc
                                                </h5>
                                            </div>


                                            <div className="mb-5">
                                                <p className="font-size-4 mb-0 text-green font-weight-bold"><i
                                                    className="fa fa-user-graduate mr-4"/>Highest Qualification</p>
                                                <h5 className="font-size-4 font-weight-semibold mb-0 text-white text-break ml-8">BE</h5>
                                            </div>


                                            <div className="mb-5">
                                                <p className="font-size-4 mb-0 font-weight-bold text-green"><i
                                                    className="fa fa-question mr-4"/>Notice Period</p>
                                                <h5 className="ml-8 font-size-4 font-weight-semibold mb-0 text-white text-break">15 days</h5>
                                            </div>




                                        </div>

                                    </div>
                                </div>
                            </div>


                            <div className="col-12 col-xl-8 col-lg-8">
                                <div className="bg-white rounded-4 shadow-9">

                                    <ul className="nav border-bottom border-mercury pl-12" id="myTab" role="tablist">
                                        <li className="tab-menu-items nav-item pr-12">
                                            <a className="active text-uppercase font-size-3 font-weight-bold text-default-color py-3"
                                               id="home-tab" data-toggle="tab" href="#overview" role="tab"
                                               aria-controls="home" aria-selected="true">Overview</a>
                                        </li>
                                        <li className="tab-menu-items nav-item pr-12">
                                            <a className="text-uppercase font-size-3 font-weight-bold text-default-color py-3"
                                               id="applied-job-tab" data-toggle="tab" href="#appliedJobs" role="tab"
                                               aria-controls="appliedJobs" aria-selected="false">Applied Jobs</a>
                                        </li>
                                        <li className="tab-menu-items nav-item pr-12">
                                            <a className="text-uppercase font-size-3 font-weight-bold text-default-color py-3"
                                               id="saved-job-tab" data-toggle="tab" href="#savedJobs" role="tab"
                                               aria-controls="savedJobs" aria-selected="false">Saved Jobs</a>
                                        </li>

                                         <a className="text-uppercase font-size-3 font-weight-bold text-white py-3" href="/editProfile">
                                             <button className="btn btn-primary ml-35 btn-medium">Edit Profile</button></a>
                                    </ul>

                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active" id="overview" role="tabpanel"
                                             aria-labelledby="home-tab">

                                            <div className="pr-xl-0 pr-xxl-14 p-5 px-xs-12 pt-7 pb-5">

                                                <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                                                    <i className="fa fa-user mr-5"/>About</h4>
                                                <p className="font-size-4 mb-8">A talented professional with an academic
                                                    background in IT and proven
                                                    commercial development experience as C++ developer since 1999. Has a
                                                    sound knowledge of the software
                                                    development life cycle. Was involved in more than 140 software
                                                    development outsourcing projects.</p>
                                                <p className="font-size-4 mb-8">Programming Languages: C/C++, .NET C++,
                                                    Python, Bash, Shell, PERL, Regular
                                                    expressions, Python, Active-script.</p>
                                            </div>

                                            <div className="border-top pr-xl-0 pr-xxl-14 p-5 pl-xs-12 pt-7 pb-5">
                                                <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                                                    <i className="fa fa-tasks mr-5"/>Skills</h4>
                                                <ul className="list-unstyled d-flex align-items-center flex-wrap">
                                                    <li>
                                                        <a className="bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center"
                                                           href="#/">Agile</a>
                                                    </li>
                                                    <li>
                                                        <a className="bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center"
                                                           href="#/">Wireframing</a>
                                                    </li>
                                                    <li>
                                                        <a className="bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center"
                                                           href="#/">Prototyping</a>
                                                    </li>
                                                    <li>
                                                        <a className="bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center"
                                                           href="#/">Information</a>
                                                    </li>
                                                    <li>
                                                        <a className="bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center"
                                                           href="#/">Waterfall Model</a>
                                                    </li>
                                                    <li>
                                                        <a className="bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center"
                                                           href="#/">New Layout</a>
                                                    </li>

                                                </ul>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6">

                                                    <div className="border-top p-5 pl-xs-12 pt-7 pb-5">
                                                        <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                                                            <i className="fa fa-briefcase mr-5"/>Work
                                                            Exprerience</h4>

                                                        <div className="w-100">
                                                            <div
                                                                className="d-flex align-items-center pr-11 mb-9 flex-wrap flex-sm-nowrap">

                                                                <div className="w-100 mt-n2">
                                                                    <h3 className="mb-0">
                                                                        <a className="font-size-6 text-black-2 font-weight-semibold"
                                                                           href="#/">Lead Product Designer</a>
                                                                    </h3>
                                                                    <a href="#/"
                                                                       className="font-size-4 text-default-color line-height-2">Airabnb</a>
                                                                    <div
                                                                        className="d-flex align-items-center justify-content-md-between flex-wrap">
                                                                        <a href="#/"
                                                                           className="font-size-4 text-gray mr-5">Jun
                                                                            2017 - April 2020- 3 years</a>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="w-100">
                                                            <div
                                                                className="d-flex align-items-center pr-11 mb-9 flex-wrap flex-sm-nowrap">

                                                                <div className="w-100 mt-n2">
                                                                    <h3 className="mb-0">
                                                                        <a className="font-size-6 text-black-2 font-weight-semibold"
                                                                           href="#/">Senior UI/UX Designer</a>
                                                                    </h3>
                                                                    <a href="#/"
                                                                       className="font-size-4 text-default-color line-height-2">Google
                                                                        Inc</a>
                                                                    <div
                                                                        className="d-flex align-items-center justify-content-md-between flex-wrap">
                                                                        <a href="#/"
                                                                           className="font-size-4 text-gray mr-5">Jun
                                                                            2017 - April 2020- 3 years</a>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="border-top p-5 pl-xs-12 pt-7 pb-5">
                                                        <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                                                            <i className="fa fa-user-graduate mr-5"/>Education</h4>

                                                        <div className="w-100">
                                                            <div
                                                                className="d-flex align-items-center pr-11 mb-9 flex-wrap flex-sm-nowrap">

                                                                <div className="w-100 mt-n2">
                                                                    <h3 className="mb-0">
                                                                        <a className="font-size-6 text-black-2 font-weight-semibold"
                                                                           href="#/">Masters
                                                                            in Art Design</a>
                                                                    </h3>
                                                                    <a href="#/"
                                                                       className="font-size-4 text-default-color line-height-2">Harvard
                                                                        University</a>
                                                                    <div
                                                                        className="d-flex align-items-center justify-content-md-between flex-wrap">
                                                                        <a href="#/"
                                                                           className="font-size-4 text-gray mr-5">Jun
                                                                            2017 - April 2020- 3 years</a>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="w-100">
                                                            <div
                                                                className="d-flex align-items-center pr-11 mb-9 flex-wrap flex-sm-nowrap">

                                                                <div className="w-100 mt-n2">
                                                                    <h3 className="mb-0">
                                                                        <a className="font-size-6 text-black-2 font-weight-semibold"
                                                                           href="#/">Bachelor
                                                                            in Software Engineering </a>
                                                                    </h3>
                                                                    <a href="#/"
                                                                       className="font-size-4 text-default-color line-height-2">Manipal
                                                                        Institute of Technology</a>
                                                                    <div
                                                                        className="d-flex align-items-center justify-content-md-between flex-wrap">
                                                                        <a href="#/"
                                                                           className="font-size-4 text-gray mr-5">Fed
                                                                            2012 - April 2016 - 4 years</a>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="appliedJobs" role="tabpanel"
                                             aria-labelledby="applied-job-tab">

                                            <div className="bg-light pt-7 pt-lg-15 pb-7 pb-lg-15">
                                                <div className="container">


                                                    <div className="row justify-content-center" data-aos="fade-up"
                                                         data-aos-duration="800"
                                                         data-aos-once="true">
                                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-11 mb-9">

                                                            <div
                                                                className="pt-5 px-xl-5 px-lg-3 px-3 pb-7 light-mode-texts bg-white rounded hover-shadow-3">

                                                                <div className="media align-items-center">


                                                                    <a href="/#"><img src="assets/image/logos/audi.png"
                                                                                      alt=""
                                                                                      className="h-w-custom-2 mr-4"/></a>


                                                                    <div>
                                                                        <a href="/#"
                                                                           className="font-size-3 text-default-color line-height-2">Leaf.co</a>
                                                                        <span className="font-size-2 ml-25"><b>Posted on : Oct 21, 2021</b></span>
                                                                        <h3 className="font-size-6 mb-0"><a
                                                                            className="heading-default-color font-weight-semibold"
                                                                            href="/#">Full-Stack
                                                                            Developer</a></h3>

                                                                    </div>

                                                                </div>
                                                                <div className="d-flex pt-7">

                                                                    <ul className="list-unstyled mb-5 card-tag-list d-flex flex-wrap mr-2">
                                                                        <li><a href="/#"
                                                                               className="bg-regent-opacity-15 text-denim font-size-3 rounded-3 mr-7 flex-all-center px-3">
                                                                            <i className="fa fa-clock mr-2 font-weight-bold"/> 2-3
                                                                            years
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
                                                                <p className="font-size-3 ">We are looking for a senior
                                                                    python developer with good knowledge of django and
                                                                    flask...</p>
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
                                                                    <a className="btn btn-green text-uppercase btn-medium rounded-3 mr-3"
                                                                       href="/#">Apply
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
                                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-11 mb-9">

                                                            <div
                                                                className="pt-5 px-xl-5 px-lg-3 px-3 pb-7 light-mode-texts bg-white rounded hover-shadow-3">

                                                                <div className="media align-items-center">


                                                                    <a href="/#"><img
                                                                        src="assets/image/logos/adidas.jpg" alt=""
                                                                        className="h-w-custom-2 mr-4"/></a>


                                                                    <div>
                                                                        <a href="/#"
                                                                           className="font-size-3 text-default-color line-height-2">Leaf.co</a>
                                                                        <span className="font-size-2 ml-25"><b>Posted on : Oct 21, 2021</b></span>
                                                                        <h3 className="font-size-6 mb-0"><a
                                                                            className="heading-default-color font-weight-semibold"
                                                                            href="/#">Full-Stack
                                                                            Developer</a></h3>

                                                                    </div>

                                                                </div>
                                                                <div className="d-flex pt-7">

                                                                    <ul className="list-unstyled mb-5 card-tag-list d-flex flex-wrap mr-2">
                                                                        <li><a href="/#"
                                                                               className="bg-regent-opacity-15 text-denim font-size-3 rounded-3 mr-7 flex-all-center px-3">
                                                                            <i className="fa fa-clock mr-2 font-weight-bold"/> 2-3
                                                                            years
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
                                                                <p className="font-size-3 ">We are looking for a senior
                                                                    python developer with good knowledge of django and
                                                                    flask...</p>
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
                                                                    <a className="btn btn-green text-uppercase btn-medium rounded-3 mr-3"
                                                                       href="/#">Apply
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
                                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-11 mb-9">

                                                            <div
                                                                className="pt-5 px-xl-5 px-lg-3 px-3 pb-7 light-mode-texts bg-white rounded hover-shadow-3">

                                                                <div className="media align-items-center">


                                                                    <a href="/#"><img src="assets/image/logos/lays.png"
                                                                                      alt=""
                                                                                      className="h-w-custom-2 mr-4"/></a>


                                                                    <div>
                                                                        <a href="/#"
                                                                           className="font-size-3 text-default-color line-height-2">Leaf.co</a>
                                                                        <span className="font-size-2 ml-25"><b>Posted on : Oct 21, 2021</b></span>
                                                                        <h3 className="font-size-6 mb-0"><a
                                                                            className="heading-default-color font-weight-semibold"
                                                                            href="/#">Full-Stack
                                                                            Developer</a></h3>

                                                                    </div>

                                                                </div>
                                                                <div className="d-flex pt-7">

                                                                    <ul className="list-unstyled mb-5 card-tag-list d-flex flex-wrap mr-2">
                                                                        <li><a href="/#"
                                                                               className="bg-regent-opacity-15 text-denim font-size-3 rounded-3 mr-7 flex-all-center px-3">
                                                                            <i className="fa fa-clock mr-2 font-weight-bold"/> 2-3
                                                                            years
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
                                                                <p className="font-size-3 ">We are looking for a senior
                                                                    python developer with good knowledge of django and
                                                                    flask...</p>
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
                                                                    <a className="btn btn-green text-uppercase btn-medium rounded-3 mr-3"
                                                                       href="/#">Apply
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
                                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-11 mb-9">

                                                            <div
                                                                className="pt-5 px-xl-5 px-lg-3 px-3 pb-7 light-mode-texts bg-white rounded hover-shadow-3">

                                                                <div className="media align-items-center">


                                                                    <a href="/#"><img src="assets/image/logos/apple.png"
                                                                                      alt=""
                                                                                      className="h-w-custom-2 mr-4"/></a>


                                                                    <div>
                                                                        <a href="/#"
                                                                           className="font-size-3 text-default-color line-height-2">Leaf.co</a>
                                                                        <span className="font-size-2 ml-25"><b>Posted on : Oct 21, 2021</b></span>
                                                                        <h3 className="font-size-6 mb-0"><a
                                                                            className="heading-default-color font-weight-semibold"
                                                                            href="/#">Full-Stack
                                                                            Developer</a></h3>

                                                                    </div>

                                                                </div>
                                                                <div className="d-flex pt-7">

                                                                    <ul className="list-unstyled mb-5 card-tag-list d-flex flex-wrap mr-2">
                                                                        <li><a href="/#"
                                                                               className="bg-regent-opacity-15 text-denim font-size-3 rounded-3 mr-7 flex-all-center px-3">
                                                                            <i className="fa fa-clock mr-2 font-weight-bold"/> 2-3
                                                                            years
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
                                                                <p className="font-size-3 ">We are looking for a senior
                                                                    python developer with good knowledge of django and
                                                                    flask...</p>
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
                                                                    <a className="btn btn-green text-uppercase btn-medium rounded-3 mr-3"
                                                                       href="/#">Apply
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
                                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-11 mb-9">

                                                            <div
                                                                className="pt-5 px-xl-5 px-lg-3 px-3 pb-7 light-mode-texts bg-white rounded hover-shadow-3">

                                                                <div className="media align-items-center">


                                                                    <a href="/#"><img
                                                                        src="assets/image/logos/google.png" alt=""
                                                                        className="h-w-custom-2 mr-4"/></a>


                                                                    <div>
                                                                        <a href="/#"
                                                                           className="font-size-3 text-default-color line-height-2">Leaf.co</a>
                                                                        <span className="font-size-2 ml-25"><b>Posted on : Oct 21, 2021</b></span>
                                                                        <h3 className="font-size-6 mb-0"><a
                                                                            className="heading-default-color font-weight-semibold"
                                                                            href="/#">Full-Stack
                                                                            Developer</a></h3>

                                                                    </div>

                                                                </div>
                                                                <div className="d-flex pt-7">

                                                                    <ul className="list-unstyled mb-5 card-tag-list d-flex flex-wrap mr-2">
                                                                        <li><a href="/#"
                                                                               className="bg-regent-opacity-15 text-denim font-size-3 rounded-3 mr-7 flex-all-center px-3">
                                                                            <i className="fa fa-clock mr-2 font-weight-bold"/> 2-3
                                                                            years
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
                                                                <p className="font-size-3 ">We are looking for a senior
                                                                    python developer with good knowledge of django and
                                                                    flask...</p>
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
                                                                    <a className="btn btn-green text-uppercase btn-medium rounded-3 mr-3"
                                                                       href="/#">Apply
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
                                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-11 mb-9">

                                                            <div
                                                                className="pt-5 px-xl-5 px-lg-3 px-3 pb-7 light-mode-texts bg-white rounded hover-shadow-3">

                                                                <div className="media align-items-center">


                                                                    <a href="/#"><img
                                                                        src="assets/image/logos/channel.png" alt=""
                                                                        className="h-w-custom-2 mr-4"/></a>


                                                                    <div>
                                                                        <a href="/#"
                                                                           className="font-size-3 text-default-color line-height-2">Leaf.co</a>
                                                                        <span className="font-size-2 ml-25"><b>Posted on : Oct 21, 2021</b></span>
                                                                        <h3 className="font-size-6 mb-0"><a
                                                                            className="heading-default-color font-weight-semibold"
                                                                            href="/#">Full-Stack
                                                                            Developer</a></h3>

                                                                    </div>

                                                                </div>
                                                                <div className="d-flex pt-7">

                                                                    <ul className="list-unstyled mb-5 card-tag-list d-flex flex-wrap mr-2">
                                                                        <li><a href="/#"
                                                                               className="bg-regent-opacity-15 text-denim font-size-3 rounded-3 mr-7 flex-all-center px-3">
                                                                            <i className="fa fa-clock mr-2 font-weight-bold"/> 2-3
                                                                            years
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
                                                                <p className="font-size-3 ">We are looking for a senior
                                                                    python developer with good knowledge of django and
                                                                    flask...</p>
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
                                                                    <a className="btn btn-green text-uppercase btn-medium rounded-3 mr-3"
                                                                       href="/#">Apply
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
                                                            <a className="text-green font-weight-bold text-uppercase font-size-3"
                                                               href="/#">See 1,294
                                                                more jobs <i className="fas fa-arrow-right ml-3"/>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                        <div className="tab-pane fade" id="savedJobs" role="tabpanel"
                                             aria-labelledby="saved-job-tab">

                                            <div className="bg-light pt-7 pt-lg-15 pb-7 pb-lg-15">
                                                <div className="container">


                                                    <div className="row justify-content-center" data-aos="fade-up"
                                                         data-aos-duration="800"
                                                         data-aos-once="true">
                                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-11 mb-9">

                                                            <div
                                                                className="pt-5 px-xl-5 px-lg-3 px-3 pb-7 light-mode-texts bg-white rounded hover-shadow-3">

                                                                <div className="media align-items-center">


                                                                    <a href="/#"><img src="assets/image/logos/audi.png"
                                                                                      alt=""
                                                                                      className="h-w-custom-2 mr-4"/></a>


                                                                    <div>
                                                                        <a href="/#"
                                                                           className="font-size-3 text-default-color line-height-2">Leaf.co</a>
                                                                        <span className="font-size-2 ml-25"><b>Posted on : Oct 21, 2021</b></span>
                                                                        <h3 className="font-size-6 mb-0"><a
                                                                            className="heading-default-color font-weight-semibold"
                                                                            href="/#">Full-Stack
                                                                            Developer</a></h3>

                                                                    </div>

                                                                </div>
                                                                <div className="d-flex pt-7">

                                                                    <ul className="list-unstyled mb-5 card-tag-list d-flex flex-wrap mr-2">
                                                                        <li><a href="/#"
                                                                               className="bg-regent-opacity-15 text-denim font-size-3 rounded-3 mr-7 flex-all-center px-3">
                                                                            <i className="fa fa-clock mr-2 font-weight-bold"/> 2-3
                                                                            years
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
                                                                <p className="font-size-3 ">We are looking for a senior
                                                                    python developer with good knowledge of django and
                                                                    flask...</p>
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
                                                                    <a className="btn btn-green text-uppercase btn-medium rounded-3 mr-3"
                                                                       href="/#">Apply
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
                                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-11 mb-9">

                                                            <div
                                                                className="pt-5 px-xl-5 px-lg-3 px-3 pb-7 light-mode-texts bg-white rounded hover-shadow-3">

                                                                <div className="media align-items-center">


                                                                    <a href="/#"><img
                                                                        src="assets/image/logos/adidas.jpg" alt=""
                                                                        className="h-w-custom-2 mr-4"/></a>


                                                                    <div>
                                                                        <a href="/#"
                                                                           className="font-size-3 text-default-color line-height-2">Leaf.co</a>
                                                                        <span className="font-size-2 ml-25"><b>Posted on : Oct 21, 2021</b></span>
                                                                        <h3 className="font-size-6 mb-0"><a
                                                                            className="heading-default-color font-weight-semibold"
                                                                            href="/#">Full-Stack
                                                                            Developer</a></h3>

                                                                    </div>

                                                                </div>
                                                                <div className="d-flex pt-7">

                                                                    <ul className="list-unstyled mb-5 card-tag-list d-flex flex-wrap mr-2">
                                                                        <li><a href="/#"
                                                                               className="bg-regent-opacity-15 text-denim font-size-3 rounded-3 mr-7 flex-all-center px-3">
                                                                            <i className="fa fa-clock mr-2 font-weight-bold"/> 2-3
                                                                            years
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
                                                                <p className="font-size-3 ">We are looking for a senior
                                                                    python developer with good knowledge of django and
                                                                    flask...</p>
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
                                                                    <a className="btn btn-green text-uppercase btn-medium rounded-3 mr-3"
                                                                       href="/#">Apply
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
                                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-11 mb-9">

                                                            <div
                                                                className="pt-5 px-xl-5 px-lg-3 px-3 pb-7 light-mode-texts bg-white rounded hover-shadow-3">

                                                                <div className="media align-items-center">


                                                                    <a href="/#"><img src="assets/image/logos/lays.png"
                                                                                      alt=""
                                                                                      className="h-w-custom-2 mr-4"/></a>


                                                                    <div>
                                                                        <a href="/#"
                                                                           className="font-size-3 text-default-color line-height-2">Leaf.co</a>
                                                                        <span className="font-size-2 ml-25"><b>Posted on : Oct 21, 2021</b></span>
                                                                        <h3 className="font-size-6 mb-0"><a
                                                                            className="heading-default-color font-weight-semibold"
                                                                            href="/#">Full-Stack
                                                                            Developer</a></h3>

                                                                    </div>

                                                                </div>
                                                                <div className="d-flex pt-7">

                                                                    <ul className="list-unstyled mb-5 card-tag-list d-flex flex-wrap mr-2">
                                                                        <li><a href="/#"
                                                                               className="bg-regent-opacity-15 text-denim font-size-3 rounded-3 mr-7 flex-all-center px-3">
                                                                            <i className="fa fa-clock mr-2 font-weight-bold"/> 2-3
                                                                            years
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
                                                                <p className="font-size-3 ">We are looking for a senior
                                                                    python developer with good knowledge of django and
                                                                    flask...</p>
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
                                                                    <a className="btn btn-green text-uppercase btn-medium rounded-3 mr-3"
                                                                       href="/#">Apply
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
                                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-11 mb-9">

                                                            <div
                                                                className="pt-5 px-xl-5 px-lg-3 px-3 pb-7 light-mode-texts bg-white rounded hover-shadow-3">

                                                                <div className="media align-items-center">


                                                                    <a href="/#"><img src="assets/image/logos/apple.png"
                                                                                      alt=""
                                                                                      className="h-w-custom-2 mr-4"/></a>


                                                                    <div>
                                                                        <a href="/#"
                                                                           className="font-size-3 text-default-color line-height-2">Leaf.co</a>
                                                                        <span className="font-size-2 ml-25"><b>Posted on : Oct 21, 2021</b></span>
                                                                        <h3 className="font-size-6 mb-0"><a
                                                                            className="heading-default-color font-weight-semibold"
                                                                            href="/#">Full-Stack
                                                                            Developer</a></h3>

                                                                    </div>

                                                                </div>
                                                                <div className="d-flex pt-7">

                                                                    <ul className="list-unstyled mb-5 card-tag-list d-flex flex-wrap mr-2">
                                                                        <li><a href="/#"
                                                                               className="bg-regent-opacity-15 text-denim font-size-3 rounded-3 mr-7 flex-all-center px-3">
                                                                            <i className="fa fa-clock mr-2 font-weight-bold"/> 2-3
                                                                            years
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
                                                                <p className="font-size-3 ">We are looking for a senior
                                                                    python developer with good knowledge of django and
                                                                    flask...</p>
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
                                                                    <a className="btn btn-green text-uppercase btn-medium rounded-3 mr-3"
                                                                       href="/#">Apply
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
                                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-11 mb-9">

                                                            <div
                                                                className="pt-5 px-xl-5 px-lg-3 px-3 pb-7 light-mode-texts bg-white rounded hover-shadow-3">

                                                                <div className="media align-items-center">


                                                                    <a href="/#"><img
                                                                        src="assets/image/logos/google.png" alt=""
                                                                        className="h-w-custom-2 mr-4"/></a>


                                                                    <div>
                                                                        <a href="/#"
                                                                           className="font-size-3 text-default-color line-height-2">Leaf.co</a>
                                                                        <span className="font-size-2 ml-25"><b>Posted on : Oct 21, 2021</b></span>
                                                                        <h3 className="font-size-6 mb-0"><a
                                                                            className="heading-default-color font-weight-semibold"
                                                                            href="/#">Full-Stack
                                                                            Developer</a></h3>

                                                                    </div>

                                                                </div>
                                                                <div className="d-flex pt-7">

                                                                    <ul className="list-unstyled mb-5 card-tag-list d-flex flex-wrap mr-2">
                                                                        <li><a href="/#"
                                                                               className="bg-regent-opacity-15 text-denim font-size-3 rounded-3 mr-7 flex-all-center px-3">
                                                                            <i className="fa fa-clock mr-2 font-weight-bold"/> 2-3
                                                                            years
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
                                                                <p className="font-size-3 ">We are looking for a senior
                                                                    python developer with good knowledge of django and
                                                                    flask...</p>
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
                                                                    <a className="btn btn-green text-uppercase btn-medium rounded-3 mr-3"
                                                                       href="/#">Apply
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
                                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-11 mb-9">

                                                            <div
                                                                className="pt-5 px-xl-5 px-lg-3 px-3 pb-7 light-mode-texts bg-white rounded hover-shadow-3">

                                                                <div className="media align-items-center">


                                                                    <a href="/#"><img
                                                                        src="assets/image/logos/channel.png" alt=""
                                                                        className="h-w-custom-2 mr-4"/></a>


                                                                    <div>
                                                                        <a href="/#"
                                                                           className="font-size-3 text-default-color line-height-2">Leaf.co</a>
                                                                        <span className="font-size-2 ml-25"><b>Posted on : Oct 21, 2021</b></span>
                                                                        <h3 className="font-size-6 mb-0"><a
                                                                            className="heading-default-color font-weight-semibold"
                                                                            href="/#">Full-Stack
                                                                            Developer</a></h3>

                                                                    </div>

                                                                </div>
                                                                <div className="d-flex pt-7">

                                                                    <ul className="list-unstyled mb-5 card-tag-list d-flex flex-wrap mr-2">
                                                                        <li><a href="/#"
                                                                               className="bg-regent-opacity-15 text-denim font-size-3 rounded-3 mr-7 flex-all-center px-3">
                                                                            <i className="fa fa-clock mr-2 font-weight-bold"/> 2-3
                                                                            years
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
                                                                <p className="font-size-3 ">We are looking for a senior
                                                                    python developer with good knowledge of django and
                                                                    flask...</p>
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
                                                                    <a className="btn btn-green text-uppercase btn-medium rounded-3 mr-3"
                                                                       href="/#">Apply
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
                                                            <a className="text-green font-weight-bold text-uppercase font-size-3"
                                                               href="/#">See 1,294
                                                                more jobs <i className="fas fa-arrow-right ml-3"/>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>


                            {/*end*/}
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default candidateProfile;