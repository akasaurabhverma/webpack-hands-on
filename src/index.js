import './style.css';

import logo from '../assets/176.jpeg';
const img = document.createElement('img');
img.src = logo;

const rightNode = document.createElement('div');

const noteList = document.createElement('ul');

rightNode.appendChild(noteList);


const leftNode = document.createElement('div');

//Form to enter data in
const form = document.createElement('form');

//input-box that takes note from user and display on UI
const note = document.createElement('input');
note.type = 'textBox';
note.required = true;

const submit = document.createElement('button');
submit.type = 'submit';
submit.innerText = 'Submit';

form.append(note, submit);

form.addEventListener('submit', submitForm);


function submitForm(e) {
    e.preventDefault();

    const newNote = document.createElement('li');
    newNote.classList.add('red-text');
    newNote.innerText = note.value;

    noteList.appendChild(newNote);
}

leftNode.append(form);

document.getElementById('root').append(img, leftNode, rightNode);
