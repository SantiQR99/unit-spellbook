import { expect, test } from "vitest";
import Spell from "../domain/Spell";

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
  let spell: Spell;
  expect( () => spell = new Spell("", "Ilum", "book")).toThrow();
});

test("empty string on description", () => {
  let spell: Spell;
  expect( () => spell = new Spell("agrsgra", "", "book")).toThrow();
});

test("120 char on description", () => {
  let spell: Spell;
  expect( () => spell = new Spell("efdafs", "Iluasdkljvfkasdblsdfnvjasdhvkljbasdhfvcsajdfklashdfhasdfhjlashdfashdfsjadfhjsgadfhjwgadfasdgfhsadvckjhnasdljivbkljsadbvlkjsadbvjhsbdvhjaslidbvsdbvcjhbsdfchbawsjcksdabvkhsadbvasgfsbdfkgfm", "book")).toThrow();
});

test("empty string on appearance", () => {
  let spell: Spell;
  expect( () => spell = new Spell("agfasf", "Ilum", [])).toThrow();
});