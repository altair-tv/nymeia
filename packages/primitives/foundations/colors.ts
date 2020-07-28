export interface ColorHues {
  1: string
  2: string
  3: string
  4: string
  5: string
  6: string
  7: string
  8: string
}

export type Colors = typeof colors

const colors = {
  transparent: 'transparent',
  current: 'currentColor',
  white: '#fff',
  black: {
    1: '#0d0a10',
    2: '#242326',
    3: '#1b1c33',
    4: '#2d2b33',
  },

  whiteAlpha: {
    1: 'rgba(255, 255, 255, 0.06)',
    2: 'rgba(255, 255, 255, 0.08)',
    3: 'rgba(255, 255, 255, 0.16)',
    4: 'rgba(255, 255, 255, 0.24)',
    5: 'rgba(255, 255, 255, 0.36)',
    6: 'rgba(255, 255, 255, 0.48)',
    7: 'rgba(255, 255, 255, 0.64)',
    8: 'rgba(255, 255, 255, 0.80)',
  },

  blackAlpha: {
    1: 'rgba(13, 10, 16, 0.06)',
    2: 'rgba(13, 10, 16, 0.08)',
    3: 'rgba(13, 10, 16, 0.16)',
    4: 'rgba(13, 10, 16, 0.24)',
    5: 'rgba(13, 10, 16, 0.36)',
    6: 'rgba(13, 10, 16, 0.48)',
    7: 'rgba(13, 10, 16, 0.64)',
    8: 'rgba(13, 10, 16, 0.80)',
  },

  red: {
    1: '#fcbeb9',
    2: '#ff8e85',
    3: '#ea534d',
    4: '#ff2207',
    5: '#d30a03',
    6: '#b5130c',
    7: '#910909',
    8: '#630704',
  },

  orange: {
    1: '#ffc08c',
    2: '#ffc239',
    3: '#f7a52d',
    4: '#ff8105',
    5: '#e2730e',
    6: '#c9620c',
    7: '#a95501',
    8: '#522919',
  },

  yellow: {
    1: '#fff4c5',
    2: '#ffed93',
    3: '#ffea6c',
    4: '#fcea0e',
    5: '#f7d633',
    6: '#efb715',
    7: '#bf8436',
    8: '#664212',
  },

  green: {
    1: '#c6ffa1',
    2: '#94f953',
    3: '#5be058',
    4: '#66cc37',
    5: '#5fad37',
    6: '#4c8624',
    7: '#30660f',
    8: '#1b3509',
  },

  turquoise: {
    1: '#a9ffee',
    2: '#80f7e0',
    3: '#5aefd2',
    4: '#34d6b7',
    5: '#2cb59b',
    6: '#16938a',
    7: '#117770',
    8: '#0c5151',
  },

  blue: {
    1: '#9ff4ff',
    2: '#43dcff',
    3: '#20acf9',
    4: '#266cf9',
    5: '#0f66bc',
    6: '#094baa',
    7: '#0d407a',
    8: '#0b274a',
  },

  purple: {
    1: '#bcb3ff',
    2: '#8a76ff',
    3: '#7943ef',
    4: '#652ad8',
    5: '#4f2ba5',
    6: '#4b298c',
    7: '#32196d',
    8: '#2a134f',
  },

  pink: {
    1: '#ffbffa',
    2: '#ff8dea',
    3: '#fe5ee8',
    4: '#ea2fc6',
    5: '#c41797',
    6: '#a01f84',
    7: '#821874',
    8: '#590c43',
  },

  gray: {
    1: '#f7f7f7',
    2: '#eaf0f4',
    3: '#ededed',
    4: '#dbdbdb',
    5: '#c1c1c1',
    6: '#868686',
    7: '#4f4f4f',
    8: '#2d2d2d',
  },
}

export default colors
