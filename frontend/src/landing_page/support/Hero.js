import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4> <a href="" class="supportLinks" >Track Tickets</a>
      </div>
      <div className="row p-5 " id="heroContent">
        <div className="col-6 p-3">
          <h1 className="fs-3 mb-4">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O" class="search-box"/>
          <br />
          <a href="" class="supportLinks" >Track account opening, </a>
          <a href="" class="supportLinks" >Track segment activation, </a>
          <a href="" class="supportLinks" >Intraday margins, </a>
          <a href="" class="supportLinks" >Kite user manual</a>
        </div>
        <div className="col-2"></div>
        <div className="col-4 p-3">
          <h1 className="fs-3 mb-4">Featured</h1>
          <ol>
            <li>
              <a href="" class="supportLinks" >Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="" class="supportLinks" >Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;