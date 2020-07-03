import React, { Component } from "react";

class Commissions extends Component {
  render() {
    return (
      <section id="resume">
        <div className="row education">
          <div className="three-columns-header-col">
            <h1>Public Figures / Personalities</h1>
            <img src="/images/temp1.png" alt="" />
            <h1>Lewis Hamilton</h1>
            <p>
              British racing driver who races in Formula One for Mercedes-AMG
              Petronas Motorsport. A five-time Formula One World Champion, he is
              often considered the best driver of his generation and widely
              regarded as one of the greatest drivers in the history of the
              sport.
            </p>
          </div>
          <br />
          <br />
          <br />
          <div className="three-columns-header-col-1">
            <img src="/images/temp2.png" alt="" style={{ float: "right" }} />
            <h1>Keshia Chanté</h1>
            <p>
              Canadian singer, songwriter, television personality, actress and
              philanthropist. Chanté is a Juno Award winner and a 7-time
              nominee, has won 5 Canadian Urban Music Awards and 2 Canadian
              Radio Music Awards.
            </p>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns"></div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three-columns-header-col-2">
            <h1>Accessory / Lifestyle</h1>
            <p>
              Featured photos include work for MVMT Watches, Waves Apparel,
              Flyte Socks, Daniel Wellington, THE 5TH, and more.
            </p>
            <a href="/images/IMG_8081.jpg">
              <img src="/images/IMG_8081.jpg" alt="" />
            </a>
            <a href="/images/IMG_0026.jpg">
              <img src="/images/IMG_0026.jpg" alt="" />
            </a>
            <a href="/images/IMG_9748.jpg">
              <img src="/images/IMG_9748.jpg" alt="" />
            </a>
            <a href="/images/IMG_3670-2.jpg">
              <img src="/images/IMG_3670-2.jpg" alt="" />
            </a>
          </div>

          <div className="nine columns main-col"></div>
        </div>

        <div className="row skill">
          <div className="three-columns-header-col-2">
            <h1>Interior / Exterior</h1>
            <p>
              Work for API Development Consultants Inc, Clifton Blake Group, and
              more.
            </p>
            <a href="/images/IMG_9749.jpg">
              <img src="/images/IMG_9749.jpg" />
            </a>
            <a href="/images/IMG_9794.jpg">
              <img src="/images/IMG_9794.jpg" />
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Commissions;
