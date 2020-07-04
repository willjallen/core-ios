import React from 'react'

const SessionContext = React.createContext({
    isLoggedIn: false,
    updateSession: () => {},
});

export const SessionProvider = SessionContext.Provider;
export const SessionConsumer = SessionContext.Consumer;

export default SessionContext;