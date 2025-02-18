function addContact() {
    const contactSection = document.getElementById('contacts-list'); // pega o elemento com o id contact-list e armazena na variavel contactSection

    const h3 = document.createElement('h3'); // cria um novo elemento
    h3.innerText = "Contato"; // define o texto desse titulo como contato

    const ul = document.createElement('ul'); // cria uma lista

    const nameLi = document.createElement('li'); // cria um item da lista
    nameLi.innerText = "Nome: "; // define o item da lista como Nome
    const nameInput = document.createElement('input'); // cria um novo elemento <input>
    nameInput.type = "text"; // define o nome desse input como nome
    nameInput.name = "fullname"; // define o nome desse input como nome
    nameLi.appendChild(nameInput); // adiciona o input ao elemento nameLi
    ul.appendChild(nameLi); // adiciona o elemento nameLi ao elemento ul
    ul.appendChild(document.createElement('br')); // adiciona uma quebra de linha ao elemento ul

    const phoneLi = document.createElement('li'); // cria um novo elemento
    phoneLi.innerText = "Telefone: "; // define o texto desse elemento phoneLi como Telefone
    const phoneInput = document.createElement('input'); // cria um novo elemento
    phoneInput.type = "text"; // define o tipo desse input como texto
    phoneInput.name = "phone"; // define o nome desse input como phone
    phoneLi.appendChild(phoneInput); // adiciona o input ao elemento phoneLi
    ul.appendChild(phoneLi); // adiciona o elemento phoneLi ao elemento ul
    ul.appendChild(document.createElement('br')); // adiciona uma quebra de linha ao elemento ul


    const addressLi = document.createElement('li'); // cria um novo elemento
    addressLi.innerHTML = '<label for="address">Endereço: </label>'; // define o texto desse elemento como Endereço
    const addressInput = document.createElement('input'); // cria um novo elemento
    addressInput.type = "text"; // define o tipo desse input como texto
    addressInput.name = "address"; // define o nome desse input como address
    addressInput.id = "address"; // define o id desse input como address
    addressLi.appendChild(addressInput); // adiciona o input ao elemento addressLi
    ul.appendChild(addressLi); // adiciona o elemento addressLi ao elemento ul

    contactSection.append(h3, ul); // adiciona o titulo e a lista ao elemento contactSection
}

function removeContact(){
   const contactSection= document.getElementById('contacts-list');
   
   const titles = document.getElementsByTagName('h3');
   const contacts = document.getElementsByTagName('ul');

   contactSection.removeChild(titles[titles.length - 1]); // remove o ultimo titulo
   contactSection.removeChild(contacts[contacts.length - 1]); // remove a ultima lista
}