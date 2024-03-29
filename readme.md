# Email Validator

## How It Works 
In laymen, it connects to the server where the email address exists and *tries* to ask it if it has a record of it. If so it will return something like this:

```
Successful 
{   
    email: "kyle@gmail.com,           
    mx_priority_1: "gmail-smtp-in.l.google.com",
    mx_isValid: true
}

Error
{
    email: "kyle@gmail.com"
    error: <error object>
}
```

Not every server will cooperate but most will. Most notably I've run into issues with `redhat.com`

## Example

```
const { validate } = require('email-validator')

(async ()  => {

    let isEmailValid = null

    try {  
                                // Verbose and timeout defaults; Mot needed to use the method. 
        isEmailValid = await validate({email: "kyle@gmail.com", verbose: true, timeout: 2000})
        
    } catch(e) {

        // handle invalid email / error
        
    }

})()
```