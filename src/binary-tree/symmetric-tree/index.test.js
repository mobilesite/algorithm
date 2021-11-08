import Tree from '.';

test('Tree 1:', () => {
  const root = new Tree([1,2,2,3,4,4,3]);
  console.log(root);

  expect(Tree.isSymmetry(root)).toBe(true);
});

test('Tree 2:', () => {
  const root = new Tree([1, 2, 2, 3, 4, 5, 3]);
  console.log(root);

  expect(Tree.isSymmetry(root)).toBe(false);
});
test('Tree 3:', () => {
  const root = new Tree([1, 2, 2, 3, 4, 4, 3, 1, 2, 3, 4, 4, 3, 2, 1]);
  console.log(root);

  expect(Tree.isSymmetry(root)).toBe(true);
});
