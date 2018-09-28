if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI:
     'mongodb://masterBaster:vidjot001@ds115613.mlab.com:15613/vidjot_production'}
}else{
  module.exports = {mongoURI:
    'mongodb://localhost/vidjot-dev'}
}