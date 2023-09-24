
const useFetch =(url) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await fetch(url);
                (resp);
                if (!resp.ok) {
                    setIsError(true);
                    setIsLoading(false);
                    return;
                }
                const data = await resp.json();
                setData(data);
            } catch (error) {
                setIsError(true);
                (error);
            }
            setIsLoading(false);
        };
        fetchData();
    }, []);
    return {isLoading, isError, data}; 
}   
export default useFetch;
//₋Refactored Fetch(1)₋