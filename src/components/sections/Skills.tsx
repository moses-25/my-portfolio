import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface GitHubStats {
  public_repos: number;
  followers: number;
  following: number;
  stars: number;
  forks: number;
  languages: { name: string; percent: number; color: string }[];
}

interface ToolGroup {
  category: string;
  items: string[];
}

const GITHUB_USERNAME = 'moses-25';

const FALLBACK_STATS: GitHubStats = {
  public_repos: 91, followers: 6, following: 13, stars: 5, forks: 3,
  languages: [
    { name: 'JavaScript', percent: 56.8, color: '#f1e05a' },
    { name: 'Python', percent: 32.1, color: '#3572A5' },
    { name: 'TypeScript', percent: 9.3, color: '#3178c6' },
    { name: 'CSS', percent: 1.2, color: '#563d7c' },
    { name: 'HTML', percent: 0.5, color: '#e34c26' },
  ],
};

const GRID: number[][] = [
  [1,2,1,0,0,4,1],[0,1,0,2,4,0,0],[0,1,2,0,0,2,4],[4,2,4,1,3,2,1],
  [0,0,0,2,1,0,4],[1,0,2,1,2,0,1],[2,1,2,2,1,1,1],[2,3,2,0,1,1,0],
  [0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],
  [0,0,0,1,0,0,0],[0,1,0,0,0,0,0],[0,0,0,0,0,0,0],[1,0,0,0,0,0,0],
  [0,1,0,0,0,0,0],[0,0,1,1,1,0,0],[0,0,0,0,0,0,0],[0,0,0,0,1,0,0],
  [0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,3,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],
  [0,1,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,1,0,0,0,0],
  [0,3,0,0,0,0,0],[0,0,0,0,2,0,0],[2,0,1,0,0,0,0],[0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],[0,0,0,0,0,2,1],[0,0,0,0,0,1,0],[0,0,2,0,0,0,0],
  [0,0,0,0,0,1,0],[0,0,0,3,0,0,2],[0,0,0,1,0,2,0],[0,1,0,0,0,0,0],[0,0,0,0,0,0,0],
  [2,0,2,0,1,2,0],[3,2,2,3,2,0,0],[0,1,3,0,1,1,0],[0,2,0,2,2,0,1],
  [0,2,0,1,0,4,2],[0,2,3,0,4,0,2],[1,0,1,0,2,0,0],[2,2,0,0,2,2,0],[0,2,2,1,0,0,0],[1,0,2,1,1,0,1],
];

const MONTH_LABELS: { label: string; week: number }[] = [
  { label: 'Jun', week: 0 }, { label: 'Jul', week: 4 }, { label: 'Aug', week: 8 },
  { label: 'Sep', week: 13 }, { label: 'Oct', week: 17 }, { label: 'Nov', week: 21 },
  { label: 'Dec', week: 26 }, { label: 'Jan', week: 30 }, { label: 'Feb', week: 34 },
  { label: 'Mar', week: 38 }, { label: 'Apr', week: 43 }, { label: 'May', week: 47 },
];

const GH_COLORS: Record<number, string> = {
  0: '#161b22', 1: '#0e4429', 2: '#006d32', 3: '#26a641', 4: '#39d353',
};

const GH_BORDER: Record<number, string> = {
  0: '#21262d', 1: '#196c2e', 2: '#26a641', 3: '#2ea043', 4: '#56d364',
};

const DAY_LABELS: { label: string; index: number }[] = [
  { label: 'Mon', index: 1 }, { label: 'Wed', index: 3 }, { label: 'Fri', index: 5 },
];

const TOOLS: ToolGroup[] = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3'] },
  { category: 'Backend', items: ['Python', 'Flask', 'REST APIs', 'SQLAlchemy', 'JWT Auth', 'Resend'] },
  { category: 'Database', items: ['PostgreSQL', 'SQLite'] },
  { category: 'Dev & Tools', items: ['Git', 'GitHub', 'Linux', 'Postman', 'Vercel', 'Render'] },
  { category: 'Design', items: ['Figma', 'Canva'] },
];

