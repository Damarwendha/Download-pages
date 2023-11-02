import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

export default function NotExits() {
  return (
    <>
      <Navbar>
        <li>
          <Link to="/">Home</Link>
        </li>
      </Navbar>
      <h1>
        This page isn&apos;t available. Sorry about that. Try searching for
        something else.
      </h1>
    </>
  );
}
