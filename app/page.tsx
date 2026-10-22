"use client";

import { useEffect, useState, type CSSProperties } from "react";

const colors = [
  { name: "Solar orange", color: "#ff7947", light: "#ffd480" },
  { name: "Rose quartz", color: "#f76d9b", light: "#ffb7d2" },
  { name: "Electric violet", color: "#a384ff", light: "#d7b5ff" },
  { name: "Ocean blue", color: "#52aaff", light: "#a3e7ff" },
  { name: "Mint condition", color: "#65dbb5", light: "#c4ffe4" },
  { name: "Golden hour", color: "#efc05f", light: "#fff0ab" },
];

function Icon({ name }: { name: "pause" | "play" | "expand" | "collapse" }) {
  return <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {name === "pause" ? <><path d="M8 5v14M16 5v14" /></> : name === "play" ? <path d="m8 5 11 7-11 7Z" /> : name === "collapse" ? <path d="M9 3v6H3m12-6v6h6M9 21v-6H3m12 6v-6h6" /> : <path d="M9 3H3v6m12-6h6v6M3 15v6h6m12-6v6h-6" />}
  </svg>;
}

function Lamp() {
  return <svg className="lamp" viewBox="0 0 400 650" role="img" aria-label="A glowing lava lamp with slowly floating, merging blobs">
    <defs>
      <linearGradient id="metal" x1="0" x2="1"><stop stopColor="#12191e" /><stop offset=".21" stopColor="#323c43" /><stop offset=".42" stopColor="#5d6568" /><stop offset=".53" stopColor="#3b4448" /><stop offset=".82" stopColor="#1b252b" /><stop offset="1" stopColor="#0e171d" /></linearGradient>
      <linearGradient id="glass" x1="0" x2="1"><stop stopColor="#fff" stopOpacity=".12" /><stop offset=".08" stopColor="#fff" stopOpacity=".025" /><stop offset=".5" stopColor="#fff" stopOpacity=".015" /><stop offset=".92" stopColor="#fff" stopOpacity=".03" /><stop offset="1" stopColor="#fff" stopOpacity=".16" /></linearGradient>
      <linearGradient id="wax" x1=".2" y1="1" x2=".8" y2="0"><stop stopColor="var(--lava)" /><stop offset=".55" stopColor="var(--lava)" /><stop offset="1" stopColor="var(--light)" /></linearGradient>
      <radialGradient id="liquid"><stop stopColor="var(--lava)" stopOpacity=".16" /><stop offset="1" stopColor="var(--lava)" stopOpacity=".035" /></radialGradient>
      <linearGradient id="shine"><stop stopColor="#fff" stopOpacity=".3" /><stop offset="1" stopColor="#fff" stopOpacity="0" /></linearGradient>
      <filter id="goo" x="-50%" y="-50%" width="200%" height="200%" colorInterpolationFilters="sRGB"><feGaussianBlur in="SourceGraphic" stdDeviation="9" /><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 23 -9" /><feComposite in="SourceGraphic" operator="atop" /></filter>
      <filter id="glow"><feGaussianBlur stdDeviation="13" /></filter>
      <clipPath id="vessel"><path d="M150 105 104 443Q100 467 124 477H276Q300 467 296 443L250 105Z" /></clipPath>
    </defs>
    <ellipse cx="200" cy="605" rx="124" ry="11" fill="#000" opacity=".45" />
    <ellipse cx="200" cy="598" rx="105" ry="8" fill="var(--lava)" opacity=".18" filter="url(#glow)" />
    <path d="M278 570c27 5 27 21 59 22s34 8 43 10" fill="none" stroke="#141e24" strokeWidth="4" />
    <g clipPath="url(#vessel)">
      <path d="M90 100h220v390H90Z" fill="url(#liquid)" />
      <g className="wax-glow" filter="url(#glow)" opacity=".45"><ellipse cx="200" cy="420" rx="80" ry="60" fill="var(--lava)" /></g>
      <g filter="url(#goo)" fill="url(#wax)">
        <ellipse cx="200" cy="482" rx="105" ry="36" />
        <ellipse className="blob blob-one" cx="170" cy="410" rx="43" ry="57" />
        <ellipse className="blob blob-two" cx="230" cy="350" rx="35" ry="46" />
        <ellipse className="blob blob-three" cx="181" cy="230" rx="39" ry="52" />
        <ellipse className="blob blob-four" cx="225" cy="135" rx="26" ry="36" />
        <ellipse className="blob blob-five" cx="140" cy="320" rx="22" ry="27" />
        <ellipse className="blob blob-six" cx="245" cy="440" rx="29" ry="42" />
        <ellipse cx="200" cy="94" rx="58" ry="25" />
      </g>
      <path d="M150 105 104 443Q100 467 124 477H276Q300 467 296 443L250 105Z" fill="url(#glass)" />
      <path d="m157 125-40 310" stroke="url(#shine)" strokeWidth="5" strokeLinecap="round" />
      <path d="m247 145 37 288" stroke="#fff" strokeOpacity=".08" strokeWidth="2" />
      <ellipse cx="200" cy="463" rx="87" ry="8" fill="var(--light)" opacity=".18" />
    </g>
    <path d="M150 105 104 443Q100 467 124 477H276Q300 467 296 443L250 105" fill="none" stroke="#d5e6ed" strokeOpacity=".15" />
    <path d="M170 40Q200 29 230 40L251 106Q201 116 149 106Z" fill="url(#metal)" />
    <ellipse cx="200" cy="40" rx="30" ry="5" fill="#63696b" />
    <path d="M150 105q50 9 100 0" fill="none" stroke="#889092" strokeOpacity=".3" />
    <path d="M108 466Q200 486 292 466L267 520Q200 540 133 520Z" fill="url(#metal)" />
    <path d="M133 520q67 17 134 0l28 61q-95 28-190 0Z" fill="url(#metal)" />
    <ellipse cx="200" cy="581" rx="95" ry="15" fill="url(#metal)" />
    <path d="M110 582q90 24 180 0" stroke="#60696e" strokeOpacity=".25" fill="none" />
    <rect x="187" y="550" width="26" height="3" rx="1.5" fill="#0d161b" opacity=".6" />
    <circle cx="200" cy="563" r="2" fill="var(--light)" opacity=".8" />
  </svg>;
}

