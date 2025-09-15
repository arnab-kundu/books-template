import "@expo/metro-runtime";
import { registerRootComponent } from "expo";
import "expo-dev-client";
import App from "../src/App";

export default registerRootComponent(App);




// import SignIn from "@/src/auth/SignIn";
// const  RootLayout =() => {
//   return <SignIn />;
// }
// export default RootLayout;


// import SignUp from "@/src/auth/SignUp";
// const  RootLayout =() => {
//   return <SignUp />;
// }
// export default RootLayout;


// import OnboardingScreen from "@/src/pages/OnboardingScreen";
// const  RootLayout =() => {
//   return <OnboardingScreen />;
// }
// export default RootLayout;