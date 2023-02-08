var readlineSync = require('readline-sync');

var prop=[];

while (prop1 !== 'sair') {
    var prop1 = (readlineSync.question('informe a propriedade, se desejar parar, digite SAIR '));
    prop.unshift(prop1);
}
for (var i = 0; i < prop.length; i++) {
    var propok = prop.slice(1);
    console.log(propok.sort()[i]);
}