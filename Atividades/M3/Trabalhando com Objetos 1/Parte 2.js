const carro = {
  placa: "ABC123",
  classes: ["sedan"],
  luxo: true,
  potencia: 200,
  estacionado: true,
};

const obterPlaca = (carro) => carro.placa;

const verificarClasses = (carro) =>
  carro.classes[1] ? carro.classes : carro.classes[0];

const potenciaReal = (carro) =>
  carro.luxo ? carro.potencia * carro.potencia : carro.potencia;

const adicionarNovaClasse = (carro, novaClasse) => {
  const classesPermitidas = ["sedan", "hatchback", "suv", "crossover", "cupê"];

  if (carro.classes.length >= 3) return "Este carro não pode ter mais classes";

  const aClasseEPermitida = () => {
    for (let i = 0; i < classesPermitidas.length; i++) {
      if (novaClasse === classesPermitidas[i]) return 1;
    }
  };
  
  if (!aClasseEPermitida())
    return "Classe inválida. As classes permitidas são: sedan, hatchback, suv, crossover e cupê";

  for (let i = 0; i < carro.classes.length; i++) {
    if (novaClasse === carro.classes[i])
      return `O carro já possui a classe ${carro.classes[i]}`;
  }

  const classes = carro.classes.concat(novaClasse);
  return { ...carro, classes };
};

const naoMaisLuxo = (carro) => {
  if (!carro.estacionado) return `O carro ${carro.placa} não está estacionado`;

  if (!carro.luxo) return `O carro ${carro.placa} não é luxuoso`;

  return { ...carro, luxo: !carro.luxo };
};

console.log(naoMaisLuxo(carro));
