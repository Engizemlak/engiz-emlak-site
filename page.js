export default function Home() {
  return (
    <main style={{background:"#000",color:"#fff",minHeight:"100vh",fontFamily:"Arial"}}>
      <section style={{padding:"80px 20px",maxWidth:"1200px",margin:"0 auto"}}>
        <h1 style={{fontSize:"64px",marginBottom:"20px",color:"#d4af37"}}>
          ENGİZ EMLAK
        </h1>

        <p style={{fontSize:"28px",marginBottom:"30px"}}>
          19 Mayıs ve Samsun'un Güvenilir Gayrimenkul Danışmanı
        </p>

        <div style={{
          background:"#111",
          padding:"30px",
          borderRadius:"20px",
          border:"1px solid #d4af37",
          marginBottom:"40px"
        }}>
          <h2 style={{color:"#d4af37"}}>Hizmet Bölgeleri</h2>
          <p>19 Mayıs • Bafra • Atakum • İlkadım • Sinop</p>
        </div>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
          gap:"20px"
        }}>
          <div style={{
            background:"#111",
            padding:"20px",
            borderRadius:"20px"
          }}>
            <h3 style={{color:"#d4af37"}}>Satılık Daire</h3>
            <p>Modern ve yatırım fırsatı daireler</p>
          </div>

          <div style={{
            background:"#111",
            padding:"20px",
            borderRadius:"20px"
          }}>
            <h3 style={{color:"#d4af37"}}>Arsa & Tarla</h3>
            <p>Yatırımlık arsa ve tarla seçenekleri</p>
          </div>

          <div style={{
            background:"#111",
            padding:"20px",
            borderRadius:"20px"
          }}>
            <h3 style={{color:"#d4af37"}}>WhatsApp İletişim</h3>
            <p>0555 005 70 55</p>
          </div>
        </div>
      </section>
    </main>
  )
}
