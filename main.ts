// Robot Romance — "Every Route Ends at Your Feet"
// One pickup line, spoken by a robot vacuum that has mapped the whole
// house: every route it plans still ends at its human's feet.
// Contract: exactly one line, 1-200 chars, written to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
// Deterministic: no randomness, no clock, no network. Exit 0 on success.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I mapped every room in this house, and every route I planned still ends at your feet.";

// The gate: one line, 1-200 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n") || !LINE.trim()) {
  console.error("entry line violates the 1-200 character single-line gate");
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
