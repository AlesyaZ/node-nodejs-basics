import { cpus } from "os";
import { Worker } from "worker_threads";

const { stderr } = process;

const path = "./src/wt/worker.js";

let number = 10;

const performCalculations = async () => {
  const resultPromise = [];

  for (let index = 0; index < cpus().length; index++) {
    const worker = new Worker(path, { workerData: index + number });

    const creatWorker = new Promise((resolve, reject) => {
      worker.on("message", (data) => resolve({ status: "resolved", data }));
      worker.on("error", reject);
    }).catch((err) => ({
      status: "error",
      data: null,
    }));

    resultPromise.push(creatWorker);
  }

  try {
    await Promise.all(resultPromise).then((result) => console.log(result));
  } catch (err) {
    if (err) stderr.write(err.message);
  }
};

await performCalculations();
