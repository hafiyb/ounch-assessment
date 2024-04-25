'use client'

const { Button } = require('@nextui-org/react')

const CustomButton = ({children}) => {
  return(
    <Button className={'p-2 rounded-md bg-blueMain hover:bg-blueHover'}>
      {children}
    </Button>
  )
}

export default CustomButton