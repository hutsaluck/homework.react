const baseUrl = `https://jsonplaceholder.typicode.com`

/*fetch(baseUrl)
    .then(value => value.json())
    .then(value => value)

export const userService = {
    getAllUsers: async (): Promise<IUser[]> => {
        const users = await fetch(`${baseUrl}/users`)
            .then(value => value.json())

        console.log(users)
        return users
    }
}
export const postService = {}
export const commentService = {}*/

export const getAll = async <T>(endpoint: string) => {
    const responseResult = await fetch(`${baseUrl}${endpoint}`)
        .then((response: Response) => response.json())

    return responseResult as T
}