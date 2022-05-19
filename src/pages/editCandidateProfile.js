import React, {Component} from 'react';

class editCandidateProfile extends Component {
    constructor() {
        super();

        this.state = {
            name: "David Henricks",
            email: "name_ac@gmail.com ",
            experience: "4-5 years",
            currentProfile: "Python Developer",
            industry: "IT",
            skills: "python, django, flask",
            currentSalary: "15k",
            dateOfBirth: "May 1, 1996",
            contactNumber1: "+91 8550235630",
            contactNumber2: "Not given",
            prefLocation: "London, Singapore, Hongkong",
            curLocation: "New York City",
            curOrg: "Abc Pvt. Ltd.",
            jobType: "Full-time",
            highestQual: "B.E",
            noticePeriod: "15 days",
            nameExperience1: "Lead Product Designer",
            nameExperience2: "Senior UI/UX Designer",
            orgExpName1: "Airbnb",
            orgExpName2: "Google Inc",
            clgName1: "Harvard University",
            clgName2: "Manipal Institute of Technology",
            studyName1: "Masters in Art Design",
            studyName2: "Bachelor in Software Engineering",
            about: "A talented professional with an academic background in IT and proven commercial development experience as C++ developer since 1999. Has a sound knowledge of the software development life cycle. Was involved in more than 140 software development outsourcing projects.\n" +
                "\n" +
                "Programming Languages: C/C++, .NET C++, Python, Bash, Shell, PERL, Regular expressions, Python, Active-script.",

        };

    }

