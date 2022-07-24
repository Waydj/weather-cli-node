import {getKeyValue, TOKEN_DICTIONARY} from './storage.service.js'
import axios from "axios";

const getIcon = (icon) => {
  switch(icon.slice(0, -1)) {
    case '01':
      return '☀';
    case '02':
      return '🌤';
    case '03':
      return '☁';
    case '04':
      return '☁';
    case '09':
      return '🌧';
    case '10':
      return '🌦';
    case '11':
      return '🌩';
    case '13':
      return '❄';
    case '50':
      return '🌫';
  }
}

const getWeather = async () => {
  const token = await getKeyValue(TOKEN_DICTIONARY.token)
  const city = await getKeyValue(TOKEN_DICTIONARY.city)

  if(!token) {
    throw new Error('Не задан ключ API, задайте его через команду -t [API_KEY]')
  }
  if(!city) {
    throw new Error('Не задан город, задайте его через команду -s [CITY]')
  }

  const {data} = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
    params: {
      q: city,
      appid: token,
      lang: 'ru',
      units: 'metric'
    }
  })
  return data

  // const url = new URL('https://api.openweathermap.org/data/2.5/weather')
  // url.searchParams.append('q', city)
  // url.searchParams.append('appid', token)
  // url.searchParams.append('lang', 'ru')
  // url.searchParams.append('units', 'metric')
  // https.get(url, (response) => {
  //   let res = ''
  //   response.on('data', (chunk) => {
  //     res += chunk
  //   })
  //   response.on('end', () => {
  //     console.log(res)
  //   })
  // })
}

export {getWeather, getIcon}