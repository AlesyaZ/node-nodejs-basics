const { env } = process;

const parseEnv = () => {
  const variables = Object.entries(env)
    .filter((value) => value[0].match(/^RSS_/))
    .map((value) => value.join("="));

  console.log(variables.join("; "));
};

parseEnv();
