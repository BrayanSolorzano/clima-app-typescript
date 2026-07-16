interface  Props {
    lang: string;
    changeEn: () => void;
    changeEs: () => void;
     
 }

export const LanguageSelector = ( {changeEn, changeEs, lang} : Props ) => { 
  return (

      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginBottom: '20px' }}>
        <button 
          onClick={changeEn}
          style={{ 
            padding: '8px 12px', cursor: 'pointer', border: '1px solid #ccc', borderRadius: '4px',
            fontWeight: lang === 'en' ? 'bold' : 'normal', 
            backgroundColor: lang === 'en' ? '#0056b3' : '#f0f0f0', color: lang === 'en' ? '#fff' : '#000'
          }}
        >EN</button>
        <button 
          onClick={changeEs}
          style={{ 
            padding: '8px 12px', cursor: 'pointer', border: '1px solid #ccc', borderRadius: '4px',
            fontWeight: lang === 'es' ? 'bold' : 'normal', 
            backgroundColor: lang === 'es' ? '#0056b3' : '#f0f0f0', color: lang === 'es' ? '#fff' : '#000'
          }}
        >ES</button>
      </div>

  )
}


