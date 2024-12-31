import React, { createContext, useContext, useMemo } from "react";
import { io } from 'socket.io-client';

const SocketContext = createContext(null);

// self made hook
export const useSocket = () => {
    const socket = useContext(SocketContext);
    return socket;
    // return useContext(SocketContext);
};

export const SocketProvider = (props) => {
    const socket = useMemo(() => io("localhost:8000"), []);

    return (
        <SocketContext.Provider value={socket}>
            { props.children }
        </SocketContext.Provider>
    )
}