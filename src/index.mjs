/**
 *  const, letなどの変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);
// // letは上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// //  lete破砕宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);
// // constは上書きできない

// // val3 = "const変数を上書き";

// const val3 = "constを再宣言";
// const val4 = {
//   name: "サントス",
//   age: "39",
// };

// val4.name = "baba";
// console.log(val4);
// val4.address = "Tokyo";
// // constの中身がobjectの場合は変更が可能になる。必ずしも変わらないわけではない。
// //プロパティを追加することも可能

// 配列などのプロパティの変更や追加についても可能。
// const val5 = ["dog", "cat"];
// val5[1] = "bird";
// val5.push("lion");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name1 = "サントス";
// const age = 39;
// // 「私の名前はサントスです。年齢は39歳です。」

// // 従来の方法
// const message1 = "私の名前は" + name1 + "です。年齢は" + age + "歳です。";
// console.log(message1);

// // テンプレート文字列を使用
// const message2 = `僕の名前は${name1}です。年齢は${age}歳です。`;
// console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
function func1(str) {
  return str;
}
// 定数の中に関数を入れて書くこともできる。
const func2 = function (str2) {
  return str2;
};
console.log(func1("func1です"));
console.log(func2("func2です"));

// アロー関数
const func3 = (str) => {
  return str;
};
console.log(func3("func3です"));

const func4 = (num1, num2) => {
  return num1 + num2;
};
console.log(func4(25, 15));
