import styles from './Extra.module.css';

function Extra() {
  return (
    <section className={styles.equipe}>
      <h1>Seção extra</h1>
      <div className={styles.membros}>
        <div className={styles.membro}>
          <div className={styles.fotoPlaceholder}>👤</div>
          <h4>Nome 1</h4>
          <p>Função 1</p>
        </div>
        <div className={styles.membro}>
          <div className={styles.fotoPlaceholder}>👤</div>
          <h4>Nome 2</h4>
          <p>Função 2</p>
        </div>
      </div>
    </section>
  );
}
export default Extra;