export default function Home() {
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [fullscreen, setFullscreen] = useState(false);
  const [notice, setNotice] = useState("");
  const theme = colors[selected];

  useEffect(() => {
    const update = () => setFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", update);
    return () => document.removeEventListener("fullscreenchange", update);
  }, []);

  async function toggleFullscreen() {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await document.documentElement.requestFullscreen();
      setNotice("");
    } catch { setNotice("Full screen isn’t available in this browser."); }
  }

  const style = { "--lava": theme.color, "--light": theme.light, "--duration": `${24 / speed}s`, "--motion": paused ? "paused" : "running" } as CSSProperties;

  return <main className="room" style={style}>
    <div className="grain" aria-hidden="true" />
    <header className="header">
      <a className="wordmark" href="/" aria-label="Lava Room home"><span className="brand-icon"><i /><i /></span>lava<span className="brand-light">room</span><span className="brand-dot">®</span></a>
      <span className="header-note">A SPACE TO SLOW DOWN</span>
      <button className="icon-button fullscreen" onClick={toggleFullscreen} aria-label={fullscreen ? "Exit full screen" : "Enter full screen"}><Icon name={fullscreen ? "collapse" : "expand"} /></button>
    </header>

    <section className="experience" aria-label="Lava lamp experience">
      <div className="intro"><div className="eyebrow"><span /> LESS NOISE. MORE FLOW.</div><h1>A little motion.<br />A quieter <em>mind.</em></h1><p>Let your thoughts drift.<br /> There’s nowhere you need to be.</p><div className="intro-rule" /><span className="session-note">YOUR OWN LITTLE MOMENT OF NOTHING.</span></div>
      <div className="lamp-scene"><div className="ambient-halo" /><div className="floor-light" /><Lamp /></div>
      <div className="vertical-note">TAKE A BREATH &nbsp; · &nbsp; STAY A WHILE</div>
    </section>

    <section className="controls" aria-label="Lamp controls">
      <div className="color-controls"><div className="control-caption">SET THE MOOD <span>{theme.name}</span></div><div className="swatches" role="group" aria-label="Lava color">{colors.map((item, index) => <button key={item.name} className={`swatch ${index === selected ? "selected" : ""}`} style={{ "--swatch": item.color } as CSSProperties} aria-label={item.name} aria-pressed={index === selected} onClick={() => setSelected(index)}><span />{index === selected && <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="m3 6 2 2 4-4" stroke="#182027" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>}</button>)}</div></div>
      <div className="control-divider" />
      <div className="flow-controls"><label className="control-caption" htmlFor="flow">FIND YOUR FLOW <span>{speed < .8 ? "Extra mellow" : speed > 1.3 ? "A little lively" : "Slow & steady"}</span></label><div className="flow-row"><span className="speed-symbol">≈</span><input id="flow" type="range" min="0.5" max="2" step="0.1" value={speed} onChange={(event) => setSpeed(Number(event.target.value))} aria-valuetext={`${speed} times speed`} /><span className="speed-symbol fast">≈</span></div></div>
      <button className="pause-button" onClick={() => setPaused(!paused)} aria-label={paused ? "Resume animation" : "Pause animation"} aria-pressed={paused}><Icon name={paused ? "play" : "pause"} /></button>
    </section>
    <footer><span><span className={`live-dot ${paused ? "is-paused" : ""}`} />{paused ? "A MOMENT ON PAUSE" : "ENDLESSLY IN THE MOMENT"}</span><span>Made for doing a little less. <span className="footer-spark">✳</span></span></footer>
    <div className="sr-only" role="status" aria-live="polite">{notice}</div>
    {notice && <p className="notice">{notice}</p>}
  </main>;
}
