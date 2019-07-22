import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

class ContainerExample extends Component {
    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="md" className="col-md-8" style={{ marginLeft: 100, padding: 38 }}>
                    <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
                    <Box component="span" m={1}>                
                        <Button />
                    </Box>
                </Container>
            </React.Fragment>
        );
    }
}

export default ContainerExample;
