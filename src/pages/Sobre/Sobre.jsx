import styles from './Sobre.module.css';

function Sobre() {
  return (
    <section className={styles.container}>
      <h1>Sobre o projeto</h1>
      <p className={styles.descricao}>
        Este espaço pode ser adaptado com a apresentação, missão ou contexto do seu projeto.
      </p>
      
      <div className={styles.mvvGrid}>
        <div className={styles.item}>
          <h3>🚀 Bloco 1</h3>
          <p>Texto livre para descrever o primeiro ponto importante.</p>
        </div>
        <div className={styles.item}>
          <h3>👁️ Bloco 2</h3>
          <p>Outro espaço reservado para informações futuras.</p>
        </div>
        <div className={styles.item}>
          <h3>💎 Bloco 3</h3>
          <p>Mais um exemplo para preencher depois com o conteúdo certo.</p>
        </div>
      </div>
    </section>
  );
}
export default Sobre;
