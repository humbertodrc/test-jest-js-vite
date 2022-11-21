import { getImagen } from '../../base-pruebas/11-async-await'

describe('Pruebas en 11-async-await', () => {

  test('getImagen debe retornar una URL de la imagen', async() => {
  
    const url = await getImagen();

    expect(typeof url).toBe('string')
  
  })

  test('getImagen debe retornar un error, si el APIKey no es correcto', async() => {
    
    const resp = await getImagen();

    expect(resp).toBe('No se encontro la imagen')
  
  })

})