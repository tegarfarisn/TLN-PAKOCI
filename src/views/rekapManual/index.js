import React from 'react';
import Stack from '@mui/material/Stack';
import {useState} from 'react';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import {ReplyOutlined} from '@material-ui/icons';
import TableDense from '../forms/tables/TableDense';
import {Card, CardContent, Grid, Typography, Button, 
    Table, 
    TableBody, 
    TableContainer,
    TableHead,
TableRow, TableCell,
Paper, TextField} from '@material-ui/core';

const rekapManual = ()=> {
    
       
    return (
        <Grid container>
            <Grid item xs={12}>
                <Card>
                <CardContent>
                    <Button href= "../dashboard"  variant="contained" startIcon={<ReplyOutlined/>}  >
                        Kembali
                    </Button>
                    <Grid container spacing={1} paddingTop={3}>
                        <Stack direction="row" alignItems="center" gap={1}>
                        <CalendarMonthOutlinedIcon md ={2.2}/>
                        <Typography variant="h4">Report Nilai Penilaian Fit & Proper</Typography>
                        </Stack> 
                    </Grid>
                    <TableContainer>
                    <Table>
                        <TableRow>
                        <TableCell align="center" colSpan={2}>
                        NIP
                        <TextField
                            id="outlined-password-input"
                            label="NIP"
                            type="NIP"
                            textAlign ="center"
                            autoComplete="current-password"/>
                        </TableCell>
                        <TableCell align="center" colSpan={2}>Jabatan Jenjang
                        <TextField
                            id="outlined-password-input"
                            label="Jenjang"
                            type="Jenjang"
                            textAlign ="center"
                            autoComplete="current-password"/></TableCell>
                        <TableCell align="center" colSpan={2}>Tanggal 
                        <TextField
                            id="outlined-password-input"
                            label="tanggal"
                            type="tanggal"
                            textAlign ="center"
                            autoComplete="current-password"/></TableCell>
                         <TableCell align="center" colSpan={2}>
                            <Button variant="contained" md={1} type="submit" >
                            CEK
                            </Button>
                         </TableCell>   
                        </TableRow>
                    </Table>
                    </TableContainer>
                    <Typography variant="h4">Report Nilai</Typography>
                    <TableContainer>
                        <Table striped style={{ display:'block', 'overflow-x':'scroll'}}>
                            <TableHead>
                            <TableRow>
                                <TableCell rowSpan={2} >No</TableCell>
                                <TableCell rowSpan={2}>Tim Penilai </TableCell>
                                <TableCell align="center" colSpan={2}>Pengetahuan/Knowledge </TableCell>
                                <TableCell align="center" colSpan={2}>Keterampilan / Skill </TableCell>
                                <TableCell rowSpan={2}>Rekomendasi Penguji</TableCell>
                               <TableCell rowSpan={2}>Kelemahan yang harus diperbaiki</TableCell>
                               <TableCell rowSpan={2}>Kekuatan yang dimiliki</TableCell>
                            </TableRow>
                                <TableRow>
                                    <TableCell scope="col">Pengetahuan terhadap proses bisnis (bobot 40%) </TableCell>
                                    <TableCell scope="col">Pengetahuan terhadap tugas pokok dan tanggung jawab / JobDesk yang terkait dengan jabatan yang diproyeksikan (bobot 60%) </TableCell>
                                    <TableCell scope="col">Pemecahan Masalah / Pengambilan Keputusan (bobot 60%)</TableCell>
                                    <TableCell scope="col">Komunikasi dengan Pihak Eksternal(bobot 40%) </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                               <TableRow>
                               <TableCell >1</TableCell>  
                                    <TableCell><TextField id="filled-basic"  variant="standard" /> </TableCell>
                                    <TableCell><TextField id="filled-basic"  variant="standard" /> </TableCell>
                                    <TableCell><TextField id="filled-basic"  variant="standard" /> </TableCell> 
                                    <TableCell><TextField id="filled-basic"  variant="standard" /> </TableCell> 
                                    <TableCell><TextField id="filled-basic"  variant="standard" /> </TableCell> 
                                    <TableCell><TextField id="filled-basic"  variant="standard" /> </TableCell> 
                                    <TableCell><TextField id="filled-basic"  variant="standard" /> </TableCell> 
                                    <TableCell><TextField id="filled-basic"  variant="standard" /> </TableCell> 
                               </TableRow> 
                               <TableRow>
                               <TableCell >2</TableCell>  
                                    <TableCell><TextField id="filled-basic"  variant="standard" /> </TableCell>
                                    <TableCell><TextField id="filled-basic"  variant="standard" /> </TableCell>
                                    <TableCell><TextField id="filled-basic"  variant="standard" /> </TableCell> 
                                    <TableCell><TextField id="filled-basic"  variant="standard" /> </TableCell> 
                                    <TableCell><TextField id="filled-basic"  variant="standard" /> </TableCell> 
                                    <TableCell><TextField id="filled-basic"  variant="standard" /> </TableCell> 
                                    <TableCell><TextField id="filled-basic"  variant="standard" /> </TableCell> 
                                    <TableCell><TextField id="filled-basic"  variant="standard" /> </TableCell>
                               </TableRow> 
                               <TableRow>
                               <TableCell >3</TableCell>  
                                    <TableCell><TextField id="filled-basic"  variant="standard" /> </TableCell>
                                    <TableCell><TextField id="filled-basic"  variant="standard" /> </TableCell>
                                    <TableCell><TextField id="filled-basic"  variant="standard" /> </TableCell> 
                                    <TableCell><TextField id="filled-basic"  variant="standard" /> </TableCell> 
                                    <TableCell><TextField id="filled-basic"  variant="standard" /> </TableCell> 
                                    <TableCell><TextField id="filled-basic"  variant="standard" /> </TableCell> 
                                    <TableCell><TextField id="filled-basic"  variant="standard" /> </TableCell> 
                                    <TableCell><TextField id="filled-basic"  variant="standard" /> </TableCell>  
                               </TableRow> 
                               <TableRow>
                               <TableCell >4</TableCell>  
                                    <TableCell><TextField id="filled-basic"  variant="standard" /> </TableCell>
                                    <TableCell><TextField id="filled-basic"  variant="standard" /> </TableCell>
                                    <TableCell><TextField id="filled-basic"  variant="standard" /> </TableCell> 
                                    <TableCell><TextField id="filled-basic"  variant="standard" /> </TableCell> 
                                    <TableCell><TextField id="filled-basic"  variant="standard" /> </TableCell> 
                                    <TableCell><TextField id="filled-basic"  variant="standard" /> </TableCell> 
                                    <TableCell><TextField id="filled-basic"  variant="standard" /> </TableCell> 
                                    <TableCell><TextField id="filled-basic"  variant="standard" /> </TableCell>   
                               </TableRow> 
                            </TableBody>
                        </Table>
                    </TableContainer>
                    
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default rekapManual;
