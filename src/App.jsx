import { useUser } from "@clerk/clerk-react";
import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Header } from "./components-page";

function App() {
  const [count, setCount] = useState(0);
  const { user, isLoaded, isSignedIn } = useUser();

  if (!isSignedIn && isLoaded) return <Navigate to={"/auth/sign-in"} />;

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
