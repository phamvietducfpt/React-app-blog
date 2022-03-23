import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/HomeAbout.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'
function HomeAbout() {
    const img = require("../assets/images/background-image.jpg")
    const [myName, setMyName] = useState("Viet Duc")
    const [des_myInfor, setDes_myInfor] = useState("Some example text some example text. John Doe is an architect and engineer")
    return (
        <>
            <div className="container-about">
                <div className="card container-info-about">
                    <img className="card-img-top img-about" src={img} alt="image-about" />
                    <div className="card-body">
                        <a className="card-title" href="#">About me</a>
                        <p className="card-text" >{des_myInfor}</p>
                    </div>
                </div>
                <div className="container-home-instagram">
                    <p className="insta-title">
                        Instagram.
                    </p>
                    <div className="flex-img-instagram">
                        <img className="img-instagram" src={img} alt="image-about" />
                        <img className="img-instagram" src={img} alt="image-about" />
                        <img className="img-instagram" src={img} alt="image-about" />
                        <img className="img-instagram" src={img} alt="image-about" />
                    </div>
                </div>
                <div className="container-info-social">
                    <p className="title-followMe">Follow me</p>
                    <div className="flex-container-social">
                        <div className="social-1"></div>
                        <div className="social-2"></div>
                        <div className="social-3"></div>
                        <div className="social-4"></div>
                    </div>
                </div>
                <div className="container-tag">
                    <p className="tag-title">
                        Tags
                    </p>
                    <div class="flex-container-tag">
                        <a className="tag-1">Tag1</a>
                        <a className="tag-2">Tag2</a>
                        <a className="tag-3">Tag3</a>
                        <a className="tag-4">Tag4</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomeAbout;