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
// function func1(str) {
//   return str;
// }
// // 定数の中に関数を入れて書くこともできる。
// const func2 = function (str2) {
//   return str2;
// };
// console.log(func1("func1です"));
// console.log(func2("func2です"));

// // アロー関数
// const func3 = (str) => {
//   return str;
// };
// console.log(func3("func3です"));

// const func4 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func4(25, 15));

/**
 * 分割代入
 */

// const myProfile = {
//   name1: "サントス",
//   age: 39,
// };
// const message1 = `名前は${myProfile.name1}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const { name1, age } = myProfile;
// const message2 = `名前は${name1}です。年齢は${age}歳です。`;
// console.log(message2);

// 分割代入は配列にも使えます
// const myProfile = ["サントス", 40];
// const message3 = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const [name3, age] = myProfile;
// const message4 = `私の名前は${name3}です。年齢は${age}です。`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */
// デフォルト値を変えたい場合は、nameの後に='変えたい名前'を入力する
// 通常
// const sayHello = (name) => {
//   return console.log(`こんにちは！ ${name}さん`);
// };
// sayHello("じゅるり");

// const sayHello = (name) => {
//   return console.log(`こんにちは！ ${name}さん`);
// };
// sayHello();
// ↑何も引数に設定されていないとundefinedになってしまう。
// ↓nameにゲストを登録しておくとその名前で出力される。
// const sayHello = (name = "ゲスト") => {
//   return console.log(`こんにちは！ ${name}さん`);
// };
// sayHello();

/**
 * スプレッド構文
 */
// 配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;

// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// わざわざスプレッド構文を使わずとも＝で結べばよいのでは？
// const arr8 = arr4;
// arr8[0] = 100;
// // 100を代入すると
// console.log(arr8);
// // [100,20]で置き換わっている。
// console.log(arr4);
// // arr4も[100,20]に置き換わってしまう。

/**
 * mapやfilterをつかった配列
 */

// const nameArr = ["田中", "山田", "すもも"];
// for (let i = 0; i < nameArr.length; i++) {
//   console.log(nameArr[i]);
// }

// // mapを使って
// const nameArr2 = nameArr.map((lastName) => {
//   return lastName;
// });
// console.log(nameArr2);

// nameArr.map((lastName)=>console.log(lastName));

// filterをつかって
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);
// // 特定の条件のみを取り出す

// for (let i = 0; i < nameArr.length; i++) {
//   console.log(`${i + 1}番目は${nameArr[i]}です。`);
// }

// nameArr.map((lastName, i) =>
//   console.log(`${i + 1}番目は${lastName}ですか？？`),
// );

// スモモ以外には「さん」をつける
// const newNameArr = nameArr.map((lastName) => {
//   if (lastName === "すもも") {
//     return lastName;
//   } else {
//     return `${lastName}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
// ある条件　？　条件がtrueの時：　条件がfalseの時
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = "1300";
// console.log(num.toLocaleString()); //toLocaleString()は数値を三桁区切りで出力

// 数値がnumberかそうでないかの判定をすることができる。
// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください。";
// console.log(formattedNum);

// 関数内での処理
// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を越えています。" : "許容範囲内です。";
// };
// console.log(checkSum(50, 30));

/**
 * 論理演算子　＆＆ ||
 */
// const flag1 = true;
// const flag2 = false; //trueに置き換えれば &&の条件も成り立つ
// if (flag1 || flag2) {
//   console.log("1か2はtrueになります。");
// }
// if (flag1 && flag2) {
//   console.log("1も2もtrueになります。");
// }

//||は左側がfalseなら右側を返す。
const num = 100;
const fee = num || "金額未設定です。";
console.log(fee);

// &&は左側がtrueなら右側を返す。
const num2 = 100;
const fee2 = num2 && "何か設定されました。";
console.log(fee2);
