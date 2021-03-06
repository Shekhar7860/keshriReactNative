import React, {Component} from 'react';
import {Platform, StyleSheet, AsyncStorage, NetInfo} from 'react-native';
import styles from '../styles/styles';
const apiUrl = "http://listingapp.ssalumni.com/api/user/"
export default class Service  extends Component {
  
  constructor(props){
    super(props);
    this.state = { 
      user :'',
      client : 0,
      isConnected: true
     
    }
  
  
  }

  componentDidMount() {
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
  }

  handleConnectivityChange = isConnected => {
    if (isConnected) {
      this.setState({ isConnected });
    } else {
      this.setState({ isConnected });
    }
    return NetInfo.getConnectionInfo();
  };

  // setClient = (val) => {
  //   console.log('this', this)
  //   this.setState({ client : val});
  // }

  getClient = () => {
    return this.state.client;
  }

saveUserData = async (key, value) => {
  //console.log(key ,value);
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    // Error retrieving data
    console.log(error.message);
  }
};

getUserData = async (key) => {
  var data = await AsyncStorage.getItem(key) || 'none';
  return data;
}

clearLocalStorage = async () => {
  try {
  await AsyncStorage.clear();
  } catch (error) {
  }
  }

validateEmail = (email) => {
  // console.log(email);
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  {
   
    return (true)
  }
    
    return (false)
};

login = (mobile, password) => 
{
 
 var data = {
    mobile: mobile,
    password : password,
  
   }
   console.log('api', apiUrl + 'login')
 return  fetch(apiUrl + 'login',
    {
      method: "POST",
      headers: {
       "Accept": "application/json",
       "Content-Type": "application/json"
      },
     body: JSON.stringify(data)
   }).then((response) => 
   response.json()
   )
   .catch((error) => {
     console.error(error);
   });
}

forgotPassword = (mobile) => 
{
 
 var data = {
    mobile: mobile
  
   }
   console.log('api', apiUrl + 'forget_password')
 return  fetch(apiUrl + 'forget_password',
    {
      method: "POST",
      headers: {
       "Accept": "application/json",
       "Content-Type": "application/json"
      },
     body: JSON.stringify(data)
   }).then((response) => 
   response.json()
   )
   .catch((error) => {
     console.error(error);
   });
}

searchMatrimonial = (height1, height2, age1, age2, qualification, weddingperson) => 
{
 
 var data = 
 {"height_from": height1,"height_to": height2,"age_from": age1,"age_to": age2,"education": qualification,"gender": weddingperson}
   console.log('api', apiUrl + 'matrimonials_search')
 return  fetch(apiUrl + 'matrimonials_search',
    {
      method: "POST",
      headers: {
       "Accept": "application/json",
       "Content-Type": "application/json"
      },
     body: JSON.stringify(data)
   }).then((response) => 
   response.json()
   )
   .catch((error) => {
     console.error(error);
   });
}


resendOTP = (mobile) => 
{
 
 var data = {
    mobile: mobile
  
   }
   console.log('api', apiUrl + 'resendOTP')
 return  fetch(apiUrl + 'resendOTP',
    {
      method: "POST",
      headers: {
       "Accept": "application/json",
       "Content-Type": "application/json"
      },
     body: JSON.stringify(data)
   }).then((response) => 
   response.json()
   )
   .catch((error) => {
     console.error(error);
   });
}



register = (name, email, mobile, password) => 
{
 console.log('name', name, 'password', password, 'mobile', mobile, 'email', email)

 var data = {
    name: name,
    password : password,
    location: "mohali",
    mobile:mobile,
    email : email
   }
  
 console.log(apiUrl + 'register', 'url;lll');
   return  fetch(apiUrl + 'register',
    {
      method: "POST",
      headers: {
       "Accept": "application/json",
       "Content-Type": "application/json"
      },
     body: JSON.stringify(data)
   }).then((response) => 
     console.log('resssss', response.json())

     )
   .catch((error) => {
     console.error(error, 'error');
   });
}

saveLead = (id, name, contact, city, country, prefcountry, prefcollege, prefprogram, ielts, intake) => 
{
 console.log('refid', id, 'name', name,  'contact', contact, 'country', country, 'city', city, 'pref', prefcountry, 'prefcollege', prefcollege, 'prefprogram', prefprogram, 'ielts', ielts, 'intake', intake)

 let formdata = new FormData();
 formdata.append("userId", id)
formdata.append("leadName", name)
formdata.append("leadContact", contact)
formdata.append("leadCity", city)
formdata.append("leadCountry", country)
formdata.append("leadPrefCountry", prefcountry)
formdata.append("leadPrefCollege",  prefcollege)
formdata.append("leadPrefProgram", prefprogram)
formdata.append("leadielts", ielts)
formdata.append("leadintake", intake)

  
 console.log(apiUrl + 'api/register', 'url;lll');
   return  fetch(apiUrl + 'api/leadSave',
    {
      method: "POST",
      headers: {
       "Accept": "application/json",
        'Content-Type': 'multipart/form-data',
      },
     body: formdata
   }).then((response) => 
     response.json())
   .catch((error) => {
     console.error(error, 'error');
   });
}
verifyOtp = (mobile, otp, type) => 
{
  var data = {
    mobile: mobile,
    otp   : otp,
    usertype : type
   }
  console.log(data)
 return  fetch(constants.apiUrl + '/user/verifiedOTP',
    {
      method: "POST",
      headers: {
       "Accept": "application/json",
       "Content-Type": "application/json"
      },
     body: JSON.stringify(data)
   }).then((response) => 
   response.json())
   .catch((error) => {
     console.error(error);
   });
}

