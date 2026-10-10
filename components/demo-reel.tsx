"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { DEMO_CAPTION, DEMO_POSTER_SRC, DEMO_VIDEO_SRC, DEMO_VIDEO_VI_SRC } from "@/lib/content";

const REDUCE_QUERY = "(prefers-reduced-motion: reduce)";

type MotionMode = "unknown" | "ok" | "reduce";

type VideoLang = "en" | "vi";

const VIDEO_OPTIONS: { id: VideoLang; label: string; src: string }[] = [
  { id: "en", label: "English", src: DEMO_VIDEO_SRC },
  { id: "vi", label: "Tiếng Việt", src: DEMO_VIDEO_VI_SRC },
];

function subscribeMotion(onStoreChange: () => void) {
  const media = window.matchMedia(REDUCE_QUERY);
  media.addEventListener("change", onStoreChange);
  return () => media.removeEventListener("change", onStoreChange);
}

function motionSnapshot(): MotionMode {
  return window.matchMedia(REDUCE_QUERY).matches ? "reduce" : "ok";
}

function motionServerSnapshot(): MotionMode {
  return "unknown";
}

export function DemoReel({ className = "" }: { className?: string }) {
  const frameRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const allowPlayRef = useRef(false);
  const mode = useSyncExternalStore(subscribeMotion, motionSnapshot, motionServerSnapshot);
  const [muted, setMuted] = useState(true);
  const [paused, setPaused] = useState(true);
  const [blocked, setBlocked] = useState(false);
  const [started, setStarted] = useState(false);
  const [videoLang, setVideoLang] = useState<VideoLang>("en");
  const resumeRef = useRef<{ time: number; play: boolean } | null>(null);
  const reduce = mode === "reduce";

  useEffect(() => {
    const video = videoRef.current;
    const frame = frameRef.current;
    if (!video || !frame || mode === "unknown") return;

    allowPlayRef.current = mode === "ok";
    video.defaultMuted = true;

    const tryPlay = () => {
      if (!allowPlayRef.current) return;
      const rect = frame.getBoundingClientRect();
      const height = rect.height || 1;
      const visible = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
      if (visible / height < 0.35) return;
      video.autoplay = mode === "ok";
      if (video.autoplay) video.setAttribute("autoplay", "");
      else video.removeAttribute("autoplay");
      const pending = video.play();
      if (!pending) return;
      pending.then(() => setBlocked(false)).catch(() => {
        allowPlayRef.current = false;
        video.autoplay = false;
        video.removeAttribute("autoplay");
        setBlocked(true);
        setPaused(true);
      });
    };

    if (mode === "reduce") {
      video.autoplay = false;
      video.removeAttribute("autoplay");
      video.pause();
    }

    const onPlay = () => {
      setPaused(false);
      setStarted(true);
    };
    const onPause = () => setPaused(true);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry || entry.intersectionRatio < 0.35) {
          video.pause();
          return;
        }
        tryPlay();
      },
      { threshold: [0, 0.35, 0.6] },
    );
    observer.observe(frame);
    if (mode === "ok") tryPlay();

    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      observer.disconnect();
    };
  }, [mode]);

  function toggleSound() {
    const video = videoRef.current;
    const next = !(video ? video.muted : muted);
    if (video) video.muted = next;
    setMuted(next);
  }

  function togglePlay() {
    const video = videoRef.current;
    if (!video) return;
    if (!video.paused) {
      allowPlayRef.current = false;
      video.pause();
      return;
    }
    allowPlayRef.current = true;
    video.muted = muted;
    const pending = video.play();
    if (!pending) return;
    pending.then(() => setBlocked(false)).catch(() => {
      allowPlayRef.current = false;
      setBlocked(true);
    });
  }

  function chooseVideo(next: VideoLang) {
    const video = videoRef.current;
    if (next === videoLang || !video) return;
    resumeRef.current = { time: video.currentTime, play: !video.paused && !video.ended };
    setVideoLang(next);
  }

  /** After a language swap, seek to the saved spot and keep playing if it was playing. */
  function onLoadedMetadata() {
    const video = videoRef.current;
    const resume = resumeRef.current;
    if (!video || !resume) return;
    resumeRef.current = null;
    const end = Number.isFinite(video.duration) ? Math.max(video.duration - 0.25, 0) : resume.time;
    video.currentTime = Math.min(resume.time, end);
    if (!resume.play) {
      // Stop the autoplay attribute from restarting a video that was paused.
      video.pause();
      return;
    }
    const pending = video.play();
    if (!pending) return;
    pending.then(() => setBlocked(false)).catch(() => {
      allowPlayRef.current = false;
      setBlocked(true);
      setPaused(true);
    });
  }

  const showPlay = reduce || blocked;
  const videoSrc = VIDEO_OPTIONS.find((option) => option.id === videoLang)?.src ?? DEMO_VIDEO_SRC;
  const coverWithPoster = !started || (showPlay && paused);

  return (
    <div className={`hero-phone ${className}`}>
      <div className="phone-bezel">
        <span className="phone-speaker" aria-hidden="true" />
        <div ref={frameRef} className="phone-screen">
          <video
            ref={videoRef}
            className="phone-video"
            autoPlay={mode === "ok"}
            muted={muted}
            loop
            playsInline
            preload={reduce ? "none" : "metadata"}
            poster={DEMO_POSTER_SRC}
            width={720}
            height={1280}
            aria-label={DEMO_CAPTION}
            src={videoSrc}
            onLoadedMetadata={onLoadedMetadata}
          />
          {/* Native img keeps /kenny-mack on the URL; next/image dropped basePath in the export. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={DEMO_POSTER_SRC}
            alt=""
            width={720}
            height={1280}
            decoding="async"
            fetchPriority="high"
            className={coverWithPoster ? "phone-video phone-poster" : "phone-video phone-poster phone-poster-gone"}
          />
          <button type="button" className="phone-sound" aria-pressed={!muted} onClick={toggleSound}>
            {muted ? "Tap for sound" : "Mute"}
          </button>
          {showPlay ? (
            <button type="button" className="phone-play" onClick={togglePlay}>
              {paused ? "Play" : "Pause"}
            </button>
          ) : null}
        </div>
        <span className="phone-home" aria-hidden="true" />
      </div>
      <div
        role="group"
        aria-label="Video language"
        className="mt-2 grid grid-cols-2 gap-1 rounded-2xl border border-forest/10 bg-paper p-1 shadow-[0_10px_24px_-20px_rgba(27,67,50,0.8)]"
      >
        {VIDEO_OPTIONS.map((option) => {
          const selected = videoLang === option.id;
          return (
            <button
              key={option.id}
              type="button"
              lang={option.id}
              translate="no"
              aria-pressed={selected}
              aria-label={`Video: ${option.label}`}
              onClick={() => chooseVideo(option.id)}
              className={`min-h-11 min-w-0 rounded-xl px-1 text-center text-[0.85rem] font-semibold leading-tight transition-[background-color,color,scale] duration-200 ${
                selected ? "bg-forest text-paper" : "text-ink hover:bg-linen"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
