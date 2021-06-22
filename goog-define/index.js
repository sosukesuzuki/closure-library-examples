require("google-closure-library");

goog.global.CLOSURE_DEFINES = {
  "goog.HELLO_WORLD2": "NOT HELLO, WORLD",
};

goog.HELLO_WORLD1 = goog.define(
  /* name */ "goog.HELLO_WORLD1",
  /* defaultValue */ "HELLO, WORLD"
);
goog.HELLO_WORLD2 = goog.define(
  /* name */ "goog.HELLO_WORLD2",
  /* defaultValue */ "HELLO, WORLD"
);

console.log(goog.HELLO_WORLD1); // HELLO, WORLD
console.log(goog.HELLO_WORLD2); // NOT HELLO, WORLD
