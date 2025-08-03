import React, { useState } from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  showCopyButton?: boolean;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'typescript',
  title,
  showCopyButton = true,
}) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div className="code-block">
      {(title || showCopyButton) && (
        <div className="code-header">
          {title && <span>{title}</span>}
          {showCopyButton && (
            <button
              className={`copy-button ${copied ? 'copied' : ''}`}
              onClick={copyToClipboard}
              title="Copy code"
            >
              {copied ? '✓ Copied!' : 'Copy'}
            </button>
          )}
        </div>
      )}
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
