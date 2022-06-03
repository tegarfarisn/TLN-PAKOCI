import React from 'react';
import {Card, CardContent, CardHeader, Divider, Grid, TextField, Typography, Button} from '@material-ui/core';
import {ReplyOutlined} from '@material-ui/icons';

const tambahPeserta = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Card>
                    <CardHeader title={<Typography variant="h5">Tambah Peserta</Typography>} />
                    <Divider />
                    <CardContent>
                    <Button href= "../dataPeserta"  variant="contained" startIcon={<ReplyOutlined/>}  >
                        Kembali
                    </Button>
                    </CardContent>
                    <Typography variant = "h5" paddingLeft={3} paddingBottom={3} display='center' >
                    Input Data Peserta
                    </Typography>
                    <Grid container spacing={1} paddingBottom={3}>
                    <Grid item xs={2} md ={2.2}>
                            <Typography variant = "h5" paddingLeft={3}  display='center' >
                            NIP
                            </Typography> 
                        </Grid>
                        <TextField
                            id="outlined-password-input"
                            label="NIP"
                            type="NIP"
                            autoComplete="current-password"/>
                        <Grid container rowSpacing={1} paddingLeft={28} paddingTop={1}>
                        <Grid item xs={9} md ={9} >
                                <Button variant="contained" md={1} type="submit" >
                                CEK
                                </Button>
                                <Button variant="contained" md={1} xs={2}type="submit" >
                                MANUAL
                                </Button>
                                <Button variant="contained" md={1} type="submit" startIcon={<ReplyOutlined/>}  >
                                    BATAL
                                </Button>
                                </Grid>
                        </Grid> 
                    </Grid>
                </Card>
            </Grid>
        </Grid>
    );
};

export default tambahPeserta;

