import React from 'react';
import CompteList from './components/CompteList';
import CompteForm from './components/CompteForm';

function App() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>💼 Gestion des Comptes</h1>
        <p>Ajouter, consulter et gérer vos comptes facilement</p>
      </header>

      <main style={styles.main}>
        <section style={styles.card}>
          <h2>➕ Ajouter un compte</h2>
          <CompteForm />
        </section>

        <section style={styles.card}>
          <h2>📋 Liste des comptes</h2>
          <CompteList />
        </section>
      </main>

      <footer style={styles.footer}>
        <small>Developed with ❤️ by You</small>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f7f9fc',
    minHeight: '100vh',
    padding: '20px'
  },
  header: {
    textAlign: 'center',
    marginBottom: '25px'
  },
  main: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  card: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    width: '420px',
    minHeight: '200px'
  },
  footer: {
    marginTop: '30px',
    textAlign: 'center',
    color: '#666'
  }
};

export default App;
