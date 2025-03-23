import { useState, useEffect } from "react"
import SearchableDropdown from "../searchableDropdown"
import Button from "../button"
import { Flex, Text } from "@radix-ui/themes"

export default function Header() {
  const [cities, setCities] = useState({})
  const [search, setSearch] = useState('')
  const [data, setData] = useState({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    if (e.target.value.length < search.length) {
      setCities([])
    }
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
      let response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${search}&count=10`,
      )
      response = await response.json()
      setData(response)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleCitySearch()
    }, 333);
    return () => { clearTimeout(timeout) }
  }, [search])


  return (
    <Flex
      style={{ backgroundColor: 'var(--mint-1)' }}
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
        <Text size={'8'}>☁️weather forecasts</Text>
        <Flex gap={'3'} mt={"5"} width={"100%"}>
          <SearchableDropdown
            setSearch={(val: string) => setSearch(val)}
            data={cities}
            value={search}
            onChange={(e) => { handleChange(e) }}
            placeholder="Start searching for your city..."
          />
          <Button onClick={() => handleMeteoSearch()} disabled={!search ? true : false}>SEARCH</Button>
        </Flex>
      </Flex>
    </Flex>
  )
}
