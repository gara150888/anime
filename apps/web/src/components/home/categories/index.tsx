import { CATEGORIES } from "@/data/categories";

export default function Categories() {
  return (
    <section className="border-t border-border-subtle py-16 md:py-20">
      <h2 className="font-sans text-[28px] font-semibold tracking-tight text-text-primary mb-8">Browse by genre</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-border-subtle rounded-lg overflow-hidden">
        {CATEGORIES.map((cat) => (
          <a key={cat} href="#" className="block bg-bg-base p-5 md:p-6 hover:bg-bg-surface transition-colors">
            <h3 className="font-sans text-[16px] font-medium text-text-primary">{cat}</h3>
            <p className="mt-1 font-mono text-[12px] text-text-tertiary">240+ titles</p>
            <div className="mt-4 h-0.5 w-8 bg-syntax-keyword rounded-full" />
          </a>
        ))}
      </div>
    </section>
  );
}
