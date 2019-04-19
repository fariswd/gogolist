const axios = require('axios')
const fs = require('fs')

const getAnimes = require('./parser')

let page = 1
let pageEnd = 46
const url = `https://www2.gogoanime.io/anime-list.html?page=`

const main = () => {
    if(page > pageEnd) {
        return;

    } else {
        axios(url+page)
        .then(({data}) => {
            const animes = getAnimes(data)

            fs.readFile('result.json', 'utf8', (err, data) => {
                if(err) {
                    console.log(err)
                } else {
                    const newData = [...JSON.parse(data), ...animes]
                    fs.writeFile('result.json', JSON.stringify(newData, null, 4), 'utf8', (err) => {
                        if(err) {
                            console.log(err)
                        } else {
                            console.log('write success on page: ' + page)
                            page = page + 1
                            main()
                        }
                    });
                }
            })

        })
        .catch(err => console.log(err))

    }

}

main()