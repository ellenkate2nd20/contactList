var React = require('react');
var createReactClass = require('create-react-class');
var AppActions = require('../actions/AppActions.js');
var AppStore = require('../stores/AppStore.js');

var AddForm = createReactClass(
{	
	render: function()
	{
		return(
			<div className="container well">
				<h3>Add Contact</h3>

				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<input type="text" ref="name" className="form-control"
							placeholder="Add Contact Name..." />
					</div>

					<div className="form-group">
						<input type="text" ref="phone" className="form-control"
							placeholder="Add Phone Number..." />
					</div>

					<div className="form-group">
						<input type="text" ref="email" className="form-control"
							placeholder="Add Email..." />
					</div>

					<button className="btn btn-primary" type="submit">Submit</button>
				</form>
			</div>
		)
	},

	handleSubmit: function(e)
	{
		e.preventDefault();

		var contact = 
		{
			name: this.refs.name.value.trim(),
			phone: this.refs.phone.value.trim(),
			email: this.refs.email.value.trim()
		}

		AppActions.saveContact(contact);
	}
});

module.exports = AddForm;