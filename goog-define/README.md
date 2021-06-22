# goog-define

Example of [goog.define](https://github.com/google/closure-library/blob/c7445058af72f679ef3273274e936d5d5f40b55a/closure/goog/base.js#L166).

```
$ node ./uncompiled-mode.js
HELLO, WORLD
Injected by goog.global.CLOSURE_DEFINES
```

```
$ node ./compiled-mode-1.js
HELLO, WORLD
HELLO, WORLD
```

```
$ node ./compiled-mode-2.js
HELLO, WORLD
Injected by --define option
```
