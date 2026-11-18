import { expect, test } from "vitest";
import Spell, { type FirstAppearance }  from "../domain/Spell";
import Spellbook from "../domain/Spellbook";

const lumos = new Spell("Lumos", "Ilumina la punta de la varita", "book");
const sopell2 = new Spell("dos", "segundo", "movie");
const spellbook = new Spellbook();

test("add spell", () => {
  spellbook.addspell(lumos);
  expect(spellbook.getSpells()).toStrictEqual([lumos]);
});

test("add spell again", () => {
  expect(() => spellbook.addspell(lumos)).toThrow();
});

test("get spells", () => {
  spellbook.addspell(sopell2)
  expect(spellbook.getSpells()).toStrictEqual([lumos, sopell2]);
});

test("find by origin", () => {
  expect(spellbook.findByOrigin("book")).toStrictEqual([lumos]);
});

test("count by origin", () => {
  const count: Record<FirstAppearance, number> = {
        book: 1,
        movie: 1,
        videogame: 0,
      };
  expect(spellbook.countByOrigin()).toStrictEqual(count);
});