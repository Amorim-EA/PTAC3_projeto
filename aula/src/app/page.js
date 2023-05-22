'use client'

import Image from 'next/image'
import style from './page.module.css'
import Link from 'next/link'

export default async function Home() {
  const req = await fetch("http://localhost:3001/alunos", {
    cache:"no-cache"
  });
  const data = await req.json();
  return (
    <div>
    <h1 className={style.titulo}>Alunos</h1>

    <nav className={style.barra_nav}>
      <Link className={style.links} href="/">Alunos</Link>
      <Link className={style.links} href="/cadastro">Cadastrar</Link>
    </nav>

    <main className={style.container}>
      {data.map(item => (
      <div className={style.card} key={item.id}>
        <p>Nome: {item.nome}</p>
        <p>Curso: {item.curso}</p>
        <p>Numero incrição: {item.num_inscricao}</p>
      </div>
      ))} 
    </main>
    </div>
  )
}
