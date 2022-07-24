#!/usr/bin/env node

import {getArgs} from "./helpers/args.js";
import {printError, printHelp, printSuccess} from "./services/log.service.js";
import {saveKeyValue, TOKEN_DICTIONARY} from "./services/storage.service.js";
import {getWeather} from "./services/api.service.js";

const saveToken = async (token) => {
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token)
    printSuccess("Токет установлен")
  } catch(e) {
    printError(e.message)
  }
}

const initCLI = () => {
  const args = getArgs(process.argv)
  if(args.h) {
    //  help
    printHelp()
  }
  if(args.s) {
    //  set city
  }
  if(args.t) {
    //  set token
    return saveToken(args.t)
  }
//  weather
  getWeather('Moscow')
}


initCLI();