import { get } from "api"

export const getSingleUserBlog = async(config = {}) => {
    try {
        const response = await get('/blogs/user-blogs/blog/', {...config})
        return response
    } catch (err) {
        console.log(err)
    }
}