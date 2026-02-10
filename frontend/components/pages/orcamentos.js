import { useEffect, useState } from 'react';
import axios from 'axios';
import OrcamentoForm from '../components/OrcamentoForm';

export default function Orcamentos() {
  const [orcamentos, setOrcamentos] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/orcamentos/')
      .then(res => setOrcamentos(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Orçamentos</h2>
      <OrcamentoForm setOrcamentos={setOrcamentos} />
      <ul>
        {orcamentos.map(o => (
          <li key={o.id}>
            {o.cliente} - {o.servico} - R${o.valor}
            <a href={`http://127.0.0.1:8000/orcamentos/${o.id}/pdf`} target="_blank"> PDF </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
