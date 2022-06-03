import React from 'react';
import axios from 'axios'
import {Card, CardContent, CardHeader, Divider, Grid, Typography, Button, Link} from '@material-ui/core';
import TableBasic2 from '../forms/tables/TableBasic2';
import { AddOutlined } from '@material-ui/icons';


const dataPenguji = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
              <Button href= "../tambahPeserta"  variant="contained" startIcon={<AddOutlined/>}  >
                Tambah Peserta
              </Button>
                <Card>
                    
                    <TableBasic2/>
                    
                </Card>
            </Grid>
        </Grid>
    );
};

export default dataPenguji;