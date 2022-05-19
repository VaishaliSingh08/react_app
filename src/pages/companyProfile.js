import React, {Component} from 'react';

class companyProfile extends Component {




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


                <div
                    className="bg-light-custom pt-26 pt-md-32 pt-lg-33 pt-xl-35 position-relative z-index-1 overflow-hidden">

                    <div>
                        <img src="assets/image/company_banner.jpg" alt="" className="max-height-500 w-100"
                             style={{marginTop: "-252px"}}/>

                    </div>

                    <div className="topSection">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="container">
                                    <div className="row position-relative align-items-center">
                                        <div className="square-95 bg-black m-49 ml-1 rounded">
                                            <a href="/#"><img src="assets/image/logos/lays.png" className="h-w-custom"
                                                              alt=""/></a>
                                        </div>


                 <h2 className="ml-5">
                    Lays
                     </h2>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <ul className="nav  border-mercury pl-12 nav-pills mt-8 mb-3" id="pills-tab" role="tablist">
                    <li className="tab-menu-items  nav-item" role="presentation">
                        <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#jobs"
                           role="tab" aria-controls="pills-home" aria-selected="true">Jobs Posted</a>
                    </li>
                    <li className="tab-menu-items nav-item" role="presentation">
                        <a className="nav-link ml-7" id="pills-about-tab" data-toggle="pill" href="#about"
                           role="tab" aria-controls="pills-profile" aria-selected="false">About</a>
                    </li>
                    <li className="tab-menu-items nav-item" role="presentation">
                        <a className="nav-link ml-7" id="pills-gallery-tab" data-toggle="pill" href="#company-gallery"
                           role="tab" aria-controls="pills-contact" aria-selected="false">Gallery</a>
                    </li>
                </ul>

                <div className="tab-content" id="pills-tabContent">
                    {/*jobs posted tab*/}
                    <div className="tab-pane fade show active" id="jobs" role="tabpanel"
                         aria-labelledby="pills-home-tab">
                        <div className="bg-light pt-3 pt-lg-11 pb-7 pb-lg-15">
                            <div className="container">
                                {/*Post Job start*/}

                                <a href="javascript:" className="font-size-3 font-weight-bold text-white text-uppercase"
                                   data-toggle="modal"
                                   data-target="#form-post">
                                    <button className="btn btn-primary mb-10 ml-28"><i className="fa fa-plus mr-3"/>Post
                                        Job
                                    </button>
                                </a>
                                <div className="modal " id="form-post" tabIndex="-1" aria-hidden="true">


                                    <div className="modal-dialog max-width-px-1000 position-relative">
                                        <button type="button"
                                                className="circle-32 btn-reset bg-white pos-abs-tr mt-md-n6 mr-lg-n6 focus-reset z-index-supper"
                                                data-dismiss="modal"><i className="fas fa-times"/></button>
                                        <div className="login-modal-main bg-white rounded-8 overflow-hidden">
                                            <div className="row no-gutters">

                                                <div className="col-lg-12 col-md-12">
                                                    <div className="bg-white h-100 px-11 pt-11 pb-7">
                                                        <h3 className="text-green mb-10 text-uppercase"><i
                                                            className="fa fa-plus-circle mr-5"/>Add new job</h3>
                                                        <form>
                                                            <fieldset>
                                                                <div className="row mb-xl-1 mb-9">
                                                                    <div className="col-lg-4">
                                                                        <div className="form-group">
                                                                            <label htmlFor="namedash"
                                                                                   className="d-block text-black-2 font-size-4 font-weight-semibold mb-4">Job
                                                                                Position</label>
                                                                            <input type="text"
                                                                                   className="form-control h-px-48"
                                                                                   id="namedash"
                                                                                   placeholder="eg. Software Developer"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <div className="form-group">
                                                                            <label htmlFor="select2"
                                                                                   className="d-block text-black-2 font-size-4 font-weight-semibold mb-4">Experience
                                                                                Required</label>
                                                                            <input type="text"
                                                                                   className="form-control h-px-48"
                                                                                   id="experience"
                                                                                   placeholder="eg. 1-2 years"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4 mb-xl-0 mb-7">
                                                                        <div className="form-group position-relative">
                                                                            <label htmlFor="select3"
                                                                                   className="d-block text-black-2 font-size-4 font-weight-semibold mb-4">Job
                                                                                Type </label>
                                                                            <select id="select3"
                                                                                    className="form-control nice-select pl-6 arrow-3 h-px-48 w-100 font-size-4">
                                                                                <option>Full-time</option>
                                                                                <option>Part-time</option>
                                                                                <option>Intrenship</option>
                                                                                <option>Contract</option>
                                                                                <option>Temporary</option>
                                                                                <option>Freelance</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row">

                                                                    <div className="col-lg-4">
                                                                        <div className="form-group position-relative">
                                                                            <label htmlFor="address"
                                                                                   className="d-block text-black-2 font-size-4 font-weight-semibold mb-4">CTC
                                                                                offered</label>
                                                                            <input type="text"
                                                                                   className="form-control h-px-48"
                                                                                   id="experience"
                                                                                   placeholder="eg. 3-4 lacs"/>
                                                                            <span
                                                                                className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6"></span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <div className="form-group">
                                                                            <label htmlFor="formGroupExampleInput"
                                                                                   className="d-block text-black-2 font-size-4 font-weight-semibold mb-4">Skills
                                                                                Required</label>
                                                                            <input type="text" className="form-control"
                                                                                   id="formGroupExampleInput"
                                                                                   placeholder="Python, Django, Flask, PostgreSQL etc"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <div className="form-group ">
                                                                            <label htmlFor="formGroupExampleInput"
                                                                                   className="d-block text-black-2 font-size-4 font-weight-semibold mb-4">Job
                                                                                Location</label>
                                                                            <input type="text" className="form-control"
                                                                                   id="formGroupExampleInput"
                                                                                   placeholder="Jalandhar, Ludhiana, Chandigarh, Mohali"/>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-md-12">
                                                                        <div className="form-group">
                                                                            <label htmlFor="aboutTextarea"
                                                                                   className="d-block text-black-2 font-size-4 font-weight-semibold mb-4">About
                                                                                Job</label>
                                                                            <textarea name="textarea" id="aboutTextarea"
                                                                                      cols="30" rows="7"
                                                                                      className="border border-mercury text-gray w-100 pt-4 pl-6"
                                                                                      placeholder="Describe about the job position and role."/>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="row" id="success"
                                                                     style={{display: "None"}}>
                                                                    <div className="col-md-12">
                                                                        <div className="form-group">
                                                                            <label htmlFor="aboutTextarea"
                                                                                   className="d-block text-black-2 font-size-4 font-weight-semibold mb-4">Screening
                                                                                Question Free Text</label>
                                                                            <div>
                                                                                <ul>
                                                                                    <li className="success"/>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="row" id="yes_noo"
                                                                     style={{display: "None"}}>
                                                                    <div className="col-md-12">
                                                                        <div className="form-group">
                                                                            <label htmlFor="aboutTextarea"
                                                                                   className="d-block text-black-2 font-size-4 font-weight-semibold mb-4">Yes
                                                                                or No Screening Question</label>
                                                                            <div>
                                                                                <ul>
                                                                                    <li className="yes_no_show"/>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="row" id="multi_choice_ques"
                                                                     style={{display: "None"}}>
                                                                    <div className="col-md-12">
                                                                        <div className="form-group">
                                                                            <label htmlFor="aboutTextarea"
                                                                                   className="d-block text-black-2 font-size-4 font-weight-semibold mb-4">Multiple
                                                                                Choice Screening Question</label>
                                                                            <div>
                                                                                <ul>
                                                                                    <li className="multi_ques"/>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="row options_n"
                                                                     style={{display: "None"}}>
                                                                    <div className="col-md-12">
                                                                        <div className="form-group">
                                                                            <div>
                                                                                <h6>Options</h6>
                                                                                <div className="row">
                                                                                    <div className="col-lg-3">
                                                                                        <input type="checkbox"
                                                                                               id="python" name="python"
                                                                                               className="mr-2"/>
                                                                                        <span
                                                                                            className="option_success"></span>
                                                                                    </div>
                                                                                    <div className="col-lg-3">
                                                                                        <input type="checkbox"
                                                                                               id="python" name="python"
                                                                                               className="mr-2"/>
                                                                                        <span
                                                                                            className="option_success_2"></span>
                                                                                    </div>
                                                                                    <div className="col-lg-3">
                                                                                        <input type="checkbox"
                                                                                               id="python" name="python"
                                                                                               className="mr-2"/>
                                                                                        <span
                                                                                            className="option_success_3"></span>
                                                                                    </div>
                                                                                    <div className="col-lg-3">
                                                                                        <input type="checkbox"
                                                                                               id="python" name="python"
                                                                                               className="mr-2"/>
                                                                                        <span
                                                                                            className="option_success_4"></span>
                                                                                    </div>
                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="row">
                                                                    <div className="col-md-12">
                                                                        <div className="form-group">
                                                                            <button id="addQuestions"
                                                                                    className="btn btn-primary">Add
                                                                                questions
                                                                            </button>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-md-12">
                                                                        <div className="form-group">
                                                                            <div id="newRow" style={{display: "None"}}>
                                                                                <ul className="list-unstyled">

