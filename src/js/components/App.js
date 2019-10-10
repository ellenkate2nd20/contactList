var React = require('react');
var createReactClass = require('create-react-class');
var AppActions = require('../actions/AppActions.js');
var AppStore = require('../stores/AppStore.js');

var AddForm = require('./AddForm.js');
var ContactList = require('./ContactList.js');
var EditForm = require('./EditForm.js');

function getAppState()
{
	return {
		contacts: AppStore.getContacts(),
		contactToEdit: AppStore.getContactToEdit()
	}
}

var App = createReactClass(
{	
	getInitialState: function()
	{
		return getAppState();
	},

	_onChange: function()
	{
		this.setState(getAppState());
	},

	componentDidMount: function()
	{
		AppStore.addChangeListener(this._onChange);
	},

	componentUnmount: function()
	{
		AppStore.removeChangeListener(this._onChange);
	},

	render: function()
	{
		if(this.state.contactToEdit == '')
		{
			var form = <AddForm />
		}
		else
		{
			var form = <EditForm contactToEdit={this.state.contactToEdit} />
		}

		return(
			<div>
				{form}
				<ContactList contacts={this.state.contacts} />
			</div>
		);
	}
});

module.exports = App;