import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
  const validPublishers = ["DC Comics", "Marvel Comics"];

  if (!validPublishers.includes(publisher)) {
    throw new Error(`${publisher} is not a valid publisher`);
  } // La idea es que si el array de la fila 4 no incluye el publisher recibido como argumento, me tire un error

  return heroes.filter((heroe) => heroe.publisher === publisher); // Que el hero.publisher sea igual al publisher recibido como argumento
};
