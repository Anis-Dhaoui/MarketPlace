// JSON SERVER URL
// export const url = 'http://localhost:3001/';

// NODEJS HTTP SERVER URL
// export const url = 'http://localhost:3000/';

// NODEJS HTTPS SERVER URL
// export const url = 'https://localhost:3443/';

// HEROKU SERVER URL
// export const url = '/';

// RENDER SERVER URL
// export const url = 'https://thewayshop-api.onrender.com/';

export let url;
if(process.env.NODE_ENV === 'development'){
    console.log('Running in DEVELOPMENT mode');
    url = 'https://localhost:3443/';
}else{
    console.log('Running in PRODUCTION mode');
    url = 'https://thewayshop-api.onrender.com/' 
}