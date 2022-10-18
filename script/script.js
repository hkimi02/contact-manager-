let show_date = document.querySelector("#date");
show_date.innerHTML += (new Date);

const show_search_button = document.getElementById("show_search_button");
show_search_button.addEventListener('click', () => {
    document.getElementById("search_block").classList.toggle("none");
})
const show_add_contact = document.getElementById("add_contact");
show_add_contact.addEventListener('click', () => {
    document.querySelector("#form_module").classList.toggle("none");
    document.querySelector("table").classList.add("none");
    document.querySelector("#card").classList.toggle("opac");
})
const close_btn = document.getElementById("close-btn");
close_btn.addEventListener("click", () => {
    document.querySelector("#form_module").classList.add("none");
    document.querySelector("#card").classList.remove("opac");
    let errur = document.querySelectorAll(".inputs p");
    for (i = 0; i < errur.length; i++) {
        errur[i].innerHTML = "";
    }
    vider_form();
})
const show_table = document.getElementById("show_table");
show_table.addEventListener("click", () => {
    document.querySelector("table").classList.toggle("none");
    document.querySelector("#form_module").classList.add("none");
    document.querySelector("#card").classList.toggle("opac");
})
const hide_all = document.getElementById("hide_all");
hide_all.addEventListener('click', () => {
    document.querySelector("table").classList.add("none");
    document.querySelector("#form_module").classList.add("none");
    document.querySelector("#card").classList.remove("opac");
})
const hide_table = document.getElementById("hide_table");
hide_table.addEventListener('click', () => {
    document.querySelector("table").classList.add("none");
    document.querySelector("#card").classList.remove("opac");
})


document.getElementById("hide_searched").addEventListener('click', () => {
    document.querySelector(".searched_contact").style.display = "none";
    document.querySelector("#card").classList.remove("opac");
})
let menu_responsive = document.querySelector("#menu");
console.log(menu_responsive);
menu_responsive.addEventListener('click', () => {
    console.log(menu_responsive);
    document.querySelector("aside").classList.toggle("none");
    document.querySelector(".cards").classList.toggle("width-cards");
})
document.querySelector("#hide_existe").addEventListener('click', () => {
        document.querySelector(".existe").style.display = "none";
    })
    /////////////////////////////////////////////////////////*end of styleeee */////////////////////////////////////////
function unique(pnumber) {
    contacts = JSON.parse(localStorage.getItem('contacts'));
    let unique_verif = false;
    for (i = 0; i < contacts.length; i++) {
        if (contacts[i].number == pnumber) {
            document.querySelector(".existe").style.display = "grid";
            return unique_verif;
        }
    }
    return true;
}


function search() {
    contacts = JSON.parse(localStorage.getItem('contacts'));
    document.querySelector(".searched_contact .info").innerHTML = "";
    let name_search = document.querySelector("#search").value;
    let searched = false;
    let i = 0;
    while (searched == false && i < contacts.length) {
        if (contacts[i].name == name_search) {
            let div = document.createElement("div");
            let name = document.createElement("h1");
            let job = document.createElement("h1");
            let number = document.createElement("h1");
            name.appendChild(document.createTextNode("name : " + contacts[i].name));
            job.appendChild(document.createTextNode("job : " + contacts[i].job));
            number.appendChild(document.createTextNode("number : " + contacts[i].number));
            document.querySelector(".searched_contact .info").appendChild(name);
            document.querySelector(".searched_contact .info").appendChild(job);
            document.querySelector(".searched_contact .info").appendChild(number);
            document.querySelector(".yesno").innerHTML = "your searched contact information : ";
            document.querySelector(".searched_contact").style.display = "grid";
            document.querySelector("#card").classList.add("opac");
            searched = true;
        } else {
            i++;
        }
    }
    if (searched == false) {
        document.querySelector(".searched_contact").style.display = "block";
        document.querySelector("#card").classList.add("opac");
        document.querySelector(".yesno").innerHTML = "OUPPSSS ! we could not find this contact check the name and search again ! ";
        document.querySelector(".yesno").classList.remove("success");
        document.querySelector(".yesno").classList.add("danger");
    }
}

