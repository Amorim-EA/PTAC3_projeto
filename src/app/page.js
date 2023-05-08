
export default function Home() {
  const req = await fetch("http://localhost:3003/alunos");
  const data = await req.json();
  return (
   <div>
      <p>{data.map(element => {
        element.nome
        element.num_inscricao
        element.curso
      })}
  </div>
  )
}
