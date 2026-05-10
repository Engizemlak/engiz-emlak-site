// VERCEL YAYIN TALİMATI
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
