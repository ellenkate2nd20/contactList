var AppActions = require('../actions/AppActions');

var firebase = require("firebase");
var config = 
{
	apiKey: "AIzaSyD_FQWaOFEjIWAlBq0XgKbaYgoxYN5n4qI",
	authDomain: "contactlist-d78ab.firebaseapp.com",
	databaseURL: "https://contactlist-d78ab.firebaseio.com",
	projectId: "contactlist-d78ab",
	storageBucket: "contactlist-d78ab.appspot.com",
	messagingSenderId: "932557199408"
};

firebase.initializeApp(config);

var fbRef = firebase.database().ref();

module.exports = 
{
	saveContact: function(contact)
	{
		var contactRef = fbRef.child('contacts');
		contactRef.push().set(contact);
	},

	getContacts: function()
	{
		var contactRef = fbRef.child('contacts');
		contactRef.once('value', function(snapshot)
		{
			var contacts = [];
			snapshot.forEach(function(childSnapshot)
			{
				var contact = contacts.push(
				{
					id: childSnapshot.key,
					name: childSnapshot.val().name,
					phone: childSnapshot.val().phone,
					email: childSnapshot.val().email
				});

				AppActions.receiveContacts(contacts);
			});
		});
	},

	updateContact: function(contact)
	{
		var id = contact.id;
		var updatedContact = 
		{
			name: contact.name,
			phone: contact.phone,
			email: contact.email
		};
		var contactRef = fbRef.child('contacts/' + contact.id);
		contactRef.update(updatedContact);
	},

	removeContact: function(contactId)
	{
		var contactRef = fbRef.child('contacts/' + contactId);
		contactRef.remove();
	}
}