import { expect, test } from "vitest";
import Spell, { type FirstAppearance } from "../domain/Spell";

const lumos = new Spell("Lumos", "Ilumina la punta de la varita", "book");

test("A spell from a book is original", () => {
  expect(lumos.isOriginal()).toBeTruthy();
});

test("get origin label", () => {
  expect(lumos.getOriginLabel()).toBe("Libro");
});

test("describe correctly", () => {
  expect(lumos.describe()).toBe("Lumos (Libro): Ilumina la punta de la varita");
});

test("empty string on name", () => {
  
  expect( () => new Spell("", "Ilum", "book")).toThrow();
});

test("empty string on description", () => {
  
  expect( () => new Spell("agrsgra", "", "book")).toThrow();
});

test("120 char on description", () => {
  
  expect( () => new Spell("efdafs", "Iluasdkljvfkasdblsdfnvjasdhvkljbasdhfvcsajdfklashdfhasdfhjlashdfashdfsjadfhjsgadfhjwgadfasdgfhsadvckjhnasdljivbkljsadbvlkjsadbvjhsbdvhjaslidbvsdbvcjhbsdfchbawsjcksdabvkhsadbvasgfsbdfkgfm", "book")).toThrow();
});

test("empty string on appearance", () => {
  
  expect( () => new Spell("agfasf", "Ilum", "" as unknown as FirstAppearance)).toThrow();
});