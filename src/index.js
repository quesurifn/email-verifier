const SMTPClient= require('smtp-client')
const utilities = require('./utils/index')


const Validate = class Validate {
    constructor() {
        this.client = null;
    }

    async validate(email, timeout = 2000) {
        let servers = null;
        servers = await utilities.validateEmailAddress(email);
        servers = servers.sort((a,b) => a.priority - b.priority); 

        for(const server in servers) {
            const exchange = servers[server]["exchange"];
            const client = new SMTPClient({
                host: exchange,
                port: 25
              });
              

            try {
               await client.connect({timeout: timeout});
            } catch(e) {
                throw(e)
            }
             
            try {
               await client.greet({exchange, timeout});
            } catch(e) {
                throw(e)
            }

            try {
                await client.mail({from:  utilities.randomEmailAddress(), timeout});
            } catch(e) {
                throw(e)
            }
            
            try {
                await client.from({to: email});
            } catch(e) {
                throw(e)
            }

            try {
                await client.quit({timeout});
                return {
                    email,
                    mx_priority_1: servers[0] ? servers[0].exchange : null,
                    mx_priority_2: servers[1] ? servers[1].exchange  : null,
                    mx_isValid: true,
                    mx_error: false,
                    error_message: false
                }
            } catch(e) {
                throw(e);
            }

        }
    }
}   

module.exports = Validate;