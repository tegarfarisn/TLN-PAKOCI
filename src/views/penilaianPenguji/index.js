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

const penilaianPenguji = ()=> {
    var nomor = 0;

    return (
        <Grid container>
            <Grid item xs={12}>
                <Card>
                <Grid container spacing={1} paddingTop={3} paddingLeft={4}>
                    <Stack direction="row" alignItems="center" gap={1}>
                        <CalendarMonthOutlinedIcon md ={2.2}/>
                        <Typography variant="h4">Penilaian Penguji Fit & Proper</Typography>
                    </Stack> 
                    </Grid>
                    <Grid container spacing={1} paddingTop={4} paddingLeft={4} paddingBottom= {2}>   
                    <Typography variant="h5" PaddingTop={4} display='center' >
                        Penguji 1 :
                    </Typography>
                    </Grid>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell >No</TableCell>
                                    <TableCell align="right">Nama Peserta</TableCell>
                                    <TableCell align="right">Jabatan Saat Ini</TableCell>
                                    <TableCell align="right">Jabatan Proyeksi</TableCell>
                                    <TableCell align="right">Tambah Nilai</TableCell>
                                    <TableCell align="right">Lihat Nilai</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            <TableRow>
                                    <TableCell align="right">{nomor = nomor + 1}</TableCell>
                                    <TableCell align="right"></TableCell>
                                    <TableCell align="right"></TableCell>
                                    <TableCell align="right"></TableCell>
                                    <TableCell align="right"><Button variant="contained" startIcon={<MessageTwoToneIcon/>} href="../penilaianFitnProper">Tambah Nilai</Button></TableCell>
                                    <TableCell align="right"><Button variant="contained" startIcon={<MessageTwoToneIcon/>} href="#contained-buttons">Lihat Nilai</Button></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Card>
            </Grid>
        </Grid>
    );
};

export default penilaianPenguji;
