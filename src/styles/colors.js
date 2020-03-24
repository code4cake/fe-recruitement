// @format

export const colors = new Proxy(
  {
    // general color
    blue: '#3a5d9f',
    yellow: '#fdcc07',
    white: '#ffffff',
    grey: '#c1c8ca',

    // pokemon color types
    normalType: '#a8a77a',
    fireType: '#ee8130',
    waterType: '#6390f0',
    electricType: '#f7d02c',
    grassType: '#7ac74c',
    IceType: '#96d9d6',
    fightingType: '#c22e28',
    poisonType: '#a33ea1',
    groundType: '#e2bf65',
    flyingType: '#a98ff3',
    psychicType: '#f95587',
    bugType: '#a6b91a',
    rockType: '#b6a136',
    ghostType: '#735797',
    dragonType: '#6f35fc',
    darkType: '#705746',
    steelType: '#b7b7ce',
    fairyType: '#d685ad',
  },
  {
    get: function (obj, prop) {
      if (prop in obj) {
        return obj[prop]
      }
      console.warn(`colors.${prop} is not available`)
      return '#000'
    },
  },
)
