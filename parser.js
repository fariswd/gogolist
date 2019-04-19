const {
    removeTag,
    cleanString,
    getUlListing,
    getLiTitle,
    getAnchor,
    parseImg,
    getUrl,
    getParagraph,
} = require('./helper')

const getAnimes = (data) => {
    const listing = getUlListing(data)[0]
    const clean = cleanString(listing)
    const contents = getLiTitle(clean)

    const animes = []
    contents.forEach(content => {
        let anime = {}
        const text = getAnchor(content)
        const details = getParagraph(content)

        anime.title = removeTag(text[0]).trim()
        anime.img = parseImg(content)[0].split('"')[1]
        anime.links = getUrl(text[text.length - 1])[0]

        details.forEach(detail => {
            const raw = removeTag(detail).split(':')
            if (raw[0] == 'Plot Summary') {
                anime.summary = raw.splice(2).join(' ').trim()
            } else {
                anime[raw[0].toLowerCase()] = raw.splice(1).join(' ').trim()
            }
        })
        animes.push(anime)
    })
    return animes
}

module.exports = getAnimes