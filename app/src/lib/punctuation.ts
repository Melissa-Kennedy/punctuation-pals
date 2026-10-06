export const MARKS = [
  {
    id: "period", glyph: ".", name: "Period", aka: "Also called a full stop", hue: "blue",
    job: "Ends a sentence",
    def: "A period tells the reader that a thought is finished. Time to stop and take a breath.",
    feels: [["😌", "Calm"], ["🛑", "Stop"], ["✅", "Done"]],
    pitch: "down", voice: "Goes down at the end, then stops.", pause: 3,
    example: "We ate pizza for lunch{.}",
    tip: "Every sentence that tells something ends with a period."
  },
  {
    id: "question", glyph: "?", name: "Question Mark", aka: "The asking mark", hue: "coral",
    job: "Ends a question",
    def: "A question mark shows you are asking something and want an answer.",
    feels: [["🤔", "Curious"], ["🧐", "Wondering"], ["🙋", "Asking"]],
    pitch: "up", voice: "Goes up at the end, like you are waiting for an answer.", pause: 3,
    example: "Can we go to the park today{?}",
    tip: "Questions often start with who, what, where, when, why, or how."
  },
  {
    id: "exclamation", glyph: "!", name: "Exclamation Mark", aka: "Also called an exclamation point", hue: "sun",
    job: "Shows a big feeling",
    def: "An exclamation mark shows strong feelings like excitement, surprise, or a loud voice.",
    feels: [["🤩", "Excited"], ["😲", "Surprised"], ["📣", "Loud"]],
    pitch: "loud", voice: "Gets louder and stronger.", pause: 3,
    example: "We won the game{!}",
    tip: "In school writing, one ! is enough. Save it for really big feelings."
  },
  {
    id: "comma", glyph: ",", name: "Comma", aka: "The little pause", hue: "green",
    job: "Makes a short pause",
    def: "A comma is a tiny pause. It separates items in a list and helps break up long sentences.",
    feels: [["🙂", "Relaxed"], ["⏸️", "Pausing"], ["🧺", "Listing"]],
    pitch: "flat", voice: "Stays steady. Take a tiny pause, then keep going.", pause: 1,
    example: "I packed apples{,} grapes{,} and a sandwich.",
    tip: "Use commas between things in a list."
  },
  {
    id: "apostrophe", glyph: "’", name: "Apostrophe", aka: "Looks like a floating comma", hue: "violet",
    job: "Shows owning or squeezing",
    def: "An apostrophe shows that something belongs to someone. It also squeezes two words into one, like it is → it’s.",
    feels: [["🎒", "Owning"], ["🤏", "Squeezing"], ["🤝", "Belonging"]],
    pitch: "flat", voice: "Read the word normally. No change.", pause: 0,
    example: "It{’}s Maya{’}s backpack.",
    tip: "Maya’s backpack means the backpack belongs to Maya."
  },
  {
    id: "quotes", glyph: "“ ”", name: "Quotation Marks", aka: "Also called quotes or speech marks", hue: "teal",
    job: "Shows someone talking",
    def: "Quotation marks go around the exact words someone says, like a speech bubble in a comic.",
    feels: [["🗣️", "Talking"], ["💬", "Saying"], ["👂", "Listening"]],
    pitch: "flat", voice: "Read the words inside in the speaker’s voice.", pause: 1,
    example: "{“}Let’s go!{”} shouted Leo.",
    tip: "Quotation marks come in pairs: one to open and one to close."
  },
  {
    id: "colon", glyph: ":", name: "Colon", aka: "Two dots stacked up", hue: "blue",
    job: "Introduces what comes next",
    def: "A colon says “Get ready, here it comes!” It often comes right before a list or an explanation.",
    feels: [["👉", "Pointing"], ["😃", "Ready"], ["📋", "Listing"]],
    pitch: "flat", voice: "Pause, then get ready for what comes next.", pause: 2,
    example: "Bring three things{:} a pencil, a ruler, and an eraser.",
    tip: "The words before a colon should make a whole sentence."
  },
  {
    id: "semicolon", glyph: ";", name: "Semicolon", aka: "Half period, half comma", hue: "violet",
    job: "Joins two sentences",
    def: "A semicolon joins two complete sentences that are close friends and belong together.",
    feels: [["🔗", "Linked"], ["⚖️", "Balanced"], ["🤓", "Thoughtful"]],
    pitch: "flat", voice: "Pause a bit longer than a comma.", pause: 2,
    example: "It was raining{;} we stayed inside.",
    tip: "Each side of a semicolon could be its own sentence."
  },
  {
    id: "hyphen", glyph: "-", name: "Hyphen", aka: "The short line", hue: "green",
    job: "Glues words together",
    def: "A hyphen is a short line that glues words together to make one word.",
    feels: [["🧩", "Joining"], ["🤗", "Together"], ["🧱", "Building"]],
    pitch: "flat", voice: "No pause. Read the joined words as one.", pause: 0,
    example: "I have twenty{-}two stickers.",
    tip: "Numbers from twenty-one to ninety-nine use a hyphen."
  },
  {
    id: "dash", glyph: "—", name: "Dash", aka: "The long line", hue: "coral",
    job: "Adds a dramatic pause",
    def: "A dash is a long line that adds a dramatic pause or a surprise. It is longer than a hyphen.",
    feels: [["😮", "Surprise"], ["⚡", "Sudden"], ["🎭", "Dramatic"]],
    pitch: "gap", voice: "Stop suddenly, then say the surprise.", pause: 2,
    example: "I opened the box and found {—} a puppy!",
    tip: "On a keyboard, you can type two hyphens -- to make a dash."
  },
  {
    id: "ellipsis", glyph: "…", name: "Ellipsis", aka: "Three dots in a row", hue: "teal",
    job: "Trails off or builds suspense",
    def: "An ellipsis is three dots that show someone trailing off, waiting, or building suspense.",
    feels: [["😬", "Suspense"], ["⏳", "Waiting"], ["🤷", "Unsure"]],
    pitch: "trail", voice: "Fades out slowly, like you’re not done yet.", pause: 4,
    example: "I opened the door slowly and saw{…}",
    tip: "Say it like this: el-lip-sis."
  },
  {
    id: "parentheses", glyph: "( )", name: "Parentheses", aka: "Also called round brackets", hue: "sun",
    job: "Holds extra information",
    def: "Parentheses hug extra information. You could take the words out and the sentence still makes sense.",
    feels: [["🤫", "Whispering"], ["🤗", "Hugging"], ["📝", "Side note"]],
    pitch: "soft", voice: "Say the words inside a little quieter, like a whisper.", pause: 1,
    example: "My cat {(}her name is Pickles{)} loves boxes.",
    tip: "Parentheses come in pairs: one opens and one closes."
  }
] as const;

