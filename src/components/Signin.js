import "../css/SignIn.scss";
import { useState } from "react";

function SignIn() {
  const [user, setUser] = useState("");
  const onChange = (event) => {
    setUser(event.target.value);
  };
  const saveUser = () => {
    localStorage.setItem("user", user);
  };
  return (
    <div className="sign-in-form">
      <div className="profile">
        <img src=""></img>
      </div>
      <div className="greeting">
        <h1>Welcome ,</h1>
        <form onSubmit={saveUser}>
          <input
            type="text"
            placeholder="traveler"
            onChange={onChange}
            value={user}
          ></input>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
