const THEME = require('./theme');

module.exports = {
    default({ size = 30, theme = 'theme1' }) {
        return `<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}"><path d="M936 88.48v848H88v-848h848m8-8H80v864h864v-864z" fill="${THEME[theme][0]}"></path><path d="M896 128.48v768H128v-768h768m8-8H120v784h784v-784z" fill="${THEME[theme][1]}"></path><path d="M93.12 92h840v840h-840z" fill="${THEME[theme][2]}"></path><path d="M921.12 104v816h-816V104h816m24-24h-864v864h864V80z" fill="#333333"></path><path d="M823.2 512a310.08 310.08 0 1 1-310.08-310.16A310.08 310.08 0 0 1 823.2 512z" fill="${THEME[theme][3]}"></path><path d="M513.12 834.08A322.08 322.08 0 1 1 835.2 512a322.48 322.48 0 0 1-322.08 322.08z m0-620.16A298.08 298.08 0 1 0 811.2 512a298.4 298.4 0 0 0-298.08-298.16z" fill="#333333"></path><path d="M481.36 511.2l-74.88-74.88 30.96-30.96L512 480l80-80 32.48 32.48-80 80 74.88 74.88-30.96 30.96L513.84 544l-80 80-32.48-32.48z"></path></svg>`;
    },

    label({ size = 30, theme = 'theme1' }) {
        return `<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}"><path d="M726.893714 0H297.618286C111.177143 0 0 111.616 0 297.984v428.544C0 912.896 111.177143 1024 297.618286 1024h428.763428C912.822857 1024 1024 912.896 1024 726.528V297.984C1024.487619 111.616 913.359238 0 726.893714 0z" fill="#1990FF"></path><path d="M581.071238 219.428571h-138.142476c-30.573714 0-55.53981 24.576-55.53981 55.003429v27.501714a55.076571 55.076571 0 0 0 55.247238 55.003429h138.435048a55.076571 55.076571 0 0 0 55.247238-55.003429v-27.501714C636.611048 244.004571 611.644952 219.428571 581.071238 219.428571z" fill="#FFFFFF"></path><path d="M581.071238 386.486857c46.738286 0 84.943238-38.034286 84.943238-84.553143 0-16.384 17.627429-26.624 32.329143-19.017143 41.447619 21.942857 69.656381 65.536 69.656381 115.565715v275.309714c0 71.972571-59.075048 130.779429-131.388952 130.779429H387.413333c-72.313905 0-131.388952-58.806857-131.388952-130.779429V398.482286a130.755048 130.755048 0 0 1 69.656381-115.565715c14.701714-7.606857 32.329143 2.633143 32.329143 19.017143 0 46.518857 38.204952 84.553143 84.943238 84.553143h138.142476z m-88.478476 263.899429l117.564952-117.028572a21.991619 21.991619 0 0 0 0-31.012571 22.235429 22.235429 0 0 0-31.134476 0l-102.009905 101.522286-28.501333-28.379429a22.25981 22.25981 0 0 0-31.158857 0 21.991619 21.991619 0 0 0 0 31.012571l44.105143 43.885715c4.388571 4.388571 9.99619 6.436571 15.555047 6.436571a21.845333 21.845333 0 0 0 15.60381-6.436571z" fill="#FFFFFF"></path></svg>`;
    },
};
