
const button = document.getElementById('post');
const modal = document.querySelector('.my-modal');
const edit = document.querySelector('.edit-alert');
const close = document.querySelector('.close');
const close2 = document.querySelector('.alert-close');
const keep_edit = document.querySelector('.btn1');
const discard = document.querySelector('.btn2');
const edit_alert = document.querySelector('.alert-content');

button.addEventListener('click',function(){
    modal.classList.add('active');

});
close.addEventListener('click',function(){
    modal.classList.remove('active');
    edit.classList.add('active');
});
modal.addEventListener('click',function(e){
    if(e.target == modal){
        modal.classList.remove('active');
    }
});
close2.addEventListener('click',function(){
    edit.classList.remove('active');
});
keep_edit.addEventListener('click',function(){
    modal.classList.add('active');
    edit.classList.remove('active');
});
discard.addEventListener('click',function(){
    edit.classList.remove('active');
});
