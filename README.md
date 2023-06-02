# My-Flight
My flight application is an application that will make it easier for flight service users because one of its main features is to provide information about departure delays in real-time. My flight also has features such as flight schedules, aircraft trackers, and other information.

# Backend API

### Technologies Used
* [NodeJs](https://nodejs.org/en) : Node. js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser.
* [ExpressJS](https://expressjs.com/) : Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application.
* [firebase](https://firebase.google.com/?hl=id) : Firebase is a comprehensive mobile and web development platform provided by Google. It offers a range of services and tools that help developers build and deploy high-quality applications quickly and easily. 

## End point 
### Users Activity
| Methods | Endpoints | Action | Authorization 
| --- | --- | --- | --- | 
| GET | `/api/profile` | To get the details of user profile  | yes 
| POST | `/api/register` | To sign up a new user account     | no 
| POST | `/api/login` | To login an existing user account    | no 
<!-- | PUT | `/api/user/profile` | To update an existing user profile | yes  -->
<!-- | GET | `/api/user/refreshtoken` | Get Refresh Expired Token | yes  -->

## `POST`
#### 1.  `/api/register` <br>
**Body Request**    : name, email, password <br>
***Authorization*** : -  <br>
**Response** :
```JSON
{
 
    "result":
    {
        "id": "5LKLeBIDGykNEVyDOBqw",
        "data":
        {
            "email": "tes9@gmail.com",
            "nama": "blablabal",
            "password": "loremlorem"
        },  
        "path": "users/5LKLeBIDGykNEVyDOBqw"
    }
}
```
#### 2.  `/api/login` <br>
**Body Request**    : email, password <br>
***Authorization*** : -  <br>
**Response** :
```JSON
{
 
    ...
}
```