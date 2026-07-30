import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const portfolioTitle =
  /<title>vision\.movv — Direção com IA, Filme e Cor<\/title>/i;
const socialPreviewMeta =
  /<meta(?=[^>]*\bproperty=["']og:image["'])(?=[^>]*\bcontent=["'][^"']*\/og\.png["'])[^>]*>/i;

test("renders final portfolio metadata", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  const html = await response.text();
  assert.match(html, portfolioTitle);
  assert.match(html, socialPreviewMeta);
});

test("ships the local type system in React and standalone entry points", async () => {
  const [css, standalone, layout] = await Promise.all([
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../index.html", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(css, /font-family:\s*"Manrope"/);
  assert.match(css, /font-family:\s*"Antonio"/);
  assert.match(css, /--font-body:\s*"Manrope"/);
  assert.match(css, /--font-display:\s*"Antonio"/);
  assert.match(
    standalone,
    /public\/fonts\/manrope-latin-wght-normal\.woff2/,
  );
  assert.match(
    standalone,
    /public\/fonts\/antonio-latin-wght-normal\.woff2/,
  );
  assert.doesNotMatch(layout, /next\/font/);
});
