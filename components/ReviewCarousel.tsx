'use client';

import { useState, useEffect } from 'react';

interface Review {
  author: string;
  role: string;
  content: string;
  rating: number;
  date: string;
}

interface ReviewCarouselProps {
  reviews: Review[];
  autoScroll?: boolean;
  interval?: number;
}

export default function ReviewCarousel({
  reviews,
  autoScroll = true,
  interval = 5000
}: ReviewCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScroll, setIsAutoScroll] = useState(autoScroll);

  useEffect(() => {
    if (!isAutoScroll || reviews.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, interval);

    return () => clearInterval(timer);
  }, [isAutoScroll, reviews.length, interval]);

  // Auto-resume after 5 seconds of inactivity
  useEffect(() => {
    if (isAutoScroll) return;

    const resumeTimer = setTimeout(() => {
      setIsAutoScroll(true);
    }, 5000);

    return () => clearTimeout(resumeTimer);
  }, [isAutoScroll]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoScroll(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
    setIsAutoScroll(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    setIsAutoScroll(false);
  };

  if (reviews.length === 0) {
    return null;
  }

  const currentReview = reviews[currentIndex];
  const isPaused = !isAutoScroll;

  return (
    <div className="w-full">
      {/* Pause indicator */}
      {isPaused && (
        <div className="text-center mb-4">
          <span className="inline-block px-4 py-1.5 bg-yellow/10 border border-yellow/30 rounded-full text-xs font-semibold text-yellow">
            ⏸️ Paused — Click to resume
          </span>
        </div>
      )}

      {/* Main Review Card */}
      <div className="bg-gradient-to-br from-yellow/10 to-yellow/5 border-2 border-yellow/30 rounded-3xl p-10 md:p-14 min-h-[320px] flex flex-col justify-between shadow-lg hover:shadow-xl transition-all">
        {/* Stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`text-xl ${i < currentReview.rating ? 'text-yellow' : 'text-gray-300'}`}
            >
              ★
            </span>
          ))}
        </div>

        {/* Content */}
        <p className="text-lg text-dark mb-8 leading-relaxed flex-grow italic">
          « {currentReview.content} »
        </p>

        {/* Author */}
        <div>
          <p className="font-bold text-dark text-lg mb-1">{currentReview.author}</p>
          <p className="text-sm text-mid mb-2">{currentReview.role}</p>
          <p className="text-xs text-gray-400">{currentReview.date}</p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-8">
        {/* Dots */}
        <div className="flex gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              onMouseEnter={() => setIsAutoScroll(false)}
              onMouseLeave={() => setIsAutoScroll(autoScroll)}
              className={`rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? 'bg-yellow w-8 h-3 shadow-lg'
                  : 'w-3 h-3 bg-gray-300 hover:bg-gray-400 hover:scale-110'
              }`}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>

        {/* Arrow Navigation */}
        <div className="flex gap-3">
          <button
            onClick={prevSlide}
            onMouseEnter={() => setIsAutoScroll(false)}
            onMouseLeave={() => setIsAutoScroll(autoScroll)}
            className="w-10 h-10 rounded-full bg-yellow/10 border border-yellow/30 flex items-center justify-center hover:bg-yellow hover:text-dark hover:shadow-md hover:scale-110 active:scale-95 transition-all duration-300 text-dark font-bold"
            aria-label="Previous review"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            onMouseEnter={() => setIsAutoScroll(false)}
            onMouseLeave={() => setIsAutoScroll(autoScroll)}
            className="w-10 h-10 rounded-full bg-yellow/10 border border-yellow/30 flex items-center justify-center hover:bg-yellow hover:text-dark hover:shadow-md hover:scale-110 active:scale-95 transition-all duration-300 text-dark font-bold"
            aria-label="Next review"
          >
            →
          </button>
        </div>
      </div>

      {/* Counter */}
      <p className="text-center text-sm text-gray-400 mt-6">
        {currentIndex + 1} / {reviews.length} avis
      </p>
    </div>
  );
}
