var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var eventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/AppAPI.js');

var CHANGE_EVENT = 'change';

var _contacts = [];
var _contact_to_edit = '';

var AppStore = assign({}, eventEmitter.prototype, 
{	
	// default function
	emitChange: function()
	{
		this.emit(CHANGE_EVENT);
	},

	addChangeListener: function(callback)
	{
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback)
	{
		this.removeListener(CHANGE_EVENT, callback);
	},

	// handle events
	getContacts: function()
	{
		return _contacts;
	},

	saveContact: function(contact)
	{
		_contacts.push(contact);
	},

	setContacts: function(contacts)
	{
		_contacts = contacts;
	},

	setContactToEdit: function(contact)
	{
		_contact_to_edit = contact;
	},

	getContactToEdit: function()
	{
		return _contact_to_edit;
	},

	updateContact: function(contact)
	{
		for(i = 0; i < _contacts.length; i++)
		{
			if(_contacts[i].id == contact.id)
			{
				_contacts.splice(i, 1);
				_contacts.push(contact);
			}
		}
	},

	removeContact: function(contactId)
	{
		var index = _contacts.findIndex(x => x.id === contactId);
		_contacts.splice(index, 1);
	}
});

AppDispatcher.register(function(payload)
{
	// action from handleViewAction
	var action = payload.action;

	switch(action.actionType)
	{
		case AppConstants.SAVE_CONTACT:
			console.log('Saving Contact...');

			// store save
			AppStore.saveContact(action.contact);

			// save to API
			AppAPI.saveContact(action.contact);

			AppStore.setContactToEdit(action.contact);

			break;

		case AppConstants.RECEIVE_CONTACT:
			console.log('Receiving Contact...');

			// set contact
			AppStore.setContacts(action.contact);

			break;

		case AppConstants.EDIT_CONTACT:
			console.log('Editing Contact...');

			// store edit
			AppStore.setContactToEdit(action.contact);

			break;

		case AppConstants.UPDATE_CONTACT:
			console.log('Updating Contact...');
			
			// store update
			AppStore.updateContact(action.contact);

			// update to API
			AppAPI.updateContact(action.contact);

			AppStore.setContactToEdit('');

			break;

		case AppConstants.REMOVE_CONTACT:
			console.log('Removing Contact...');

			// store remove
			AppStore.removeContact(action.contactId);

			// remove to API
			AppAPI.removeContact(action.contactId);

			break;
	}
	
	AppStore.emitChange();
	return true;
});

module.exports = AppStore;