import ICityItem from "../../interface/ICityItem"
import { Flex, Text } from "@radix-ui/themes"

interface CityHeaderProps {
  cityData: ICityItem
}

export default function CityHeader({ cityData }: CityHeaderProps) {

  return (
    <>
      <Flex>
        <img style={{ height: '64px' }} src={`https://flagsapi.com/${cityData.country_code}/flat/64.png`} />
      </Flex>
      <Text size={'6'}>
        {cityData.country}, {cityData.admin2 || cityData.admin1} <br />
        <Text weight={'bold'} size={'8'}>
          {cityData.name}.
        </Text>
      </Text>
    </>
  )
}
