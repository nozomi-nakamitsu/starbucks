const green = '#127c4c';
const pink = '#e16596';
const dark_pink = '#cd3cae';
// ボタン押下時に色変更
function ChangeBackgroundColor(color) {
	console.log('aaa');
	switch (color) {
		case 'green':
			document.getElementById('circle').style.background = green;
			document.getElementById('img').src = './Image/img1.png';
			break;
		case 'dark_pink':
			document.getElementById('circle').style.background = dark_pink;
			document.getElementById('img').src = './Image/img3.png';

			break;
		case 'pink':
			document.getElementById('circle').style.background = pink;
			document.getElementById('img').src = './Image/img2.png';
			break;
		default:
			document.getElementById('circle').style.background = green;
			document.getElementById('img').src = './Image/img1.png';
	}
}

// サイドバー表示
function getVisibleSidebar() {
	document.getElementById('sidebar').classList.add('opacity-one-enter-to');
	document.getElementById('sidebar').classList.remove('opacity-one-enter');
}
// サイドバー非表示
function getInvisibleSidebar() {
	document.getElementById('sidebar').classList.remove('opacity-one-enter-to');
	document.getElementById('sidebar').classList.add('opacity-one-enter');

}
