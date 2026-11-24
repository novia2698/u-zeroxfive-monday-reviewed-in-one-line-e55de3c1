// Monday, Reviewed in One Line — entry for make.fun bounty
// u-zeroxfive-monday-reviewed-in-one-line-e55de3c1
//
// The program writes exactly one line — a review of the entrant's own
// Monday, under 200 characters — to /output/entry.txt (or
// $MAKEFUN_OUTPUT_DIR/entry.txt when the harness sets it).
// The line is a review in the classic one-star style: a concrete Monday
// (one meeting, three emails, one coffee) that ends in a verdict.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The review: the meeting/email inversion is the joke's engine, the
// coffee quitting first is the punchline, "One star." is the verdict.
const LINE =
  "Monday: one meeting that could've been an email, three emails that should've been meetings, and a coffee that quit before I did. One star.";

// Guard the gate before writing: the sealed scorer only accepts UTF-8
// text of 1 to 200 characters, so refuse to emit anything longer.
if (LINE.length === 0 || LINE.length > 200) {
  throw new Error(`review line must be 1-200 characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${outFile}`);
