export default function Home() {
  return (
    <div style={{ 
      display: 'flex', flexDirection: 'column', alignItems: 'center', 
      justifyContent: 'center', height: '100vh', fontFamily: 'sans-serif', 
      backgroundColor: '#f0f4f8', direction: 'rtl' 
    }}>
      <h1 style={{ color: '#0052cc', fontSize: '3rem' }}>MatchMe Work 💼</h1>
      <p style={{ fontSize: '1.5rem' }}>האתר שלך לחיבור בין עובדים למעסיקים באוויר!</p>
      <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
         <p>✅ המערכת פעילה</p>
         <p>🚀 מוכן לשידוך הראשון</p>
      </div>
    </div>
  );
}
