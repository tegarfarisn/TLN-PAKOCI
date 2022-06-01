import React from 'react';
import {Card, CardContent, CardHeader, Divider, Grid, Typography, Button} from '@material-ui/core';
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
                </Card>
            </Grid>
        </Grid>
    );
};

export default tambahPeserta;

