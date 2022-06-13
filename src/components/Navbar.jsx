import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material"
import React, { useState } from "react"
import { Email, EggAlt, Notifications } from "@mui/icons-material"

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
})

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "whitesmoke",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}))

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: 20,
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}))

const UserBox = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: 10,
  [theme.breakpoints.down("sm")]: {
    display: "flex",
  },
}))

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (e) => {
    setOpen(true)
    setAnchorEl(e.currentTarget)
  }
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          EggBook
        </Typography>

        <EggAlt
          fontSize="large"
          sx={{ display: { xs: "block", sm: "none" } }}
        />

        <Search>
          <InputBase placeholder="Search..." />
        </Search>

        <Icons>
          <Badge badgeContent={1} color="error">
            <Email />
          </Badge>
          <Badge badgeContent={1} color="error">
            <Notifications />
          </Badge>
          <Avatar
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/646df518-97b3-4ac1-98f0-ed7ae803cb31/d8q6gah-f01c430b-b815-47de-bc99-d03189f62998.png/v1/fill/w_894,h_894,strp/dinosaur_avatar_by_acrylami_d8q6gah-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzY0NmRmNTE4LTk3YjMtNGFjMS05OGYwLWVkN2FlODAzY2IzMVwvZDhxNmdhaC1mMDFjNDMwYi1iODE1LTQ3ZGUtYmM5OS1kMDMxODlmNjI5OTgucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.qL9_OtFiSzUuwN-HOouFnIKH-k2Ksr6kgGVieQtLZuw"
            sx={{ width: 30, height: 30 }}
            onClick={handleClick}
          />
        </Icons>

        <UserBox>
          <Avatar
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/646df518-97b3-4ac1-98f0-ed7ae803cb31/d8q6gah-f01c430b-b815-47de-bc99-d03189f62998.png/v1/fill/w_894,h_894,strp/dinosaur_avatar_by_acrylami_d8q6gah-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzY0NmRmNTE4LTk3YjMtNGFjMS05OGYwLWVkN2FlODAzY2IzMVwvZDhxNmdhaC1mMDFjNDMwYi1iODE1LTQ3ZGUtYmM5OS1kMDMxODlmNjI5OTgucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.qL9_OtFiSzUuwN-HOouFnIKH-k2Ksr6kgGVieQtLZuw"
            sx={{ width: 30, height: 30 }}
            onClick={handleClick}
          />
          <Typography variant="h6">Dino</Typography>
        </UserBox>
      </StyledToolbar>

      <Menu
        anchorEl={anchorEl}
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar
