import {
  faHome,
  faRightFromBracket,
  faTicket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-4">
        <b className="text-default-text text-xl">TickTack</b>
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className="icon" />
        </Link>
        <Link href="/tickets/new">
          <FontAwesomeIcon icon={faTicket} className="icon" />
        </Link>
      </div>
      <div className="flex space-x-3 items-center">
        <p className="text-default-text">
          Logged in as <b>shrysjain</b>
          {/* Eventually implement proper sign-in w/ Google OAuth */}
        </p>
        <FontAwesomeIcon icon={faRightFromBracket} className="icon" />
      </div>
    </nav>
  );
};

export default Nav;
