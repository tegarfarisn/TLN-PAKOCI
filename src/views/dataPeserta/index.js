import React from 'react';
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
import * as URL from '../../api/index'
import { Card, CardHeader, Typography, Grid, Button, MenuItem, CardContent, Select, InputLabel, FormControl } from '@mui/material';


const DataPeserta = () => {
    const [listPendaftar, setListPendaftar] = useState([])
    const [periode, setPeriode] = useState('Juni 2022')
    const [listPeriode, setListPeriode] = useState([])
    var nomor = 0;


    useEffect(() => {
        getListPeriode();
        getListPendaftar();
    }, [periode])


    const getListPeriode = () => {
        console.log("get list periode");
        axios.get(URL.baseURL + `/periodes`)
            .then((res) => {
                console.log("ini periode", res.data.data);
                setListPeriode(res.data.data);
            })
    }

    const getListPendaftar = () => {
        console.log("get list pendaftar");
        axios.get(URL.baseURL + `/pendaftars?populate=pegawai.jabatan.grade.jenjang&populate=pegawai.foto&filters[periode][periode][$eq]=${periode}&populate=jabatan&populate=nilai_fnps.penguji.pegawai`)
            .then((res) => {
                console.log("ini pendaftar", res.data.data);
                setListPendaftar(res.data.data);
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

    const cekPenguji = (post, urutan, value) => {
        if (post.attributes.nilai_fnps.data[urutan] !== undefined) {
            return post.attributes.nilai_fnps.data[urutan].attributes.penguji.data.attributes.pegawai.data.attributes.nama
        }
        else if (post.attributes.nilai_fnps.data[urutan] === undefined) {
            return (
                <Button onClick={() => ambilValue(post.id)} variant="contained" startIcon={<AddOutlined />}  >
                    Tambah Penguji
                </Button>
            )
        }
    }

    const ambilValue = (value) => {
        console.log("id pendaftar:",value)
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
                        <Table sx={{ minWidth: 1700 }} aria-label="dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell width="50px" align="center">No</TableCell>
                                    <TableCell width="100px" align="center">Foto</TableCell>
                                    <TableCell width="100px" align="center">NIP</TableCell>
                                    <TableCell width="300px" align="center">Nama</TableCell>
                                    <TableCell width="150px" align="center">Grade</TableCell>
                                    <TableCell width="200px" align="center">Jenjang</TableCell>
                                    <TableCell width="300px" align="center">Proyeksi Jabatan</TableCell>
                                    <TableCell width="300px" align="center">Jabatan Saat Ini</TableCell>
                                    <TableCell width="300px" align="center">Penguji 1</TableCell>
                                    <TableCell width="300px" align="center">Penguji 2</TableCell>
                                    <TableCell width="300px" align="center">Penguji 3</TableCell>
                                    <TableCell width="300px" align="center">Penguji 4</TableCell>
                                    <TableCell width="300px" align="center">Penguji 5</TableCell>
                                </TableRow>
                            </TableHead>
                            {listPendaftar.map(post =>
                                <TableBody>
                                    <TableRow>
                                        <TableCell align="center">{nomor = nomor + 1}</TableCell>
                                        <TableCell align="center"><img src={cekFoto(post)} width="80" /></TableCell>
                                        <TableCell align="center">{post.attributes.pegawai.data.attributes.nip}</TableCell>
                                        <TableCell align="center">{post.attributes.pegawai.data.attributes.nama}</TableCell>
                                        <TableCell align="center">{post.attributes.pegawai.data.attributes.jabatan.data.attributes.grade.data.attributes.nama_grade}</TableCell>
                                        <TableCell align="center">{cekJenjang(post)}</TableCell>
                                        <TableCell align="center">{post.attributes.jabatan.data.attributes.nama_jabatan}</TableCell>
                                        <TableCell align="center">{post.attributes.pegawai.data.attributes.jabatan.data.attributes.nama_jabatan}</TableCell>
                                        <TableCell align="center">{cekPenguji(post, 0)}</TableCell>
                                        <TableCell align="center" value="satu">{cekPenguji(post, 1)}</TableCell>
                                        <TableCell align="center">{cekPenguji(post, 2)}</TableCell>
                                        <TableCell align="center">{cekPenguji(post, 3)}</TableCell>
                                        <TableCell align="center">{cekPenguji(post, 4)}</TableCell>

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

export default DataPeserta;