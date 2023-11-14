function storeNameAndRedirect() {
    const nameInput = document.getElementById('nameInput');
    const name = nameInput.value;
    window.location.href = `playpage.html?name=${name}`;
}