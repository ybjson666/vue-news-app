export default{
    token:localStorage.getItem('appToken')||"",
    userInfo:{},
    uid:JSON.parse(localStorage.getItem('uid')) || {},
    serviceTypes:[],
    personBackgrounds:[],
    servAreas:[]
}