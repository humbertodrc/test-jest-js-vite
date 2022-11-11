import {getUser, getUsuarioActivo} from "../../base-pruebas/05-funciones";

describe("pruebas en 05-funciones", () => {
	test("getUser debe retornar un objeto", () => {
		const testUser = {
			uid: "ABC123",
			username: "El_Papi1502",
		};

		const user = getUser();

		expect(testUser).toStrictEqual(user);
	});

	test("getUsuario debe retornar un usuarioActivo", () => {
		const nombre = "Humberto";

		const user = getUsuarioActivo(nombre);

		const testUser = {
			uid: "ABC567",
			username: nombre,
		};

		expect(testUser).toStrictEqual(user);
	});
});
