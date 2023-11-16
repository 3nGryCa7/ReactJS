import { Outlet, NavLink } from "react-router-dom";

export default function HelpLayout() {
  return (
    <div className="help-layout">
      <h2>Website Help</h2>
      <p>
        At Innovation Town, we're committed to providing you with the best possible user experience. Our Help Center is designed to assist you in navigating our site and making the most out of its features. Whether you're a new user or a seasoned member of our community, you'll find helpful information below.
      </p>
      <nav>
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}
