import './App.css';

const highlightTiles = [
  {
    title: 'Game Changer Room',
    description:
      'A high-energy pocket on Ayome where brave ideas get pressure-tested, refined, and launched with accountability.',
    tag: 'Live on Ayome'
  },
  {
    title: 'Mahi Mehar',
    description:
      'Host, strategist, and the spark behind every session — guiding you from spark to shipped with honest feedback.',
    tag: 'Host'
  },
  {
    title: 'Playful & precise',
    description:
      'Storytelling, rapid experiments, and bold execution rituals to make your next move feel inevitable.',
    tag: 'Method'
  }
];

const sessions = [
  {
    label: 'Momentum Mondays',
    title: 'Build your 7-day playbook',
    copy: 'We set intentions, map your bold bet, and assign micro-missions so you leave with a plan you want to follow.'
  },
  {
    label: 'Hot Seat Live',
    title: 'Coaching in real time',
    copy: 'Mahi jumps into your idea live, shapes your story, and gives you the exact language and moves to stand out.'
  },
  {
    label: 'Afterglow Lab',
    title: 'Ship before midnight',
    copy: 'Small crews execute immediately with Mahi’s prompts, templates, and a check-in to celebrate the win.'
  }
];

const stats = [
  { value: '120+', label: 'Game Changer seats filled' },
  { value: '18', label: 'city crews plugged in' },
  { value: '93%', label: 'come back every week' }
];

function App() {
  return (
    <div className="app">
      <div className="backdrop">
        <span className="glow glow-one" />
        <span className="glow glow-two" />
        <span className="glow glow-three" />
      </div>

      <header className="hero">
        <nav className="nav">
          <div className="brand">
            <div className="brand-mark">
              <span className="brand-dot" />
              <span className="brand-line" />
            </div>
            <div>
              <p className="brand-sub">Portfolio</p>
              <p className="brand-name">Mahi Mehar</p>
            </div>
          </div>
          <div className="nav-actions">
            <span className="pill pill-ghost">Game Changer Room</span>
            <span className="pill pill-live">Live on Ayome</span>
            <button className="btn btn-ghost">Session guide</button>
            <button className="btn btn-primary">Book a seat</button>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="pill pill-electric">new drop</span>
              <span className="underline">Game Changer Room</span>
            </div>
            <h1>
              Mahi Mehar turns
              <br />
              bold ideas into
              <br />
              game changers.
            </h1>
            <p className="lede">
              Inside her Ayome room, Mahi blends story, strategy, and live coaching so you leave with
              language that lands and a plan you’re proud to execute.
            </p>
            <div className="cta-row">
              <button className="btn btn-primary">Join the next room</button>
              <button className="btn btn-ghost">Watch the trailer</button>
            </div>
            <div className="microcopy">
              <span className="status-dot" />
              Next live: Thursday · 7:00 PM — seats move fast.
            </div>
          </div>

          <div className="hero-card">
            <div className="card-header">
              <div>
                <p className="card-kicker">Ayome exclusive</p>
                <p className="card-title">Game Changer Room</p>
              </div>
              <span className="live-badge">ON AIR</span>
            </div>
            <p className="card-body">
              A cinematic, neon-lit space where ideas get rapid-fire edits, story arcs, and
              accountability sprints led by Mahi herself.
            </p>
            <div className="stat-row">
              {stats.map((stat) => (
                <div key={stat.label} className="stat">
                  <p className="stat-value">{stat.value}</p>
                  <p className="stat-label">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="ticker">
              <span className="ticker-dot" />
              <span>Now streaming on Ayome</span>
              <span className="ticker-arrow">→</span>
            </div>
            <div className="floating-cards">
              <div className="mini-card">
                <p className="mini-label">Signature move</p>
                <p className="mini-text">Precision storytelling that sells your next leap.</p>
              </div>
              <div className="mini-card">
                <p className="mini-label">Atmosphere</p>
                <p className="mini-text">Low lights, high stakes, playlists curated by Mahi.</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="panel">
        <div className="panel-heading">
          <div>
            <p className="eyebrow-sub">Why this room</p>
            <h2>Step inside the Game Changer Room</h2>
            <p className="panel-lede">
              Designed for girls who act on instinct and refine with craft. Mahi’s format keeps you
              moving and makes your ideas unforgettable.
            </p>
          </div>
          <button className="btn btn-outline">See the playbook</button>
        </div>
        <div className="tile-grid">
          {highlightTiles.map((tile) => (
            <article key={tile.title} className="tile">
              <span className="tile-tag">{tile.tag}</span>
              <h3>{tile.title}</h3>
              <p>{tile.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel panel-alt">
        <div className="panel-heading">
          <div>
            <p className="eyebrow-sub">The flow</p>
            <h2>Every session is a mini-arc</h2>
            <p className="panel-lede">
              Three beats. One outcome: you leave with momentum and a move you can ship tonight.
            </p>
          </div>
          <div className="pill-row">
            <span className="pill pill-ghost">Live chat</span>
            <span className="pill pill-ghost">Clips & recaps</span>
            <span className="pill pill-ghost">Private prompts</span>
          </div>
        </div>
        <div className="session-timeline">
          {sessions.map((session, index) => (
            <div key={session.label} className="session-card">
              <div className="session-badge">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{session.label}</p>
              </div>
              <h4>{session.title}</h4>
              <p>{session.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="panel">
        <div className="panel-heading">
          <div>
            <p className="eyebrow-sub">Signature drops</p>
            <h2>Moments that make you stay</h2>
          </div>
          <button className="btn btn-primary">Reserve your spot</button>
        </div>
        <div className="signature-grid">
          <div className="signature-card">
            <div className="signature-header">
              <span className="pill pill-electric">Instant edits</span>
              <span className="signature-icon">✦</span>
            </div>
            <h3>The Rewrite Table</h3>
            <p>
              Mahi rewrites your pitch live — headlines, captions, emails — turning rough drafts into
              lines that hit like a chorus.
            </p>
            <ul className="signature-list">
              <li>Voice-note to story in under 5 minutes</li>
              <li>Magnetic hooks for socials and decks</li>
              <li>Playback clips to reuse all week</li>
            </ul>
          </div>
          <div className="signature-card">
            <div className="signature-header">
              <span className="pill pill-ghost">Momentum rituals</span>
              <span className="signature-icon">∞</span>
            </div>
            <h3>Glow-Up Missions</h3>
            <p>
              A set of daring micro-missions dropped at the end of every room so you leave ready to act
              — and report back for the win.
            </p>
            <ul className="signature-list">
              <li>Mini builds you can finish tonight</li>
              <li>Accountability check-in on Ayome</li>
              <li>Celebration reel during the next live</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div>
          <p className="eyebrow-sub">Ready to move?</p>
          <h2>Grab a seat in Mahi Mehar’s Game Changer Room on Ayome.</h2>
        </div>
        <div className="cta-actions">
          <button className="btn btn-primary">Book now</button>
          <button className="btn btn-ghost">DM Mahi on Ayome</button>
        </div>
      </section>

      <footer className="footer">
        <p>Built for the girls who lead with instinct and finish with style.</p>
        <div className="footer-badges">
          <span className="pill pill-ghost">Mahi Mehar</span>
          <span className="pill pill-ghost">Game Changer Room</span>
          <span className="pill pill-live">Ayome</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
