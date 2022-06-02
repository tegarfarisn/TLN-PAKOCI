import React from 'react';

import {Card, CardContent, CardHeader, Divider, Grid} from '@material-ui/core';
import {gridSpacing} from '../../../store/constant';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    frame: {
        height: 'calc(100vh - 210px)',
        border: '1px solid',
        borderColor: theme.palette.primary.light
    }
}));

const FitNProper = (props) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                    <Card>
                        <CardHeader title="Welcome To Fit & Proper" />
                        <Divider />
                        <CardContent>
                            {/* <Card sx={{overflow: 'hidden'}}>
                                <iframe title="Tabler Icons" className={classes.frame} width="100%" src="https://tablericons.com/" />
                            </Card> */}
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default FitNProper;
