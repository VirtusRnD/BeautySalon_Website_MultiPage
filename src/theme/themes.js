
export const themes = {
  ivoryEspresso: {
    name: 'Ivory & Espresso',
    colors: {
      background: '#fbf9f5',
      surface: '#ffffff',
      primary: '#d68ca3',
      primaryHover: '#c47890',
      secondary: '#211915',
      text: '#211915',
      mutedText: '#726760',
      accent: '#d68ca3',
      border: 'rgba(33, 25, 21, 0.08)',
      inputBg: '#f4f0e8',
      shadowLight: 'rgba(255, 255, 255, 0.9)',
      shadowDark: 'rgba(33, 25, 21, 0.12)'
    }
  },
  midnightRose: {
    name: 'Midnight Rose',
    colors: {
      background: '#1a1418',
      surface: '#241c22',
      primary: '#e098ae',
      primaryHover: '#cc8197',
      secondary: '#120d10',
      text: '#f7f2f5',
      mutedText: '#b3a5ad',
      accent: '#e098ae',
      border: 'rgba(247, 242, 245, 0.1)',
      inputBg: '#2d232b',
      shadowLight: 'rgba(255, 255, 255, 0.03)',
      shadowDark: 'rgba(0, 0, 0, 0.5)'
    }
  },
  champagneGold: {
    name: 'Champagne Gold',
    colors: {
      background: '#fcfaf7',
      surface: '#ffffff',
      primary: '#c5a059',
      primaryHover: '#b08d48',
      secondary: '#2a241e',
      text: '#2a241e',
      mutedText: '#786f66',
      accent: '#c5a059',
      border: 'rgba(197, 160, 89, 0.15)',
      inputBg: '#f5f0e6',
      shadowLight: 'rgba(255, 255, 255, 0.9)',
      shadowDark: 'rgba(42, 36, 30, 0.1)'
    }
  },
  sageEarth: {
    name: 'Sage & Earth',
    colors: {
      background: '#f4f6f4',
      surface: '#ffffff',
      primary: '#7a9a83',
      primaryHover: '#66846f',
      secondary: '#222e25',
      text: '#222e25',
      mutedText: '#68756b',
      accent: '#7a9a83',
      border: 'rgba(34, 46, 37, 0.08)',
      inputBg: '#e8ebe8',
      shadowLight: 'rgba(255, 255, 255, 0.9)',
      shadowDark: 'rgba(34, 46, 37, 0.1)'
    }
  },
  dustyLavender: {
    name: 'Dusty Lavender',
    colors: {
      background: '#f8f6f9',
      surface: '#ffffff',
      primary: '#9b82a6',
      primaryHover: '#876e92',
      secondary: '#261b2b',
      text: '#261b2b',
      mutedText: '#706375',
      accent: '#9b82a6',
      border: 'rgba(38, 27, 43, 0.08)',
      inputBg: '#f0ebf2',
      shadowLight: 'rgba(255, 255, 255, 0.9)',
      shadowDark: 'rgba(38, 27, 43, 0.12)'
    }
  }
};

export const activeThemeKey = 'ivoryEspresso';

export const getActiveTheme = () => themes[activeThemeKey] || themes.ivoryEspresso;

export const THEMES = themes;
export default themes;