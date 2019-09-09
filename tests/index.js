const Validate = require('../src/index')

const ObjectId = (id) => String(id); 

const listOfEmailsToValidate = [ 
{ _id : ObjectId("5a06228f57beb9560322bcf7"), email : "dean@traena.io" },
{ _id : ObjectId("5a545072d269a1013bb87420"), email : "vmartinworks@gmail.com" },
{ _id : ObjectId("5a54602fd269a1013bb87421"), email : "andrew.prasatya@gmail.com" },
{ _id : ObjectId("5a546361d269a1013bb87423"), email : "rlramirez@outlook.com" },
{ _id : ObjectId("5a5468fdd269a1013bb87425"), email : "charlotte.georgia.marais@gmail.com" },
{ _id : ObjectId("5a5473cbd269a1013bb8742a"), email : "claudreardon@gmail.com" },
{ _id : ObjectId("5a5474c4d269a1013bb8742d"), email : "jero.piopongo@gmail.com" },
{ _id : ObjectId("5a5ef627f23112436166d5b2"), email : "stephaniienguyenn@gmail.com" },
{ _id : ObjectId("5a04ff0668507c068293fa60"), email : "nichole_8302@yahoo.com" },
{ _id : ObjectId("5a53cff17ddc137665044318"), email : "nikitac18@yahoo.com" },
{ _id : ObjectId("5a53d8be7ddc13766504431e"), email : "alex.radelich@gmail.com" },
{ _id : ObjectId("5a53de4e7ddc137665044321"), email : "libbynorth13@gmail.com" },
{ _id : ObjectId("5a53e0f37ddc137665044323"), email : "dasavickas@gmail.com" },
{ _id : ObjectId("5a53e22d7ddc137665044325"), email : "stephaniegaileflores@yahoo.com" },
{ _id : ObjectId("5a53e4bf7ddc137665044327"), email : "rebekkah_kimani@yahoo.com" },
{ _id : ObjectId("5a53e8497ddc13766504432b"), email : "ejshaughn@gmail.com" },
{ _id : ObjectId("5a53edf37ddc13766504432d"), email : "fernanda.almaguer2000@gmail.com" },
{ _id : ObjectId("5a53f3047ddc137665044331"), email : "casstlane@gmail.com" },
{ _id : ObjectId("5a53f3587ddc137665044333"), email : "itsmekirby@shaw.ca" },
{ _id : ObjectId("5a53f76ad269a1013bb873ee"), email : "brittneerenee@gmail.com" },
{ _id : ObjectId("5a53f7f6d269a1013bb873f2"), email : "inbox@seanmeyer.com" },
{ _id : ObjectId("5a53fbbfd269a1013bb873f5"), email : "franzenmj12@gmail.com" },
{ _id : ObjectId("5a540125d269a1013bb873f7"), email : "mlcareymail@gmail.com" },
{ _id : ObjectId("5a54080ad269a1013bb873f9"), email : "ainsleymicallef@aol.com" },
{ _id : ObjectId("5a540ccbd269a1013bb873fb"), email : "belus26@me.com" },
{ _id : ObjectId("5a540f53d269a1013bb873fd"), email : "rlw.mann@hotmail.com" },
{ _id : ObjectId("5a541cc6d269a1013bb87405"), email : "ansheeta@yahoo.com" },
{ _id : ObjectId("5a541fc7d269a1013bb87407"), email : "sierra.poston.n@gmail.com" },
{ _id : ObjectId("5a5421f9d269a1013bb87409"), email : "leizleajaneaguila@gmail.com" },
{ _id : ObjectId("5a5428ccd269a1013bb8740c"), email : "alexa@alexarandolph.com" },
{ _id : ObjectId("5a542c9dd269a1013bb8740e"), email : "stefani.kuo@gmail.com" },
{ _id : ObjectId("5a54355dd269a1013bb87412"), email : "pdoshi1017@gmail.com" },
{ _id : ObjectId("5a543582d269a1013bb87413"), email : "therealamyj@gmail.com" },
{ _id : ObjectId("5a5439d9d269a1013bb87416"), email : "versailles.ct@gmail.com" },
{ _id : ObjectId("59d3e5542008bd017cda7518"), email : "hannahuiri@gmail.com" },
{ _id : ObjectId("5a5446d2d269a1013bb8741a"), email : "alilly1776@gmail.com" },
{ _id : ObjectId("5a544b5ed269a1013bb8741d"), email : "damarkuss13@gmail.com" },
{ _id : ObjectId("5a60d709151716500c3e8b3c"), email : "michelleang02@gmail.com" },
{ _id : ObjectId("5a60f3ae4cc6ae5051d5ea68"), email : "bungashick1@gmail.com" },
{ _id : ObjectId("5a04c11468507c068293fa3e"), email : "meganbwild@gmail.com" },
];

const passed = [];
const erred = [];

const validate = new Validate()

{
    for (const key in listOfEmailsToValidate) {
        const validated = validate.validate(listOfEmailsToValidate[key]['email']).then((data) => console.log(data))
     } 
}