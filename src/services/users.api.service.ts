const base_url = import.meta.env.VITE_BASE_URL;

export const getUsers = async () => await fetch(`${base_url}/users`).then(res => res.json())