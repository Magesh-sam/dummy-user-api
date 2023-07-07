
# DUMMMY USER API 👨‍💻
**[Dummy user API](https://dummyuser.vercel.app/ "Dummy user API")** can quickly produce a variety of profiles for your application, giving it a boost with actual user data and providing a lively and interesting user experience while saving you time.

Designed in [**Figma**](https://www.figma.com/file/7JyXxYG1nM1ElI9sTeqN4J/API?type=design&node-id=0%3A1&mode=design&t=ocyC5QcRRZSfyDqc-1 "Figma"), Build with **NEXT.JS** and Deployed in **Vercel** with ❤️ by [**Mageshkannan**](https://github.com/magesh-sam "Mageshkannan")

## Why?
Create dynamic user profiles on the fly with realistic personal details such as names, email addresses, usernames, and profile pictures, etc.., with Dummy User API.4

By leveraging the Dummy User API, you can streamline your development process, enhance user testing, and create more realistic and engaging experiences within your applications.

Empower your team to iterate quickly and efficiently, all while delivering exceptional user experiences that reflect real-world scenarios.

## Features
- No Registration
- Zero Configuration
-  Basic and Advanced Query
-  Filtered and Nested Endpoints
- Supports GET, POST, PUT, PATCH, and, DELETE request

##Resources
- all users [https://dummyuser.vercel.app/users](https://dummyuser.vercel.app/users)
- single user [https://dummyuser.vercel.app/users/1](https://dummyuser.vercel.app/users/1)
- query [https://dummyuser.vercel.app/users/q?](https://dummyuser.vercel.app/users/q?)

##Available Filters
- first_name, last_name = q?first_name=name&last_name=name
- first_name = q?first_name=name
- last_name = q?last_name=name
- ageGT, ageLT = q?ageGT=age&ageLT=age
- ageGT = q?ageGT=age
- ageLT = q?ageLT=age
- country, city = q?country=name&city=name
- country = q?country=name
- city = q?city=name

## Data types for Typescript

```javascript
{
  id: number,
  first_name: string,
  last_name: string,
  avatar: string,
  date_of_birth: string,
  age: number,
  gender: string,
  email: string,
  Phone: string,
  location: {
    country: string,
    city: string,
    postal_code: number
  },
  user: {
    username: string,
    password: string,
    userid: string
  },
}
```

##How To

### Get all the users
```javascript
fetch('https://dummyuser.vercel.app/users')
  .then((response) => response.json())
  .then((json) => console.log(json));
```

More Examples and Guide Available on [https://dummyuser.vercel.app/docs](https://dummyuser.vercel.app/docs)

>>>>>>> b2c5c7fc04b9b3c43e12112b0446313249f70467
