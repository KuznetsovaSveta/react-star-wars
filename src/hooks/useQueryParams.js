import { useLocation } from "react-router-dom"

export const useQueryParams = () => {
    // такая коснтрукция вернет нам объект
    return new URLSearchParams(useLocation().search)
}