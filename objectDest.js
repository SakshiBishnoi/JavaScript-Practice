const user = {
    email : "user@example.com",
    firstname :  "John",
    lastname :  "Doe",
    age : 28,
    city :  "New York",
    state : "USA",
    pincode :  10005
}

const user2 = {
    email : "fsds@example.com",
    firstname :  "stacy",
    age : 28,
    city :  "souel",
    state : "korea",
    pincode :  453456
}

const {email, ...otherUserInfo }= user;
console.log(email); // Output: user@example.com
console.log(otherUserInfo)

const { age : UserAge } = user;
console.log(UserAge);



const {lastname : Lastname = 'NA'} = user2;
console.log(Lastname); 



function fullname(user){
    return  `${user.firstname} ${user.lastname}`;
}

function fullname(user){
    const  {firstname , lastname}= user;
    return `${firstname} ${lastname}`;
}

function fullname(firstname,lastname = 'fsdf'){
    return `${firstname} ${lastname}`;
}