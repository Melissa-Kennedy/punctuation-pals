import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { MARKS, PAUSE_WORDS, PITCH, lookup, surpriseMark, type MarkId } from "@/lib/punctuation";

type ListenState = "idle" | "loading" | "playing";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Punctuation Pals" },
    { name: "description", content: "Meet all 12 punctuation pals: what they do, how they feel, and how they sound. A playful punctuation learning adventure." },
    { property: "og:title", content: "Punctuation Pals" },
    { property: "og:description", content: "Meet all 12 punctuation pals: what they do, how they feel, and how they sound. A playful punctuation learning adventure." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

function Index() {
  const [currentId, setCurrentId] = useState<MarkId>("question");
  const [input, setInput] = useState("?");
  const [message, setMessage] = useState("");
  const [revision, setRevision] = useState(0);
  const [listenState, setListenState] = useState<ListenState>("idle");
  const [listenError, setListenError] = useState("");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioUrlRef = useRef<string | null>(null);
  const m = MARKS.find(mark => mark.id === currentId) ?? MARKS[1];
  const pitch = PITCH[m.pitch];

  useEffect(() => {
    const start = MARKS.find(mark => mark.id === window.location.hash.slice(1)) ?? MARKS[1];
    setCurrentId(start.id);
    setInput(start.glyph.replace(" ", ""));
    window.history.replaceState(null, "", "#" + start.id);
  }, []);

  function stopAudio() {
    audioRef.current?.pause();
    audioRef.current = null;
    if (audioUrlRef.current) {
      URL.revokeObjectURL(audioUrlRef.current);
      audioUrlRef.current = null;
    }
    setListenState("idle");
  }

  function show(id: MarkId) {
    stopAudio();
    setListenError("");
    setCurrentId(id);
    setRevision(value => value + 1);
    window.history.replaceState(null, "", "#" + id);
  }

  async function listen() {
    if (listenState === "playing") {
      stopAudio();
      return;
    }
    if (listenState === "loading") return;
    setListenState("loading");
    setListenError("");
    try {
      const response = await fetch("/api/speech", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: m.example.replace(/[{}]/g, "") }),
      });
      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error ?? "The voice is busy right now. Try again in a moment.");
      }
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      audioUrlRef.current = url;
      const audio = new Audio(url);
      audioRef.current = audio;
      audio.onended = () => stopAudio();
      audio.onerror = () => {
        stopAudio();
        setListenError("The voice is busy right now. Try again in a moment.");
      };
      await audio.play();
      setListenState("playing");
    } catch (error) {
      stopAudio();
      setListenError(error instanceof Error ? error.message : "The voice is busy right now. Try again in a moment.");
    }
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    const result = lookup(input);
    if (result.error !== undefined) {
      setMessage(result.error);
      return;
    }
    setMessage(result.note ?? "");
    show(result.id);
  }

  return (
    <main className="pal-wrap">
      <header className="pal-top">
        <h1>Punctuation <span className="title-pals">Pals</span><span className="q">?</span><span className="e">!</span></h1>
        <p className="pal-lede">Type a punctuation mark to meet it. See what it does, how it feels, and how it sounds when you read it out loud.</p>
      </header>

      <form className="pal-finder" onSubmit={submit} noValidate>
        <label htmlFor="markInput" className="sr-only">Type a punctuation mark or its name</label>
        <input id="markInput" name="markInput" maxLength={24} autoComplete="off" autoCapitalize="off" spellCheck={false} placeholder="Type a mark, like ? or !" value={input} onChange={event => { setInput(event.target.value); setMessage(""); }} />
        <Button type="submit" variant="palPrimary" size="pal">Show me</Button>
        <Button type="button" variant="palGhost" size="pal" onClick={() => {
          const selected = surpriseMark(currentId);
          setMessage("");
          setInput(selected.glyph.replace(" ", ""));
          show(selected.id);
        }}>Surprise me</Button>
      </form>
      <p className="pal-msg" role="status" aria-live="polite">{message}</p>

      <article className="pal-card" data-hue={m.hue} aria-live="polite">
        <div className="pal-glyph-tile">
          <span key={`glyph-${revision}`} className={`pal-glyph${m.glyph.length > 1 ? " small" : ""}${revision ? " animate" : ""}`} aria-hidden="true">{m.glyph}</span>
          <span className="pal-glyph-name">{m.name}</span>
        </div>
        <div className="pal-info">
          <p className="pal-job">{m.job}</p>
          <div className="pal-name-block">
            <h2>{m.name}</h2>
            <p className="pal-aka">{m.aka}</p>
          </div>
          <p className="pal-def">{m.def}</p>
          <div className="pal-feels">
            <h3>How it feels</h3>
            <ul key={`feels-${revision}`}>
              {m.feels.map(([emoji, word]) => <li key={word} className={revision ? "animate" : ""}><span className="emo" aria-hidden="true">{emoji}</span><span className="word">{word}</span></li>)}
            </ul>
          </div>
          <div>
            <h3>Reading it out loud</h3>
            <div className="pal-voice-grid">
              <div className="pal-voice-box">
                <span className="label">Your voice</span>
                <svg className="pal-pitch" viewBox="0 0 160 40" aria-hidden="true"><path d={pitch.d} strokeWidth={pitch.w} strokeDasharray={pitch.dash} /></svg>
                <p>{m.voice}</p>
              </div>
              <div className="pal-voice-box">
                <span className="label">How long to pause</span>
                <div className="pal-meter" aria-hidden="true">{[0, 1, 2, 3].map(index => <span key={index} className={index < m.pause ? "on" : ""} />)}</div>
                <p>{PAUSE_WORDS[m.pause]}.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pal-example">
          <div className="pal-example-head">
            <h3>See it in a sentence</h3>
            <Button type="button" variant="palGhost" size="pal" className="pal-listen" onClick={listen} aria-label={listenState === "playing" ? "Stop listening" : "Listen to the sentence"}>
              <span aria-hidden="true">{listenState === "playing" ? "⏹" : "🔊"}</span>
              {listenState === "loading" ? "One sec…" : listenState === "playing" ? "Stop" : "Listen"}
            </Button>
          </div>
          <p className="pal-lined"><span className="txt">{m.example.split(/(\{[^}]*\})/).map((part, index) => part.startsWith("{") && part.endsWith("}") ? <mark key={index}>{part.slice(1, -1)}</mark> : part)}</span></p>
          {listenError ? <p className="pal-listen-error" role="status">{listenError}</p> : null}
          <p className="pal-tip"><strong>Tip: </strong>{m.tip}</p>
        </div>
      </article>

      <section className="pal-all" aria-labelledby="allHead">
        <h2 id="allHead">All the marks</h2>
        <div className="pal-chips">
          {[...MARKS].sort((a, b) => a.id === "question" ? -1 : b.id === "question" ? 1 : 0).map(mark => <Button key={mark.id} type="button" variant="palChip" size="pal" data-hue={mark.hue} aria-label={mark.name} aria-pressed={mark.id === currentId} onClick={() => {
            setMessage("");
            setInput(mark.glyph.replace(" ", ""));
            show(mark.id);
          }}><span className="g" aria-hidden="true">{mark.glyph}</span><span className="pal-chip-copy"><span className="pal-chip-name">{mark.name}</span><span className="pal-chip-def">{mark.def}</span></span></Button>)}
        </div>
      </section>
      <p className="pal-foot">Tip: you can also type a name, like “comma” or “question mark”.</p>
    </main>
  );
}
