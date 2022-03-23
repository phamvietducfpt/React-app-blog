import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/daily.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function Daily() {

    let img_daily_slide = {
        dots: true,
        infinite: true,
        speed: 1600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        cssEase: "linear"
    }
    const img = require("../assets/images/background-image.jpg")
    const img_favorite_icon = require("../assets/images/favorite_icon.svg").default
    return (
        <>
            <div className="Daily-header">
                <a className="Daily-title" href="#"><span>Daily life</span></a>
            </div>
            <div id="#demo" className="carousel slide carousel-daily">
                <div className="carousel-inner  carousel-daily-inner">
                    <div className="carousel-item carousel-daily-item active">
                        <div className="container-slide-daily">
                            <div className="card container-card-daily">
                                <div className="author-profile">
                                    <img className="profile-picture" src={img} alt="profile pic" />
                                    <p className="profile-name" >Viet duc</p>
                                </div>
                                <div className="card-img-top">
                                    <Slider {...img_daily_slide}>
                                        <div>
                                            <img className="img-daily" src={img} alt="image-daily" />
                                        </div>
                                        <div>
                                            <img className="img-daily" src={img} alt="image-daily" />
                                        </div>
                                        <div>
                                            <img className="img-daily" src={img} alt="image-daily" />
                                        </div>
                                    </Slider>
                                    <div className="area-emotions">
                                        <img className="favorite-icons" src={img_favorite_icon} alt="favorite icon" />
                                        <img className="favorite-icons" src={img_favorite_icon} alt="favorite icon" />
                                    </div>
                                </div>
                                <div className="card-body">
                                    <p className="card-text des-profile-daily">Some example text some example text. Some example text some example text. Some example text some example text. Some example text some example text.</p>
                                    <a className="time-profile-daily"><span>Feb 22, 2022</span></a>
                                    <div className="hashtag">
                                        <a className="hashtag-name">Tag1</a>
                                        <a className="hashtag-name">Tag1</a>
                                        <a className="hashtag-name">Tag1</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item carousel-daily-item">
                        <div className="container-slide-daily">
                            <div className="card container-card-daily">
                                <div className="author-profile">
                                    <img className="profile-picture" src={img} alt="profile pic" />
                                    <p className="profile-name" >Viet duc</p>
                                </div>
                                <div className="card-img-top">
                                    <Slider {...img_daily_slide}>
                                        <div>
                                            <img className="img-daily" src={img} alt="image-daily" />
                                        </div>
                                        <div>
                                            <img className="img-daily" src={img} alt="image-daily" />
                                        </div>
                                        <div>
                                            <img className="img-daily" src={img} alt="image-daily" />
                                        </div>
                                    </Slider>
                                    <div className="area-emotions">
                                        <img className="favorite-icons" src={img_favorite_icon} alt="favorite icon" />
                                        <img className="favorite-icons" src={img_favorite_icon} alt="favorite icon" />
                                    </div>
                                </div>
                                <div className="card-body">
                                    <p className="card-text des-profile-daily">Some example text some example text. Some example text some example text. Some example text some example text. Some example text some example text.</p>
                                    <a className="time-profile-daily"><span>Feb 22, 2022</span></a>
                                    <div className="hashtag">
                                        <a className="hashtag-name">Tag1</a>
                                        <a className="hashtag-name">Tag1</a>
                                        <a className="hashtag-name">Tag1</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" >
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" >
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>
        </>
    )
}
export default Daily