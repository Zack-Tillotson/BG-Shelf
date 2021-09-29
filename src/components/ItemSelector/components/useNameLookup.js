import {useState } from 'react'

function useNameLookup() {
  const [games, updateGames] = useState([])

  const startLookup = name => {
    fetch(`https://api.geekdo.com/xmlapi2/search?type=boardgame&query=${name}`)
        .then(resp => resp.text())
        .then(stringData => {
          const xmlData = new DOMParser().parseFromString(stringData, "application/xml")

          const data = [...xmlData.documentElement.children].map(item => {
            const nameEle = [...item.children].find(attr => attr.tagName === 'name')
            const yearEle = [...item.children].find(attr => attr.tagName === 'yearpublished')
            return {
              id: item.getAttribute('id'),
              attributes: {
                isBggStub: true,
                name: nameEle && nameEle.getAttribute('value') || '',
                year: yearEle && yearEle.getAttribute('value') || '',
              },
            }
          })
          updateGames(data)
        })
        .catch(err => {})
  }

  return {
    startLookup,
    games,
  }
}

export default useNameLookup