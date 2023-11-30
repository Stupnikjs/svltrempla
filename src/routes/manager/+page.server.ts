import type { PageServerLoad,  } from "./$types";
import { endpoint } from "../../config/config";

export const prerender = false; 

export const load: PageServerLoad = async () => {

        const response = await fetch(`${endpoint}/api/all/`,{
                    method:'GET',               
        });

        
        const remplas = await response.json();
       
        return {remplas};
         
};