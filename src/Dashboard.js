import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    width: '50%',
    maxWidth: 200,
    backgroundColor: theme.palette.background.paper,
    position: "absolute",
    height: "-webkit-fill-available"
    
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
        <ListItemText primary="Layout" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={!open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {/* <ListItem button className={classes.nested}>
          <a href=""><ListItemText primary="Box" /></a>
          </ListItem> */}
          <ListItem button className={classes.nested}>
          <a href="/Container"><ListItemText primary="Container" /></a>
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
          <ListItem button onClick={handleClick}>
        <ListItemText primary="Input" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={!open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
          <a href="/autocomplete"><ListItemText primary="Auto Complete" /></a>
          </ListItem>
          <ListItem button className={classes.nested}>
          <a href="/button"><ListItemText primary="Button" /></a>
          </ListItem>
          <ListItem button className={classes.nested}>
          <a href="/checkbox"><ListItemText primary="Checkbox" /></a>
          </ListItem>
          <ListItem button className={classes.nested}>
          <a href="/pickers"><ListItemText primary="Pickers" /></a>
          </ListItem>
          <ListItem button className={classes.nested}>
          <a href="radio"><ListItemText primary="RadioButtons"/></a>
          </ListItem>
          <ListItem button className={classes.nested}>
          <a href="/select"><ListItemText primary="Select" /></a>
          </ListItem>
          <ListItem button className={classes.nested}>
          <a href="/switch"><ListItemText primary="Switches" /></a>
          </ListItem>
          <ListItem button className={classes.nested}>
          <a href="/textfield"><ListItemText primary="TextFeild" /></a>
          </ListItem>
          <ListItem button className={classes.nested}>
          <a href="transferlist"><ListItemText primary="Transfer List" /></a>
          </ListItem>
        </List>
      </Collapse>

      <ListItem button onClick={handleClick}>
        <ListItemText primary="Navigation" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={!open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
          <a href="/bottomnav"><ListItemText primary="Bottom Navigation" /></a>
          </ListItem>
          <ListItem button className={classes.nested}>
          <a href="/breadcrumbs"><ListItemText primary="Breadcrumbs" /></a>
          </ListItem>
          <ListItem button className={classes.nested}>
          <a href="/drawer"><ListItemText primary="Drawer" /></a>
          </ListItem>
          <ListItem button className={classes.nested}>
          <a href="/menu"><ListItemText primary="Menu" /></a>
          </ListItem>
          <ListItem button className={classes.nested}>
          <a href="steppers"><ListItemText primary="Steppers"/></a>
          </ListItem>
          <ListItem button className={classes.nested}>
          <a href="/tabs"><ListItemText primary="Tabs" /></a>
          </ListItem>
          
        </List>
      </Collapse>
    </List>
  );
}
