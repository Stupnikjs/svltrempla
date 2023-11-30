import type { PageServerLoad,  } from "./$types";
import  { endpoint }  from '../../config/config.js'

export const prerender = false; 

export const load: PageServerLoad = async () => {

         const response = await fetch(`${endpoint}/api/all/`,{
                    method:'GET',               
        });

        
        const remplas = await response.json();
         
        /*const remplas = [
                {
                        debut:'23-02-2024',
                        fin:'27-02-2024',
                        location: "la Rochelle",
                        logiciel: "machin",
                        retrocession: 80,
                        minutes_from_home: 20
                }
        ]
        */     
        return {remplas};
         
};