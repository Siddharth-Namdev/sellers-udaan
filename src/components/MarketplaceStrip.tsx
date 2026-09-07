const PLATFORMS = ['Flipkart', 'Amazon', 'Meesho', 'Myntra', 'JioMart', 'Ajio']

export default function MarketplaceStrip() {
  return (
    <div className="py-6 bg-gray-50 border-y border-gray-100">
      <div className="max-w-5xl mx-auto px-4 flex flex-wrap justify-center gap-4 items-center">
        <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
          We manage
        </span>
        {PLATFORMS.map((name) => (
          <span
            key={name}
            className="px-4 py-1.5 rounded-full text-sm font-semibold"
            style={{ background: '#e8eef7', color: '#1a3a6e' }}
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  )
}
