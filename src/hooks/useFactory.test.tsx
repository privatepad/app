import useFactory from "./useFactory"

test('useFactory', () => {
  const factory = useFactory()
  expect(factory.address).toEqual("0x000000000000000000000000000000000000dead")
})