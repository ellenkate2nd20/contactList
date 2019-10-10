var React = require('react');
var createReactClass = require('create-react-class');
var AppActions = require('../actions/AppActions.js');
var AppStore = require('../stores/AppStore.js');

var Contact = createReactClass(
{	
	render: function()
	{
		return(
			<tr>
				<td>{this.props.contact.name}</td>
				<td>{this.props.contact.phone}</td>
				<td>{this.props.contact.email}</td>
				<td>
					<a href="#" className="btn btn-primary" 
						onClick={this.handleEdit.bind(this, this.props.contact)}>
						Edit
					</a>

					<a href="#" className="btn btn-danger"
						onClick={this.handleRemove.bind(this, this.props.contact.id)}>
						Remove
					</a>
				</td>
			</tr>
		)
	},

	handleEdit: function(i, j)
	{
		AppActions.editContact(i);
	},
	
	handleRemove: function(i, j)
	{
		AppActions.removeContact(i);
	}
});

module.exports = Contact;