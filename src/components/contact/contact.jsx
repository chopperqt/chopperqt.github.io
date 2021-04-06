import './style.css';


const Contact = () => {
    return (
        <section className="contacts">
            <div className="container__header">
                <h2>Contacts</h2>
            </div>
            <div className="container">
                <div className="contact__socials">
                    <span className="wow animate__animated animate__fadeInLeft"><a className="_fa-vk" href="https://vk.com/chopperxx"><i className="fab fa-vk _fa-vk"/></a></span>
                    <span className="wow animate__animated animate__fadeInLeft" data-wow-delay="0.2s"><a className="_fa-teleg" href="https://teleg.run/chopperxx"><i className="fab fa-telegram-plane _fa-teleg" /></a></span>
                    <span className="wow animate__animated animate__fadeInLeft" data-wow-delay="0.4s"><a className="_fa-github" href="https://github.com/chopperqt"><i className="fab fa-github _fa-github" /></a></span>
                    <span className="wow animate__animated animate__fadeInLeft" data-wow-delay="0.6s"><a className="_fa-enve" href="mailto:ilua292010@gmail.com"><i className="fas fa-envelope _fa-enve" /></a></span>
                    <span className="wow animate__animated animate__fadeInLeft" data-wow-delay="0.8s"><a className="_fa-mob" href="tel:+79656036522"><i className="fas fa-mobile-alt _fa-mob" /></a></span>
                </div>
            </div> 
        </section>
    );
}

export default Contact;