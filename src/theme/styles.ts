export const styles = {
  global: ({ colorMode }) => ({
    body: {
      bgColor: colorMode === 'light' ? 'white' : 'black.100',
      color: colorMode === 'light' ? 'gray.800' : 'gray.100'
    }
  })
}
