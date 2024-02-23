import { useNavigate } from 'react-router-dom'
import './question.css'

const Question=()=>{
    const year = new Date().getFullYear()
    const navigate = useNavigate()
    const handleGetStart=()=>{
        navigate('/signup')
    }
    return(
        <div className="questionwrapper" id='question'>
            <div className="question-body"></div>
            <div className="question-body2">
                <div className="do-you">
                    <div className='do'>
                        <h1>Do you have any questions?</h1>
                        <p>Feel free to ask if you have any questions.</p>
                        <p>We are open to question and will reply as</p>
                        <p>soon as possible</p>
                    </div>
                </div>
                <div className="ans">
                    <input type="text" placeholder='your name' className='name' />
                    <input type="text" placeholder='your email' className='name' />
                    <div className='write-upb' contentEditable={true}>
                        <p>what is your question?</p>
                    </div>
                    <button className='send'>SEND</button>
                </div>
            </div>
            <div className="questionbody3">
                <div className="questionfooter">
                    <div className="resources">
                        <h3>Resources</h3>
                        <p>contact</p>
                        <p>FAQ</p>
                    </div>
                    <div className="ready">
                        <h3>Ready to get started?</h3>
                        <button className='getstarted' onClick={handleGetStart}>Get Started</button>
                    </div>
                </div>
                <div className="copyright">
                    <p>{year} copywright</p>
                </div>
            </div>
        </div>
    )
}

export default Question