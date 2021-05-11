# SVG No Breakpoints

It simply disables pointer events for svg tag in html since they are disturbing
when catching click away events


## Installation

Install the plugin from npm:

```shell
# Using npm
npm install @gelbehexe/svg-no-pointer-events

# Using Yarn
yarn add @gelbehexe/svg-no-pointer-events
```

Then add the plugin to your tailwind.config.js file:

```javascript
// tailwind.config.js
module.exports = {
  plugins: [
    // ...
    require('@gelbehexe/svg-no-pointer-events'),
    // ...
  ],
}
```

## Generated css

```css
svg {
  pointer-events: none
}
```
