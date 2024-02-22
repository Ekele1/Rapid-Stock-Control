import './notification.css'

const Notification=()=>{
    return(
        <div className="notificationwrapper">
            <div className="notation">
                <h3>NOTIFICATIONs</h3>
            </div>
            <main className='mainp'>
                <div className="notationhead">
                    <div>
                        <aside className="notes">
                            <p>Notification ID</p>
                        </aside>
                        <aside className="notes">
                            <p>Notification Type</p>
                        </aside>
                        <aside className="notes">
                            <p>Date</p>
                        </aside>
                        <aside className="notes">
                            <p>Message</p>
                        </aside>
                    </div>
                </div>
                <div className="notationbody">
                    <div className="notationcontent">
                        <div><p>123456</p></div>
                        <div><p>shortage alert</p></div>
                        <div><p>30/11/2023</p></div>
                        <div><p>your item (buiscuit) is very low</p></div>
                    </div>
                </div>
            </main>
           
        </div>
    )
}

export default Notification