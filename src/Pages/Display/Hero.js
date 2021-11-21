import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Switch, Route } from "react-router";
import Candidates from "../../Components/Candidates/Candidates";
import Reject from "../../Components/Candidates/Reject";
import ShortList from "../../Components/Candidates/ShortList";
import NotFound from "../NotFound";
import ParticularCandidate from "../../Components/UserCard/ParticularCandidate";
const Hero = () => {
  return (
    <div className="container">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Candidates} />
        <Route path="/rejected" exact component={Reject} />
        <Route path="/shortlisted" exact component={ShortList} />
        <Route path="/:id" exact component={ParticularCandidate} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default Hero;
