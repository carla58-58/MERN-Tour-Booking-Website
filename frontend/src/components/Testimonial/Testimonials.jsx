import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";
import ava04 from "../../assets/images/ava-4.jpg";


const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
          WineRouteMza is a fantastic wine tour application that provides an exceptional user experience. With a modern and user-friendly interface, the app makes it incredibly easy to browse and book a variety of wine tours within the Mendoza region. I really recommen using WineRouteMza as a booking application!
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Nicolas Telle</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
        The app provides up-to-date information on availability and pricing. The communication with the tour operators is easy and direct, making the user's experience seamless and hassle-free. Overall, WineRouteMza is a must-have for wine enthusiasts looking to explore different vineyards and wineries in the Mendoza region. Highly recommended!
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Carla Brendan</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
        I recently used WineRouteMza wine tours booking application to book a wine tour in my last trip to Mendoza, and I must say, I'm impressed. The app provided an easy-to-use interface with various options of tours in different locations of Mendoza. The app's search function allowed me to filter the options based on my specific criteria, such as location and quantity of persons.

        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Pedro Antonio</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
        The app provided detailed information about the wine tours, including pictures, reviews and ratings, which helped me make an informed decision. Finally, the app provided me with all the necessary information about the wine tours and what is included in each tour. I highly recommend using this wine tours booking application for your next trip!
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava04} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Mariela Nolan</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonials;
