const base_url = import.meta.env.VITE_BASE_URL;

export const getPosts = async () => await fetch(`${base_url}/posts`).then(res => res.json())