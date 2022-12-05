import fs from "node:fs";
import { createHash } from "node:crypto";

const { stderr } = process;

const path = "./src/hash/files/fileToCalculateHashFor.txt";
const hash = "SHA256";

const calculateHash = async () => {
  try {
    const fileText = fs.createReadStream(path, { encoding: "utf8" });
    fileText.on("data", (data) => {
      console.log(createHash(hash).update(data).digest("hex"));
    });
  } catch (err) {
    if (err) stderr.write(err.message);
  }
};

await calculateHash();
