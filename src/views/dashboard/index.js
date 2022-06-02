import React from 'react';
import {Grid} from '@material-ui/core';
import {useState} from 'react';
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
import { Card, CardHeader, Typography,TextField, Button,MenuItem, CardContent,Select, InputLabel, FormControl} from '@mui/material';


const Dashboard = () => {
  const [bulan, setBulan] = useState('');

  const url = "http://10.50.164.137:1337/api/pendaftars?populate[0]=pegawai.jabatan&populate[1]=pegawai.grade&populate[2]=pegawai.jenjang"
  const [posts, setPosts] = useState([])

  const handleChange= (event) => {
    setBulan(event.target.value);
  } 

    return (
     
      <Grid container>
       <Typography variant="h2" xs={12} md ={2.2} paddingBottom={2}>Welcome to Fit & Proper </Typography>
      <Grid item xs={12}>
      <Card>
          <CardHeader title={<Typography variant="h4"> </Typography>} />
          <Grid container spacing={1} paddingBottom={3}>
            <Grid item xs={2} md ={2.2}>
                <Typography variant = "h5" paddingLeft={3}  display='center' >
                  Pilih Bulan
                </Typography> 
            </Grid>
            <Grid item xs={1} md ={2.2}>           
              <FormControl fullWidth>
              <InputLabel id = "Pilih Bulan Tahun" >
                Pilih Bulan Tahun
              </InputLabel>
                  <Select
                  labelId="bulan"
                  id="bulan"
                  value={bulan}
                  label="bulan"
                  onChange={handleChange}>
                      <MenuItem value={10}>Januari 2022</MenuItem>
                      <MenuItem value={20}>Februari 2022</MenuItem>
                      <MenuItem value={20}>Maret 2022</MenuItem>
                      <MenuItem value={20}>April 2022</MenuItem>
                      <MenuItem value={20}>Mei 2022</MenuItem>
                      <MenuItem value={20}>Juni 2022</MenuItem>
                      <MenuItem value={20}>Juli 2022</MenuItem>
                      </Select>
              </FormControl>
              </Grid> 
              <Grid item xs={2} md ={2.2}>
                <Button variant="contained" md={1} type="submit" >
                    CEK
                </Button> 
              </Grid>
          </Grid>
          <CardContent>
          <Stack direction="row" alignItems="center" gap={4}   >
            <CalendarMonthOutlinedIcon md ={2.2}/>
            <Typography variant="h4">Jadwal Fit & Proper</Typography>
          </Stack>
          </CardContent>
         
          <TableContainer component={Paper}>  
          <Table sx={{ minWidth: 10 }} aria-label="simple table">
             <TableHead>
              <TableRow>
                <TableCell >No</TableCell>
                <TableCell align="right">Nama</TableCell>
                <TableCell align="right">NIP</TableCell>
                <TableCell align="right">Jabatan</TableCell>
                <TableCell align="right">Proyeksi</TableCell>
                <TableCell align="right">Tanggal</TableCell>
                <TableCell align="right">Penguji</TableCell>
              </TableRow>
            </TableHead>
              {posts.map(post => 
                <TableBody>
                  <TableRow>
                    <TableCell>{post.attributes.pegawai.data.id}</TableCell>
                    <TableCell align="right">{post.attributes.pegawai.data.attributes.nama}</TableCell>
                    <TableCell align="right">{post.attributes.pegawai.data.attributes.nip}</TableCell>
                    <TableCell align="right">{post.attributes.pegawai.data.attributes.jenjang.data.attributes.jenjang_jabatan_struktural}</TableCell>
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

export default Dashboard;
