import * as React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, Divider, Grid, Typography, Button, TextField, Select, MenuItem, FormControl, Box, InputLabel } from '@material-ui/core';
import { gridSpacing } from '../../store/constant';
import { ReplyOutlined } from '@material-ui/icons';
import * as URL from '../../api/index'

const PendftaranPenguji = () => {
    const [Nip, setNip] = useState('');
    const [apakahSudahTerdaftar, setApakahSudahTerdaftar] = useState('')

    const [penguji, setPenguji] = useState({
        id_penguji: "",
        id_pegawai: "",
        nama: "",
        jabatan: "",
        nama_grade: "",
        jenjang_jabatan_struktural: "",
        periode: "3",
    })

    const postPenguji = () => {
        const data = {
            pegawai: penguji.id_pegawai,
            periode: penguji.periode,
        }
        if (apakahSudahTerdaftar == 0) {
            axios.post(URL.baseURL + `/pengujis`, { data })
                .then((res) => {
                    console.log("post berhasil", res.data.data);
                })
                setApakahSudahTerdaftar(1)
        }
    }

    const cekApakahSudahTerdaftar = () => {
        console.log("get pegawai");
        axios.get(URL.baseURL + `/pengujis?populate[0]=periode&filters[periode][periode][$eq][1]=Juni 2022&populate[2]=pegawai.jabatan.grade.jenjang&filters[pegawai][nip]=${Nip}`)
            .then((res) => {
                console.log("apakah sudah terdaftar", apakahSudahTerdaftar);
                if (res.data.data.length !== 0) {
                    setApakahSudahTerdaftar(res.data.data.length)
                    setPenguji({
                        ...penguji,
                        nama: 'pegawai sudah terdaftar sebagai penguji untuk periode ini',
                        jabatan: 'pegawai sudah terdaftar sebagai penguji untuk periode ini',
                        nama_grade: 'pegawai sudah terdaftar sebagai penguji untuk periode ini',
                        jenjang_jabatan_struktural: 'pegawai sudah terdaftar sebagai penguji untuk periode ini',
                    });
                }
                else if (res.data.data.length === 0){
                    getPegawai();
                }
            })
    }

    const getPegawai = () => {
        axios.get(URL.baseURL + `/pegawais?filters[nip][$eq]=${Nip}&populate=jabatan.grade.jenjang`)
            .then((res) => {
                if(res.data.data.length !== 0){
                    console.log("ini pegawai", res.data.data);
                    setPenguji({
                        ...penguji,
                        id_pegawai: res.data.data[0].id,
                        nama: res.data.data[0].attributes.nama,
                        jabatan: res.data.data[0].attributes.jabatan.data.attributes.nama_jabatan,
                        nama_grade: res.data.data[0].attributes.jabatan.data.attributes.grade.data.attributes.nama_grade,
                        jenjang_jabatan_struktural: res.data.data[0].attributes.jabatan.data.attributes.grade.data.attributes.jenjang.data.attributes.jenjang_jabatan_struktural,
                    });
                    setApakahSudahTerdaftar(0)
                }
                else if (res.data.data.length === 0){
                    setPenguji({
                        ...penguji,
                        id_pegawai: '',
                        nama: '',
                        jabatan: '',
                        nama_grade: '',
                        jenjang_jabatan_struktural: '',
                    });
                    setApakahSudahTerdaftar(1)
                }
            })
    }

    return (
        <Grid container>
            <Grid item xs={12}>
                <Button href="../dashboard" variant="contained" startIcon={<ReplyOutlined />}  >
                    Kembali
                </Button>
                <Card>
                    {/* <Divider /> */}
                    <CardHeader title={<Typography variant="h5">Input Data Penguji </Typography>} />
                    <Grid container spacing={1} paddingBottom={3}>
                        <Grid item xs={2} md={2.2}>
                            <Typography variant="h5" paddingLeft={3} display='center' >
                                NIP
                            </Typography>
                        </Grid>
                        <TextField
                            id="outlined-password-input"
                            label="NIP"
                            type="NIP"
                            onChange={(e) => setNip(e.target.value)}
                            autoComplete="current-password" />
                        <Grid item xs={2} md={2.2}>
                            <Button variant="contained" md={1} type="submit" onClick={() => cekApakahSudahTerdaftar()} >
                                CEK
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} paddingBottom={3}>
                        <Grid item xs={3} md={2.2}>
                            <Typography variant="h5" paddingLeft={3} display='center' >
                                Nama
                            </Typography>
                        </Grid>
                        <TextField
                            id="fullWidth"
                            label="Nama"
                            type="Nama"
                            autoComplete="current-password"
                            value={penguji.nama}
                            disabled
                        />
                    </Grid>
                    <Grid container spacing={1} paddingBottom={3}>
                        <Grid item xs={2} md={2.2}>
                            <Typography variant="h5" paddingLeft={3} display='center' >
                                Jabatan
                            </Typography>
                        </Grid>
                        <TextField
                            id="fullWidth"
                            label="Jabatan"
                            type="Jabatan"
                            value={penguji.jabatan}
                            autoComplete="current-password"
                            disabled />
                    </Grid>
                    <Grid container spacing={1} paddingBottom={3}>
                        <Grid item xs={2} md={2.2}>
                            <Typography variant="h5" paddingLeft={3} display='center' >
                                Grade
                            </Typography>
                        </Grid>
                        <TextField
                            id="outlined-password-input"
                            label="Grade"
                            type="Grade"
                            value={penguji.nama_grade}
                            autoComplete="current-password"
                            disabled />
                    </Grid>
                    <Grid container spacing={1} paddingBottom={3}>
                        <Grid item xs={2} md={2.2}>
                            <Typography variant="h5" paddingLeft={3} display='center' >
                                Jenjang
                            </Typography>
                        </Grid>
                        <TextField
                            id="outlined-password-input"
                            label="Jenjang"
                            type="Jenjang"
                            value={penguji.jenjang_jabatan_struktural}
                            autoComplete="current-password"
                            disabled />
                    </Grid>
                    <Grid container spacing={1} paddingBottom={3}>
                        <Grid item xs={3} md={2.2}>
                            <FormControl >
                                <Button variant="contained" md={1} type="submit" onClick={() => postPenguji()}>Submit</Button>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <CardContent>

                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default PendftaranPenguji;