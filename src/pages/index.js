import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Home from './home';
import companyProfile from "./companyProfile";
import candidateProfile from "./candidateProfile";
import Try from "./try";
import editCandidateProfile from "./editCandidateProfile";
const Webpages = () => {
    return(
        <Router>
            <Route exact path="/" component= {Home} />
            <Route exact path="/companyProfile" component= {companyProfile} />
            <Route exact path="/candidateProfile" component= {candidateProfile} />
            <Route exact path="/test" component= {Try} />
            <Route exact path="/editProfile" component= {editCandidateProfile} />


        </Router>
    );
};
export default Webpages;