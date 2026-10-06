import { describe, expect, it } from "vitest";
import { ALIASES, MARKS, lookup, surpriseMark } from "../lib/punctuation";

describe("punctuation lookup rules", () => {
  it("includes exactly the 12 requested marks", () => {
    expect(MARKS.map(m => m.id)).toEqual(["period", "question", "exclamation", "comma", "apostrophe", "quotes", "colon", "semicolon", "hyphen", "dash", "ellipsis", "parentheses"]);
  });
  it.each(Object.entries(ALIASES))("maps alias %s to %s", (alias, id) => {
    expect(lookup(alias).id).toBe(id);
  });
  it("normalizes whitespace and case in mark names", () => {
    expect(lookup("  QUESTION   MARK  ").id).toBe("question");
  });
  it.each([["!!!", "exclamation"], ["???", "question"]])("maps repeated %s to one %s", (input, id) => {
    expect(lookup(input).id).toBe(id);
    expect(lookup(input).note).toBeDefined();
  });
  it("maps four or more dots to ellipsis", () => {
    expect(lookup("....").id).toBe("ellipsis");
    expect(lookup("......").id).toBe("ellipsis");
  });
  it("maps two or more hyphens to dash", () => {
    expect(lookup("--").id).toBe("dash");
    expect(lookup("---").id).toBe("dash");
  });
  it.each(["", "hello", "123", "école", "🤩", "@", "!?", "constructor"])("rejects unsupported input %s without selecting a mark", input => {
    expect(lookup(input).id).toBeUndefined();
    expect(lookup(input).error).toBeDefined();
  });
  it("surprise excludes the currently selected mark across every selection", () => {
    for (const mark of MARKS) {
      for (let index = 0; index < 11; index++) {
        expect(surpriseMark(mark.id, () => (index + 0.5) / 11).id).not.toBe(mark.id);
      }
    }
  });
  it("preserves pause lengths for all marks", () => {
    expect(MARKS.map(m => m.pause)).toEqual([3, 3, 3, 1, 0, 1, 2, 2, 0, 2, 4, 1]);
  });
});