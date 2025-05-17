'use client';
export default function Home() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Bienvenue sur Drropit 🚀</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Une solution simple pour partager vos liens avec vos clients.</p>
      <button
        style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: '#0070f3',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          fontSize: '1rem',
          cursor: 'pointer',
        }}
        onClick={() => alert("Tu vas bientôt créer ta première page client 😉")}
      >
        Créer un lien client
      </button>
    </main>
  );
}


