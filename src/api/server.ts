export const server_calls = {
    get: async () => {
        const response = await fetch(`https://phonebook-evs7.onrender.com/api/contacts`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Orgin': '*',
                'x-access-token': 'bearer 23b63cfbec3e5d0129c71b7e5e6827e8f835f2d04bde7ce3'
            },
        })

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    // TODO: Finish server calls
    create: async (data: any = {}) => {
        const response = await fetch(`https://phonebook-evs7.onrender.com/api/contacts`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Orgin': '*',
                'x-access-token': 'bearer 23b63cfbec3e5d0129c71b7e5e6827e8f835f2d04bde7ce3'
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    update: async (id:string, data: any = {}) => {
        const response = await fetch(`https://phonebook-evs7.onrender.com/api/contacts/${id}`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Orgin': '*',
                'x-access-token': 'bearer 23b63cfbec3e5d0129c71b7e5e6827e8f835f2d04bde7ce3'
            },
            body: JSON.stringify(data)
        })

        if (!response.ok){
            throw new Error('Failed to update data on server')
        }

        return await response.json()
    },

    delete: async (id:string) => {
        const response = await fetch(`https://phonebook-evs7.onrender.com/api/contacts/${id}`,
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': 'bearer 23b63cfbec3e5d0129c71b7e5e6827e8f835f2d04bde7ce3'
            }
        })

        if (!response.ok){
            throw new Error('Failed to delete data on server')
        }

        return;
    },
}