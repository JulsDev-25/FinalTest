import React, { useState } from "react";
import { Menu, MenuItem, Button } from "@mui/material";

const CustomMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button onClick={handleClick} variant="contained">
        Ouvrir le menu
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            sx: {
              bgcolor: "black", // Fond du menu en noir
              color: "white", // Texte blanc pour lisibilité
            },
          },
        }}
      >
        <MenuItem
          sx={{
            bgcolor: "black", // Fond des éléments en noir aussi
            color: "white", // Texte blanc
            "&:hover": { bgcolor: "gray" }, // Fond gris au survol
          }}
          onClick={handleClose}
        >
          Option 1
        </MenuItem>
        <MenuItem
          sx={{
            bgcolor: "black",
            color: "white",
            "&:hover": { bgcolor: "gray" },
          }}
          onClick={handleClose}
        >
          Option 2
        </MenuItem>
      </Menu>
    </div>
  );
};

export default CustomMenu;
