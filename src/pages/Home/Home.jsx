import Card from '../../components/Card/Card';
import styles from './Home.module.css';

function Home() {
  const destaques = [
    { id: 1, t: "The Last Of Us", d: "Faça os tiros valerem a pena." },
    { id: 2, t: "Minecraft", d: "Construa terrenos com blocos." },
    { id: 3, t: "Roblox", d: "Um mundo repleto de jogos." },
    { id: 4, t: "Fortnite", d: "Jogo battle royale popular." },
    { id: 5, t: "Just Dance", d: "Jogo de dança mais famoso." }
  ];

  return (
    <section className={styles.homeContainer}>
      <h1>Jogos PMD</h1>
      <p>Lista de melhores jogos de Pedro, Maria e Danilo.</p>
      <div className={styles.grid}>
        {destaques.map(item => (
          <Card key={item.id} titulo={item.t} descricao={item.d} />
        ))}
      </div>
    </section>
  );
}
export default Home;