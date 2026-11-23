import test from "node:test";
import assert from "node:assert/strict";

import { plural } from "../core/plural.js";

test("concorda o substantivo com a contagem", () => {
  assert.equal(plural(0, "ambiente", "ambientes"), "0 ambientes");
  assert.equal(plural(1, "ambiente", "ambientes"), "1 ambiente");
  assert.equal(plural(3, "elemento", "elementos"), "3 elementos");
});
