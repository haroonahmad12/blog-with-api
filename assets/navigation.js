//---------------------------------NAV BAR -------------------------------------------//

navbar.addEventListener("click", (event) => {
    if (event.target.matches("button")) {
        switch (event.target.id) {
            case "page-1":
                blogGrid.innerHTML = "";
                h = 0;
                j = 9;
                createBlogs();
                document.getElementById("prev-li").classList.add("disabled"); // Disables the previous button as soon as you reach page 1
                document.getElementById("next-li").classList.remove("disabled"); // Enables the next button if you're not on the last page.

                document
                    .getElementById("page-2")
                    .parentNode.classList.remove("new-tile");
                document
                    .getElementById("page-3")
                    .parentNode.classList.remove("new-tile");

                removeNewTiles();

                break;

            case "page-2":
                blogGrid.innerHTML = "";
                h = 9;
                j = 18;
                createBlogs();

                event.target.parentNode.classList.add("new-tile");
                document
                    .getElementById("page-1")
                    .parentNode.classList.remove("new-tile");
                document
                    .getElementById("page-3")
                    .parentNode.classList.remove("new-tile");

                document.getElementById("prev-li").classList.remove("disabled");
                document.getElementById("next-li").classList.remove("disabled");

                removeNewTiles();
                break;

            case "page-3":
                blogGrid.innerHTML = "";
                h = 18;
                j = 27;
                createBlogs();
                document.getElementById("prev-li").classList.remove("disabled");
                document.getElementById("next-li").classList.remove("disabled");
                event.target.parentNode.classList.add("new-tile");
                document
                    .getElementById("page-1")
                    .parentNode.classList.remove("new-tile");
                document
                    .getElementById("page-2")
                    .parentNode.classList.remove("new-tile"); // Highlights the page you are on!

                removeNewTiles();

                break;

            case "page-previous":
                blogGrid.innerHTML = "";
                h -= 9;
                j -= 9;
                createBlogs();

                document.getElementById("next-li").classList.remove("disabled");

                if (h === 0) {
                    document.getElementById("prev-li").classList.add("disabled");
                }

                //---------------Remove the Number Tiles--------------//

                removeNewTiles();

                if ((h + 9) / 9 > 3) {
                    let newTile = `<li class="page-item new-tile" id = "new-tile">
                    <button class="page-link" id="page-${(h + 9) / 9}">....  ${
            (h + 9) / 9
          }</button>
                  </li>`;
                    document
                        .getElementById("next-li")
                        .insertAdjacentHTML("beforebegin", newTile);
                }
                document
                    .getElementById("page-2")
                    .parentNode.classList.remove("new-tile");
                document
                    .getElementById("page-3")
                    .parentNode.classList.remove("new-tile");
                document
                    .getElementById("page-1")
                    .parentNode.classList.remove("new-tile");

                highlight();

                break;

            case "page-next":
                document.getElementById("prev-li").classList.remove("disabled");

                blogGrid.innerHTML = "";
                h += 9;
                j += 9;

                if (j > retrieveData.length) {
                    j = retrieveData.length;
                }

                createBlogs();

                if (j > retrieveData.length - 3) {
                    document.getElementById("next-li").classList.add("disabled");
                }

                if (j > 27) {
                    removeNewTiles();

                    let newTile = `<li class="page-item new-tile" id = "new-tile">
                    <button class="page-link" id="page-${(h + 9) / 9}">....  ${
            (h + 9) / 9
          }</button>
                  </li>`;
                    document
                        .getElementById("next-li")
                        .insertAdjacentHTML("beforebegin", newTile);
                }
                document
                    .getElementById("page-2")
                    .parentNode.classList.remove("new-tile");
                document
                    .getElementById("page-3")
                    .parentNode.classList.remove("new-tile");
                document
                    .getElementById("page-1")
                    .parentNode.classList.remove("new-tile");

                highlight();

                break;
            default:
                break;
        }
    }
});

//--------------------END NAV BAR-----------------------//

function highlight() {
    if (h === 18) {
        document.getElementById("page-1").parentNode.classList.remove("new-tile");
        document.getElementById("page-2").parentNode.classList.remove("new-tile");
        document.getElementById("page-3").parentNode.classList.add("new-tile");
    }

    if (h === 9) {
        document.getElementById("page-2").parentNode.classList.add("new-tile");
        document.getElementById("page-1").parentNode.classList.remove("new-tile");
        document.getElementById("page-3").parentNode.classList.remove("new-tile");
    }

    if (h === 0) {
        document.getElementById("page-1").parentNode.classList.add("new-tile");
        document.getElementById("page-2").parentNode.classList.remove("new-tile");
        document.getElementById("page-3").parentNode.classList.remove("new-tile");
    }
}

function removeNewTiles() {
    if (document.getElementById("new-tile") !== null) {
        document.getElementById("new-tile").remove();
    }
}