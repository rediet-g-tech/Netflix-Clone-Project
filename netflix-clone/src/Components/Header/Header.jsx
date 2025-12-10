import './Header.css';
import Logo from '../../assets/Images/netflix.svg';
import SearchIcon from "@mui/icons-material/Search";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
function Header() {
  return (
    <>
      <div className="header-main-container">
        <div className="header-container">
          <div className="header-left">
            <ul>
              <li>
                <img src={Logo} alt="Netflix Logo" width="100" />
              </li>
              <li>Netflix</li>
              <li>Home</li>
              <li>TV Shows</li>
              <li>Movies</li>
              <li>Latest</li>
              <li>My List</li>
              <li>Browse by Languages</li>
            </ul>
          </div>
          <div className="header_right">
            <ul>
              <li>
                <SearchIcon />
              </li>
              <li>
                <NotificationsActiveIcon />
              </li>
              <li>
                <AccountBoxIcon />
              </li>
              <li>
                <ArrowDropDownIcon/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );

}

export default Header