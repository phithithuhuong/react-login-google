import React from "react";
import LoginContainer from "../containers/Login";
class IUser {
  name!: string;
  email!: string;
}
const SignupScreen = () => {
  // const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState<IUser>({
    name: "",
    email: "",
  });
  return (
    <div>
      <h1>Login with Google and Facebook </h1>
      <h1 className="text-3xl font-bold underline">{userInfo.email}</h1>
      <LoginContainer setUserInfo={setUserInfo} />
      {/* <LogoutContainer /> */}
    </div>
  );
};

export default SignupScreen;
