import { retornaArreglo } from '../../base-pruebas/07-deses-arr';

describe('Pruebas en 07-deses-arr.js', () => {

  test('Debe retornar un string y un numero ', () => {
    const [letters, numbers ] = retornaArreglo(); // ['ABC', 123]
  
    // expect(letters).toBe('ABC');
    // expect(numbers).toBe(123);

    expect(typeof letters).toBe('string');
    expect(typeof numbers).toBe('number'); 

    // Con typeScript
    expect(letters).toStrictEqual(expect.any(String));
  
  })

})