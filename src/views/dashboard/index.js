import React from 'react';
import { Grid } from '@material-ui/core';
// import {useState} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { Card, CardHeader, Typography, TextField, Button, MenuItem, CardContent, Select, InputLabel, FormControl } from '@mui/material';
import * as URL from '../../api/index'
import axios from 'axios';
import { useState, useEffect } from 'react';


const Dashboard = () => {
  const [bulan, setBulan] = useState('');
  const [posts, setPosts] = useState([])
  const [jumlahPenguji, setJumlahPenguji] = useState('')
  const [jumlahPendaftar, setJumlahPendaftar] = useState('')
  const [periode, setPeriode] = useState('Juni 2022')
  const [listPeriode, setListPeriode] = useState([])

  const handleChange = (event) => {
    setBulan(event.target.value);
  }

  useEffect(() => {
    getJumlahPengujiBulanIni();
    getJumlahPendaftarBulanIni();
    getListPeriode();
  }, [periode])

  const getJumlahPengujiBulanIni = () => {
    console.log("get jumlah penguji bulan ini");
    axios.get(URL.baseURL + `/pengujis?filters[periode][periode][$eq]=${periode}`)
      .then((res) => {
        console.log("ini penguji", res.data.data);
        console.log("jumlah penguji: ", res.data.data.length)
        setJumlahPenguji(res.data.data.length);
      })
  }

  const getJumlahPendaftarBulanIni = () => {
    console.log("get jumlah pendaftar bulan ini");
    axios.get(URL.baseURL + `/pendaftars?filters[periode][periode][$eq]=${periode}`)
      .then((res) => {
        console.log("ini pendaftar", res.data.data);
        console.log("jumlah pendaftar: ", res.data.data.length)
        setJumlahPendaftar(res.data.data.length);
      })
  }

  const getListPeriode = () => {
    console.log("get list periode");
    axios.get(URL.baseURL + `/periodes`)
      .then((res) => {
        console.log("ini periode", res.data.data);
        setListPeriode(res.data.data);
      })
  }



  return (

    <Grid container>
      <Typography variant="h2" xs={12} md={2.2} paddingBottom={2}>Welcome Admin! </Typography>
      <Grid item xs={12}>
        <Card>
          <CardHeader title={<Typography variant="h1"> Pilih Periode Fit n Proper</Typography>} />
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
        <Card marginTop={3}>
          <CardHeader mt={3} title={<Typography variant="h1"> Apa ya </Typography>} />
          <CardContent>
            <Stack direction="row" alignItems="center" gap={4}   >
              <Typography variant="h4">Jumlah Penguji: {jumlahPenguji}</Typography>
            </Stack>
          </CardContent>
          <CardContent>
            <Stack direction="row" alignItems="center" gap={4}   >
              <Typography variant="h4">Jumlah Pendaftar: {jumlahPendaftar}</Typography>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
