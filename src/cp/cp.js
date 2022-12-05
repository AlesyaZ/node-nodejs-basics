import { fork } from "child_process";

const { stderr, stdin, stdout } = process;

const path = "./src/cp/files/script.js";

const spawnChildProcess = async (args) => {
  const childProcess = fork(path, args, { silent: true });

  try {
    stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(stdout);
  } catch (err) {
    if (err) {
      stderr.write(err.message);
    }
  }
};

spawnChildProcess(["someArgument1", "someArgument2"]);
