import React from "react";
import "./App.css";
import LoginContainer from "./containers/Login";
import LogoutContainer from "./containers/Logout";
// class IUser {
//   name!: string;
//   email!: string;
//   imageUrl: string;
//   googleId: string;
// }
function App() {
  // const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  // const [userInfo, setUserInfo] = React.useState<IUser>({
  //   name: "",
  //   email: "",
  // });
  return (
    <div className="App">
      <h1>Login with Google and Facebook </h1>
      <LoginContainer />
      <LogoutContainer />
    </div>
  );
}

export default App;
