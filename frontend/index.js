import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Sistema de Orçamentos</h1>
      <Link href="/orcamentos">
        <button>Ver Orçamentos</button>
      </Link>
    </div>
  )
}
