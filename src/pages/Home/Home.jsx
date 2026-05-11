import Card from '../../components/Card/Card';
import styles from './Home.module.css';

function Home() {
  const destaques = [
    { id: 1, t: "Título 1", d: "Descrição curta para substituir depois." },
    { id: 2, t: "Título 2", d: "Outro bloco de texto editável." },
    { id: 3, t: "Título 3", d: "Mais um espaço livre para conteúdo futuro." }
  ];

  return (
    <section className={styles.homeContainer}>
      <h1>Título principal</h1>
      <p>Espaço de apresentação para personalizar com o conteúdo do seu projeto.</p>
      <div className={styles.grid}>
        {destaques.map(item => (
          <Card key={item.id} titulo={item.t} descricao={item.d} />
        ))}
      </div>
    </section>
  );
}
export default Home;
