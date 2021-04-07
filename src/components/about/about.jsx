import './style.css';
import about__pic from './materials/about_pic.jpg'

const About = () => {

    return ( 
        <section id="about"  className="about" >
            <div className="about__picture wow animate__animated animate__bounceInLeft">
                <img src={about__pic} alt="About"/>
            </div>
            <div className="about__text wow animate__animated animate__bounceInRight">
                <div className="about__texts">
                    <h2>About me</h2>
                    {/* <p style={{fontFamily: "system-ui"}}>Свой путь в web-е я начал ещё в школе, мне стало интересно как устроены сайты. Погружаясь всё глубже и глубже я научился верстать простые одностраничные сайты-визитки, так и многостраничные, но я понял что этого мало. По этому я поставил для себя цель стать полноценным frontend-разработчиком. Что бы создавать более много задачные и функциональные сайты.</p> */}
                    <p> :) </p>
                    <h2>Contacts</h2>
                    <div className="contact__socials__about">
                        <span className="wow animate__animated animate__fadeInLeft"><a className="_fa-vk" href="https://vk.com/chopperxx"><i className="fab fa-vk _fa-vk"/></a></span>
                        <span className="wow animate__animated animate__fadeInLeft" data-wow-delay="0.2s"><a className="_fa-teleg" href="https://teleg.run/chopperxx"><i className="fab fa-telegram-plane _fa-teleg" /></a></span>
                        <span className="wow animate__animated animate__fadeInLeft" data-wow-delay="0.4s"><a className="_fa-github" href="https://github.com/chopperqt"><i className="fab fa-github _fa-github" /></a></span>
                        <span className="wow animate__animated animate__fadeInLeft" data-wow-delay="0.6s"><a className="_fa-enve" href="mailto:ilua292010@gmail.com"><i className="fas fa-envelope _fa-enve" /></a></span>
                        <span className="wow animate__animated animate__fadeInLeft" data-wow-delay="0.8s"><a className="_fa-mob" href="tel:+79656036522"><i className="fas fa-mobile-alt _fa-mob" /></a></span>
                </div>
                </div>
            </div>
        </section>
     );
}

export default About;