import "./index.css";
import { Link, useNavigate } from "react-router-dom";

import logo from "../../../assets/logo.svg";
import { ThemeToggle } from "./ThemeToggle";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { Status } from "../../../types/types";
import useLocalStorage from "../../../service/localStorageService";
import { clearUser } from "../../../store/auth/authSlice";

type ToggleDrawer = () => void;

export default function SideNav({
  toggleDrawer,
}: {
  toggleDrawer: ToggleDrawer;
}) {
  const shopList = useSelector((state: RootState) => state.shoppingList);

  function getLen() {
    let len = 0;
    shopList.list.forEach((cat) => {
      len += cat.items.length;
    });
    return len;
  }

  const { clearUserDetails } = useLocalStorage("user");
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const logoutUser = () => {
    clearUserDetails();
    navigate("/");
    dispatch(clearUser());
  };

  return (
    <div className="w-16 md:w-20 h-screen flex flex-col justify-between py-4">
      <Link to="/app" className="ps-2 md:ps-4">
        <img src={logo} alt="logo" />
      </Link>
      <ul className="menu py-4">
        <li>
          <Link to="/app" className="tooltip tooltip-right" data-tip="Items">
            <i className="material-symbols-outlined">list</i>
          </Link>
        </li>
        <li className="my-12">
          <Link
            to="history"
            className="tooltip tooltip-right"
            data-tip="History"
          >
            <i className="material-symbols-outlined">restart_alt</i>
          </Link>
        </li>
        <li>
          <Link
            to="statistics"
            className="tooltip tooltip-right"
            data-tip="Stats"
          >
            <i className="material-symbols-outlined">analytics</i>
          </Link>
        </li>
      </ul>

      <div className="">
        <ul className="menu">
          <li className="my-1 tooltip tooltip-right" data-tip="dark/light">
            <ThemeToggle />
          </li>
          <li
            className="my-1 tooltip tooltip-right"
            data-tip="Logout"
            onClick={() => document.getElementById("logout_modal")!.showModal()}
          >
            <i className="material-symbols-outlined ml-1">logout</i>
          </li>
        </ul>

        <dialog id="logout_modal" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Logout</h3>
            <p className="py-4">Are you sure you want to logout?</p>
            <div className="modal-action justify-center">
              <form method="dialog">
                <button
                  className="btn btn-error w-48 mr-10"
                  onClick={logoutUser}
                >
                  Logout
                </button>
                <button className="btn btn-primary w-48">Close</button>
              </form>
            </div>
          </div>
        </dialog>

        <button
          className="btn btn-primary btn-circle shadow ms-2 md:ms-4"
          onClick={toggleDrawer}
        >
          <a
            className="tooltip tooltip-right font-normal indicator"
            data-tip="List"
          >
            {shopList.update === Status.updated && shopList.list.length > 0 ? (
              <span className="indicator-item badge badge-secondary text-xs font-medium">
                {getLen()}
              </span>
            ) : null}

            <i className="material-symbols-outlined">shopping_cart</i>
          </a>
        </button>
      </div>
    </div>
  );
}
