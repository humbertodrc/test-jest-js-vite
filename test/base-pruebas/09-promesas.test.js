import {getHeroeByIdAsync} from "../../base-pruebas/09-promesas";

describe("Pruebas en 09-promesas", () => {
	test("getHeroeByIdAsync debe de retornar un heroe", (done) => {
		const idHero = 1;

		getHeroeByIdAsync(idHero).then((hero) => {
			expect(hero).toEqual({
				id: 1,
				name: "Batman",
				owner: "DC",
			});

			done();
		});
	});

	test("getHeroeByIdAsync debe retornar un error si el hero no existe", (done) => {
		const idHero = 100;

    getHeroeByIdAsync(idHero).catch((error) => {
     expect(error).toBe(`No se pudo encontrar el heroe con el ${idHero}`)
			done();
		});
	});
});
