import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faClock,
  faPhone,
  faAt,
} from "@fortawesome/free-solid-svg-icons";

const ContactInfo = () => (
    <div className="contact-page__info">
    <h2>Honey Shop</h2>
    <div className="contact-page__info-item">
      <FontAwesomeIcon
        icon={faPhone}
        fixedWidth
        className="contact-page__info-item-icon"
      />
      <span>
        <a href="tel:+385911234567">+385 91 123 4567</a>
      </span>
    </div>
    <div className="contact-page__info-item">
      <FontAwesomeIcon
        icon={faAt}
        fixedWidth
        className="contact-page__info-item-icon"
      />
      <span>
        <a href="mailto:info@honeyshop.hr">info@honeyshop.hr</a>
      </span>
    </div>
    <div className="contact-page__info-item">
      <FontAwesomeIcon
        icon={faLocationDot}
        fixedWidth
        className="contact-page__info-item-icon"
      />
      <span>Medarska 14, 52203 Medulin</span>
    </div>
    <div className="contact-page__info-item">
      <FontAwesomeIcon
        icon={faClock}
        fixedWidth
        className="contact-page__info-item-icon"
      />
      <span>Monday - Friday: 9:00 - 17:00</span>
    </div>
  </div>
)

export default ContactInfo;