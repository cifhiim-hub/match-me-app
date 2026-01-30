export default function Home() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh', 
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f9f9f9',
      direction: 'rtl'
    }}>
      <h1 style={{ color: '#ff4b2b', fontSize: '3rem' }}>MatchMe</h1>
      <p style={{ fontSize: '1.2rem' }}>האפליקציה בדרך! 🚀</p>
      <div style={{ 
        marginTop: '20px', 
        padding: '15px', 
        border: '1px solid #ddd', 
        borderRadius: '10px',
        background: 'white' 
      }}>
        שלום! האתר שלך הוקם בהצלחה.
      </div>
    </div>
  );
}
