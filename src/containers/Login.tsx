import React, { useEffect, useState } from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
type Props = {
  setUserInfo: (v: any) => void;
};
const LoginContainer = ({ setUserInfo }: Props) => {
  const [isToken, setIsToken] = useState<string>("");
  useEffect(() => {
    if (isToken) {
      const decodedToken = jwtDecode(isToken);
      setUserInfo(decodedToken);
    }
  }, [isToken, setUserInfo]);

  return (
    <div className="App">
      <GoogleOAuthProvider clientId="434387645002-1efk8u22j7om7eikf05rh8thn8lc52rn.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            setIsToken(credentialResponse.credential!);
            alert("Login with Google success");
          }}
          onError={() => {
            console.log("Login Failed");
            alert("Login with Google Failed");
          }}
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default LoginContainer;
