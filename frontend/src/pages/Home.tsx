import Layout from "../components/layout"
import Button from "../components/button"
import { Text, Flex, Separator } from "@radix-ui/themes"
import { useAppState } from "../context/StateContext"
import { useNavigate } from "react-router-dom"


export default function Home() {
  const { topCities } = useAppState()
  const navigate = useNavigate()

  if (Object.keys(topCities).length === 0) return <>Nothing to show...</>

  return (
    <Layout>
      <Text size={'8'}>
        Your locations
      </Text>

      <Separator size={'4'} />

      <Flex wrap={'wrap'} gap={'5'}>
        {Object.keys(topCities).map((item, index) => {
          const val = item.split(';')
          return (
            <Button
              key={index}
              variant={index >= 0 && index < 3 ? 'secondary' : 'primary'}
              onClick={() => navigate(`/forecast?city=${val[0]}&latitude=${val[1]}&longitude=${val[2]}`)}
            >
              <Flex gap={'3'} align={'center'}>
                <img src={`https://flagsapi.com/${topCities[item].countryCode}/flat/32.png`} />
                <Text>
                  {val[0]}
                </Text>
              </Flex>
            </Button>
          )
        })}
      </Flex>
    </Layout>
  )
}
