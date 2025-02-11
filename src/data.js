//Barra de pesquisa
export const searchBar = (characters, name) => { //function
  const searchData = characters.filter(function(character){
    return character.name.toLowerCase().includes(name.toLowerCase())
   
  })
  return searchData
}

function order(data) {
  return data.sort((a,b) => a.name > b.name ? 1 : -1)
}

export const orderFilterA = (data) => order(data)

export const orderFilterZ = (data) => orderFilterA(data).reverse()


//filtro ancestralidade 
export const filterAncestry = (characters, ancestry) => {
  const dataFilter = characters.filter(function(character){
    if (character.ancestry === null){ //condição para o que for null não apareça no filtro
      return false
    }
    const ancestryFilter = character.ancestry.includes(ancestry) //determina se a condição pode ser encontrado dentro da string e inclui
    return ancestryFilter
  })
  return dataFilter
}
//filtro Casas
export const filterHouse = (characters, house) => {
  const dataFilter = characters.filter(function(character){
    if (character.house === null){ 
      return false
    }
    const houseFilter = character.house.includes(house) 
    return houseFilter
  })
  return dataFilter
}
//filtro Espécie
export const filterSpecie = (characters, species) => {
  const dataFilter = characters.filter(function(character){
    if (character.species === null){ 
      return false
    }
    const filterSpecie = character.species.includes(species) 
    return filterSpecie
  })
  return dataFilter
}

//filtro Gênero
export const filterGenero = (characters, gender) => {
  const dataFilter = characters.filter(function(character){
    if (character.gender === null){ 
      return false
    }
    const filterGenero = character.gender.includes(gender) 
    return filterGenero
  })
  return dataFilter
}
 
export function qtdePersonByHouse (characters, house){
  return characters.filter((character) => character.house === house).length
}