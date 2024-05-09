let fetchData = async () => {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    const data = await res.json()
    const ability = await data.abilities[0].ability.name
    console.log(ability)
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

fetchData()

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then((res) => res.json())
  .then((data) => console.log(data))
