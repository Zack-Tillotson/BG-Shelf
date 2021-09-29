import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import actions from 'state/actions'

import formSelector from 'state/selectors/form'

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