
export default async function FetchApi() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache: 'no-store', 
  });

  if (!res.ok) {
    throw new Error('Failed to fetch users');
  }

  const users: any = await res.json();

  return users;
}
