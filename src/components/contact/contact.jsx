import './style.css';

const Contact = () => {
    return (
        <section className="contact">
            <div className="container">
                <div className="contact__phone">
                    <i class="fas fa-mobile-alt"></i>
                    <h3>Телефон</h3>
                    <div className="line_"></div>
                    <a href="tel:79656036522">+7(965)603-65-22</a>
                </div>
                <div className="contact__email">
                    <i class="fas fa-envelope"></i>
                    <h3>Почта</h3>
                    <div className="line_"></div>
                    <p>ilua292010@gmail.com</p>
                </div>
            </div>
        </section>
    );
}

export default Contact;