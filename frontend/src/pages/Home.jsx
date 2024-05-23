import React from "react";
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import wineImg from "../assets/images/wine-img01.jpg";
import wineImg02 from "../assets/images/wine-img02.jpg";
import wineVideo from "../assets/images/wine-video.mp4";
import worldImg from "../assets/images/world.png";
import experienceImg from "../assets/images/experience.png";
import Subtitle from "./../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";

const Home = () => {
  return (
    <>
      {/* ========== wine section start =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="4">
              <div className="wine__content">
                <div className="wine__subtitle d-flex align-items-center ">
                  <Subtitle subtitle={"Visit Mendoza"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Wine Route <span className="highlight"> Mendoza</span>
                </h1>
                <p>
                Welcome to our Mendoza Wine Tours website, where we offer an unforgettable experience for wine enthusiasts from around the world. Our tours give you the opportunity to explore the rich history and culture of Argentina's wine region, Mendoza.
                </p>
                
              </div>
            </Col>

            <Col lg="2">
              <div className="wine__img-box">
                <img src={wineImg} alt="" />
              </div>
            </Col>
            <Col lg="4">
              <div className="wine__img-box wine__video-box mt-4">
                <video src={wineVideo} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="wine__img-box mt-5">
                <img src={wineImg02} alt="" />
              </div>
            </Col>
     

     
            
            <SearchBar />
          </Row>
        </Container>
      </section>
      {/* ========== wine section start =========== */}

      {/* ============ featured tour section start ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our featured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/* ============ featured tour section end ============ */}

      {/* ============ experience section start ============= */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Our experience"} />

                <h2>
                  Our experience counts
                </h2>
                <p>
                Wine Route Mza offers a unique and memorable experience for wine enthusiasts. The user-friendly interface of the app provides extensive information of wine-tasting experiences, making it easy to find the perfect tour. 
                </p>
                <p>
                WineRouteMza is one of the best wine tour booking apps available, providing users with all the necessary tools for an unforgettable wine-tasting experience in Mendoza.
                </p>
                <p>
                 We offer a range of Mendoza wine tours, each tailored to suit your preferences. Our itinerary takes you to some of the most renowned wineries in the region. You'll have the chance to tour the vineyards, learn about the grape varietals grown in the region and, of course, sample some of the finest wines produced in Mendoza.
                </p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5 ">
                <div className="counter__box">
                  <span>+1500</span>
                  <h6>Associated wineries</h6>
                </div>
                <div className="counter__box">
                  <span>+4000</span>
                  <h6>Tours completed</h6>
                </div>
                
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ============ experience section end ============= */}

      {/* ============ testimonial section start ========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Our customers"} />
              <h2 className="testimonial__title">What our customers say about us</h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ============ testimonial section end ========== */}
      <Newsletter />
    </>
  );
};

export default Home;
