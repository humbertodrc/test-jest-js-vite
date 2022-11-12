import {getHeroeById, getHeroesByOwner} from "../../base-pruebas/08-imp-exp";
import heroes from "../../data/heroes";

describe("Pruebas en 08-imp-exp", () => {
	test("getHeroeById debe retornar un heroe por ID", () => {
		const heroID = 1;
		const hero = getHeroeById(heroID);

		expect(hero).toEqual({
			id: 1,
			name: "Batman",
			owner: "DC",
		});
	});

	test("getHeroeById debe retornar undefined si no existe el heroe", () => {
		const heroID = 100;
		const hero = getHeroeById(heroID);

		expect(hero).toBeFalsy();
	});

	test("getHeroesByOwner debe retorna heroes de DC", () => {
		const owner = "DC";

		const dcHeroes = getHeroesByOwner(owner);

		expect(dcHeroes.length).toBe(3);
		expect(dcHeroes).toEqual([
			{
				id: 1,
				name: "Batman",
				owner: "DC",
			},
			{
				id: 3,
				name: "Superman",
				owner: "DC",
			},
			{
				id: 4,
				name: "Flash",
				owner: "DC",
			},
		]);

		expect(dcHeroes).toEqual(heroes.filter((hero) => hero.owner === owner));
	});

	test("getHeroesByOwner debe retornar heroes de Marvel", () => {
		const owner = "Marvel";

		const marverHeroes = getHeroesByOwner(owner);

		expect(marverHeroes.length).toBe(2);

		expect(marverHeroes).toEqual([
			{
				id: 2,
				name: "Spiderman",
				owner: "Marvel",
			},
			{
				id: 5,
				name: "Wolverine",
				owner: "Marvel",
			},
		]);

		expect(marverHeroes).toEqual(heroes.filter((hero) => hero.owner === owner));
	});
});
