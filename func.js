//Require file system//
const fs = require('fs')

//Require readline//
const rl = require('readline');

//Require atau import npm validator *jangan sampe lupa//
const validator = require('validator');

//Ask apakah sudah ada folder data dan file contacts.json atau belum//
const dataPath = './data/contacts.json';

//Membuat file contact.json apabila file belum exist//
if(!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath,'[]','utf-8'); //Menggunakan kurung siku [] karena filenya berformat json//
}

const saveContact = (name,email,mobile) => {

    //Peringatan yang akan muncul apabila nama yang diisi salah//
    if (!validator.isAlpha(name, 'en-US', {ignore:' '})){
        console.log('Nama tidak valid!');
        return(false)
    }

    //Peringatan yang akan muncul apabila email yang diisi salah//
    if (!validator.isEmail(email)) {
        console.log('Email tidak valid!');    
        return(false)
     }

    //Peringatan yang akan muncul apabila nomor yang diisi salah//
    if (!validator.isMobilePhone(mobile, 'id-ID')) {
        console.log('Nomor tidak valid!');
        return(false)
    }

    const contact = {name,email,mobile};
    const file = fs.readFileSync('data/contacts.json','utf8');
    const contacts = JSON.parse(file);

    const duplicate=contacts.find(function(contact) {
        console.log(name);
        console.log(contact.name);
        return contact.name ===name
});

    //Peringatan yang akan muncul apabila nama yang diisi bersifat double//
    if(duplicate){
        console.log('Nama sudah terdaftar!');
        return false;
    }

    contacts.push(contact);
    fs.writeFileSync('data/contacts.json',JSON.stringify(contacts));
    console.log('Thank you for coming!');
}

//Ekspor function *taronya diakhir ygy//
module.exports = {saveContact};