function verif() {
    let name = document.querySelector("#name");
    let job = document.querySelector("#job");
    let number = document.querySelector("#number");
    let div_name = document.querySelector("#name_div");
    let div_job = document.querySelector("#job_div");
    let div_number = document.querySelector("#number_div");
    let p_name = document.createElement("p");
    let p_job = document.createElement("p");
    let p_number = document.createElement("p");
    let text_name, text_job, text_number;
    let verif_name, verif_job, verif_number;
    verif_name = true;
    verif_job = true;
    verif_number = true;
    if (name.value == "") {
        text_name = document.createTextNode("the name input must be filled ! ");
        p_name.appendChild(text_name);
        p_name.classList.add("danger");
        div_name.appendChild(p_name);
        verif_name = false;
    }
    if (job.value == "") {
        text_job = document.createTextNode("the job input must be filled ! ");
        p_job.appendChild(text_job);
        p_job.classList.add("danger");
        div_job.appendChild(p_job);
        verif_job = false;
    }
    if (number.value == "") {
        text_number = document.createTextNode("the phone number input must be filled ! ");
        p_number.appendChild(text_number);
        p_number.classList.add("danger");
        div_number.appendChild(p_number);
        verif_number = false;
    } else {
        const array_number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        let i = 0;
        let b = 0;
        let number_only = true;
        while (i < (number.value).length && number_only == true) {
            b = parseInt((number.value)[i]);
            if (array_number.indexOf(b) == -1) {
                number_only = false;
            }
            i++;
        }
        if (number_only == false) {
            text_number = document.createTextNode("the phone number input must contains only number ! ");
            p_number.appendChild(text_number);
            p_number.classList.add("danger");
            div_number.appendChild(p_number);
            verif_number = false;
        }
    }
    let number_length = number.value.length;
    console.log(number_length);
    if (number_length != 8) {
        let verif_length_number = document.createTextNode("the phone number must conatins only 8 digits ! ");
        p_number.appendChild(verif_length_number);
        p_number.classList.add("danger");
        div_number.appendChild(p_number);
        verif_number = false;
    }
    if (verif_name == true && verif_job == true && verif_number == true) {
        return true;
    } else {
        return false;
    }
}

function vider_form() {
    document.querySelector("#name").value = "";
    document.querySelector("#job").value = "";
    document.querySelector("#number").value = "";
    let errur = document.querySelectorAll(".inputs p");
    for (i = 0; i < errur.length; i++) {
        errur[i].innerHTML = "";
    }
}

function get_data_user() {
    let name = document.querySelector("#name");
    let job = document.querySelector("#job");
    let number = document.querySelector("#number");
    let contact = {};
    contact.id = id++;
    if (verif() == true && unique(number.value) == true) {
        contact.name = name.value;
        contact.job = job.value;
        contact.number = number.value;
        contacts.push(contact);
        localStorage.setItem('contacts', JSON.stringify(contacts));
        document.querySelector("#form_module").classList.add("none");
        document.querySelector("table").classList.add("none");
        document.querySelector("#card").classList.remove("opac");
        console.log(contact);
        affiche2(contact);
        document.getElementById("contact_number").innerHTML = "number of contacts : " + contacts.length;
        vider_form();
    }
}



function affiche2(contact) {
    let zone_totale = document.querySelector(".cards");
    zone_totale.innerHTML += `<div class="contact-card">
    <div class="title">
        <h1>contact card</h1>
        <span class="material-symbols-sharp">
            contact_page
        </span>
    </div>
    <div class="information">
        <h3>name : ${contact.name}</h3>
        <h3>job title : ${contact.job}</h3>
        <h3>phone number : ${contact.number}</h3>
    </div>
    <div class="operation">
        <div class="delete"><span class="material-symbols-sharp" onclick="delete_contact(${contact.id})">
                delete
            </span></div>
        <div class="edit"><span class="material-symbols-sharp"onclick="edit_contact(${contact.id})">
                edit
            </span></div>
    </div>
    <p class="new">new</p>
</div>`
    let tbody = document.querySelector("tbody");
    tbody.innerHTML += `<tr>
            <td>${contact.name}</td>
            <td>${contact.job}</td>
            <td>${contact.number}</td>
        </tr>`
}