getPosts = () => 
{
  console.log('https://theguestposting.com/parsome/api/allpost')
 return fetch('https://theguestposting.com/parsome/api/allpost',
    {
      method: "GET"
   }).then((response) => 
 response.json())
   .catch((error) => {
     console.error(error);
   });
}
findFreelancer = (token, category) => 
{
 //  console.log('url', constants.apiUrl + `/find-freelancer?&api_token=${token}&category_id=${category}`)
 return  fetch(constants.apiUrl + `/find-freelancer?&api_token=${token}&category_id=${category}`,
    {
      method: "GET"
   }).then((response) => 
   response.json())
   .catch((error) => {
     console.error(error);
   });
}

return (res) {
console.log(res, 'sjksjsj')
if(res.status == 200)
{
  return res.json()
}
else
{
  return "error"
}
}
getProfiles = () => {
  var data = {
    userId:1,
    categoryId:1
   }
   let formdata = new FormData();

formdata.append("userId", 1)
formdata.append("categoryId", 1)

  console.log(apiUrl + '/Profiles')
 return  fetch(apiUrl + '/Profiles',
    {
      method: "POST",
      headers: {
        'Content-Type': 'multipart/form-data'
      
      },
     body: formdata
   }).then((response) => 
   this.return(response))
   .catch((error) => {
     console.error(error);
   });
//  var token = 1
//    return fetch(apiUrl + `/Profiles?&categoryId=${token}&userId=${token}`,
//    {
//      method: "GET"
//   }).then((response) => 
//   response.json())
//   .catch((error) => {
//     console.error(error);
//   });
}
getFreelancerDetails = (token, id) => {
  return  fetch(constants.apiUrl + `/jobs-details?&api_token=${token}&job_id=${id}`,
    {
      method: "GET"
   }).then((response) => 
   response.json())
   .catch((error) => {
     console.error(error);
   });
}

jobs = (token) => 
{
 return fetch(constants.apiUrl + `/user/jobs?&api_token=${token}`,
    {
      method: "GET"
   }).then((response) => 
   response.json())
   .catch((error) => {
     console.error(error);
   });
}

addFav = (token,jobId,isFav) => 
{
  var data = {
    api_token: token,
    job_id : jobId,
    isFavourite : isFav
   }
  console.log(data)
 return  fetch(constants.apiUrl + '/is-favourite',
    {
      method: "POST",
      headers: {
       "Accept": "application/json",
       "Content-Type": "application/json"
      },
     body: JSON.stringify(data)
   }).then((response) => 
   response.json())
   .catch((error) => {
     console.error(error);
   });
}

getFavJobList = (token) => 
{
  console.log(token)
 return  fetch(constants.apiUrl + `/user/recommneded/favourite/Job?&api_token=${token}`,
    {
      method: "GET"
   }).then((response) => 
   response.json())
   .catch((error) => {
     console.error(error);
   });
}

profile_update = (api_token,username,email,about_me, imageUri, category, file, ID, user, skills) => 
{
  console.log(skills)
console.log("id", ID + "file", file)
 console.log("newimage", imageUri);
if(imageUri.uri != undefined)
{
var photo = {
    uri: imageUri.uri,
    type: 'multipart/form-data',
    name: 'photo.jpg',
  };
}
else
{
  var photo = {
    uri: imageUri,
    type: 'multipart/form-data',
    name: 'photo.jpg',
  }; 
}

if(file.fileName != undefined)
{
  console.log('FILE')
  var fileUploaded = {
    name: file.fileName,
    uri: file.uri,
    type: file.type
  }
}
else
{
  var fileUploaded = {
    name: 'doc.jpg',
    uri: file,
   type: 'multipart/form-data'
  }
}

if(ID.fileName != undefined)
{
  console.log('ID')
     var proof = {
      name: ID.fileName,
      uri: ID.uri,
     type: ID.type
    }
}
else
{
  var proof = {
    name: 'photo.jpg',
    uri: ID,
   type: 'multipart/form-data'
  }
}


var data = {
api_token: api_token,
user_name: username,
email:email,
about_me:about_me,
CV_file : file,
identity_Id : proof,
categoryId : category,
image_file : photo
}




var body = new FormData();
console.log("type", user)
if(user === "client")
{
  console.log(user)
body.append('api_token', api_token);
body.append('user_name',  username);
body.append('email', email);
body.append('about_me', about_me);
body.append('image_file', photo);
body.append('isLogin', 1);
}
else
{
  body.append('api_token', api_token);
  body.append('user_name',  username);
  body.append('email', email);
  body.append('about_me', about_me);
  body.append('CV_file', fileUploaded);
  body.append('identity_Id', proof);
  body.append('categoryId', category);
  body.append('image_file', photo);
  body.append('skills', skills);
  body.append('isLogin', 1);
}
console.log("res", body)

return fetch(constants.apiUrl + '/user/update/profile',
{
method: "POST",
headers: {
'Content-Type': 'multipart/form-data'
},
body: body
}).then((response) => 
response.json())
.catch((error) => {
console.error(error);
});
}

