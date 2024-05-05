// Seleção de Elementos
const lengthInput = document.querySelector("#lengthInput");
const lengthValueSpan = document.querySelector("#lengthValue");
const generatePasswordButton = document.querySelector(
  "#generatePasswordButton"
);
const generatedPasswordElement = document.querySelector("#generatedPassword");
const containerPassword = document.querySelector("#container-password");

// Funções para gerar a senha
const getLetterLowerCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getLetterUpperCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getNumber = () => {
  return Math.floor(Math.random() * 10).toString();
};

// Função para gerar um símbolo aleatório usando uma expressão regular
const getSymbol = () => {
  const symbolsRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;
  return symbolsRegex.source[
    Math.floor(Math.random() * symbolsRegex.source.length)
  ];
};

// Função para gerar a senha com base no comprimento selecionado
const generatePassword = () => {
  const passwordLength = +lengthInput.value;

  if (passwordLength === 0) {
    return; // Não gera a senha se o comprimento for zero
  }

  let password = "";
  const generators = [
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymbol,
  ];

  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * generators.length);
    const randomValue = generators[randomIndex]();
    password += randomValue;
  }

  // Exibe a senha gerada
  generatedPasswordElement.textContent = password;

  // Remove a classe 'hidden' para mostrar a seção container-password
  containerPassword.classList.remove("hidden");
};

// Atualiza o valor exibido do comprimento da senha conforme o controle deslizante é alterado
lengthInput.addEventListener("input", () => {
  lengthValueSpan.textContent = lengthInput.value;
});

// Evento de clique para gerar a senha quando o botão "Gerar senha" é clicado
generatePasswordButton.addEventListener("click", (e) => {
  generatePassword();
});

// Inicialização: exibe o valor inicial do comprimento da senha
lengthValueSpan.textContent = lengthInput.value;
