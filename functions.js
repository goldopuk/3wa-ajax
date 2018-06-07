
function getArticle() {

	$.get('article.html', function (html) {

		$('.content').html(html);
		
	});

}

function getContacts() {

	$.getJSON('contacts.php', function (contactList) {

		console.log(contactList);

		$('.content').empty();

		$.each(contactList, function (index, contact) {
			console.log('>>>>', index, contact);

			var li = "<p>" + contact.firstname + " " + contact.lastname + " Tel:" + contact.phone + "</p>";

			$('.content').append(li);

		});

		// for (var i = 0; i < contactList.length; i++) {
		// 	var contact = contactList[i];

		// 	var li = "<p>" + contact.firstname + " " + contact.lastname + " Tel:" + contact.phone + "</p>";

		// 	$('.content').append(li);
		// }
		
	});

}


function getMovies() {

	$.get('movies.html', function (html) {

		$('.content').html(html);
		
	});

}
