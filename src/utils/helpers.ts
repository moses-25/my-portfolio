// src/utils/helpers.ts
import { EChartsOption } from 'echarts';

export const generateChartOptions = (darkMode: boolean): EChartsOption => ({
  radar: {
    indicator: [
      { name: 'JavaScript', max: 100 },
      { name: 'React', max: 100 },
      { name: 'Python', max: 100 },
      { name: 'HTML/CSS', max: 100 },
      { name: 'Git', max: 100 },
      { name: 'SQL', max: 100 }
    ],
    radius: '65%',
    splitNumber: 4,
    axisName: {
      color: darkMode ? '#e2e8f0' : '#334155',
      fontSize: 12,
      fontWeight: 500
    },
    splitArea: {
      areaStyle: {
        color: darkMode ? 
          ['rgba(50, 50, 50, 0.3)', 'rgba(50, 50, 50, 0.2)', 'rgba(50, 50, 50, 0.1)', 'rgba(50, 50, 50, 0.05)'] : 
          ['rgba(250, 250, 250, 0.5)', 'rgba(240, 240, 240, 0.5)', 'rgba(230, 230, 230, 0.5)', 'rgba(220, 220, 220, 0.5)']
      }
    },
    axisLine: {
      lineStyle: {
        color: darkMode ? 'rgba(200, 200, 200, 0.3)' : 'rgba(100, 100, 100, 0.3)'
      }
    },
    splitLine: {
      lineStyle: {
        color: darkMode ? 'rgba(200, 200, 200, 0.3)' : 'rgba(100, 100, 100, 0.3)'
      }
    }
  },
  series: [{
    name: 'Skills',
    type: 'radar',
    data: [
      {
        value: [85, 90, 80, 95, 85, 75],
        name: 'Skill Level',
        areaStyle: {
          color: darkMode ? 'rgba(99, 102, 241, 0.6)' : 'rgba(99, 102, 241, 0.4)'
        },
        lineStyle: {
          color: darkMode ? '#818cf8' : '#6366f1',
          width: 2
        },
        itemStyle: {
          color: darkMode ? '#818cf8' : '#6366f1'
        }
      }
    ]
  }],
  animation: false
});

export const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};