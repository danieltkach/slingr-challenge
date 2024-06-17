import { Outlet } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import { NavBar } from "./components/NavBar";
import { Modal } from "./components/Modal";

export default function Layout() {
  return (
    <>
      <CssBaseline />
      <NavBar />
      <Modal  />
      <Outlet />
    </>
  );
}
