const ProfileAvatars = () => {
  const githubUrl = 'https://github.com/rajkumar4041';
  const npmUrl = 'https://github.com/rajkumar4041/redux-toolkit-state';

  const handleGitHubClick = () => {
    window.open(githubUrl, '_blank', 'noopener,noreferrer');
  };

  const handleNpmClick = () => {
    window.open(npmUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div style={{ display: 'flex', gap: '16px', padding: '16px', marginLeft: '30px' }}>
      {/* GitHub Avatar */}
      <button
        onClick={handleGitHubClick}
        style={{
          width: '64px',
          height: '64px',
          backgroundColor: '#1f2937',
          borderRadius: '50%',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'background-color 0.2s',
        }}
        onMouseEnter={(e) => ((e.target as any).style.backgroundColor = '#374151')}
        onMouseLeave={(e) => ((e.target as any).style.backgroundColor = '#1f2937')}
      >
        <svg
          style={{ width: '32px', height: '32px', color: 'white' }}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* NPM Avatar */}
      <button
        onClick={handleNpmClick}
        style={{
          width: '64px',
          height: '64px',
          backgroundColor: '#dc2626',
          borderRadius: '50%',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'background-color 0.2s',
        }}
        onMouseEnter={(e) => ((e.target as any).style.backgroundColor = '#b91c1c')}
        onMouseLeave={(e) => ((e.target as any).style.backgroundColor = '#dc2626')}
      >
        <svg
          style={{ width: '40px', height: '40px', color: 'white' }}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0H1.763zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z" />
        </svg>
      </button>
    </div>
  );
};

export default ProfileAvatars;
