import React from 'react'
import { LinkProps, Link, Flex } from '@chakra-ui/core'

export function LogoLink({ children, href, ...restProps }: LinkProps) {
  return (
    <Flex
      marginBottom={{
        base: 4,
        md: 0,
      }}
      alignItems="center"
      justify-content={{
        lg: 'center',
      }}
      width={{ lg: 0.2 }}
      order={{
        base: 9999,
        lg: 0,
      }}
    >
      <Link {...restProps}>{children}</Link>
    </Flex>
  )
}
