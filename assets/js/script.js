$(document).ready(function() {
        $('.carousel').carousel({interval: 7000});
});

$(".gambar1").hover(
	function() {
		$('.container .gambar1').addClass("muncul");
	}, function() {
		$('.container .gambar1').removeClass("muncul");
	}

);

$(".gambar2").hover(
	function() {
		$('.container .gambar2').addClass("muncul");
	}, function() {
		$('.container .gambar2').removeClass("muncul");
	}

);

$(".gambar3").hover(
	function() {
		$('.container .gambar3').addClass("muncul");
	}, function() {
		$('.container .gambar3').removeClass("muncul");
	}

);


$(".gambar1").hover(
	function() {
		$(".container .text1").addClass("muncul");
	}, function() {
		$(".container .text1").removeClass("muncul");
	}
);

$(".gambar2").hover(
	function() {
		$(".container .text2").addClass("muncul");
	}, function() {
		$(".container .text2").removeClass("muncul");
	}
);

$(".gambar3").hover(
	function() {
		$(".container .text3").addClass("muncul");
	}, function() {
		$(".container .text3").removeClass("muncul");
	}
);

