import React from 'react'
import {NetInfo,useNetInfo} from "@react-native-community/netinfo";

export function isConnected() {
    return new Promise((resolve, reject) => {
        NetInfo.fetch().then(state => {
            console.log("Connection type", state.type);
            console.log("Is connected?", state.isConnected);

            if (state.isConnected) {
                console.log("Is connected? IP ADDRESS ### ", state.details.ipAddress);
              
               return true
            }
            else {
                console.log("Is connected? IP ADDRESS ### ", state.details.ipAddress);
                reject();
                return false;
            }
        });
    })
}


export function useInternetStatus(){
    // I make a name to your hook is best in inspection and testing
    const [isInternetReachable, setIsInternetReachable] = useState(false)
    const InternetChecker = () => {
        useEffect(() => {
            // Subscribe
            const unsubscribe = NetInfo.addEventListener((state) => {
                setIsInternetReachable(state.isInternetReachable);
                console.log("Connection type", state.type);
                console.log("Is internet Reachable?", isInternetReachable);
            });
            return () => {
                unsubscribe();
            };
        },[isInternetReachable]) // in order to re-call the hooks whenever the netInfo status changed 
    }    
    return [InternetChecker, isInternetReachable];    
};



export function getNetInfo() {
    return new Promise((resolve, reject) => {
        NetInfo.addEventListener().then(state => {
            console.log("Connection type", state.type);
            console.log("Is connected?", state.isConnected);

            const unsubscribe = NetInfo.addEventListener((state) => {
                // setIsInternetReachable(state.isInternetReachable);
                console.log("Connection type", state.type);
                console.log("Is internet Reachable?", isInternetReachable);
            });
            return () => {
                unsubscribe();
            };
        });
    })
};




export function getConsumerDetails() {
    return new Promise((resolve, reject) => {

        // NetInfo.fetch().then(state => {
        //     console.log("Connection type", state.type);
        //     console.log("Is connected?", state.isConnected);

        //     if (state.isConnected) {
        //         resolve();
        //     }
        //     else {
        //         reject();
        //     }
        // });
    })
}

//export default NetworkUtils