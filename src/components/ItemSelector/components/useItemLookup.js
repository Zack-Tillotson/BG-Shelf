import {useState} from 'react'

function getSafeValue(item, getter, defaultValue = '') {
  let value = defaultValue
  try {
    value = getter(item)
  } catch (e) {}
  return value
}

// lol bgg wut
function cleanText(text) {
  const ele = document.createElement('html')
  ele.innerHTML = text
  ele.innerHTML = ele.innerText
  return ele.innerText
}

function useItemLookup() {

  const [isLoading, updateIsLoading] = useState(false)

  const lookupItem = itemBrief => {
    updateIsLoading(true)
    return fetch(`https://api.geekdo.com/xmlapi2/thing?type=boardgame&id=${itemBrief.id}`)
      .then(resp => resp.text())
      .then(stringData => {
        const xmlData = new DOMParser().parseFromString(stringData, "application/xml")

        const item = [...xmlData.documentElement.children].find(ele => ele.tagName === 'item')

        const cleanDesc = cleanText(getSafeValue(item, item => [...item.children].find(attr => attr.tagName === 'description').innerHTML))

        const retItem = {
          name: getSafeValue(item, item => [...item.children].find(attr => attr.tagName === 'name' && attr.getAttribute('type') === 'primary').getAttribute('value')),
          releaseDate: getSafeValue(item, item => [...item.children].find(attr => attr.tagName === 'yearpublished').getAttribute('value')),
          description: cleanDesc,
          canonicalImage: getSafeValue(item, item => [...item.children].find(attr => attr.tagName === 'image').innerHTML),
          publisher: getSafeValue(item, item => [...item.children].find(attr => attr.tagName === 'link' && attr.getAttribute('type') === 'boardgamepublisher').getAttribute('value')),
          designer: getSafeValue(item, item => [...item.children].filter(attr => attr.tagName === 'link' && attr.getAttribute('type') === 'boardgamedesigner').map(pub => pub.getAttribute('value')).join(', ')),
          minPlayers: getSafeValue(item, item => [...item.children].find(attr => attr.tagName === 'minplayers').getAttribute('value')),
          maxPlayers: getSafeValue(item, item => [...item.children].find(attr => attr.tagName === 'maxplayers').getAttribute('value')),
        }
        return retItem
      })
      .catch(e => {
        updateIsLoading(false)
      })
  }

  return {lookupItem, isLoading}
}

export default useItemLookup