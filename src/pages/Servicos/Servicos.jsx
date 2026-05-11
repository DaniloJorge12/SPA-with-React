import styles from './Servicos.module.css';

function Servicos() {
  const listaServicos = [
    { id: 1, nome: "Item 1", desc: "Descrição editável para uso futuro." },
    { id: 2, nome: "Item 2", desc: "Segundo bloco para personalização." },
    { id: 3, nome: "Item 3", desc: "Terceiro espaço reservado para conteúdo." },
    { id: 4, nome: "Item 4", desc: "Último exemplo para adaptar como quiser." }
  ];

  return (
    <section>
      <h1>Conteúdos em destaque</h1>
      <div className={styles.lista}>
        {listaServicos.map(s => (
          <div key={s.id} className={styles.servicoCard}>
            <h3>{s.nome}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Servicos;
