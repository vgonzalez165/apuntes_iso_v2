console.log("hola mundo");

const uts = [
    {
        number: "UT01",
        title: "Teoría de Sistemas Operativos",
        hours: 12,
        folder: "ut01",
    },
    {
        number: "UT02",
        title: "Virtualización",
        hours: 16,
        folder: "ut02",
    },
    {
        number: "UT03",
        title: "Windows 10. Instalación y primeros pasos",
        hours: 22,
        folder: "ut03",
    }
]

function showContent(x) {
    console.log(x);

    const converter = new showdown.Converter();
    fetch('./uts/ut06/02_pipelines.md')
        .then( (response) => {
            return response.text();
        } )
        .then( (md) => {
            const c = converter.makeHtml(md);
            const content = document.getElementById('content');
            console.log(c);
            content.innerHTML = c;
        } )
        .catch( (error) =  console.log(error) )


}


// Generamos el índice
const uts_list = uts.map( (item) => {
    const ut = document.createElement('a');
    ut.href="#";
    ut.textContent = `${item.number}: ${item.title}`
    ut.setAttribute('data-folder', item.folder);
    ut.onclick = function(e) {
        showContent(e.target.dataset.folder);
    }
    return ut;
} )


const sidebar = document.getElementById('sidebar');
// Creamos la lista
const ul = document.createElement('ul');

// Y la rellenamos
uts_list.forEach( (item) => {
    const li = document.createElement('li');
    li.appendChild(item);
    ul.appendChild(li);
} )

sidebar.appendChild(ul)


