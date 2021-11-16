import cheapestFlights from ".";

test('cheapestFlights 1:', () => {
  const n = 3,
    edges = [
      [0, 1, 100],
      [1, 2, 100],
      [0, 2, 500]
    ],
    src = 0,
    dst = 2,
    k = 1;
  expect(cheapestFlights(n, edges, src, dst, k)).toBe(200);
});

test('cheapestFlights 1:', () => {
  const n = 3,
    edges = [
      [0, 1, 100],
      [1, 2, 100],
      [0, 2, 500]
    ],
    src = 0,
    dst = 2,
    k = 0;
  expect(cheapestFlights(n, edges, src, dst, k)).toBe(500);
});