'use client';

import { useEffect, useState } from 'react';

interface Review {
  stars: number;
  text: string;
  name: string;
  role: string;
  initials: string;
}

interface ReviewCarouselProps {
  reviews: Review[];
  autoScroll?: boolean;
  interval?: number;
}

export default function ReviewCarouselNew({
  reviews,
  autoScroll = true,
  interval = 6000
}: ReviewCarouselProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!autoScroll) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoScroll, interval, reviews.length]);

  const goTo = (index: number) => {
    setCurrent(index % reviews.length);
  };

  if (!reviews || reviews.length === 0) return null;

  const displayReviews = reviews.length > 3
    ? [reviews[current], reviews[(current + 1) % reviews.length], reviews[(current + 2) % reviews.length]]
    : reviews;

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-bg-light">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-yellow uppercase tracking-widest mb-4">💬 Avis Clients</p>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
            Ce qu'en pensent<br />
            <span className="text-yellow">mes clients</span>
          </h2>
          <p className="text-lg text-mid max-w-2xl mx-auto">
            120+ avis certifiés Google Business Profile — mis à jour en temps réel
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-5xl mx-auto">
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {displayReviews.map((review, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-border p-8 hover:shadow-lg transition-all duration-300 hover:border-yellow"
              >
                {/* Stars */}
                <div className="text-yellow text-lg mb-4">
                  {'★'.repeat(review.stars)}
                </div>

                {/* Quote */}
                <blockquote className="text-mid italic mb-6 leading-relaxed text-sm md:text-base">
                  « {review.text} »
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 pt-6 border-t border-border">
                  <div className="w-10 h-10 bg-yellow text-dark rounded-full flex items-center justify-center font-bold text-sm">
                    {review.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-dark">{review.name}</div>
                    <div className="text-xs text-mid">{review.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          {reviews.length > 3 && (
            <div className="flex justify-center gap-2">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  className={`
                    w-2.5 h-2.5 rounded-full transition-all duration-300
                    ${idx === current ? 'bg-yellow w-8' : 'bg-border hover:bg-mid'}
                  `}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 pt-12 border-t border-border">
          <p className="text-mid mb-6 text-lg">
            Prêt à transformer votre approche de l'IA?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn btn-accent btn-lg">
              Réserver audit gratuit 15min →
            </a>
            <a
              href="https://calendly.com/williammartin"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost border-2 btn-lg"
            >
              Voir ma disponibilité
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
