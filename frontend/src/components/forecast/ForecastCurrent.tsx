import { Text } from "@radix-ui/themes"
import IForecastData from "../../interface/IForecastData"
import { Thermometer, Cloud, Wind, Droplet } from "lucide-react"

interface ForecastCurrentProps {
  data: IForecastData
}

export default function ForecastCurrent({ data }: ForecastCurrentProps) {

  if (!data.current) return (<>No weather data available...</>)

  return (
    <>
      <Text size="7">
        <Thermometer size={24} /> {data.current.temperature_2m} {data.current_units.temperature_2m}, {" "}
        <i style={{ all: 'unset', color: 'var(--gray-8)' }}>
          feels like {data.current.apparent_temperature} {data.current_units.apparent_temperature}
        </i>
        <br />
        <Cloud size={24} /> {" " + data.current.cloud_cover} {data.current_units.cloud_cover} <br />
        <Wind size={24} /> {" " + data.current.wind_speed_10m} {data.current_units.wind_speed_10m} <br />
        <Droplet size={24} /> {" " + data.current.rain} {data.current_units.rain}
      </Text>
    </>
  )
}
