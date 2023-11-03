let toastbox = document.getElementById('toastbox');
let successMsg = '<i class="fa-solid fa-circle-check"></i> successfully Submitted'
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> please fix the error'
let invalidMsg= '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again'
function showtoast(msg){
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg
    toastbox.appendChild(toast);
    
    if(msg.includes('error')){
        toast.classList.add('error');
    }
    if(msg.includes('Invalid')){
        toast. classList.add('invalid');
    }
    setTimeout(()=>{
        toast.remove();
    },5000);
    
}