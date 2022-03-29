import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/HomeAbout.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'
function HomeAbout() {
    const img = require("../assets/images/background-image.jpg")
    //fb
    const fb_icon = require("../assets/images/fb_icon.svg").default
    const [fb_link, setFb_link] = useState("https://www.facebook.com/pvducccc")
    //instagram
    const insta_icon = require("../assets/images/insta_icon.svg").default
    const [insta_link, setInsta_link] = useState("https://www.instagram.com/ccudteiv/")
    //tiktok
    const tiktok_icon = require("../assets/images/tiktok_icon.svg").default
    const [tiktok_link, setTiktok_link] = useState("https://www.tiktok.com/@cudteiv")
    //linkedIn
    const linkedIn_icon = require("../assets/images/linkedIn_icon.svg").default
    const [linkedIn_link, setLinkedIn_link] = useState("http://linkedin.com/in/việt-đức-phạm-5b8808233")
    //about me
    const [myName, setMyName] = useState("Viet Duc")
    const [des_myInfor, setDes_myInfor] = useState("Some example text some example text. John Doe is an architect and engineer")
    //Social me
    const [social_1, setSocial_1] = useState(
        <div className="social-1" ><a className="social-1-icon" href={fb_link} target="_blank" rel="noopener noreferrer"><img className="social-1-img" src={fb_icon} alt="fb_icon" /></a></div>
    )
    const [social_2, setSocial_2] = useState(
        <div className="social-2"><a className="social-2-icon" href={insta_link} target="_blank" rel="noopener noreferrer"><img className="social-2-img" src={insta_icon} alt="insta_icon" /></a></div>
    )
    const [social_3, setSocial_3] = useState(
        <div className="social-3"><a className="social-3-icon" href={tiktok_link} target="_blank" rel="noopener noreferrer"><img className="social-3-img" src={tiktok_icon} alt="insta_icon" /></a></div>
    )
    const [social_4, setSocial_4] = useState(
        <div className="social-4"><a className="social-4-icon" href={linkedIn_link} target="_blank" rel="noopener noreferrer"><img className="social-4-img" src={linkedIn_icon} alt="linkedIn_icon" /></a></div>
    )
    //Tag in web
    const [tag_1, setTag_1] = useState(
        <a className="tag-1">Tag1</a>
    )
    const [tag_2, setTag_2] = useState(
        <a className="tag-2">Tag2</a>
    )
    const [tag_3, setTag_3] = useState(
        <a className="tag-3">Tag3</a>
    )
    const [tag_4, setTag_4] = useState(
        <a className="tag-4">Tag4</a>
    )
    return (
        <>
            <div className="container-about">
                <div className="card container-info-about">
                    <img className="card-img-top img-about" src={img} alt="image-about" />
                    <div className="card-body">
                        <p className="card-title" href="#">About me</p>
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
                        {social_1}
                        {social_2}
                        {social_3}
                        {social_4}
                    </div>
                </div>
                <div className="container-tag">
                    <p className="tag-title">
                        Tags
                    </p>
                    <div className="flex-container-tag">
                        {tag_1}
                        {tag_2}
                        {tag_3}
                        {tag_4}
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomeAbout;