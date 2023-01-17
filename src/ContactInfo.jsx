import './ContactInfo.css';

function ContactInfo() {
    return (
        <div className="contact-info">
            <h2 className="contact-title">
                Contact Me
            </h2>
            <p className="contact-link">
                <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                    alt="Gmail icon" className="icon" />
                &nbsp;Email:&nbsp;
                <a href="mailto:quick0831.ee11@nycu.edu.tw"
                    target="_blank" rel="noreferrer">
                    quick0831.ee11@nycu.edu.tw
                </a>
                <br/>
                <img src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png"
                    alt="Github icon" className="icon" />
                &nbsp;Github:&nbsp;
                <a href="https://github.com/quick0831"
                    target="_blank" rel="noreferrer">
                    quick0831
                </a>
            </p>
        </div>
    );
}

export default ContactInfo;
