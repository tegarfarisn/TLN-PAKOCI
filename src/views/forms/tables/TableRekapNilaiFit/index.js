import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

import {Card, CardHeader, Divider, Grid} from '@material-ui/core';
import Button from '@mui/material/Button';
import MessageTwoToneIcon from '@mui/icons-material/MessageTwoTone';

import {gridSpacing} from '../../../../store/constant';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
    table: {
        minWidth: 350,
        fontSize:30
    }
});

function createData(no, penilai) {
    return {no, penilai};
}

const rows = [
    createData('1', 'Eriyadi'),
    createData('2', 'Erikolim'),
];

export default function TableBasic() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                    <Card>
                        
                        <Divider />
                        <TableContainer>
                            <Table className={classes.table} striped style={{ display:'block', 'overflow-x':'scroll'}}>
                                <TableHead>
                                    <TableRow >
                                        <TableCell rowSpan={2}>No</TableCell>
                                        <TableCell rowSpan={2}>Tim Penilai&nbsp;</TableCell>
                                        <TableCell colSpan={8} align="center">Key Competencies (Bobot 50%)&nbsp;</TableCell>
                                        <TableCell colSpan={4} align="center">Proyeksi Jabatan (Bobot 25%)&nbsp;</TableCell>
                                        <TableCell colSpan={3} align="center">Personal Endurance (Bobot 25%&nbsp;</TableCell>
                                        <TableCell rowSpan={2}>Total Bobot&nbsp;</TableCell>
                                    </TableRow>
                                    <TableRow >
                                        <TableCell scope="col">Enthusiasthic for Challange&nbsp;</TableCell>
                                        <TableCell scope="col">Creative and Innovative&nbsp;</TableCell>
                                        <TableCell scope="col">Building Business Partnership&nbsp;</TableCell>
                                        <TableCell scope="col">Strategic Orientation&nbsp;</TableCell>
                                        <TableCell scope="col">Customer Focus Oriented&nbsp;</TableCell>
                                        <TableCell scope="col">Driving Execution&nbsp;</TableCell>
                                        <TableCell scope="col">Visionary Leadership&nbsp;</TableCell>
                                        <TableCell scope="col">Empowering/Developing Others&nbsp;</TableCell>
                                        <TableCell scope="col">Aspek KEANDALAN SISTEM&nbsp;</TableCell>
                                        <TableCell scope="col">Aspek KECEPATAN RECOVERY&nbsp;</TableCell>
                                        <TableCell scope="col">Aspek MANAJEMEN ASET&nbsp;</TableCell>
                                        <TableCell scope="col">Strategi dan breakthrough yang jelas dalam hal kontribusi KPI di Kontrak Manajemen&nbsp;</TableCell>
                                        <TableCell scope="col">Internal Readness&nbsp;</TableCell>
                                        <TableCell scope="col">External Readness&nbsp;</TableCell>
                                        <TableCell scope="col">Cultural politics,economics and business change readness&nbsp;</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {rows.map((row) => (
                                        <TableRow key={row.no} >
                                            <TableCell component="th" scope="row" >
                                                {row.no}
                                            </TableCell>
                                            <TableCell align="left">{row.penilai}
                                            </TableCell>
                                            </TableRow>
                                            ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Card>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
