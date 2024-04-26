import React, { useEffect, useState, useMemo } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './ApplicationStatus.css';
import API from '../http';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleBirth } from '../../store/birthSlice';
import { fetchSingleDeath } from '../../store/deathSlice';

const ApplicationStatus = () => {
    const [userApplicationId, setId] = useState('');
    const [isbirthButton, clickBirthButton] = useState(false);
    const [isdeathButton, clickDeathButton] = useState(false);

    const { singleDeath } = useSelector((state) => state.deathApplication);
    const { singleBirth } = useSelector((state) => state.birthApplication);

    const dispatch = useDispatch();

    useEffect(() => {
        if (userApplicationId && isbirthButton) {
            dispatch(fetchSingleBirth(userApplicationId));
        }
        if (userApplicationId && isdeathButton) {
            dispatch(fetchSingleDeath(userApplicationId));
        }
    }, [userApplicationId, isbirthButton, isdeathButton, dispatch]);

    const searchBirthApplication = async (e) => {
        e.preventDefault();
        clickBirthButton(true);
        clickDeathButton(false);
    };

    const searchDeathApplication = async (e) => {
        e.preventDefault();
        clickDeathButton(true);
        clickBirthButton(false);
    };

    const birthApplicationStatus = useMemo(() => {
        if (isbirthButton) {
            if (Object.keys(singleBirth).length === 0) {
                return <h6 style={{ color: 'red' }}>No Birth Application found with id: {userApplicationId}</h6>;
            }
            return (
                <div className="success">
                    <h6>Your Birth Application Status is <span id='statusStyle'>{singleBirth.applicationStatus}</span></h6>
                    {singleBirth.applicationStatus === 'verified' && <button className='downloadBtn'>Download Your Certificate</button>}
                </div>
            );
        }
        return null;
    }, [isbirthButton, singleBirth, userApplicationId]);

    const deathApplicationStatus = useMemo(() => {
        if (isdeathButton) {
            if (Object.keys(singleDeath).length === 0) {
                return <h6 style={{ color: 'red' }}>No Death Application found with id: {userApplicationId}</h6>;
            }
            return (
                <div className="success">
                    <h6>Your Death Application Status is <span id='statusStyle'>{singleDeath.applicationStatus}</span></h6>
                    {singleDeath.applicationStatus === 'verified' && <button className='downloadBtn'>Download Your Certificate</button>}
                </div>
            );
        }
        return null;
    }, [isdeathButton, singleDeath, userApplicationId]);

    return (
        <div>
            <div className="checkApplicationStatus">
                <Header />
                <div className="applicationStatus">
                    <div className="appStatusText">
                        <h2>Check your Application Status Here</h2>
                        <div className="applicationIdInput">
                            <input type='number' value={userApplicationId} onChange={(e) => setId(e.target.value)} name='userApplicationId' placeholder='Enter your Application Id' />
                            <div className="appStatusBtn">
                                <button onClick={searchBirthApplication}>Birth Application Status</button>
                                <button onClick={searchDeathApplication}>Death Application Status</button>
                            </div>
                        </div>
                        <div className="statusOfApplication">
                            {birthApplicationStatus && 
                            <div className="birthAppStatus">
                                {birthApplicationStatus}
                            </div>}

                            {deathApplicationStatus && 
                            <div className="deathAppStatus">
                                {deathApplicationStatus}
                            </div>}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default ApplicationStatus;
