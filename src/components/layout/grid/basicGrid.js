import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class GridExample extends Component {
    render() {
        return (
            <div>
                <h1> Basic Grid</h1>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper>xs=12</Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper >xs=6</Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper >xs=6</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper>xs=3</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper >xs=3</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper >xs=3</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper>xs=3</Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default GridExample;