import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { makeStyles } from "@material-ui/core/styles";

const ITEM_HEIGHT = 30;

const useStyles = makeStyles({
  root: {
    border: 0,
    padding: 5,
    alignSelf: "center",
  },
});

export default function SettingsButton({
  deleteFunc,
  editFunc,
  valueDelete,
  valueEdit,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
        classes={{
          root: classes.root,
        }}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4,
            width: "10ch",
          },
        }}
      >
        <MenuItem onClick={editFunc}>{valueEdit}</MenuItem>
        <MenuItem onClick={deleteFunc}>{valueDelete}</MenuItem>
      </Menu>
    </div>
  );
}
