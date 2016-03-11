(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define("umd/module-name-imports/expected", ["foo", "foo-bar", "./directory/foo-bar"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("foo"), require("foo-bar"), require("./directory/foo-bar"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.foo, global.fooBar, global.umdModuleNameImportsDirectoryFooBar);
    global.umdModuleNameImportsExpected = mod.exports;
  }
})(this, function () {});
