import "./App.css";
import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  CheckButton,
  GenerateButton,
  LessButton,
  PlusButton,
} from "./components/Buttons";
import { generarPassword } from "./helpers/GenerarPassword";

function App() {
  const [settings, setSettings] = useState({
    numeroCaracteres: 7,
    simbolos: true,
    numeros: true,
    mayusculas: true,
  });

  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setPassword(generarPassword(settings));
  };

  const incrementarCaracteres = () => {
    setSettings((prevSetting) => {
      const newConfig = { ...prevSetting };
      newConfig.numeroCaracteres += 1;
      return newConfig;
    });
  };

  const disminuirCaracteres = () => {
    if (settings.numeroCaracteres > 1) {
      setSettings((prevSetting) => {
        const newConfig = { ...prevSetting };
        newConfig.numeroCaracteres -= 1;
        return newConfig;
      });
    }
  };

  const toggleSimbolos = () => {
    setSettings((prevSetting) => {
      const newConfig = { ...prevSetting };
      newConfig.simbolos = !newConfig.simbolos;
      return newConfig;
    });
  };
  const toggleNumeros = () => {
    setSettings((prevSetting) => {
      const newConfig = { ...prevSetting };
      newConfig.numeros = !newConfig.numeros;
      return newConfig;
    });
  };
  const toggleMayus = () => {
    setSettings((prevSetting) => {
      const newConfig = { ...prevSetting };
      newConfig.mayusculas = !newConfig.mayusculas;
      return newConfig;
    });
  };

  useEffect(() => {
    setPassword(generarPassword(settings));
  }, [settings]);

  return (
    <div className="App">
      <h1 className="title">Password Generator</h1>
      <form onSubmit={onSubmit}>
        <Fila>
          <label>Numero de caracteres</label>
          <Controls>
            <LessButton click={disminuirCaracteres} />

            <span>{settings.numeroCaracteres}</span>

            <PlusButton click={incrementarCaracteres} />
          </Controls>
        </Fila>

        <Fila>
          <label>¿Incluir Simbolos?</label>
          <CheckButton
            seleccionado={settings.simbolos}
            toggle={toggleSimbolos}
          />
        </Fila>

        <Fila>
          <label>¿Incluir Numeros?</label>
          <CheckButton seleccionado={settings.numeros} toggle={toggleNumeros} />
        </Fila>

        <Fila>
          <label>¿Incluir Mayusculas?</label>
          <CheckButton
            seleccionado={settings.mayusculas}
            toggle={toggleMayus}
          />
        </Fila>

        <Fila>
          <GenerateButton />
          <Input type="text" readOnly={true} value={password} />
        </Fila>
      </form>
    </div>
  );
}

export default App;

const Fila = styled.div`
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;
const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;

  & > * {
    flex: 1;
  }

  span {
    line-height: 40px;
    background-color: #33257e;
  }
`;

const Input = styled.input`
  width: 100%;
  background: none;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: #fff;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;

  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.5);
  }

  &::selection {
    background: #212139;
  }
  &::-moz-selection {
    background: #212139;
  }
`;
