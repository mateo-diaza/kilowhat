import { useEffect, useState } from 'react';
import { Socket, io } from 'socket.io-client';

const useOpenSocket = (url: string): Socket | null => {
    const [socket, setSocket] = useState<Socket | null>(null);
    const initalizeSocket = async () => {
        await fetch(url)
        setSocket(() => io());
    }

    useEffect(() => {
        initalizeSocket()

        return () => {
            socket?.disconnect();
            setSocket(null);
        }
    }, [])

    return socket;
};

export default useOpenSocket;