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

const printWeather = (res, icon) => {
  console.log(`
    ${chalk.bgYellow(chalk.black(' Weather '))}
    Погода в городе ${res.name}
    ${icon}  ${res.weather[0].description}
    Температура: ${Math.floor(res.main.temp)} °C (ощущается как ${Math.floor(res.main.feels_like)} °C)
    Влажность: ${res.main.humidity} %
    Скорость ветра: ${res.wind.speed} м/с
    `)
};

export {printError, printSuccess, printHelp, printWeather}