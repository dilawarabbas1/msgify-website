/** Minimal markdown-to-HTML converter — no external dependencies */
export function markdownToHtml(md: string): string {
  let html = md;

  // Code blocks (``` ... ```)
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (_m, _lang, code) => {
    return `<pre class="bg-gray-900 text-gray-100 rounded-xl p-5 overflow-x-auto text-sm leading-relaxed my-6"><code>${escapeHtml(code.trim())}</code></pre>`;
  });

  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code class="bg-gray-100 text-green-700 px-1.5 py-0.5 rounded text-sm font-mono">$1</code>');

  // Images
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" class="rounded-xl w-full my-8" loading="lazy" />');

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-green-600 hover:text-green-700 underline underline-offset-2" target="_blank" rel="noopener noreferrer">$1</a>');

  // Headings
  html = html.replace(/^### (.+)$/gm, '<h3 class="text-xl font-bold text-gray-900 mt-10 mb-4">$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold text-gray-900 mt-12 mb-5">$1</h2>');
  html = html.replace(/^# (.+)$/gm, '<h1 class="text-3xl font-extrabold text-gray-900 mt-12 mb-6">$1</h1>');

  // Bold and italic
  html = html.replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>');
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');

  // Horizontal rules
  html = html.replace(/^---$/gm, '<hr class="my-10 border-gray-200" />');

  // Unordered lists
  html = html.replace(/^(?:- (.+)\n?)+/gm, (match) => {
    const items = match.trim().split('\n').map((line) => {
      const text = line.replace(/^- /, '');
      return `<li class="ml-5 pl-2">${text}</li>`;
    }).join('\n');
    return `<ul class="list-disc space-y-2 my-6 text-gray-700">\n${items}\n</ul>`;
  });

  // Ordered lists
  html = html.replace(/^(?:\d+\. (.+)\n?)+/gm, (match) => {
    const items = match.trim().split('\n').map((line) => {
      const text = line.replace(/^\d+\. /, '');
      return `<li class="ml-5 pl-2">${text}</li>`;
    }).join('\n');
    return `<ol class="list-decimal space-y-2 my-6 text-gray-700">\n${items}\n</ol>`;
  });

  // Blockquotes
  html = html.replace(/^> (.+)$/gm, '<blockquote class="border-l-4 border-green-500 pl-5 py-2 my-6 text-gray-600 italic">$1</blockquote>');

  // Paragraphs — wrap remaining non-tag lines
  html = html
    .split('\n\n')
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return '';
      if (trimmed.startsWith('<')) return trimmed;
      return `<p class="text-gray-700 leading-relaxed mb-5">${trimmed.replace(/\n/g, '<br />')}</p>`;
    })
    .join('\n\n');

  return html;
}

function escapeHtml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
