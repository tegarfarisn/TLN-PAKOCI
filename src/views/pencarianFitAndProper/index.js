import React from 'react';
import Stack from '@mui/material/Stack';
import {useState} from 'react';
import {ReplyOutlined} from '@material-ui/icons';
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
    TextField,
    FormControl,
    InputLabel } from '@material-ui/core';
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';
import MessageTwoToneIcon from '@mui/icons-material/MessageTwoTone';

const pencarianFitAndProper = ()=> {
       
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
                        <ManageSearchOutlinedIcon md ={2.2}/>
                        <Typography variant="h4">Cari Fit And Proper</Typography>
                        </Stack> 
                    </Grid>
                    </CardContent>

                    <Grid container spacing={1} paddingBottom={4}>
                        <Grid item xs={3} md={2.2}>
                            <Typography variant="h5" paddingLeft={3} display='center' >
                            Input NIP Peserta
                            </Typography>
                        </Grid>
                            <TextField
                            id="fullWidth"
                            label="NIP"
                            type="NIP"
                            autoComplete="current-password"
                            value=""
                            />
                        <Grid item xs={3} md={2.2}>
                        <FormControl >
                        <InputLabel /*onChange={(e) => setPendaftar(e.target.value)} value={pendaftar}*//> 
                            <Button variant="contained" type="submit"  /*onClick={() => postFitProper()}*/>Cari</Button>
                        </FormControl>
                        </Grid>
                            
                    </Grid>

                   
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
                                    <TableCell align="right">Lihat</TableCell>
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
                                    <TableCell align="right"> <Button variant="contained" startIcon={<MessageTwoToneIcon/>} href="#contained-buttons">Lihat</Button></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    
                    
                </Card>
            </Grid>
        </Grid>
    );
};

export default pencarianFitAndProper;
