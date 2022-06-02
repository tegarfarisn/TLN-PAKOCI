import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import logoDefault from "../../../../assets/images/users/userNotFound.png"

function TableBasic(){
  const url = "http://192.168.202.8:1337/api/pendaftars?populate[0]=pegawai.jabatan.grade.jenjang&sort[2]=id_pendaftar&populate[1]=pegawai.foto"
  const [posts, setPosts] = useState([])
  const [jenjang, setJenjang] = useState('')
  const [foto, setFoto] = useState('http://192.168.202.8:1337')
  var nomor = 0;


  useEffect(() =>{
    if(posts.length === 0){
      axios.get(url)
      .then(res => {
        console.log(res)
        setPosts(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
    }

}, [posts])


  //jika Grade kosong
  // const cekGrade = (post)=> {
  //   if (post.attributes.pegawai.data.attributes.jabatan.data.attributes.grade.data === null){
  //     console.log("ini Grade kosong")

  //     return "-"
  //   }
  //   else if (post.attributes.pegawai.data.attributes.jabatan.data.attributes.grade.data !== null){
      
  //     return post.attributes.pegawai.data.attributes.jabatan.data.attributes.grade.data.attributes.nama_grade
      
  //   }
    
  // }

  //jika jenjang kosong
  const cekJenjang = (post)=> {
    if (post.attributes.pegawai.data.attributes.jabatan.data.attributes.grade.data.attributes.jenjang.data === null){
      console.log("ini jenjang kosong", post.attributes.pegawai.data.attributes.jabatan.data.attributes.grade.data.attributes.jenjang.data)

      return "-"
    }
    else if (post.attributes.pegawai.data.attributes.jabatan.data.attributes.grade.data.attributes.jenjang.data !== null){
      
      return post.attributes.pegawai.data.attributes.jabatan.data.attributes.grade.data.attributes.jenjang.data.attributes.jenjang_jabatan_struktural
      
    }
    
  }


  //jika foto kosong
  const cekFoto = (post)=> {
    if (post.attributes.pegawai.data.attributes.foto.data === null){
      console.log("ini foto kosong")
      
      return logoDefault
    }
    else if (post.attributes.pegawai.data.attributes.foto.data !== null){
     
      return foto.concat(post.attributes.pegawai.data.attributes.foto.data.attributes.formats.thumbnail.url)
      
    }
  }

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
                <TableCell align="right">Foto</TableCell>
              </TableRow>
            </TableHead>
              {posts.map(post => 
                <TableBody>
                  <TableRow>
                    <TableCell>{nomor = nomor + 1}</TableCell>
                    <TableCell align="right">{post.attributes.pegawai.data.attributes.nama}</TableCell>
                    <TableCell align="right">{post.attributes.pegawai.data.attributes.nip}</TableCell>
                    <TableCell align="right">{post.attributes.pegawai.data.attributes.jabatan.data.attributes.nama_jabatan}</TableCell>
                    <TableCell align="right">{post.attributes.pegawai.data.attributes.jabatan.data.attributes.grade.data.attributes.nama_grade}</TableCell>
                    <TableCell align="right">{cekJenjang(post)}</TableCell>
                    <TableCell align="right"><img src={cekFoto(post)} width="80"/></TableCell>
                    
                    {/* <TableCell align="right">{post.attributes.pegawai.data.attributes.grade.data.attributes.nama_grade}</TableCell>
                    <TableCell align="right">{post.attributes.pegawai.data.attributes.jabatan.data.attributes.nama_jabatan}</TableCell> */}
                  </TableRow>
                </TableBody>
                )}
          </Table>
        </TableContainer> 
      
          
            
            
           
         
      
    )
}


export default TableBasic