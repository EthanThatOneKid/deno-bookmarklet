import { parseFlags } from "./deps/std/flags.ts";

export const mod = async () => {
  // Establishing configurations.
  const flags = parseFlags(Deno.args);
  const sourceFilename: string = String(flags["_"][0]);
  if (sourceFilename === undefined) {
    console.error("No source file given.");
    Deno.exit();
  }

  // Bundling TypeScript code. See
  // https://deno.land/manual@v1.11.3/typescript/runtime#bundling
  // and https://deno.land/manual/typescript/runtime#denoemit.
  const { files } = await Deno.emit(
    sourceFilename,
    {
      bundle: "classic",
      check: false,
      // TODO(@ethandavidson): Find workaround for injecting sources.
      // Use virtual sources to pass static variables into the bundle.
      // sources: { "/FLAGS.ts": `export const FLAGS = ${JSON.stringify(flags)};` },
    },
  );

  // Preparing and dumping bookmarklet text.
  const bundledJs = files["deno:///bundle.js"];
  const minifiedJs = bundledJs.replace(/\s+/gm, " ");
  const encodedJs = encodeURIComponent(minifiedJs);
  const bookmarklet = `javascript:${encodedJs}`;
  console.log(bookmarklet);
};

if (import.meta.main) {
  await mod();
}
