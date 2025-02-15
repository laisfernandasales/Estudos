function addContact(){
    const contactSection = document.getElementById('contact-list'); /* pega o elemento com o id contact-list e armazena na variavel contactSection */

    const h3 = document.createElement('h3'); /*cria um novo elemento */
    h3.innerText = "Contato"; /* define o texto desse titulo como contato */


    const ul = document.createElement('ul'); /* cria uma lista */
    const nameLi = document.createElement('li'); /* cria um item da lista */
    nameLi.innerText= "Nome: " /* define o item da lista como Nome */
    const nameInput = document.createElement('input'); /* cria um novo elemento <input>
    nameInput.name = "name"; /* define o nome desse input como nome */
    nameLi.appendChild(nameInput); /* adiciona o input ao elemento nameLi */
    ul.appendChild(nameLi); /* adiciona o elemento nameLi ao elemento ul */

   
    const PhoneLi = document.createElement('li'); /* cria um novo elemento */
    PhoneLi.innerText= "Nome: " /* define o texto desse elemento NameLi como Nome */
    const phoneInput = document.createElement('input'); /* cria um novo elemento */
    phoneInput.type = "text"; /* define o tipo desse input como texto */
    phoneInput.name = "phone"; /* define o nome desse input como name */
    nameLi.appendChild(phoneInput); /* adiciona o input ao elemento nameLi */
    ul.appendChild(phoneLi); /* adiciona o elemento nameLi ao elemento ul */ 

    // parei em -09:41 do video

}