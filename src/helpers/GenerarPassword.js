export const generarPassword = (settings) => {
  const caracteres = {
    numeros: "0 1 2 3 4 5 6 7 8 9",
    simbolos: "! @ # $ % ^ & * ( ) _ - + = { [ } ] ; : < , > . ? /",
    mayusculas: "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z",
    minusculas: "a b c d e f g h i j k l m n o p q r s t u v w x y z",
  };
  let caracteresFinales = "";
  let password = "";

  console.log(settings);

  for (let propiedad in settings) {
    if (settings[propiedad] === true) {
      caracteresFinales += caracteres[propiedad] + " ";
    }
  }

  caracteresFinales += caracteres.minusculas;
  caracteresFinales = caracteresFinales.trim();
  caracteresFinales = caracteresFinales.split(" ");

  for (let i = 0; i < settings.numeroCaracteres; i++) {
    password +=
      caracteresFinales[Math.floor(Math.random() * caracteresFinales.length)];
  }

  return password;
};
