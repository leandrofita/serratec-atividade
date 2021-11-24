import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {InputCadastro, ButtonCadastro, Form} from "../../components/Cadastros"
import { API_MATERIA_URL } from "../../constants";

const CadastarMaterias = () => {
  
  const MySwal = withReactContent(Swal);

  const [titulo, setTitulo] = useState()
  const [professor_nome, setProfessorNome] = useState()

  const cadastrarMaterias =() => {

    axios.post(API_MATERIA_URL, {
      titulo,
      professor_nome
    })
    .then((response) => {
      if (response.status === 201) {
        MySwal.fire(<p>{response?.data?.message}</p>);
        limparCampos();
      }
    }).catch(error => {
      MySwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error,
      })
    });
  };

  const limparCampos = () => {
    setTitulo("");
    setProfessorNome("");
  };

  return (
  <Form>
    <InputCadastro
    label="Título"
    variant="outlined"
    value={titulo}
    onChange={(e) => setTitulo(e.target.value)}
    />

    <InputCadastro
    label="Nome do Professor"
    variant="outlined"
    value={professor_nome}
    onChange={(e) => setProfessorNome(e.target.value)}
    />;
    <ButtonCadastro variant="contained" onClick={cadastrarMaterias}>
        Cadastrar
      </ButtonCadastro>
  </Form>
  );

}; 
export default CadastarMaterias;
