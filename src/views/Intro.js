import React from 'react';
import '../styles/intro.scss'
import { Navigate } from 'react-router-dom';
import Countdown from '../components/countdown'
class Intro extends React.Component {
    state = {
        redirect: false,
        time: 5000,

    }
    componentDidMount() {
        this.id = setTimeout(() => this.setState({ redirect: true }), this.state.time)
    }
    componentWillUnmount() {
        clearTimeout(this.id)
        return () => clearInterval();
    }
    render() {
        const img = require('../assets/images/background-image.jpg');
        const introStyle = {
            backgroundImage: `url(${img})`
        }
        return this.state.redirect
            ? <Navigate to="/home" />
            : (
                <div className="background-image" style={introStyle}>
                    <div className="loadding">
                        <Countdown seconds={this.state.time} />
                        <h3 className="loadding-text"><span>Redirect to homepage after </span><span className="time-load"></span><span className="seconds">s</span></h3>
                    </div>
                    <div className="box-info">
                        <div className="box-info-inner">
                            <div className="hoverBtn"></div>
                            <div className="hoverBtn-bottom"></div>
                            <div className="wellcome">
                                <h2 className="text-wellcome"><span>Welcomes to</span></h2>
                            </div>
                            <div className="main-title">
                                <h1 className="text-main-title"><span>A "autistic" place of my own</span></h1>
                            </div>
                            <div className="des-title">
                                <a className="destitle-text"><span>Make you know me better and come out with me</span></a>
                            </div>
                            <div className="link-website">
                                <a className="link-text"><span>VIETDUCBLOG.ME</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            )
    }
}
export default Intro;