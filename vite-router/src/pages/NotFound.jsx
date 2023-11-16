import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>Page Not Found !!! (☉д⊙)</h2>

      <p>Possible reasons :</p>
      <ul>
        <li>The URL you entered is incorrect.</li>
        <li>The page has been deleted or moved.</li>
        <li>Your internet connection is unstable.</li>
      </ul>

      <p>
        Go back to <Link to="/">Home</Link>.
      </p>
    </div>
  );
}
