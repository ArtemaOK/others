// Realizar funcion que devuelva listado de usuarios después de 3seg.
// then, catch y finally
// finally debe mostrar un mensaje

const array = [
  { id: 1, name: 'Juan', age: 25 },
  { id: 2, name: 'Micaela', age: 18 },
  { id: 3, name: 'Guido', age: 14 },
  { id: 4, name: 'Flor', age: 15 },
  { id: 5, name: 'Nicolas', age: 32 }
]

const listado = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (array.length > 0) {
      resolve(array)
    } else {
      reject('Error')
    }
  }, 2000)
})

listado
  .then(res =>
    console.table(res)
  )
  .catch(e =>
    console.log(e)
  )
  .finally(() =>
    console.log('Finally (normal)')
  )

const listadoAsync = async () => {
  try {
    const res = await listado
    console.table(res)
  } catch (e) {
    console.error(e)
  } finally {
    console.log('Finally (async)')
  }
}

listadoAsync()