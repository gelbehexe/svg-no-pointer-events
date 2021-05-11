const plugin = require('tailwindcss/plugin')

// noinspection JSUnresolvedFunction
module.exports = plugin.withOptions(
    ({} = {}) => {
        return function ({ addBase }) {
            addBase({
                'svg': {
                    'pointer-events': 'none',
                }
            })
        }
    })
