// 1-masala
{
    let n = 4, k = 7
    for (let i = 0; i < n; i++) {
        console.log(k);
    }
}


// 2- masala
{
    let a = 6, b = 12
    for (let i = a; i <= b; i++) {
        console.log(i);
    }
}


// 3-masala
{
    let a = 3, b = 8, num = 0;
    for (let i = b - 1; i > a; i--) {
        console.log(i);
        num++;
    }
    console.log(`Chiqirilgan sonlar soni: ${num}`);
}

{
	// masala 4
	for (let kg = 1; kg <= 10; kg++) {
		let price = kg * 12
		console.log(kg + ' kg konfet narxi: ' + price + ' uz')
	}
}

{
	//  masala 5
	let priceKg = 12

	for (let kg = 0.1; kg <= 1; kg += 0.1) {
		let price = kg * priceKg
		console.log(kg + price + 'uz')
	}
}

{
	// masala 6
	let priceKg = 12

	for (let kg = 1.1; kg <= 2; kg += 0.2) {
		let price = kg * priceKg
		console.log(kg + price + 'uz')
	}
}
{
	// masala 7
	let a = 0

	for (i = a; i <= 10; i++) {
		if (i >= 5) {
			a = i + a
		}
	}

	console.log(a)
}

{
	// masala 8
	let a = 1
	for (i = 5; i <= 10; i++) {
		a *= i
	}
	console.log(a)
}

{
// 9-Masala
{
    let a = 2, b = 6, yigindi = 0;
    for (let i = a; i <= b; i++) {
        yigindi += i * i;
    }
    console.log(yigindi);
}
}

// 10-Masala
{
    let n = 7, s = 0
    for (let i = 1; i <= n; i++)
        s += 1 / i; {
        console.log(s);
    }
}