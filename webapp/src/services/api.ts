import axios from 'axios';

const API_URL = 'http://localhost:8290/subscriber/status'; // Replace with your actual API URL

export const getSubscriberStatus = async (subscriberId: string) => {
    try {
        const response = await axios.get(`${API_URL}/?subscriberId=${subscriberId}`);
        if (!response.data.subscriberCollection) {
            return {'orderId' : 'N/A', 'status' : 'Idle', 'lastModifiedTime' : new Date()};
        }
        return response.data.subscriberCollection.subscriber;
    } catch (error) {
        console.error('Error fetching subscriber status:', error);
        throw error;
    }
};