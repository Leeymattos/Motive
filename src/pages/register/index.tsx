import React from 'react'
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import "./register.css"
import axios from 'axios';
import api from '../../services/api';
import { toast, Flip } from 'react-toastify';
import logo from '../../assets/images/WhiteLogo-Motive.png'
import backgroundImg from '../../assets/images/cadastro2.jpg'

type FormValues = {
  nome: string
  email: string
  foto: string
  senha: string,
  confirmarSenha?: string
}

export default function Register() {

  const { register, handleSubmit } = useForm<FormValues>();

  const navigate = useNavigate();

  async function handleRegister(data: FormValues) {

    try {

      if (data.senha !== data.confirmarSenha) {
        toast.error('As senhas são diferentes', {
          transition: Flip,
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "colored",
          progress: undefined,
        });
      } else {
        delete (data.confirmarSenha);

        await api.post('usuario', data);

        toast.success('Cadastro realizado com sucesso', {
          transition: Flip,
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "colored",
          progress: undefined,
        });

        navigate('/login');
      }

    } catch (error) {
      if (axios.isAxiosError(error)) {
        const res = error.response;
        if (res)
          toast.error(`${res.data.message}`, {
            transition: Flip,
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
          })
      }
      console.log(error);
    }
  }

  return (
    <Grid container direction='row' justifyContent='center' alignItems='center' sx={{
      backgroundImage: `url(https://live.staticflickr.com/65535/52650072921_8c2ff488da_k.jpg)`,
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: '100vh',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>


      <Grid xs={6} alignSelf='flex-start' >
        <Link to='/'>
          <img src={logo} alt="" className='logo-register' />
        </Link>
      </Grid>


      <Grid alignItems='center' xs={6}>

        <Box paddingX={20} sx={{ height: 500, width: 800 }}>

          <form onSubmit={handleSubmit(handleRegister)} className="box-register">
            <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' sx={{ color: "#0DCA70", fontWeight: "bold", fontSize: "24px" }}>CADASTRAR</Typography>
            <TextField {...register('nome')} id='nome' label='Nome' variant='filled' name='nome' margin='normal' fullWidth className='campo-nome' color='green' inputProps={{ style: { color: "#efeeee" } }} />
            <TextField {...register('email')} id='email' label='Email' variant='filled' name='email' margin='normal' fullWidth className='campo-email' color='green' inputProps={{ style: { color: "#efeeee" } }} />
            <TextField {...register('foto')} id='foto' label='Foto' variant='filled' name='foto' margin='normal' fullWidth className='campo-foto' color='green' inputProps={{ style: { color: "#efeeee" } }} />
            <TextField {...register('senha')} id='senha' label='Senha' variant='filled' name='senha' margin='normal' type='password' fullWidth className='campo-senha' color='green' inputProps={{ style: { color: "#efeeee" } }} />
            <TextField {...register('confirmarSenha')} id='Confirmar Senha' label='Confirmar Senha' variant='filled' name='confirmarSenha' margin='normal' type='password' fullWidth className='campo-confirmarSenha' color='green' inputProps={{ style: { color: "#efeeee" } }} />
            <Box marginTop={2} textAlign='center'>
              <Link to='/login' className='text-decorator-none'>
                <Button variant='contained' color='secondary' sx={{ backgroundColor: "#e74c3c", border: '1px solid #e74c3c', ":hover": { backgroundColor: "#000", border: '1px solid #e74c3c' }, }}>
                  Cancelar
                </Button>
              </Link>
              <Button
                type='submit' variant='contained' sx={{ backgroundColor: "#0DCA70", border: '1px solid #0DCA70', ":hover": { backgroundColor: "#000", border: '1px solid #0DCA70' }, marginLeft: "30px" }}>
                Cadastrar
              </Button>
            </Box>
          </form>

        </Box>
      </Grid>
    </Grid>
  );
}
