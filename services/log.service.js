import chalk from "chalk";

const printError = (error) => {
  console.log(chalk.bgRed(' ERROR ') + ' ' + error)
}

const printSuccess = (msg) => {
  console.log(chalk.bgGreen(' SUCCESS ') + ' ' + msg)
}

const printHelp = () => {
  console.log(`
    ${chalk.bgCyan(chalk.black(' HELP '))}
    Без параметров - вывод погоды
    -s [CITY] для установки города
    -h Помощь
    -t [JWT] установка API-токена
    `)
}

export {printError, printSuccess, printHelp}