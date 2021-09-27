// Invokes onChild for each attribute, or for each array item if the attribute is an Array
export function walkObject(children, onChild) {
  Object.keys(children).forEach(key => {
    const child = children[key]
    if(child instanceof Array) {
      child.forEach((subChild, index) => {
        onChild(subChild, [key, index])
      })
    } else {
      onChild(child, [key])
    }
  })
}

