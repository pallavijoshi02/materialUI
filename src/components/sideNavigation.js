import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom'

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

export default function Sidebar() {
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
        <Link to="/gridlist">GridList</Link>
          </ListItem> 
          <ListItem button className={classes.nested}>
       <Link to="/gridlist">GridList</Link>
          </ListItem>*/}
          <ListItem button className={classes.nested}>
            <Link to="/grid">Grid</Link>
          </ListItem>
          <ListItem button className={classes.nested}>
            <Link to="/gridlist">GridList</Link>
          </ListItem>
          <ListItem button className={classes.nested}>
            <Link to="/hidden">Hidden</Link>
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
            <Link to="/autocomplete">AutoComplete</Link>
          </ListItem>
          <ListItem button className={classes.nested}>
            <Link to="/button">Button</Link>
          </ListItem>
          <ListItem button className={classes.nested}>
            <Link to="/checkbox">CheckBox</Link>
          </ListItem>
          {/* <ListItem button className={classes.nested}>
         <Link to="/pickers">Pickers</Link>
          </ListItem> */}
          <ListItem button className={classes.nested}>
            <Link to="/radio">Radio</Link>
          </ListItem>
          <ListItem button className={classes.nested}>
            <Link to="/select">Select</Link>
          </ListItem>
          <ListItem button className={classes.nested}>
            <Link to="/switch">Switch</Link>
          </ListItem>
          <ListItem button className={classes.nested}>
            <Link to="/textfield">Textfield</Link>
          </ListItem>
          <ListItem button className={classes.nested}>
            <Link to="/transferlist">Transferlist</Link>
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
            <Link to="/bottomnav">Botton Navigation</Link>
          </ListItem>
          <ListItem button className={classes.nested}>
            <Link to="/breadcrumbs">Breadcrumbs</Link>
          </ListItem>
          {/* <ListItem button className={classes.nested}>
       <Link to="/drawer">Drawer</Link>
          </ListItem> */}
          <ListItem button className={classes.nested}>
            <Link to="/link">Link</Link>
          </ListItem>
          <ListItem button className={classes.nested}>
            <Link to="/menu">Menu</Link>
          </ListItem>
          <ListItem button className={classes.nested}>
            <Link to="/steppers">Steppers</Link>
          </ListItem>
          <ListItem button className={classes.nested}>
            <Link to="/tabs">Tabs</Link>
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
            <Link to="/appbar">App Bar</Link>
          </ListItem>
          <ListItem button className={classes.nested}>
            <Link to="/card">Card</Link>
          </ListItem>
          <ListItem button className={classes.nested}>
            <Link to="/expansion">Expansion</Link>
          </ListItem>
          <ListItem button className={classes.nested}>
            <Link to="/paper">Paper</Link>
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
            <Link to="/dialog">Dialog</Link>
          </ListItem>
          <ListItem button className={classes.nested}>
            <Link to="/progress">Progress</Link>
          </ListItem>
          <ListItem button className={classes.nested}>
            <Link to="/snackbar">Snackbar</Link>
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
            <Link to="/avatar">Avatar</Link>
          </ListItem>
          <ListItem button className={classes.nested}>
            <Link to="/badges">Badges</Link>
          </ListItem>
          <ListItem button className={classes.nested}>
            <Link to="/chips">Chips</Link>
          </ListItem>
          <ListItem button className={classes.nested}>
            <Link to="/dividers">Dividers</Link>
          </ListItem>
          <ListItem button className={classes.nested}>
            <Link to="/icons">Icons</Link>
          </ListItem>
          <ListItem button className={classes.nested}>
            <Link to="/list">List</Link>
          </ListItem>
          <ListItem button className={classes.nested}>
            <Link to="/Table">Table</Link>
          </ListItem>
          <ListItem button className={classes.nested}>
            <Link to="/tooltips">Tooltips</Link>
          </ListItem>
          <ListItem button className={classes.nested}>
            <Link to="/typography">Typography</Link>
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
            <Link to="/nossr">No SSR</Link>
          </ListItem>
          <ListItem button className={classes.nested}>
            <Link to="/popover">Popover</Link>
          </ListItem>
          <ListItem button className={classes.nested}>
            <Link to="/popper">Popper</Link>
          </ListItem>
          <ListItem button className={classes.nested}>
            <Link to="/transition">Transition</Link>
          </ListItem>
          <ListItem button className={classes.nested}>
            <Link to="/mediaquery">Meidaquery</Link>
          </ListItem>
          {/* <ListItem button className={classes.nested}>
          <Link to="/modal">Modal</Link>
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
            <Link to="/slider">Slider</Link>
          </ListItem>
          <ListItem button className={classes.nested}>
            <Link to="/speeddial">SpeedDial</Link>
          </ListItem>
          <ListItem button className={classes.nested}>
            <Link to="/toggle">Toggle</Link>
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}
