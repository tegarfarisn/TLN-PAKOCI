import React from 'react';
import Stack from '@mui/material/Stack';
import {Card, CardContent, CardHeader, Grid, Typography, TextField} from '@material-ui/core';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';

const PenilaianWawancara = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Card>
                <Grid container spacing={1} paddingTop={3} paddingLeft={4}>
                    <Stack direction="row" alignItems="center" gap={1}>
                        <EventNoteOutlinedIcon md ={2.2}/>
                        <Typography variant="h4">Penilaian Penguji Fit & Proper</Typography>
                    </Stack> 
                </Grid>
                <Grid container spacing={1} paddingBottom={3} paddingTop={3}>
                <Grid item xs={2} md={2.2}>
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
                        /> 
                </Grid>

                <Grid container spacing={1} paddingBottom={3} paddingTop={3}>
                <Grid item xs={2} md={2.2}>
                    <Typography variant="h5" paddingLeft={3} display='center' >
                         Nama Peserta
                    </Typography>
                    </Grid>
                        <TextField
                        id="outlined-multiline-static fullwidth"
                        label=""
                        multiline
                        rows={4}
                        placeholder="ex. critical thingking : 80"
                        /> 
                </Grid>
                   
                </Card>
            </Grid>
        </Grid>
    );
};

export default PenilaianWawancara;
