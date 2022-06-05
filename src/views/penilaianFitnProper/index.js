import React from 'react';
import Stack from '@mui/material/Stack';
import {Card, CardContent, CardHeader, Grid, Typography, TextField} from '@material-ui/core';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
//import TableFit from '../forms/tables/TableFit';

const penilaianFitnProper = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Card>
                <CardHeader title={<Typography variant="h5">Input Nilai Peserta </Typography>} />
                <CardContent>
                <Grid container spacing={1} paddingBottom={3}>
                    <Grid item xs={3} md={2.2}>
                        <Typography variant="h5" paddingLeft={3} display='center' >
                            Nama Peserta
                        </Typography>
                        </Grid>
                        <TextField
                        id="fullWidth"
                        label="Nama"
                        type="Nama"
                        autoComplete="current-password"
                        value=""
                        disabled/>
                    </Grid>
                    <Grid container spacing={1} paddingTop={3}>
                        <Stack direction="row" alignItems="center" gap={1}>
                        <EventNoteOutlinedIcon md ={2.2}/>
                        <Typography variant="h4">Uraian Penilaian Fit & Proper</Typography>
                        </Stack> 
                    </Grid>
                    </CardContent>
                    <Grid container spacing={1} paddingBottom={3}>
                        <Grid item xs={3} md={2.2}>
                        <Typography variant="h5" paddingLeft={3} display='center' >
                        Enthusiasthic for Challenge
                        </Typography>
                        </Grid>
                        <TextField
                        id="fullWidth"
                        label="efc"
                        type="efc"
                        autoComplete="current-password"
                        value="{}"
                        disabled
                        />
                    </Grid>
                    <Grid container Spacing={10} paddingLeft={7} paddingRight= {10}>
                        <Grid >
                        <Typography variant="h5" paddingLeft={3} display='center' >
                        Enthusiasthic for Challenge
                        </Typography>
            
                        <TextField
                        id="fullWidth"
                        label="efc"
                        type="efc"
                        autoComplete="current-password"
                        value="{}"
                        disabled
                        />
                        </Grid>
                    </Grid>
                    
                </Card>

            </Grid>
        </Grid>
    );
};

export default penilaianFitnProper;
