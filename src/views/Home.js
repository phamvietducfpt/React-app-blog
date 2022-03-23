import React from "react";
import '../App'
import '../styles/home.scss'
import Header from '../components/header'
import SimpleSlider from '../components/slider'
import Daily from '../components/daily'
import HomeAbout from '../components/HomeAbout'
import HomeFavorite from '../components/HomeFavorite'
function Home() {
    return (
        <>
            <Header></Header>
            <SimpleSlider></SimpleSlider>
            <div className="container container-content">
                <div className="container-content-left">
                    <Daily></Daily>
                    <HomeFavorite></HomeFavorite>
                </div>
                <div className="container-content-right">
                    <HomeAbout></HomeAbout>
                </div>
            </div>
        </>
    )
}
export default Home;