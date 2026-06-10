import { motion } from 'framer-motion';

// Google Fonts — loaded via @import so no changes needed in index.html
// Syne (headings) + DM Sans (body) + JetBrains Mono (mono labels)
const GOOGLE_FONTS_IMPORT = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
`;

// ─── Types ────────────────────────────────────────────────────────────────────
interface SkillItem {
  name: string;
  devicon: string;
}

// ─── Contribution Grid Data ───────────────────────────────────────────────────
// 53 weeks total (Jun → Jun), with the final "Jun" column appended
const GRID: number[][] = [
  // Jun (week 0–3)
  [1,2,1,0,0,4,1],[0,1,0,2,4,0,0],[0,1,2,0,0,2,4],[4,2,4,1,3,2,1],
  // Jul (4–7)
  [0,0,0,2,1,0,4],[1,0,2,1,2,0,1],[2,1,2,2,1,1,1],[2,3,2,0,1,1,0],
  // Aug (8–12)
  [0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],
  // Sep (13–16)
  [0,0,0,1,0,0,0],[0,1,0,0,0,0,0],[0,0,0,0,0,0,0],[1,0,0,0,0,0,0],
  // Oct (17–20)
  [0,1,0,0,0,0,0],[0,0,1,1,1,0,0],[0,0,0,0,0,0,0],[0,0,0,0,1,0,0],
  // Nov (21–25)
  [0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,3,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],
  // Dec (26–29)
  [0,1,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,1,0,0,0,0],
  // Jan (30–33)
  [0,3,0,0,0,0,0],[0,0,0,0,2,0,0],[2,0,1,0,0,0,0],[0,0,0,0,0,0,0],
  // Feb (34–37)
  [0,0,0,0,0,0,0],[0,0,0,0,0,2,1],[0,0,0,0,0,1,0],[0,0,2,0,0,0,0],
  // Mar (38–42)
  [0,0,0,0,0,1,0],[0,0,0,3,0,0,2],[0,0,0,1,0,2,0],[0,1,0,0,0,0,0],[0,0,0,0,0,0,0],
  // Apr (43–46)
  [2,0,2,0,1,2,0],[3,2,2,3,2,0,0],[0,1,3,0,1,1,0],[0,2,0,2,2,0,1],
  // May (47–52)
  [0,2,0,1,0,4,2],[0,2,3,0,4,0,2],[1,0,1,0,2,0,0],[2,2,0,0,2,2,0],[0,2,2,1,0,0,0],[1,0,2,1,1,0,1],
  // Jun next year (week 53) — the "add June too" column
  [1,2,0,1,0,2,1],
];

const MONTH_LABELS: { label: string; week: number }[] = [
  { label: 'Jun', week: 0  }, { label: 'Jul', week: 4  }, { label: 'Aug', week: 8  },
  { label: 'Sep', week: 13 }, { label: 'Oct', week: 17 }, { label: 'Nov', week: 21 },
  { label: 'Dec', week: 26 }, { label: 'Jan', week: 30 }, { label: 'Feb', week: 34 },
  { label: 'Mar', week: 38 }, { label: 'Apr', week: 43 }, { label: 'May', week: 47 },
  { label: 'Jun', week: 53 }, // closing June
];

// GitHub green palette
const GH_COLORS: Record<number, string> = {
  0: '#161b22',
  1: '#0e4429',
  2: '#006d32',
  3: '#26a641',
  4: '#39d353',
};

const GH_BORDER: Record<number, string> = {
  0: '#21262d',
  1: '#196c2e',
  2: '#26a641',
  3: '#2ea043',
  4: '#56d364',
};

const DAY_LABELS: { label: string; index: number }[] = [
  { label: 'Mon', index: 1 },
  { label: 'Wed', index: 3 },
  { label: 'Fri', index: 5 },
];

// ─── Skill Data (Devicons) ────────────────────────────────────────────────────
// Requires in public/index.html:
// <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />

const PROFESSIONAL_SKILLS: SkillItem[] = [
  { name: 'git',          devicon: 'devicon-git-plain colored' },
  { name: 'JavaScript',   devicon: 'devicon-javascript-plain colored' },
  { name: 'TypeScript',   devicon: 'devicon-typescript-plain colored' },
  { name: 'React',        devicon: 'devicon-react-original colored' },
  { name: 'Python',       devicon: 'devicon-python-plain colored' },
  { name: 'Flask',        devicon: 'devicon-flask-original colored' },
  { name: 'PostgreSQL',   devicon: 'devicon-postgresql-plain colored' },
  { name: 'HTML5',        devicon: 'devicon-html5-plain colored' },
  { name: 'CSS3',         devicon: 'devicon-css3-plain colored' },
  { name: 'Tailwind CSS', devicon: 'devicon-tailwindcss-plain colored' },
  { name: 'Postman', devicon: 'devicon-postman-plain colored' },
  { name: 'Docker',  devicon: 'devicon-docker-plain colored' },
  { name: 'Linux',   devicon: 'devicon-linux-plain' },
  { name: 'GitHub',  devicon: 'devicon-github-original colored' },
  { name: 'Vercel',  devicon: 'devicon-vercel-original' },
  { name: 'Render',  devicon: 'devicon-render-original colored' },
  { name: 'CI/CD',  devicon: 'devicon-ci-cd-original colored' },
];

const TOOLS: SkillItem[] = [
  { name: 'Jira',   devicon: 'devicon-jira-plain colored' },
  { name: 'Trello',   devicon: 'devicon-trello-plain colored' },
  { name: 'VS Code', devicon: 'devicon-vscode-plain colored' },
  { name: 'Canva',   devicon: 'devicon-canva-plain colored' },
  { name: 'Google Chrome',  devicon: 'devicon-chrome-plain colored' },
];

// ─── Design tokens ────────────────────────────────────────────────────────────
const ACCENT = '#61DAFB';          // React blue — replaces all purple accent usage
const FONT_HEADING = "'Syne', sans-serif";
const FONT_BODY    = "'DM Sans', sans-serif";
const FONT_MONO    = "'JetBrains Mono', monospace";

// ─── Styles ───────────────────────────────────────────────────────────────────
const s = {
  section: {
    backgroundColor: '#060b14',
    fontFamily: FONT_BODY,
    minHeight: '100vh',
    padding: '80px 0',
  } as const,

  container: {
    maxWidth: 960,
    margin: '0 auto',
    padding: '0 24px',
    position: 'relative' as const,
    zIndex: 1,
  },

  card: {
    backgroundColor: '#0d1117',
    border: '1px solid #21262d',
    borderRadius: 14,
    padding: '20px 24px',
    position: 'relative' as const,
    overflow: 'hidden',
  },

  heading: {
    fontFamily: FONT_HEADING,
    fontSize: 38,
    fontWeight: 800,
    margin: 0,
    background: 'linear-gradient(90deg, #e6edf3 0%, #58a6ff 50%, #bc8cff 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  } as const,

  gradientRule: {
    height: 1,
    marginTop: 16,
    background: 'linear-gradient(90deg, #58a6ff44, #bc8cff44, transparent)',
  } as const,
};

// Pill — white border (rgba so it's not glaring), accent glow on hover
const pillStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 10,
  fontSize: '0.95rem',
  fontFamily: FONT_BODY,
  fontWeight: 500,
  padding: '10px 20px',
  borderRadius: 24,
  border: '1.5px solid rgba(255, 255, 255, 0.25)',   // white border, softened
  backgroundColor: '#0d1117',
  color: '#e6edf3',
  cursor: 'default',
  transition: 'all 0.3s ease',
  whiteSpace: 'nowrap' as const,
  boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
};

// ─── Contribution Grid ────────────────────────────────────────────────────────
function ContributionGrid() {
  const CELL = 13;
  const GAP  = 3;

  const cellStyle = (level: number): React.CSSProperties => ({
    width: CELL,
    height: CELL,
    borderRadius: 3,
    backgroundColor: GH_COLORS[level],
    border: `1px solid ${GH_BORDER[level]}`,
    transition: 'transform 120ms ease, box-shadow 120ms ease',
    flexShrink: 0,
  });

  return (
    <div style={{ fontFamily: FONT_BODY }}>
      {/* Month labels */}
      <div className="flex mb-1" style={{ paddingLeft: 28 }}>
        {GRID.map((_, wi) => {
          const month = MONTH_LABELS.find((m) => m.week === wi);
          return (
            <div
              key={wi}
              style={{
                width: CELL + GAP,
                minWidth: CELL + GAP,
                fontSize: 11,
                fontFamily: FONT_MONO,
                color: '#484f58',
                lineHeight: 1,
                whiteSpace: 'nowrap',
              }}
            >
              {month?.label ?? ''}
            </div>
          );
        })}
      </div>

      {/* Grid body */}
      <div className="flex" style={{ gap: GAP }}>
        {/* Day labels */}
        <div className="flex flex-col justify-between" style={{ marginRight: 4, paddingTop: 1 }}>
          {Array.from({ length: 7 }).map((_, di) => {
            const lbl = DAY_LABELS.find((d) => d.index === di);
            return (
              <div
                key={di}
                style={{
                  height: CELL,
                  marginBottom: di < 6 ? GAP : 0,
                  fontSize: 10,
                  fontFamily: FONT_MONO,
                  color: '#484f58',
                  lineHeight: `${CELL}px`,
                  width: 20,
                  textAlign: 'right',
                  paddingRight: 2,
                }}
              >
                {lbl?.label ?? ''}
              </div>
            );
          })}
        </div>

        {/* Cells */}
        {GRID.map((week, wi) => (
          <div key={wi} className="flex flex-col" style={{ gap: GAP }}>
            {week.map((level, di) => (
              <div
                key={di}
                style={cellStyle(level)}
                title={level > 0 ? `${level} contribution${level > 1 ? 's' : ''}` : 'No contributions'}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = 'scale(1.3)';
                  if (level > 0) el.style.boxShadow = `0 0 6px ${GH_COLORS[level]}cc`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = 'scale(1)';
                  el.style.boxShadow = 'none';
                }}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-3">
        <span style={{ fontSize: 11, fontFamily: FONT_MONO, color: '#484f58' }}>
          <a
            href="https://github.com/moses-25"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#58a6ff', textDecoration: 'none' }}
            onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
            onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
          >
            @moses-25 on GitHub
          </a>
        </span>
        <div className="flex items-center gap-1.5" style={{ fontSize: 11, fontFamily: FONT_MONO, color: '#484f58' }}>
          <span>Less</span>
          {[0, 1, 2, 3, 4].map((l) => (
            <div
              key={l}
              style={{
                width: 11,
                height: 11,
                borderRadius: 2,
                backgroundColor: GH_COLORS[l],
                border: `1px solid ${GH_BORDER[l]}`,
              }}
            />
          ))}
          <span>More</span>
        </div>
      </div>
    </div>
  );
}

// ─── Skill Pill ───────────────────────────────────────────────────────────────
function SkillPill({ item, index }: { item: SkillItem; index: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.04, ease: [0.2, 0.8, 0.3, 1] }}
      whileHover={{
        scale: 1.05,
        border: '1.5px solid rgba(255, 255, 255, 0.65)',
        boxShadow: `0 0 12px ${ACCENT}44, 0 4px 16px rgba(0,0,0,0.4)`,
      }}
      style={pillStyle}
    >
      <i className={item.devicon} style={{ fontSize: '1.25rem' }} />
      <span>{item.name}</span>
    </motion.span>
  );
}

// ─── Section heading helper ───────────────────────────────────────────────────
function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      style={{ marginBottom: 20 }}
    >
      <h3
        style={{
          fontFamily: FONT_HEADING,
          fontSize: 26,
          fontWeight: 800,
          color: '#e6edf3',
          margin: 0,
          textAlign: 'center',
        }}
      >
        {children}
      </h3>
    </motion.div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
function SkillsSection() {
  return (
    <>
      {/* Inject Google Fonts at component level — works without touching index.html */}
      <style>{GOOGLE_FONTS_IMPORT}</style>

      <section id="skills" style={s.section}>
        {/* Dot-grid background */}
        <div
          style={{
            position: 'fixed',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 0,
            backgroundImage: 'radial-gradient(#1c2128 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            opacity: 0.5,
          }}
        />

        <div style={s.container}>
          {/* Section heading */}
          <div style={{ marginBottom: 48 }}>
            <h2 style={s.heading}>Skills</h2>
            <div style={s.gradientRule} />
          </div>

          {/* ── Professional Skillset ── */}
          <SubHeading>
            Professional <span style={{ color: ACCENT }}>Skillset</span>
          </SubHeading>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 12,
              marginBottom: 56,
            }}
          >
            {PROFESSIONAL_SKILLS.map((item, i) => (
              <SkillPill key={item.name} item={item} index={i} />
            ))}
          </div>

          {/* ── Tools I Use ── */}
          <SubHeading>
            <span style={{ color: ACCENT }}>Tools</span> I use
          </SubHeading>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 12,
              marginBottom: 56,
            }}
          >
            {TOOLS.map((item, i) => (
              <SkillPill key={item.name} item={item} index={i} />
            ))}
          </div>

          {/* ── Days I Code ── */}
          <SubHeading>
            Days I <span style={{ color: ACCENT }}>Code</span>
          </SubHeading>

          <div
            style={{
              ...s.card,
              overflowX: 'auto',
              background: 'linear-gradient(135deg, #0d1117 0%, #0d1117 80%, #58a6ff08 100%)',
              boxShadow: '0 0 0 1px #21262d, 0 4px 24px #00000044',
            }}
          >
            <p style={{ fontSize: 13, fontFamily: FONT_MONO, color: '#484f58', marginBottom: 16 }}>
              <span style={{ color: '#e6edf3', fontWeight: 600 }}>151 contributions</span>
              <span> in the last year</span>
            </p>
            <ContributionGrid />
          </div>
        </div>
      </section>
    </>
  );
}

export default SkillsSection;