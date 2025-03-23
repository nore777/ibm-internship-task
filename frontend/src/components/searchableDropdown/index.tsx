import { useState, useRef, forwardRef, InputHTMLAttributes } from "react"
import { Flex } from "@radix-ui/themes"
import TextField from "../textfield"
import './searchableDropdown.scss'

interface SearchableDropdownProps extends InputHTMLAttributes<HTMLInputElement> {
  setSearch?: any
  placeholder?: string
  height?: number
  data: any
}


const SearchableDropdown = forwardRef<HTMLInputElement, SearchableDropdownProps>(({
  setSearch = () => { }, placeholder = '', data = {}, ...rest }, _ref) => {

  const [showDropdown, setShowDropdown] = useState<boolean>(false)
  const ref = useRef<HTMLInputElement | null>(null)

  const handleFocus = () => {
    setShowDropdown(true)
  }

  const handleBlur = (e: any) => {
    if (ref.current && !ref.current.contains(e.relatedTarget)) {
      setShowDropdown(false);
    }
  }

  const handleContainerMouseDown = (e: any) => {
    if (e.target !== ref.current) {
      e.preventDefault();
    }
  }

  return (
    <Flex direction={'column'} width={'100%'}>
      <TextField
        ref={ref}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        {...rest}
      />
      {data.length > 0 && showDropdown &&
        <div onMouseDown={handleContainerMouseDown} style={{ position: 'relative' }}>
          <Flex className="dropdown-container">
            {data.map((item: any) => {
              return <span key={item.id}
                onClick={() => {
                  console.log(item)
                  setSearch(item.name)
                  ref.current?.blur()
                }}>
                {item.name}, <i style={{ all: 'unset', color: 'var(--gray-8)', }}>{item.admin2}, {item.country}</i>
              </span>
            })}
          </Flex>
        </div>
      }
    </Flex>
  )

})

export default SearchableDropdown
