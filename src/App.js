import React, { Component } from 'react';
import {
  Header,
  Footer,
  Work,
  About,
  Contact,
  Slider
} from './components/';
import date from './contacts/';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import WOW from 'wowjs';
import 'animate.css';
import {Link as LinkScroll} from 'react-scroll';
import 'simplebar/dist/simplebar.min.css';
import WheelIndicator from 'wheel-indicator';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      result: false,
      img: new Image(),
      loaded: false,
      error: false,
      headerH: 0,
      worksH: 0,
      scrolling: '',
      videoLoad: this.fetchVideo('http://drive.google.com/uc?export=view&id=1FOsvwwCv5qSzEhkRQ-2_rOsNmRArk4rm')
    }
    this.handleScroll = this.handleScroll.bind(this);
    this.wheeHandle = this.wheeHandle.bind(this);
    this.fetchVideo = this.fetchVideo.bind(this);
  }


  fetchVideo(src) {
    return new Promise(function(resoleve,reject) {
      let video = document.createElement('video');
      video.src = src;

      video.onload = () => resoleve(video);
      
    })
  }


  componentDidMount() {
    this.setState({
      result: date
    })

    //menu scroll
    window.addEventListener('scroll', this.handleScroll);

    new WOW.WOW({
      live: false
    }).init();

    const indicator = new WheelIndicator({
      elem: document.querySelector('body'),
      callback: (e) => {
         return this.setState({
           scrolling: e.direction
         })
      },
      preventMouse: false
    })

    this.state.videoLoad.then(
      video => {}
    )

  }
  
  wheeHandle(e,scroll) {
      
  }

  componentWillUnmount() {
    //menu scroll
    window.removeEventListener('scroll', this.handleScroll)
  }

  //menu scroll
  handleScroll(event) {
    let scrollTop = window.scrollY;

    this.setState({
      scrollPos: scrollTop
    })
  }

  componentDidUpdate() {
    const {scrollPos,scrolling} = this.state;
    const header = document.querySelector('.header__menu');
    const about_pic = document.querySelectorAll(".about__picture")[0];

    
    if (document.querySelectorAll(".enable")[0]) {
      let active = document.querySelectorAll('.enable div')[0];
      active.id = "active";
    }else {
      
    }

    if (scrollPos === 0 || scrollPos === undefined) {
      header.id = "header__menu__scroll";
    }else {
      if (scrolling === "up") {
        header.id = 'header__menu__scrolled';
      }else {
        header.id = "header__menu__hide"
      }
    }
  }

  render() { 
    const {result} = this.state;
    return (
      <div className="App">
        <Router>
          <Header show={'on'} scrollToBottom={this.scrollToBottom} />
            <div id="header__view" className="container__max header__view">
              <h1 className="animate__animated animate__fadeInDown">hi there!</h1>
              <p className="animate__animated animate__fadeInUp">My name is Ilya. I am a student  and <br/> i want to be a frontend developer</p>
              <LinkScroll activeClass="active"  to="works" spy={true} smooth={true} duration={1000}><button onClick={this.props.scrollToBottom} className="scrollBtn"><i className="fas fa-arrow-down"></i></button></LinkScroll>
            </div>
            {
              <section className="works" id="works">
                {(result) ? result.map(item => {
                  return <Work key={item.id} id={item.id} img={item.img} src={item.src} tegs={item.tegs} name={item.name} description={item.description} year={item.year} />
                }): "False"}
                <Slider />
              </section>
            }
            <About />
            {/* <Contact /> */}
          <Footer />
        </Router>
      </div>
    );
  }
}



            
export default App;
