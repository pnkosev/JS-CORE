function restaurantBill(input) {
    let items = input.filter((x, i) => i % 2 === 0);
    let totalPrice = input.filter((x, i) => i % 2 ===1).map(y => +y).reduce((a, b) => a + b);

    console.log(`You purchased ${items.join(', ')} for a total sum of ${totalPrice}`);
}
restaurantBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80', 'Lasagna', '5.69']);