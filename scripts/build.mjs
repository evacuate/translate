import { build } from "esbuild";
import path from "node:path";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const shared = {
  entryPoints: [path.resolve(__dirname, "../src/index.ts")],
  bundle: true,
  minify: true,
  sourcemap: true,
};

// CommonJS build
build({
  ...shared,
  outfile: path.resolve(__dirname, "../dist/cjs/index.js"),
  platform: "node",
  format: "cjs",
}).catch(() => process.exit(1));

// ESM build
build({
  ...shared,
  outfile: path.resolve(__dirname, "../dist/index.js"),
  platform: "node",
  format: "esm",
}).catch(() => process.exit(1));
