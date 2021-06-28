const text = "Hola Mundo";
const fruits = ["manzana", "melon", "banana"];

test("Debe contener un texto", () => {
  expect(text).toMatch(/Mundo/);
});

test("¿Tenemos manzana?", () => {
  expect(fruits).toContain("manzana");
});

test("Mayor que", () => {
  expect(10).toBeGreaterThan(9);
});
test("Verdadero", () => {
  expect(true).toBeTruthy();
});

const reverseString = (str, callback) => {
  callback(str.split("").reverse().join(""));
};
test("Probar un callback", () => {
  reverseString("hola", (str) => {
    expect(str).toBe("aloh");
  });
});

const reverseString2 = (str) => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(Error("Error"));
    }
    resolve(str.split("").reverse().join(""));
  });
};

test("Probar async/await", async () => {
  const string = await reverseString2("Prueba");
  expect(string).toBe("abeurP");
});

// Funcion que se ejecuta despues de cada prueba
afterEach(() => console.log("After each test"));
// Funcion que se ejetuta despues de todas las pruebas
afterAll(() => console.log("All the test ended."));

// Funcion que se ejecuta antes de cada prueba
beforeEach(() => console.log("Before each test"));
// Funcion que se ejecuta antes de todas las pruebas
beforeAll(() => console.log("Beginning of all the tests"));