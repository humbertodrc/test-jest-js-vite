import { getSaludo } from '../../base-pruebas/02-template-string';

describe('Pruebas en el archivo 02-template-string', () => {
  test('getSaludo debe retornar "Hola + Humberto"', () => {
    const name = 'Humberto';
    const message = getSaludo(name);

    expect(message).toBe(`Hola ${name}`)
  })

})