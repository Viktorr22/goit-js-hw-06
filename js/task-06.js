const thisInput = document.querySelector('input');

function checkInput() {
    thisInput.classList.remove("valid", "invalid")
    if (thisInput.value.length === Number(thisInput.dataset.length)) {
        thisInput.classList.add("valid");
    }
    else {thisInput.classList.add("invalid")}

}

thisInput.addEventListener("blur", checkInput);
