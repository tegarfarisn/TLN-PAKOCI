import React from 'react';
// import { Card, CardContent, CardHeader, Divider, Grid, Typography, Button, Link } from '@material-ui/core';
import TableBasic2 from '../forms/tables/TableBasic2';
import { AddOutlined } from '@material-ui/icons';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import logoDefault from "../../assets/images/users/userNotFound.png"
import * as URL from "../../api/"
import { Card, CardHeader, Typography, Grid, Button, MenuItem, CardContent, Select, InputLabel, FormControl } from '@mui/material';


const DataPenguji = () => {
    const [listPenguji, setListPenguji] = useState([])
    const [jenjang, setJenjang] = useState('')
    var nomor = 0;
    const [periode, setPeriode] = useState('Juni 2022')
    const [listPeriode, setListPeriode] = useState([])
    const endpointPendaftar = URL.baseURL + `/pengujis?populate=pegawai.jabatan.grade.jenjang&populate=pegawai.foto&filters[periode][periode][$eq]=${periode}`

    useEffect(() => {
        getListPeriode();
        getListPenguji();
    }, [periode])

    const getListPeriode = () => {
        console.log("get list periode");
        axios.get(URL.baseURL + `/periodes`)
            .then((res) => {
                console.log("ini periode", res.data.data);
                setListPeriode(res.data.data);
            })
    }
    
    const getListPenguji = () => {
        console.log("get list penguji");
        axios.get(URL.baseURL + `/pengujis?populate=pegawai.jabatan.grade.jenjang&populate=pegawai.foto&filters[periode][periode][$eq]=${periode}`)
            .then((res) => {
                console.log("ini penguji", res.data.data);
                setListPenguji(res.data.data);
            })
    }

    //jika Grade kosong
    // const cekGrade = (post)=> {
    //   if (post.attributes.pegawai.data.attributes.jabatan.data.attributes.grade.data === null){
    //     console.log("ini Grade kosong")

    //     return "-"
    //   }
    //   else if (post.attributes.pegawai.data.attributes.jabatan.data.attributes.grade.data !== null){

    //     return post.attributes.pegawai.data.attributes.jabatan.data.attributes.grade.data.attributes.nama_grade

    //   }

    // }

    //jika jenjang kosong
    const cekJenjang = (post) => {
        if (post.attributes.pegawai.data.attributes.jabatan.data.attributes.grade.data.attributes.jenjang.data === null) {
            console.log("ini jenjang kosong", post.attributes.pegawai.data.attributes.jabatan.data.attributes.grade.data.attributes.jenjang.data)

            return "-"
        }
        else if (post.attributes.pegawai.data.attributes.jabatan.data.attributes.grade.data.attributes.jenjang.data !== null) {

            return post.attributes.pegawai.data.attributes.jabatan.data.attributes.grade.data.attributes.jenjang.data.attributes.jenjang_jabatan_struktural

        }

    }


    //jika foto kosong
    const cekFoto = (post) => {
        if (post.attributes.pegawai.data.attributes.foto.data === null) {
            console.log("ini foto kosong")

            return logoDefault
        }
        else if (post.attributes.pegawai.data.attributes.foto.data !== null) {

            return URL.baseURLFoto + post.attributes.pegawai.data.attributes.foto.data.attributes.formats.thumbnail.url

        }
    }
    return (
        <Grid container>
            <Grid item xs={12}>
                <Card>
                    <CardHeader title={<Typography variant="h4"> Pilih Periode Fit n Proper</Typography>} />
                    <CardContent>
                        <Grid container spacing={1} paddingBottom={3}>
                            <Grid item xs={2} md={2.2}>
                                <Typography variant="h5" paddingLeft={3} display='center' >
                                    Pilih Bulan Tahun
                                </Typography>
                            </Grid>
                            <Grid item xs={1} md={2.2}>
                                <FormControl fullWidth>
                                    <InputLabel id="Pilih Bulan Tahun" >
                                        Pilih Bulan Tahun
                                    </InputLabel>
                                    <Select
                                        labelId="bulan"
                                        id="bulan"
                                        value={periode}
                                        label="bulan"
                                        onChange={(e) => setPeriode(e.target.value)}>
                                        {listPeriode.map(list =>
                                            <MenuItem value={list.attributes.periode}>{list.attributes.periode}</MenuItem>
                                        )}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
                <br></br>
                <Button href="../tambahPeserta" variant="contained" startIcon={<AddOutlined />}  >
                    Tambah Peserta
                </Button>
                <Card>

                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell >No</TableCell>
                                    <TableCell align="center">Foto</TableCell>
                                    <TableCell align="center">NIP</TableCell>
                                    <TableCell align="center">Nama</TableCell>
                                    <TableCell align="center">Grade</TableCell>
                                    <TableCell align="center">Jenjang</TableCell>
                                    <TableCell align="center">Jabatan</TableCell>
                                </TableRow>
                            </TableHead>
                            {listPenguji.map(post =>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>{nomor = nomor + 1}</TableCell>
                                        <TableCell align="center"><img src={cekFoto(post)} width="80" /></TableCell>
                                        <TableCell align="center">{post.attributes.pegawai.data.attributes.nip}</TableCell>
                                        <TableCell align="center">{post.attributes.pegawai.data.attributes.nama}</TableCell>
                                        <TableCell align="center">{post.attributes.pegawai.data.attributes.jabatan.data.attributes.grade.data.attributes.nama_grade}</TableCell>
                                        <TableCell align="center">{cekJenjang(post)}</TableCell>
                                        <TableCell align="center">{post.attributes.pegawai.data.attributes.jabatan.data.attributes.nama_jabatan}</TableCell>

                                        {/* <TableCell align="right">{post.attributes.pegawai.data.attributes.grade.data.attributes.nama_grade}</TableCell>
                    <TableCell align="right">{post.attributes.pegawai.data.attributes.jabatan.data.attributes.nama_jabatan}</TableCell> */}
                                    </TableRow>
                                </TableBody>
                            )}
                        </Table>
                    </TableContainer>

                </Card>
            </Grid>
        </Grid>
    );
};

export default DataPenguji;