// Promise with Async / Await

let random = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Math.random())
    }, 2000)
  })
}

const aboveAsync = async () => {
  const res = await random()
  res >= 0.5
    ? console.log('Above 0.5: ', res)
    : console.log('Below 0.5: ', res)
}

aboveAsync()

// Normal Promise

const abovePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const res = Math.random()
    res >= 0.5
      ? resolve(res)
      : reject(res)
  }, 2000)
})

abovePromise
  .then(res => console.log('Above 0.5: ', res))
  .catch(error => console.log('Below 0.5: ', error))