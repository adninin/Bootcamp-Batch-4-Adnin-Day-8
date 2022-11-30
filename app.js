const { command, parse } = require("yargs");
const yargs = require("yargs");
const yargsParser = require("yargs-parser");
const func = require ("./func")

yargs.command({
    command:'add',
    describe:'add new contact',
    builder:{

        name:{
            describe:'Contact Name',
            demandOption: true,
            type:'string',
        },

        email:{
            describe:'contact email',
            demandOption: false,
            type:'string',
        },

        mobile:{
            describe:'contact mobile phone number',
            demandOption: true,
            type:'string',
        },
    },

    handler(argv){
        const contact = {
            name:argv.name,
            email:argv.email,
            mobile:argv.mobile,
        };
        func.saveContact(argv.name,argv.email,argv.mobile)

        console.log(contact);

    },
});

yargs.parse();