import fs from "node:fs";

const { stderr, stdin } = process;

const path = "./src/streams/files/fileToWrite.txt";

const write = async () => {
  try {
    const fileCreate = fs.createWriteStream(path);

    stdin.on("data", (data) => {
      fileCreate.write(data);
    });
  } catch (err) {
    if (err) stderr.write(err.message);
  }
};

await write();
