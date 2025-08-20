import { useQuery } from "@tanstack/react-query"
import { api } from "../../../shared/api"

export const usePerson = () => {
    const getPersonById = (id:string)=> useQuery({
        queryKey: ["person-deteil-key", id],
        queryFn: () => api.get(`person/${id}`).then(res => res.data)
    })
    const getPersonItem = (id: string, path: string)=>useQuery({
        queryKey:["person-deteil-key", id, path],
        queryFn: ()=> api.get(`person/${id}/${path}`).then(res => res.data)
    })
    return {getPersonById, getPersonItem}
}