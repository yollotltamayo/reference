import useSWR from 'swr'

const fetcher = url => fetch(url).then(res => res.json())
const URI = process.env.URI || "";
function Home() {

    const { data  } = useSWR( URI + '/user', fetcher)

    return (
        <>
            <p> Redirecting ... </p>
        </>
    );
}
export default Home;
