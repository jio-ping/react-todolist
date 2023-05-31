import { useState } from "react";
import "../css/Home.scss";
import SignIn from "../components/Signin.js";
import Login from "../components/Login.js";

function Home() {
  const savedUser = localStorage.getItem("user");
  return (
    <div>{savedUser == null ? <SignIn /> : <Login userName={savedUser} />}</div>
  );
}

export default Home;