const s = {
  section: {
    backgroundColor: '#080c10',
    fontFamily: "'DM Sans', sans-serif",
    minHeight: '100vh',
    padding: '80px 0',
  } as const,
  container: {
    maxWidth: 960, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1,
  } as const,
  dotBg: {
    position: 'fixed' as const, inset: 0, pointerEvents: 'none' as const, zIndex: 0,
    backgroundImage: 'radial-gradient(#1c2128 1px, transparent 1px)',
    backgroundSize: '28px 28px',
    opacity: 0.5,
  },
  card: {
    backgroundColor: '#0d1117',
    border: '1px solid #21262d',
    borderRadius: 14,
    padding: '20px 24px',
    position: 'relative' as const,
    overflow: 'hidden',
  },
  monoLabel: {
    fontFamily: 'monospace', fontSize: 12, letterSpacing: '0.12em', marginBottom: 10, opacity: 0.8,
  } as const,
  heading: {
    fontFamily: "'Syne', sans-serif", fontSize: 38, fontWeight: 800, margin: 0,
    background: 'linear-gradient(90deg, #e6edf3 0%, #58a6ff 50%, #bc8cff 100%)',
    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
  } as const,
  gradientRule: {
    height: 1, marginTop: 16,
    background: 'linear-gradient(90deg, #58a6ff44, #bc8cff44, transparent)',
  } as const,
  cardHeader: {
    fontFamily: "'Syne', sans-serif", fontSize: 13, fontWeight: 700, marginBottom: 18,
    display: 'flex', alignItems: 'center', gap: 7, letterSpacing: '0.06em', textTransform: 'uppercase' as const,
  },
  statRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' } as const,
  statLabel: { fontSize: 13, color: '#484f58' } as const,
  statValue: { fontSize: 13, fontWeight: 600, color: '#c9d1d9', fontVariantNumeric: 'tabular-nums' as const },
  toolCard: {
    backgroundColor: '#0d1117',
    border: '1px solid #21262d',
    borderRadius: 12,
    padding: '18px 20px',
    position: 'relative' as const,
    overflow: 'hidden',
  },
  toolCategory: {
    fontFamily: "'Syne', sans-serif", fontSize: 11, fontWeight: 700, color: '#bc8cff',
    textTransform: 'uppercase' as const, letterSpacing: '0.1em', marginBottom: 14,
    paddingBottom: 8, borderBottom: '1px solid #1c2128',
  } as const,
  toolPill: {
    display: 'inline-block', fontSize: 11, color: '#8b949e', padding: '3px 9px',
    backgroundColor: '#080c10', border: '1px solid #21262d', borderRadius: 5,
    cursor: 'default', fontFamily: 'monospace', letterSpacing: '0.02em', userSelect: 'none' as const,
  },
};

const langColors: Record<string, string> = {
  JavaScript: '#f1e05a', Python: '#3572A5', TypeScript: '#3178c6',
  CSS: '#563d7c', HTML: '#e34c26', Shell: '#89e051',
};

function ContributionGrid() {
  const CELL = 13;
  const GAP = 3;
  const cellStyle = (level: number): React.CSSProperties => ({
    width: CELL, height: CELL, borderRadius: 3,
    backgroundColor: GH_COLORS[level],
    border: `1px solid ${GH_BORDER[level]}`,
    transition: 'transform 120ms ease, box-shadow 120ms ease',
  });

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <div className="flex mb-1" style={{ paddingLeft: 28 }}>
        {Array.from({ length: GRID.length }).map((_, wi) => {
          const month = MONTH_LABELS.find((m) => m.week === wi);
          return (
            <div key={wi} style={{ width: CELL + GAP, minWidth: CELL + GAP, fontSize: 11, color: '#484f58', lineHeight: 1, whiteSpace: 'nowrap' }}>
              {month?.label ?? ''}
            </div>
          );
        })}
      </div>

      <div className="flex" style={{ gap: GAP }}>
        <div className="flex flex-col justify-between" style={{ marginRight: 4, paddingTop: 1 }}>
          {Array.from({ length: 7 }).map((_, di) => {
            const lbl = DAY_LABELS.find((d) => d.index === di);
            return (
              <div key={di} style={{ height: CELL, marginBottom: di < 6 ? GAP : 0, fontSize: 10, color: '#484f58', lineHeight: `${CELL}px`, width: 20, textAlign: 'right', paddingRight: 2 }}>
                {lbl?.label ?? ''}
              </div>
            );
          })}
        </div>

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

      <div className="flex items-center justify-between mt-3">
        <span style={{ fontSize: 11, color: '#484f58' }}>
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#58a6ff', textDecoration: 'none' }}
            onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
            onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
          >
            @{GITHUB_USERNAME} on GitHub
          </a>
        </span>
        <div className="flex items-center gap-1.5" style={{ fontSize: 11, color: '#484f58' }}>
          <span>Less</span>
          {[0, 1, 2, 3, 4].map((l) => (
            <div key={l} style={{ width: 11, height: 11, borderRadius: 2, backgroundColor: GH_COLORS[l], border: `1px solid ${GH_BORDER[l]}` }} />
          ))}
          <span>More</span>
        </div>
      </div>
    </div>
  );
}

