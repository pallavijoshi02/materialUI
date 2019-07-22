import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Grid from '../common/layout/grid/grid';
import GridList from '../common/layout/gridList/gridList';
import Hidden from '../common/layout/hidden/hidden';
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
            className={classes.root}>
            <ListItem button onClick={handleClick}>
                <ListItemText primary="Layout" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={!open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                     <Link to="/grid">Grid</Link>
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemText primary="GridList" component={Link} to="/hidden"/>
                    </ListItem>
                    {/* <ListItem button className={classes.nested}>
                        <Link component={Hidden} to="/hidden">
                        <ListItemText primary="Hidden" />
                        </Link>
                    </ListItem> */}
                </List>
            </Collapse>
        </List>
    );
}
