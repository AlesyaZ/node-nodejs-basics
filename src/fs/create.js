import fs from "fs";

const path = "./src/fs/files/fresh.txt";

const fileCreate = fs.createWriteStream(path);

const create = async () => {
  const fileText = "I am fresh and young";
  const errorMessage = "FS operation failed";

  fileCreate.write(fileText);

  if (fs.existsSync(path)) {
    console.log(errorMessage);
  }
};

await create();
