import {
  calcularNumeroAleatorio,
  calcularPuntuacionReal,
  calcularNumeroCarta,
  mostrarCarta,
} from "./motor";

describe("Motor del juego", () => {
  it("calcularNumeroAleatorio() debería devolver un número aleatorio entre 1 y 10", () => {
    const numeroAleatorio = calcularNumeroAleatorio();
    expect(numeroAleatorio).toBeGreaterThanOrEqual(1);
    expect(numeroAleatorio).toBeLessThanOrEqual(10);
  });

  it("calcularPuntuacionReal() debería aumentar la puntuación en 1 si el número aleatorio es menor o igual a 7", () => {
    const puntuacionInicial = 5;
    const numeroAleatorio = 5;
    const puntuacionReal = calcularPuntuacionReal(numeroAleatorio, puntuacionInicial);
    expect(puntuacionReal).toBe(puntuacionInicial + 1);
  });

  it("calcularPuntuacionReal() debería aumentar la puntuación en 0.5 si el número aleatorio es mayor que 7", () => {
    const puntuacionInicial = 5;
    const numeroAleatorio = 8;
    const puntuacionReal = calcularPuntuacionReal(numeroAleatorio, puntuacionInicial);
    expect(puntuacionReal).toBe(puntuacionInicial + 0.5);
  });

  it("calcularNumeroCarta() debería devolver el número aleatorio si el número aleatorio es menor o igual a 7", () => {
    const numeroAleatorio = 5;
    const numeroCarta = calcularNumeroCarta(numeroAleatorio);
    expect(numeroCarta).toBe(numeroAleatorio);
  });

  it("calcularNumeroCarta() debería devolver el número aleatorio más 2 si el número aleatorio es mayor que 7", () => {
    const numeroAleatorio = 8;
    const numeroCarta = calcularNumeroCarta(numeroAleatorio);
    expect(numeroCarta).toBe(numeroAleatorio + 2);
  });

  it("mostrarCarta() debería devolver la URL de la carta correcta", () => {
    const carta = 10;
    const urlCarta = mostrarCarta(carta);
    expect(urlCarta).toBe("https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg");
  });
});
