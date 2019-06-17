
var users = [
    {firstName: 'Adam', lastName: 'Nowak', age: 18},
    {firstName: 'Jan', lastName: 'Kowalski', age: 18},
];

//1 MAP -> zmapowanie tablicy do innej tablicy, która posiada właściwość fullName ('Adam Nowak')

var usersWithFullNames = users.map(function(user) {
    user.fullName = user.firstName + ' ' + user.lastName; // mutacja userów w tablicy users, SIDE EFFECT : [
   return user;
});

var usersWithFullNames = users.map(function(user) {
    return {
        ...user, // brak mutacji, spread operator, poprawniejsze wyjście bo nie modyfikujemy oryginalnej tablicy
        fullName: user.firstName + ' ' + user.lastName // doklejam potrzebny klucz
    };
});

//2 FILTER -> sfiltrowanie tablicy (ograniczenie kolekcji do elementów spełniających test)

var adultUsers = users.filter(function(user) {
    return user.age > 18; // test zwracający true lub false!
});

