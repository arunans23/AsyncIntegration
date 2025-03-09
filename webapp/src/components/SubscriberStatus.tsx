import React from 'react';
import useSubscriberStatus from '../hooks/useSubscriberStatus';
import './subscriberstatus.css';

interface SubscriberStatusProps {
    subscriberId: string;
}

const SubscriberStatus: React.FC<SubscriberStatusProps> = ({ subscriberId }) => {
    const { status, loading } = useSubscriberStatus(subscriberId);

    if (loading) {
        return <div className="status-card">Loading...</div>;
    }
    const getStatusClass = () => {
        switch (status?.status) {
            case 'Completed':
                return 'status-completed';
            case 'Failed':
                return 'status-failed';
            case 'Inprogress':
                return 'status-processing';
            case 'Idle':
                return 'status-idle';
            case 'Started':
                    return 'status-idle';
            default:
                return 'status-pending';
        }
    };

    return (
        <div className={`status-card ${getStatusClass()}`}>
            <h3>Subscriber ID: {subscriberId}</h3>
            <p>Order ID: {status?.orderId}</p>
            <p>Status: {status?.status}</p>
            <p>Last Updated: {new Date(status?.lastModifiedTime || '').toLocaleString()}</p>
        </div>
    );
};

export default SubscriberStatus;