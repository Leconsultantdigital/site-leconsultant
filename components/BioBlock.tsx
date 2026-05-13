'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BIO } from '@/lib/data';

export default function BioBlock() {
  return (
    <section className="py-16 md:py-20 bg-bg-light">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Photo placeholder */}
          <div className="relative hidden md:block">
            <Image
              src="/william-placeholder.svg"
              alt="William Martin - Consultant IA et formateur"
              width={400}
              height={500}
              priority={true}
              className="max-w-md mx-auto rounded-3xl shadow-lg object-cover"
            />
          </div>

          {/* Right: Content */}
          <div>
            {/* Eyebrow */}
            <div className="eyebrow mb-6">
              <span className="inline-block">William Martin</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6 leading-tight">
              {BIO.heading}
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 mb-8">
              {BIO.paragraphs.map((para, i) => (
                <p key={i} className="text-base md:text-lg text-mid leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* CTA Button */}
            <Link href={BIO.ctaHref} className="btn btn-accent btn-lg">
              {BIO.cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
