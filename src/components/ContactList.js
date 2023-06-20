import React from 'react'

const ContactList = (props) => {
  console.log(props);
  const renderContactList = props.contacts.map((contact) => {
    return (
      <>
        <div className="col-sm-6 mt-2 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                {contact.name}
              </h5>
              <p className="card-text">
                {contact.email}
              </p>
              <a href="#" className="btn btn-danger align-items-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-trash"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

      </>
    );
  });
  return (
    <>
      <div className='card mx-4 mt-4 mb-4'>
        <div className='card-header'>
          <b> Contact List</b>
        </div>
        {/* <div class="row"></div> */}
        <div className="row mt-4 mx-4">{renderContactList}</div>
      </div>
    </>

  )
}

export default ContactList