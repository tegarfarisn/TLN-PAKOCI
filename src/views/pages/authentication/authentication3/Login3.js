import React, { Component } from 'react'
import { Button, Container, Grid, Paper, TextField } from '@material-ui/core'

// import Dashboard from '../../../dashboard/
import firebaseAuthentication from '../../../../config/firebase'

export default class Login extends Component{
    state = {
        email:'',
        password:''
    }
    handleChangeField = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const {email, password} = this.state
        firebaseAuthentication.auth().signInWithEmailAndPassword(email,password)
        .then(res => {
            if(res.user){
                this.props.history.push('/dashboard/Default')
            }
        })
        .catch(error=>{
            alert(error.message)
        })
        
    }
 
    
    render(){
        const {email,password}=this.state
        console.log(this.state)
        return(
            <Container>
                <Grid container style={{justifyContent:'center'}}>
                    <Grid className='Login' py={20} px={10}>
                        <h2><center>HALAMAN LOGIN</center></h2>
                        <form >
                            <TextField type='email' fullWidth margin='dense' variant="outlined" size='small' label="Email" value={email} onChange={this.handleChangeField} name="email" required/>
                            <TextField type='password' fullWidth margin='dense' variant="outlined" size='small' label="Password" value={password} onChange={this.handleChangeField} name="password" required/>
                            <Button type='submit' fullWidth variant='contained' onClick={this.handleSubmit} >Login</Button>
                        </form>
                    </Grid>

                </Grid>
            </Container>
        )
    }
}