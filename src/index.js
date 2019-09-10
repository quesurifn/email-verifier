const { SMTPClient } = require('smtp-client')
const utilities = require('./utils/index')

//console.log = () => {}
const Validate = class Validate {
    constructor() {
        this.client = null;
    }

    async validate(email, timeout = 2000, verbose = false) {
        return new Promise(async (resolve, reject) => {
            let servers = null;
            servers = await utilities.validateEmailAddress(email);
            servers = servers.sort((a,b) => a.priority - b.priority); 
            console.log(email)

            const exchange = servers[0]["exchange"];
            let client = new SMTPClient({
            host: exchange,
                port: 25
            });
                  
            try {
                await client.connect({timeout: timeout});
            } catch(e) {
                if(verbose) reject({error: e, email: email})
                reject(`Cannot validate ${email}`)
            }
                 
            try {
                await client.greet({exchange, timeout}); 
            } catch(e) {
                if(verbose) reject({error: e, email: email})
                reject(`Cannot validate ${email}`)
            }
    
            try {
                await client.mail({from:  utilities.randomEmailAddress(), timeout});
            } catch(e) {
                if(verbose) reject({error: e, email: email})
                reject(`Cannot validate ${email}`)
            }
                
            try {
                await client.rcpt({to: email});
            } catch(e) {
                if(verbose) reject({error: e, email: email})
                reject(`Cannot validate ${email}`)
            }
    
            try {
                await client.quit({timeout});
                resolve({
                    email,
                    mx_priority_1: servers[0] ? servers[0].exchange : null,
                    mx_isValid: true,
                })
            } catch(e) {
                if(verbose) reject({error: e, email: email})
                reject(`Cannot validate ${email}`)
            }
        })
    }
}   

module.exports = Validate;