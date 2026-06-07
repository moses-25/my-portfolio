// src/components/sections/Skills.tsx
//
// Requires in index.html <head>:
// <link href="https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet">

import React, { useEffect, useRef, useState } from 'react';

// ─── Types ─────────────────────────────────────────────────────────────────────
interface GitHubStats {
  public_repos: number;
  followers: number;
  following: number;
  stars: number;
  forks: number;
  languages: { name: string; percent: number; color: string }[];
}

// ─── Constants ─────────────────────────────────────────────────────────────────
const GITHUB_USERNAME = 'moses-25';

const FALLBACK_STATS: GitHubStats = {
  public_repos: 89,
  followers: 6,
  following: 11,
  stars: 9,
  forks: 3,
  languages: [
    { name: 'JavaScript', percent: 56.8, color: '#f1e05a' },
    { name: 'Python',     percent: 32.1, color: '#3572A5' },
    { name: 'TypeScript', percent: 9.3,  color: '#3178c6' },
    { name: 'CSS',        percent: 1.2,  color: '#563d7c' },
    { name: 'HTML',       percent: 0.5,  color: '#e34c26' },
  ],
};

// ─── Real contribution grid — mirrors moses-25's actual GitHub pattern ─────────
// Pattern: heavy Jun–Jul, near-silent Aug–Mar, burst Apr–May (151 contributions)
// GitHub green color levels: 0=empty, 1=light, 2=medium, 3=dark, 4=brightest
const GRID: number[][] = [
  [1,2,1,0,0,4,1],[0,1,0,2,4,0,0],[0,1,2,0,0,2,4],[4,2,4,1,3,2,1], // Jun
  [0,0,0,2,1,0,4],[1,0,2,1,2,0,1],[2,1,2,2,1,1,1],[2,3,2,0,1,1,0], // Jul
  [0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0], // Aug
  [0,0,0,1,0,0,0],[0,1,0,0,0,0,0],[0,0,0,0,0,0,0],[1,0,0,0,0,0,0], // Sep
  [0,1,0,0,0,0,0],[0,0,1,1,1,0,0],[0,0,0,0,0,0,0],[0,0,0,0,1,0,0], // Oct
  [0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,3,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0], // Nov
  [0,1,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,1,0,0,0,0], // Dec
  [0,3,0,0,0,0,0],[0,0,0,0,2,0,0],[2,0,1,0,0,0,0],[0,0,0,0,0,0,0], // Jan
  [0,0,0,0,0,0,0],[0,0,0,0,0,2,1],[0,0,0,0,0,1,0],[0,0,2,0,0,0,0], // Feb
  [0,0,0,0,0,1,0],[0,0,0,3,0,0,2],[0,0,0,1,0,2,0],[0,1,0,0,0,0,0],[0,0,0,0,0,0,0], // Mar
  [2,0,2,0,1,2,0],[3,2,2,3,2,0,0],[0,1,3,0,1,1,0],[0,2,0,2,2,0,1], // Apr
  [0,2,0,1,0,4,2],[0,2,3,0,4,0,2],[1,0,1,0,2,0,0],[2,2,0,0,2,2,0],[0,2,2,1,0,0,0],[1,0,2,1,1,0,1], // May
];

// Month label positions — maps week index to label (shown at start of each month)
const MONTH_LABELS: { label: string; week: number }[] = [
  { label: 'Jun', week: 0  },
  { label: 'Jul', week: 4  },
  { label: 'Aug', week: 8  },
  { label: 'Sep', week: 13 },
  { label: 'Oct', week: 17 },
  { label: 'Nov', week: 21 },
  { label: 'Dec', week: 26 },
  { label: 'Jan', week: 30 },
  { label: 'Feb', week: 34 },
  { label: 'Mar', week: 38 },
  { label: 'Apr', week: 43 },
  { label: 'May', week: 47 },
];

// GitHub's exact green palette
const GH_COLORS: Record<number, string> = {
  0: '#161b22',  // empty — GitHub dark bg cell
  1: '#0e4429',  // level 1
  2: '#006d32',  // level 2
  3: '#26a641',  // level 3
  4: '#39d353',  // level 4 — brightest
};

