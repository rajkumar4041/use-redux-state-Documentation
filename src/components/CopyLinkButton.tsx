import React, { useState } from 'react';

interface CopyLinkButtonProps {
  url?: string;
  className?: string;
  title?: string;
}

const CopyLinkButton: React.FC<CopyLinkButtonProps> = ({
  url,
  className = '',
  title = 'Copy link',
}) => {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    const linkToCopy = url || window.location.href;

    try {
      await navigator.clipboard.writeText(linkToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  return (
    <button
      className={`copy-link-button ${className} ${copied ? 'copied' : ''}`}
      onClick={copyLink}
      title={title}
    >
      {copied ? '✓ Link copied!' : '🔗 Copy link'}
    </button>
  );
};

export default CopyLinkButton;
