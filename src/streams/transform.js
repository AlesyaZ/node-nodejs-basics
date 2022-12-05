import { Transform, pipeline } from "stream";

const { stderr, stdin, stdout } = process;

const transform = async () => {
  try {
    const reverseTransform = new Transform({
      transform(chunk, encoding, callback) {
        const reverseString = chunk.toString().split("").reverse().join("");
        this.push(reverseString);
        console.log("\n");
        callback();
      },
    });

    pipeline(stdin, reverseTransform, stdout, (err) => {
      stderr.write(err.message);
    });
  } catch (err) {
    if (err) stderr.write(err.message);
  }
};

await transform();
