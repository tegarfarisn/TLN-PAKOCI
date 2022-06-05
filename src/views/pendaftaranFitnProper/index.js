import * as React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, Grid, Typography, Button, TextField, Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';

import { ReplyOutlined } from '@material-ui/icons';
import * as URL from '../../api/index'

const PendaftaranFitnProper = () => {
  const [Nip, setNip] = useState('');
  const [jabatan, setJabatan] = useState([]);
  const [penguji, setPenguji] = useState([]);
  const [proyeksi, setProyeksi] = useState([]);

  useEffect(() => {
    console.log("nip", Nip);
    console.log("proyeksi", proyeksi);
    if(jabatan.length === 0){
      getJabatan()
    }

    if(proyeksi.length !== 0){
      getJenjang()
    }

    if(penguji.length === 0){
      getPenguji()
    }

  }, [proyeksi]);
  
  const [pendaftar, setPendaftar] = useState({
    jenis_fit_n_proper: "",
    date: "",
    file_cv: "",
    file_ppt: "",
    pesertas: "",
    nama: "",
    jabatan: "",
    id_proyeksi_jabatan:"",
    id_jenjang_proyeksi_jabatan:"",
    id_penguji: ""
  })

  const postFitProper = () =>{
    const data = {
      pegawai: pendaftar.id,
      tanggal_tes: pendaftar.date,
      tanggal_pendaftaran:pendaftar.date,
      jenis_fit_n_proper: pendaftar.jenis_fit_n_proper,
      jabatan: pendaftar.id_proyeksi_jabatan
    }
    axios.post(URL.baseURL + `/pendaftars`,{data})
    .then((res)=>{
      console.log("post berhasil",res.data.data);
    })
  }

  const getPegawai = () => {
    console.log("get pegawai");
    axios.get(URL.baseURL + `/pegawais?filters[nip][$eq]=${Nip}&populate=jabatan.grade.jenjang`)
      .then((res) => {
        console.log("ini pegawai", res.data.data);
        setPendaftar({ ...pendaftar, 
          nama: res.data.data[0].attributes.nama, 
          jabatan: res.data.data[0].attributes.jabatan.data.attributes.nama_jabatan,
          id: res.data.data[0].id,
          
        });
      })
      getJabatan();
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

  const getJenjang = () => {
    setPendaftar({...pendaftar,id_proyeksi_jabatan:proyeksi})
    axios.get(URL.baseURL + `/jabatans/${proyeksi}?populate=grade.jenjang`)
    .then((res) => {
      console.log("Ini jenjang nya", res.data.data)
      setPendaftar({
        ...pendaftar,
        id_jenjang_proyeksi_jabatan: res.data.data.attributes.grade.data.attributes.jenjang.data.attributes.jenjang_jabatan_struktural,
      })
    })
    .catch(err => {
      console.log(err)
    })
    
  }

  const getPenguji = () => {
    axios.get(URL.baseURL + `/pengujis?populate=pegawai`)
    .then((res) => {
      console.log("Ini Penguji", res.data.data)
      // setPendaftar
      setPenguji(res.data.data)
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
          <CardHeader title={<Typography variant="h5">Input / Updating Pendaftaran Fit & Proper </Typography>} />
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
              <Button variant="contained" md={1} type="submit" onClick={() => getPegawai()} >
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
              value={pendaftar.nama}
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
              value={pendaftar.jabatan}
              autoComplete="current-password"
              disabled />
          </Grid>
          <Grid container spacing={1} paddingBottom={3}>
            <Grid item xs={2} md={2.2}>
              <Typography variant="h5" paddingLeft={3} display='center' >
                Date
              </Typography>
            </Grid>
            <TextField
              id="fullwidth"
              label=""
              type="Date"
              onChange={(e) => setPendaftar({ ...pendaftar, date: e.target.value })}
              autoComplete="current-password" />
          </Grid>

          <Grid container spacing={1} paddingBottom={3}>
            <Grid item xs={2} md={2.2}>
              <Typography variant="h5" paddingLeft={3} display='center' >
                Proyeksi
              </Typography>
            </Grid>
            <Grid item xs={1} md={2.2}>
              <FormControl fullWidth>
                <InputLabel id="Proyeksi" >
                  Proyeksi
                </InputLabel>
                <Select
                  labelId="Proyeksi"
                  id="Proyeksi"

                  label="Proyeksi"

                  onChange={(e) => setProyeksi(e.target.value)}
                  value={proyeksi}
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
                Jenjang
              </Typography>
            </Grid>
            <TextField
              id="outlined-password-input"
              label="Jenjang"
              type="Jenjang"
              value={pendaftar.id_jenjang_proyeksi_jabatan}
              autoComplete="current-password"
              disabled />
          </Grid>
          <Grid container spacing={1} paddingBottom={3}>
            <Grid item xs={2} md={2.2}>
              <Typography variant="h5" paddingLeft={3} display='center' >
                Jenis Fit & Proper
              </Typography>
            </Grid>
            <Grid item xs={2} md={2.2}>
              <FormControl fullWidth>
                <InputLabel id="Jenis Fit & Proper" >
                  Jenis Fit & Proper
                </InputLabel>
                <Select
                  labelId="Jenis Fit & Proper"
                  id="Jenis Fit & Proper"
                  value={pendaftar.jenis_fit_n_proper}
                  label="Jenis Fit & Proper"
                  onChange={(e) => setPendaftar({ ...pendaftar, jenis_fit_n_proper: e.target.value })}
                >
                  <MenuItem value={"Reguler"}>Reguler</MenuItem>
                  <MenuItem value={"Vcon"}>Vcon</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={1} paddingBottom={3}>
            <Grid item xs={2} md={2.2}>
              <Typography variant="h5" paddingLeft={3} display='center' >
                Upload PPT
              </Typography>
            </Grid>
            <TextField
              id="fullwidth"
              label="Link PPT"
              type="PPT"
              autoComplete="current-password" />
          </Grid>
          <Grid container spacing={1} paddingBottom={3}>
            <Grid item xs={2} md={2.2}>
              <Typography variant="h5" paddingLeft={3} display='center' >
                Upload CV
              </Typography>
            </Grid>
            <TextField
              id="outlined-password-input"
              label="Link CV"
              type="CV"
              autoComplete="current-password" />
          </Grid>
          <Grid container spacing={1} paddingBottom={3}>
            <Grid item xs={2} md={2.2}>
              <Typography variant="h5" paddingLeft={3} display='center' >
                Penguji 1
              </Typography>
            </Grid>
            <Grid item xs={1} md={2.2}>
              <FormControl fullWidth>
                <InputLabel id="Penguji 1" >
                  Penguji 1
                </InputLabel>
                <Select
                  labelId="Penguji 1"
                  id="Penguji 1"

                  label="Penguji 1"

                  onChange={(e) => setPendaftar({ ...pendaftar, id_penguji: e.target.value })}
                  value={pendaftar.id_penguji}
                >
                  {penguji.map(daftarpenguji =>
                    <MenuItem value={daftarpenguji.id}>{daftarpenguji.attributes.pegawai.data.attributes.nama}</MenuItem>
                  )}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={1} paddingBottom={3}>
            <Grid item xs={2} md={2.2}>
              <Typography variant="h5" paddingLeft={3} display='center' >
                Penguji 2
              </Typography>
            </Grid>
            <Grid item xs={1} md={2.2}>
              <FormControl fullWidth>
                <InputLabel id="Penguji 2" >
                  Penguji 2
                </InputLabel>
                <Select
                  labelId="Penguji 2"
                  id="Penguji 2"

                  label="Penguji 2"

                  onChange={(e) => setPendaftar({ ...pendaftar, id_penguji: e.target.value })}
                  value={penguji.id}
                >
                  {penguji.map(daftarpenguji =>
                    <MenuItem value={daftarpenguji.id}>{daftarpenguji.attributes.pegawai.data.attributes.nama}</MenuItem>
                  )}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={1} paddingBottom={3}>
            <Grid item xs={2} md={2.2}>
              <Typography variant="h5" paddingLeft={3} display='center' >
                Penguji 3
              </Typography>
            </Grid>
            <Grid item xs={1} md={2.2}>
              <FormControl fullWidth>
                <InputLabel id="Penguji 3" >
                  Penguji 3
                </InputLabel>
                <Select
                  labelId="Penguji 3"
                  id="Penguji 3"

                  label="Penguji 3"

                  onChange={(e) => setPendaftar({ ...pendaftar, id_penguji: e.target.value })}
                  value={penguji.id}
                >
                  {penguji.map(daftarpenguji =>
                    <MenuItem value={daftarpenguji.id}>{daftarpenguji.attributes.pegawai.data.attributes.nama}</MenuItem>
                  )}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={1} paddingBottom={3}>
            <Grid item xs={2} md={2.2}>
              <Typography variant="h5" paddingLeft={3} display='center' >
                Penguji 4
              </Typography>
            </Grid>
            <Grid item xs={1} md={2.2}>
              <FormControl fullWidth>
                <InputLabel id="Penguji 4" >
                  Penguji 4
                </InputLabel>
                <Select
                  labelId="Penguji 4"
                  id="Penguji 4"

                  label="Penguji 4"

                  onChange={(e) => setPendaftar({ ...pendaftar, id_penguji: e.target.value })}
                  value={penguji.id}
                >
                  {penguji.map(daftarpenguji =>
                    <MenuItem value={daftarpenguji.id}>{daftarpenguji.attributes.pegawai.data.attributes.nama}</MenuItem>
                  )}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={1} paddingBottom={3}>
            <Grid item xs={2} md={2.2}>
              <Typography variant="h5" paddingLeft={3} display='center' >
                Penguji 5
              </Typography>
            </Grid>
            <Grid item xs={1} md={2.2}>
              <FormControl fullWidth>
                <InputLabel id="Penguji 5" >
                  Penguji 5
                </InputLabel>
                <Select
                  labelId="Penguji 5"
                  id="Penguji 5"

                  label="Penguji 5"

                  onChange={(e) => setPendaftar({ ...pendaftar, id_penguji: e.target.value })}
                  value={pendaftar.id_penguji}
                >
                  {penguji.map(daftarpenguji =>
                    <MenuItem value={daftarpenguji.id}>{daftarpenguji.attributes.pegawai.data.attributes.nama}</MenuItem>
                  )}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={3} paddingBottom={3} paddingLeft={2}>
            <Grid item xs={3} md={2.2}>
              <FormControl >
                <InputLabel onChange={(e) => setPendaftar(e.target.value)} value={pendaftar} />
                <Button variant="contained" type="submit" onClick={() => postFitProper()}>Submit</Button>
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