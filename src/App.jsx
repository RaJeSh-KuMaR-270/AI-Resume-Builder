import { Navigate, Outlet } from "react-router-dom";
import "./App.css";
import { useUser } from "@clerk/clerk-react";
import Header from "./components/custom/Header";

function App() {
  //provide user info and sigin loded info
  const { user, isLoaded, isSignedIn } = useUser();

  if (isLoaded && !isSignedIn) return <Navigate to="/auth/sign-in" />;
  return (
    <div className="">
      <Header/>
      <Outlet />
    </div>
  );
}

export default App;
