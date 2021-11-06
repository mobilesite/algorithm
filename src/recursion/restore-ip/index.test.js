import restoreIp from ".";

test('should restoreIp("101023") to equal ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]', () => {
  expect(restoreIp("101023")).toEqual(["1.0.10.23", "1.0.102.3", "10.1.0.23", "10.10.2.3", "101.0.2.3"]);
});

test('should restoreIp("0000") to equal ["0.0.0.0"]', () => {
  expect(restoreIp("0000")).toEqual(["0.0.0.0"]);
});

test('should restoreIp("010010") to equal ["0.10.0.10","0.100.1.0"]', () => {
  expect(restoreIp("010010")).toEqual(["0.10.0.10", "0.100.1.0"]);
});
