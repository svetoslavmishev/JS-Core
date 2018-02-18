function addItem() {
    let itemText = document.getElementById('newItemText');
    let itemValue = document.getElementById('newItemValue');
    let option = document.createElement('option');
    option.textContent = itemText.value;
    option.value = itemValue.value;
    document.getElementById('menu').appendChild(option);
    itemValue.value = '';
    itemText.value = '';
}