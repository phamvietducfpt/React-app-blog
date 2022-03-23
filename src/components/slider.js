import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/slider.scss'
import Slider from "react-slick";
// import { useState } from 'react'
// import { Fragment } from 'react'
function SimpleSlider() {
    let slider = {
        className: "center",
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 5000,
        cssEase: "linear",
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    // centerMode: false,
                    centerPadding: "0px",
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    centerMode: false,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    // initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const img = require("../assets/images/background-image.jpg")
    return (
        <div className="Header-slide">
            <Slider {...slider}>
                <div className="card img-fluid container-card">
                    <img className="card-img-top" src={img} alt="Card image" />
                    <div className="card-img-overlay">
                        <h4 className="card-title">John Doe</h4>
                        <p className="card-text">Some example text some example text. Some example text some example text. Some example text some example text. Some example text some example text.</p>
                        <a href="#" className="btn btn-primary">See Profile</a>
                    </div>
                </div>
                <div className="card img-fluid  container-card">
                    <img className="card-img-top" src={img} alt="Card image1" />
                    <div className="card-img-overlay">
                        <h4 className="card-title">John Doe</h4>
                        <p className="card-text">Some example text some example text. Some example text some example text. Some example text some example text. Some example text some example text.</p>
                        <a href="#" className="btn btn-primary">See Profile</a>
                    </div>
                </div>
                <div className="card img-fluid container-card">
                    <img className="card-img-top" src={img} alt="Card image2" />
                    <div className="card-img-overlay">
                        <h4 className="card-title">John Doe</h4>
                        <p className="card-text">Some example text some example text. Some example text some example text. Some example text some example text. Some example text some example text.</p>
                        <a href="#" className="btn btn-primary">See Profile</a>
                    </div>
                </div>
                <div className="card img-fluid container-card">
                    <img className="card-img-top" src={img} alt="Card image3" />
                    <div className="card-img-overlay">
                        <h4 className="card-title">John Doe</h4>
                        <p className="card-text">Some example text some example text. Some example text some example text. Some example text some example text. Some example text some example text.</p>
                        <a href="#" className="btn btn-primary">See Profile</a>
                    </div>
                </div>
            </Slider >
        </div>
    )
}
export default SimpleSlider;