const fs = require("node:fs/promises"); // importing a module
async function open_file() {
  const file_handle = await fs.open("index.js", "r", fs.constants.O_RDDONLY);
  let stream = file_handle.readLines({
    start: 0,
    end: Infinity,
    encoding: "utf8",
    autoClose: true,
    emitClose: true,
  });

  stream.on("close", () => {
    console.log("file handle %d closed", file_handle.fd);
  });
  stream.on("line", (line) => {
    console.log("Getting Line -> %s", line);
  });
}

module.exports = open_file; // remember to export and import as the same, if an object, let it remain and vice versa.
