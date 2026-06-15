'use client';
import { useState } from 'react';

export default function ListYourBusiness() {
  const [step, setStep] = useState(1);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [form, setForm] = useState({
    businessName: '',
    ownerName: '',
    email: '',
    phone: '',
    website: '',
    category: '',
    description: '',
    address: '',
    plan: 'featured'
  });

  const STRIPE_LINK = 'https://buy.stripe.com/your_link_here'; // swap this in later

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setLogoPreview(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const nav = (
    <nav style={{position:'fixed',top:0,left:0,right:0,zIndex:100,display:'flex',alignItems:'center',justifyContent:'space-between',padding:'18px 40px',background:'rgba(26,46,30,0.95)',borderBottom:'1px solid rgba(200,133,42,0.2)'}}>
      <a href="/" style={{fontFamily:'Cinzel,serif',fontSize:18,fontWeight:600,color:'var(--gold)',letterSpacing:3,textDecoration:'none'}}>ROAM MISSOULA</a>
      <div style={{display:'flex',gap:32,alignItems:'center'}}>
        {[['Outdoors','/outdoors'],['Eat & Drink','/eat-and-drink'],['Shops','/shops'],['Events','/events'],['Stay','/stay']].map(([label,href]) => (
          <a key={label} href={href} style={{fontSize:12,fontWeight:500,color:'rgba(245,240,232,0.7)',textDecoration:'none',letterSpacing:1.5,textTransform:'uppercase' as const}}>{label}</a>
        ))}
      </div>
    </nav>
  );

  return (
    <>
      {nav}

      {/* HERO */}
      <div style={{background:'var(--pine)',paddingTop:120,paddingBottom:60,paddingLeft:60,paddingRight:60}}>
        <p style={{fontSize:11,letterSpacing:4,textTransform:'uppercase' as const,color:'var(--gold)',marginBottom:12}}>Grow your business</p>
        <h1 style={{fontFamily:'Playfair Display,serif',fontSize:'clamp(36px,5vw,72px)',fontWeight:900,color:'var(--cream)',lineHeight:1,marginBottom:16}}>
          Get listed on<br/><em style={{color:'var(--gold)'}}>Roam Missoula</em>
        </h1>
        <p style={{fontSize:16,color:'rgba(245,240,232,0.6)',maxWidth:500,lineHeight:1.7}}>
          Put your business in front of thousands of locals and visitors every month. Free basic listing or get featured from $79/month.
        </p>

        {/* PLANS */}
        <div style={{display:'flex',gap:16,marginTop:40,flexWrap:'wrap'}}>
          {[
            { id:'basic', name:'Basic Listing', price:'Free', features:['Business name & description','Category listing','Contact info','1 photo'] },
            { id:'featured', name:'Featured Listing', price:'$79/mo', features:['Everything in Basic','Top of category results','Up to 10 photos','Logo upload','Priority placement','Monthly analytics report'] },
            { id:'premium', name:'Premium', price:'$149/mo', features:['Everything in Featured','Homepage spotlight','Social media shoutout','Dedicated listing page','Quarterly review meeting'] },
          ].map(plan => (
            <div key={plan.id} onClick={() => setForm({...form, plan: plan.id})} style={{
              background: form.plan===plan.id ? 'rgba(200,133,42,0.15)' : 'rgba(245,240,232,0.05)',
              border: form.plan===plan.id ? '2px solid var(--amber)' : '1px solid rgba(245,240,232,0.15)',
              padding:24, borderRadius:4, cursor:'pointer', minWidth:200, flex:1, maxWidth:280,
              transition:'all 0.2s'
            }}>
              <div style={{fontSize:10,letterSpacing:2,textTransform:'uppercase' as const,color:'var(--sage)',marginBottom:8}}>{plan.name}</div>
              <div style={{fontFamily:'Playfair Display,serif',fontSize:32,fontWeight:700,color:'var(--gold)',marginBottom:16}}>{plan.price}</div>
              {plan.features.map(f => (
                <div key={f} style={{fontSize:12,color:'rgba(245,240,232,0.7)',marginBottom:6,display:'flex',gap:8,alignItems:'center'}}>
                  <span style={{color:'var(--teal)'}}>✓</span> {f}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* FORM */}
      <div style={{maxWidth:720,margin:'0 auto',padding:'60px 40px'}}>

        {/* STEP INDICATORS */}
        <div style={{display:'flex',gap:8,marginBottom:48,alignItems:'center'}}>
          {[1,2,3].map(s => (
            <div key={s} style={{display:'flex',alignItems:'center',gap:8}}>
              <div style={{
                width:32,height:32,borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',
                background: step>=s ? 'var(--pine)' : 'var(--paper)',
                color: step>=s ? 'var(--gold)' : 'var(--bark)',
                fontSize:13,fontWeight:700,border: step>=s ? '2px solid var(--amber)' : '2px solid var(--paper)'
              }}>{s}</div>
              <span style={{fontSize:11,letterSpacing:1,textTransform:'uppercase' as const,color:step>=s?'var(--pine)':'var(--bark)'}}>
                {s===1?'Business Info':s===2?'Photos & Details':'Review & Pay'}
              </span>
              {s<3 && <div style={{width:40,height:1,background:'var(--paper)',margin:'0 4px'}}/>}
            </div>
          ))}
        </div>

        {/* STEP 1 */}
        {step===1 && (
          <div>
            <h2 style={{fontFamily:'Playfair Display,serif',fontSize:28,fontWeight:700,color:'var(--pine)',marginBottom:32}}>Tell us about your business</h2>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:20,marginBottom:20}}>
              {[
                {label:'Business Name',name:'businessName',placeholder:'e.g. KettleHouse Brewing'},
                {label:'Owner / Contact Name',name:'ownerName',placeholder:'Your full name'},
                {label:'Email Address',name:'email',placeholder:'you@yourbusiness.com'},
                {label:'Phone Number',name:'phone',placeholder:'(406) 555-0000'},
              ].map(field => (
                <div key={field.name}>
                  <label style={{fontSize:11,letterSpacing:1.5,textTransform:'uppercase' as const,color:'var(--pine)',fontWeight:500,display:'block',marginBottom:8}}>{field.label}</label>
                  <input name={field.name} value={(form as any)[field.name]} onChange={handleChange} placeholder={field.placeholder} style={{width:'100%',padding:'12px 16px',border:'1px solid rgba(26,46,30,0.2)',background:'var(--paper)',fontFamily:'DM Sans,sans-serif',fontSize:14,color:'var(--text)',outline:'none'}}/>
                </div>
              ))}
            </div>
            <div style={{marginBottom:20}}>
              <label style={{fontSize:11,letterSpacing:1.5,textTransform:'uppercase' as const,color:'var(--pine)',fontWeight:500,display:'block',marginBottom:8}}>Category</label>
              <select name="category" value={form.category} onChange={handleChange} style={{width:'100%',padding:'12px 16px',border:'1px solid rgba(26,46,30,0.2)',background:'var(--paper)',fontFamily:'DM Sans,sans-serif',fontSize:14,color:'var(--text)',outline:'none'}}>
                <option value="">Select a category...</option>
                {['Hiking & Trails','Fishing','Biking','River & Water','Skiing','Restaurant','Brewery','Cafe','Bar','Boutique','Art Gallery','Outdoor Gear','Market','Hotel','B&B','Campground','Events'].map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div style={{marginBottom:20}}>
              <label style={{fontSize:11,letterSpacing:1.5,textTransform:'uppercase' as const,color:'var(--pine)',fontWeight:500,display:'block',marginBottom:8}}>Business Address</label>
              <input name="address" value={form.address} onChange={handleChange} placeholder="123 Higgins Ave, Missoula, MT 59801" style={{width:'100%',padding:'12px 16px',border:'1px solid rgba(26,46,30,0.2)',background:'var(--paper)',fontFamily:'DM Sans,sans-serif',fontSize:14,color:'var(--text)',outline:'none'}}/>
            </div>
            <div style={{marginBottom:32}}>
              <label style={{fontSize:11,letterSpacing:1.5,textTransform:'uppercase' as const,color:'var(--pine)',fontWeight:500,display:'block',marginBottom:8}}>Website (optional)</label>
              <input name="website" value={form.website} onChange={handleChange} placeholder="https://yourbusiness.com" style={{width:'100%',padding:'12px 16px',border:'1px solid rgba(26,46,30,0.2)',background:'var(--paper)',fontFamily:'DM Sans,sans-serif',fontSize:14,color:'var(--text)',outline:'none'}}/>
            </div>
            <button onClick={() => setStep(2)} style={{background:'var(--pine)',color:'var(--gold)',border:'none',fontFamily:'DM Sans,sans-serif',fontSize:12,fontWeight:500,letterSpacing:2,textTransform:'uppercase' as const,padding:'16px 40px',cursor:'pointer'}}>
              Next: Photos & Details →
            </button>
          </div>
        )}

        {/* STEP 2 */}
        {step===2 && (
          <div>
            <h2 style={{fontFamily:'Playfair Display,serif',fontSize:28,fontWeight:700,color:'var(--pine)',marginBottom:32}}>Photos & description</h2>

            {/* LOGO UPLOAD */}
            <div style={{marginBottom:32}}>
              <label style={{fontSize:11,letterSpacing:1.5,textTransform:'uppercase' as const,color:'var(--pine)',fontWeight:500,display:'block',marginBottom:12}}>Business Logo or Front Photo</label>
              <div style={{border:'2px dashed rgba(26,46,30,0.2)',padding:40,textAlign:'center' as const,background:'var(--paper)',cursor:'pointer',position:'relative' as const}}
                onClick={() => document.getElementById('logo-upload')?.click()}>
                {logoPreview ? (
                  <div>
                    <img src={logoPreview} alt="preview" style={{maxWidth:200,maxHeight:200,objectFit:'contain' as const,margin:'0 auto',display:'block'}}/>
                    <p style={{fontSize:12,color:'var(--sage)',marginTop:12}}>Click to change</p>
                  </div>
                ) : (
                  <div>
                    <div style={{fontSize:40,marginBottom:12}}>📸</div>
                    <p style={{fontSize:14,color:'var(--bark)',marginBottom:4}}>Click to upload your logo or a photo of your business</p>
                    <p style={{fontSize:12,color:'var(--sage)'}}>JPG, PNG or GIF · Max 5MB · Will be resized to 400×400</p>
                  </div>
                )}
                <input id="logo-upload" type="file" accept="image/*" onChange={handleImage} style={{display:'none'}}/>
              </div>
            </div>

            {/* DESCRIPTION */}
            <div style={{marginBottom:32}}>
              <label style={{fontSize:11,letterSpacing:1.5,textTransform:'uppercase' as const,color:'var(--pine)',fontWeight:500,display:'block',marginBottom:8}}>Business Description</label>
              <textarea name="description" value={form.description} onChange={handleChange} rows={5} placeholder="Tell visitors what makes your business special. What do you offer? What's the vibe? Why should they visit?" style={{width:'100%',padding:'12px 16px',border:'1px solid rgba(26,46,30,0.2)',background:'var(--paper)',fontFamily:'DM Sans,sans-serif',fontSize:14,color:'var(--text)',outline:'none',resize:'vertical' as const}}/>
              <p style={{fontSize:12,color:'var(--bark)',marginTop:6}}>{form.description.length}/300 characters recommended</p>
            </div>

            <div style={{display:'flex',gap:12}}>
              <button onClick={() => setStep(1)} style={{background:'transparent',color:'var(--pine)',border:'1px solid var(--pine)',fontFamily:'DM Sans,sans-serif',fontSize:12,fontWeight:500,letterSpacing:2,textTransform:'uppercase' as const,padding:'16px 32px',cursor:'pointer'}}>
                ← Back
              </button>
              <button onClick={() => setStep(3)} style={{background:'var(--pine)',color:'var(--gold)',border:'none',fontFamily:'DM Sans,sans-serif',fontSize:12,fontWeight:500,letterSpacing:2,textTransform:'uppercase' as const,padding:'16px 40px',cursor:'pointer'}}>
                Next: Review & Pay →
              </button>
            </div>
          </div>
        )}

        {/* STEP 3 */}
        {step===3 && (
          <div>
            <h2 style={{fontFamily:'Playfair Display,serif',fontSize:28,fontWeight:700,color:'var(--pine)',marginBottom:32}}>Review your listing</h2>

            <div style={{background:'var(--paper)',border:'1px solid rgba(26,46,30,0.1)',padding:32,marginBottom:32}}>
              {logoPreview && <img src={logoPreview} alt="logo" style={{width:80,height:80,objectFit:'contain' as const,marginBottom:16,border:'1px solid rgba(26,46,30,0.1)',padding:8,background:'white'}}/>}
              <div style={{fontSize:10,letterSpacing:2,textTransform:'uppercase' as const,color:'var(--amber)',marginBottom:6}}>{form.category}</div>
              <div style={{fontFamily:'Playfair Display,serif',fontSize:24,fontWeight:700,color:'var(--pine)',marginBottom:8}}>{form.businessName || 'Your Business Name'}</div>
              <div style={{fontSize:13,color:'var(--bark)',lineHeight:1.6,marginBottom:16}}>{form.description || 'Your description will appear here.'}</div>
              <div style={{fontSize:12,color:'var(--pine)',marginBottom:4}}>📍 {form.address}</div>
              <div style={{fontSize:12,color:'var(--pine)',marginBottom:4}}>📧 {form.email}</div>
              <div style={{fontSize:12,color:'var(--pine)'}}>📞 {form.phone}</div>
            </div>

            <div style={{background:'var(--pine)',padding:24,marginBottom:32,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <div>
                <div style={{fontSize:10,letterSpacing:2,textTransform:'uppercase' as const,color:'var(--sage)',marginBottom:4}}>Selected plan</div>
                <div style={{fontFamily:'Playfair Display,serif',fontSize:20,fontWeight:700,color:'var(--cream)'}}>
                  {form.plan==='basic'?'Basic Listing — Free':form.plan==='featured'?'Featured Listing — $79/mo':'Premium — $149/mo'}
                </div>
              </div>
              <div style={{fontSize:12,color:'rgba(245,240,232,0.5)'}}>You can cancel anytime</div>
            </div>

            <div style={{display:'flex',gap:12}}>
              <button onClick={() => setStep(2)} style={{background:'transparent',color:'var(--pine)',border:'1px solid var(--pine)',fontFamily:'DM Sans,sans-serif',fontSize:12,fontWeight:500,letterSpacing:2,textTransform:'uppercase' as const,padding:'16px 32px',cursor:'pointer'}}>
                ← Back
              </button>
              <a href={form.plan==='basic' ? 'mailto:hello@roammissoula.com' : STRIPE_LINK} style={{
                background:'var(--amber)',color:'var(--snow)',textDecoration:'none',
                fontFamily:'DM Sans,sans-serif',fontSize:12,fontWeight:500,
                letterSpacing:2,textTransform:'uppercase' as const,padding:'16px 40px',
                display:'inline-block',cursor:'pointer'
              }}>
                {form.plan==='basic' ? 'Submit Free Listing →' : 'Continue to Payment →'}
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
}