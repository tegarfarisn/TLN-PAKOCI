import React from 'react';
import {Grid} from '@material-ui/core';
import {useState} from 'react';
import { Card, CardHeader, Typography,TextField, Button,MenuItem, CardContent,Select, InputLabel, FormControl} from '@mui/material';

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

const Dashboard = () => {
  const [bulan, setBulan] = useState('');

  const handleChange= (event) => {
    setBulan(event.target.value);
  } 

    return (
     
      <Grid container>
       <Typography variant="h2" xs={12} md ={2.2} paddingBottom={2}>Welcome to Fit & Proper </Typography>
      <Grid item xs={12}>
      <Card>
          <CardHeader title={<Typography variant="h4">Jadwal </Typography>} />
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
              <Button variant="contained" md={1} xs={17} type="submit" >
                  CEK
              </Button> 
          </Grid>
            <Grid container spacing={1} paddingBottom={3}>
           
             </Grid>
            </Card>
          </Grid>
        </Grid>
    );
};

export default Dashboard;