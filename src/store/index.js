import Vue from 'vue';

const store = Vue.observable({
    isLoaded: false,
    animeTop: []
})

export const mutations = {
    setIsLoaded: payload => store.isLoaded = payload,
    setAnimeTop: payload => store.animeTop = payload
}

export const getters = {
    isLoaded: () => store.isLoaded,
    animeTop: () => store.animeTop
}

export const actions = {
    async getNews() {
        mutations.setIsLoaded(false)
        const response = await fetch('https://api.jikan.moe/v3/top/anime');
        const data = await response.json();
        mutations.setAnimeTop(data.top)
        mutations.setIsLoaded(true)
    }
}
