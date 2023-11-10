/* Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	            scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg
 */

// CREARE UN ARRAY DI OGGETTI CON TUTTE LE INFORMAZIONI

const list = [
    {
        userName : "Wayne",
        userSurname : "Barnett",
        userWork : "Founder & CEO",
        img : "./img/wayne-barnett-founder-ceo.jpg"
    },
    {
        userName : "Angela",
        userSurname : "Caroll",
        userWork : "Chief Editor",
        img : "./img/wayne-barnett-founder-ceo.jpg"
    },
    {
        userName : "Walter",
        userSurname : "Gordon",
        userWork : "Office Manager",
        img : "./img/wayne-barnett-founder-ceo.jpg"
    },
    {
        userName : "Angela",
        userSurname : "Lopez",
        userWork : "Social Media Manager",
        img : "./img/wayne-barnett-founder-ceo.jpg"
    },
    {
        userName : "Scott",
        userSurname : "Estrada",
        userWork : "Developer",
        img : "./img/wayne-barnett-founder-ceo.jpg"
    },
    {
        userName : "Barbara",
        userSurname : "Ramos",
        userWork : "Graphic Designer",
        img : "./img/wayne-barnett-founder-ceo.jpg"
    }
];

key(list);

// STAMPRAE SU CONSOLE PER OGNI MEMBRO LE INFORMAIZONI
function key(elemento) {
    const msg = document.getElementById("msg")
    for (let i = 0; i < elemento.length; i++) {
        
        for (let chiave in elemento[i]) {
            msg.innerHTML += (chiave, elemento[i][chiave]);
        }
        
    }
}



// STAMPARE LE INFO NEL DOM 

