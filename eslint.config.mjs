import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      // Plain <img> is used intentionally to preserve pixel-identical output
      // against the reference HTML (external placeholder images + exact
      // object-cover / transform behaviour). See AGENTS.md for details.
      "@next/next/no-img-element": "off",
      // The reference copy contains literal apostrophes and quotes inside JSX
      // text nodes (e.g. "don't", "I've"). They are valid JSX, so disable the
      // lint rule that would otherwise require escaping them.
      "react/no-unescaped-entities": "off",
    },
  },
]);

export default eslintConfig;
