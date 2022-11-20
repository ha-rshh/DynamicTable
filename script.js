const formEl = document.querySelector('.form');
const tbodyEl = document.querySelector('.insert-row');
const nameEl = document.querySelector("#name");
const emailEl = document.querySelector("#email");
const phoneEl = document.querySelector("#number");
const tableEl = document.querySelector(".table");
const containerEl = document.querySelector(".box");




containerEl.addEventListener("mousemove",(e) => {

    const {clientX} = e;
    containerEl.style.setProperty("--offset",clientX + "px")
})

formEl.addEventListener('submit', createTable=(event)=>{
    event.preventDefault();
    const stName = nameEl.value;
    const stEmail = emailEl.value;
    const stMobile = phoneEl.value;
    if(!stEmail || !stName || !stMobile){
        let error = document.getElementById('err');
        error.innerText = "Please Fill All the Fields"
        setTimeout(() => {
            error.innerText = "";
            error.style.transition = 'opacity 2s ease-in-out';
            }, 1000);
    } else {
    tbodyEl.innerHTML += `
                <tr>
                <td class="name-row">${stName}</td>
                <td class="email-row">${stEmail}</td>
                <td class="num-row">${stMobile}</td>
                <td class="delete-row">
                <button class="btn ">Delete</button>
                </td>
                </tr>`
    nameEl.value = "";
    emailEl.value = "";
    phoneEl.value = "";  
}});

tableEl.addEventListener('click', deleteRow=(event)=>{
    if(!event.target.classList.contains("btn")){
        return;
    } 
    const btn = event.target;
    btn.closest('tr').remove();
});


