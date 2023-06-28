import React from 'react'

class AddContact extends React.Component {
    state = {
        name :"",
        email: "",
    }
    add = (e)=>{
        e.preventDefault();  //uses for not to refresh page
        if (this.state.name === "" || this.state.email === "") {
            alert("All the fields are mendatary");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name :"", email: "",});
    }
    render() {
        return (
            <div className='card mx-4 mt-4'>
                <div className='card-header'>
                    Add Contact
                </div>
                <div className='card-body'>
                    <form onSubmit={this.add}>
                        <div className="mb-3">
                            <label className="form-label">
                                Name
                            </label>
                            <input
                                type="name"
                                className="form-control"
                                id="name"
                                placeholder='Name'
                                value = {this.state.name}
                                onChange={(e)=> this.setState({name: e.target.value})}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                Email address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder='Email'
                                value = {this.state.email}
                                onChange={(e)=> this.setState({email: e.target.value})}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Add
                        </button>
                    </form>

                </div>
            </div>
        )
    }

}

export default AddContact;