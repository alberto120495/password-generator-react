import React from "react";
import styled from "styled-components";

function LessButton({ click }) {
  return (
    <Button onClick={click}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-dash-lg"
        viewBox="0 0 16 16"
      >
        <path d="M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z" />
      </svg>
    </Button>
  );
}

function PlusButton({ click }) {
  return (
    <Button onClick={click}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-plus-lg"
        viewBox="0 0 16 16"
      >
        <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
      </svg>
    </Button>
  );
}

function CheckButton({ seleccionado, toggle }) {
  if (seleccionado) {
    return (
      <Button onClick={toggle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-check-lg"
          viewBox="0 0 16 16"
        >
          <path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z" />
        </svg>
      </Button>
    );
  } else {
    return (
      <BotonNoSeleccionado onClick={toggle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-x-lg"
          viewBox="0 0 16 16"
        >
          <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
        </svg>
      </BotonNoSeleccionado>
    );
  }
}
function GenerateButton() {
  return (
    <GenerarButton type="submit">
      <p>Generar</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-lock-fill"
        viewBox="0 0 16 16"
      >
        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
      </svg>
    </GenerarButton>
  );
}

export { LessButton, PlusButton, CheckButton, GenerateButton };

const Button = styled.button`
  width: 100%;
  background-color: #684bff;
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  vertical-align: top;
  font-size: 10px;
  text-align: center;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #866ffd;
  }
`;

const GenerarButton = styled(Button)`
  svg {
    margin-left: 10px;
  }
`;

const BotonNoSeleccionado = styled(Button)`
  background: #33257e;
  &:hover {
    background-color: #866ffd;
  }
`;