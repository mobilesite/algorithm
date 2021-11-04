import reverse from './index';

test('reverse "Let\'s take LeetCode contest" to equal "s\'teL ekat edoCteeL tsetnoc"', () => {
  const input = "Let's take LeetCode contest";
  const output = "s'teL ekat edoCteeL tsetnoc";

  expect(reverse(input)).toBe(output);
});
