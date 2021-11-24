import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, useRoutes } from "react-router-dom";
import AlunosListagem from './pages/alunos/AlunosListagem';
import Navbar from './components/Navbar';
import Container from '@mui/material/Container';
import CadastrarAlunos from "./pages/alunos/CadastrarAlunos";
import MateriasListagem from './pages/materias/MateriaLista';
import CadastrarMaterias from './pages/materias/CadastrarMaterias.jsx';
import HomePage from './pages/home-page';



const Routes = () => {
  const routes = useRoutes([
    {path: "/home-page", element: <HomePage/> },
    {path: "/alunos", element: <AlunosListagem /> },
    {path: "/cadastrar-alunos", element: <CadastrarAlunos /> },
    {path: "/materias", element: <MateriasListagem/>},
    {path: "/cadastrar-materias", element: <CadastrarMaterias />}

  ]);

  return routes;
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Container maxWidth="md">
        <Routes />
      </Container>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
