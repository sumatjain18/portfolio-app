import React from "react";
import Button from "@mui/material/Button";

interface MuiButtonProps {
  label: string;
  onClick?: () => void;
  color?: "primary" | "secondary" | "inherit";
  variant?: "text" | "contained" | "outlined";
}

const MuiButton: React.FC<MuiButtonProps> = ({ label, onClick, color = "primary", variant = "text" }) => {
  return (
    <Button color={color} variant={variant} onClick={onClick}>
      {label}
    </Button>
  );
};

export default MuiButton;