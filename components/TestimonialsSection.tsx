'use client';

import TestimonialCard from './TestimonialCard';
import { TESTIMONIALS } from '@/lib/data';

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {TESTIMONIALS.map((testimonial, i) => (
            <TestimonialCard
              key={i}
              stars={testimonial.stars}
              text={testimonial.text}
              name={testimonial.name}
              role={testimonial.role}
              initials={testimonial.initials}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
