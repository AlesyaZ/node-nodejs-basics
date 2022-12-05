import path from "node:path";
import fs from "node:fs";
import zlib from "node:zlib";
import util from "node:util";
import url from "node:url";
import { pipeline } from "node:stream";

const { stderr } = process;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const path1 = path.join(__dirname, "files", "fileToCompress.txt");
const path2 = path.join(__dirname, "files", "archive.gz");

const compress = async () => {
  try {
    const pipe = util.promisify(pipeline);
    await pipe(
      fs.createReadStream(path1),
      zlib.createGzip(),
      fs.createWriteStream(path2)
    );
  } catch (err) {
    if (err) stderr.write(err.message);
  }
};

await compress();
