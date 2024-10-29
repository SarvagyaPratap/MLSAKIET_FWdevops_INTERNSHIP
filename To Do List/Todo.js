document.addEventListener('DOMContentLoaded', function() {
    function Add() {
        console.log('Add function called');
        var input = document.getElementById('inp');
        var text = document.createTextNode(input.value);
        var listItem = document.createElement('li');
        listItem.appendChild(text);
        document.getElementsByClassName('text')[0].appendChild(listItem);
        input.value = "";
        listItem.onclick = function() {
            listItem.style.textDecoration = "line-through";
        }
        var removeButton = document.createElement('button');
        removeButton.appendChild(document.createTextNode('Remove'));
        listItem.appendChild(removeButton);
        removeButton.onclick = function() {
            var parent = this.parentElement;
            parent.remove();
        }
    }
    window.Add = Add;
});
