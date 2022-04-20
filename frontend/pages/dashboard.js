import { useEffect } from 'react';
import api from '../services/api';

export default function Dashboard() {

  useEffect(() => {
    api.get('/api/user')
      .then(response => {
        console.log('buscou as infos do usuário logado após o redirect');
        console.log(response.data);
      })
  }, []);

  return (
    <div>
      <h1>Logado!!!!</h1>
    </div>
  );
}
