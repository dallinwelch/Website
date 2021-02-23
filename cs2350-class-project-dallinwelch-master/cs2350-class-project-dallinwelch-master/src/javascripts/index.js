// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

// JavaScript
//TODO
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

/*
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
*/
const btn = document.querySelector('.btn');

// Listen for a click on the button
btn.addEventListener('click', function() {
  // Then toggle (add/remove) the .dark-theme class to the body
  document.body.classList.toggle('dark-theme');  
})




import { photos } from './photos'


for(let p of photos){
    let photos_thumb = document.getElementById('p' +p.id)
    photos_thumb.innerHTML = `
    
    <img  class="img-fluid" src ="${p.poster}"> 
    `
    photos_thumb.onclick = function(){
        selectPhotos(p)
    }
}
let featured_photos = document.querySelector('.featured')
function selectPhotos(p){
    featured_photos.innerHTML = `
    <img class="img-fluid" src="${p.poster}" >
    <p>${p.desc}</p>`
}