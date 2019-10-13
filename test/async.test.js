import { fetchApple, fetchBanana } from '../src/async'

test('the data is apple', (done) => {
  console.log(done);
  expect.assertions(1)
  const callback = data => {
    expect(data).toBe('apple')
    done()
  }
  fetchApple(callback)
})

test('the data is banana', () => {
  expect.assertions(1)
  return fetchBanana().then(data => expect(data).toBe('banana'))
})