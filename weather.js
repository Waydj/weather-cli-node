#!/usr/bin/env node

import {getArgs} from "./helpers/args.js";

const initCLI = () => {
  const args = getArgs(process.argv)
  console.log(args)
  if(args.h) {
    //  help
  }
  if(args.s) {
    //  set city
  }
  if(args.t) {
    //  set token
  }
//  weather
}

initCLI()