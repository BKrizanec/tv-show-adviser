import axios from "axios";
import { FAKE_POPULARS, FAKE_RECOMMENDATIONS} from "./fake_data";
import { BASE_URL, API_KEY_PARAM } from "./config";


export class TVShowAPI{
    static async fetchPopulars(){
        try{
            const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
            return response.data.results;
            //return FAKE_POPULARS;
        }
        catch(error) {}
    }

    static async fetchRecommendations(tvShowId){
        try{
            const response = await axios.get(`${BASE_URL}tv/${tvShowId}/recommendations${API_KEY_PARAM}`);
            return response.data.results;
            //return FAKE_RECOMMENDATIONS;
        }
        catch(error) {}
    }

    static async fetchByTitle(tvShowTitle){
        try{
            const response = await axios.get(`${BASE_URL}search/tv${API_KEY_PARAM}&query=${tvShowTitle}`);
            return response.data.results;
        }        
        catch(error) {}
    }    
}