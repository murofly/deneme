'use client';

import { useEffect, useRef } from 'react';

export default function ScrollVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleScroll = () => {
      // Sayfanın toplam kaydırılabilir yüksekliğini al
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

      // Şu anki kaydırma yüzdesini hesapla (0 ile 1 arasında)
      const scrollProgress = window.scrollY / scrollHeight;

      // Video süresini al ve ilerletme konumunu hesapla
      if (video.duration) {
        video.currentTime = scrollProgress * video.duration;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="scroll-video-container">
      {/* Video Arka Plan */}
      <video
        ref={videoRef}
        className="background-video"
        muted
        playsInline
        preload="auto"
      >
        <source src="/background-video.mp4" type="video/mp4" />
        Tarayıcınız video oynatmayı desteklemiyor.
      </video>

      {/* İçerik */}
      <div className="content-overlay">
        <div className="container">
          <section className="scroll-content">
            <h1>Scroll ile Video Kontrol</h1>
            <p>Aşağıya kaydırarak videoyu oynatın</p>
          </section>

          {/* Boşluk - Kaydırma için */}
          <div className="spacer">
            <div className="milestone">
              <h2>25%</h2>
              <p>Videoyu 1/4 oranında ilerlettiniz</p>
            </div>
          </div>

          <div className="spacer">
            <div className="milestone">
              <h2>50%</h2>
              <p>Videoyu yarısına getirdiniz</p>
            </div>
          </div>

          <div className="spacer">
            <div className="milestone">
              <h2>75%</h2>
              <p>Neredeyse sonuna yaklaştınız</p>
            </div>
          </div>

          <div className="spacer">
            <div className="milestone">
              <h2>100%</h2>
              <p>Video tamamen oynatıldı!</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scroll-video-container {
          position: relative;
          width: 100%;
          overflow-x: hidden;
        }

        .background-video {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          object-fit: cover;
          z-index: -1;
        }

        .content-overlay {
          position: relative;
          z-index: 1;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          min-height: 400vh;
        }

        .scroll-content {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 2rem;
        }

        .scroll-content h1 {
          font-size: 3.5rem;
          margin-bottom: 1rem;
          text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
        }

        .scroll-content p {
          font-size: 1.5rem;
          text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.8);
        }

        .spacer {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 2rem;
        }

        .milestone {
          text-align: center;
          background: rgba(0, 0, 0, 0.5);
          padding: 3rem 2rem;
          border-radius: 10px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .milestone h2 {
          font-size: 3rem;
          margin-bottom: 1rem;
          color: #d9534f;
        }

        .milestone p {
          font-size: 1.2rem;
        }

        @media (max-width: 768px) {
          .scroll-content h1 {
            font-size: 2rem;
          }

          .scroll-content p {
            font-size: 1rem;
          }

          .milestone h2 {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
}
