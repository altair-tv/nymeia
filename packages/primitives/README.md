# @nymeia/primitives

This repository contains values for color, sizing, typography, and other primitives for use with Nymeia, Altair's design system.

## Usage

Nymeia's primitives are exported as keys on the top-level export. `colors`, `sizes`, and `typography` are available:

```js
import { colors, sizes, typography } from '@nymeia/primitives'
```

Additionally, a `theme` is exported, which is a great way of sharing system styles with [Emotion][]. Pass the theme preset to Emotion's `ThemeProvider` component at the root of your application.

```jsx
import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { theme } from '@nymeia/primitives'

export default props =>
  <ThemeProvider theme={theme}>
    {props.children}
  </ThemeProvider>
```

For use with [Theme UI][], import the `ThemeProvider` from `theme-ui` instead.

```jsx
import { ThemeProvider } from 'theme-ui'
```

## Customizing

The base theme object can be customized by using either `deepmerge` or `lodash.merge` to deeply merge objects.

```js
import merge from 'lodash.merge'
import { theme } from '@nymeia/primitives'

export default merge(nymeia, {
  colors: {
    // custom primary color
    primary: 'avocado',
  }
})
```

## License

[MIT](./LICENSE.md) &copy; [Altair](https://altair.tv/)

[emotion]: https://emotion.sh
[theme ui]: https://theme-ui.com
