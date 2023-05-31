import "../css/SignIn.scss";

function Login(props) {
  return (
    <div className="login-form">
      <div className="profile">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdPr-bDMbpbFfn_j3vVatXf8ro-kcwQqhVRg&usqp=CAU"></img>
      </div>
      <div>
        <h1>Good-morning {props.userName}</h1>
      </div>
    </div>
  );
}

export default Login;
