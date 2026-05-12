'use client';

import Link from 'next/link';
import FAQItem from './FAQItem';
import { FAQ_ITEMS } from '@/lib/data';

export default function FAQSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="container max-w-2xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-dark mb-12 text-center">
          Questions fréquentes
        </h2>

        {/* FAQ Items */}
        <div className="border-t border-border">
          {FAQ_ITEMS.map((item, i) => (
            <FAQItem
              key={i}
              question={item.q}
              answer={item.a}
              open={i === 0} // First item open by default
            />
          ))}
        </div>

        {/* View full FAQ link */}
        <div className="text-center mt-12">
          <Link href="/faq" className="inline-flex items-center gap-2 text-sm font-semibold text-dark hover:text-yellow transition">
            Voir toutes les questions <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
