import { useState } from 'react';
import axios from 'axios';

export default function OrcamentoForm({ setOrcamentos }) {
  const [cliente, setCliente] = useState('');
  const [servico, setServico] = useState('');
  const [valor, setValor] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://127.0.0.1:8000/orcamentos/', {
        cliente, servico, valor: parseFloat(valor)
      });
      setOrcamentos(prev => [...prev, res.data]);
      setCliente(''); setServico(''); setValor('');
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <input placeholder="Cliente" value={cliente} onChange={e => setCliente(e.target.value)} />
      <input placeholder="Serviço" value={servico} onChange={e => setServico(e.target.value)} />
      <input placeholder="Valor" value={valor} onChange={e => setValor(e.target.value)} type="number" />
      <button type="submit">Adicionar</button>
    </form>
  )
}
