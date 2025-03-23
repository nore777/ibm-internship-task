import { InputHTMLAttributes, forwardRef } from 'react'
import './textfield.scss'

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  height?: number
  placeholder?: string
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ height = 3, placeholder = '', ...rest }, ref) => {
    return (
      <input
        ref={ref}
        type="text"
        className="textfield"
        style={{ height: `${height}rem` }}
        placeholder={placeholder}
        {...rest}
      />
    )
  }
)

export default TextField
