import React from 'react'

class AddContact extends React.Component {
    render() {
        return (
            <div className='card mx-4 mt-4'>
                <div className='card-header'>
                    Add Contact
                </div>
                <div className='card-body'>
                    <form>
                        <div className="mb-3">
                            <label className="form-label">
                                Name
                            </label>
                            <input
                                type="name"
                                className="form-control"
                                id="name"
                                placeholder='Name'
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
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>

                </div>
            </div>
        )
    }

}

export default AddContact;