sendProposal= (api_token, freelancerId, jobId) => 
{
var data = {
api_token: api_token,
freelancer_id: freelancerId ,
job_id: jobId

}
console.log(data);
return fetch(constants.apiUrl + '/client/sendJobRequest',
{
method: "POST",
headers: {
"Accept": "application/json",
"Content-Type": "application/json"
},
body: JSON.stringify(data)
}).then((response) => 
response.json())
.catch((error) => {
console.error(error);
});
}

post_project = (api_token,title,description,country,category,job_type,budget,start_date,end_date, skills) => 
{
  console.log(country);
var data = {
"api_token":api_token ,
"title": title,
"description": description,
"country": country,
"category": category,
"job_type": job_type,
"budget": budget,
"start_date": start_date,
"end_date":end_date,
"skills_name": skills,
"publics":1
}
console.log(data)
// console.log(constants.apiUrl + '/submit-job')
return fetch(constants.apiUrl + '/submit-job',
{
method: "POST",
headers: {
"Accept": "application/json",
"Content-Type": "application/json"
},
body: JSON.stringify(data)
}).then((response) => 
response.json())
.catch((error) => {
console.error(error);
});
}

requestResponse = (api_token, requestStatus, jobId) => 
{
var data = {
"api_token":api_token ,
"request_status" :requestStatus,
"job_id" : jobId

}
console.log(data)
console.log(constants.apiUrl + '/user/accept/jobs')
return fetch(constants.apiUrl + '/user/accept/jobs',
{
method: "POST",
headers: {
"Accept": "application/json",
"Content-Type": "application/json"
},
body: JSON.stringify(data)
}).then((response) => 
response.json())
.catch((error) => {
console.error(error);
});
}


category = () => 
{
return fetch(constants.apiUrl + `/categories`,
{
method: "GET"
}).then((response) => 
response.json())
.catch((error) => {
console.error(error);
});
}

cities = () => 
{
return fetch(constants.apiUrl + `/city-lists`,
{
method: "GET"
}).then((response) => 
response.json())
.catch((error) => {
console.error(error);
});
}


create_milestone = (api_token,project_id, amount, end_date,description) => 
{
var data = {
api_token: api_token,
project_id : project_id,
amount : amount,
end_date : end_date,
description : description,
}
console.log(data)
return fetch(constants.apiUrl + '/create-milestone',
{
method: "POST",
headers: {
"Accept": "application/json",
"Content-Type": "application/json"
},
body: JSON.stringify(data)
}).then((response) => 
response.json())
.catch((error) => {
console.error(error);
});
}

createProject = (apiToken,jobId, freelancerId, amount , description) => 
{
var data = {
api_token: apiToken,
job_id : jobId ,
freelancer_id : freelancerId,
amount : amount,
description : description,
}
console.log(data)
return fetch(constants.apiUrl + '/create-project',
{
method: "POST",
headers: {
"Accept": "application/json",
"Content-Type": "application/json"
},
body: JSON.stringify(data)
}).then((response) => 
response.json())
.catch((error) => {
console.error(error);
});
}

getMilestoneList = (token, id) => 
{
 return  fetch(constants.apiUrl + `/view-milestone?&api_token=${token}&project_id=${id}`,
    {
      method: "GET"
   }).then((response) => 
   response.json())
   .catch((error) => {
     console.error(error);
   });
}

getprojectList = (token, id) => 
{
 return  fetch(constants.apiUrl + `/view-project?&api_token=${token}&job_id=${id}`,
    {
      method: "GET"
   }).then((response) => 
   response.json())
   .catch((error) => {
     console.error(error);
   });
}



feebback = (token, feedbck) => 
{
  var data = {
    api_token: token,
    feedback: feedbck
   }
   console.log(data)
 return  fetch(constants.apiUrl + '/submit-feedback',
    {
      method: "POST",
      headers: {
       "Accept": "application/json",
       "Content-Type": "application/json"
      },
     body: JSON.stringify(data)
   }).then((response) => 
   response.json())
   .catch((error) => {
     console.error(error);
   });
}
 
  
  
}