import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { useRouter } from 'next/router';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // requisição p/ a api
    const response = await api.get('/sanctum/csrf-cookie')
      .then(response => {
        console.log('gerou o cookie');
        api.post('/api/login', {
          email,
          password
        }).then(response => {
          console.log('tentou fazer o login');
          console.log(response.data);
          setUser(response.data);

          api.get('/api/user').then(response => {
            console.log('buscou as infos do usuario logado');
            console.log(response.data);
            router.push('/dashboard');
          });
        }).catch(error => {
          console.log('error');
          console.log(error);
        });
      })
  }

  return (
    <div className='mx-auto max-w-md h-screen max-h-screen flex items-center'>
      <form onSubmit={(e) => handleSubmit(e)} action="/api/login" className="flex flex-col gap-2">
        <h1 className='text-2xl font-bold'>Login</h1>

        <input type="text" onChange={(e) => setEmail(e.target.value)} name='email' className='border-2 rounded p-2' placeholder='Digite seu e-mail' />

        <input type="password" onChange={(e) => setPassword(e.target.value)} name='password' className='border-2 rounded p-2' placeholder="Digite sua senha" />

        <button className="rounded bg-green-400 p-2" type="submit">Enviar</button>
      </form>
    </div>
  );
}
