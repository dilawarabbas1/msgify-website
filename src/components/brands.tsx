export function Brands() {
  const logos = ['Shopify', 'Zendesk', 'HubSpot', 'Zoho', 'Stripe', 'Zapier'];
  return (
    <section className="py-12 border-y border-gray-100 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-center text-[13px] font-semibold text-gray-400 uppercase tracking-widest mb-6">
          Trusted by teams at
        </p>
        <div className="flex items-center justify-center gap-12 flex-wrap opacity-50">
          {logos.map((name) => (
            <span key={name} className="text-xl font-bold text-gray-400">{name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
