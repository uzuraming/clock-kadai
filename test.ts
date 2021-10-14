import Clock from "./main";

function test() {
  const max = 23;
  const min = 0;
  const start_time = Math.floor(Math.random() * (max + 1 - min)) + min;
  let end_time = Math.floor(Math.random() * (max + 1 - min)) + min;
  const input = Math.floor(Math.random() * (max + 1 - min)) + min;

  console.log(
    `はじめの時刻: ${start_time}. 終わりの時刻： ${end_time}. 入力値： ${input}`
  );

  const sample = new Clock(start_time, end_time);

  console.log(sample.is_contain(input));
}
for (let i = 0; i < 10; i++) {
  test();
}
