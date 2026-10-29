import { RECENTLY_ADDED } from "@/data/recently-added";
import { Card, CardContent } from "@anime/ui/components/card";

export default function RecentlyAdded() {
  return (
    <section className="border-t border-border-subtle py-16 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
        <h2 className="lg:col-span-6 font-sans text-[clamp(26px,3vw,38px)] font-semibold tracking-[-0.02em] leading-[1.15] text-text-primary">Recently added</h2>
        <p className="lg:col-start-8 lg:col-span-5 font-sans text-[15px] leading-[1.6] text-text-secondary">New episodes updated daily.</p>
      </div>
      <Card className="rounded-lg border-border-subtle bg-bg-surface shadow-none overflow-hidden">
        <CardContent className="p-0">
          <table className="w-full text-left font-sans text-[14px]">
            <thead className="border-b border-border-subtle bg-bg-elevated/30">
              <tr>
                <th className="px-5 py-3 font-medium text-text-secondary">Series</th>
                <th className="px-4 py-3 font-medium text-text-secondary hidden md:table-cell">Genre</th>
                <th className="px-4 py-3 font-medium text-text-secondary hidden sm:table-cell">Episode</th>
                <th className="px-5 py-3 font-medium text-text-secondary text-right">Length</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-subtle">
              {RECENTLY_ADDED.map((row) => (
                <tr key={row.title} className="hover:bg-bg-elevated/20 transition-colors">
                  <td className="px-5 py-3.5">
                    <a href="#" className="font-medium text-text-primary hover:text-text-secondary hover:underline underline-offset-2 transition-colors">{row.title}</a>
                  </td>
                  <td className="px-4 py-3.5 hidden md:table-cell font-mono text-[12px] text-text-tertiary">{row.genre}</td>
                  <td className="px-4 py-3.5 hidden sm:table-cell font-mono text-[12px] text-text-secondary">{row.ep}</td>
                  <td className="px-5 py-3.5 text-right font-mono text-[12px] text-text-tertiary">{row.len}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </section>
  );
}
