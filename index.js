import random from 'random-name'
import axios from 'axios'
import randomMobile from 'random-mobile'
import randomEmail from 'random-email'
import coolImages from 'cool-images'
import categories from './categories.js'
import randomCategory from './randomCategory.js'
import randomDate from './randomDate.js'
import randomLongitude from './randomLongitude.js'
import randomLatitude from './randomLatitude.js'

console.log(randomMobile())
console.log(randomEmail());
console.log(coolImages.one());

console.log(randomCategory())

for (let i = 0; i < 1000; i++) {
    const name = random.first();
    const phone = randomMobile();
    const email = randomEmail();
    const image = coolImages.one();    
    console.log(`name: ${name}`)
    axios.post('http://127.0.0.1:3000/user/', {
        user: {
            phone: `${phone}`,
            email: `${email}`,
            profilePhoto:`${image}`,
            password:"admin123",
            name: `${name}`
        }
    }).then(res => {
        console.log(`userId = ${res.data.userId}`)
        axios.post(`http://127.0.0.1:3000/profile/${res.data.userId}`, {
            "dateOfBirth": randomDate(),
            "location": {
                "latitude": randomLatitude(),
                "longitude": randomLongitude()
            },
            "categoryId": randomCategory(),
            "sex": Math.random() > 0.5 ? "MALE" : "FEMALE",
            "photos": [
                `${image}`,
                `${image}`,
                `${image}`
            ]
        }).then(res => console.log(`profileId = ${res.data.profileId}`)).catch(
            e => console.log('ERRORERRORERRORERRORERRORERRORERROR'
            , e))
    }).catch(
        e => console.log('ERRORERRORERRORERRORERRORERRORERROR'
        , e))
}

 