import React from "react";
import { Box, Grid, Typography, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#0C0F24",
        color: "white",
        py: 4,
        px: 2,
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        {/* Quick Links Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 1 }}>
            Quick Links
          </Typography>
          <Box>
            <Link to="/" color="inherit" style={{ display: "flex", marginBottom: 0.5 }}>
              Home
            </Link>
            <Link to="/career" color="inherit" style={{ display: "flex", marginBottom: 0.5 }}>
              Career
            </Link>
            <Link to="/experience" color="inherit" style={{ display: "flex", marginBottom: 0.5 }}>
              Experience
            </Link>
            <Link to="/about" color="inherit" style={{ display: "flex", marginBottom: 0.5 }}>
              About
            </Link>
            <Link to="/contact-me" color="inherit" style={{ display: "flex", marginBottom: 0.5 }}>
              Contact Me
            </Link>
          </Box>
        </Grid>

        {/* Social Media Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 1 }}>
            Follow Me
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton href="https://facebook.com" target="_blank" color="inherit" aria-label="Facebook">
              <FacebookIcon />
            </IconButton>
            <IconButton href="https://twitter.com" target="_blank" color="inherit" aria-label="Twitter">
              <TwitterIcon />
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/sumat-jain-6a8236166/" target="_blank" color="inherit" aria-label="LinkedIn">
              <LinkedInIcon />
            </IconButton>
            <IconButton href="https://github.com/sumatjain18" target="_blank" color="inherit" aria-label="GitHub">
              <GitHubIcon />
            </IconButton>
          </Box>
        </Grid>

        {/* About Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 1 }}>
            About Me
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.5 }}>
            Hi! 🌟 I'm a passionate developer with a love for crafting beautiful, responsive, and intuitive web applications. With expertise in React, TypeScript, and Material UI, I turn ideas into
            engaging digital experiences that leave a lasting impression. Let’s build something amazing together! 🚀
          </Typography>
        </Grid>
      </Grid>

      {/* Copyright Section */}
      <Box
        sx={{
          textAlign: "center",
          marginTop: 4,
          borderTop: "1px solid rgba(255, 255, 255, 0.2)",
          paddingTop: 2,
        }}
      >
        <Typography variant="body2" sx={{ opacity: 0.8 }}>
          © {new Date().getFullYear()} Sumat Jain. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
