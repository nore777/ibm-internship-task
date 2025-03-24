import { Text, Flex, Box } from "@radix-ui/themes"
import formatDate from "../../utils/formatDate"
import './ForecastCard.scss'
import { Calendar, Thermometer, Wind, Droplet } from "lucide-react"


interface ForecastCardProps {
  min: number
  max: number
  tempUnit: string
  time: number
  rain: number
  rainUnit: string
  wind: number,
  windUnit: string
}

export default function ForecastCard(props: ForecastCardProps) {
  const date = formatDate(new Date(props.time * 1000))

  return (
    <Flex direction={'column'}>
      <Flex>
        <Text weight={'bold'}><Calendar color={'var(--blue-10)'} /> {date} </Text>
      </Flex>

      <Flex direction={'column'} className="forecast-card">
        <Box>
          <Thermometer size={15} />{props.min} {props.tempUnit} to {props.max} {props.tempUnit}
        </Box>
        <Box>
          <Wind size={15} /> {props.wind} {props.windUnit}
        </Box>
        <Box>
          <Droplet size={15} />{props.rain} {props.rainUnit}
        </Box>
      </Flex>
    </Flex >
  )
}