const GH_BORDER: Record<number, string> = {
  0: '#21262d',
  1: '#196c2e',
  2: '#26a641',
  3: '#2ea043',
  4: '#56d364',
};

// Day labels — GitHub only shows Mon, Wed, Fri (indices 1, 3, 5 in Sun=0 system)
const DAY_LABELS: { label: string; index: number }[] = [
  { label: 'Mon', index: 1 },
  { label: 'Wed', index: 3 },
  { label: 'Fri', index: 5 },
];

const TOOLS: { category: string; items: string[] }[] = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Vite', 'HTML5', 'CSS3', 'Framer Motion'],
  },
  {
    category: 'Backend',
    items: ['Python', 'Flask', 'REST APIs', 'SQLAlchemy', 'JWT Auth', 'Resend'],
  },
  {
    category: 'Database',
    items: ['PostgreSQL', 'SQLite', 'SQL', 'Alembic'],
  },
  {
    category: 'Dev & Tools',
    items: ['Git', 'GitHub', 'Linux', 'VS Code', 'Postman', 'Vercel', 'Render'],
  },
  {
    category: 'Design',
    items: ['Figma', 'Glassmorphism', 'Responsive Design', 'Accessibility'],
  },
];

// ─── Contribution Grid Component ───────────────────────────────────────────────
const ContributionGrid: React.FC = () => {
  const CELL = 13;   // px — same as GitHub
  const GAP  = 3;    // px

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* Month labels row */}
      <div className="flex mb-1" style={{ paddingLeft: 28 }}>
        {Array.from({ length: GRID.length }).map((_, wi) => {
          const month = MONTH_LABELS.find((m) => m.week === wi);
          return (
            <div
              key={wi}
              style={{
                width: CELL + GAP,
                minWidth: CELL + GAP,
                fontSize: 11,
                color: '#8b949e',
                lineHeight: 1,
                whiteSpace: 'nowrap',
              }}
            >
              {month ? month.label : ''}
            </div>
          );
        })}
      </div>

      {/* Grid body */}
      <div className="flex" style={{ gap: GAP }}>
        {/* Day labels */}
        <div
          className="flex flex-col justify-between"
          style={{ marginRight: 4, paddingTop: 1 }}
        >
          {Array.from({ length: 7 }).map((_, di) => {
            const lbl = DAY_LABELS.find((d) => d.index === di);
            return (
              <div
                key={di}
                style={{
                  height: CELL,
                  marginBottom: di < 6 ? GAP : 0,
                  fontSize: 10,
                  color: '#8b949e',
                  lineHeight: `${CELL}px`,
                  width: 20,
                  textAlign: 'right',
                  paddingRight: 2,
                }}
              >
                {lbl ? lbl.label : ''}
              </div>
            );
          })}
        </div>

        {/* Week columns */}
        {GRID.map((week, wi) => (
          <div key={wi} className="flex flex-col" style={{ gap: GAP }}>
            {week.map((level, di) => (
              <div
                key={di}
                style={{
                  width: CELL,
                  height: CELL,
                  borderRadius: 2,
                  backgroundColor: GH_COLORS[level],
                  border: `1px solid ${GH_BORDER[level]}`,
                  transition: 'transform 120ms ease',
                  cursor: level > 0 ? 'default' : undefined,
                }}
                title={level > 0 ? `${level} contribution${level > 1 ? 's' : ''}` : 'No contributions'}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.25)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)';
                }}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Footer — Less / More legend */}
      <div className="flex items-center justify-between mt-3">
        <span style={{ fontSize: 11, color: '#8b949e' }}>
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#58a6ff', textDecoration: 'none' }}
            onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.textDecoration = 'underline')}
            onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.textDecoration = 'none')}
          >
            Learn how we count contributions
          </a>
        </span>
        <div className="flex items-center gap-1.5" style={{ fontSize: 11, color: '#8b949e' }}>
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
};

