export default function ListingPage({ params }: { params: { slug: string } }) {
    return (
      <div style={{padding:'120px 60px 60px',fontFamily:'DM Sans,sans-serif'}}>
        <a href="/" style={{color:'var(--amber)',textDecoration:'none',fontSize:12,letterSpacing:2,textTransform:'uppercase'}}>← Back to Roam Missoula</a>
        <h1 style={{fontFamily:'Playfair Display,serif',fontSize:48,fontWeight:900,color:'var(--pine)',marginTop:24}}>
          Coming Soon
        </h1>
        <p style={{color:'var(--bark)',marginTop:12}}>Individual listing pages are on the way.</p>
      </div>
    );
  }