import React from 'react';
import axios from 'axios'
import {Card, CardContent, CardHeader, Divider, Grid, Typography, Button, Link} from '@material-ui/core';
import TableBasic from '../forms/tables/TableBasic';
import { AddOutlined } from '@material-ui/icons';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const dataPeserta = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
              <Button href= "../tambahPeserta"  variant="contained" startIcon={<AddOutlined/>}  >
                Tambah Peserta
              </Button>
                <Card>
                    
                    <TableBasic/>
                </Card>
            </Grid>
        </Grid>
    );
};

export default dataPeserta;