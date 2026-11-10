import { profile, stats, strip, architecture, iac, focus, exploring, toolbox, experience, credentials, projects } from "./data.js";

const H = 78, GAP = 52, W = 260;

function Node({ x, y, w, title, sub, i }) {
  const lines = sub ? sub.split("\n") : [];
  return (
    <g className="node" style={{ animationDelay: `${0.3 + i * 0.35}s` }}>
      <rect x={x} y={y} width={w} height={H} rx="14" />
      <circle cx={x + 22} cy={y + 26} r="5" />
      <text className="t" x={x + 38} y={y + 31}>{title}</text>
      {lines.map((line, index) => (
        <text key={`${title}-${index}`} className="s" x={x + 22} y={y + 54 + index * 14}>{line}</text>
      ))}
    </g>
  );
}

function Architecture() {
  const cx = W / 2;
  const iacX = 330;
  const iacW = 160;

  return (
    <svg className="arch" viewBox="0 0 520 500" role="img"
      aria-label="Platform architecture: source, CI/CD pipeline, Kubernetes, observability, with infrastructure as code feeding Kubernetes">
      <defs>
        <marker id="ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 1 L9 5 L0 9z" className="head" />
        </marker>
      </defs>
      {architecture.slice(1).map((_, i) => (
        <line key={i} className="flow" x1={cx} x2={cx}
          y1={i * (H + GAP) + H + 2} y2={(i + 1) * (H + GAP) - 3} markerEnd="url(#ar)" />
      ))}
      <line className="flow" x1={W} x2={iacX} y1={2 * (H + GAP) + H / 2} y2={2 * (H + GAP) + H / 2} markerEnd="url(#ar)" />
      {architecture.map((n, i) => (
        <Node key={n.title} i={i} x={0} y={i * (H + GAP)} w={W} {...n} />
      ))}
      <Node i={4} x={iacX} y={2 * (H + GAP)} w={iacW} {...iac} />
    </svg>
  );
}

const Tags = ({ list, alt }) => (
  <div className="chips">{list.map((t) => <span key={t} className={`chip ${alt ? "alt" : ""}`}>{t}</span>)}</div>
);

const Section = ({ id, n, label, title, intro, children }) => (
  <section id={id} className="wrap section">
    <p className="eyebrow">{n} / {label}</p>
    <h2>{title}</h2>
    {intro && <p className="lead">{intro}</p>}
    <div className="body">{children}</div>
  </section>
);

function Nav() {
  const links = [["about", "About"], ["expertise", "Expertise"], ...(experience.length ? [["experience", "Experience"]] : []), ["projects", "Projects"], ["contact", "Contact"]];
  return (
    <header className="nav">
      <a href="#top" className="logo">About Me</a>
      <nav>{links.map(([id, l]) => <a key={id} href={`#${id}`}>{l}</a>)}</nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="wrap hero">
      <div className="hero-grid">
        <div>
          <p className="eyebrow">{profile.eyebrow}</p>
          <h1>{profile.name}</h1>
          <p className="role">{profile.tagline}</p>
          <p className="lead">{profile.intro}</p>
          <div className="btns">
            <a className="btn primary" href="#projects">View projects</a>
            <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            {profile.email && <a className="btn" href={`mailto:${profile.email}`}>Get in touch</a>}
          </div>
        </div>
        <div className="arch-card"><Architecture /></div>
      </div>
      <div className="stats">
        {stats.map((s) => <div key={s.l}><b>{s.n}</b><span>{s.l}</span></div>)}
      </div>
      <p className="strip">{strip.map((s, i) => <span key={s}>{i > 0 && <i>•</i>}{s}</span>)}</p>
    </section>
  );
}

export default function App() {
  let n = 0;
  const num = () => String(++n).padStart(2, "0");
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Section id="about" n={num()} label="Profile" title="Technical depth, delivery focus." intro="Hands-on experience across CI/CD, cloud infrastructure, containers and monitoring, with an emphasis on automation and repeatable delivery.">
          <div className="grid g3">
            {focus.map((f) => (
              <div className="card" key={f.title}>
                <span className="icon">{f.icon}</span>
                <h3>{f.title}</h3>
                <p className="muted">{f.text}</p>
                <Tags list={f.tags} />
              </div>
            ))}
          </div>
          <h3 className="sub">Currently exploring</h3>
          <Tags list={exploring} alt />
        </Section>

        <Section id="expertise" n={num()} label="Toolbox" title="What I work with." intro="A practical toolset built around cloud delivery, infrastructure, containers and monitoring.">
          <div className="grid g2">
            {toolbox.map((g) => (
              <div className="card" key={g.group}>
                <h3>{g.group}</h3>
                <p className="muted">{g.text}</p>
                <Tags list={g.items} />
              </div>
            ))}
          </div>
        </Section>

        {experience.length > 0 && (
          <Section id="experience" n={num()} label="Experience" title="Deployment history.">
            <div className="timeline">
              {experience.map((e) => (
                <article className="experience-item" key={e.role + e.period}>
                  <div className="exp-meta">
                    <span className="exp-company">{e.company}</span>
                    <span className="exp-period">{e.period}</span>
                  </div>
                  <div className="exp-body">
                    <span className="exp-role-tag">Role</span>
                    <h3>{e.role}</h3>
                    <ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
                  </div>
                </article>
              ))}
            </div>
          </Section>
        )}

        <Section id="projects" n={num()} label="Selected work" title="Selected engineering work." intro="Hands-on examples of infrastructure, containerized workloads and automated delivery.">
          <div className="grid g3">
            {projects.map((p, i) => (
              <a className="card project" key={p.title} href={p.link} target="_blank" rel="noreferrer">
                <p className="eyebrow">PROJECT {String(i + 1).padStart(2, "0")}</p>
                <h3>{p.title}</h3>
                <p className="muted grow">{p.text}</p>
                <Tags list={p.tags} />
              </a>
            ))}
          </div>
        </Section>

        {credentials.length > 0 && (
          <Section id="credentials" n={num()} label="Credentials" title="Certifications & education.">
            <div className="creds">
              {credentials.map((c) => (
                <a className="card" key={c.title} href={c.link} target="_blank" rel="noreferrer"><b>{c.title} ↗</b><span className="muted">{c.date}</span></a>
              ))}
            </div>
          </Section>
        )}

        <Section id="contact" n={num()} label="Contact" title="Let’s build something reliable." intro="For DevOps, cloud and CI/CD conversations.">
          <div className="btns">
            {profile.email && <a className="btn primary" href={`mailto:${profile.email}`}>{profile.email}</a>}
            <a className={`btn ${profile.email ? "" : "primary"}`} href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a className="btn" href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </Section>
      </main>
      <footer className="footer">© {new Date().getFullYear()} {profile.name} · {profile.location}</footer>
    </>
  );
}
