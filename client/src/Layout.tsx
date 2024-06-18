import { Outlet } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import { NavBar } from "./components/NavBar";
import { Modal } from "./components/Modal";
import styled from 'styled-components';

export default function Layout() {
  return (
    <Container>
      <CssBaseline />
      <NavBar />
      <Modal />
      <Outlet />
    </Container>
  );
}

const Container = styled.div`
  height: 90vh;
`;
