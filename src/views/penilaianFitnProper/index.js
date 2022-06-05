import React from 'react';
import Stack from '@mui/material/Stack';
import {Card, CardContent, CardHeader, Grid, Typography, TextField} from '@material-ui/core';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';


const penilaianFitnProper = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Card>
                <CardHeader title={<Typography variant="h3">Input Nilai Peserta </Typography>} />
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
                        />
                    </Grid>
                    <Grid container spacing={1} paddingTop={3}>
                        <Stack direction="row" alignItems="center" gap={1}>
                        <EventNoteOutlinedIcon md ={2.2}/>
                        <Typography variant="h4">Uraian Penilaian Fit & Proper</Typography>
                        </Stack> 
                    </Grid>
                    </CardContent>
                    <Grid container spacing={1} paddingBottom={4}>
                        <Grid item xs={3} md={2.2}>
                            <Typography variant="h5" paddingLeft={3}  display='center' >
                            Enthusiasthic for Challenge
                            </Typography>
                        </Grid>
                            <TextField
                            id="fullWidth"
                            label="Nilai"
                            type="Nilai"
                            autoComplete="current-password"
                            value=""
                            />
                        <Grid item xs={3} md={2.2}>
                            <Typography variant="h5" paddingLeft={4} display='center' >
                            Creative and Innovative 
                            </Typography>
                        </Grid>
                            <TextField
                            id="fullWidth"
                            label="Nilai"
                            type="Nilai"
                            autoComplete="current-password"
                            value=""
                            />
                    </Grid>

                    <Grid container spacing={1} paddingBottom={4}>
                        <Grid item xs={3} md={2.2}>
                            <Typography variant="h5" paddingLeft={3} paddingRight={3} display='center' >
                            Building Business Partnership 
                            </Typography>
                        </Grid>
                            <TextField
                            id="fullWidth"
                            label="Nilai"
                            type="Nilai"
                            autoComplete="current-password"
                            value=""
                            />
                        <Grid item xs={3} md={2.2}>
                            <Typography variant="h5" paddingLeft={4} display='center' >
                            Strategic Orientation 
                            </Typography>
                        </Grid>
                            <TextField
                            id="fullWidth"
                            label="Nilai"
                            type="Nilai"
                            autoComplete="current-password"
                            value=""
                            />
                    </Grid>

                    <Grid container spacing={1} paddingBottom={4}>
                        <Grid item xs={3} md={2.2}>
                            <Typography variant="h5" paddingLeft={3} display='center' >
                            Customer Focus Oriented
                            </Typography>
                        </Grid>
                            <TextField
                            id="fullWidth"
                            label="Nilai"
                            type="Nilai"
                            autoComplete="current-password"
                            value=""
                            />
                        <Grid item xs={3} md={2.2}>
                            <Typography variant="h5" paddingLeft={4} display='center' >
                           Driving Execution
                            </Typography>
                        </Grid>
                            <TextField
                            id="fullWidth"
                            label="Nilai"
                            type="Nilai"
                            autoComplete="current-password"
                            value=""
                            />
                    </Grid>
                    <Grid container spacing={1} paddingBottom={4}>
                        <Grid item xs={3} md={2.2}>
                            <Typography variant="h5" paddingLeft={3} display='center' >
                            Visionary Leadership 
                            </Typography>
                        </Grid>
                            <TextField
                            id="fullWidth"
                            label="Nilai"
                            type="Nilai"
                            autoComplete="current-password"
                            value=""
                            />
                        <Grid item xs={3} md={2.2}>
                            <Typography variant="h5" paddingLeft={4} display='center' >
                            Empowering/Developing Others  
                            </Typography>
                        </Grid>
                            <TextField
                            id="fullWidth"
                            label="Nilai"
                            type="Nilai"
                            autoComplete="current-password"
                            value=""
                            />
                    </Grid>
                    <Grid container spacing={1} paddingBottom={4}>
                        <Grid item xs={3} md={2.2}>
                            <Typography variant="h5" paddingLeft={3} display='center' >
                            Aspek KEANDALAN SISTEM 
                            </Typography>
                        </Grid>
                            <TextField
                            id="fullWidth"
                            label="Nilai"
                            type="Nilai"
                            autoComplete="current-password"
                            value=""
        
                            />
                        <Grid item xs={3} md={2.2}>
                            <Typography variant="h5" paddingLeft={4} display='center' >
                            Aspek KECEPATAN RECOVERY 
                            </Typography>
                        </Grid>
                            <TextField
                            id="fullWidth"
                            label="Nilai"
                            type="Nilai"
                            autoComplete="current-password"
                            value=""
                            />
                    </Grid>
                    <Grid container spacing={1} paddingBottom={4}>
                        <Grid item xs={3} md={2.2}>
                            <Typography variant="h5" paddingLeft={3} display='center' >
                            Aspek MANAJEMEN ASET 
                            </Typography>
                        </Grid>
                            <TextField
                            id="fullWidth"
                            label="Nilai"
                            type="Nilai"
                            autoComplete="current-password"
                            value=""
                            />
                        <Grid item xs={3} md={2.2}>
                            <Typography variant="h5" paddingLeft={4} display='center' >
                            Strategi dan breakthrough yang jelas dalam hal kontribusi KPI di Kontrak Manajemen 
                            </Typography>
                        </Grid>
                            <TextField
                            id="fullWidth"
                            label="Nilai"
                            type="Nilai"
                            autoComplete="current-password"
                            value=""
                            />
                    </Grid>
                    <Grid container spacing={1} paddingBottom={4}>
                        <Grid item xs={3} md={2.2}>
                            <Typography variant="h5" paddingLeft={3} display='center' >
                            Internal Readness 
                            </Typography>
                        </Grid>
                            <TextField
                            id="fullWidth"
                            label="Nilai"
                            type="Nilai"
                            autoComplete="current-password"
                            value=""
                            />
                        <Grid item xs={3} md={2.2}>
                            <Typography variant="h5" paddingLeft={4} display='center' >
                            External Readness 
                            </Typography>
                        </Grid>
                            <TextField
                            id="fullWidth"
                            label="Nilai"
                            type="Nilai"
                            autoComplete="current-password"
                            value=""
                            />
                    </Grid>

                    <Grid container spacing={1} paddingBottom={4}>
                        <Grid item xs={3} md={2.2}>
                            <Typography variant="h5" paddingLeft={3} display='center' >
                            Cultural politics,economics and business change readness  
                            </Typography>
                        </Grid>
                            <TextField
                            id="fullWidth"
                            label="Nilai"
                            type="Nilai"
                            autoComplete="current-password"
                            value=""
                            />
                    </Grid>
                </Card>
            </Grid>
        </Grid>
    );
};

export default penilaianFitnProper;
