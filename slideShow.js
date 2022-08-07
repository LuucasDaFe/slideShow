'use strict';

const images = [
	{ 'id': '1', 'url':'https://wallpapercave.com/wp/wp10544315.jpg'},
	{ 'id': '2', 'url':'./imagens/bc.jpg'},
	{ 'id': '3', 'url':'./imagens/bnh.jpg'},
	{ 'id': '4', 'url':'./imagens/ds.png'},
	{ 'id': '5', 'url':'https://images6.alphacoders.com/114/1144147.jpg'},
	{ 'id': '6', 'url':'./imagens/op.jpg'},
]

const containerItems = document.querySelector('#container-items')

const loadImages = (images, container) => {
	images.forEach (image => {
		container.innerHTML += `
			<div class='item'>
				<img src='${image.url}'
			</div>
		`
	})
}

loadImages( images, containerItems );

let items = document.querySelectorAll('.item');

const previous = () => {
	containerItems.appendChild(items[0]);
	items = document.querySelectorAll('.item');
}

const next = () =>{
	const lastItem = items[items.length - 1];
	containerItems.insertBefore(lastItem, items[0]);
	items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous)
document.querySelector('#next').addEventListener('click', next)

