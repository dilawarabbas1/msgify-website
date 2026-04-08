import { Check } from 'lucide-react';

export function ApiSection() {
  return (
    <section id="api" className="py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-[13px] font-semibold mb-4">
              Messaging API
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Integrate WhatsApp Into Your Stack
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-8">
              RESTful API with per-customer API keys, rate limiting, priority queuing, and delivery status webhooks. Send messages from any app in minutes.
            </p>
            <ul className="space-y-0">
              {['API key authentication with rate limiting', 'Configurable TPM & TPS throttle controls', 'Priority queue — API messages sent first', 'Delivery & read receipt webhooks', 'Media upload support (images, video, PDF)'].map((item) => (
                <li key={item} className="flex gap-3.5 py-3.5 text-base text-gray-600">
                  <span className="shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <Check size={14} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl">
            <div className="flex items-center gap-2 px-5 py-4 bg-white/5">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-[13px] text-gray-400 ml-3">send-message.js</span>
            </div>
            <pre className="p-6 text-[13px] leading-7 text-gray-300 overflow-x-auto font-mono">
              <code>{`// Send a WhatsApp message via Msgify API
const response = await fetch('https://api.msgify.io/v1/messages', {
  method: 'POST',
  headers: {
    'Authorization': \`Bearer \${API_KEY}\`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    to: '+1234567890',
    message: 'Hello {{name}}, your order is ready!',
    template: 'order-ready',
    variables: { name: 'John' }
  })
});

const data = await response.json();
console.log('Message ID:', data.messageId);
// { messageId: "msg_abc123", status: "queued" }`}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
