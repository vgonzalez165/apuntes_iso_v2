import {uts} from "./contents.js";

/*

<div class="uts">
    <div class="ut">
        <div class="ut-title">UTXX: TITULO DE LA UT</div>
        <div class="ut-chapter-list">
            <div class="ut_chapter">X. Título del apartado</div>
            <div class="ut_chapter">Y. Título del apartado</div>
            <div class="ut_chapter">Z. Título del apartado</div>
        </div>
    </div>
    <div class="ut">
        <div class="ut-title">UTXX: TITULO DE LA UT</div>
        <div class="ut-chapter-list">
            <div class="ut_chapter">X. Título del apartado</div>
            <div class="ut_chapter">Y. Título del apartado</div>
            <div class="ut_chapter">Z. Título del apartado</div>
        </div>
    </div>
</div>

*/

function generate_index() {
    const sidebar = document.getElementById("sidebar");

    uts.forEach( (ut) => {
        const divUt = document.createElement('div');
        divUt.classList.add("ut");
        // Creamos el título
        const divUtTitle = document.createElement('div');
        divUtTitle.classList.add("ut-title");
        divUtTitle.textContent = `${ut.number}: ${ut.title}`;
        divUt.append(divUtTitle);
        // Creamos el contenedor con los apartados
        const divChapterList = document.createElement('div');
        divChapterList.classList.add("ut-chapter-list");
        // Creamos cada uno de los apartados
        ut.contents.forEach( (chapter) => {
            const divChapter = document.createElement('div');
            divChapter.classList.add("ut-chapter");
            divChapter.textContent = chapter.title;
            divChapter.setAttribute('data-file', chapter.file);
            divChapterList.append(divChapter);
        } )
        divUt.append(divChapterList);
        sidebar.append(divUt);
    } )
}


generate_index();


// // Generamos el índice de UTs con sus apartados
// const uts_list = uts.map( (item) => {
//     const ut = document.createElement('a');
//     ut.href="#";
//     ut.textContent = `${item.number}: ${item.title}`;
//     ut.setAttribute('data-folder', item.folder);
//     ut.onclick = function(e) {
//         showContent(e.target.dataset.folder);
//     }
//     return ut;
// } )


// const sidebar = document.getElementById('sidebar');
// // Creamos la lista
// const ul = document.createElement('ul');

// // Y la rellenamos
// uts_list.forEach( (item) => {
//     const li = document.createElement('li');
//     li.appendChild(item);
//     ul.appendChild(li);
// } )

// sidebar.appendChild(ul)


// function showContent(x) {
//     const converter = new showdown.Converter();
//     fetch('./uts/ut06/02_pipelines.md')
//         .then( (response) => {
//             return response.text();
//         } )
//         .then( (md) => {
//             const c = converter.makeHtml(md);
//             const content = document.getElementById('content');
//             console.log(c);
//             content.innerHTML = c;
//         } )
//         .catch( (error) =  console.log(error) )
// }
