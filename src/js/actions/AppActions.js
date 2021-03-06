// chứa lib dispatcher + constants, tạo các hàm actions có trong constants 

var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = 
{
	saveContact: function(contact)
	{
		AppDispatcher.handleViewAction(
		{
			actionType: AppConstants.SAVE_CONTACT,
			contact: contact
		});
	},

	receiveContacts: function(contact)
	{
		AppDispatcher.handleViewAction(
		{
			actionType: AppConstants.RECEIVE_CONTACT,
			contact: contact
		});
	},

	editContact: function(contact)
	{
		AppDispatcher.handleViewAction(
		{
			actionType: AppConstants.EDIT_CONTACT,
			contact: contact
		});
	},

	updateContact: function(contact)
	{
		AppDispatcher.handleViewAction(
		{
			actionType: AppConstants.UPDATE_CONTACT,
			contact: contact
		});
	},

	removeContact: function(contactId)
	{
		AppDispatcher.handleViewAction(
		{
			actionType: AppConstants.REMOVE_CONTACT,
			contactId: contactId
		});
	}
}

module.exports = AppActions;