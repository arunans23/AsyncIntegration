import { useEffect, useState } from 'react';
import { getSubscriberStatus } from '../services/api';
import { SubscriberStatus } from '../types';

const useSubscriberStatus = (subscriberId: string) => {
    const [status, setStatus] = useState<SubscriberStatus | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchStatus = async () => {
            setLoading(true);
            try {
                const data = await getSubscriberStatus(subscriberId);
                setStatus(data);
            } catch (error) {
                console.error('Error fetching subscriber status:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchStatus();
        const interval = setInterval(fetchStatus, 5000); // Fetch status every 5 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [subscriberId]);

    return { status, loading };
};

export default useSubscriberStatus;