import "../styles/TopBar.css";

export default function TopBar() {
  return (
    <div className="topbar">
      <span className="topbar-shine" aria-hidden="true"></span>

      <span className="topbar-flourish topbar-flourish-left" aria-hidden="true">
        <svg viewBox="0 0 150 40" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4,20 C14,8 26,6 34,12 C38,15 36,19 32,17 C29,15.5 30,11 36,9 C44,6.5 52,12 50,19 C48,26 38,29 30,25"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinecap="round"
          />
          <path d="M20,11 C22,7 27,7 28,11 C27,15 22,15 20,11 Z" fill="currentColor" />
          <path
            d="M40,10 C42,6 47,6 48,10 C47,14 42,14 40,10 Z"
            fill="currentColor"
            transform="rotate(15 44 10)"
          />
          <path
            d="M36,26 C38,22 43,22 44,26 C43,30 38,30 36,26 Z"
            fill="currentColor"
            transform="rotate(-20 40 26)"
          />
          <circle cx="58" cy="20" r="2" fill="currentColor" />
          <path d="M64,20 L130,20" stroke="currentColor" strokeWidth="1" strokeDasharray="1.5 5" />
        </svg>
      </span>

      <div className="marquee-wrapper">
        <div className="marquee">
          <span>Use code SALE20 to get 20% off!</span>
          <span>Use code SALE20 to get 20% off!</span>
          <span>Use code SALE20 to get 20% off!</span>
          <span>Use code SALE20 to get 20% off!</span>
          <span>Use code SALE20 to get 20% off!</span>
        </div>
      </div>

      <span className="topbar-flourish topbar-flourish-right" aria-hidden="true">
        <svg viewBox="0 0 150 40" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4,20 C14,8 26,6 34,12 C38,15 36,19 32,17 C29,15.5 30,11 36,9 C44,6.5 52,12 50,19 C48,26 38,29 30,25"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinecap="round"
          />
          <path d="M20,11 C22,7 27,7 28,11 C27,15 22,15 20,11 Z" fill="currentColor" />
          <path
            d="M40,10 C42,6 47,6 48,10 C47,14 42,14 40,10 Z"
            fill="currentColor"
            transform="rotate(15 44 10)"
          />
          <path
            d="M36,26 C38,22 43,22 44,26 C43,30 38,30 36,26 Z"
            fill="currentColor"
            transform="rotate(-20 40 26)"
          />
          <circle cx="58" cy="20" r="2" fill="currentColor" />
          <path d="M64,20 L130,20" stroke="currentColor" strokeWidth="1" strokeDasharray="1.5 5" />
        </svg>
      </span>
    </div>
  );
}