                                                                                    <li><a href="/#"><i
                                                                                        class="fab fa-acquisitions-incorporated mr-2 text-green"></i>
                                                                                        <span
                                                                                            id="textInput">Free Text</span></a>
                                                                                    </li>
                                                                                    <li><a href="/#"><i
                                                                                        class="fa fa-pen mr-2 text-green"></i>
                                                                                        <span
                                                                                            id="yes_or_no">Yes or No</span></a>
                                                                                    </li>
                                                                                    <li><a href="/#"><i
                                                                                        class="fa fa-check mr-2 text-green"></i>
                                                                                        <span
                                                                                            id="check">Multiple Choice</span></a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div style={{display: 'None'}}
                                                                                 id="textArea">
                                                                                <label htmlFor="formGroupExampleInput"
                                                                                       className="d-block text-black-2 font-size-4 font-weight-semibold mb-4">Write
                                                                                    the question</label>
                                                                                <input type="text"
                                                                                       className="form-control"
                                                                                       id="addFreeQues"
                                                                                /><br/>

                                                                                <button id="addFreeText"
                                                                                        className="btn btn-primary">Add
                                                                                </button>
                                                                            </div>
                                                                            <div id="yes_no" style={{display: 'None'}}>
                                                                                <label htmlFor="formGroupExampleInput"
                                                                                       className="d-block text-black-2 font-size-4 font-weight-semibold mb-4">Write
                                                                                    the question</label>
                                                                                <input type="text"
                                                                                       className="form-control"
                                                                                       id="yes_no_ques"/>
                                                                                <div className="row mt-2">
                                                                                    <div className="col-lg-4">
                                                                                        <input type="checkbox"
                                                                                               id="python" name="python"
                                                                                               className="mr-2"
                                                                                               checked/>
                                                                                        <span>Yes</span>
                                                                                    </div>
                                                                                    <div className="col-lg-4">
                                                                                        <input type="checkbox"
                                                                                               id="python" name="python"
                                                                                               className="mr-2"
                                                                                               checked/>
                                                                                        <span>No</span>
                                                                                    </div>
                                                                                </div>
                                                                                <br/><br/>
                                                                                <button id="yes_no_button"
                                                                                        className="btn btn-primary">Add
                                                                                </button>
                                                                            </div>
                                                                        </div>

                                                                        <div id="multi-check" style={{display: 'None'}}>
                                                                            <label htmlFor="formGroupExampleInput"
                                                                                   className="d-block text-black-2 font-size-4 font-weight-semibold mb-4">Write
                                                                                the question</label>
                                                                            <input type="text" className="form-control"
                                                                                   id="multi_question"
                                                                            /><br/>

                                                                            <div className="add_option"
                                                                                 style={{display: 'None'}}>
                                                                                <h4>Add an option</h4>
                                                                                <input type="text"
                                                                                       className="form-control"
                                                                                       id="multi_option"/><br/>
                                                                                <button
                                                                                    className="btn btn-medium btn-black mb-2"
                                                                                    id="done">Done
                                                                                </button>
                                                                            </div>
                                                                            <div className="add_option_2"
                                                                                 style={{display: 'None'}}>
                                                                                <h4>Add an option</h4>
                                                                                <input type="text"
                                                                                       className="form-control"
                                                                                       id="multi_option_2"/><br/>
                                                                                <button
                                                                                    className="btn btn-medium btn-black mb-2"
                                                                                    id="done_2">Done
                                                                                </button>
                                                                            </div>

                                                                            <div className="add_option_3"
                                                                                 style={{display: 'None'}}>
                                                                                <h4>Add an option</h4>
                                                                                <input type="text"
                                                                                       className="form-control"
                                                                                       id="multi_option_3"/><br/>
                                                                                <button
                                                                                    className="btn btn-medium btn-black mb-2"
                                                                                    id="done_3">Done
                                                                                </button>
                                                                            </div>

                                                                            <div className="add_option_4"
                                                                                 style={{display: 'None'}}>
                                                                                <h4>Add an option</h4>
                                                                                <input type="text"
                                                                                       className="form-control"
                                                                                       id="multi_option_4"/><br/>
                                                                                <button
                                                                                    className="btn btn-medium btn-black mb-2"
                                                                                    id="done_4">Done
                                                                                </button>
                                                                            </div>
                                                                            <button id="add_option_1"
                                                                                    className="btn btn-black-2 mr-2">Add
                                                                                option 1
                                                                            </button>
                                                                            <button id="add_option_2"
                                                                                    className="btn btn-black-2 mr-2">Add
                                                                                option 2
                                                                            </button>
                                                                            <button id="add_option_3"
                                                                                    className="btn btn-black-2 mr-2">Add
                                                                                option 3
                                                                            </button>
                                                                            <button id="add_option_4"
                                                                                    className="btn btn-black-2 mr-2">Add
                                                                                option 4
                                                                            </button>
                                                                        </div>


                                                                    </div>
                                                                </div>

                                                                <br/>
                                                                <input type="button" value="Post Job"
                                                                       className="btn btn-green btn-h-60 text-white min-width-px-210 rounded-5 text-uppercase"/>

