'use client';

export default function Home() {
  return (
    <>
      <nav style={{
        position:'fixed',top:0,left:0,right:0,zIndex:100,
        display:'flex',alignItems:'center',justifyContent:'space-between',
        padding:'18px 40px',
        background:'rgba(26,46,30,0.92)',
        backdropFilter:'blur(12px)',
        borderBottom:'1px solid rgba(200,133,42,0.2)'
      }}>
        <div style={{fontFamily:'Cinzel,serif',fontSize:18,fontWeight:600,color:'var(--gold)',letterSpacing:3}}>
          ROAM MISSOULA
        </div>
        <div style={{display:'flex',gap:32,alignItems:'center'}}>
          {[['Outdoors','/outdoors'],['Eat & Drink','/eat-and-drink'],['Shops','/shops'],['Events','/events'],['Stay','/stay']].map(([label,href]) => (
            <a key={label} href={href} style={{fontSize:12,fontWeight:500,color:'rgba(245,240,232,0.7)',textDecoration:'none',letterSpacing:1.5,textTransform:'uppercase' as const}}>
              {label}
            </a>
          ))}
          <a href="/list-your-business" style={{background:'var(--amber)',color:'var(--snow)',fontSize:12,fontWeight:500,padding:'8px 20px',textDecoration:'none',letterSpacing:1,textTransform:'uppercase' as const}}>
            List your business
          </a>
        </div>
      </nav>

      <section style={{minHeight:'100vh',background:'var(--pine)',position:'relative',display:'flex',flexDirection:'column',justifyContent:'flex-end',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0,display:'flex',alignItems:'flex-end'}}>
          <svg viewBox="0 0 1440 500" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'75%'}}>
            <defs>
              <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0d1f10"/>
                <stop offset="100%" stopColor="#1a2e1e"/>
              </linearGradient>
            </defs>
            <rect width="1440" height="500" fill="url(#sky)"/>
            <circle cx="120" cy="60" r="1" fill="#e8a84a" opacity="0.6"/>
            <circle cx="340" cy="30" r="1.5" fill="#faf8f4" opacity="0.4"/>
            <circle cx="680" cy="45" r="1" fill="#faf8f4" opacity="0.5"/>
            <circle cx="900" cy="20" r="1" fill="#e8a84a" opacity="0.5"/>
            <circle cx="1100" cy="55" r="1.5" fill="#faf8f4" opacity="0.3"/>
            <circle cx="1300" cy="35" r="1" fill="#faf8f4" opacity="0.4"/>
            <path d="M0 500 L0 280 L80 200 L200 260 L320 150 L440 230 L560 120 L680 200 L800 140 L920 220 L1040 160 L1160 240 L1280 170 L1380 230 L1440 200 L1440 500 Z" fill="#243828" opacity="0.8"/>
            <path d="M0 500 L0 340 L100 280 L220 320 L360 220 L480 290 L600 200 L720 270 L840 210 L960 280 L1080 230 L1200 300 L1320 250 L1440 290 L1440 500 Z" fill="#1e3322" opacity="0.9"/>
            <path d="M0 500 L0 420 L30 400 L50 415 L70 395 L90 410 L110 388 L130 405 L160 385 L190 400 L220 378 L250 395 L280 372 L310 390 L340 368 L380 385 L420 362 L460 380 L500 358 L540 375 L580 352 L620 370 L660 348 L700 365 L740 342 L780 360 L820 338 L860 355 L900 332 L940 350 L980 328 L1020 345 L1060 322 L1100 340 L1140 318 L1180 336 L1220 314 L1260 332 L1300 310 L1340 328 L1380 315 L1420 325 L1440 318 L1440 500 Z" fill="#152518"/>
            <circle cx="1320" cy="80" r="28" fill="#e8d5a3" opacity="0.15"/>
          </svg>
        </div>
        <div style={{position:'relative',zIndex:2,padding:'0 60px 80px'}}>
          <p style={{fontSize:11,fontWeight:500,letterSpacing:4,textTransform:'uppercase' as const,color:'var(--gold)',marginBottom:16}}>
            Montana&apos;s most complete local guide
          </p>
          <h1 style={{fontFamily:'Playfair Display,serif',fontSize:'clamp(52px,8vw,110px)',fontWeight:900,color:'var(--cream)',lineHeight:0.92,marginBottom:24}}>
            Roam<br/><em style={{fontStyle:'italic',color:'var(--gold)'}}>Missoula</em>
          </h1>
          <p style={{fontSize:16,fontWeight:300,color:'rgba(245,240,232,0.65)',maxWidth:420,lineHeight:1.7,marginBottom:40}}>
            Trails, rivers, breweries, hidden gems. Everything worth finding in the Garden City — all in one place.
          </p>
          <div style={{display:'flex',maxWidth:520,border:'1px solid rgba(200,133,42,0.4)'}}>
            <input type="text" placeholder="Search trails, restaurants, shops..." style={{
              flex:1,background:'rgba(245,240,232,0.1)',border:'none',
              color:'var(--cream)',fontFamily:'DM Sans,sans-serif',
              fontSize:14,padding:'14px 20px',outline:'none'
            }}/>
            <button style={{
              background:'var(--amber)',border:'none',color:'var(--snow)',
              fontFamily:'DM Sans,sans-serif',fontSize:12,fontWeight:500,
              letterSpacing:1.5,textTransform:'uppercase' as const,padding:'14px 28px',cursor:'pointer'
            }}>Explore</button>
          </div>
          <div style={{display:'flex',gap:48,marginTop:48,paddingTop:48,borderTop:'1px solid rgba(245,240,232,0.1)'}}>
            {[['8,000+','Local listings'],['4M','Annual visitors'],['100%','Local & independent']].map(([num,label]) => (
              <div key={label}>
                <span style={{fontFamily:'Playfair Display,serif',fontSize:36,fontWeight:700,color:'var(--gold)',display:'block'}}>{num}</span>
                <span style={{fontSize:11,color:'rgba(245,240,232,0.5)',letterSpacing:1.5,textTransform:'uppercase' as const}}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{padding:'80px 60px'}}>
        <p style={{fontSize:11,fontWeight:500,letterSpacing:4,textTransform:'uppercase' as const,color:'var(--amber)',marginBottom:12}}>Browse by category</p>
        <h2 style={{fontFamily:'Playfair Display,serif',fontSize:'clamp(32px,4vw,52px)',fontWeight:700,color:'var(--pine)',lineHeight:1.1,marginBottom:48}}>
          What are you<br/>looking for?
        </h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))',gap:16}}>
          {[
            ['⛰️','Hiking & Trails','142 listings','/outdoors'],
            ['🎣','Fishing','38 listings','/outdoors'],
            ['🚵','Biking','56 listings','/outdoors'],
            ['🍺','Breweries','24 listings','/eat-and-drink'],
            ['🍽️','Restaurants','310 listings','/eat-and-drink'],
            ['🛶','River & Water','29 listings','/outdoors'],
            ['🛍️','Local Shops','187 listings','/shops'],
            ['🎉','Events','Live calendar','/events'],
          ].map(([icon,name,count,href]) => (
            <a key={name} href={href} style={{textDecoration:'none'}}>
              <div style={{
                background:'var(--paper)',border:'1px solid rgba(26,46,30,0.1)',
                padding:'28px 20px',cursor:'pointer',transition:'all 0.25s'
              }}
              onMouseEnter={e=>(e.currentTarget.style.transform='translateY(-4px)')}
              onMouseLeave={e=>(e.currentTarget.style.transform='translateY(0)')}>
                <span style={{fontSize:28,marginBottom:12,display:'block'}}>{icon}</span>
                <span style={{fontFamily:'Playfair Display,serif',fontSize:16,fontWeight:700,color:'var(--pine)',display:'block',marginBottom:4}}>{name}</span>
                <span style={{fontSize:12,color:'var(--bark)'}}>{count}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <div style={{background:'var(--amber)',padding:'20px 60px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <div>
          <div style={{fontFamily:'Playfair Display,serif',fontSize:20,fontWeight:700,color:'var(--pine)'}}>Own a Missoula business?</div>
          <div style={{fontSize:13,color:'rgba(26,46,30,0.7)',marginTop:2}}>Get a free listing today. Featured spots from $79/month.</div>
        </div>
        <a href="/list-your-business" style={{background:'var(--pine)',color:'var(--gold)',textDecoration:'none',fontFamily:'DM Sans,sans-serif',fontSize:11,fontWeight:500,letterSpacing:2,textTransform:'uppercase' as const,padding:'12px 24px'}}>
          Get listed free →
        </a>
      </div>

      <footer style={{background:'var(--text)',padding:'60px',display:'grid',gridTemplateColumns:'2fr 1fr 1fr 1fr',gap:48}}>
        <div>
          <div style={{fontFamily:'Cinzel,serif',fontSize:22,color:'var(--gold)',letterSpacing:3,marginBottom:12}}>ROAM MISSOULA</div>
          <p style={{fontSize:13,color:'rgba(245,240,232,0.4)',lineHeight:1.7,maxWidth:260}}>
            The Garden City&apos;s most complete local guide. Built by Missoulians, for everyone who loves this place.
          </p>
        </div>
        {[
          ['Explore',[['Hiking & Trails','/outdoors'],['Fishing','/outdoors'],['Breweries','/eat-and-drink'],['Restaurants','/eat-and-drink'],['Events','/events']]],
          ['Business',[['Free listing','/list-your-business'],['Featured plans','/list-your-business'],['Advertise','/list-your-business'],['Dashboard','#']]],
          ['About',[['Our story','#'],['Contact','#'],['Privacy','#'],['Terms','#']]],
        ].map(([heading, links]) => (
          <div key={heading as string}>
            <h4 style={{fontSize:10,fontWeight:500,letterSpacing:3,textTransform:'uppercase' as const,color:'var(--gold)',marginBottom:16}}>{heading}</h4>
            {(links as [string,string][]).map(([link,href]) => (
              <a key={link} href={href} style={{display:'block',fontSize:13,color:'rgba(245,240,232,0.5)',textDecoration:'none',marginBottom:8}}>{link}</a>
            ))}
          </div>
        ))}
      </footer>
      <div style={{background:'var(--text)',padding:'20px 60px',borderTop:'1px solid rgba(245,240,232,0.06)',display:'flex',justifyContent:'space-between'}}>
        <p style={{fontSize:12,color:'rgba(245,240,232,0.3)'}}>© 2026 Roam Missoula. Made with love in Montana.</p>
        <p style={{fontSize:12,color:'rgba(245,240,232,0.2)'}}>406 country</p>
      </div>
    </>
  );
}