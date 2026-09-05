'use client';

import { useEffect, useRef, useState } from 'react';

export default function ScrollVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoDuration, setVideoDuration] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Video metadata yüklendiğinde
    const handleLoadedMetadata = () => {
      setVideoDuration(video.duration);
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    // Scroll event listener
    const handleScroll = () => {
      if (!video || videoDuration === 0) return;

      // Document yüksekliği - viewport yüksekliği = kaydırılabilir alan
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;

      // Şu anki scroll pozisyonu
      const scrolled = window.scrollY;

      // Yüzde hesapla (0 ile 1 arasında)
      const scrollPercent = scrolled / scrollableHeight;

      // Video pozisyonunu ayarla
      video.currentTime = Math.max(0, Math.min(scrollPercent * videoDuration, videoDuration));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [videoDuration]);

  return (
    <div className="scroll-video-wrapper">
      <video
        ref={videoRef}
        className="scroll-video-bg"
        muted
        playsInline
        preload="metadata"
        crossOrigin="anonymous"
      >
        <source src="/background-video.mp4" type="video/mp4" />
      </video>

      <div className="scroll-video-content">
        <div className="hero-section">
          <h1>Scroll Tabanlı Video</h1>
          <p>Aşağı kaydır → Video ilerlesin</p>
          <p>Yukarı kaydır → Video geri sarılsın</p>
        </div>

        <section className="section milestone">
          <h2>25%</h2>
          <p>Videoyu 1/4 ilerlettiniz</p>
        </section>

        <section className="section milestone">
          <h2>50%</h2>
          <p>Videoyu yarısına getirdiniz</p>
        </section>

        <section className="section milestone">
          <h2>75%</h2>
          <p>Neredeyse sonuna yaklaştınız</p>
        </section>

        <section className="section milestone">
          <h2>100%</h2>
          <p>Video tamamen oynatıldı! 🎉</p>
        </section>
      </div>

      <style jsx>{`
        .scroll-video-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .scroll-video-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          object-fit: cover;
          z-index: 0;
        }

        .scroll-video-content {
          position: relative;
          z-index: 1;
          min-height: 400vh;
        }

        .hero-section {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          color: white;
          background: rgba(0, 0, 0, 0.6);
          padding: 2rem;
        }

        .hero-section h1 {
          font-size: 4rem;
          margin-bottom: 1rem;
          text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.9);
          font-weight: bold;
        }

        .hero-section p {
          font-size: 1.5rem;
          margin: 0.5rem 0;
          text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.9);
        }

        .section {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 2rem;
        }

        .milestone {
          background: rgba(0, 0, 0, 0.7);
          text-align: center;
          color: white;
        }

        .milestone h2 {
          font-size: 5rem;
          margin: 0;
          color: #ff6b6b;
          text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
        }

        .milestone p {
          font-size: 1.3rem;
          margin-top: 1rem;
          text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.8);
        }

        @media (max-width: 768px) {
          .hero-section h1 {
            font-size: 2rem;
          }

          .hero-section p {
            font-size: 1rem;
          }

          .milestone h2 {
            font-size: 2.5rem;
          }

          .milestone p {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
