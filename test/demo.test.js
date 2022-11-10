describe("Pruebas en Demo con Titulo", () => {
	test("Esta prueba no debe fallar", () => {
		// 1. Arrange "Inicializacíon"
		const message1 = "Hola Mundo";

		// 2. Act "Estimulo"
		const message2 = message1.trim();

		// 3. Assert "Observar el comportamiento ... esperado"
		expect(message1).toBe(message2);
	});
});
