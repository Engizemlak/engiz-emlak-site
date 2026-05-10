// VERCEL YAYIN TALİMATI
// 1. GitHub hesabı oluştur
// 2. Bu projeyi GitHub'a yükle
// 3. Vercel hesabı aç
// 4. New Project -> GitHub Repository seç
// 5. Deploy butonuna bas
// 6. Domain kısmından engizemlak.com bağla
// 7. SSL otomatik aktif olur

export default function EngizEmlakWebsite() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="bg-black text-white shadow-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-wide text-yellow-400">
              ENGİZ EMLAK
            </h1>
            <p className="text-sm text-gray-300">
              19 Mayıs'ta Güvenilir Gayrimenkul Hizmeti
            </p>
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#satilik" className="hover:text-yellow-400 transition">Satılık</a>
            <a href="#kiralik" className="hover:text-yellow-400 transition">Kiralık</a>
            <a href="#anasayfa" className="hover:text-yellow-400 transition">Ana Sayfa</a>
            <a href="#ilanlar" className="hover:text-yellow-400 transition">İlanlar</a>
            <a href="#hakkimizda" className="hover:text-yellow-400 transition">Hakkımızda</a>
            <a href="#bolgeler" className="hover:text-yellow-400 transition">Bölgeler</a>
            <a href="#iletisim" className="hover:text-yellow-400 transition">İletişim</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="anasayfa"
        className="relative bg-cover bg-center h-[650px] flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-white">
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Samsun ve Çevresinde
              <span className="text-yellow-400 block mt-2">
                Profesyonel Gayrimenkul Hizmeti
              </span>
            </h2>

            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              Engiz Emlak Gayrimenkul olarak; satılık daire, arsa, tarla ve yatırım fırsatlarında profesyonel danışmanlık sunuyoruz. 19 Mayıs, Bafra, Atakum, İlkadım ve Sinop bölgelerinde aktif hizmet vermekteyiz.
            </p>

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-5 mb-8 max-w-4xl border border-white/20">
              <div className="grid md:grid-cols-4 gap-4">
                <select className="bg-black/40 border border-gray-600 rounded-xl px-4 py-3 text-white">
                  <option>İlan Türü</option>
                  <option>Satılık</option>
                  <option>Kiralık</option>
                </select>

                <select className="bg-black/40 border border-gray-600 rounded-xl px-4 py-3 text-white">
                  <option>Bölge Seçin</option>
                  <option>19 Mayıs</option>
                  <option>Atakum</option>
                  <option>Bafra</option>
                  <option>İlkadım</option>
                </select>

                <select className="bg-black/40 border border-gray-600 rounded-xl px-4 py-3 text-white">
                  <option>Emlak Tipi</option>
                  <option>Daire</option>
                  <option>Arsa</option>
                  <option>Tarla</option>
                  <option>İşyeri</option>
                </select>

                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-xl px-4 py-3 transition">
                  İlan Ara
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-2xl font-bold shadow-lg transition">
                İlanları İncele
              </button>

              <button className="border border-white hover:bg-white hover:text-black px-8 py-4 rounded-2xl font-bold transition">
                WhatsApp İletişim
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section id="ilanlar" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h3 className="text-4xl font-bold mb-4">Öne Çıkan İlanlar</h3>
            <p className="text-gray-600 text-lg">
              Güncel satılık ve kiralık gayrimenkul fırsatları
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Lüks Daire",
                location: "19 Mayıs / Cumhuriyet Mah.",
                price: "4.250.000 TL",
              },
              {
                title: "Yatırımlık Arsa",
                location: "Bafra / Merkez",
                price: "2.900.000 TL",
              },
              {
                title: "Kiralık Ofis",
                location: "Atakum",
                price: "20.000 TL",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:scale-[1.02] transition"
              >
                <img
                  src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1200&auto=format&fit=crop"
                  alt="ilan"
                  className="h-64 w-full object-cover"
                />

                <div className="p-6">
                  <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                  <p className="text-gray-500 mb-4">{item.location}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-yellow-500 font-bold text-2xl">
                      {item.price}
                    </span>

                    <button className="bg-black text-white px-5 py-2 rounded-xl hover:bg-gray-800 transition">
                      Detay
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="hakkimizda" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1400&auto=format&fit=crop"
              alt="ofis"
              className="rounded-3xl shadow-2xl"
            />
          </div>

          <div>
            <h3 className="text-4xl font-bold mb-6">
              Engiz Emlak Hakkında
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Engiz Emlak Gayrimenkul olarak Samsun 19 Mayıs merkezli profesyonel emlak danışmanlığı hizmeti sunuyoruz. Modern ofisimiz, kurumsal marka yapımız ve müşteri memnuniyeti odaklı hizmet anlayışımız ile güvenilir gayrimenkul çözümleri üretiyoruz.
            </p>

            <div className="grid grid-cols-2 gap-5 mt-8">
              <div className="bg-gray-100 p-6 rounded-2xl">
                <h4 className="text-3xl font-bold text-yellow-500">500+</h4>
                <p className="text-gray-600 mt-2">Mutlu Müşteri</p>
              </div>

              <div className="bg-gray-100 p-6 rounded-2xl">
                <h4 className="text-3xl font-bold text-yellow-500">100+</h4>
                <p className="text-gray-600 mt-2">Satılan Gayrimenkul</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regions */}
      <section id="bolgeler" className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-12 text-yellow-400">
            Hizmet Bölgelerimiz
          </h3>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              "19 Mayıs",
              "Atakum",
              "İlkadım",
              "Bafra",
              "Sinop",
            ].map((city, index) => (
              <div
                key={index}
                className="border border-yellow-400 rounded-2xl py-8 text-2xl font-semibold hover:bg-yellow-400 hover:text-black transition"
              >
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1400&auto=format&fit=crop"
              alt="luxury"
              className="rounded-3xl shadow-2xl"
            />
          </div>

          <div>
            <h3 className="text-4xl font-bold mb-6">
              Neden Engiz Emlak?
            </h3>

            <div className="space-y-5">
              <div className="bg-gray-100 p-5 rounded-2xl">
                <h4 className="font-bold text-xl mb-2">Profesyonel Danışmanlık</h4>
                <p className="text-gray-600">Doğru yatırım ve güvenilir yönlendirme hizmeti.</p>
              </div>

              <div className="bg-gray-100 p-5 rounded-2xl">
                <h4 className="font-bold text-xl mb-2">Hızlı Satış & Kiralama</h4>
                <p className="text-gray-600">Geniş müşteri ağı ile hızlı sonuç odaklı çalışma.</p>
              </div>

              <div className="bg-gray-100 p-5 rounded-2xl">
                <h4 className="font-bold text-xl mb-2">Güvenilir Hizmet</h4>
                <p className="text-gray-600">Şeffaf ve müşteri memnuniyeti odaklı yaklaşım.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="iletisim" className="py-20 bg-gray-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-6">İletişim</h3>

          <p className="text-lg text-gray-600 mb-10">
            Gayrimenkul danışmanlığı ve ilan detayları için bizimle iletişime geçin.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h4 className="font-bold text-xl mb-4">Telefon</h4>
              <p className="text-gray-600">0555 005 70 55 / 0541 517 55 61</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h4 className="font-bold text-xl mb-4">Instagram</h4>
              <p className="text-gray-600">@salihymn55</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h4 className="font-bold text-xl mb-4">Sahibinden</h4>
              <p className="text-gray-600">https://engizemlak.sahibinden.com/</p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-2xl text-lg font-semibold transition shadow-lg">
              WhatsApp Üzerinden Ulaş
            </button>

            <button className="bg-black hover:bg-gray-800 text-white px-10 py-4 rounded-2xl text-lg font-semibold transition shadow-lg">
              Konum Aç
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/905550057055"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-full shadow-2xl z-50 font-bold transition"
      >
        WhatsApp
      </a>

      {/* Google Maps */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-6 text-yellow-400">
            Ofis Konumumuz
          </h3>

          <p className="text-gray-300 mb-10 text-lg">
            Engiz Emlak ofisimizi ziyaret ederek profesyonel danışmanlık alabilirsiniz.
          </p>

          <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-700">
            <iframe
              src="https://www.google.com/maps?q=19+Mayıs+Samsun&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <footer className="bg-black text-gray-400 py-8 text-center">
        <h4 className="text-yellow-400 text-2xl font-bold mb-3">
          ENGİZ EMLAK
        </h4>

        <p>
          © 2026 Engiz Emlak Gayrimenkul - Tüm Hakları Saklıdır.
        </p>
            {/* Property Detail Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h3 className="text-4xl font-bold">İlan Detay Sayfası</h3>
              <p className="text-gray-600 mt-2">
                Profesyonel ilan sunumu ve hızlı iletişim sistemi
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop"
                alt="villa"
                className="rounded-3xl shadow-2xl"
              />
            </div>

            <div>
              <div className="bg-gray-100 inline-block px-4 py-2 rounded-full font-semibold text-yellow-600 mb-4">
                SATILIK VİLLA
              </div>

              <h2 className="text-5xl font-bold mb-5">
                19 Mayıs'ta Lüks Bahçeli Villa
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Modern mimarili, geniş kullanım alanına sahip yatırım fırsatı.
                Sessiz ve prestijli konumda yer almaktadır.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white border rounded-2xl p-5 shadow-sm">
                  <h4 className="font-bold text-xl">250 m²</h4>
                  <p className="text-gray-500">Brüt Alan</p>
                </div>

                <div className="bg-white border rounded-2xl p-5 shadow-sm">
                  <h4 className="font-bold text-xl">5+1</h4>
                  <p className="text-gray-500">Oda Sayısı</p>
                </div>

                <div className="bg-white border rounded-2xl p-5 shadow-sm">
                  <h4 className="font-bold text-xl">Bahçeli</h4>
                  <p className="text-gray-500">Özel Alan</p>
                </div>

                <div className="bg-white border rounded-2xl p-5 shadow-sm">
                  <h4 className="font-bold text-xl">7.950.000 TL</h4>
                  <p className="text-gray-500">Fiyat</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-bold transition">
                  WhatsApp İletişim
                </button>

                <button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-2xl font-bold transition">
                  Sahibinden İlanı
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Preview */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-5xl font-bold leading-tight mb-6">
              Mobil Uyumlu
              <span className="text-yellow-400 block mt-2">
                Premium Deneyim
              </span>
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Tüm cihazlarda hızlı açılan, modern ve kullanıcı dostu arayüz.
              Müşterileriniz telefon üzerinden kolayca ilan inceleyebilir.
            </p>

            <div className="space-y-4">
              <div className="bg-white/10 rounded-2xl p-5 border border-white/10">
                ✓ Mobil hızlı arama sistemi
              </div>

              <div className="bg-white/10 rounded-2xl p-5 border border-white/10">
                ✓ WhatsApp tek tık iletişim
              </div>

              <div className="bg-white/10 rounded-2xl p-5 border border-white/10">
                ✓ Modern ilan kartları
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-white rounded-[40px] p-4 shadow-2xl w-[320px]">
              <div className="bg-black rounded-[32px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop"
                  alt="mobile"
                  className="h-[620px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      </footer>
    </div>
  );
}
