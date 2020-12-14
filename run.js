const axios = require('axios');
const URL = process.env.URL || "http://10.1.2.63:80/";

console.log(`#######################################`)
console.log(`## REQESTER`)
console.log(`#######################################`)

console.log(`## CONFIGURATION`)
console.log("Check URL ....")

if (URL == null) {
    console.error("ERROR: Environment variable 'URL' is empty!")
    console.log(`#######################################`)
    process.exit(1);
}else{
    console.log("URL: " + URL)
    console.log(`#######################################`)
}

console.log(`## SENDING ...`)
const func = async () => {
    let index = 1
    while(true){
        console.log(`--- Start: ${index} -----------`)
        console.time(`pp${index}`)
        try {
            let res = await axios.get(URL)
            console.log(`STATUS: ${res.status}`)
            console.log(`DATA: ${res.data}`)
        } catch (error) {
            console.error(error)
        }
    
        console.timeEnd(`pp${index}`)
        console.log(`--- Stop: ${index} ----------- \n`)
        index++
        await new Promise(r => setTimeout(r, process.env.TIME || 1000));
    }
}

func()


