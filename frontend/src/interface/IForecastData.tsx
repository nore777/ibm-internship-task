export default interface IForecastData {
  "latitude": number,
  "longitude": number,
  "generationtime_ms": number,
  "utc_offset_seconds": number,
  "timezone": string,
  "timezone_abbreviation": string,
  "elevation": number,
  "current_units": {
    "time": string,
    "interval": string,
    "relative_humidity_2m": string,
    "temperature_2m": string,
    "apparent_temperature": string,
    "is_day": string,
    "wind_speed_10m": string,
    "weather_code": string,
    "cloud_cover": string,
    "rain": string
  },
  "current": {
    "time": number,
    "interval": number,
    "relative_humidity_2m": number,
    "temperature_2m": number,
    "apparent_temperature": number,
    "is_day": number,
    "wind_speed_10m": number,
    "weather_code": number,
    "cloud_cover": number,
    "rain": number
  },
  "daily_units": {
    "time": string,
    "weather_code": string,
    "temperature_2m_max": string,
    "temperature_2m_min": string,
    "wind_speed_10m_max": string,
    "rain_sum": string
  },
  "daily": {
    "time": number[],
    "weather_code": number[],
    "temperature_2m_max": number[],
    "temperature_2m_min": number[],
    "wind_speed_10m_max": number[],
    "rain_sum": number[]
  }
}
