import { Button, Menu, MenuItem } from '@mui/material'
import router from 'next/router'
import React from 'react'

const ToolsAndResourcesMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleMenuClick = (location: string) => {
    handleClose()
    router.push(location)
  }

  return (
    <div>
      <Button id='basic-button' aria-controls={open ? 'basic-menu' : undefined} aria-haspopup='true' aria-expanded={open ? 'true' : undefined} onClick={handleClick}>
        Tools &amp; Resources
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}>
        <MenuItem
          onClick={() => {
            handleMenuClick('/YieldCurves')
          }}>
          Yield Curves and Indices
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleMenuClick('/browse-securities')
          }}>
          Browse Securities
        </MenuItem>
      </Menu>
    </div>
  )
}
export default ToolsAndResourcesMenu
