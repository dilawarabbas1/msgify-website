const steps = [
  { num: '1', title: 'Connect Your Account', desc: 'Scan a QR code to link your WhatsApp account. No API approval needed. Works with any phone number.' },
  { num: '2', title: 'Import Your Contacts', desc: 'Upload a CSV or add contacts manually. Tag, segment, and organize your audience for targeted campaigns.' },
  { num: '3', title: 'Launch Campaigns', desc: 'Create a message template, select your audience, and hit send. Track delivery in real-time from the dashboard.' },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-[13px] font-semibold mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Up and Running in Minutes
          </h2>
          <p className="text-lg text-gray-500">
            Three simple steps to start automating your WhatsApp messaging.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
          <div className="hidden md:block absolute top-9 left-[17%] right-[17%] h-0.5 bg-gradient-to-r from-green-200 via-green-400 to-green-200" />
          {steps.map((s) => (
            <div key={s.num} className="text-center relative z-10">
              <div className="w-[72px] h-[72px] rounded-full mx-auto mb-6 flex items-center justify-center text-[28px] font-extrabold bg-gradient-to-br from-green-500 to-green-600 text-white shadow-[0_8px_24px_rgba(34,197,94,0.3)]">
                {s.num}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-[15px] text-gray-500 leading-relaxed max-w-[280px] mx-auto">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
