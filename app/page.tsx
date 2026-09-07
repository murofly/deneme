'use client'

import { SplineScene } from "@/components/ui/splite"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { ArrowRight, CheckCircle, Zap, Shield, Users, TrendingUp, Mail, MessageCircle, Heart, Code } from 'lucide-react'
import { useState } from "react"

export default function Home() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setEmail('')
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-black/50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            muro yazılım
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#features" className="hover:text-blue-400 transition">Özellikler</a>
            <a href="#testimonials" className="hover:text-blue-400 transition">Referanslar</a>
            <a href="#pricing" className="hover:text-blue-400 transition">Fiyatlandırma</a>
            <a href="#contact" className="hover:text-blue-400 transition">İletişim</a>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg transition">
            Başla
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="relative z-10 flex flex-col justify-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Yazılım Çözümleri
                </span>
                <br />
                <span className="text-white">Geleceği İnşa Et</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-lg">
                Kurumunuzun dijital dönüşümünü gerçekleştirin. Yüksek performanslı, güvenli ve ölçeklenebilir yazılım çözümleri ile hedefinize ulaşın.
              </p>
              <div className="flex gap-4 mb-12">
                <button className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition">
                  Teklif Al <ArrowRight size={20} />
                </button>
                <button className="border border-gray-600 hover:border-blue-400 px-8 py-3 rounded-lg font-semibold transition">
                  Demosunu İzle
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-800">
                <div>
                  <div className="text-3xl font-bold text-blue-400">150+</div>
                  <p className="text-gray-400">Tamamlanan Proje</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400">98%</div>
                  <p className="text-gray-400">Müşteri Memnuniyeti</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400">50+</div>
                  <p className="text-gray-400">Uzman Ekip</p>
                </div>
              </div>
            </div>

            {/* Right Content - 3D Spline */}
            <div className="relative">
              <Card className="w-full h-[500px] bg-gradient-to-b from-blue-900/20 to-black relative overflow-hidden border-blue-900">
                <Spotlight
                  className="-top-40 left-0 md:left-60 md:-top-20"
                  fill="white"
                />
                <div className="w-full h-full relative">
                  <SplineScene
                    scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                    className="w-full h-full"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Neden <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">muro yazılım</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Teknoloji ve inovasyonun kesiştiğinde, işletmeleri dönüştürmek için tasarlanmış çözümler sunuyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Yüksek Performans",
                description: "Milisaniye cevap süresiyle, en yoğun iş yükleri bile sorunsuz işletilir."
              },
              {
                icon: Shield,
                title: "Kurumsal Güvenlik",
                description: "Endüstri standardı şifreleme ve güvenlik protokolleriyle verilerinizi koruyoruz."
              },
              {
                icon: TrendingUp,
                title: "Sınırsız Ölçeklenebilirlik",
                description: "Işletmeniz büyüdükçe, altyapımız otomatik olarak ölçeklendirilir."
              },
              {
                icon: Users,
                title: "Uzman Ekip",
                description: "20+ yıl deneyime sahip yazılım mimarları ve geliştiricileri."
              },
              {
                icon: CheckCircle,
                title: "Garantili Destek",
                description: "7/24 teknik destek ve danışmanlık hizmetleriyle yanınızdayız."
              },
              {
                icon: Mail,
                title: "Kolay Entegrasyon",
                description: "Mevcut sistemlerinizle sorunsuz entegrasyon ve API desteği."
              }
            ].map((feature, idx) => {
              const Icon = feature.icon
              return (
                <Card key={idx} className="bg-gray-900/50 border-gray-800 hover:border-blue-500 transition">
                  <CardHeader>
                    <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-blue-400" size={24} />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Müşterilerimiz Bize Güveniyor
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Türkiye ve uluslararası pazarlarda büyüyen şirketler tarafından tercih edilen çözümler.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Ahmet Kaya",
                company: "TechCorpTR",
                text: "muro yazılım ile projemizi 40% daha hızlı tamamladık. Profesyonel ekip ve güvenilir çözümler."
              },
              {
                name: "Ayşe Demir",
                company: "DigiTrade",
                text: "Sistemimiz her gün 10 milyon işlem yapıyor. Hiç problem yaşamadık, mükemmel stabilite."
              },
              {
                name: "Mehmet Yilmaz",
                company: "E-Commerce Plus",
                text: "Satışlarımız %150 arttı. muro yazılım'ın sağlam altyapısı sayesinde scale etmek çok kolay oldu."
              }
            ].map((testimonial, idx) => (
              <Card key={idx} className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.text}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Şeffaf Fiyatlandırma
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Her bütçeye uygun, esnek paketler. Gizli ücret yok.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Başlangıç",
                price: "₺2,999",
                period: "aylık",
                description: "Küçük projeler ve startuplar için",
                features: ["5 Proje", "30GB Storage", "Email Destek", "Temel Analitikler"]
              },
              {
                name: "Profesyonel",
                price: "₺9,999",
                period: "aylık",
                description: "Orta ölçekli şirketler için",
                features: ["Sınırsız Proje", "500GB Storage", "Telefon Destek", "Gelişmiş Analitikler", "Özel API"],
                highlight: true
              },
              {
                name: "Enterprise",
                price: "Özel",
                period: "teklif",
                description: "Büyük kuruluşlar için",
                features: ["Sınırsız Her Şey", "Sınırsız Storage", "7/24 Dedicated Support", "Custom Integrations", "SLA Garantisi"]
              }
            ].map((plan, idx) => (
              <Card key={idx} className={`${plan.highlight ? 'bg-gradient-to-b from-blue-900/30 to-black border-blue-500 scale-105' : 'bg-gray-900/50 border-gray-800'}`}>
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-6">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-gray-400 ml-2">/{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex gap-3 items-center">
                        <CheckCircle size={16} className="text-blue-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-2 rounded-lg font-semibold transition ${plan.highlight ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'border border-gray-600 hover:border-blue-400'}`}>
                    {plan.price === 'Özel' ? 'Teklif Al' : 'Hemen Başla'}
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-gray-800 bg-gradient-to-b from-blue-900/20 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Dijital Dönüşümünüze Başlayın
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Uzman ekibimiz, işletmenizi geleceğe taşımak için hazır.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 px-12 py-4 rounded-lg font-semibold text-lg transition">
            İletişime Geçin
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Bize Ulaşın</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ad Soyadı</label>
                  <input type="text" className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:border-blue-500 outline-none" placeholder="Adınız" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">E-posta</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:border-blue-500 outline-none" placeholder="email@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Mesaj</label>
                  <textarea rows={4} className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:border-blue-500 outline-none" placeholder="Mesajınız..."></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg font-semibold transition">
                  Gönder
                </button>
                {submitted && <p className="text-green-400 text-center">Mesajınız başarıyla gönderildi!</p>}
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">İletişim Bilgileri</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Adres</h3>
                  <p className="text-gray-400">
                    Levent, Beşiktaş<br />
                    İstanbul, Türkiye
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">İletişim</h3>
                  <p className="text-gray-400 mb-1">Tel: +90 (212) 555-0123</p>
                  <p className="text-gray-400">E-posta: info@muroyazilim.com</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Sosyal Medya</h3>
                  <div className="flex gap-4">
                    <a href="#" className="bg-gray-900 hover:bg-blue-500 w-10 h-10 rounded-lg flex items-center justify-center transition">
                      <Heart size={20} />
                    </a>
                    <a href="#" className="bg-gray-900 hover:bg-blue-500 w-10 h-10 rounded-lg flex items-center justify-center transition">
                      <Code size={20} />
                    </a>
                    <a href="#" className="bg-gray-900 hover:bg-blue-500 w-10 h-10 rounded-lg flex items-center justify-center transition">
                      <MessageCircle size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6 md:mb-0">
              muro yazılım
            </div>
            <div className="flex gap-8">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">Hakkımızda</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">İş Ortaklığı</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">Gizlilik</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">Koşullar</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 muro yazılım. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