function affiche_old(contact) {
    let zone_totale = document.querySelector(".cards");
    zone_totale.innerHTML += `<div class="contact-card">
    <div class="title">
        <h1>contact card</h1>
        <span class="material-symbols-sharp">
            contact_page
        </span>
    </div>
    <div class="information">
        <h3>name : ${contact.name}</h3>
        <h3>job title : ${contact.job}</h3>
        <h3>phone number : ${contact.number}</h3>
    </div>
    <div class="operation">
        <div class="delete"><span class="material-symbols-sharp" onclick="delete_contact(${contact.id})">
                delete
            </span></div>
        <div class="edit"><span class="material-symbols-sharp"onclick="edit_contact(${contact.id})">
                edit
            </span></div>
    </div>
</div>`
    let tbody = document.querySelector("tbody");
    tbody.innerHTML += `<tr>
            <td>${contact.name}</td>
            <td>${contact.job}</td>
            <td>${contact.number}</td>
        </tr>`
}
document.getElementById("edit_delete_input").addEventListener('click', () => {
    document.getElementById("name_edit").value = "";
    document.getElementById("job_edit").value = "";
    document.getElementById("number_edit").value = "";
})

function edit_contact(id) {
    let contact_id = return_index(id);
    document.querySelector("#edit_module").classList.remove("none");
    document.querySelector("#card").classList.add("opac");
    let name = document.querySelector("#name_edit");
    let job = document.querySelector("#job_edit");
    let number = document.querySelector("#number_edit");
    name.value = contacts[contact_id].name;
    job.value = contacts[contact_id].job;
    number.value = contacts[contact_id].number;
    let update_btn = document.getElementById("edit");
    update_btn.addEventListener('click', () => {
        contacts = JSON.parse(localStorage.getItem("contacts"));
        let name = document.querySelector("#name_edit");
        let job = document.querySelector("#job_edit");
        let number = document.querySelector("#number_edit");
        contacts[contact_id].name = name.value;
        contacts[contact_id].job = job.value;
        contacts[contact_id].number = number.value;
        localStorage.setItem("contacts", JSON.stringify(contacts));
        document.querySelector(".cards").innerHTML = "";
        document.querySelector("tbody").innerHTML = "";
        get_data_open();
        document.querySelector("#edit_module").classList.add("none");
        document.querySelector("#card").classList.remove("opac");
    });
}
document.getElementById("edit-close-btn").addEventListener('click', () => {
    document.querySelector("#edit_module").classList.add("none");
    document.querySelector("#card").classList.remove("opac");
})


function delete_all() {
    document.querySelector(".cards").innerHTML = "";
    document.querySelector("tbody").innerHTML = "";
    contacts = [];
    localStorage.setItem('contacts', JSON.stringify(contacts));
    document.getElementById("contact_number").innerHTML = "number of contacts : 0";
}

function get_data_open() {
    for (i = 0; i < contacts.length; i++) {
        affiche_old(contacts[i]);
    }
}

function return_index(id_contact) {
    for (let i = 0; i < contacts.length; i++) {
        if (id_contact === contacts[i].id) {
            return i;
        }
    }
    return -1;
}

function delete_contact(id) {
    let idd = return_index(id);
    contacts = JSON.parse(localStorage.getItem('contacts'));
    contacts.splice(return_index(id), 1);
    localStorage.setItem('contacts', JSON.stringify(contacts));
    document.querySelector(".cards").innerHTML = "";
    document.querySelector("tbody").innerHTML = "";
    get_data_open();
    document.getElementById("contact_number").innerHTML = "number of contacts : " + contacts.length;
}


/**********************************************************main code ***********************************/
var contacts = JSON.parse(localStorage.getItem('contacts')) || [];
var id;
if (contacts.length === 0) {
    id = 0;
    localStorage.setItem('contacts', JSON.stringify(contacts));
} else id = contacts[contacts.length - 1].id;

get_data_open();
let save_btn = document.querySelector("#save");
save_btn.addEventListener('click', get_data_user);
document.getElementById("delete_input").addEventListener('click', vider_form);
let delet_all = document.getElementById("delete_all");
delet_all.addEventListener('click', delete_all);
document.getElementById("contact_number").innerHTML = "number of contacts : " + contacts.length;