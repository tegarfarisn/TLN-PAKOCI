import * as React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, Divider, Grid, Typography, Button, TextField, Select, MenuItem, FormControl, Box, InputLabel } from '@material-ui/core';
import { gridSpacing } from '../../store/constant';
import { ReplyOutlined } from '@material-ui/icons';
import * as URL from '../../api/index'

const PendaftaranFitnProper = () => {
  const [Nip, setNip] = useState('');
  const [apakahSudahTerdaftar, setApakahSudahTerdaftar] = useState('')
  const [proyeksi, setProyeksi] = useState([]);
  const [jabatan, setJabatan] = useState([]);

  const [peserta, setPeserta] = useState({
    id_penguji: "",
    id_pegawai: "",
    nama: "",
    jabatan: "",
    nama_grade: "",
    jenjang_jabatan_struktural: "",
    periode: "3",
    tanggal_pendaftaran: "",
    tanggal_tes: "",
    CV: "",
    PPT: "",
    proyeksi: "",
    jenis_fnp: "",
  })

  useEffect(() => {
    console.log("nip", Nip);
    console.log("proyeksi", proyeksi);
    if (jabatan.length === 0) {
      getJabatan()
    }

  }, [proyeksi]);

  const postPendaftar = () => {
    const data = {
      tanggal_pendaftaran: peserta.tanggal_pendaftaran,
      tanggal_tes: peserta.tanggal_tes,
      CV: peserta.CV,
      PPT: peserta.PPT,
      jenis_fit_n_proper: peserta.jenis_fnp,
      jabatan: peserta.proyeksi,
      pegawai: peserta.id_pegawai,
      periode: peserta.periode,
    }
    if (Nip !== '' || peserta.tanggal_pendaftaran !== '' || peserta.CV !== '' || peserta.tanggal_tes !== '' || peserta.PPT !== '' 
        || peserta. jenis_fit_n_proper !== '' || peserta.jabatan !== '' || peserta.pegawai !== '', peserta.periode !== '') {
      if (apakahSudahTerdaftar == 0) {
        axios.post(URL.baseURL + `/pendaftars`, { data })
        .then((res) => {
          console.log("post berhasil", res.data.data);
        })
        setApakahSudahTerdaftar(1)
      }
    }
  }

  const getJabatan = () => {
    axios.get(URL.baseURL + `/jabatans`)
      .then((res) => {
        console.log("Ini jabatan", res.data.data)
        setJabatan(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const cekApakahSudahTerdaftar = () => {
    console.log("get pegawai");
    axios.get(URL.baseURL + `/pendaftars?populate[0]=periode&filters[periode][periode][$eq][1]=Juni 2022&populate[2]=pegawai.jabatan.grade.jenjang&filters[pegawai][nip]=${Nip}`)
      .then((res) => {
        console.log("apakah sudah terdaftar", apakahSudahTerdaftar);
        if (res.data.data.length !== 0) {
          setApakahSudahTerdaftar(res.data.data.length)
          setPeserta({
            ...peserta,
            nama: 'pegawai sudah terdaftar sebagai peserta untuk periode ini',
            jabatan: 'pegawai sudah terdaftar sebagai peserta untuk periode ini',
            nama_grade: 'pegawai sudah terdaftar sebagai peserta untuk periode ini',
            jenjang_jabatan_struktural: 'pegawai sudah terdaftar sebagai peserta untuk periode ini',
          });
        }
        else if (res.data.data.length === 0) {
          getPegawai();
        }
      })
  }

  const getPegawai = () => {
    axios.get(URL.baseURL + `/pegawais?filters[nip][$eq]=${Nip}&populate=jabatan.grade.jenjang`)
      .then((res) => {
        if (res.data.data.length !== 0) {
          console.log("ini pegawai", res.data.data);
          setPeserta({
            ...peserta,
            id_pegawai: res.data.data[0].id,
            nama: res.data.data[0].attributes.nama,
            jabatan: res.data.data[0].attributes.jabatan.data.attributes.nama_jabatan,
            nama_grade: res.data.data[0].attributes.jabatan.data.attributes.grade.data.attributes.nama_grade,
            jenjang_jabatan_struktural: res.data.data[0].attributes.jabatan.data.attributes.grade.data.attributes.jenjang.data.attributes.jenjang_jabatan_struktural,
          });
          setApakahSudahTerdaftar(0)
          getJabatan();
        }
        else if (res.data.data.length === 0) {
          setPeserta({
            ...peserta,
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
              autoComplete="current-password" 
              required/>
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
              value={peserta.nama}
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
              value={peserta.jabatan}
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
              value={peserta.nama_grade}
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
              value={peserta.jenjang_jabatan_struktural}
              autoComplete="current-password"
              disabled />
          </Grid>

          <Grid container spacing={1} paddingBottom={3}>
            <Grid item xs={2} md={2.2}>
              <Typography variant="h5" paddingLeft={3} display='center' >
                Jenis Fit n Proper
              </Typography>
            </Grid>
            <Grid mx={-1} item xs={2} md={2.2}>
              <FormControl fullWidth>
                <InputLabel id="Jenis Fit n Proper" required >
                  Jenis Fit n Proper
                </InputLabel>
                <Select
                  labelId="Jenis Fit n Proper"
                  id="Jenis Fit n Proper"

                  label="Jenis Fit n Proper"

                  onChange={(e) => setPeserta({ ...peserta, jenis_fnp: e.target.value })}
                  value={peserta.jenis_fnp}
                >
                  <MenuItem value={'Reguler'}>Reguler</MenuItem>
                  <MenuItem value={'Vcon'}>Vcon</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Grid container spacing={1} paddingBottom={3}>
            <Grid item xs={2} md={2.2}>
              <Typography variant="h5" paddingLeft={3} display='center' >
                Proyeksi
              </Typography>
            </Grid>
            <Grid mx={-1} item xs={2} md={2.2}>
              <FormControl fullWidth>
                <InputLabel id="Proyeksi" required>
                  Proyeksi
                </InputLabel>
                <Select
                  labelId="Proyeksi"
                  id="Proyeksi"

                  label="Proyeksi"

                  onChange={(e) => setPeserta({ ...peserta, proyeksi: e.target.value })}
                  value={peserta.proyeksi}
                >
                  {jabatan.map(jab =>
                    <MenuItem value={jab.id}>{jab.attributes.nama_jabatan}</MenuItem>
                  )}
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Grid container spacing={1} paddingBottom={3}>
            <Grid item xs={2} md={2.2}>
              <Typography variant="h5" paddingLeft={3} display='center' >
                Tanggal Pendaftaran
              </Typography>
            </Grid>
            <TextField
              id="outlined-password-input"
              type="Date"
              onChange={(e) => setPeserta({ ...peserta, tanggal_pendaftaran: e.target.value })}
              autoComplete="current-password"
              required
            />
          </Grid>
          <Grid container spacing={1} paddingBottom={3}>
            <Grid item xs={2} md={2.2}>
              <Typography variant="h5" paddingLeft={3} display='center' >
                Tanggal Tes
              </Typography>
            </Grid>
            <TextField
              id="outlined-password-input"
              type="Date"
              onChange={(e) => setPeserta({ ...peserta, tanggal_tes: e.target.value })}
              autoComplete="current-password"
              required
            />
          </Grid>
          <Grid container spacing={1} paddingBottom={3}>
            <Grid item xs={2} md={2.2}>
              <Typography variant="h5" paddingLeft={3} display='center' >
                Link CV
              </Typography>
            </Grid>
            <TextField
              id="outlined-password-input"
              label="CV"
              type="CV"
              onChange={(e) => setPeserta({ ...peserta, CV: e.target.value })}
              autoComplete="current-password" 
              required/>
          </Grid>
          <Grid container spacing={1} paddingBottom={3}>
            <Grid item xs={2} md={2.2}>
              <Typography variant="h5" paddingLeft={3} display='center' >
                Link PPT
              </Typography>
            </Grid>
            <TextField
              id="outlined-password-input"
              label="PPT"
              type="PPT"
              onChange={(e) => setPeserta({ ...peserta, PPT: e.target.value })}
              autoComplete="current-password"
              required />
          </Grid>
          <Grid container spacing={1} paddingBottom={3}>
            <Grid item xs={3} md={2.2}>
              <FormControl >
                <Button variant="contained" md={1} type="submit" onClick={() => postPendaftar()}>Submit</Button>
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

export default PendaftaranFitnProper;