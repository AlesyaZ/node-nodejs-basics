import fs from "node:fs";

const { stderr, stdout } = process;

const path = "./src/streams/files/fileToRead.txt";

const read = async () => {
  try {
    const fileTextRead = fs.createReadStream(path, { encoding: "utf8" });
    fileTextRead.on("data", (data) => {
      stdout.write(data);
    });
  } catch (err) {
    if (err) stderr.write(err.message);
  }
};

await read();
