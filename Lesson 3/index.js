const pins = ['1111','5678','1234','9999'];

for (const pin of pins) {
    if (pin === '1234'){
        console.log('Пин-код найден');
        break;
    }
    console.log('Неверный Пин-код: ' + pin)
}