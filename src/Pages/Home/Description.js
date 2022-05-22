import { faClipboardList, faCoffee, faGlobe, faHandPaper, faPeopleGroup, faThermometer4, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Description = () => {
    return (
        <div className="">
            <div className="discription my-5 container">
                <div class="hero min-h-screen bg-base-200 p-3">
                    <div class="hero-content text-center">
                        <div class="max-w-md">
                            <h1 className='text-success'>Millions of people are with us</h1>
                            <h5>We try to understand as clients. only for good service <br /></h5>
                            <hr style={{ padding: "2px", background: "#198754e7" }} className='w-50 mx-auto mt-4' />
                        </div>
                        <FontAwesomeIcon icon={faPeopleGroup} size="6x" color='#198754e7' />
                        <FontAwesomeIcon icon={faThumbsUp} size="6x" color='#198754e7' />
                        <FontAwesomeIcon icon={faClipboardList} size="6x" color='#198754e7' />
                        <FontAwesomeIcon icon={faGlobe} size="6x" color='#198754e7' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Description;