/*1:*/console.log(undefined + 1);
/*
undefined не може бути перетворено в число, тому undefined + 1 стає NaN.
Результат: NaN.
*/
/*2:*/console.log('true' == true);
/*
'true' є рядком, а true — булевим значенням, їх не можна порівняти без перетворення типів.
Результат буде false.
Результат: false.
*/
/*3:*/console.log(false == 'false');
/*
false є булевим значенням, а 'false' є рядком.
false не дорівнює 'false' при порівнянні без перетворення типів.
Результат: false.
*/
/*4:*/console.log(null == '');
/*
При нестрогому порівнянні відбувається перетворення типів, null та ""
будуть 0, але відповідь flase тому що null дорівнює тільки сам собі
та undefuned при нестрогому порівнянні, це окреме правило прописано в специфікації.
Результат: false.
*/
/*5:*/console.log(3 ** (9 / 3));
/*
9 / 3 = 3.
3 ** 3 = 27.
Результат: 27.
*/
/*6:*/console.log(!!'false' == !!'true');
/*
!!'false' і !!'true' обидва перетворюються в true, оскільки непусті рядки є "truthy".
true == true є true.
Результат: true.
*/
/*7:*/console.log(0 || '0' && 1);
/*
0 || '0' є '0', оскільки 0 є "falsy", а '0' є "truthy".
'0' && 1 є 1, оскільки '0' є "truthy".
Результат: 1.
* */
/*8:*/console.log(1 < 2 < 3);
/*
1 < 2 є true.
true < 3 є true (оскільки true перетворюється в 1, а 1 < 3).
Результат: true.
* */
/*9:*/console.log('foo'+ + +'bar');
/*
+'bar' перетворює 'bar' в NaN, а +NaN залишається NaN.
'foo' + NaN є 'fooNaN'.
Результат: 'fooNaN'.
* */
/*10:*/console.log(3 ** 2 / 3);
/*
3 ** 2 = 9.
9 / 3 = 3.
Результат: 3.
*/
/*11:*/console.log(1 < 2 > 3);
/*
1 < 2 є true.
true > 3 є false (оскільки true перетворюється в 1, а 1 > 3 є false).
Результат: false.
*/
/*12:*/console.log((+null == false) < 1);
/*
+null перетворює null в 0.
0 == false є true.
true < 1 є true (оскільки true перетворюється в 1, а 1 < 1 є false).
Результат: false.
*/
/*13:*/console.log(false && true || true);
/*
false && true є false.
false || true є true.
Результат: true.
*/
/*14:*/console.log(false && (true || true));
/*
true || true є true.
false && true є false.
Результат: false.
*/
/*15:*/console.log((+null == false) < 1 ** 5);
/*
1 ** 5 є 1 (оскільки будь-яке число в степені 0 дає 1).
+null перетворює null в 0.
Результат: false.
*/
/*

1: NaN
2: false
3: false
4: false
5: 27
6: true
7: 1
8: true
9: fooNaN
10: 3
11: false
12: false
13: true
14: false
15: false

*/