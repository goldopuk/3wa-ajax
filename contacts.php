<?php

$contacts = [];

$contact = [
	'firstname' => 'Joe',
	'lastname' => 'Dalton',
	'phone' => '123456',
];

array_push($contacts, $contact);

$contact = [
	'firstname' => 'Jack',
	'lastname' => 'Dalton',
	'phone' => '123456',
];

array_push($contacts, $contact);

$contact = [
	'firstname' => 'Averell',
	'lastname' => 'Dalton',
	'phone' => '123456',
];

array_push($contacts, $contact);

header('Content-Type: text/json');
echo json_encode($contacts);