'use client';

export interface FAQItemProps {
  question: string;
  answer: string;
  open?: boolean;
}

export default function FAQItem({ question, answer, open = false }: FAQItemProps) {
  return (
    <details className="border-b border-border py-4" open={open}>
      <summary className="cursor-pointer select-none flex justify-between items-center font-semibold text-dark hover:text-yellow transition">
        {question}
        <span className="text-lg">+</span>
      </summary>
      <p className="mt-4 text-mid leading-relaxed">{answer}</p>
    </details>
  );
}
