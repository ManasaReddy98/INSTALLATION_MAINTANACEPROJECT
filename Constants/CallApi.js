
import { Constants } from './Constants';

export const CallApi = async (methodname,paramName) => {
    const url = Constants.API_BASE_URL + methodname+"/"+paramName;
    console.log("URL", url);
    try {
        const response = await fetch(url);
        const json = await response.json();
        console.log("API DATA", json);
       
    } catch (error) {
        console.error(error);
    } finally {
        //setLoading(false);
    }
}
