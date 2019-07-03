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
          {/* <ListItem button className={classes.nested}>
          <a href="/pickers"><ListItemText primary="Pickers" /></a>
          </ListItem> */}
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
          {/* <ListItem button className={classes.nested}>
          <a href="/drawer"><ListItemText primary="Drawer" /></a>
          </ListItem> */}
          <ListItem button className={classes.nested}>
          <a href="/link"><ListItemText primary="Links" /></a>
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

      <ListItem button onClick={handleClick}>
        <ListItemText primary="Surface" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={!open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
          <a href="/appbar"><ListItemText primary="App Bar" /></a>
          </ListItem>
          <ListItem button className={classes.nested}>
          <a href="/card"><ListItemText primary="Card" /></a>
          </ListItem>
          <ListItem button className={classes.nested}>
          <a href="/expansion"><ListItemText primary="Expansion panel" /></a>
          </ListItem>
          <ListItem button className={classes.nested}>
          <a href="/paper"><ListItemText primary="Paper" /></a>
          </ListItem> 
        </List>
      </Collapse>

      <ListItem button onClick={handleClick}>
        <ListItemText primary="Feedback" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={!open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
          <a href="/dialog"><ListItemText primary="Dialog" /></a>
          </ListItem>
          <ListItem button className={classes.nested}>
          <a href="/progress"><ListItemText primary="Progress" /></a>
          </ListItem>
          <ListItem button className={classes.nested}>
          <a href="/snackbar"><ListItemText primary="snackbar" /></a>
          </ListItem>
        </List>
      </Collapse>


      <ListItem button onClick={handleClick}>
        <ListItemText primary="Data Display" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={!open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
          <a href="/avatar"><ListItemText primary="Avatars" /></a>
          </ListItem>
          <ListItem button className={classes.nested}>
          <a href="/badges"><ListItemText primary="Badges" /></a>
          </ListItem>
          <ListItem button className={classes.nested}>
          <a href="/chips"><ListItemText primary="Chips" /></a>
          </ListItem>
          <ListItem button className={classes.nested}>
          <a href="/dividers"><ListItemText primary="Dividers" /></a>
          </ListItem>
          <ListItem button className={classes.nested}>
          <a href="icons"><ListItemText primary="Icons"/></a>
          </ListItem>
          <ListItem button className={classes.nested}>
          <a href="/list"><ListItemText primary="List" /></a>
          </ListItem>
          <ListItem button className={classes.nested}>
          <a href="/Table"><ListItemText primary="Table" /></a>
          </ListItem>
          <ListItem button className={classes.nested}>
          <a href="/tooltips"><ListItemText primary="ToolTips" /></a>
          </ListItem>
          <ListItem button className={classes.nested}>
          <a href="typography"><ListItemText primary="Typography" /></a>
          </ListItem>
        </List>
      </Collapse>

      <ListItem button onClick={handleClick}>
        <ListItemText primary="Utils" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={!open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
          <a href="/nossr"><ListItemText primary="No SSR" /></a>
          </ListItem>
          <ListItem button className={classes.nested}>
          <a href="/popover"><ListItemText primary="Popover" /></a>
          </ListItem>
          <ListItem button className={classes.nested}>
          <a href="/portal"><ListItemText primary="Portal" /></a>
          </ListItem>
          <ListItem button className={classes.nested}>
          <a href="/transition"><ListItemText primary="Transition" /></a>
          </ListItem>
          <ListItem button className={classes.nested}>
          <a href="mediaquery"><ListItemText primary="Use Media Query"/></a>
          </ListItem>
          {/* <ListItem button className={classes.nested}>
          <a href="/modal"><ListItemText primary="Modal" /></a>
          </ListItem> */}
        </List>
      </Collapse>

      <ListItem button onClick={handleClick}>
        <ListItemText primary="Lab" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={!open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
          <a href="/slider"><ListItemText primary="Slider" /></a>
          </ListItem>
          <ListItem button className={classes.nested}>
          <a href="/speeddial"><ListItemText primary="Speed Dial" /></a>
          </ListItem>
          <ListItem button className={classes.nested}>
          <a href="/toggle"><ListItemText primary="Toggle Button" /></a>
          </ListItem>
        </List>
      </Collapse>

    </List>
  );
}
