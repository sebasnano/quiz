import React from 'react'
import { Link } from 'react-router-dom'


const Quizz = () => {
    return (
        <div className="row">
            <div className="col-med-4 offset-md-4">
                <div className="card" style={{width: '18rem'}}>
                    <div className="card-body">
                        <h3>Welcome to the Trivia Challenge</h3>
                        <br />
                        <br />
                        <br />
                        <br />
                        <p>You will be presented with 10 true or false questions.</p>
                        <br />
                        <br />
                        <br />
                        <br />
                        <button>
                            <Link to="/question">BEGIN</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quizz