// ─── Animated Language Bar ─────────────────────────────────────────────────────
const LangBar: React.FC<{ percent: number; color: string; animate: boolean }> = ({
  percent, color, animate,
}) => (
  <div
    style={{
      position: 'relative',
      height: 6,
      borderRadius: 999,
      backgroundColor: '#21262d',
      overflow: 'hidden',
    }}
  >
    <div
      style={{
        position: 'absolute',
        top: 0, bottom: 0, left: 0,
        borderRadius: 999,
        backgroundColor: color,
        boxShadow: `0 0 6px ${color}99`,
        width: animate ? `${percent}%` : '0%',
        transition: 'width 1100ms cubic-bezier(0.2, 0.8, 0.3, 1)',
      }}
    />
  </div>
);

// ─── Main Component ────────────────────────────────────────────────────────────
const Skills: React.FC = () => {
  const [stats, setStats]     = useState<GitHubStats>(FALLBACK_STATS);
  const [animate, setAnimate] = useState(false);
  const [loading, setLoading] = useState(true);
  const sectionRef            = useRef<HTMLDivElement>(null);

  // Live GitHub REST fetch — silent fallback on rate limit
  useEffect(() => {
    const run = async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`),
        ]);
        if (!userRes.ok || !reposRes.ok) return;
        const user  = await userRes.json();
        const repos = await reposRes.json();
        if (!Array.isArray(repos)) return;

        const stars = repos.reduce((s: number, r: { stargazers_count: number }) => s + r.stargazers_count, 0);
        const forks = repos.reduce((s: number, r: { forks_count: number }) => s + r.forks_count, 0);

        const langCount: Record<string, number> = {};
        repos.forEach((r: { language: string | null }) => {
          if (r.language) langCount[r.language] = (langCount[r.language] || 0) + 1;
        });
        const total = Object.values(langCount).reduce((a, b) => a + b, 0);
        const LC: Record<string, string> = {
          JavaScript: '#f1e05a', Python: '#3572A5', TypeScript: '#3178c6',
          CSS: '#563d7c', HTML: '#e34c26', Shell: '#89e051',
        };
        const languages = Object.entries(langCount)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
          .map(([name, count]) => ({
            name,
            percent: Math.round((count / total) * 1000) / 10,
            color: LC[name] || '#8b949e',
          }));

        setStats({ public_repos: user.public_repos, followers: user.followers, following: user.following, stars, forks, languages });
      } catch { /* keep fallback */ }
      finally { setLoading(false); }
    };
    run();
  }, []);

  // Trigger bar animations on scroll
  useEffect(() => {
    if (!sectionRef.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setAnimate(true); },
      { threshold: 0.1 }
    );
    obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const statRows = [
    { label: 'Public Repos', value: stats.public_repos },
    { label: 'Total Stars',  value: stats.stars },
    { label: 'Total Forks',  value: stats.forks },
    { label: 'Followers',    value: stats.followers },
    { label: 'Following',    value: stats.following },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24"
      style={{ backgroundColor: '#0d1117', fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section heading ─────────────────────────────────────────────── */}
        <div className="mb-12">
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 36, fontWeight: 800, color: '#e6edf3', margin: 0 }}>
            SKILLS &amp; GITHUB ACTIVITY
          </h2>
        </div>

        {/* ── GitHub Activity heading ──────────────────────────────────────── */}
        <div className="flex items-center gap-2 mb-4">
          <svg viewBox="0 0 16 16" width="18" height="18" fill="#e6edf3" aria-hidden>
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
          </svg>
          <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 18, fontWeight: 700, color: '#e6edf3', margin: 0 }}>
            My GitHub Activity
          </h3>
        </div>

        {/* Contribution heatmap card */}
        <div
          className="mb-5 overflow-x-auto"
          style={{
            backgroundColor: '#161b22',
            border: '1px solid #30363d',
            borderRadius: 12,
            padding: '20px 24px',
          }}
        >
          {/* Contributions count */}
          <p style={{ fontSize: 13, color: '#8b949e', marginBottom: 16 }}>
            <span style={{ color: '#e6edf3', fontWeight: 600 }}>151 contributions</span> in the last year
          </p>
          <ContributionGrid />
        </div>

        {/* ── Stats + Languages — one row ──────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">

          {/* GitHub Stats */}
          <div
            style={{
              backgroundColor: '#161b22',
              border: '1px solid #30363d',
              borderRadius: 12,
              padding: '20px 24px',
            }}
          >
            <p
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 14,
                fontWeight: 700,
                color: '#3fb950',
                marginBottom: 16,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <svg viewBox="0 0 16 16" width="14" height="14" fill="#3fb950">
                <path d="M1.5 0h8.586a1.5 1.5 0 0 1 1.06.44l3.914 3.914A1.5 1.5 0 0 1 15.5 5.5v8a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-12A1.5 1.5 0 0 1 1.5 0zm0 1a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5V5.5L10.5 1H1.5z"/>
              </svg>
              GitHub Stats
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {statRows.map(({ label, value }) => (
                <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 14, color: '#8b949e' }}>{label}</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: '#e6edf3', fontVariantNumeric: 'tabular-nums' }}>
                    {loading ? (
                      <span style={{ display: 'inline-block', width: 20, height: 12, backgroundColor: '#21262d', borderRadius: 4 }} />
                    ) : value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Top Languages */}
          <div
            style={{
              backgroundColor: '#161b22',
              border: '1px solid #30363d',
              borderRadius: 12,
              padding: '20px 24px',
            }}
          >
            <p
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 14,
                fontWeight: 700,
                color: '#3fb950',
                marginBottom: 16,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              {/* code bracket icon — text only, no icon lib */}
              <span style={{ fontFamily: 'monospace', fontSize: 13 }}>&lt;/&gt;</span>
              Top Languages
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {stats.languages.map((lang) => (
                <div key={lang.name}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span
                        style={{
                          width: 10, height: 10,
                          borderRadius: '50%',
                          backgroundColor: lang.color,
                          display: 'inline-block',
                          flexShrink: 0,
                        }}
                      />
                      <span style={{ fontSize: 14, color: '#e6edf3' }}>{lang.name}</span>
                    </div>
                    <span style={{ fontSize: 12, color: '#8b949e', fontVariantNumeric: 'tabular-nums' }}>
                      {lang.percent}%
                    </span>
                  </div>
                  <LangBar percent={lang.percent} color={lang.color} animate={animate} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Tools I Use ──────────────────────────────────────────────────── */}
        <div className="mb-6">
          <p style={{ color: '#3fb950', fontSize: 13, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>
            Toolkit
          </p>
          <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 28, fontWeight: 800, color: '#e6edf3', marginBottom: 24 }}>
            Tools I Use
          </h3>
        </div>

        {/* Single card, tools split into columns by category */}
        <div
          style={{
            backgroundColor: '#161b22',
            border: '1px solid #30363d',
            borderRadius: 12,
            padding: '28px 32px',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
              gap: 32,
            }}
          >
            {TOOLS.map((group) => (
              <div key={group.category}>
                {/* Category heading */}
                <p
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: 12,
                    fontWeight: 700,
                    color: '#3fb950',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: 14,
                    borderBottom: '1px solid #21262d',
                    paddingBottom: 8,
                  }}
                >
                  {group.category}
                </p>
                {/* Items stacked vertically */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {group.items.map((tool) => (
                    <span
                      key={tool}
                      style={{
                        display: 'inline-block',
                        fontSize: 13,
                        color: '#c9d1d9',
                        padding: '4px 10px',
                        backgroundColor: '#21262d',
                        border: '1px solid #30363d',
                        borderRadius: 6,
                        cursor: 'default',
                        transition: 'border-color 150ms, color 150ms',
                        alignSelf: 'flex-start',
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLSpanElement;
                        el.style.borderColor = '#3fb950';
                        el.style.color = '#3fb950';
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLSpanElement;
                        el.style.borderColor = '#30363d';
                        el.style.color = '#c9d1d9';
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;