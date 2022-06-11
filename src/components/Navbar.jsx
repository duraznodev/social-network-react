import { AppBar, styled, Toolbar, Typography } from "@mui/material"
import React from "react"
import EggAltIcon from "@mui/icons-material/EggAlt"

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
})

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          EggBook
        </Typography>
        <EggAltIcon
          fontSize="large"
          sx={{ display: { xs: "block", sm: "none" } }}
        />
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar
