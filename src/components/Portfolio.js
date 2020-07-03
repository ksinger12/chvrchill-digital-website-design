import React, { Component } from "react";
import ModalImage from "react-modal-image"; //<ModalImage small={projectImage} large={projectImage} alt=""/>;
import Carousel, { Modal, ModalGateway } from "react-images";

class Portfolio extends Component {
  state = { modalIsOpen: false };
  toggleModal = () => {
    this.setState((state) => ({ modalIsOpen: !state.modalIsOpen }));
  };
  render() {
    const { modalIsOpen } = this.state;
    if (this.props.data) {
      var projectsCity = this.props.data.images.map(function (projects) {
        var projectImage = projects.image; //'images/portfolio/'+
        if (projects.category === "City") {
          return (
            <div key={projects.title} className="columns portfolio-item">
              <div className="item-wrap ">
                <a href={projectImage}>
                  <img alt={projects.title} src={projectImage} />
                </a>
              </div>
            </div>
          );
        }
      });
      var projectsNature = this.props.data.images.map(function (projects) {
        var projectImage = projects.image; //'images/portfolio/'+
        if (projects.category === "Nature") {
          return (
            <div key={projects.title} className="columns portfolio-item">
              <div className="item-wrap">
                <a href={projectImage}>
                  <img alt={projects.title} src={projectImage} />{" "}
                </a>
              </div>
            </div>
          );
        }
      });

      var projectsPeople = this.props.data.images.map(function (projects) {
        var projectImage = projects.image; //'images/portfolio/'+
        if (projects.category === "People") {
          return (
            <div key={projects.title} className="columns portfolio-item">
              <div className="item-wrap">
                <a href={projectImage}>
                  <img alt={projects.title} src={projectImage} />{" "}
                </a>
              </div>
            </div>
          );
        }
      });
    }

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Portfolio</h1>

            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              <h1>City</h1>
              {projectsCity}

              <br />
              <h1 style={{ margin: "745px 0px 50px 0px" }}>Nature</h1>
              {projectsNature}
              <br />
              <h1 style={{ margin: "745px 0px 50px 0px" }}>People</h1>
              {projectsPeople}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
