// Steps
// -----

// Look inside div with class "md"

// Underneath, loop inside p tags

// If it's an image link
// 	insert img src tag


// Do this for all image links.


// Updated Steps
// -------------

// Better method, won't ruin surprise:

// On mouse over img link, display image

// Ideas
// -------------
//
// Look into jquery UI, but may be fun
// to implement some fancy UI features by hand


var imageUrl;

$( "a" ).mouseover(function() {
	var imageUrl = $(this).attr('href');
	console.log(imageUrl);
}).html( "<img src=&quot;imageUrl&quot;>" );


// ---


$( "a" ).mouseover(function() {
	var imageUrl = $(this).attr('href');
	console.log(imageUrl);
	imageUrl.toString();
	$(this).append( "<img src=&quot;imageUrl&quot; class="added">" );	 
})
	.mouseleave(function() {
	console.log("gone");
	//$( ".added" ).remove();
});


// ---

$( "a" ).mouseover(function() {
	var imageUrl = $(this).attr('href');
	console.log(imageUrl);
	console.log("this: " + this);
	imageUrl.toString();
	$(this).parent().parent().append( "<img class=added src=" + imageUrl + ">" );
	//$(this).parent().append( "<img class=added src=http://i.imgur.com/Taq84QV.png>" );	 
})
	.mouseleave(function() {
	console.log("safety: " + this);
	//$( ".added" ).remove();
});
