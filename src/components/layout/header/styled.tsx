import React from 'react'
import { Link, Flex, FlexProps, LinkProps } from '@chakra-ui/core'

export function Container({ children, ...restProps }: FlexProps) {
  return (
    <Flex
      width="100%"
      display="flex"
      flexDirection={{ base: 'column', md: 'row' }}
      flexWrap="wrap"
      alignItems="center"
      padding="5"
      marginX="auto"
      {...restProps}
    >
      {children}
    </Flex>
  )
}

export function Nav({ children, ...restProps }: FlexProps) {
  return (
    <Flex
      as="nav"
      width={{ lg: 0.4 }}
      flexWrap="wrap"
      alignItems="center"
      fontSize="1rem"
      marginLeft={{ md: 'auto' }}
      {...restProps}
    >
      {children}
    </Flex>
  )
}

export function NavItem({ children, ...restProps }: LinkProps) {
  return (
    <Link marginRight="5" _hover={{ color: 'purple.300' }} {...restProps}>
      {children}
    </Link>
  )
}
