import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../slices/auth/authSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">OrangeCode</Link>
      </div>
      <ul>
        <li>
          <Link to="/problems">
            <FaSignInAlt /> Problems
          </Link>
        </li>
      </ul>

      <ul>
        {user ? (
          <li>
            <button className="btn" onClick={onLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </li>
        ) : (
          <>
            {/* <li>
              <Link to="/login">
                <FaSignInAlt /> Problems
              </Link>
            </li> */}
            <li>
              <Link to="/login">
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to="/register">
                <FaUser /> Sign Up
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}

export default Header;
