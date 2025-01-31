import "./App.css";
import { Routes, Route } from "react-router-dom";

import SiteWrapper from "./components/Layout";
import Home from "./pages/Home/Home";
import History from "./pages/History/History";
import Stats from "./pages/Stats/Stats";
import HistShopList from "./components/ui/History/HistShopList";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import LandingPage from "./pages/LandingPage/LandingPage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import useLocalStorage from "./service/localStorageService";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./store/store";
import { useEffect } from "react";
import { loadUserFromLocalStorage } from "./store/auth/authSlice";

function App() {
  const { userDetails } = useLocalStorage("user");
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (userDetails) dispatch(loadUserFromLocalStorage(userDetails));
  }, [dispatch, userDetails]);

  return (
    <Routes>
      <Route path="/app" Component={SiteWrapper}>
        <Route index Component={Home} />
        <Route path="history" Component={History} />
        <Route path="history/:id" Component={HistShopList} />
        <Route path="statistics" Component={Stats} />
      </Route>
      <Route path="login" Component={Login} />
      <Route path="register" Component={Register} />
      <Route path="/" Component={LandingPage} />
      <Route path="*" Component={PageNotFound} />
    </Routes>
  );
}

export default App;
