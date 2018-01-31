console.log("script working");
$(document).ready(function () {
$('img').click(function(){
$(this).hide()

$('button').click(function(){
$('img').show();
});
});
});