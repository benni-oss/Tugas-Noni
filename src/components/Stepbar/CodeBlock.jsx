import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const CodeBlock = ({ code, title }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="relative bg-gray-100 rounded-lg overflow-hidden">
      {/* Header with title and copy button */}
      <div className="flex justify-between items-center bg-[#0692FF] px-4 py-2 border-b border-gray-700">
        <span className="text-black text-sm font-medium">{title}</span>
        <button
          onClick={handleCopy}
          className="flex items-center space-x-2 px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-gray-300 hover:text-white transition-colors duration-200"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              <span className="text-xs">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 text-black" />
              <span className="text-xs text-black">Copy</span>
            </>
          )}
        </button>
      </div>
      
      {/* Code content */}
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm text-black text-left">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;