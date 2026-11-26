// One Line to Your Younger Self — program/v1 entry.
// Writes one hard-won line, in English, straight to the writer's younger self,
// to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt when set).
// Gate: UTF-8 text, 1 to 200 characters, not only whitespace, one line.

const line =
  "Stop saving your best jokes for the cool kids, kid — the quiet one in the back row who laughs at the bad ones is the one still there in ten years.";

const outDir = Deno.env.get("MAKEFUN_OUTPUT_DIR") ?? "/output";
await Deno.mkdir(outDir, { recursive: true });
await Deno.writeTextFile(`${outDir}/entry.txt`, line + "\n");
console.log(`Wrote ${line.length} chars to ${outDir}/entry.txt`);
