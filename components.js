const THEME = require('./theme');
// const { getActualWidthOfChars } = require('./uilt');

const SVG_VERSION = 1.1;
const SVG_XMLNS = 'http://www.w3.org/2000/svg';

module.exports = {
    default({ size = 30, theme }) {
        const [c1, c2, c3, c4] = THEME[theme] || THEME.theme1;
        return `<svg viewBox="0 0 1024 1024" version="${SVG_VERSION}" xmlns="${SVG_XMLNS}" width="${size}" height="${size}">
            <path d="M936 88.48v848H88v-848h848m8-8H80v864h864v-864z" fill="${c1}"></path>
            <path d="M896 128.48v768H128v-768h768m8-8H120v784h784v-784z" fill="${c2}"></path>
            <path d="M93.12 92h840v840h-840z" fill="${c3}"></path>
            <path d="M921.12 104v816h-816V104h816m24-24h-864v864h864V80z" fill="#333333"></path>
            <path d="M823.2 512a310.08 310.08 0 1 1-310.08-310.16A310.08 310.08 0 0 1 823.2 512z" fill="${c4}"></path>
            <path d="M513.12 834.08A322.08 322.08 0 1 1 835.2 512a322.48 322.48 0 0 1-322.08 322.08z m0-620.16A298.08 298.08 0 1 0 811.2 512a298.4 298.4 0 0 0-298.08-298.16z" fill="#333333"></path>
            <path d="M481.36 511.2l-74.88-74.88 30.96-30.96L512 480l80-80 32.48 32.48-80 80 74.88 74.88-30.96 30.96L513.84 544l-80 80-32.48-32.48z"></path>
        </svg>`;
    },

    label({ size = 20, theme, ...texts }) {
        const [c1, c2, c3, c4] = THEME[theme] || THEME.theme1;

        // 设置样式
        // const padding = size * 0.2;
        // const margin = size + 0.5;
        // const fontSize = size * 0.6;
        // const fontFamily = 'Verdana,Geneva,DejaVu Sans,sans-serif';

        // // 计算宽度位置信息
        // let offset = 0;
        // const labelParams = Object.entries(texts).map(([key, value]) => {
        //     const text = `${key} ${value}`;
        //     const width = getActualWidthOfChars(text, { size: fontSize, family: fontFamily }) + padding * 2;
        //     const keyWidth = getActualWidthOfChars(key, { size: fontSize, family: fontFamily }) + padding;
        //     const valueWidth = getActualWidthOfChars(value, { size: fontSize, family: fontFamily }) + padding;
        //     const currentOffset = offset;
        //     offset += width + margin;
        //     return {
        //         text,
        //         width,
        //         offset: currentOffset,
        //         textOffset: currentOffset + padding,
        //         valueBackOffset: currentOffset + keyWidth + size * 0.15,
        //     };
        // });
        // const allWidth = offset - margin;

        return `<svg xmlns="http://www.w3.org/2000/svg" ">
            123123123</p>
        </svg>`;
        // return `<svg xmlns="http://www.w3.org/2000/svg" width="${allWidth}" height="${size}" font-size="${fontSize}" font-family="${fontFamily}">
        //     <linearGradient id="s" gradientTransform="rotate(90)">
        //         <stop offset="0" stop-color="#fff0"/>
        //         <stop offset="1" stop-color="#6668"/>
        //     </linearGradient>
        //     ${labelParams.reduce((svgString, labelParam, index) => {
        //         return `${svgString}
        //         <clipPath id="r${index}">
        //             <rect x="${labelParam.offset}" width="${labelParam.width}" height="100%" rx="${size / 5}"/>
        //         </clipPath>
        //         <g clip-path="url(#r${index})">
        //             <rect x="${labelParam.offset}" width="100%" height="100%" fill="${c1}" />
        //             <rect x="${labelParam.valueBackOffset}" width="100%" height="100%" fill="${c2}" />
        //             <rect x="${labelParam.offset}" width="100%" height="100%" fill="url(#s)" />
        //             <text x="${labelParam.textOffset + size * 0.05}" y="1.2em" fill="#333">${labelParam.text}</text>
        //             <text x="${labelParam.textOffset}" y="1.1em" fill="#eee">${labelParam.text}</text>
        //         </g>`;
        //     }, '')}
        // </svg>`;
    },
};
