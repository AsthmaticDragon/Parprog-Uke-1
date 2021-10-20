function updateView() {
    listMaker();
    document.getElementById("app").innerHTML = html;
    lydListe();
}
function listMaker() {
    html = `<img class="image" src="https://media.discordapp.net/attachments/899604876416393237/900295661096931358/red-drum-kit-isolated-picture-id935671156.png">
  <div id="liszt">
  `
    for (let i = 0; i < model.liszt.length; i++) {
       html += `<li>
                <kbd class="key-code">${model.liszt[i].key}</kbd>
                <span>${model.liszt[i].sound}</span>
                </li>`
    }
    html += `</div>`
    return html;
 };
 