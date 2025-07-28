import React, { PureComponent, useEffect, useState } from 'react';
import  NetInfo  from "@react-native-community/netinfo";




export default ConnectivityChecker = () => {
const [isInternetReachable, setIsInternetReachable] = useState(false)
// const InternetChecker = () => {
//     useEffect(() => {
//         // Subscribe
//         const unsubscribe = NetInfo.addEventListener((state) => {
//             setIsInternetReachable(state.isInternetReachable);
//             console.log("Connection type", state.type);
//             console.log("Is internet Reachable?", isInternetReachable);
//         });
//         return () => {
//             unsubscribe();
//         };
//     },[])
// }

// return [InternetChecker, isInternetReachable];


const useInternetStatus = () => {
    const [reachable, setReachable] = useState(false);
    
    useEffect(() => {
        const subscribe = state => setReachable(state.isInternetReachable); 

        NetInfo.addEventListener(subscribe);

        return () => NetInfo.removeEventListener(subscribe);
    },[]);

    return reachable;
};

const useNetworkStatus = () => {
    const [isOnline, setStatus] = useState();
    useEffect(() => {
        (async () => {
            try {
                window.networkPoll = setInterval(async () => {
                    const networkStatus = await fetch(/*your api*/);
                    if (networkStatus.code != 200) {
                        setStatus(false);
                    }
                    if (networkStatus.code == 200) {
                        setStatus(true);
                    }

                }, 5000);
            }
            catch (error) {
                setStatus(false);
            }
        })();
    }, []);
};

};