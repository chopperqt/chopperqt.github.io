import React, { Component } from 'react';
import {Header,Footer,Work,Contact} from './components/';
import date from './contacts/';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      result: false,
      img: new Image(),
      loaded: false,
      error: false,
      scrollPos: 0,
    }
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    const {scrollPos} = this.state;
    setTimeout(() => {
      this.setState({result: date})
    },1000)
    window.addEventListener('scroll', this.handleScroll)



  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }
  handleScroll(event) {
    let scrollTop = window.scrollY;

    this.setState({
      scrollPos: scrollTop
    })
  }



  componentDidUpdate() {
    const {scrollPos} = this.state;
    let menu = document.querySelector("#scrollMenu");
    let parallax = document.querySelectorAll('.header__preview')[0];

    const parallaxOptions = 200;

    (scrollPos > 150) ? menu.style.animation = 'opacityIn .8s forwards' : menu.style.animation = 'opacityOut .5s forwards';
    
    

    console.log(scrollPos)
    //parallax.style.backgroundPosition = (scrollPos < 200) ? '0 -200px' : '0 ' + ((-parallaxOptions + -scrollPos) / 2)+'px' ;
    parallax.style.backgroundPosition = '0 '+ -scrollPos / 2+'px'; 
    //'0 '+ (scrollPos / 5 * -1)+'px'
  }

  render() { 
    const {result, scrollPos} = this.state;
    console.log(scrollPos)
    return (
        <div className="App">
          <Router>
            <Header />
            {
              (result) ? (
                <Switch>
                  <Route path="/contact">
                    <Contact />
                  </Route>
                  <Route exact path="/about">
                    <p>about</p>
                  </Route>
                  <Route path="/">
                    <section className="works">
                      <div className="container">
                        {(result) ? result.map(item => {
                          return <Work key={item.id} id={item.id} img={item.img} src={item.src} tegs={item.tegs} name={item.name} description={item.description} />
                        }): "False"}
                      </div>
                    </section>
                  </Route>
                </Switch>
              ) :  (
                <div className="container__max preloader">
                  <div class="lds-facebook"><div></div><div></div><div></div></div>
                </div>
              )
            }
          <Footer />
        </Router>
      </div>
    );
  }
}
 


            
export default App;
