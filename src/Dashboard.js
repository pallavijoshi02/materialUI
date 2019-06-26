import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    width: '50%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function DashBoard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Layout" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
          <a href=""><ListItemText primary="Box" /></a>
          </ListItem>
          <ListItem button className={classes.nested}>
          <a href=""><ListItemText primary="Container" /></a>
          </ListItem>
          <ListItem button className={classes.nested}>
          <a href="/grid"><ListItemText primary="Grid" /></a>
          </ListItem>
          <ListItem button className={classes.nested}>
          <a href="/gridlist"><ListItemText primary="GridList" /></a>
          </ListItem>
          <ListItem button className={classes.nested}>
          <a href="hidden"><ListItemText primary="Hidden" /></a>
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}
