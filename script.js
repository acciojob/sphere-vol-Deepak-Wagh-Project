function volume_sphere() {
    //Write your code here
const radiusInput=document.getElementById('radius');
const volumeInput=document.getElementById('volume');
const calculateBtn=document.getElementById('submit');
const form=document.getElementById('MyForm');

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const radius=radiusInput.value;
    console.log(radius)
    let volume=4*22*radius*radius*radius/21;
    volumeInput.value=parseFloat(volume.toFixed(4));
    console.log(volumeInput.value)
})
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
