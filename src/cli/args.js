const { argv } = process;

const parseArgs = () => {
  const args = argv.slice(2);
  let result = [];

  args.forEach((values, i, value) => {
    if (values.match(/^--/) && !value[i + 1].match(/^--/)) {
      result.push(`${values.slice(2)} is ${value[i + 1]}`);
    }
  });

  console.log(result.join(", "));
};

parseArgs();
