import React from 'react';

interface StatusCardProps {
    subscriberName: string;
    status: string;
    orderId: string;
}

const StatusCard: React.FC<StatusCardProps> = ({ subscriberName, status, orderId }) => {
    return (
        <div className="status-card">
            <h3>{subscriberName}</h3>
            <p>Status: {status}</p>
            <p>Order Id: {orderId}</p>
        </div>
    );
};

export default StatusCard;