export type Mark = typeof MARKS[number];
export type MarkId = Mark["id"];
export const ALIASES: Record<string, MarkId> = {
  ".": "period", "period": "period", "full stop": "period", "fullstop": "period", "dot": "period", "stop": "period",
  "?": "question", "question": "question", "question mark": "question", "questionmark": "question",
  "!": "exclamation", "exclamation": "exclamation", "exclamation mark": "exclamation", "exclamation point": "exclamation", "exclamationmark": "exclamation",
  ",": "comma", "comma": "comma", "commas": "comma",
  "'": "apostrophe", "’": "apostrophe", "‘": "apostrophe", "`": "apostrophe", "apostrophe": "apostrophe",
  '"': "quotes", "“": "quotes", "”": "quotes", '""': "quotes", "“”": "quotes", "“ ”": "quotes", "„": "quotes",
  "quotes": "quotes", "quote": "quotes", "quotation": "quotes", "quotation marks": "quotes", "quotation mark": "quotes", "speech marks": "quotes",
  ":": "colon", "colon": "colon",
  ";": "semicolon", "semicolon": "semicolon", "semi colon": "semicolon", "semi-colon": "semicolon",
  "-": "hyphen", "hyphen": "hyphen",
  "—": "dash", "–": "dash", "--": "dash", "dash": "dash", "em dash": "dash", "en dash": "dash",
  "...": "ellipsis", "…": "ellipsis", "ellipsis": "ellipsis", "dots": "ellipsis", "three dots": "ellipsis", "dot dot dot": "ellipsis",
  "(": "parentheses", ")": "parentheses", "()": "parentheses", "( )": "parentheses",
  "parentheses": "parentheses", "parenthesis": "parentheses", "brackets": "parentheses", "round brackets": "parentheses", "bracket": "parentheses"
};

export const PAUSE_WORDS = ["No pause", "A tiny pause", "A medium pause", "A full stop", "A long, trailing pause"];
export const PITCH: Record<Mark["pitch"], { d: string; w: number; dash?: string }> = {
  down: { d: "M8 12 C 60 10, 100 12, 152 32", w: 4 },
  up: { d: "M8 30 C 60 32, 100 28, 152 8", w: 4 },
  loud: { d: "M8 28 C 40 26, 70 6, 152 6", w: 7 },
  flat: { d: "M8 20 L152 20", w: 4 },
  soft: { d: "M8 26 L152 26", w: 2.5, dash: "6 6" },
  gap: { d: "M8 20 L64 20 M96 20 L152 20", w: 4 },
  trail: { d: "M8 16 C 60 16, 100 22, 152 32", w: 4, dash: "1 10" }
};

export function lookup(raw: string): { id: MarkId; note?: string; error?: never } | { error: string; id?: never; note?: never } {
  const v = raw.trim().replace(/\s+/g, " ");
  const key = v.toLowerCase();
  if (!v) return { error: "Type a punctuation mark first, like ? or !" };
  const alias = Object.hasOwn(ALIASES, key) ? ALIASES[key] : undefined;
  if (alias) return { id: alias };
  if (/^([!?])\1+$/.test(v)) return { id: v[0] === "!" ? "exclamation" : "question", note: "One " + v[0] + " is all you need. Here it is:" };
  if (/^\.{4,}$/.test(v)) return { id: "ellipsis", note: "An ellipsis always has exactly three dots." };
  if (/^-{3,}$/.test(v)) return { id: "dash" };
  if (/^[\p{L}\p{N} ]+$/u.test(v)) return { error: "“" + v + "” is made of letters or numbers. Punctuation marks are the little symbols between words, like , or . Try one below!" };
  if (/\p{Extended_Pictographic}/u.test(v)) return { error: "That’s an emoji! Emojis are fun, but they aren’t punctuation. Try a mark like ? or !" };
  return { error: "“" + v + "” isn’t one of our punctuation pals yet. Try one of the marks below." };
}

export function surpriseMark(currentId: MarkId, random = Math.random): Mark {
  const pool = MARKS.filter(m => m.id !== currentId);
  return pool[Math.floor(random() * pool.length)] ?? MARKS[0];
}