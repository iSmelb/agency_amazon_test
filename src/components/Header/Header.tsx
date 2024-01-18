import { FC } from "react";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <header className="header">
      <div className="header_flex container">
        <div className="dashboard">
          <Link to="/">Dashboard</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
