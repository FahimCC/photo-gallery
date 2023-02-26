const imageUrl = () => {
	console.log();
	return `https://picsum.photos/4${Math.round(Math.random()*9)}${Math.round(Math.random()*9)}`;
} 
fetch('https://jsonplaceholder.typicode.com/photos')
	.then(res => res.json())
	.then(data => displayImage(data));

function displayImage(images) {
	for (const image of images) {
		const imgContainer = document.getElementById('img-container');
		const img = document.createElement('img');
		// img.setAttribute('src', `${image.url}`);
		img.classList.add('rounded-lg');
		
		img.setAttribute('src', imageUrl());
		imgContainer.appendChild(img);
	}
}
