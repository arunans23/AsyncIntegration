import React from 'react';
import SubscriberStatus from './SubscriberStatus';
import './dashboard.css';

const Dashboard: React.FC = () => {
    const subscribers = ['subscriberA', 'subscriberB', 'subscriberC'];

    return (
        <div className="dashboard-container">
            <h1 className="dashboard-title">Subscriber Status Dashboard</h1>
            <div className="subscribers-grid">
                {subscribers.map((subscriberId) => (
                    <SubscriberStatus 
                        key={subscriberId} 
                        subscriberId={subscriberId} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Dashboard;