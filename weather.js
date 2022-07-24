#!/usr/bin/env node

import {getArgs} from "./helpers/args.js";
import {printError, printHelp, printSuccess, printWeather} from "./services/log.service.js";
import {saveKeyValue, TOKEN_DICTIONARY} from "./services/storage.service.js";
import {getIcon, getWeather} from "./services/api.service.js";

const saveToken = async (token) => {
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token)
    printSuccess("Токет установлен")
  } catch(e) {
    printError(e.message)
  }
}

const saveCity = async (city) => {
  try {
    await saveKeyValue(TOKEN_DICTIONARY.city, city)
    printSuccess("Город установлен")
  } catch(e) {
    printError(e.message)
  }
}

const getForcast = async () => {
  try {
    const weather = await getWeather();
    printWeather(weather, getIcon(weather.weather[0].icon))
  } catch(e) {
    if(e?.response?.status === 404) {
      printError('Неверно указан город')
    } else if(e?.response?.status === 401) {
      printError('Неверно указан токен')
    } else {
      printError(e.message)
    }
  }

}

const initCLI = () => {
  const args = getArgs(process.argv)
  if(args.h) {
    //  help
    return printHelp()
  }
  if(args.s) {
    //  set city
    return saveCity(args.s)
  }
  if(args.t) {
    //  set token
    return saveToken(args.t)
  }
//  weather
  return getForcast()
}

initCLI();