import { Flex } from "@radix-ui/themes";

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Flex
      direction={'column'}
      my="9"
      m={{
        initial: '0',
        xs: '2',
        md: '0'
      }}
      width={{
        initial: '100%',
        lg: '1000px'
      }}
      gap="5"
    >
      {children}
    </Flex>
  )
}
