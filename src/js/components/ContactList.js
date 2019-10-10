var React = require('react');
var createReactClass = require('create-react-class');
var AppActions = require('../actions/AppActions.js');
var AppStore = require('../stores/AppStore.js');

var Contact = require('./Contact.js');

var ContactList = createReactClass(
{	
	render: function()
	{
		return(
			<div className="container">
				<h3>Contacts</h3>

				<table className="table table-striped">
					<thead>
						<tr>
							<th>Name</th>
							<th>Phone</th>
							<th>Email</th>
							<th></th>
						</tr>
					</thead>

					<tbody>
					{
						this.props.contacts.map(function(contact, index)
						{
							return(
								<Contact contact={contact} key={index} />
							)
						})
					}
					</tbody>
				</table>
			</div>
		)
	}
});

module.exports = ContactList;