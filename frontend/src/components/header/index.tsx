import { useState, useEffect } from "react"
import SearchableDropdown from "../searchableDropdown"
import Button from "../button"
import { Flex, Text } from "@radix-ui/themes"
import { useNavigate } from "react-router-dom"
import ICityItem from "../../interface/ICityItem"
import { useAppState } from "../../context/StateContext"
import { SunMoon } from "lucide-react"

export default function Header() {
  const [cities, setCities] = useState<ICityItem[] | null>(null)
  const [item, setItem] = useState<ICityItem | null>(null)
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const { switchTheme } = useAppState()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    setCities(null)
    setItem(null)
  }

  const handleCitySearch = async () => {
    try {
      let response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${search}&count=8&language=en&format=json`,
      )
      const { results } = await response.json()
      if (results) {
        setCities(results)
      }

    } catch (error) {
      console.log(error)
    }
  }

  const handleMeteoSearch = async () => {
    try {
      if (!item) {
        await handleCitySearch()
      }

      navigate(`/forecast?city=${item?.name}&latitude=${item?.latitude}&longitude=${item?.longitude}`, {
        state: {
          cityData: item,
        }
      })

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleCitySearch()
    }, 250);
    return () => { clearTimeout(timeout) }
  }, [search, handleCitySearch])


  return (
    <Flex
      width={{
        initial: '100%',
      }}
      direction={'column'}
      justify={'center'}
      align={'center'}
    >
      <Flex
        direction={'column'}
        width={{
          initial: '100%',
          md: '800px'
        }}
        p={{
          initial: '2',
          sm: '9'
        }}
      >
        <Flex justify={'between'}>
          <Text size={'8'}>☁️weather forecasts</Text>
          <SunMoon style={{ cursor: 'pointer' }} size={32} onClick={switchTheme} />
        </Flex>

        <Flex gap={'3'} mt={"5"} width={"100%"}>
          <SearchableDropdown
            setSearch={(val: string) => setSearch(val)}
            setItem={(item: Object) => { setItem(item) }}
            data={cities}
            value={search}
            onChange={(e) => { handleChange(e) }}
            placeholder="Start searching for your city..."
          />
          <Button
            onClick={() => handleMeteoSearch()}
            disabled={!item ? true : false}
          >
            SEARCH
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}
