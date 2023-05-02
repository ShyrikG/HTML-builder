// const { error } = require('console');
const fs = require('fs');
const path = require('path');
const { stdin, stdout } = process;

const output = fs.createWriteStream(path.join(__dirname, 'destination.txt'));
stdout.write('Введите любое слово (для выхода введите exit)\n');
stdin.on('data', data => {
  const dataString = data.toString().trim();
  if (dataString === 'exit') {
    process.exit();
  } else {
    output.write(dataString + '\n');
  };
});
process.on('SIGINT', () => process.exit());
process.on('exit', () => stdout.write('Всего хорошего.\n'));