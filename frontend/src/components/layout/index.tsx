import { Flex } from "@radix-ui/themes";

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Flex
      direction={'column'}
      my="5"
      p={{
        initial: '1',
        xs: '2',
        md: '5'
      }}
      width={{
        initial: '100%',
        lg: '1000px'
      }}
      gap="6"
    >
      {children}
    </Flex>
  )
}
