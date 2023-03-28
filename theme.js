const THEME = {
    LavenderAroma: ['#f4f1f2', '#c0a9ba', '#93a7ae', '#65776a'],
    SereneSkies: ['#fbdfc2', '#ffbc99', '#7d8d95', '#334548'],
    OutdoorYoga: ['#c3c8d4', '#738a6e', '#2a3e3e', '#ce5661'],
    AlluringApothecary: ['#ffd4af', '#e49857', '#89896e', '#732d1e'],
    WellnessSpa: ['#f8f5ea', '#b9cdc2', '#e69763', '#1d3128'],
    VibrantBowl: ['#f7efe9', '#dfd36a', '#e0475b', '#192e03'],
    StarryBlue: ['#f2ece7', '#647392', '#9e496d', '#2c262d'],
    ContrastingCitrus: ['#fbe6b2', '#ffa102', '#b2dee4', '#2f515c'],
    RichReds: ['#f9d2b9', '#d6a039', '#c44f5b', '#531412'],
    FarmersMarket: ['#f9f6ee', '#feaa00', '#788403', '#332528'],
    GriddedWork: ['#f5f2ed', '#ffbfb1', '#3e5b5d', '#2f3761'],
    ColorfulAesthetic: ['#f0eff4', '#e9ca9a', '#8ea9d4', '#f06659'],
    PrettyInPink: ['#f4ebe9', '#dc8ea4', '#fddd8a', '#303a42'],
    CoralGreenery: ['#cdcada', '#da6745', '#5a6133', '#2f2f1f'],
    SimplisticBeauty: ['#e8edeb', '#e19e50', '#8ebcb8', '#2c3e4e'],
    // CoralGreenery: ['1cdcada', '1da6745', '15a6133', '12f2f1f'],
    // CoralGreenery: ['1cdcada', '1da6745', '15a6133', '12f2f1f'],
    // CoralGreenery: ['1cdcada', '1da6745', '15a6133', '12f2f1f'],
    // CoralGreenery: ['1cdcada', '1da6745', '15a6133', '12f2f1f'],
    // CoralGreenery: ['1cdcada', '1da6745', '15a6133', '12f2f1f'],
    // CoralGreenery: ['1cdcada', '1da6745', '15a6133', '12f2f1f'],
    // CoralGreenery: ['1cdcada', '1da6745', '15a6133', '12f2f1f'],
    // CoralGreenery: ['1cdcada', '1da6745', '15a6133', '12f2f1f'],
    // CoralGreenery: ['1cdcada', '1da6745', '15a6133', '12f2f1f'],
    // CoralGreenery: ['1cdcada', '1da6745', '15a6133', '12f2f1f'],
    // CoralGreenery: ['1cdcada', '1da6745', '15a6133', '12f2f1f'],
    // CoralGreenery: ['1cdcada', '1da6745', '15a6133', '12f2f1f'],
    // CoralGreenery: ['1cdcada', '1da6745', '15a6133', '12f2f1f'],
    // CoralGreenery: ['1cdcada', '1da6745', '15a6133', '12f2f1f'],
};

Object.entries(THEME).forEach(([name, colors], index) => {
    THEME[`theme${index + 1}`] = colors;
})

console.log(THEME);

module.exports = THEME;