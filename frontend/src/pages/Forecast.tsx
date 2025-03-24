import Layout from "../components/layout"
import { useLocation } from "react-router-dom"
import ICityItem from "../interface/ICityItem"
import CityHeader from '../components/forecast/CityHeader.tsx'
import ForecastCurrent from "../components/forecast/ForecastCurrent.tsx"
import IForecastData from "../interface/IForecastData"
import Button from "../components/button/index.tsx"
import ForecastCard from "../components/forecast/ForecastCard.tsx"
import { Flex, Grid, Heading, Separator } from "@radix-ui/themes"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useAppState } from "../context/StateContext.tsx"


export default function Forecast() {
  const navigate = useNavigate()
  const location = useLocation()
  const cityName = new URLSearchParams(location.search).get('city')
  const lat = new URLSearchParams(location.search).get('latitude')
  const lon = new URLSearchParams(location.search).get('longitude')
  const [cityData, setCityData] = useState<ICityItem | null>(location?.state?.cityData || null)
  const [forecastData, setForecastData] = useState<IForecastData | null>(null)
  const { visit } = useAppState()

  if (!cityName || !lat || !lon) {
    navigate('/')
    return null
  }

  // TODO: This is a duplicate from header
  const handleMeteoSearch = async () => {
    try {
      let response: any = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}` +
        `&daily=weather_code,temperature_2m_max,temperature_2m_min,wind_speed_10m_max,rain_sum&` +
        `current=relative_humidity_2m,temperature_2m,apparent_temperature,is_day,wind_speed_10m,` +
        `weather_code,cloud_cover,rain&timezone=auto&timeformat=unixtime`
      )
      response = await response.json()
      setForecastData(response)

    } catch (error) {
      console.log(error)
    }
  }

  const handleCitySearch = async () => {
    try {
      let response: any = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=8&language=en&format=json`,
      )
      response = await response.json()

      for (let i = 0; i < response.results.length; i++) {
        if (
          response.results[i].name === cityName &&
          response.results[i].latitude.toString() === lat &&
          response.results[i].longitude.toString() === lon
        ) {
          setCityData(response.results[i])
        }
      }
    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    if (cityData) (
      visit(cityName, parseFloat(lat), parseFloat(lon), cityData?.country_code as string)
    )
    handleMeteoSearch()
    handleCitySearch()
  }, [lat, lon, cityName])


  if (!forecastData || !cityData) return <>Loading...</>

  return (
    <Layout>
      <Flex>
        <Button onClick={() => navigate('/')}>{"Home"}</Button>
      </Flex>

      <Separator size={'4'} />
      <CityHeader cityData={cityData} />

      <ForecastCurrent data={forecastData} />
      <Separator size={'4'} />

      <Heading weight={'medium'} size={'8'}>Forecast</Heading>
      <Grid columns={{ initial: '1', xs: '2', sm: '3' }} gap="5">
        {forecastData.daily.time.map((_item, index) => {
          if (index >= 1 && index <= 5) {
            return (
              <ForecastCard
                key={index}
                min={forecastData.daily.temperature_2m_min[index]}
                max={forecastData.daily.temperature_2m_max[index]}
                tempUnit={forecastData.daily_units.temperature_2m_min}
                time={forecastData.daily.time[index]}
                rain={forecastData.daily.rain_sum[index]}
                rainUnit={forecastData.daily_units.rain_sum}
                wind={forecastData.daily.wind_speed_10m_max[index]}
                windUnit={forecastData.daily_units.wind_speed_10m_max}
              />
            );
          }
          return null;
        })}
      </Grid>
      <Separator mb={'9'} size={'4'} />
    </Layout>
  )
}

