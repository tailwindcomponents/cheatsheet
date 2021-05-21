// https://nerdcave.com/tailwind-cheat-sheet
// Activar las opciones de ocultar "search highlight" y "version labels"

let categories = [];

document.querySelector("#app > div.min-w-0.flex.w-full.flex-1.\\/.pb-16.pl-4.pt-16.\\/.lg\\:pt-1.lg\\:pl-52").querySelectorAll("section > div > div").forEach(el => {
    let category = {};
    category.title = el.querySelector("header h2").innerText;
    category.content = [];

    el.querySelectorAll("ul > li").forEach(subCategory => {
        let subCat = {};

        console.log(subCategory.querySelector("div:first-child a").href)
        subCat.title = subCategory.querySelector("div:first-child > span").innerHTML;
        subCat.docs = subCategory.querySelector("div:first-child a").href;
        subCat.description = subCategory.querySelector("div:last-child div:first-child > p").innerHTML;
        subCat.table = [];

        subCategory.querySelectorAll("div:last-child div:last-child > table tr").forEach(tr => {
            let trTable = [];
            let count = 0;

            tr.querySelectorAll("td span").forEach(td => {
                let tableCont = null;

                if (count === 0 && subCat.title.includes("color")) {
                    tableCont = td.style.background;
                } else {
                    tableCont = td.innerHTML;
                }

                if (tableCont !== null) {
                    trTable.push(tableCont);
                }

                count++;
            });

            subCat.table.push(trTable);
        });

        category.content.push(subCat);
    });

    categories.push(category);
});

console.log(JSON.stringify(categories));
