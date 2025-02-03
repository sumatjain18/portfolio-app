import React from "react";
import Typography from "@mui/material/Typography";

interface MuiTypographyProps {
  text: string;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2";
  color?: "initial" | "inherit" | "primary" | "secondary" | "textPrimary" | "textSecondary" | "error";
}

const MuiTypography: React.FC<MuiTypographyProps> = ({ text, variant = "h6", color = "inherit" }) => {
  return (
    <Typography variant={variant} color={color}>
      {text}
    </Typography>
  );
};

export default MuiTypography;
