# Email Validator

## How It Works 
In laymen, it connects to the server where the email address exists and *tries* to ask it if it has a record of it. If so it will return something like this:

```
Successful 
{   
    email: "kyle@gmail.com,
    

```

Not every server will cooperate but most will. Most notably I've run into issues with `redhat.com`


## Contributing 

If there is an issue or you think it needs a new feature, feel free to open an issue or PR. 

## Example

```
const { validate } = require('email-validator')

(async ()  => {

    let isEmailValid = null

    try { 

        isEmailValid = await validate('youremail@gmail.com')
        
    } catch(e) {

        // handle invalid email / error
        
    }

})()
```