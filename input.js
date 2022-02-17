const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};
stdin.on("data", handleUserInput);
const handleUserInput = function (data) {
  // your code here
  process.stdout.write(data);
};

module.exports = setupInput