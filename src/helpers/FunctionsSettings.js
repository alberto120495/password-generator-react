import { useState } from "react";

function FunctionsSettings() {
  const [settings, setSettings] = useState({
    numeroCaracteres: 7,
    simbolos: true,
    numeros: true,
    mayusculas: true,
  });

  const onSubmit = (e) => {
    e.preventDefault();
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

  return {
    settings,
    toggleMayus,
    onSubmit,
    incrementarCaracteres,
    disminuirCaracteres,
    toggleSimbolos,
    toggleNumeros,
  };
}

export { FunctionsSettings };
