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
const val4 = {
  name: "サントス",
  age: "39",
};

val4.name = "baba";
console.log(val4);
val4.address = "Tokyo"; 
// constの中身がobjectの場合は変更が可能になる。必ずしも変わらないわけではない。
//プロパティを追加することも可能