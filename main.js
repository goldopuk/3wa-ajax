console.log('chargé');


$('button').on('click', function () {

	var choice = $('input[type=radio]:checked').val();

	console.log(choice);

	if (choice == 'html') {


		getArticle();

	} else if (choice == 'json') {

		getContacts();


	} else if (choice == 'movies') {

		getMovies();

	} else {
		// on ne devrait jamais arrivé ici

		throw 'Bizarre, ce cas n est normal - Choice:' + choice;

	}

});

