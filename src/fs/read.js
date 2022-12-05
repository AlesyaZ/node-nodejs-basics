import fs from "node:fs";

const { stderr, stdout } = process;

const errorMessage = "FS operation failed";
const color = {
  red: "\x1b[31m",
};
const path = "./src/fs/files/fileToRead.txt";

const read = async () => {
  try {
    if (!fs.existsSync(path)) {
      console.log(`${color.red}Error: ${errorMessage}`);
    } else {
      const fileTextRead = fs.createReadStream(path, { encoding: "utf8" });
      fileTextRead.on("data", (data) => {
        console.log(data);
      });
    }
  } catch (err) {
    if (err) stderr.write(err.message);
  }
};

await read();
