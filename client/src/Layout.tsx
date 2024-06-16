import { Outlet } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import { NavBar } from "./components/NavBar";
import { useModalStore } from "./components/Modal/modalStore";
import { Modal } from "./components/Modal";

export default function Layout() {
  const { state: modalState, setState} = useModalStore();

  return (
    <>
      <CssBaseline />
      <NavBar />
      <Modal open={modalState.isOpen} onClose={setState} />
      <Outlet />
    </>
  );
}