    render() {

        return (


            <div className="bg-light pt-7 pt-lg-15 pb-4 pb-lg-8">
                <div className="container">
                    <h2 className="text-green text-uppercase text-center mb-10"><i
                        className="fa fa-pencil-alt text-green mr-2"/>Edit Profile </h2>
                    <form action="#">
                        <fieldset>
                            <div className="row mb-xl-1 mb-9">
                                <div className="col-lg-3">
                                    <div id="userActions"
                                         className="square-215-custom b-11">
                                        <label htmlFor="fileUpload" className="mb-0 font-size-4 text-smoke pointer">
                                            <img className="h-w-custom-2" title="Click to change image" src="assets/image/user1.jpg" alt=""/>
                                        </label>
                                            <input type="file" id="fileUpload" className="sr-only"/>
                                    </div>
                                </div>
                                <div className="col-lg-9 ">
                                    <div className="form-group">
                                        <label htmlFor="aboutTextarea"
                                               className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"><i
                                            className="fa fa-user mr-3"/>About
                                            You</label>
                                        <textarea name="textarea" id="aboutTextarea"
                                                  cols="30" rows="6"
                                                  className="border border-mercury text-gray w-100 pt-4 pl-6"
                                                  value={this.state.about}
                                                  onChange={() => this.setState({about: this.value})}
                                                  placeholder="Write something about you!!"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-xl-1 mb-9">
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label htmlFor="namedash"
                                               className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"><i
                                            className="fa fa-pen mr-2"/>Name</label>
                                        <input type="text"
                                               className="form-control h-px-48"
                                               id="namedash" value={this.state.name}
                                               onChange={() => this.setState({name: this.value})}
                                               placeholder="John Doe"/>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label htmlFor="namedash"
                                               className="d-block text-black-2 font-size-4                                                                                    font-weight-semibold mb-4"><i
                                            className="fa                                                                                   fa-envelope mr-2"/>Email
                                        </label>
                                        <input type="email"
                                               className="form-control h-px-48"
                                               id="namedash" value={this.state.email}
                                               onChange={() => this.setState({email: this.value})}
                                               placeholder="help@pepoffice.com"/>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label htmlFor="namedash"
                                               className="d-block text-black-2 font-size-4                                                                                    font-weight-semibold mb-4"><i
                                            className="fa                                                                                   fa-clock mr-2"/>Experience
                                        </label>
                                        <input type="email"
                                               className="form-control h-px-48"
                                               id="namedash"
                                               value={this.state.experience}
                                               onChange={() => this.setState({experience: this.value})}
                                               placeholder="0-2 years"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-xl-1 mb-9">
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label htmlFor="namedash"
                                               className="d-block text-black-2 font-size-4                                                                                    font-weight-semibold mb-4"><i
                                            className="fa                                                                                   fa-birthday-cake mr-2"/>Date
                                            of Birth
                                        </label>
                                        <input type="text"
                                               className="form-control h-px-48"
                                               id="namedash"
                                               value={this.state.dateOfBirth}
                                               onChange={() => this.setState({dateOfBirth: this.value})}
                                               placeholder="May 21, 1998"/>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label htmlFor="namedash"
                                               className="d-block text-black-2 font-size-4                                                                                    font-weight-semibold mb-4"><i
                                            className="fa                                                                                   fa-phone mr-2"/>Mobile
                                            Number
                                        </label>
                                        <input type="text"
                                               className="form-control h-px-48"
                                               id="namedash"
                                               value={this.state.contactNumber1}
                                               onChange={() => this.setState({contactNumber1: this.value})}
                                               placeholder="+91 88888 99999"/>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label htmlFor="namedash"
                                               className="d-block text-black-2 font-size-4                                                                                    font-weight-semibold mb-4"><i
                                            className="fa                                                                                   fa-phone-alt mr-2"/>Additional
                                            Number
                                        </label>
                                        <input type="text"
                                               className="form-control h-px-48"
                                               id="namedash"
                                               value={this.state.contactNumber2}
                                               onChange={() => this.setState({contactNumber2: this.value})}
                                               placeholder="+91 99999 88888"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-xl-1 mb-9">
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label htmlFor="namedash"
                                               className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"><i
                                            className="fa fa-briefcase mr-2"/>Current
                                            Profile</label>
                                        <input type="text"
                                               className="form-control h-px-48"
                                               id="namedash"
                                               value={this.state.currentProfile}
                                               onChange={() => this.setState({currentProfile: this.value})}
                                               placeholder="e.g  Senior Software engineer"/>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label htmlFor="namedash"
                                               className="d-block text-black-2 font-size-4                                                                                    font-weight-semibold mb-4"><i
                                            className="fa                                                                                   fa-building mr-2"/>Industry
                                        </label>
                                        <input type="text"
                                               className="form-control h-px-48"
                                               id="namedash" value={this.state.industry}
                                               onChange={() => this.setState({industry: this.value})}
                                               placeholder="E.g Mechanical Industry"/>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label htmlFor="namedash"
                                               className="d-block text-black-2 font-size-4                                                                                    font-weight-semibold mb-4"><i
                                            className="fa                                                                                   fa-money-check-alt mr-2"/>Current
                                            Salary
                                        </label>
                                        <input type="text"
                                               className="form-control h-px-48"
                                               id="namedash"
                                               value={this.state.currentSalary}
                                               onChange={() => this.setState({currentSalary: this.value})}
                                               placeholder="10-15k"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-xl-1 mb-9">
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label htmlFor="namedash"
                                               className="d-block text-black-2 font-size-4                                                                                    font-weight-semibold mb-4"><i
                                            className="fa                                                                                   fa-map-marker-alt mr-2"/>Current
                                            Location
                                        </label>
                                        <input type="text"
                                               className="form-control h-px-48"
                                               id="namedash"
                                               value={this.state.curLocation}
                                               onChange={() => this.setState({curLocation: this.value})}
                                               placeholder="New York"/>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label htmlFor="namedash"
                                               className="d-block text-black-2 font-size-4                                                                                    font-weight-semibold mb-4"><i
                                            className="fa                                                                                   fa-home mr-2"/>Current
                                            Organization
                                        </label>
                                        <input type="text"
                                               className="form-control h-px-48"
                                               id="namedash" value={this.state.curOrg}
                                               onChange={() => this.setState({curOrg: this.value})}
                                               placeholder="E.g Apple"/>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label htmlFor="namedash"
                                               className="d-block text-black-2 font-size-4                                                                                    font-weight-semibold mb-4"><i
                                            className="fa                                                                                   fa-question mr-2"/>Notice
                                            Period
                                        </label>
                                        <input type="text"
                                               className="form-control h-px-48"
                                               id="namedash"
                                               value={this.state.noticePeriod}
                                               onChange={() => this.setState({noticePeriod: this.value})}
                                               placeholder="1 month"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-xl-1 mb-9">
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label htmlFor="namedash"
                                               className="d-block text-black-2 font-size-4                                                                                    font-weight-semibold mb-4"><i
                                            className="fa                                                                                   fa-user-graduate mr-2"/>Highest
                                            Qualification
                                        </label>
                                        <input type="text"
                                               className="form-control h-px-48"
                                               id="namedash"
                                               value={this.state.highestQual}
                                               onChange={() => this.setState({highestQual: this.value})}
                                               placeholder="E.g Masters in Computer Science"/>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label htmlFor="namedash"
                                               className="d-block text-black-2 font-size-4                                                                                    font-weight-semibold mb-4"><i
                                            className="fa                                                                                   fa-map-pin mr-2"/>Preferred
                                            Location
                                        </label>
                                        <input type="text"
                                               className="form-control h-px-48"
                                               id="namedash"
                                               value={this.state.prefLocation}
                                               onChange={() => this.setState({prefLocation: this.value})}
                                               placeholder="E.g London, Hongkong"/>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label htmlFor="namedash"
                                               className="d-block text-black-2 font-size-4                                                                                    font-weight-semibold mb-4"><i
                                            className="fa                                                                                   fa-laptop mr-2"/>Job
                                            Type
                                        </label>
                                        <input type="text"
                                               className="form-control h-px-48"
                                               id="namedash" value={this.state.jobType}
                                               onChange={() => this.setState({jobType: this.value})}
                                               placeholder="E.g Part-time, Full-time"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group position-relative">
                                        <label htmlFor="namedash"
                                               className="d-block text-black-2 font-size-4                                                                                    font-weight-semibold mb-4"><i
                                            className="fa                                                                                   fa-tasks mr-2"/>Skills
                                        </label>
                                        <input type="text"
                                               className="form-control h-px-48"
                                               id="namedash" value={this.state.skills}
                                               onChange={() => this.setState({skills: this.value})}
                                               placeholder="E.g Java, Python, R, Ruby, Js"/>

                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group position-relative">
                                        <label htmlFor="namedash"
                                               className="d-block text-black-2 font-size-4                                                                                    font-weight-semibold mb-4"><i
                                            className="fab fa-linkedin mr-2"/>Linkedin
                                            Profile Url
                                        </label>
                                        <input type="text"
                                               className="form-control h-px-48"
                                               id="namedash" value={this.state.linkedin}
                                               onChange={() => this.setState({linkedin: this.value})}
                                               placeholder="E.g https://www.linkedin.com/"/>
                                    </div>
                                </div>
                            </div>
                            <h5 className="text-green">Work Experience 1</h5>
                            <div className="row mb-xl-1 mb-9">

                                <div className="col-lg-3">
                                    <div className="form-group">
                                        <label htmlFor="namedash"
                                               className="d-block text-black-2 font-size-4                                                                                    font-weight-semibold mb-4"><i
                                            className="fa                                                                                   fa-user-graduate mr-2"/>Position
                                            Name
                                        </label>
                                        <input type="text"
                                               className="form-control h-px-48"
                                               id="namedash"
                                               value={this.state.nameExperience1}
                                               onChange={() => this.setState({nameExperience1: this.value})}
                                               placeholder="E.g Developer"/>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="form-group">
                                        <label htmlFor="namedash"
                                               className="d-block text-black-2 font-size-4                                                                                    font-weight-semibold mb-4"><i
                                            className="fa                                                                                   fa-map-pin mr-2"/>Organization
                                            Name
                                        </label>
                                        <input type="text"
                                               className="form-control h-px-48"
                                               id="namedash"
                                               value={this.state.orgExpName1}
                                               onChange={() => this.setState({orgExpName1: this.value})}
                                               placeholder="E.g London, Hongkong"/>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="form-group">
                                        <label htmlFor="namedash"
                                               className="d-block text-black-2 font-size-4                                                                                    font-weight-semibold mb-4"><i
                                            className="fa                                                                                   fa-calendar-alt mr-2"/>Starting
                                            year
                                        </label>
                                        <input type="date"
                                               className="form-control h-px-48"
                                               id="namedash" value={this.state.jobType}
                                               onChange={() => this.setState({jobType: this.value})}
                                               placeholder="E.g Part-time, Full-time"/>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="form-group">
                                        <label htmlFor="namedash"
                                               className="d-block text-black-2 font-size-4                                                                                    font-weight-semibold mb-4"><i
                                            className="fa                                                                                   fa-calendar-alt mr-2"/>Ending
                                            Year
                                        </label>
                                        <input type="date"
                                               className="form-control h-px-48"
                                               id="namedash" value={this.state.jobType}
                                               onChange={() => this.setState({jobType: this.value})}
                                               placeholder="E.g Part-time, Full-time"/>
                                    </div>
                                </div>
                            </div>
                            <h5 className="text-green">Work Experience 2</h5>
                            <div className="row mb-xl-1 mb-9">

                                <div className="col-lg-3">
                                    <div className="form-group">
                                        <label htmlFor="namedash"
                                               className="d-block text-black-2 font-size-4                                                                                    font-weight-semibold mb-4"><i
                                            className="fa                                                                                   fa-user-graduate mr-2"/>Position
                                            Name
                                        </label>
                                        <input type="text"
                                               className="form-control h-px-48"
                                               id="namedash"
                                               value={this.state.nameExperience2}
                                               onChange={() => this.setState({nameExperience2: this.value})}
                                               placeholder="E.g Designer"/>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="form-group">
                                        <label htmlFor="namedash"
                                               className="d-block text-black-2 font-size-4                                                                                    font-weight-semibold mb-4"><i
                                            className="fa                                                                                   fa-map-pin mr-2"/>Organization
                                            Name
                                        </label>
                                        <input type="text"
                                               className="form-control h-px-48"
                                               id="namedash"
                                               value={this.state.orgExpName2}
                                               onChange={() => this.setState({orgExpName2: this.value})}
                                               placeholder="E.g London, Hongkong"/>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="form-group">
                                        <label htmlFor="namedash"
                                               className="d-block text-black-2 font-size-4                                                                                    font-weight-semibold mb-4"><i
                                            className="fa                                                                                   fa-calendar-alt mr-2"/>Starting
                                            year
                                        </label>
                                        <input type="date"
                                               className="form-control h-px-48"
                                               id="namedash" value={this.state.jobType}
                                               onChange={() => this.setState({jobType: this.value})}
                                               placeholder="E.g Part-time, Full-time"/>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="form-group">
                                        <label htmlFor="namedash"
                                               className="d-block text-black-2 font-size-4                                                                                    font-weight-semibold mb-4"><i
                                            className="fa                                                                                   fa-calendar-alt mr-2"/>Ending
                                            Year
                                        </label>
                                        <input type="date"
                                               className="form-control h-px-48"
                                               id="namedash" value={this.state.jobType}
                                               onChange={() => this.setState({jobType: this.value})}
                                               placeholder="E.g Part-time, Full-time"/>
                                    </div>
                                </div>
                            </div>
                            <h5 className="text-green">Qualification Details 1</h5>
                            <div className="row mb-xl-1 mb-9">

                                <div className="col-lg-3">
                                    <div className="form-group">
                                        <label htmlFor="namedash"
                                               className="d-block text-black-2 font-size-4                                                                                    font-weight-semibold mb-4"><i
                                            className="fa                                                                                   fa-user-graduate mr-2"/>Name
                                            of the course
                                        </label>
                                        <input type="text"
                                               className="form-control h-px-48"
                                               id="namedash"
                                               value={this.state.studyName1}
                                               onChange={() => this.setState({studyName1: this.value})}
                                               placeholder="E.g Masters in Computer Science"/>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="form-group">
                                        <label htmlFor="namedash"
                                               className="d-block text-black-2 font-size-4                                                                                    font-weight-semibold mb-4"><i
                                            className="fa                                                                                   fa-map-pin mr-2"/>College/
                                            University Name
                                        </label>
                                        <input type="text"
                                               className="form-control h-px-48"
                                               id="namedash"
                                               value={this.state.clgName1}
                                               onChange={() => this.setState({clgName1: this.value})}
                                               placeholder="E.g London, Hongkong"/>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="form-group">
                                        <label htmlFor="namedash"
                                               className="d-block text-black-2 font-size-4                                                                                    font-weight-semibold mb-4"><i
                                            className="fa                                                                                   fa-calendar-alt mr-2"/>Starting
                                            year
                                        </label>
                                        <input type="date"
                                               className="form-control h-px-48"
                                               id="namedash" value={this.state.jobType}
                                               onChange={() => this.setState({jobType: this.value})}
                                               placeholder="E.g Part-time, Full-time"/>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="form-group">
                                        <label htmlFor="namedash"
                                               className="d-block text-black-2 font-size-4                                                                                    font-weight-semibold mb-4"><i
                                            className="fa                                                                                   fa-calendar-alt mr-2"/>Ending
                                            Year
                                        </label>
                                        <input type="date"
                                               className="form-control h-px-48"
                                               id="namedash" value={this.state.jobType}
                                               onChange={() => this.setState({jobType: this.value})}
                                               placeholder="E.g Part-time, Full-time"/>
                                    </div>
                                </div>

                            </div>
                            <h5 className="text-green">Qualification Details 2</h5>
                            <div className="row mb-xl-1 mb-9">

                                <div className="col-lg-3">
                                    <div className="form-group">
                                        <label htmlFor="namedash"
                                               className="d-block text-black-2 font-size-4                                                                                    font-weight-semibold mb-4"><i
                                            className="fa                                                                                   fa-user-graduate mr-2"/>Name
                                            of the course
                                        </label>
                                        <input type="text"
                                               className="form-control h-px-48"
                                               id="namedash"
                                               value={this.state.studyName2}
                                               onChange={() => this.setState({studyName2: this.value})}
                                               placeholder="E.g Masters in Computer Science"/>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="form-group">
                                        <label htmlFor="namedash"
                                               className="d-block text-black-2 font-size-4                                                                                    font-weight-semibold mb-4"><i
                                            className="fa                                                                                   fa-map-pin mr-2"/>College/
                                            University Name
                                        </label>
                                        <input type="text"
                                               className="form-control h-px-48"
                                               id="namedash"
                                               value={this.state.clgName2}
                                               onChange={() => this.setState({clgName2: this.value})}
                                               placeholder="E.g London, Hongkong"/>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="form-group">
                                        <label htmlFor="namedash"
                                               className="d-block text-black-2 font-size-4                                                                                    font-weight-semibold mb-4"><i
                                            className="fa                                                                                   fa-calendar-alt mr-2"/>Starting
                                            year
                                        </label>
                                        <input type="date"
                                               className="form-control h-px-48"
                                               id="namedash" value={this.state.jobType}
                                               onChange={() => this.setState({jobType: this.value})}
                                               placeholder="E.g Part-time, Full-time"/>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="form-group">
                                        <label htmlFor="namedash"
                                               className="d-block text-black-2 font-size-4                                                                                    font-weight-semibold mb-4"><i
                                            className="fa                                                                                   fa-calendar-alt mr-2"/>Ending
                                            Year
                                        </label>
                                        <input type="date"
                                               className="form-control h-px-48"
                                               id="namedash" value={this.state.jobType}
                                               onChange={() => this.setState({jobType: this.value})}
                                               placeholder="E.g Part-time, Full-time"/>
                                    </div>
                                </div>
                            </div>
                            <input type="button" value="Update Profile"
                                   className="btn btn-green btn-h-60 text-white min-width-px-210 rounded-5 text-uppercase"/>
                        </fieldset>
                    </form>
                </div>
            </div>


        );
    }
}

export default editCandidateProfile;