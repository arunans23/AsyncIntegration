export interface Subscriber {
    id: string;
    name: string;
}

export interface SubscriberStatus {
    subscriberId: string;
    status: 'Inprogress' | 'Started' | 'Completed' | 'Failed' | 'Idle';
    lastModifiedTime: Date;
    orderId: string;
}