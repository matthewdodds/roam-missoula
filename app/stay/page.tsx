'use client';

export default function Stay() {
  const listings = [
    { name: 'Doubletree by Hilton Missoula Edgewater', type: 'Hotel', rating: 4.6, reviews: 1243, price: '$$$', desc: 'Perched on the Clark Fork River with stunning views. Home to Finn restaurant and one of the best patios in Missoula.' },
    { name: 'The Wren', type: 'Boutique Hotel', rating: 4.8, reviews: 456, price: '$$$', desc: 'Downtown Missoula\'s premier boutique hotel. Walking distance to everything, beautifully designed rooms and exceptional service.' },
    { name: 'Montana Snowbowl Lodging', type: 'Ski Lodge', rating: 4.7, reviews: 234, price: '$$', desc: 'Stay slope-side at Missoula\'s local mountain. Perfect for ski trips with easy access to 950 acres of terrain.' },
    { name: 'Goldsmith\'s Bed & Breakfast', type: 'B&B', rating: 4.9, reviews: 312, price: '$$', desc: 'A beloved Missoula institution on the Clark Fork River. Beautifully restored historic home with a legendary breakfast.' },
    { name: 'Campus Inn', type: 'Hotel', rating: 4.5, reviews: 678, price: '$$', desc: 'Comfortable and convenient, right next to the University of Montana campus. Great base for exploring all of Missoula.' },
    { name: 'Missoula KOA', type: 'Campground', rating: 4.6, reviews: 445, price: '$', desc: 'Full service campground with RV sites, tent sites and cabins. Easy access to downtown and all of Missoula\'s outdoor recreation.' },
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
        <p style={{fontSize:11,letterSpacing:4,textTransform:'uppercase' as const,color:'var(--gold)',marginBottom:12}}>Where to stay</p>
        <h1 style={{fontFamily:'Playfair Display,serif',fontSize:'clamp(40px,6vw,80px)',fontWeight:900,color:'var(--cream)',lineHeight:1,marginBottom:16}}>
          Stay<br/><em style={{color:'var(--gold)'}}>in Missoula</em>
        </h1>
        <p style={{fontSize:16,color:'rgba(245,240,232,0.6)',maxWidth:500,lineHeight:1.7}}>
          From riverside boutique hotels to slope-side lodges. Find your perfect Missoula basecamp.
        </p>
      </div>

      <div style={{padding:'24px 60px',borderBottom:'1px solid rgba(26,46,30,0.1)',display:'flex',gap:12,flexWrap:'wrap'}}>
        {['All','Hotels','Boutique Hotels','B&Bs','Campgrounds','Ski Lodges'].map(f => (
          <button key={f} style={{padding:'8px 18px',fontSize:12,letterSpacing:1,textTransform:'uppercase' as const,cursor:'pointer',background:f==='All'?'var(--pine)':'transparent',color:f==='All'?'var(--cream)':'var(--pine)',border:'1px solid var(--pine)',fontFamily:'DM Sans,sans-serif',fontWeight:500}}>{f}</button>
        ))}
      </div>

      <div style={{padding:'48px 60px'}}>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:24}}>
          {listings.map(l => (
            <div key={l.name} style={{background:'var(--paper)',border:'1px solid rgba(26,46,30,0.1)',overflow:'hidden',cursor:'pointer',transition:'all 0.25s'}}
              onMouseEnter={e=>e.currentTarget.style.transform='translateY(-4px)'}
              onMouseLeave={e=>e.currentTarget.style.transform='translateY(0)'}>
              <div style={{height:160,background:'var(--pine)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <span style={{fontSize:48}}>{l.type==='Campground'?'⛺':l.type==='B&B'?'🏡':l.type==='Ski Lodge'?'⛷️':l.type==='Boutique Hotel'?'✨':'🏨'}</span>
              </div>
              <div style={{padding:24}}>
                <div style={{fontSize:10,letterSpacing:2,textTransform:'uppercase' as const,color:'var(--amber)',marginBottom:6}}>{l.type}</div>
                <div style={{fontFamily:'Playfair Display,serif',fontSize:22,fontWeight:700,color:'var(--pine)',marginBottom:8}}>{l.name}</div>
                <div style={{fontSize:13,color:'var(--bark)',lineHeight:1.6,marginBottom:16}}>{l.desc}</div>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',paddingTop:16,borderTop:'1px solid rgba(26,46,30,0.1)'}}>
                  <span style={{fontSize:13,color:'var(--pine)',fontWeight:500}}>★ {l.rating} · {l.reviews} reviews</span>
                  <span style={{fontSize:12,color:'var(--bark)'}}>{l.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{background:'var(--amber)',padding:'20px 60px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <div>
          <div style={{fontFamily:'Playfair Display,serif',fontSize:20,fontWeight:700,color:'var(--pine)'}}>Own a hotel or lodging in Missoula?</div>
          <div style={{fontSize:13,color:'rgba(26,46,30,0.7)',marginTop:2}}>Get listed free. Featured spots from $79/month.</div>
        </div>
        <a href="/list-your-business" style={{background:'var(--pine)',color:'var(--gold)',textDecoration:'none',fontFamily:'DM Sans,sans-serif',fontSize:11,fontWeight:500,letterSpacing:2,textTransform:'uppercase' as const,padding:'12px 24px'}}>Get listed free →</a>
      </div>
    </>
  );
}