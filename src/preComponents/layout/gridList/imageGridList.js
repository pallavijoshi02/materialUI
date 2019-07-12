import React, { Component } from 'react';

class ImageGridListCode extends Component {
    render() {
        return (
            <div>
                <pre className="pre"> {
 `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import about1 from '../../../img/about1.jpg';
import about2 from '../../../img/about2.jpg';
import background1 from '../../../img/background1.jpg';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
      //  backgroundColor: theme.palette.background.paper
    },
    gridList: {
        width: 500,
        height: 450,
    }
}));

  const tileData = [
    {
      img: about1,
      title: 'Image',
      author: 'author',
      cols: 2,
    },
    {
        img: about2,
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        img: background1,
        title: 'Image',
        author: 'author',
        cols: 2,
    }
  ];

export default function ImageGridList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList cellHeight={160} className={classes.gridList} cols={3}>
                {tileData.map(tile => (
                    <GridListTile key={tile.img} cols={tile.cols || 1}>
                        <img src={tile.img} alt={tile.title} />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
} 
 `
                      }
                </pre>
            </div>
        )
    }
}


export default ImageGridListCode;




