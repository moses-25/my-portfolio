import { motion } from 'framer-motion';

interface ToolGroup {
  category: string;
  items: string[];
}

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
    backgroundColor: '#060b14',
    fontFamily: "'DM Sans', sans-serif",
    minHeight: '100vh',
    padding: '80px 0',
  } as const,
  container: {
    maxWidth: 960, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1,
  } as const,
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
            href={`https://github.com/moses-25`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#58a6ff', textDecoration: 'none' }}
            onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
            onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
          >
            @moses-25 on GitHub
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
  return (
    <section id="skills" style={s.section}>
      <div style={{
        position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: 'radial-gradient(#1c2128 1px, transparent 1px)',
        backgroundSize: '28px 28px', opacity: 0.5,
      }} />

      <div style={s.container}>
        <div style={{ marginBottom: 48 }}>
          <h2 style={s.heading}>Skills</h2>
          <div style={s.gradientRule} />
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

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 20 }}
        >
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
