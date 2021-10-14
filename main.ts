// 小林聡史　技術課題

class Clock {
  private start_time;
  private end_time;
  private time_array: Array<number> = []; // はじめから終わりの時刻を順に格納する配列

  private set_time_array() {
    while (this.start_time !== this.end_time) {
      if (this.start_time === 24) {
        this.start_time = 0;
      }
      this.time_array.push(this.start_time);
      this.start_time += 1;
    }
  }
  private is_vaild_value(start_time: number, end_time: number) {
    return (
      start_time >= 0 && start_time <= 23 && end_time >= 0 && end_time <= 23
    );
  }

  public is_contain(input: number) {
    if (input >= 0 && input <= 23) {
      // 配列の長さが0だったとき、開始と終了で同じ時刻が入力されたと判定し、trueを返す
      if (this.time_array.length === 0) {
        return true;
      } else {
        return this.time_array.includes(input);
      }
    } else {
      throw new Error("入力した日付の値が不正です");
    }
  }

  constructor(start_time: number, end_time: number) {
    if (this.is_vaild_value(start_time, end_time)) {
      this.start_time = start_time;
      this.end_time = end_time;
      this.set_time_array();
    } else {
      throw new Error("入力した日付の値が不正です");
    }
  }
}
const START_TIME = 23;
const END_TIME = 5;
const INPUT_TIME = 2;

const sample2 = new Clock(START_TIME, END_TIME);
console.log(sample2.is_contain(INPUT_TIME));

export default Clock;
