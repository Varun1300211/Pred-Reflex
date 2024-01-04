
/** @jsxImportSource @emotion/react */import { Fragment, useCallback, useContext } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Button, Center, Heading, Menu, MenuButton, MenuItem, MenuList, Popover, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, VStack } from "@chakra-ui/react"
import { ColorModeContext, EventLoopContext } from "/utils/context"
import { Event, isTrue } from "/utils/state"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import "focus-visible/dist/focus-visible"
import NextHead from "next/head"



export function Fragment_c4944d8b5ece4892844e987a2ddfe4ae () {
  const [ colorMode, toggleColorMode ] = useContext(ColorModeContext)


  return (
    <Fragment>
  {isTrue((colorMode === "light")) ? (
  <Fragment>
  <SunIcon/>
</Fragment>
) : (
  <Fragment>
  <MoonIcon/>
</Fragment>
)}
</Fragment>
  )
}

export function Button_5cbb2952409d1e5ed6e42602daa56ec7 () {
  const [ colorMode, toggleColorMode ] = useContext(ColorModeContext)
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_9922dd3e837b9e087c86a2522c2c93f8 = useCallback(toggleColorMode, [addEvents, Event, colorMode, toggleColorMode])

  return (
    <Button onClick={on_click_9922dd3e837b9e087c86a2522c2c93f8} sx={{"float": "right"}}>
  <Fragment_c4944d8b5ece4892844e987a2ddfe4ae/>
</Button>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <Fragment>
  <Button_5cbb2952409d1e5ed6e42602daa56ec7/>
  <VStack spacing={`1.5em`} sx={{"fontSize": "2em", "paddingTop": "10%"}}>
  <Heading sx={{"fontSize": "1em"}}>
  {`IPL Score Predictor
`}
</Heading>
</VStack>
  <Center>
  <Popover>
  <PopoverTrigger>
  <Button size={`md`} sx={{"bg": "green", "color": "white"}}>
  {`Description`}
</Button>
</PopoverTrigger>
  <PopoverContent>
  <PopoverBody>
  {`A Simple ML Model to predict IPL Scores between teams in an ongoing match. To make sure the model results accurate score and some reliability the minimum no. of current overs considered is greater than 5 overs.`}
</PopoverBody>
  <PopoverCloseButton/>
</PopoverContent>
</Popover>
</Center>
  <Center>
  <Menu>
  <MenuButton>
  {`Select the batting team`}
</MenuButton>
  <MenuList>
  <MenuItem>
  {`Chennai Super Kings`}
</MenuItem>
  <MenuItem>
  {`Delhi Daredevils`}
</MenuItem>
  <MenuItem>
  {`Kings XI Punjab`}
</MenuItem>
  <MenuItem>
  {`Kolkata Knight Riders`}
</MenuItem>
  <MenuItem>
  {`Mumbai Indians`}
</MenuItem>
  <MenuItem>
  {`Rajasthan Royals`}
</MenuItem>
  <MenuItem>
  {`Royal Challengers Bangalore`}
</MenuItem>
  <MenuItem>
  {`Sunrisers Hyderabad`}
</MenuItem>
</MenuList>
</Menu>
</Center>
</Fragment>
  <NextHead>
  <title>
  {`Reflex App`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
