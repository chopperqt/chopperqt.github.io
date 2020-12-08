import React, { Component } from 'react';
import {Header,Footer,Work,Contact} from './components/';
import date from './contacts/';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from 'react-router-dom';
import {Link as LinkScroll} from 'react-scroll';

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
      scrollBtn: 0,
      heightToScroll: 0
    }
    this.handleScroll = this.handleScroll.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  componentDidMount() {
    const {scrollPos,heightToScroll} = this.state;
    const scrollBtn_ = document.querySelectorAll('.scrollBtn')[0];

    setTimeout(() => {
      this.setState({result: date})
    },1000)
    window.addEventListener('scroll', this.handleScroll)

    this.setState({
      scrollBtn: scrollBtn_
    })
  }

  scrollToBottom() {
    const {scrollPos} = this.state;
    const header = document.querySelector('.header');
    console.log(header.scrollTop)
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
    const {scrollPos,heightToScroll} = this.state;
    const header = document.querySelector('.header__menu');
    if (scrollPos > 60) {
      header.id = "header__menu__scrolled";
    }else {
      header.id = "header__menu__scroll"
    }
  }

  render() { 
    const {result, scrollPos} = this.state;
    return (
        <div className="App">
          <Router>
            <Header scrollToBottom={this.scrollToBottom} />
            {
              (result) ? (
                <Switch>
                  <Route path="/:id" children={<Child />} />
                  <Route path="/contact">
                    <Contact />
                  </Route>
                  <Route exact path="/about">
                    <p>about</p>
                  </Route>
                  <Route path="/">
                    <section className="works" id="works">
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
 
function Child() {
  let {id} = useParams();
  return (
      <div>
          <h3>ID: {id}</h3>
      </div>
  )
}


            
export default App;
