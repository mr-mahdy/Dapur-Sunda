// variabel fitur pencarian
const pencarian = document.querySelector('nav form input');
const tombolPencarian = document.querySelector('nav form button');
const contentUtama = document.querySelector('section .contentUtama');
const gambar = contentUtama.querySelectorAll('a');

// variabel tombol refresh
const linkRefresh = document.createElement('a');
const tombolRefresh = document.createElement('button');
const iconTombol = document.createElement('i');
const form = document.querySelector('nav form');



tombolPencarian.onclick = function() {

	// event fitur pencarian
	if (pencarian.value == "ayam bakakak") {
		for (var i = 1; i < gambar.length; i++) {
			contentUtama.removeChild(gambar[i]);
		}
	} else if (pencarian.value == "gepuk sapi") {
		for (var i = 0; i < gambar.length && i != 1; i++) {
			contentUtama.removeChild(gambar[i]);
		}
		for (var i = 2; i < gambar.length; i++) {
			contentUtama.removeChild(gambar[i]);
		}
	} else if (pencarian.value == "lotek") {
		for (var i = 0; i < gambar.length && i != 2; i++) {
			contentUtama.removeChild(gambar[i]);
		}
		for (var i = 3; i < gambar.length; i++) {
			contentUtama.removeChild(gambar[i]);
		}
	} else if (pencarian.value == "nasi timbel") {
		for (var i = 0; i < gambar.length && i != 3; i++) {
			contentUtama.removeChild(gambar[i]);
		}
		for (var i = 4; i < gambar.length; i++) {
			contentUtama.removeChild(gambar[i]);
		}
	} else if (pencarian.value == "sayur asem") {
		for (var i = 0; i < gambar.length && i != 4; i++) {
			contentUtama.removeChild(gambar[i]);
		}
		for (var i = 5; i < gambar.length; i++) {
			contentUtama.removeChild(gambar[i]);
		}
	} else if (pencarian.value == "tutug oncom") {
		for (var i = 0; i < gambar.length && i != 5; i++) {
			contentUtama.removeChild(gambar[i]);
		}
	} else {
		for (var i = 0; i < gambar.length; i++) {
			contentUtama.removeChild(gambar[i]);
		}
	} 

	// tombol refresh
	tombolRefresh.appendChild(iconTombol);
	linkRefresh.appendChild(tombolRefresh);

	form.appendChild(linkRefresh);

	iconTombol.setAttribute('class', 'glyphicon glyphicon-remove-sign');
	tombolRefresh.setAttribute('type', 'submit');
	tombolRefresh.setAttribute('class', 'btn btn-primary');

}






