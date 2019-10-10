var React = require('react');
var createReactClass = require('create-react-class');
var AppActions = require('../actions/AppActions.js');
var AppStore = require('../stores/AppStore.js');

var EditForm = createReactClass(
{	
	render: function()
	{
		return(
			<div className="container well">
				<h3>Edit Contact</h3>

				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<input className="form-control" placeholder="Add Contact Name..."
						onChange={this.handleChange.bind(this, 'name')} type="text" ref="name"
						value={this.props.contactToEdit.name} />
					</div>

					<div className="form-group">
						<input className="form-control" placeholder="Add Phone Number..." 
						onChange={this.handleChange.bind(this, 'phone')} type="text" ref="phone"
						value={this.props.contactToEdit.phone} />
					</div>

					<div className="form-group">
						<input className="form-control" placeholder="Add Email..."
						onChange={this.handleChange.bind(this, 'email')} type="text" ref="email"
						value={this.props.contactToEdit.email} />
					</div>

					<button className="btn btn-primary" type="submit">Submit</button>
				</form>
			</div>
		)
	},

	handleChange: function(fieldName, event)
	{
		var contactToEdit = this.props.contactToEdit;
		contactToEdit[fieldName] = event.target.value;
		this.setState({contactToEdit: contactToEdit});
	},

	handleSubmit: function(e)
	{
		e.preventDefault();

		var contact = 
		{
			id: this.props.contactToEdit.id,
			name: this.refs.name.value.trim(),
			phone: this.refs.phone.value.trim(),
			email: this.refs.email.value.trim()
		}

		AppActions.updateContact(contact);
	}
});

module.exports = EditForm;