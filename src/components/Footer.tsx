import { FooterWrapper } from "../styles/footer-styled";

function Footer() {
  return (
    <FooterWrapper>
      <div className="main">
      {/* Contact Information */}
      <div className="contact-info">
        <h3 className="contact-headings">Contact Us</h3>
        <p>Name: Dr. Anna Margishvili</p>
        <p>Email: example@email.com</p>
        <p>Phone: +1 234 567 890</p>
        <p>Address: 123 Main St, City, Country</p>
      </div>
      {/* Social Media Icons */}
      <div>
        <h3 className="contact-headings">Follow Me</h3>
        <div className="socials">
        <div className="social-icons">
          <a href="https://www.facebook.com/amrgshv" target="_blank" rel="noopener noreferrer">
            <img src="/assets/icons/facebook.png" alt="facebook" className="icon"/>
          </a>
        </div>
        <div className="social-icons">
          <a href="https://www.instagram.com/amrgshv/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/icons/instagram.png" alt="instagram" className="icon"/>
          </a>
        </div>
        <div className="social-icons">
          <a href="" target="_blank" rel="noopener noreferrer">
            <img src="/assets/icons/twitter.png" alt="twitter" className="icon"/>
          </a>
        </div>
        </div>
      </div>
      {/* Map Integration */}
      <div>
        <h3 className="contact-headings">Our Location</h3>
        <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153168!3d-37.81627927975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d7c3e3b8b6b!2s123%20Main%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sus!4v1614036600000!5m2!1sen!2sus"
        width="250"
        height="150"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      </div>
      <div className="copyright">
      &copy; {new Date().getFullYear()} Developed by Vakhtangi Jabniashvili.
      </div>
    </FooterWrapper>
  )
}

export default Footer;
