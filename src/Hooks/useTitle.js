import { useEffect } from "react"

const useTitle=title=>{
    useEffect(()=>{
document.title=`${title} -EduToy`;
    },[title])
}
export default useTitle;