function LangBar({ percent, color, animate }: { percent: number; color: string; animate: boolean }) {
  return (
    <div style={{ position: 'relative', height: 5, borderRadius: 999, backgroundColor: '#161b22', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', top: 0, bottom: 0, left: 0, borderRadius: 999,
        backgroundColor: color, boxShadow: `0 0 8px ${color}88`,
        width: animate ? `${percent}%` : '0%',
        transition: 'width 1100ms cubic-bezier(0.2, 0.8, 0.3, 1)',
      }} />
    </div>
  );
}

function Skeleton({ width = 28 }: { width?: number | string }) {
  return (
    <span style={{
      display: 'inline-block', width, height: 12,
      backgroundColor: '#21262d', borderRadius: 4,
      animation: 'pulse 1.5s ease-in-out infinite',
    }} />
  );
}

function GitHubIcon({ size = 17, fill = '#c9d1d9' }: { size?: number; fill?: string }) {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} fill={fill} aria-hidden>
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
    </svg>
  );
}

function StatCard({ rows, loading }: { rows: { label: string; value: number }[]; loading: boolean }) {
  return (
    <div style={{
      ...s.card,
      background: 'linear-gradient(135deg, #0d1117 0%, #0d1117 85%, #3fb95008 100%)',
      boxShadow: '0 0 0 1px #21262d, 0 4px 24px #00000044',
    }}>
      <p style={{ ...s.cardHeader, color: '#3fb950' }}>
        <svg viewBox="0 0 16 16" width="13" height="13" fill="#3fb950">
          <path d="M1.5 0h8.586a1.5 1.5 0 0 1 1.06.44l3.914 3.914A1.5 1.5 0 0 1 15.5 5.5v8a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-12A1.5 1.5 0 0 1 1.5 0zm0 1a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5V5.5L10.5 1H1.5z"/>
        </svg>
        GitHub Stats
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
        {rows.map(({ label, value }) => (
          <div key={label} style={s.statRow}>
            <span style={s.statLabel}>{label}</span>
            <span style={s.statValue}>{loading ? <Skeleton /> : value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function LanguagesCard({ languages, animate }: { languages: GitHubStats['languages']; animate: boolean }) {
  return (
    <div style={{
      ...s.card,
      background: 'linear-gradient(135deg, #0d1117 0%, #0d1117 85%, #58a6ff08 100%)',
      boxShadow: '0 0 0 1px #21262d, 0 4px 24px #00000044',
    }}>
      <p style={{ ...s.cardHeader, color: '#58a6ff' }}>
        <span style={{ fontFamily: 'monospace', fontSize: 13, opacity: 0.9 }}>&lt;/&gt;</span>
        Top Languages
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {languages.map((lang) => (
          <div key={lang.name}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 7 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: lang.color, display: 'inline-block', flexShrink: 0, boxShadow: `0 0 6px ${lang.color}99` }} />
                <span style={{ fontSize: 13, color: '#c9d1d9' }}>{lang.name}</span>
              </div>
              <span style={{ fontSize: 12, color: '#484f58', fontVariantNumeric: 'tabular-nums' }}>{lang.percent}%</span>
            </div>
            <LangBar percent={lang.percent} color={lang.color} animate={animate} />
          </div>
        ))}
      </div>
    </div>
  );
}

function ToolCard({ group, index }: { group: ToolGroup; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.2, 0.8, 0.3, 1] }}
      style={s.toolCard}
      whileHover={{ borderColor: '#bc8cff33', boxShadow: '0 0 20px #bc8cff0d' }}
    >
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(90deg, transparent, #bc8cff44, transparent)',
      }} />

      <p style={s.toolCategory}>{group.category}</p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {group.items.map((tool, ti) => (
          <motion.span
            key={tool}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.08 + ti * 0.04 + 0.15 }}
            whileHover={{
              scale: 1.06, color: '#58a6ff', borderColor: '#58a6ff55',
              boxShadow: '0 0 10px #58a6ff1a',
            }}
            style={s.toolPill}
          >
            {tool}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

function SkillsSection() {
  const [stats, setStats] = useState<GitHubStats>(FALLBACK_STATS);
  const [animate, setAnimate] = useState(false);
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const fetchGithub = async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`),
        ]);
        if (!userRes.ok || !reposRes.ok) return;
        const user = await userRes.json();
        const repos = await reposRes.json();
        if (!Array.isArray(repos)) return;

        const stars = repos.reduce((s: number, r: { stargazers_count: number }) => s + r.stargazers_count, 0);
        const forks = repos.reduce((s: number, r: { forks_count: number }) => s + r.forks_count, 0);

        const langCount: Record<string, number> = {};
        repos.forEach((r: { language: string | null }) => {
          if (r.language) langCount[r.language] = (langCount[r.language] || 0) + 1;
        });

        const total = Object.values(langCount).reduce((a, b) => a + b, 0);
        const languages = Object.entries(langCount)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
          .map(([name, count]) => ({
            name,
            percent: Math.round((count / total) * 1000) / 10,
            color: langColors[name] || '#8b949e',
          }));

        setStats({
          public_repos: user.public_repos, followers: user.followers,
          following: user.following, stars, forks, languages,
        });
      } catch {
        // keep fallback
      } finally {
        setLoading(false);
      }
    };
    fetchGithub();
  }, []);

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
    { label: 'Total Stars', value: stats.stars },
    { label: 'Total Forks', value: stats.forks },
    { label: 'Followers', value: stats.followers },
    { label: 'Following', value: stats.following },
  ];

  return (
    <section id="skills" ref={sectionRef} style={s.section}>
      <div style={{
        position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: 'radial-gradient(#1c2128 1px, transparent 1px)',
        backgroundSize: '28px 28px', opacity: 0.5,
      }} />

      <div style={s.container}>
        <div style={{ marginBottom: 48 }}>
          <p style={{ ...s.monoLabel, color: '#58a6ff' }}>
            // skills &amp; activity
          </p>
          <h2 style={s.heading}>Skills &amp; GitHub Activity</h2>
          <div style={s.gradientRule} />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
          <GitHubIcon />
          <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 16, fontWeight: 700, color: '#c9d1d9', margin: 0 }}>
            My GitHub Activity
          </h3>
        </div>

        <div style={{
          ...s.card, marginBottom: 16, overflowX: 'auto',
          background: 'linear-gradient(135deg, #0d1117 0%, #0d1117 80%, #58a6ff08 100%)',
          boxShadow: '0 0 0 1px #21262d, 0 4px 24px #00000044',
        }}>
          <p style={{ fontSize: 13, color: '#484f58', marginBottom: 16 }}>
            <span style={{ color: '#e6edf3', fontWeight: 600 }}>151 contributions</span>
            <span> in the last year</span>
          </p>
          <ContributionGrid />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginBottom: 48 }}>
          <StatCard rows={statRows} loading={loading} />
          <LanguagesCard languages={stats.languages} animate={animate} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 20 }}
        >
          <p style={{ ...s.monoLabel, color: '#bc8cff' }}>
            // tech stack
          </p>
          <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 26, fontWeight: 800, color: '#e6edf3', margin: 0 }}>
            Tools I Use
          </h3>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))', gap: 16 }}>
          {TOOLS.map((group, gi) => (
            <ToolCard key={group.category} group={group} index={gi} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
