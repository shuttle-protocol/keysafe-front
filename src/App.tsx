import React from "react";
import Header from "./components/header";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./constants/routes";
import Home from "./pages/home";
import SignUp from "./pages/sign-up";
import Login from "./pages/login";
import Register from "./pages/register";
import RegisterKeys from "./pages/register-keys";
import DelegateSetting from "pages/delegate-setting";
import SetConditions from "pages/set-conditions";
import RegisterConfirm from "pages/register-confirm";
import RegisterSuccess from "pages/register-success";
import RecoverKeys from "./pages/recover-keys";
import Transfer from "./pages/transfer";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />}></Route>
          <Route path={ROUTES.SIGN_UP} element={<SignUp />}></Route>
          <Route path={ROUTES.LOGIN} element={<Login />}></Route>
          <Route path={ROUTES.REGISTER} element={<Register />}></Route>
          <Route path={ROUTES.REGISTER_KEYS} element={<RegisterKeys />}></Route>
          <Route
            path={ROUTES.DELEGATE_SETTINGS}
            element={<DelegateSetting />}
          ></Route>
          <Route
            path={ROUTES.SET_CONDITIONS}
            element={<SetConditions />}
          ></Route>
          <Route
            path={ROUTES.REGISTER_CONFIRM}
            element={<RegisterConfirm />}
          ></Route>
          <Route
            path={ROUTES.REGISTER_SUCCESS}
            element={<RegisterSuccess />}
          ></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
