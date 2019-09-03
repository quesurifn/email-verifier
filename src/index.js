const { SMTPClient } = require('smtp-client')
const utilities = require('./utils/index')

module.exports = {
   validate: async (email, timeout = 2000) => {
        let servers = null, client = null;
        servers = await utilities.validateEmailAddress(email);
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
                // Keep going
            }
        }

        // Reject
        if(client === null) throw(new Error(`Could not connect to the SMTP server for address: ${email}`))

        await client.mail({from: utilities.randomEmailAddress()}); 
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
    }
}
     