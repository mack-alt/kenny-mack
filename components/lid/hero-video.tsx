/**
 * Planned ~60-second CLOSER script beats:
 * C 0-5s missing calls on a job?;
 * L 5-15s phone rings out under a dash, caller dials the next shop;
 * O 15-25s voicemail, forwarding to your cell, answering services that fumble;
 * S 25-40s finish the job, next one waiting with details;
 * E 40-52s never quotes a price, recorded notice, 30-day first-month refund, honest yes we use AI;
 * R 52-60s call the demo line, smart first move.
 */
export function HeroVideo({ src }: { src: string }) {
  const source = src.trim();
  const caption = "Video coming soon: hear how a missed call gets handled";

  if (!source) {
    return (
      <figure className="lid-hero-video">
        <div className="lid-video-frame">
          <svg className="lid-video-play" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
            <circle cx="32" cy="32" r="30" fill="none" stroke="#fff" strokeWidth="2" />
            <path d="M26 20v24l20-12z" fill="#fff" />
          </svg>
        </div>
        <figcaption>{caption}</figcaption>
      </figure>
    );
  }

  return (
    <figure className="lid-hero-video">
      <video className="lid-video-frame" controls preload="none" playsInline>
        <source src={source} />
      </video>
    </figure>
  );
}
