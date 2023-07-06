import React from 'react'
const SideInquiryForm = () => {
    return (
        <div className="position_sidebar">
            <div id="sidebar">
                <form className="form_submission">
                    <input type="hidden" name="url" defaultValue="https://designdiverse.com/index.php" />
                    <input type="hidden" name="domain" defaultValue="designdiverse.com" />
                    <input type="hidden" name="subject" defaultValue="Banner Form (designdiverse.com)" />
                    <div className="form-group">
                        <input type="text" placeholder="Name" name="cn" />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Email" name="em" />
                    </div>
                    <div className="form-group">
                        <input type="number" placeholder="Phone" name="pn" />
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Message" name="msg" defaultValue={""} />
                    </div>
                    <div className="mt-4">
                        <button className="firstBtn firstBtn2 w-100">Submit</button>
                    </div>
                    <div className="error mt-3 alert alert-danger text-left mb-0" style={{ display: 'none' }} />
                    <div className="success mt-3 alert alert-success text-center mb-0 p-2" style={{ display: 'none' }} />
                    <div className="loader" style={{ display: 'none' }}>
                        <img alt="loader" src="images/loader.gif" />
                    </div>
                </form>
                <div id="sidebar-btn">
                    <h3>Let's Get Started</h3>
                </div>
            </div>
        </div>
    )
}

export default SideInquiryForm
