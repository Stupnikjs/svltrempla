import type { PageServerLoad,  } from "./$types";

export const prerender = false; 

export const load: PageServerLoad = async () => {

        const response = await fetch(`${import.meta.env.VITE_API_REMPLA_URL}/api/all/`,{
                    method:'GET',               
        });

        const remplas = await response.json();
            
        return {remplas};
         
};