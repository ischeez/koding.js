const usdToRub = (usd) => {
    const odd = (a, b) => a * b;

    if (usd > 300){
        return odd(usd, 85)
    } else if ( usd > 1000) {
        return odd (usd, 90);
    }

    return odd(usd,80);
}
    const ages = [10,18,55,3,20];
    for (const age of ages){
        if (age >= 18){
            console.log('Подходишь')
        } else {
            console.log('Ты маеленький')
        }
    } 
    








console.log(usdToRub(121)); 

// function checkAge(age) {
//   if (age >= 18) {
//     return 'Человек совершеннолетний';
//   } else {
//     return 'Человек ещё маленький';
//   }
// }

// console.log(checkAge(16));
// console.log(checkAge(21)); 
 /// Альтрнатива 













 

