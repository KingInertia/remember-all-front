import type { Theme } from '@blocknote/mantine';
import { lightDefaultTheme } from '@blocknote/mantine';

export const lightRedTheme = {
  colors: {
    editor: {
      //  #E8FDF9"
      text: '#F9ECCC',
      background: 'transparent',
    },
    menu: {
      text: '#ffffff',
      background: '#9b0000',
    },
    tooltip: {
      text: '#ffffff',
      background: '#b00000',
    },
    hovered: {
      text: '#ffffff',
      background: '#b00000',
    },
    selected: {
      text: '#ffffff',
      background: '#c50000',
    },
    disabled: {
      text: '#9b0000',
      background: '#7d0000',
    },
    shadow: '#640000',
    border: '#870000',
    sideMenu: '#bababa',
    highlights: lightDefaultTheme.colors!.highlights,
  },
  borderRadius: 4,
  fontFamily: 'Helvetica Neue, sans-serif',
} satisfies Theme;
