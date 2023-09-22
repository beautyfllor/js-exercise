export default function Home() {

  const list = [{nome: 'Flor', idade: 18}, {nome: 'Jaque', idade: 19}, {nome: 'Danilo', idade: 25}]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Next.js</h1>
      <ul>
        {
          list.map(
            (item) => (
              <li key={item.nome}>
               {item.nome} - {item.idade} 
              </li>
            )
          )
        }
      </ul>
    </main>
  )
}
