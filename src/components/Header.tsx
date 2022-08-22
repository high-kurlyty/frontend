import KurlyLogo from "@/assets/kurly_logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

export default function Header() {
  return (
    <div className="Header">
      <img className="HeaderLogo" src={KurlyLogo} alt="마켓컬리 로고"></img>
      <h3>마켓컬리</h3>
      <p>
        <FontAwesomeIcon icon={faHeart} />
      </p>
    </div>
  );
}