                                                            </fieldset>
                                                        </form>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/*Post Job End*/}

                                {/*All jobs start*/}
                                <a href="javascript:" className="font-size-3 font-weight-bold text-white text-uppercase"
                                   data-toggle="modal"
                                   data-target="#all-jobs">
                                    <button className="btn btn-primary mb-10 ml-10"><i className="fa fa-eye mr-3"/>All
                                        Jobs Posted
                                    </button>
                                </a>
                                <div className="modal " id="all-jobs" tabIndex="-1" aria-hidden="true">


                                    <div className="modal-dialog max-width-px-1100 position-relative">
                                        <button type="button"
                                                className="circle-32 btn-reset bg-white pos-abs-tr mt-md-n6 mr-lg-n6 focus-reset z-index-supper"
                                                data-dismiss="modal"><i className="fas fa-times"/></button>
                                        <div className="login-modal-main bg-white rounded-8 overflow-hidden">
                                            <div className="row no-gutters">


                                                <div className="table-responsive rounded shadow-8 px-11 ">
                                                    <table className="table table-striped">
                                                        <thead>
                                                        <tr>
                                                            <th scope="col"
                                                                className="pl-0 border-0 font-size-4 font-weight-normal">Job
                                                                Position
                                                            </th>
                                                            <th scope="col"
                                                                className="pl-4 border-0 font-size-4 font-weight-normal">Job
                                                                Type
                                                            </th>
                                                            <th scope="col"
                                                                className="pl-4 border-0 font-size-4 font-weight-normal">City
                                                            </th>
                                                            <th scope="col"
                                                                className="pl-4 border-0 font-size-4 font-weight-normal">Created
                                                                on
                                                            </th>
                                                            <th scope="col"
                                                                className="pl-4 border-0 font-size-4 font-weight-normal">Total
                                                                Applicants
                                                            </th>
                                                            {/*  <th scope="col" className="pl-4 border-0 font-size-4 font-weight-normal"><i className="fa fa-pencil-alt"/>*/}
                                                            {/*</th>*/}
                                                            {/*<th scope="col" className="pl-4 border-0 font-size-4 font-weight-normal"><i className="fa fa-trash-alt"/>*/}
                                                            {/*</th>*/}
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr className="border border-color-2">
                                                            <th scope="row"
                                                                className="pl-6 border-0 py-7 min-width-px-235">
                                                                <div className="">
                                                                    <a href="jobdetails.html"
                                                                       className="font-size-4 mb-0 font-weight-semibold text-black-2">Senior
                                                                        Project Manager</a>
                                                                </div>
                                                            </th>
                                                            <td className="table-y-middle py-7 min-width-px-135">
                                                                <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">Full-Time</h3>
                                                            </td>
                                                            <td className="table-y-middle py-7 min-width-px-125">
                                                                <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">New
                                                                    York</h3>
                                                            </td>
                                                            <td className="table-y-middle py-7 min-width-px-155">
                                                                <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">12
                                                                    July,
                                                                    2020</h3>
                                                            </td>
                                                            <td className="table-y-middle py-7 min-width-px-125">
                                                                <h3 className="font-size-4 font-weight-bold text-black-2 mb-0">47</h3>
                                                            </td>
                                                            <td className="table-y-middle py-7 min-width-px-80">
                                                                <a href="javascript:"
                                                                   className="font-size-5 font-weight-bold text-white text-uppercase"
                                                                   data-toggle="modal"
                                                                   data-target="#edit-job">
                                                                    <i className="fa fa-pencil-alt text-green"/></a>
                                                            </td>
                                                            <td className="table-y-middle py-7 min-width-px-125">
                                                                <i className="fa fa-trash-alt text-red"/>
                                                            </td>
                                                        </tr>
                                                        <tr className="border border-color-2">
                                                            <th scope="row"
                                                                className="pl-6 border-0 py-7 min-width-px-235">
                                                                <div className="">
                                                                    <a href="jobdetails.html"
                                                                       className="font-size-4 mb-0 font-weight-semibold text-black-2">UI
                                                                        Designer</a>
                                                                </div>
                                                            </th>
                                                            <td className="table-y-middle py-7 min-width-px-135">
                                                                <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">Full-Time</h3>
                                                            </td>
                                                            <td className="table-y-middle py-7 min-width-px-125">
                                                                <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">Remote</h3>
                                                            </td>
                                                            <td className="table-y-middle py-7 min-width-px-155">
                                                                <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">24
                                                                    June,
                                                                    2020</h3>
                                                            </td>
                                                            <td className="table-y-middle py-7 min-width-px-125">
                                                                <h3 className="font-size-4 font-weight-bold text-black-2 mb-0">145</h3>
                                                            </td>
                                                            <td className="table-y-middle py-7 min-width-px-80">
                                                                <a href="javascript:"
                                                                   className="font-size-5 font-weight-bold text-white text-uppercase"
                                                                   data-toggle="modal"
                                                                   data-target="#edit-job">
                                                                    <i className="fa fa-pencil-alt text-green"/></a>
                                                            </td>
                                                            <td className="table-y-middle py-7 min-width-px-125">
                                                                <i className="fa fa-trash-alt text-red"/>
                                                            </td>
                                                        </tr>
                                                        <tr className="border border-color-2">
                                                            <th scope="row"
                                                                className="pl-6 border-0 py-7 min-width-px-235">
                                                                <div className="">
                                                                    <a href="jobdetails.html"
                                                                       className="font-size-4 mb-0 font-weight-semibold text-black-2">Head
                                                                        of
                                                                        Marketing</a>
                                                                </div>
                                                            </th>
                                                            <td className="table-y-middle py-7 min-width-px-135">
                                                                <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">Full-Time</h3>
                                                            </td>
                                                            <td className="table-y-middle py-7 min-width-px-125">
                                                                <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">London</h3>
                                                            </td>
                                                            <td className="table-y-middle py-7 min-width-px-155">
                                                                <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">15
                                                                    June,
                                                                    2020</h3>
                                                            </td>
                                                            <td className="table-y-middle py-7 min-width-px-125">
                                                                <h3 className="font-size-4 font-weight-bold text-black-2 mb-0">62</h3>
                                                            </td>
                                                            <td className="table-y-middle py-7 min-width-px-80">
                                                                <a href="javascript:"
                                                                   className="font-size-5 font-weight-bold text-white text-uppercase"
                                                                   data-toggle="modal"
                                                                   data-target="#edit-job">
                                                                    <i className="fa fa-pencil-alt text-green"/></a>
                                                            </td>
                                                            <td className="table-y-middle py-7 min-width-px-125">
                                                                <i className="fa fa-trash-alt text-red"/>
                                                            </td>
                                                        </tr>
                                                        <tr className="border border-color-2">
                                                            <th scope="row"
                                                                className="pl-6 border-0 py-7 min-width-px-235">
                                                                <div className="">
                                                                    <a href="jobdetails.html"
                                                                       className="font-size-4 mb-0 font-weight-semibold text-black-2">Full-Stack
                                                                        Developer</a>
                                                                </div>
                                                            </th>
                                                            <td className="table-y-middle py-7 min-width-px-135">
                                                                <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">Part-Time</h3>
                                                            </td>
                                                            <td className="table-y-middle py-7 min-width-px-125">
                                                                <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">California</h3>
                                                            </td>
                                                            <td className="table-y-middle py-7 min-width-px-155">
                                                                <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">29
                                                                    May,
                                                                    2020</h3>
                                                            </td>
                                                            <td className="table-y-middle py-7 min-width-px-125">
                                                                <h3 className="font-size-4 font-weight-bold text-black-2 mb-0">184</h3>
                                                            </td>
                                                            <td className="table-y-middle py-7 min-width-px-80">
                                                                <a href="javascript:"
                                                                   className="font-size-5 font-weight-bold text-white text-uppercase"
                                                                   data-toggle="modal"
                                                                   data-target="#edit-job">
                                                                    <i className="fa fa-pencil-alt text-green"/></a>
                                                            </td>
                                                            <td className="table-y-middle py-7 min-width-px-125">
                                                                <i className="fa fa-trash-alt text-red"/>
                                                            </td>
                                                        </tr>
                                                        <tr className="border border-color-2">
                                                            <th scope="row"
                                                                className="pl-6 border-0 py-7 min-width-px-235">
                                                                <div className="">
                                                                    <a href="jobdetails.html"
                                                                       className="font-size-4 mb-0 font-weight-semibold text-black-2">Full-Stack
                                                                        Developer</a>
                                                                </div>
                                                            </th>
                                                            <td className="table-y-middle py-7 min-width-px-135">
                                                                <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">Part-Time</h3>
                                                            </td>
                                                            <td className="table-y-middle py-7 min-width-px-125">
                                                                <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">California</h3>
                                                            </td>
                                                            <td className="table-y-middle py-7 min-width-px-155">
                                                                <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">29
                                                                    May,
                                                                    2020</h3>
                                                            </td>
                                                            <td className="table-y-middle py-7 min-width-px-125">
                                                                <h3 className="font-size-4 font-weight-bold text-black-2 mb-0">184</h3>
                                                            </td>
                                                            <td className="table-y-middle py-7 min-width-px-80">
                                                                <a href="javascript:"
                                                                   className="font-size-5 font-weight-bold text-white text-uppercase"
                                                                   data-toggle="modal"
                                                                   data-target="#edit-job">
                                                                    <i className="fa fa-pencil-alt text-green"/></a>
                                                            </td>
                                                            <td className="table-y-middle py-7 min-width-px-125">
                                                                <i className="fa fa-trash-alt text-red"/>
                                                            </td>
                                                        </tr>
                                                        <tr className="border border-color-2">
                                                            <th scope="row"
                                                                className="pl-6 border-0 py-7 min-width-px-235">
                                                                <div className="">
                                                                    <a href="jobdetails.html"
                                                                       className="font-size-4 mb-0 font-weight-semibold text-black-2">Full-Stack
                                                                        Developer</a>
                                                                </div>
                                                            </th>
                                                            <td className="table-y-middle py-7 min-width-px-135">
                                                                <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">Part-Time</h3>
                                                            </td>
                                                            <td className="table-y-middle py-7 min-width-px-125">
                                                                <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">California</h3>
                                                            </td>
                                                            <td className="table-y-middle py-7 min-width-px-155">
                                                                <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">29
                                                                    May,
                                                                    2020</h3>
                                                            </td>
                                                            <td className="table-y-middle py-7 min-width-px-125">
                                                                <h3 className="font-size-4 font-weight-bold text-black-2 mb-0">184</h3>
                                                            </td>
                                                            <td className="table-y-middle py-7 min-width-px-80">
                                                                <a href="javascript:"
                                                                   className="font-size-5 font-weight-bold text-white text-uppercase"
                                                                   data-toggle="modal"
                                                                   data-target="#edit-job">
                                                                    <i className="fa fa-pencil-alt text-green"/></a>
                                                            </td>
                                                            <td className="table-y-middle py-7 min-width-px-125">
                                                                <i className="fa fa-trash-alt text-red"/>
                                                            </td>
                                                        </tr>
                                                        <tr className="border border-color-2">
                                                            <th scope="row"
                                                                className="pl-6 border-0 py-7 min-width-px-235">
                                                                <div className="">
                                                                    <a href="jobdetails.html"
                                                                       className="font-size-4 mb-0 font-weight-semibold text-black-2">Full-Stack
                                                                        Developer</a>
                                                                </div>
                                                            </th>
                                                            <td className="table-y-middle py-7 min-width-px-135">
                                                                <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">Part-Time</h3>
                                                            </td>
                                                            <td className="table-y-middle py-7 min-width-px-125">
                                                                <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">California</h3>
                                                            </td>
                                                            <td className="table-y-middle py-7 min-width-px-155">
                                                                <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">29
                                                                    May,
                                                                    2020</h3>
                                                            </td>
                                                            <td className="table-y-middle py-7 min-width-px-125">
                                                                <h3 className="font-size-4 font-weight-bold text-black-2 mb-0">184</h3>
                                                            </td>
                                                            <td className="table-y-middle py-7 min-width-px-80">
                                                                <a href="javascript:"
                                                                   className="font-size-5 font-weight-bold text-white text-uppercase"
                                                                   data-toggle="modal"
                                                                   data-target="#edit-job">
                                                                    <i className="fa fa-pencil-alt text-green"/></a>
                                                            </td>
                                                            <td className="table-y-middle py-7 min-width-px-125">
                                                                <i className="fa fa-trash-alt text-red"/>
                                                            </td>
                                                        </tr>
                                                        <tr className="border border-color-2">
                                                            <th scope="row"
                                                                className="pl-6 border-0 py-7 min-width-px-235">
                                                                <div className="">
                                                                    <a href="jobdetails.html"
                                                                       className="font-size-4 mb-0 font-weight-semibold text-black-2">Full-Stack
                                                                        Developer</a>
                                                                </div>
                                                            </th>
                                                            <td className="table-y-middle py-7 min-width-px-135">
                                                                <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">Part-Time</h3>
                                                            </td>
                                                            <td className="table-y-middle py-7 min-width-px-125">
                                                                <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">California</h3>
                                                            </td>
                                                            <td className="table-y-middle py-7 min-width-px-155">
                                                                <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">29
                                                                    May,
                                                                    2020</h3>
                                                            </td>
                                                            <td className="table-y-middle py-7 min-width-px-125">
                                                                <h3 className="font-size-4 font-weight-bold text-black-2 mb-0">184</h3>
                                                            </td>
                                                            <td className="table-y-middle py-7 min-width-px-80">
                                                                <a href="javascript:"
                                                                   className="font-size-5 font-weight-bold text-white text-uppercase"
                                                                   data-toggle="modal"
                                                                   data-target="#edit-job">
                                                                    <i className="fa fa-pencil-alt text-green"/></a>
                                                            </td>
                                                            <td className="table-y-middle py-7 min-width-px-125">
                                                                <i className="fa fa-trash-alt text-red"/>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className="px-8 pt-2">
                                                    <nav aria-label="Page navigation example">
                                                        <ul className="pagination pagination-hover-primary rounded-0 ml-n2">
                                                            <li className="page-item rounded-0 flex-all-center">
                                                                <a className="page-link rounded-0 border-0 px-3active"
                                                                   href="/#"
                                                                   aria-label="Previous">
                                                                    <i className="fas fa-chevron-left"></i>
                                                                </a>
                                                            </li>
                                                            <li className="page-item"><a
                                                                className="page-link border-0 font-size-4 font-weight-semibold px-3"
                                                                href="/#">1</a></li>
                                                            <li className="page-item"><a
                                                                className="page-link border-0 font-size-4 font-weight-semibold px-3"
                                                                href="/#">2</a></li>
                                                            <li className="page-item"><a
                                                                className="page-link border-0 font-size-4 font-weight-semibold px-3"
                                                                href="/#">3</a></li>
                                                            <li className="page-item disabled"><a
                                                                className="page-link border-0 font-size-4 font-weight-semibold px-3"
                                                                href="/#">...</a></li>
                                                            <li className="page-item "><a
                                                                className="page-link border-0 font-size-4 font-weight-semibold px-3"
                                                                href="/#">7</a></li>
                                                            <li className="page-item rounded-0 flex-all-center">
                                                                <a className="page-link rounded-0 border-0 px-3"
                                                                   href="/#" aria-label="Next">
                                                                    <i className="fas fa-chevron-right"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                {/*All jobs end*/}


                                <div className="row justify-content-center" data-aos="fade-up" data-aos-duration="800"
                                     data-aos-once="true">
                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-11 mb-9">

                                        <div
                                            className="pt-5 px-xl-5 px-lg-3 px-3 pb-7 light-mode-texts bg-white rounded hover-shadow-3">

                                            <div className="media align-items-center">


                                                <a href="/#"><img src="assets/image/logos/audi.png" alt=""
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
                                                        <i className="fa fa-clock mr-2 font-weight-bold"/> 2-3 years
                                                    </a></li>
                                                    <li><a href="/#"
                                                           className="bg-regent-opacity-15 text-orange-2 font-size-3 rounded-3  mr-7 flex-all-center px-3">
                                                        <i className="fa fa-briefcase mr-2 font-weight-bold"></i> Full-time
                                                    </a></li>
                                                    <li><a href="/#"
                                                           className="bg-regent-opacity-15 text-denim font-size-3 rounded-3  mr-7 flex-all-center px-3 ">
                                                        <i className="fas fa-rupee-sign mr-2 font-weight-bold"/> 5000-10000
                                                    </a></li>
                                                </ul>

                                            </div>
                                            <p className="font-size-3 ">We are looking for a senior python developer
                                                with good knowledge of django and flask...</p>
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
                                                   data-toggle="modal"
                                                   data-target="#apply-now">Apply
                                                    Now</a>


                                                <a href="javascript:"
                                                   className="btn  btn-black-2 text-white  text-uppercase btn-medium rounded-3 mr-7"
                                                   data-toggle="modal"
                                                   data-target="#view-details">
                                                    View Details</a>

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


                                                <a href="/#"><img src="assets/image/logos/adidas.jpg" alt=""
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
                                                        <i className="fa fa-clock mr-2 font-weight-bold"/> 2-3 years
                                                    </a></li>
                                                    <li><a href="/#"
                                                           className="bg-regent-opacity-15 text-orange-2 font-size-3 rounded-3  mr-7 flex-all-center px-3">
                                                        <i className="fa fa-briefcase mr-2 font-weight-bold"></i> Full-time
                                                    </a></li>
                                                    <li><a href="/#"
                                                           className="bg-regent-opacity-15 text-denim font-size-3 rounded-3  mr-7 flex-all-center px-3 ">
                                                        <i className="fas fa-rupee-sign mr-2 font-weight-bold"></i> 80K-90K
                                                    </a></li>
                                                </ul>

                                            </div>
                                            <p className="font-size-3 ">We are looking for a senior python developer
                                                with good knowledge of django and flask...</p>
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
                                                <a href="javascript:"
                                                   className="btn  btn-black-2 text-white  text-uppercase btn-medium rounded-3 mr-7"
                                                   data-toggle="modal"
                                                   data-target="#view-details">
                                                    View Details</a>
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


                                                <a href="/#"><img src="assets/image/logos/lays.png" alt=""
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
                                                        <i className="fa fa-clock mr-2 font-weight-bold"/> 2-3 years
                                                    </a></li>
                                                    <li><a href="/#"
                                                           className="bg-regent-opacity-15 text-orange-2 font-size-3 rounded-3  mr-7 flex-all-center px-3">
                                                        <i className="fa fa-briefcase mr-2 font-weight-bold"></i> Full-time
                                                    </a></li>
                                                    <li><a href="/#"
                                                           className="bg-regent-opacity-15 text-denim font-size-3 rounded-3  mr-7 flex-all-center px-3 ">
                                                        <i className="fas fa-rupee-sign mr-2 font-weight-bold"></i> 80K-90K
                                                    </a></li>
                                                </ul>

                                            </div>
                                            <p className="font-size-3 ">We are looking for a senior python developer
                                                with good knowledge of django and flask...</p>
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
                                                <a href="javascript:"
                                                   className="btn  btn-black-2 text-white  text-uppercase btn-medium rounded-3 mr-7"
                                                   data-toggle="modal"
                                                   data-target="#view-details">
                                                    View Details</a>
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


                                                <a href="/#"><img src="assets/image/logos/apple.png" alt=""
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
                                                        <i className="fa fa-clock mr-2 font-weight-bold"/> 2-3 years
                                                    </a></li>
                                                    <li><a href="/#"
                                                           className="bg-regent-opacity-15 text-orange-2 font-size-3 rounded-3  mr-7 flex-all-center px-3">
                                                        <i className="fa fa-briefcase mr-2 font-weight-bold"></i> Full-time
                                                    </a></li>
                                                    <li><a href="/#"
                                                           className="bg-regent-opacity-15 text-denim font-size-3 rounded-3  mr-7 flex-all-center px-3 ">
                                                        <i className="fas fa-rupee-sign mr-2 font-weight-bold"></i> 80K-90K
                                                    </a></li>
                                                </ul>

                                            </div>
                                            <p className="font-size-3 ">We are looking for a senior python developer
                                                with good knowledge of django and flask...</p>
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
                                                <a href="javascript:"
                                                   className="btn  btn-black-2 text-white  text-uppercase btn-medium rounded-3 mr-7"
                                                   data-toggle="modal"
                                                   data-target="#view-details">
                                                    View Details</a>
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


                                                <a href="/#"><img src="assets/image/logos/google.png" alt=""
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
                                                        <i className="fa fa-clock mr-2 font-weight-bold"/> 2-3 years
                                                    </a></li>
                                                    <li><a href="/#"
                                                           className="bg-regent-opacity-15 text-orange-2 font-size-3 rounded-3  mr-7 flex-all-center px-3">
                                                        <i className="fa fa-briefcase mr-2 font-weight-bold"></i> Full-time
                                                    </a></li>
                                                    <li><a href="/#"
                                                           className="bg-regent-opacity-15 text-denim font-size-3 rounded-3  mr-7 flex-all-center px-3 ">
                                                        <i className="fas fa-rupee-sign mr-2 font-weight-bold"></i> 80K-90K
                                                    </a></li>
                                                </ul>

                                            </div>
                                            <p className="font-size-3 ">We are looking for a senior python developer
                                                with good knowledge of django and flask...</p>
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
                                                <a href="javascript:"
                                                   className="btn  btn-black-2 text-white  text-uppercase btn-medium rounded-3 mr-7"
                                                   data-toggle="modal"
                                                   data-target="#view-details">
                                                    View Details</a>
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


                                                <a href="/#"><img src="assets/image/logos/channel.png" alt=""
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
                                                        <i className="fa fa-clock mr-2 font-weight-bold"/> 2-3 years
                                                    </a></li>
                                                    <li><a href="/#"
                                                           className="bg-regent-opacity-15 text-orange-2 font-size-3 rounded-3  mr-7 flex-all-center px-3">
                                                        <i className="fa fa-briefcase mr-2 font-weight-bold"></i> Full-time
                                                    </a></li>
                                                    <li><a href="/#"
                                                           className="bg-regent-opacity-15 text-denim font-size-3 rounded-3  mr-7 flex-all-center px-3 ">
                                                        <i className="fas fa-rupee-sign mr-2 font-weight-bold"></i> 80K-90K
                                                    </a></li>
                                                </ul>

                                            </div>
                                            <p className="font-size-3 ">We are looking for a senior python developer
                                                with good knowledge of django and flask...</p>
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
                                                <a href="javascript:"
                                                   className="btn  btn-black-2 text-white  text-uppercase btn-medium rounded-3 mr-7"
                                                   data-toggle="modal"
                                                   data-target="#view-details">
                                                    View Details</a>
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
                                        <a className="text-green font-weight-bold text-uppercase font-size-3" href="/#">See
                                            1,294
                                            more jobs <i className="fas fa-arrow-right ml-3"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Edit a job post starts*/}


                    <div className="modal bg-allports-opacity-2 " id="edit-job" tabIndex="-1" aria-hidden="true">
                        <div className="modal-dialog max-width-px-840 position-relative">
                            <button type="button"
                                    className="circle-32 btn-reset bg-white pos-abs-tr mt-md-n6 mr-lg-n6 focus-reset z-index-supper"
                                    data-dismiss="modal"><i className="fas fa-times"/></button>
                            <div className="login-modal-main bg-white rounded-8 overflow-hidden">
                                <div className="row no-gutters">

                                    <div className="col-lg-12 col-md-12">
                                        <div className="bg-white h-100 px-11 pt-11 pb-7">
                                            <h3 className="text-green mb-10 text-uppercase"><i
                                                className="fa fa-pencil-alt mr-5"/>Edit Job</h3>

                                            <div className="upload-file mb-16 text-center">

                                                <div id="userActions" className="square-144 m-auto px-6 mb-7">
                                                    <label htmlFor="fileUpload"
                                                           className="mb-0 font-size-4 text-smoke pointer"><img
                                                        className="h-w-custom"
                                                        src="assets/image/logos/lays.png"/></label>
                                                    <input type="file" id="fileUpload" className="sr-only"/>
                                                </div>
                                            </div>

                                            <form action="#/">
                                                <fieldset>
                                                    <div className="row mb-xl-1 mb-9">
                                                        <div className="col-lg-4">
                                                            <div className="form-group">
                                                                <label htmlFor="namedash"
                                                                       className="d-block text-black-2 font-size-4 font-weight-semibold mb-4">Job
                                                                    Position</label>
                                                                <input type="text" className="form-control h-px-48"
                                                                       id="namedash"
                                                                       value="Senior Project Manager"
                                                                       placeholder="eg. Software Developer"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <div className="form-group">
                                                                <label htmlFor="select2"
                                                                       className="d-block text-black-2 font-size-4 font-weight-semibold mb-4">Experience
                                                                    Required</label>
                                                                <input type="text" className="form-control h-px-48"
                                                                       id="experience"
                                                                       value="2-3 years" placeholder="eg. 1-2 years"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 mb-xl-0 mb-7">
                                                            <div className="form-group position-relative">
                                                                <label htmlFor="select3"
                                                                       className="d-block text-black-2 font-size-4 font-weight-semibold mb-4">Job
                                                                    Type </label>
                                                                <select id="select3"
                                                                        className="form-control nice-select pl-6 arrow-3 h-px-48 w-100 font-size-4">
                                                                    <option>Full-time</option>
                                                                    <option>Part-time</option>
                                                                    <option>Intrenship</option>
                                                                    <option>Contract</option>
                                                                    <option>Temporary</option>
                                                                    <option>Freelance</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">

                                                        <div className="col-lg-4">
                                                            <div className="form-group position-relative">
                                                                <label htmlFor="address"
                                                                       className="d-block text-black-2 font-size-4 font-weight-semibold mb-4">CTC
                                                                    offered</label>
                                                                <input type="text" className="form-control h-px-48"
                                                                       id="experience"
                                                                       value="15k-20k" placeholder="eg. 3-4 lacs"/>
                                                                <span
                                                                    className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6"></span>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <div className="form-group">
                                                                <label htmlFor="formGroupExampleInput"
                                                                       className="d-block text-black-2 font-size-4 font-weight-semibold mb-4">Skills
                                                                    Required</label>
                                                                <input type="text" className="form-control"
                                                                       id="formGroupExampleInput"
                                                                       value="Python, Django"
                                                                       placeholder="Python, Django, Flask, PostgreSQL etc"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <div className="form-group ">
                                                                <label htmlFor="formGroupExampleInput"
                                                                       className="d-block text-black-2 font-size-4 font-weight-semibold mb-4">Job
                                                                    Location</label>
                                                                <input type="text" className="form-control"
                                                                       id="formGroupExampleInput"
                                                                       value="Jalandhar, Ludhiana"
                                                                       placeholder="Jalandhar, Ludhiana, Chandigarh, Mohali"/>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <label htmlFor="aboutTextarea"
                                                                       className="d-block text-black-2 font-size-4 font-weight-semibold mb-4">About
                                                                    Job</label>
                                                                <textarea name="textarea" id="aboutTextarea" cols="30"
                                                                          rows="7"
                                                                          className="border border-mercury text-gray w-100 pt-4 pl-6"
                                                                          placeholder="Describe about the job position and role.">
                                                      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                                                  </textarea>
                                                            </div>
                                                        </div>
                                                        <input type="button" value="Upadate Details"
                                                               className="btn btn-green btn-h-60 text-white min-width-px-210 rounded-5 text-uppercase"/>
                                                    </div>
                                                </fieldset>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Edit a job post ends*/}


                    {/* View Details starts*/}


                    <div className="modal" id="view-details" tabIndex="-1" aria-hidden="true">
                        <div className="modal-dialog max-width-px-840 position-relative">
                            <button type="button"
                                    className="circle-32 btn-reset bg-white pos-abs-tr mt-md-n6 mr-lg-n6 focus-reset z-index-supper"
                                    data-dismiss="modal"><i className="fas fa-times"/></button>
                            <div className="login-modal-main bg-white rounded-8 overflow-hidden">
                                <div className="row no-gutters">


                                    <div className="row">

                                        <div className="col-xl-12 col-lg-12">
                                            <div className="bg-white shadow-9">

                                                <div
                                                    className="pt-9 pl-sm-9 pl-5 pr-sm-9 pr-5 pb-8 border-bottom border-width-1 border-default-color light-mode-texts">
                                                    <div className="row">
                                                        <div className="col-md-6">

                                                            <div className="media align-items-center">

                                                                <div className="square-72 d-block mr-8">
                                                                    <img
                                                                        src="assets/image/l2/png/featured-job-logo-1.png"
                                                                        alt=""/>
                                                                </div>

                                                                <div>
                                                                    <h3 className="font-size-6 mb-0">Product
                                                                        Designer</h3>
                                                                    <span
                                                                        className="font-size-3 text-gray line-height-2">AirBnb</span>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        <div className="col-md-6 text-right pt-7 pt-md-0 mt-md-n1">

                                                            <div className="media justify-content-md-end">
                                                                <p className="font-size-4 text-gray mb-0">19 June
                                                                    2020</p>
                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>

                                                <div
                                                    className="job-details-content pt-5 pl-sm-9 pl-6 pr-sm-9 pr-6 pb-2  border-bottom border-width-1 border-default-color light-mode-texts">
                                                    <div className="row">
                                                        <div className="col-md-4 mb-md-0 mb-6">
                                                            <div>
                                                                <span className="font-size-4 d-block mb-4 text-gray"> <i
                                                                    className="fa fa-clock mr-2 text-green"/>Experience Required</span>
                                                                <h6 className="font-size-5 text-black-2 font-weight-semibold mb-9 ml-8">2-3
                                                                    years</h6>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4 pr-lg-0 pl-lg-10 mb-md-0 mb-6">
                                                            <div>
                                                                <span className="font-size-4 d-block mb-4 text-gray"> <i
                                                                    className="fa fa-briefcase mr-2 text-green"/>Job Type</span>
                                                                <h6 className="font-size-5 text-black-2 font-weight-semibold mb-9 ml-8">Full
                                                                    Time</h6>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4 pl-lg-0">
                                                            <div>
                                                                <span className="font-size-4 d-block mb-4 text-gray"> <i
                                                                    className="fa fa-user-alt mr-2 text-green"/>Total Vacancies</span>
                                                                <h6 className="font-size-5 text-black-2 font-weight-semibold mb-9 ml-8">20</h6>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-4 mb-md-0 mb-6">
                                                            <div>
                                                                <span className="font-size-4 d-block mb-4 text-gray"> <i
                                                                    className="fa fa-user-graduate mr-2 text-green"/>Qualification</span>
                                                                <h6 className="font-size-5 text-black-2 font-weight-semibold mb-9 ml-8">B.Tech(CS)</h6>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4 pr-lg-0 pl-lg-10 mb-md-0 mb-6">
                                                            <div>
                                                                <span className="font-size-4 d-block mb-4 text-gray"> <i
                                                                    className="fa fa-map-marker-alt mr-2 text-green"/>Job Location</span>
                                                                <h6 className="font-size-5 text-black-2 font-weight-semibold mb-9 ml-8">London</h6>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4 pl-lg-0">
                                                            <div>
                                                                <span className="font-size-4 d-block mb-4 text-gray"> <i
                                                                    className="fa fa-clock mr-2 text-green"/>CTC offered</span>
                                                                <h6 className="font-size-5 text-black-2 font-weight-semibold mb-9 ml-8">80k-90k</h6>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="tags">
                                                                <p className="font-size-4 text-gray mb-3">Technical
                                                                    Skills</p>
                                                                <ul className="d-flex list-unstyled flex-wrap pr-sm-25 pr-md-0">
                                                                    <li className="bg-green-opacity-1 mr-3 h-px-33 text-center flex-all-center rounded-3 px-5 font-size-3 text-black-2 mt-2">
                                                                        Editing
                                                                    </li>
                                                                    <li className="bg-green-opacity-1 mr-3 h-px-33 text-center flex-all-center rounded-3 px-5 font-size-3 text-black-2 mt-2">
                                                                        Wire-framing
                                                                    </li>
                                                                    <li className="bg-green-opacity-1 mr-md-0 mr-3 h-px-33 text-center flex-all-center rounded-3 px-5 font-size-3 text-black-2 mt-2">
                                                                        XD
                                                                    </li>
                                                                    <li className="bg-green-opacity-1 mr-3 h-px-33 text-center flex-all-center rounded-3 px-5 font-size-3 text-black-2 mt-2">
                                                                        User Persona
                                                                    </li>
                                                                    <li className="bg-green-opacity-1 mr-3 h-px-33 text-center flex-all-center rounded-3 px-5 font-size-3 text-black-2 mt-2">
                                                                        Sketch
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>


                                                </div>
                                                <div
                                                    className="job-details-content pt-2 pl-sm-9 pl-6 pr-sm-9 pr-6 pb-10 light-mode-texts">
                                                    <div className="row">
                                                        <div className="col-xl-11 col-md-12 pr-xxl-9 pr-xl-10 pr-lg-20">
                                                            <div className="">
                                                                <p className="mb-4 font-size-4 text-gray font-weight-bold">Job
                                                                    Description</p>
                                                                <p className="font-size-4 text-black-2 mb-7">Gubagoo is
                                                                    a fast
                                                                    growing provider of messaging and commerce solutions
                                                                    for
                                                                    automotive dealers
                                                                    changing the future of how people find, buy and
                                                                    service
                                                                    their vehicles. </p>
                                                            </div>
                                                            <div className="">
                                                                <p className="font-size-4 text-black-2 mb-7">We’re
                                                                    looking for
                                                                    a passionate individual to design beautiful and
                                                                    functional
                                                                    products for our
                                                                    customers at Gubagoo. We move very fast and you will
                                                                    be
                                                                    expected to contribute to a cross-functional product
                                                                    development squad,
                                                                    that includes product managers and developers, to
                                                                    deliver
                                                                    the UX and UI for the team to bring to life. </p>
                                                                <p className="font-size-4 text-black-2 mb-7">We are
                                                                    serious
                                                                    about remote work. You can work for from
                                                                    anywhere. </p>


                                                                <a className="btn btn-green text-uppercase btn-medium w-180 h-px-48 rounded-3 mr-4 mt-6"
                                                                   href="/#">Apply to this job</a>
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
                    </div>

                    {/*View Details ends*/}


                    {/* Apply now starts*/}


                    <div className="modal" id="apply-now" tabIndex="-1" aria-hidden="true">
                        <div className="modal-dialog max-width-px-1000 position-relative">
                            <button type="button"
                                    className="circle-32 btn-reset bg-white pos-abs-tr mt-md-n6 mr-lg-n6 focus-reset z-index-supper"
                                    data-dismiss="modal"><i className="fas fa-times"/></button>
                            <div className="login-modal-main bg-white rounded-8 overflow-hidden">
                                <div className="row no-gutters">


                                    <div className="row">

                                        <div className="col-xl-12 col-lg-12">
                                            <div className="bg-white shadow-9">

                                                <div
                                                    className="pt-9 pl-sm-9 pl-5 pr-sm-9 pr-5 pb-8 border-bottom border-width-1 border-default-color light-mode-texts">
                                                    <div className="row">
                                                        <div className="col-md-6">

                                                            <div className="media align-items-center">

                                                                <div className="square-72 d-block mr-8">
                                                                    <img
                                                                        src="assets/image/l2/png/featured-job-logo-1.png"
                                                                        alt=""/>
                                                                </div>

                                                                <div>
                                                                    <h3 className="font-size-6 mb-0">Product
                                                                        Designer</h3>
                                                                    <span
                                                                        className="font-size-3 text-gray line-height-2">AirBnb</span>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        <div className="col-md-6 text-right pt-7 pt-md-0 mt-md-n1">


                                                            <div className="">
                                                                <button className="btn btn-primary"><i
                                                                    className="fa fa-upload mr-2"/>Update Resume
                                                                </button>

                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>

                                                <div
                                                    className="job-details-content pt-5 pl-sm-9 pl-6 pr-sm-9 pr-6 pb-2  border-bottom border-width-1 border-default-color light-mode-texts">

                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="row">
                                                                <div className="col-lg-2">
                                                                    <input type="checkbox" id="python" name="python"
                                                                           className="mr-2"/>
                                                                    <label htmlFor="python"> London</label>
                                                                </div>

                                                                <div className="col-lg-2">
                                                                    <input type="checkbox" id="django" name="django"
                                                                           className="mr-2"/>
                                                                    <label htmlFor="django"> New York</label>
                                                                </div>

                                                                <div className="col-lg-2">
                                                                    <input type="checkbox" id="html" name="html"
                                                                           className="mr-2"/>
                                                                    <label htmlFor="html"> USA</label>
                                                                </div>

                                                                <div className="col-lg-2">
                                                                    <input type="checkbox" id="css" name="css"
                                                                           className="mr-2"/>
                                                                    <label htmlFor="css"> German</label>
                                                                </div>

                                                                <div className="col-lg-2">
                                                                    <input type="checkbox" id="css" name="css"
                                                                           className="mr-2"/>
                                                                    <label htmlFor="css"> German</label>
                                                                </div>

                                                                <div className="col-lg-2">
                                                                    <input type="checkbox" id="css" name="css"
                                                                           className="mr-2"/>
                                                                    <label htmlFor="css"> German</label>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-2">
                                                                    <input type="checkbox" id="python" name="python"
                                                                           className="mr-2"/>
                                                                    <label htmlFor="python"> London</label>
                                                                </div>

                                                                <div className="col-lg-2">
                                                                    <input type="checkbox" id="django" name="django"
                                                                           className="mr-2"/>
                                                                    <label htmlFor="django"> New York</label>
                                                                </div>

                                                                <div className="col-lg-2">
                                                                    <input type="checkbox" id="html" name="html"
                                                                           className="mr-2"/>
                                                                    <label htmlFor="html"> USA</label>
                                                                </div>

                                                                <div className="col-lg-2">
                                                                    <input type="checkbox" id="css" name="css"
                                                                           className="mr-2"/>
                                                                    <label htmlFor="css"> German</label>
                                                                </div>

                                                                <div className="col-lg-2">
                                                                    <input type="checkbox" id="css" name="css"
                                                                           className="mr-2"/>
                                                                    <label htmlFor="css"> German</label>
                                                                </div>

                                                                <div className="col-lg-2">
                                                                    <input type="checkbox" id="css" name="css"
                                                                           className="mr-2"/>
                                                                    <label htmlFor="css"> German</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                </div>
                                                <div
                                                    className="job-details-content pt-2 pl-sm-9 pl-6 pr-sm-9 pr-6 pb-10 light-mode-texts">
                                                    <div className="row">
                                                        <div className="col-xl-11 col-md-12 pr-xxl-9 pr-xl-10 pr-lg-20">
                                                            <div className="mt-5">
                                                                <h4 className="font-size-4 text-black-2 mb-7">Screening
                                                                    Questions</h4>


                                                                <form action="#/">
                                                                    <fieldset>
                                                                        <div className="row mb-xl-1 mb-9">
                                                                            <div className="col-lg-12">
                                                                                <div className="form-group">
                                                                                    <label htmlFor="namedash"
                                                                                           className="d-block text-black-2 font-size-4 font-weight-semibold mb-4">What
                                                                                        is your current role in current
                                                                                        organization?</label>
                                                                                    <input type="text"
                                                                                           className="form-control h-px-48"
                                                                                           id="namedash"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="row mb-8">
                                                                                <div className="col-lg-12 mb-xl-0 mb-7">
                                                                                    <div
                                                                                        className="form-group position-relative">
                                                                                        <label htmlFor="select3"
                                                                                               className="d-block text-black-2 font-size-4 font-weight-semibold mb-4">Are
                                                                                            you ready to
                                                                                            relocate?</label>
                                                                                        <div className="row">
                                                                                            <div className="col-lg-3">
                                                                                                <input type="radio"
                                                                                                       name="yes_no"
                                                                                                       className="mr-2"/>Yes
                                                                                            </div>
                                                                                            <div className="col-lg-3">
                                                                                                <input type="radio"
                                                                                                       name="yes_no"
                                                                                                       className="mr-2"/>No
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-lg-12">
                                                                                    <div className="form-group">
                                                                                        <label htmlFor="select3"
                                                                                               className="d-block text-black-2 font-size-4 font-weight-semibold mb-4">In
                                                                                            which technolgies, you are
                                                                                            comfortable?</label>
                                                                                        <div className="row">
                                                                                            <div className="col-lg-3">
                                                                                                <input type="checkbox"
                                                                                                       id="python"
                                                                                                       name="python"
                                                                                                       className="mr-2"/>
                                                                                                <label
                                                                                                    htmlFor="python"> Python</label>
                                                                                            </div>

                                                                                            <div className="col-lg-3">
                                                                                                <input type="checkbox"
                                                                                                       id="django"
                                                                                                       name="django"
                                                                                                       className="mr-2"/>
                                                                                                <label
                                                                                                    htmlFor="django"> Django</label>
                                                                                            </div>

                                                                                            <div className="col-lg-3">
                                                                                                <input type="checkbox"
                                                                                                       id="html"
                                                                                                       name="html"
                                                                                                       className="mr-2"/>
                                                                                                <label
                                                                                                    htmlFor="html"> HTML</label>
                                                                                            </div>

                                                                                            <div className="col-lg-3">
                                                                                                <input type="checkbox"
                                                                                                       id="css"
                                                                                                       name="css"
                                                                                                       className="mr-2"/>
                                                                                                <label
                                                                                                    htmlFor="css"> CSS</label>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>


                                                                        </div>


                                                                        <input type="button" value="Apply Now"
                                                                               className="btn btn-green btn-h-60 text-white min-width-px-125 rounded-5 text-uppercase"/>

                                                                    </fieldset>
                                                                </form>
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
                    </div>

                    {/*Apply now ends*/}


                    {/*about tab*/}
                    <div className="tab-pane fade" id="about" role="tabpanel" aria-labelledby="pills-about-tab">
                        <div className="bg-light pt-2 pt-lg-10 pb-7 pb-lg-15">
                            <div className="container">


                                {/*Edit about start*/}
                                <div className="col-lg-12">
                                    <a href="javascript:"
                                       className="font-size-3 font-weight-bold text-white text-uppercase"
                                       data-toggle="modal"
                                       data-target="#edit-about">
                                        <button className="btn btn-primary mb-5 ml-69"><i
                                            className="fa fa-pencil-alt mr-2"/>Edit
                                        </button>
                                    </a>
                                </div>
                                <div className="modal " id="edit-about" tabIndex="-1" aria-hidden="true">
                                    <div className="modal-dialog max-width-px-840 position-relative">
                                        <button type="button"
                                                className="circle-32 btn-reset bg-white pos-abs-tr mt-md-n6 mr-lg-n6 focus-reset z-index-supper"
                                                data-dismiss="modal"><i className="fas fa-times"/></button>
                                        <div className="login-modal-main bg-white rounded-8 overflow-hidden">
                                            <div className="row no-gutters">

                                                <div className="col-lg-12 col-md-12">
                                                    <div className="bg-white h-100 px-11 pt-11 pb-7">
                                                        <h3 className="text-green mb-10 text-uppercase"><i
                                                            className="fa fa-pencil-alt mr-5"/>Edit Company Profile</h3>
                                                        <div className="row">
                                                            <div className="col-lg-4 upload-file mb-16 text-center">

                                                                <div id="userActions"
                                                                     className="square-144 m-auto px-6 mb-7">
                                                                    <label htmlFor="fileUpload"
                                                                           className="mb-0 font-size-4 text-smoke">
                                                                        <img title="Click here to edit logo"
                                                                             className="h-w-custom pointer"
                                                                             src="assets/image/logos/lays.png"/></label>
                                                                    <input type="file" id="fileUpload"
                                                                           className="sr-only"/>
                                                                </div>

                                                            </div>
                                                            <div className="col-lg-8 upload-file mb-16 text-center">

                                                                <div id="userActions" className="m-auto px-6 mb-7">
                                                                    <label htmlFor="fileUpload"
                                                                           className="mb-0 font-size-4 text-smoke">
                                                                        <img title="Click here to edit banner image"
                                                                             style={{width: "342px"}}
                                                                             className="pointer"
                                                                             src="assets/image/company_banner.jpg"/></label>
                                                                    <input type="file" id="fileUpload"
                                                                           className="sr-only"/>
                                                                </div>

                                                            </div>
                                                        </div>

                                                        <form action="#/">
                                                            <fieldset>
                                                                <div className="row mb-xl-1 mb-9">
                                                                    <div className="col-lg-6">
                                                                        <div className="form-group">
                                                                            <label htmlFor="namedash"
                                                                                   className="d-block text-black-2 font-size-4 font-weight-semibold mb-4">Company
                                                                                Name</label>
                                                                            <input type="text"
                                                                                   className="form-control h-px-48"
                                                                                   id="namedash"
                                                                                   value="Lays"
                                                                                   placeholder="eg. Apple"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-6">
                                                                        <div className="form-group">
                                                                            <label htmlFor="select2"
                                                                                   className="d-block text-black-2 font-size-4 font-weight-semibold mb-4">Corporate
                                                                                Type</label>
                                                                            <select id="select2"
                                                                                    className="form-control nice-select pl-6 arrow-3 h-px-48 w-100 font-size-4"
                                                                                    value="B2B & B2C">
                                                                                <option>B2B</option>
                                                                                <option>B3B</option>
                                                                                <option>B4B</option>
                                                                                <option>B5B</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row mb-8">
                                                                    <div className="col-lg-6 mb-xl-0 mb-7">
                                                                        <div className="form-group position-relative">
                                                                            <label htmlFor="select3"
                                                                                   className="d-block text-black-2 font-size-4 font-weight-semibold mb-4">Employee
                                                                                Size </label>
                                                                            <input type="text"
                                                                                   className="form-control h-px-48"
                                                                                   id="namedash"
                                                                                   value="10-15"
                                                                                   placeholder="eg. 20-200"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-6">
                                                                        <div className="form-group position-relative">
                                                                            <label htmlFor="address"
                                                                                   className="d-block text-black-2 font-size-4 font-weight-semibold mb-4">Location
                                                                                or (Remote)</label>
                                                                            <input type="text"
                                                                                   className="form-control h-px-48"
                                                                                   id="namedash"
                                                                                   value="New York city"
                                                                                   placeholder="eg. 20-200"/>
                                                                            <span
                                                                                className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6"></span>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-12">
                                                                    <div className="form-group">
                                                                        <label htmlFor="aboutTextarea"
                                                                               className="d-block text-black-2 font-size-4 font-weight-semibold ">About
                                                                            Comapny</label>
                                                                        <textarea name="textarea" id="aboutTextarea"
                                                                                  cols="30" rows="7"
                                                                                  className="border border-mercury text-gray w-100 pt-4 pl-6"
                                                                                  placeholder="Describe about the company what make it unique"
                                                                                  value="If you’re like most of my clients, you know creative content marketing and killer copywriting are fundamental to the success of your business.

