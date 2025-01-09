import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FaGithub, FaLinkedin, FaTwitter, FaExternalLinkAlt, FaInstagram } from 'react-icons/fa'

function App() {
  const [activeSection, setActiveSection] = useState('anasayfa')
  const [siteData] = useState({
    profile: {
      name: 'Emirhan Berber',
      title: 'Junior BackEnd Developer & Entrepreneur',
      photo: '/pp.webp'
    },
    social: {
      instagram: 'https://instagram.com/emrhnberber',
      linkedin: 'https://linkedin.com/in/emrhnberber',
      github: 'https://github.com/emrhnberber',
      twitter: 'https://twitter.com/emrhnberber'
    },
    about: {
      text: 'Merhaba! Ben Emirhan, 18 yaşındayım ve İstanbul, Zeytinburnu\'nda bulunan İDMİB Mesleki ve Teknik Anadolu Lisesi Bilişim Teknolojileri bölümü Yazılım geliştirme alanı 2023 mezunuyum. Ortaokul zamanlarımdan bu yana yazılım ve donanım alanlarında kendimi sürekli olarak geliştirmeye çalışan birisiyim. Boş zamanlarımda kendimi geliştirmeyi ve yeni şeyler öğrenmeyi seviyorum.\n\nBilgisayar sahibi olmamdan ortaokul zamanlarına kadar geçen süreçte, hem o zamanki cihazımın yazılım alanına yetecek güce sahip olmamasından kaynaklı, hem de henüz bilgisayar kullanımı hakkında eksiklerim olduğunu düşünmemden dolayı kendimi bilgisayar toplama, format atma gibi daha çok temel IT alanına giren işlerde geliştirmeye çalıştım. Ortaokul 8. sınıfa geldiğimde, ailemin de desteği ile kendime yeni bir bilgisayar almaya karar verdim ve bu zamana kadar geçen sürede öğrenmiş olduğum bilgilerle gerekli donanım parçalarını satın alarak evde kimseden yardım almadan kurulumunu gerçekleştirdim. Yeni bilgisayarım, dönemin şartlarına göre yüksek bir güce sahip olmasa bile yazılım alanına girebileceğim seviyedeydi.\n\nHangi yazılım alanında kendimi geliştirebileceğim düşünürken oyunları çok sevdiğimi fark ettim ve kendi oyunumu geliştirmek isteyerek C# dilini öğrenmeye ve yazılım alanında resmen kendimi geliştirmeye başladım. O günden bu yana oyun geliştirme, mobil uygulama geliştirme ve web tasarım gibi alanlarda online dersler alarak, eğitim ve etkinliklere katılarak kendimi geliştirmeye çalıştım; çalışmaya devam ediyorum. Bir yandan aktif olarak AcunMedya Akademi 11. Dönem "C# ile Porgramlama" tam burslu eğitimime devam etmekte ve mezun öğrencisi olarak üniversite sınavına hazırlanmaktayım.\n\nBu alanda kendimi geliştirmek için yaptıklarımdan bahsetmem gerekirse; Mezun olduğum lisenin 3 yıl boyunca atölye destek sorumlusu olarak görev yaptım. Okulumda daha çok sosyal faaliyet ve etkinlikler sürdürebilmek adına Bilişim Teknolojileri Kulübünü kurdum ve yönettim. Lise stajımı İstanbul Büyükşehir Belediyesi\'nde Elektronik Sistemler Müdürlüğü\'ne bağlı İnternet Network ekibinde tamamladım. 2 Yıldır Keyubu İnternet ve Bilişim Hizmetleri firmasında gönüllü olarak online destek ekibi görevini sürdürüyorum. İstanbul Aydın Üniversitesi Tekmer Ön Kuluçka programı kapsamında bir startup projede yönetici ve mobil developer pozisyonunda proje geliştirmekteyim.\n\nHobilerimden bahsetmem gerekirse; gezmeyi, etkinliklere katılmayı, konserlere gitmeyi ve fitness ile ilgilenmeyi seviyorum.'
    },
    skills: [
      { name: "C#", level: 80 },
      { name: "Flutter", level: 70 },
      { name: "Dart", level: 70 },
      { name: "SQL", level: 85 },
      { name: "HTML/CSS", level: 50 },
      { name: "Github", level: 90 },
    ],
    experiences: [
      {
        company: "UyumSoft Bilgi Teknolojileri A.Ş",
        logo: "/uyumsoft.jpg",
        position: "Technical Support Specialist",
        period: "2023 - 2025",
        description: "UyumSoft Bilgi Teknolojileri şirketinde dönemsel part time projelerde Teknik Destek Uzmanı olarak çalıştım.",
        website: "https://uyumsoft.com"
      },
      {
        company: "ShiftDelete.Net LLC",
        logo: "/sdn.jpg",
        position: "Social Media & IT Intern",
        period: "2023",
        description: "ShiftDelete.Net şirketinde kısa bir dönem Sosyal Medya ve IT alanında staj yaptım.",
        website: "https://shiftdelete.net"
      },
      {
        company: "İstanbul Büyükşehir Belediyesi",
        logo: "/ibb.jpeg",
        position: "Internet Network Intern",
        period: "2023 - 2024",
        description: "İstanbul Büyükşehir Belediyesinde Elektronik Sistemler bölümüne bağlı Internet Network grubunda lise uzun dönem stajımı yaptım.",
        website: "https://ibb.istanbul"
      },
      {
        company: "Keyubu İnternet ve Bilişim Hizmetleri",
        logo: "/keyubu.jpg",
        position: "Ticket Agent & Team Leader",
        period: "2023 - 2025",
        description: "Keyubu Bilişim Hizmetleri şirketinde Ticket Agent ve Team Leader olarak görev aldım.",
        website: "https://keyubu.com"
      },
    ],
    projects: [
      { 
        title: "Alanda", 
        description: "Alanda, etkinliklerde sosyalleşmeyi kolaylaştıran yepyeni bir platformdur.", 
        tech: ["Flutter", "C#", "SQL", "Dart"],
        website: "https://alanda.app",
        github: "https://github.com/emrhnberber"
      },
      { 
        title: "ShindMindGames", 
        description: "5 Gönüllü kişi ile GameJam oyun geliştirme yarışmalarında oyun geliştirdik.", 
        tech: ["Unity", "C#"],
        website: "https://shindmindgames.itch.io/",
        github: "https://github.com/emrhnberber"
      },
      { 
        title: "Kronometre", 
        description: "YKS Hazırlık sürecimde eğitim kurumumda deneme sınavlarında kullanılan kronometre uygulamasının yetersiz ve reklam içermesi sorununa çözüm olarak geliştirilen sadece ve kullanışlı web sayfası.", 
        tech: ["Css", "Html", "JavaScript"],
        website: "https://emirhanberber.net/saat",
        github: "https://github.com/emrhnberber/DigitalClock"
      },
    ]
  })

  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal')
      reveals.forEach(element => {
        const windowHeight = window.innerHeight
        const elementTop = element.getBoundingClientRect().top
        if (elementTop < windowHeight - 150) {
          element.classList.add('active')
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen">
      <div className="background-animation"></div>
      <div className="background-stars"></div>

      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Hero Section */}
        <section id="anasayfa" className="min-h-[90vh] flex items-center justify-center">
          <div className="text-center px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-32 h-32 md:w-48 md:h-48 mx-auto mb-8 md:mb-12 rounded-full overflow-hidden border-4 border-white/10"
            >
              <img
                src={siteData.profile.photo}
                alt={siteData.profile.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-8"
            >
              Merhaba, Ben <span className="gradient-text">{siteData.profile.name}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 md:mb-12"
            >
              {siteData.profile.title}
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center space-x-6 md:space-x-8"
            >
              <a href={siteData.social.instagram} target="_blank" rel="noopener noreferrer" className="text-2xl md:text-3xl hover:text-white transition-colors">
                <FaInstagram />
              </a>
              <a href={siteData.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-2xl md:text-3xl hover:text-white transition-colors">
                <FaLinkedin />
              </a>
              <a href={siteData.social.github} target="_blank" rel="noopener noreferrer" className="text-2xl md:text-3xl hover:text-white transition-colors">
                <FaGithub />
              </a>
              <a href={siteData.social.twitter} target="_blank" rel="noopener noreferrer" className="text-2xl md:text-3xl hover:text-white transition-colors">
                <FaTwitter />
              </a>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="hakkimda" className="min-h-[60vh] md:min-h-[80vh] flex items-center py-16 md:py-32">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 reveal">Hakkımda</h2>
            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-gray-300 reveal">
              {siteData.about.text.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="yetenekler" className="min-h-[60vh] md:min-h-[80vh] flex items-center py-16 md:py-32">
          <div className="max-w-4xl mx-auto w-full px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 reveal">Yetenekler</h2>
            <div className="space-y-3 md:space-y-4 reveal">
              {siteData.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center backdrop-blur rounded-lg p-3 md:p-4"
                >
                  <div className="w-24 md:w-32 font-medium text-sm md:text-base">{skill.name}</div>
                  <div className="flex-1 h-2 md:h-3 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-gray-400 to-white rounded-full"
                    />
                  </div>
                  <div className="w-12 text-right text-xs md:text-sm text-gray-400">{skill.level}%</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="deneyim" className="min-h-[60vh] md:min-h-[80vh] flex items-center py-16 md:py-32">
          <div className="max-w-4xl mx-auto w-full px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 reveal">Deneyim</h2>
            <div className="space-y-6 md:space-y-8 reveal">
              {siteData.experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="backdrop-blur rounded-lg p-4 md:p-6 border border-white/10 flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start"
                >
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-white/5">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                  <div className="flex-grow text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2">
                      <h3 className="text-lg md:text-xl font-bold">{exp.company}</h3>
                      {exp.website && (
                        <a 
                          href={exp.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sm text-gray-400 hover:text-white"
                        >
                          <FaExternalLinkAlt />
                        </a>
                      )}
                    </div>
                    <p className="text-gray-300">{exp.position}</p>
                    <p className="text-gray-400 text-sm">{exp.period}</p>
                    <p className="mt-2 text-gray-300 text-sm md:text-base">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projeler" className="min-h-[60vh] md:min-h-[80vh] flex items-center py-16 md:py-32">
          <div className="max-w-4xl mx-auto w-full px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 reveal">Projeler</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 reveal">
              {siteData.projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="backdrop-blur rounded-lg p-4 md:p-6 border border-white/10 group hover:border-white/20 transition-colors"
                >
                  <div className="flex items-center justify-between mb-3 md:mb-4">
                    <h3 className="text-lg md:text-xl font-bold">{project.title}</h3>
                    <div className="flex gap-3">
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          <FaGithub />
                        </a>
                      )}
                      {project.website && (
                        <a 
                          href={project.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          <FaExternalLinkAlt />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm md:text-base mb-3 md:mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-white/5 text-gray-300 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm border border-white/10">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="iletisim" className="min-h-[40vh] md:min-h-[60vh] flex items-center py-16 md:py-32">
          <div className="max-w-4xl mx-auto text-center w-full px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 reveal">İletişim</h2>
            <p className="text-lg md:text-xl mb-6 md:mb-8 reveal">
              Benimle iletişime geçmek için:
              <a href="mailto:emirhanberber2018@gmail.com" className="text-gray-300 ml-2 hover:text-white transition-colors">
                emirhanberber2018@gmail.com
              </a>
            </p>
            <div className="flex justify-center space-x-6 reveal">
              <a href={siteData.social.instagram} target="_blank" rel="noopener noreferrer" className="text-2xl md:text-3xl hover:text-white transition-colors">
                <FaInstagram />
              </a>
              <a href={siteData.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-2xl md:text-3xl hover:text-white transition-colors">
                <FaLinkedin />
              </a>
              <a href={siteData.social.github} target="_blank" rel="noopener noreferrer" className="text-2xl md:text-3xl hover:text-white transition-colors">
                <FaGithub />
              </a>
              <a href={siteData.social.twitter} target="_blank" rel="noopener noreferrer" className="text-2xl md:text-3xl hover:text-white transition-colors">
                <FaTwitter />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
