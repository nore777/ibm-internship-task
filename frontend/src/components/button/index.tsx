import { Text } from '@radix-ui/themes'
import './button.scss'

const variantToColor = {
  'primary': 'blue',
  'secondary': 'green'
}

interface ButtonProps {
  variant?: 'primary' | 'secondary',
  height?: number,
  disabled?: boolean,
  onClick?: () => void,
  children: React.ReactNode
}

export default function Button({
  variant = 'primary',
  height = 3,
  disabled = false,
  onClick = () => { },
  children
}: ButtonProps) {

  const color = disabled ? 'gray' : variantToColor[variant]

  return (
    <button
      style={{
        height: `${height}rem`,
        color: `var(--${color}-11)`,
        backgroundColor: `var(--${color}-3)`,
        border: `1px solid var(--${color}-11)`
      }}
      className={`button ${disabled && 'disabled'}`}
      onClick={() => { if (!disabled) onClick() }}
    >
      <Text size={'3'}>
        {children}
      </Text>
    </button>
  )
}
