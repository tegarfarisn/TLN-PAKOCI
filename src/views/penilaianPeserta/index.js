import React from 'react';
import Stack from '@mui/material/Stack';
import {useState} from 'react';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import {ReplyOutlined} from '@material-ui/icons';
import TableDense from '../forms/tables/TableDense';
import {Card, 
    CardContent,
    Grid, 
    Typography, 
    Button, 
    Table, 
    TableBody, 
    TableContainer,
    TableHead,
    TableRow, 
    TableCell, 
    Paper,
    TextField} from '@material-ui/core';
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';
import MessageTwoToneIcon from '@mui/icons-material/MessageTwoTone';

const penilaianPeserta = ()=> {
       
    return (
        <Grid container>
            <Grid item xs={12}>
                <Card>
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
                        <CalendarMonthOutlinedIcon md ={2.2}/>
                        <Typography variant="h4">Penilaian Peserta Fit & Proper</Typography>
                        </Stack> 
                    </Grid>
                    </CardContent>
                    <Typography variant="h5" paddingLeft={3} display='center' >
                        Penguji 1 :
                    </Typography>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="right">Key Faktor(bobot)</TableCell>
                                    <TableCell align="right">Aspek Penilaian</TableCell>
                                    <TableCell align="right">Uraian Penilaian</TableCell>
                                    <TableCell align="right">Nilai</TableCell>
                                    <TableCell align="right">Total Bobot</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            <TableRow>
                                    <TableCell align="right"> </TableCell>
                                    <TableCell align="right"></TableCell>
                                    <TableCell align="right"></TableCell>
                                    <TableCell align="right"></TableCell>
                                    <TableCell align="right"></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    
                    <Typography variant="h5" paddingLeft={3} display='center' >
                        Penguji 2 :
                    </Typography>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="right">Key Faktor(bobot)</TableCell>
                                    <TableCell align="right">Aspek Penilaian</TableCell>
                                    <TableCell align="right">Uraian Penilaian</TableCell>
                                    <TableCell align="right">Nilai</TableCell>
                                    <TableCell align="right">Total Bobot</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            <TableRow>
                                    <TableCell align="right"> </TableCell>
                                    <TableCell align="right"></TableCell>
                                    <TableCell align="right"></TableCell>
                                    <TableCell align="right"></TableCell>
                                    <TableCell align="right"></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    
                    <Typography variant="h5" paddingLeft={3} display='center' >
                        Penguji 3 :
                    </Typography>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="right">Key Faktor(bobot)</TableCell>
                                    <TableCell align="right">Aspek Penilaian</TableCell>
                                    <TableCell align="right">Uraian Penilaian</TableCell>
                                    <TableCell align="right">Nilai</TableCell>
                                    <TableCell align="right">Total Bobot</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            <TableRow>
                                    <TableCell align="right"> </TableCell>
                                    <TableCell align="right"></TableCell>
                                    <TableCell align="right"></TableCell>
                                    <TableCell align="right"></TableCell>
                                    <TableCell align="right"></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Typography variant="h5" paddingLeft={3} display='center' >
                        Penguji 4 :
                    </Typography>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="right">Key Faktor(bobot)</TableCell>
                                    <TableCell align="right">Aspek Penilaian</TableCell>
                                    <TableCell align="right">Uraian Penilaian</TableCell>
                                    <TableCell align="right">Nilai</TableCell>
                                    <TableCell align="right">Total Bobot</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            <TableRow>
                                    <TableCell align="right"> </TableCell>
                                    <TableCell align="right"></TableCell>
                                    <TableCell align="right"></TableCell>
                                    <TableCell align="right"></TableCell>
                                    <TableCell align="right"></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Grid container spacing={1} paddingBottom={3} paddingTop={3} >
                        <Grid item xs={5} md={2.2}>
                        <Typography variant="h5" paddingLeft={3} display='center' >
                            Rata-rata Nilai: 
                        </Typography>
                        </Grid>
                        <TextField
                        id="fullWidth"
                        label="Nilai"
                        type="Nilai"
                        autoComplete="current-password"
                        value=""
                        disabled/>
                    </Grid>
                </Card>
            </Grid>
        </Grid>
    );
};

export default penilaianPeserta;
