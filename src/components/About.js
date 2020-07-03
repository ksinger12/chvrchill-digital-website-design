import React, { Component } from "react";
//import Header from "./components/Header";<Header data={this.state.resumeData.main} />

class About extends Component {
  render() {
    if (this.props.data) {
      //var profilepic = this.props.data.image;
      var profilepic = "/images/sunrise.png";
      var bio = this.props.data.bio;
    }

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src={profilepic} alt="Churchill" />
          </div>
          <div className="nine columns main-col">
            <h2>ABOUT THE ARTIST: ANDREW CHURCHILL</h2>
            <h6>
              “If you obey all the rules, you miss all the fun”. ―Katharine
              Hepburn
            </h6>

            <p>{bio}</p>

            <div className="row">
              <div className="columns download">
                <p>
                  <a href="#contact" className="button">
                    Conctact Andrew
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
