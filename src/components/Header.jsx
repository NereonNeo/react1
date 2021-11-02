import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="header">
      <div className="home">
        <Link to="/">
          <span>Home</span>
        </Link>
      </div>
      <div className="about">
        <Link to="/about">
          <span>About us</span>
        </Link>
      </div>
      <div className="blog">
        <Link to="/blog">
          <span>Blog</span>
        </Link>
      </div>
      <div className="Contact">
        <Link to="/contact">
          <span>Contact</span>
        </Link>
      </div>
    </div>
  );
};
