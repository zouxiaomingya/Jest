export const fetchApple = (callback) => {
  setTimeout(() => callback('apple'), 300)
}

export const fetchBanana = () => {
  return new Promise((resolve, reject) => {
    resolve('banana')
  })
}