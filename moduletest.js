//an 'exports' object is available in every module, and it is returned whenever the require function is used to include the module
exports.exportfunc = function() {
  console.log("I am a module. This function is in a separate file.");
}
