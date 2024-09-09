//numbers in the range from 1 to N
function findPerfectNumbers(N) {
    let perfectNumbers = [];

    for (let num = 2; num <= N; num++) {
        let sum = 1;

        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                sum += i;
                if (i !== num / i) {
                    sum += num / i;
                }
            }
        }

        if (sum === num) {
            perfectNumbers.push(num);
        }
    }

    console.log(`Досконалі числа від 1 до ${N}: ${perfectNumbers.join(", ")}`);
}

findPerfectNumbers(30);
