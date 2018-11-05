const createDragon = ele => ({ breathe: () => `I am breathing ${ele}` });

const charmander = createDragon('fire');
const pikachu = createDragon('lighting');

console.log(charmander.breathe());
console.log(pikachu.breathe());

const button = {
  button: null
};

button.onClick = pikachu.breathe;

const breathe = button.onClick();
console.log(breathe);
