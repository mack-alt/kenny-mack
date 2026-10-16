export function Shield({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 76" aria-hidden="true" focusable="false">
      <path
        fill="#0B2545"
        d="M32 1 59.2 12.2V36.2c0 16.8-9.8 28.6-27.2 38.2C14.6 64.8 4.8 53 4.8 36.2V12.2L32 1z"
      />
      <path
        fill="#fff"
        d="M32 8.6 52.2 17.4v18.2c0 12.7-7.3 21.8-20.2 29.4C19.1 57.4 11.8 48.3 11.8 35.6V17.4L32 8.6z"
      />
      <circle cx="32" cy="27.2" r="6.2" fill="#F2A900" />
      <path fill="#F2A900" d="M27.9 32.4h8.2L32 44.8z" />
      <path
        d="M19.2 47.4 29.6 58.2 46.4 40.4"
        fill="none"
        stroke="#F2A900"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`lid-wordmark ${className}`.trim()} aria-hidden="true">
      <span className="lid-wordmark-lock">LOCKED IN</span>
      <span className="lid-wordmark-dispatch">DISPATCH</span>
    </span>
  );
}
