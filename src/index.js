const SMTPClient = require('smtp-client').SMTPClient
const utilities = require('./utils/index')

module.exports = {
   validate: async (email, timeout = 2000, enableConsole = true) => {
            let servers = null, client = null;
            try {
                servers = await utilities.validateEmailAddress(email);
            } catch(e) {
                throw({
                    email,
                    mx_priority_1: servers[0] ? servers[0].exchange : null,
                    mx_priority_2: servers[1] ? servers[1].exchange  : null,
                    mx_isValid: false,
                    mx_error: true,
                    error_message: e.message
                })
            }
            servers = servers.sort((a,b) => a.priority - b.priority); 

            for(const server in servers) {
                client = new SMTPClient({
                    host: server.exchange,
                    port: 25
                });

                try {
                    await client.connect({timeout})
                    await client.greet({hostname: server.exchange});
                    break;
                } catch(e) {
                    if(enableConsole) console.error(`Connecting to ${server.exchange} failed. Trying a lower priority server if available.`);
                }
            }

            try {
                await client.mail({from: utilities.randomEmailAddress()});
            } catch(e) {
                reject({
                    email,
                    mx_priority_1: servers[0] ? servers[0].exchange : null,
                    mx_priority_2: servers[1] ? servers[1].exchange  : null,
                    mx_isValid: false,
                    mx_error: true,
                    error_message: e.message
                })
            }

            try {
                await client.rcpt({to: email});
                await client.quit();
                return {
                    email,
                    mx_priority_1: servers[0] ? servers[0].exchange : null,
                    mx_priority_2: servers[1] ? servers[1].exchange  : null,
                    mx_isValid: true,
                    mx_error: false,
                    error_message: false
                }
            } catch(e) {
                await client.quit();
                throw({
                    email,
                    mx_priority_1: servers[0] ? servers[0].exchange : null,
                    mx_priority_2: servers[1] ? servers[1].exchange  : null,
                    mx_isValid: false,
                    mx_error: true,
                    error_message: e.message
                })
            }
        })
    }
}
     