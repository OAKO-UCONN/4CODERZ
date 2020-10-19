import React from "react";
import Header from "../components/Header";
import Wrapper from "../components/Wrapper";
import Card from "../components/Card";
import Col from "../components/Col";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Row from "../components/Row";
import Container from "../components/Container";
import Jumbotron from "../components/Jumbotron";

import YelpApp from "../YelpApp";




function France() {
    return (
      <div>
        <Header />
        <Jumbotron />  
        <Container>

        <Col size="lg-2 sm-12">
        </Col>

        <Col size="lg-10 sm-12">
        <h2 className="page-title">France</h2>
          <hr />
          <p className="description">Featured
          <a href="https://www.worldwidewinetours.com/france/"
            rel="noopener noreferrer"
            target="_blank">
            {" "}
            wines
            </a>{" "}
            from France
            </p>
        </Col>
        </Container>

        <Container>
            <p>Wine cards</p>
        </Container>
        
        <Container>
   
      <YelpApp />
      
        </Container>

        <Footer />
      </div>
    );
}
 
export default France;