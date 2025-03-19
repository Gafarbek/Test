// Сначало хотел сделать с одним словом но решил добавить рандомные слова
let words = ['world', 'home', 'family']
let word = words[Math.floor(Math.random() * words.length)].split('');

// let words = 'world'
// let word = words.split('')
let arrFill = Array(word.length).fill('_')
let used = []

console.log(used);


while (arrFill.includes('_')) {
    let user = prompt(`${arrFill.join(' ')}`).toLowerCase()

    if (!user || user.length !== 1) {
        alert('Больше одной буквы нельзя')
        continue;
    }

    if (used.includes(user)) {
        alert('Эта буква уже есть')
        continue;
    }

    used.push(user) 

    if (word.includes(user)) {
    word.forEach((elements, index) => {
            if (elements == user) {
                arrFill[index] = user
            }
        });
    }

    if (!arrFill.includes('_')) {
        alert(`Ты угадал слова ${word.join('')}`)
        break;
    }
}
