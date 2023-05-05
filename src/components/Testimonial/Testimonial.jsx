import React from "react";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <div>
      <div className="testimonials-clean">
        <div className="container">
          <div className="intro">
            <h2
              style={{ color: "#34BF49", fontWeight: "bold" }}
              className="text-center"
            >
              What Our Customers Are Saying
            </h2>
            <p className="text-center">
              Our customers love us! Read what they have to say below. Aliquam
              sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet
              vitae.
            </p>
          </div>
          <div className="row people">
            <div className="col-md-6 col-lg-4 item">
              <div className="box">
                <p className="description">
                  I tried the Classic Margherita Pizza recipe and it was
                  amazing! The crust was crispy and the cheese was perfectly
                  melted. I can't wait to try more recipes from this website!
                </p>
              </div>
              <div className="author">
                <img
                  style={{ height: "40px", width: "40px" }}
                  className="rounded-circle"
                  src="https://i.ibb.co/NNgMpXX/portrait-elderly-chef-dressed-uniform-with-crossed-arms-against-dark-background.jpg"
                />
                <h5 className="name">Ben Johnson</h5>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 item">
              <div className="box">
                <p className="description">
                  The Roasted Garlic Hummus recipe is my new favorite snack!
                  It's so easy to make and tastes delicious.
                </p>
              </div>
              <div className="author">
                <img
                  style={{ height: "40px", width: "40px" }}
                  className="rounded-circle"
                  src="https://i.ibb.co/NNgMpXX/portrait-elderly-chef-dressed-uniform-with-crossed-arms-against-dark-background.jpg"
                />
                <h5 className="name">Carl Kent</h5>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 item">
              <div className="box">
                <p className="description">
                  I love the variety of recipes on this website. I've tried
                  everything from appetizers to desserts and they've all been
                  delicious!
                </p>
              </div>
              <div className="author">
                <img
                  style={{ height: "40px", width: "40px" }}
                  className="rounded-circle"
                  src="https://i.ibb.co/NNgMpXX/portrait-elderly-chef-dressed-uniform-with-crossed-arms-against-dark-background.jpg"
                />
                <h5 className="name">Emily Clark</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
