import { Outlet } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import { NavBar } from "./components/NavBar";

export default function Layout() {
  return (
    <>
      <CssBaseline />
      <NavBar />
      <Outlet />
    </>
  );
}
