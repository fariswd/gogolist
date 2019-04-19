const removeTag = html => html.replace(/<[^>]*>/g, '')
const cleanString = tabbed => tabbed.replace(/\t/g, '').replace(/\n/g, '')
const getUlListing = uls => uls.match(/<ul class="listing"[\s\S]*?<\/ul>/g);
const getLiTitle = lis => lis.match(/<li[\s\S]*?<\/li>/g);
const getAnchor = a => a.match(/<a[\s\S]*?<\/a>/g);
const parseImg = img => img.match(/<img\s.*?src=(?:'|")([^'">]+)(?:'|")/g);
const getUrl = urls => urls.match(/(?<=href=").*?(?=[\?"])/g)
const getParagraph = ps => ps.match(/<p[\s\S]*?<\/p>/g)


module.exports = {
    removeTag,
    cleanString,
    getUlListing,
    getLiTitle,
    getAnchor,
    parseImg,
    getUrl,
    getParagraph,
};