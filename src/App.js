import logo from './assets/images/logo.svg';
import './styles/App.scss';
function App() {
  return (
    // <div classNameName="App">
    //   <header classNameName="App-header">
    //     <img src={logo} classNameName="App-logo" alt="logo" />
    //     <p>
    //       <h1>Hello World with Reactjs</h1>
    //     </p>
    //     <a
    //       classNameName="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className="background-image">
      <div className="loadding">
        <h3 className="loadding-text"><span>Redirect to homepage after </span> <span className="time-load">3</span><span className="seconds">s</span></h3>
      </div>
      <div className="box-info">
        <div className="box-info-inner">
          <div className="hoverBtn"></div>
          <div className="hoverBtn-bottom"></div>

          <div className="wellcome">
            <h2 className="text-wellcome"><p>Welcomes to</p></h2>
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
  );
}

export default App;
