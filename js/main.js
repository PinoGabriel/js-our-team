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
        imgSource : "./img/wayne-barnett-founder-ceo.jpg"
    },
    {
        userName : "Angela",
        userSurname : "Caroll",
        userWork : "Chief Editor",
        imgSource : "./img/angela-caroll-chief-editor.jpg"
    },
    {
        userName : "Walter",
        userSurname : "Gordon",
        userWork : "Office Manager",
        imgSource : "./img/walter-gordon-office-manager.jpg"
    },
    {
        userName : "Angela",
        userSurname : "Lopez",
        userWork : "Social Media Manager",
        imgSource : "./img/angela-lopez-social-media-manager.jpg"
    },
    {
        userName : "Scott",
        userSurname : "Estrada",
        userWork : "Developer",
        imgSource : "./img/scott-estrada-developer.jpg"
    },
    {
        userName : "Barbara",
        userSurname : "Ramos",
        userWork : "Graphic Designer",
        imgSource : "./img/barbara-ramos-graphic-designer.jpg"
    }
];

key(list);

// STAMPRAE SU CONSOLE PER OGNI MEMBRO LE INFORMAIZONI
function key(elemento) {
    const msg = document.getElementById("msg")
    

    for (let i = 0; i < elemento.length; i++) {
        let divGen = document.createElement("div")
        let div = document.createElement("div")
        let divWork = document.createElement("div")
        let immagine = document.createElement("img")
        divGen.append(immagine, div, divWork)
        msg.append(divGen)
        divGen.classList.add("card")
        immagine.classList.add("imgWidth")
        div.classList.add("nameSurname")
        divWork.classList.add("job")


        div.innerHTML += elemento[i].userName + " " + elemento[i].userSurname;
        divWork.innerHTML += elemento[i].userWork
        immagine.src = elemento[i].imgSource

        
    }
}



// STAMPARE LE INFO NEL DOM 

