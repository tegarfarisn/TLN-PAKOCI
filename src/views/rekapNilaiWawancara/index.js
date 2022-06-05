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
    } from '@material-ui/core';
import MessageTwoToneIcon from '@mui/icons-material/MessageTwoTone';

const rekapNilaiWawancara = ()=> {
    
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
                        <Typography variant="h4">Report Nilai Wawancara</Typography>
                        </Stack> 
                    </Grid>
                    </CardContent>
                   
                    <TableContainer>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell >No </TableCell>
                                    <TableCell align="right">NIP</TableCell>
                                    <TableCell align="right">Nama</TableCell>
                                    <TableCell align="right">Jabatan Proyeksi</TableCell>
                                    <TableCell align="right">Tanggal Uji</TableCell>
                                    <TableCell align="right">Hasil Nilai</TableCell>
                                    
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            <TableRow>
                                    <TableCell align="right"> </TableCell>
                                    <TableCell align="right"></TableCell>
                                    <TableCell align="right"></TableCell>
                                    <TableCell align="right"></TableCell>
                                    <TableCell align="right"></TableCell>
                                    <TableCell align="right"> </TableCell>
                                    
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    
                    
                </Card>
            </Grid>
        </Grid>
    );
};

export default rekapNilaiWawancara;
