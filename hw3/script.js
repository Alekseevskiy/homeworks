let a = +prompt ('сколько лет?');
let b = confirm ("употребляем алкоголь?");
    if (a <= 18 && b != false) {
        alert ('ты что? маме расскажу!');
    } else if (a <= 40 && b != false) {
        alert ('Главное водку с пивом не мешай!');
    } else if (a > 40 && b != false) {
        alert ('Не злоупотребляйте!')
    } else (alert('Так держать!')) 
        