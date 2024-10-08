/*1:*/console.log('number' + 23 + 32);
/*
'number' є рядком, тому при додаванні до нього числа 23 відбувається конкатенація рядків.
'number' + 23 стає 'number23'.
'number23' + 32 стає 'number2332'.
Результат: 'number2332'.
* */
/*2:*/console.log(41 + 1 + 'number');
/*
41 + 1 = 42 (додавання чисел).
42 + 'number' відбувається конкатенація, оскільки один з операндів є рядком.
Результат: '42number'.
* */
/*3:*/console.log(null + 1);
/*
null перетворюється в 0 при додаванні до числа.
0 + 1 = 1.
Результат: 1.
* */
/*4:*/console.log('five' + + 'two');
/*
'two' перетворюється в число, але не є дійсним числом, тому +'two' стає NaN.
'five' + NaN відбувається конкатенація рядків.
Результат: 'fiveNaN'.
*/
/*5:*/console.log(2 && 7)
/*
Логічний оператор && повертає перший "false" операнду або останній операнд, якщо всі операнди є "true".
Оскільки 2 і 7 обидва є "true", результат буде останнім значенням.
Результат: 7.
* */
/*6:*/console.log(+'40' + +'2');
/*
+'40' перетворює рядок '40' в число 40.
+'2' перетворює рядок '2' в число 2.
40 + 2 = 42.
Результат: 42.
* */
/*7:*/console.log('10' - 5 === 6);
/*
'10' перетворюється в число 10 при операції віднімання.
10 - 5 = 5.
5 === 6 перевіряє рівність, що є false.
Результат: false.
* */
/*8:*/console.log(true + false);
/*
true перетворюється в 1, а false в 0 при операції додавання.
1 + 0 = 1.
Результат: 1.
* */
/*9:*/console.log('4px' - 3);
/*
'4px' не є числом, тому при операції віднімання перетворюється в NaN.
NaN - 3 = NaN.
Результат: NaN.
* */
/*10:*/console.log('4' - 3);
/*
'4' перетворюється в число 4 при операції віднімання.
4 - 3 = 1.
Результат: 1.
* */
/*11:*/console.log('2' + 3 ** 2);
/*
3 ** 2 = 9 (операція піднесення до степеня).
'2' + 9 відбувається конкатенація рядків.
Результат: '29'.
* */
/*12:*/console.log(12 / '6');
/*
'6' перетворюється в число 6 при операції ділення.
12 / 6 = 2.
Результат: 2.
*/
/*13:*/console.log(23 + 42 + 'number');
/*
23 + 42 = 65 (додавання чисел).
65 + 'number' відбувається конкатенація рядків.
Результат: '65number'.
*/
/*14:*/console.log('10' + (5 === 6));
/*
5 === 6 перевіряє рівність, результатом є false.
'10' + false відбувається конкатенація рядків.
Результат: '10false'.
*/
/*15:*/console.log('number' + 15 + 3);
/*
'number' + 15 відбувається конкатенація рядків.
'number15' + 3 відбувається конкатенація рядків.
Результат: 'number153'.
* */
/*

1: number2332
2: 42number
3: 1
4: fiveNaN
5: 7
6: 42
7: false
8: 1
9: NaN
10: 1
11: 29
12: 2
13: 65number
14: 10false
15: number153


*/

