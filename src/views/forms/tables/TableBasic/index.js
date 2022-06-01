import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function TableBasic(){
  const [posts, setPosts] = useState([])

  useEffect(() =>{
      axios.get('http://235a-103-209-131-66.ngrok.io/api/pendaftars/?populate=pegawai&sort[0]=pegawai.id')
          .then(res => {
            console.log(res)
            setPosts(res.data.data)
          })
          .catch(err => {
            console.log(err)
          })
  })

    return(
        <TableContainer component={Paper}>  
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
             <TableHead>
              <TableRow>
                <TableCell >No</TableCell>
                <TableCell align="right">Nama</TableCell>
                <TableCell align="right">NIP</TableCell>
                <TableCell align="right">Jabatan</TableCell>
                <TableCell align="right">Grade</TableCell>
                <TableCell align="right">Jenjang</TableCell>
              </TableRow>
            </TableHead>
              {posts.map(post => 
                <TableBody>
                  <TableRow>
                    {/* <TableCell>{post.attributes.pegawai.data.attributes.id}</TableCell> */}
                    <TableCell align="right">{post.attributes.pegawai.data.attributes.nama}</TableCell>
                    <TableCell align="right">{post.attributes.pegawai.data.attributes.nip}</TableCell>
                    <TableCell align="right">{post.attributes.pegawai.data.attributes.jabatan}</TableCell>
                    <TableCell align="right">{post.attributes.pegawai.data.attributes.grade}</TableCell>
                    <TableCell align="right">{post.attributes.pegawai.data.attributes.jenjang}</TableCell>
                  </TableRow>
                </TableBody>
                )}
          </Table>
        </TableContainer>
         
    )
}


export default TableBasic