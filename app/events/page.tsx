'use client';

export default function Events() {
  const events = [
    { name: 'First Friday', type: 'Arts & Culture', freq: 'Monthly', price: 'Free', desc: 'Downtown galleries and businesses open their doors on the first Friday of every month. Art, music, food and community all in one night.' },
    { name: 'Out to Lunch', type: 'Community', freq: 'Weekly · Summer', price: 'Free', desc: 'Weekly outdoor gathering in Caras Park every Wednesday from June through August. Live music, local food vendors, and the whole community showing up.' },
    { name: 'Downtown Tonight', type: 'Music & Food', freq: 'Weekly · Summer', price: 'Free', desc: 'Friday evening street festival in downtown Missoula. Local bands, food trucks, and a genuine community celebration all summer long.' },
    { name: 'Missoula Brewfest', type: 'Festival', freq: 'Annual', price: '$', desc: 'Celebrating Missoula\'s incredible craft beer scene. Sample from dozens of local and regional breweries in one of the best outdoor festival settings in Montana.' },
    { name: 'Hip Strip Block Party', type: 'Festival', freq: 'Annual · Summer', price: 'Free', desc: 'Beer, live music, and fashion shows on Missoula\'s famous Hip Strip. One of the most fun community events of the Missoula summer.' },
    { name: "People's Market", type: 'Market', freq: 'Weekly · May–Sep', price: 'Free', desc: 'Every Saturday on Pine Street, local artisans and crafters fill the street with Montana-made goods. The best weekly market in the city.' },
    { name: 'Missoula Marathon', type: 'Sports', freq: 'Annual · July', price: '$', desc: 'One of the most scenic marathons in the country. Runners take on a course through the stunning Missoula valley and finish in downtown.' },
    { name: 'River City Roots Festival', type: 'Music', freq: 'Annual · August', price: '$', desc: 'Two days of live music at Caras Park on the banks of the Clark Fork. Local and regional artists celebrating the soul of Missoula.' },
  ];

  return (
    <>
      <nav style={{position:'fixed',top:0,left:0,right:0,zIndex:100,display:'flex',alignItems:'center',justifyContent:'space-between',padding:'18px 40px',background:'rgba(26,46,30,0.95)',borderBottom:'1px solid rgba(200,133,42,0.2)'}}>
        <a href="/" style={{fontFamily:'Cinzel,serif',fontSize:18,fontWeight:600,color:'var(--gold)',letterSpacing:3,textDecoration:'none'}}>ROAM MISSOULA</a>
        <div style={{display:'flex',gap:32,alignItems:'center'}}>
          {[['Outdoors','/outdoors'],['Eat & Drink','/eat-and-drink'],['Shops','/shops'],['Events','/events'],['Stay','/stay']].map(([label,href]) => (
            <a key={label} href={href} style={{fontSize:12,fontWeight:500,color:'rgba(245,240,232,0.7)',textDecoration:'none',letterSpacing:1.5,textTransform:'uppercase' as const}}>{label}</a>
          ))}
          <a href="/list-your-business" style={{background:'var(--amber)',color:'var(--snow)',fontSize:12,fontWeight:500,padding:'8px 20px',textDecoration:'none',letterSpacing:1,textTransform:'uppercase' as const}}>List your business</a>
        </div>
      </nav>

      <div style={{background:'var(--pine)',paddingTop:120,paddingBottom:60,paddingLeft:60,paddingRight:60}}>
        <p style={{fontSize:11,letterSpacing:4,textTransform:'uppercase' as const,color:'var(--gold)',marginBottom:12}}>What's happening</p>
        <h1 style={{fontFamily:'Playfair Display,serif',fontSize:'clamp(40px,6vw,80px)',fontWeight:900,color:'var(--cream)',lineHeight:1,marginBottom:16}}>
          Events<br/><em style={{color:'var(--gold)'}}>in Missoula</em>
        </h1>
        <p style={{fontSize:16,color:'rgba(245,240,232,0.6)',maxWidth:500,lineHeight:1.7}}>
          From weekly street festivals to annual celebrations — something is always happening in the Garden City.
        </p>
      </div>

      <div style={{padding:'24px 60px',borderBottom:'1px solid rgba(26,46,30,0.1)',display:'flex',gap:12,flexWrap:'wrap'}}>
        {['All','Festivals','Music','Markets','Community','Sports'].map(f => (
          <button key={f} style={{padding:'8px 18px',fontSize:12,letterSpacing:1,textTransform:'uppercase' as const,cursor:'pointer',background:f==='All'?'var(--pine)':'transparent',color:f==='All'?'var(--cream)':'var(--pine)',border:'1px solid var(--pine)',fontFamily:'DM Sans,sans-serif',fontWeight:500}}>{f}</button>
        ))}
      </div>

      <div style={{padding:'48px 60px'}}>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:24}}>
          {events.map(e => (
            <div key={e.name} style={{background:'var(--paper)',border:'1px solid rgba(26,46,30,0.1)',overflow:'hidden',cursor:'pointer',transition:'all 0.25s'}}
              onMouseEnter={el=>el.currentTarget.style.transform='translateY(-4px)'}
              onMouseLeave={el=>el.currentTarget.style.transform='translateY(0)'}>
              <div style={{height:160,background:'var(--pine)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <span style={{fontSize:48}}>{e.type==='Music'?'🎵':e.type==='Festival'?'🎉':e.type==='Market'?'🛒':e.type==='Sports'?'🏃':'🌟'}</span>
              </div>
              <div style={{padding:24}}>
                <div style={{display:'flex',justifyContent:'space-between',marginBottom:6}}>
                  <div style={{fontSize:10,letterSpacing:2,textTransform:'uppercase' as const,color:'var(--amber)'}}>{e.type}</div>
                  <div style={{fontSize:10,letterSpacing:1,color:'var(--sage)'}}>{e.freq}</div>
                </div>
                <div style={{fontFamily:'Playfair Display,serif',fontSize:22,fontWeight:700,color:'var(--pine)',marginBottom:8}}>{e.name}</div>
                <div style={{fontSize:13,color:'var(--bark)',lineHeight:1.6,marginBottom:16}}>{e.desc}</div>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',paddingTop:16,borderTop:'1px solid rgba(26,46,30,0.1)'}}>
                  <span style={{fontSize:12,color:'var(--pine)',fontWeight:500,letterSpacing:1,textTransform:'uppercase' as const}}>Admission</span>
                  <span style={{fontSize:13,color:'var(--bark)',fontWeight:500}}>{e.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{background:'var(--amber)',padding:'20px 60px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <div>
          <div style={{fontFamily:'Playfair Display,serif',fontSize:20,fontWeight:700,color:'var(--pine)'}}>Hosting an event in Missoula?</div>
          <div style={{fontSize:13,color:'rgba(26,46,30,0.7)',marginTop:2}}>Get it listed free and reach the whole community.</div>
        </div>
        <a href="/list-your-business" style={{background:'var(--pine)',color:'var(--gold)',textDecoration:'none',fontFamily:'DM Sans,sans-serif',fontSize:11,fontWeight:500,letterSpacing:2,textTransform:'uppercase' as const,padding:'12px 24px'}}>List your event →</a>
      </div>
    </>
  );
}