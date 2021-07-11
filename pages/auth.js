import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "../firebase/clientApp";

const uiConfig = {
  signInSuccessUrl: "/",
  signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
};

function SignInScreen() {
  return (
    <div
      style={{
        maxWidth: "320px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Login vote bubur</h1>
      <p>Silahkan login terlebih dahulu</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}

export default SignInScreen;
