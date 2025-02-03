import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../assets/logo/sjlogo.svg";
import { Link, NavLink } from "react-router-dom";

const pages = ["Home", "Career", "About", "Projects", "Experience", "Contact Me"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const generateRoute = (page: string) => {
    return page === "Home" ? "/" : `/${page.toLowerCase().replace(" ", "-")}`;
  };

  return (
    <AppBar position="sticky" className="z-10" sx={{ backgroundColor: "#0C0F24" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          <Link to="/">
            <img src={logo} alt="Logo" style={{ width: "50px", height: "auto", padding: "10px" }} />
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, justifyContent: "flex-end" }}>
            <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "end" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <NavLink
                    to={generateRoute(page)}
                    style={({ isActive }) => ({
                      textDecoration: "none",
                      backgroundImage: isActive ? "linear-gradient(to right, #ff7eb3, #ff758c, #ff7a50)" : "none",
                      backgroundClip: isActive ? "text" : "initial",
                      WebkitBackgroundClip: isActive ? "text" : "initial",
                      WebkitTextFillColor: isActive ? "transparent" : "inherit",
                      fontWeight: isActive ? "bold" : "normal",
                    })}
                  >
                    <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex", gap: 14, marginLeft: 24 } }}>
            {pages.slice(0, 5).map((page) => (
              <NavLink
                key={page}
                to={generateRoute(page)}
                style={({ isActive }) => ({
                  margin: 2,
                  display: "block",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  backgroundImage: isActive ? "linear-gradient(to right, #ff7eb3, #ff758c, #ff7a50)" : "none",
                  backgroundClip: isActive ? "text" : "initial",
                  WebkitBackgroundClip: isActive ? "text" : "initial",
                  WebkitTextFillColor: isActive ? "transparent" : "inherit",
                  fontWeight: isActive ? "bold" : "normal",
                })}
              >
                {page}
              </NavLink>
            ))}
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "flex-end" }}>
            {pages.slice(-1).map((page) => (
              <NavLink
                key={page}
                to={generateRoute(page)}
                style={({ isActive }) => ({
                  margin: 2,
                  display: "block",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  backgroundImage: isActive ? "linear-gradient(to right, #ff7eb3, #ff758c, #ff7a50)" : "none",
                  backgroundClip: isActive ? "text" : "initial",
                  WebkitBackgroundClip: isActive ? "text" : "initial",
                  WebkitTextFillColor: isActive ? "transparent" : "inherit",
                  fontWeight: isActive ? "bold" : "normal",
                 
                })}
              >
                {page}
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
