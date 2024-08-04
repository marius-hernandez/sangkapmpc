import { supabaseAnon } from "@/lib/supabaseClient"

export const getUsers=async()=>{
    const {data, error}= await supabaseAnon.from('Users').select('*');
    if(error){
        return error
    }
    console.log(data)
    return data
}