But with so much to do to keep your business growing, you don’t have time to learn how to write sales copy that actually sells, or create a content marketing strategy that resonates with your target audience.

You’ve been disappointed with your traffic and conversions so far, but with an overwhelming number of things to do, you’ve put off doing anything about it until now.

So you’ve come to Upwork, looking for someone that can craft creative content and killer sales copy to help you reach more people and make more sales.

But your troubles aren’t over just yet; it isn’t easy to find someone who can create the high-quality content you need. But your troubles aren’t over just yet."></textarea>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <div className="form-group mb-2">
                                                                        <label htmlFor="formGroupExampleInput"
                                                                               className="d-block text-black-2 font-size-4 font-weight-semibold">Company
                                                                            Website Link</label>
                                                                        <input type="text" className="form-control"
                                                                               id="formGroupExampleInput"
                                                                               value="https://fontawesome.com/"
                                                                               placeholder="https://www.example.com/"/>
                                                                    </div>

                                                                </div>

                                                                <div className="col-md-12">
                                                                    <div className="form-group mb-2">
                                                                        <label htmlFor="formGroupExampleInput"
                                                                               className="d-block text-black-2 font-size-4 font-weight-semibold">Benefits</label>
                                                                        <label className="check"> <input
                                                                            type="checkbox"/>
                                                                            <span>Work From Home</span> </label> <label
                                                                        className="check"> <input type="checkbox"/>
                                                                        <span>Cafeteria</span> </label> <label
                                                                        className="check"> <input type="checkbox"/>
                                                                        <span>Team Outing</span> </label> <label
                                                                        className="check"> <input
                                                                        type="checkbox"/> <span>Incentives</span>
                                                                    </label> <label className="check">
                                                                        <input type="checkbox"/>
                                                                        <span>Health Insurance</span> </label> <label
                                                                        className="check">
                                                                        <input type="checkbox"/>
                                                                        <span>Job Training</span> </label> <label
                                                                        className="check">
                                                                        <input type="checkbox"/> <span>Transport</span>
                                                                    </label> <label className="check">
                                                                        <input type="checkbox"/> <span>Childcare</span>
                                                                    </label> <label className="check">
                                                                        <input type="checkbox"/> <span>Free Food</span>
                                                                    </label> <label className="check">
                                                                        <input type="checkbox"/> <span>Internet Reimbursement</span>
                                                                    </label> <label className="check">
                                                                        <input type="checkbox"/> <span>International Reloaction</span>
                                                                    </label> <label className="check">
                                                                        <input type="checkbox"/> <span>EPF</span>
                                                                    </label>
                                                                    </div>
                                                                    <input type="button" value="Update Profile"
                                                                           className="btn btn-green btn-h-60 text-white min-width-px-125 rounded-5 text-uppercase"/>
                                                                </div>

                                                            </fieldset>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                {/*Edit about end*/}

                                <div className="row">
                                    <div className="col-12 col-lg-3 col-md-3 col-xs-6">
                                        <div className="mb-8">
                                            <p className="font-size-4"><i className="fa fa-building mr-2"/>Type of
                                                corporation</p>


                 <h2 className="ml-5"  >

                     </h2>

                                            <h5 className="font-size-4  ml-8 font-weight-semibold">
                                               B2C</h5>
                                        </div>

                                    </div>
                                    <div className="col-12 col-lg-3 col-md-3 col-xs-6">
                                        <div className="mb-8">
                                            <p className="font-size-4"><i className="fa fa-network-wired mr-2"/>Website
                                            </p>

                                            <a href="https://dummy.com/"
                                               className="font-size-4 ml-8 font-weight-semibold">
                                             https://dummy.com/  </a>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-3 col-md-3 col-xs-6">
                                        <div className="mb-8">

                                            <p className="font-size-4"><i className="fa fa-bars mr-2"/>Company size</p>
                                     <h5 className="font-size-4 ml-8 font-weight-semibold">
                                          10-50</h5>
                                        </div>

                                    </div>
                                    <div className="col-12 col-lg-3 col-md-3 col-xs-6">
                                        <div className="mb-8">
                                            <p className="font-size-4"><i className="fa fa-map-marker-alt mr-2"/>Location
                                            </p>
                                            <h5 className="font-size-4 ml-8 font-weight-semibold">New York City</h5>
                                        </div>

                                    </div>


                                </div>

                                <div className="pr-xl-0 pr-xxl-22 pt-5">
                                    <h4 className="font-size-6 mb-7 border-bottom-custom"><i
                                        className="fa fa-home mr-2"/>About Company</h4>
                                    <p className="font-size-4 mb-8">
                                        If you’re like most of my clients, you know creative content marketing and killer copywriting
                                        are fundamental to the success of your business.  But with so much to do to keep your business
                                        growing, you don’t have time to learn how to write sales copy that actually sells, or create a
                                        content marketing strategy that resonates with your target audience.  You’ve been disappointed
                                        with your traffic and conversions so far, but with an overwhelming number of things to do,
                                        you’ve put off doing anything about it until now.  So you’ve come to Upwork, looking for someone
                                        that can craft creative content and killer sales copy to help you reach more people and make more
                                        sales.  But your troubles aren’t over just yet; it isn’t easy to find someone who can create the
                                        high-quality content you need. But your troubles aren’t over just yet.
                                    </p>
                                </div>
                                <div className="pr-xl-0 pr-xxl-22 pt-5">
                                    <h4 className="font-size-6 mb-7 border-bottom-custom"><i
                                        className="fa fa-balance-scale mr-2"/>Benefits</h4>

                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div className="card">
                                                <i className="fa fa-laptop mt-5 font-size-8 text-green ml-24"/>
                                                <div className="card-body">
                                                    <p className="card-text text-center">Work From Home</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="card">
                                                <i className="fa fa-umbrella-beach mt-5 font-size-8 text-green ml-24"/>
                                                <div className="card-body">
                                                    <p className="card-text text-center">Team Outings</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-3">
                                            <div className="card">
                                                <i className="fa fa-briefcase-medical mt-5 font-size-8 text-green ml-24"/>
                                                <div className="card-body">
                                                    <p className="card-text text-center">Health Insurance</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-3">
                                            <div className="card">
                                                <i className="fas fa-rupee-sign mt-5 font-size-8 text-green ml-24"/>
                                                <div className="card-body">
                                                    <p className="card-text text-center">Incnetives</p>
                                                </div>
                                            </div>
                                        </div>


                                    </div>

                                    <div className="row mt-5">
                                        <div className="col-lg-3">
                                            <div className="card">
                                                <i className="fa fa-coffee mt-5 font-size-8 text-green ml-24"/>
                                                <div className="card-body">
                                                    <p className="card-text text-center">Cafeteria</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="card">
                                                <i className="fa fa-user-ninja mt-5 font-size-8 text-green ml-24"/>
                                                <div className="card-body">
                                                    <p className="card-text text-center">Job Training</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-3">
                                            <div className="card">
                                                <i className="fa fa-bus mt-5 font-size-8 text-green ml-24"/>
                                                <div className="card-body">
                                                    <p className="card-text text-center">Transport</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-3">
                                            <div className="card">
                                                <i className="fa fa-child mt-5 font-size-8 text-green ml-24"/>
                                                <div className="card-body">
                                                    <p className="card-text text-center">Childcare</p>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                    <div className="row mt-5">
                                        <div className="col-lg-3">
                                            <div className="card">
                                                <i className="fa fa-plane mt-5 font-size-8 text-green ml-24"/>
                                                <div className="card-body">
                                                    <p className="card-text text-center">International Relocation</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="card">
                                                <i className="fa fa-heartbeat mt-5 font-size-8 text-green ml-24"/>
                                                <div className="card-body">
                                                    <p className="card-text text-center">Gym</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-3">
                                            <div className="card">
                                                <i className="fas fa-hamburger mt-5 font-size-8 text-green ml-24"/>
                                                <div className="card-body">
                                                    <p className="card-text text-center">Free Food</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-3">
                                            <div className="card">
                                                <i className="fa fa-globe mt-5 font-size-8 text-green ml-24"/>
                                                <div className="card-body">
                                                    <p className="card-text text-center">Internet Reimbursement</p>
                                                </div>
                                            </div>
                                        </div>


                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                    {/*gallery tab*/}
                    <div className="tab-pane fade" id="company-gallery" role="tabpanel"
                         aria-labelledby="pills-gallery-tab">

                        <div className="bg-light pt-7 pt-lg-15 pb-7 pb-lg-15">
                            <div className="container">


                                <a href="javascript:" className="font-size-3 font-weight-bold text-white text-uppercase"
                                   data-toggle="modal"
                                   data-target="#adjust-images">
                                    <button className="btn btn-primary mb-8 ml-10"><i className="fa fa-plus mr-3"/>Add
                                        and adjust
                                    </button>
                                </a>

                                <div className="modal " id="adjust-images" tabIndex="-1" aria-hidden="true">


                                    <div className="modal-dialog max-width-px-840 position-relative">
                                        <button type="button"
                                                className="circle-32 btn-reset bg-white pos-abs-tr mt-md-n6 mr-lg-n6 focus-reset z-index-supper"
                                                data-dismiss="modal"><i className="fas fa-times"/></button>
                                        <div className="login-modal-main bg-white rounded-8 overflow-hidden">
                                            <div className="row no-gutters">

                                                <div className="bg-white h-100 px-11 pt-11 pb-7">
                                                    <h3 className="text-green text-uppercase">Add and adjust
                                                        Images </h3>
                                                    <section className="example">
                                                        <div className="col-lg-12">

                                                            <button className="btn btn-primary mt-5 mb-8 ml-15">
                                                                <i className="fa fa-plus mr-5"/> <label
                                                                htmlFor="fileUpload"
                                                                className="mb-0  text-white">
                                                                <input type="file" id="fileUpload" className="sr-only"/>Add
                                                                an image</label></button>

                                                            <h4><i className="fa fa-adjust mr-2"/>Adjust the images
                                                                position by drag and drop</h4>
                                                            <div className="gridly">
                                                                <div className="column brick">
                                                                    <div className="logo-card">
                                                                        <img className="h-w-custom"
                                                                             src={"assets/image/l2/png/blog-img1.png"}
                                                                             alt="Logo"/>
                                                                        <div>

                                                                        </div>


                                                                    </div>
                                                                </div>
                                                                <div className="column brick">
                                                                    <div className="logo-card">


                                                                        <img className="h-w-custom"
                                                                             src={"assets/image/l2/png/blog-img2.png"}
                                                                             alt="Logo"/>
                                                                        <div>

                                                                        </div>


                                                                    </div>
                                                                </div>
                                                                <div className="column brick">
                                                                    <div className="logo-card">


                                                                        <img className="h-w-custom"
                                                                             src={"assets/image/l2/png/blog-img3.png"}
                                                                             alt="Logo"/>
                                                                        <div>

                                                                        </div>


                                                                    </div>
                                                                </div>
                                                                <div className="column brick">
                                                                    <div className="logo-card">


                                                                        <img className="h-w-custom"
                                                                             src={"assets/image/l2/png/blog-img3.png"}
                                                                             alt="Logo"/>
                                                                        <div>

                                                                        </div>


                                                                    </div>
                                                                </div>
                                                                <div className="column brick">
                                                                    <div className="logo-card">


                                                                        <img className="h-w-custom"
                                                                             src={"assets/image/l2/png/blog-img3.png"}
                                                                             alt="Logo"/>
                                                                        <div>

                                                                        </div>


                                                                    </div>
                                                                </div>


                                                            </div>


                                                        </div>

                                                    </section>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="row justify-content-center">


                                    <div className="gallery ">

                                        <div className="img-wrap col-lg-4">
                                            <a href="assets/image/l2/png/blog-img1.png" className="big" rel="rel1">
                                                <span className="close"><i
                                                    className="fa fa-trash-alt text-red-2"/></span>
                                                <img src="assets/image/l2/png/blog-img1.png" alt="" title="Image 1"/>

                                            </a>
                                        </div>


                                        <div className="img-wrap col-lg-4">
                                            <a href="assets/image/l2/png/blog-img2.png" className="big" rel="rel1">
                                                <span className="close"><i
                                                    className="fa fa-trash-alt text-red-2"/></span>
                                                <img src="assets/image/l2/png/blog-img2.png" alt="" title="Image 1"/>

                                            </a>
                                        </div>

                                        <div className="img-wrap col-lg-4">
                                            <a href="assets/image/l2/png/blog-img3.png" className="big" rel="rel1">
                                                <span className="close"><i
                                                    className="fa fa-trash-alt text-red-2"/></span>
                                                <img src="assets/image/l2/png/blog-img3.png" alt="" title="Image 1"/>

                                            </a>
                                        </div>


                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default companyProfile;