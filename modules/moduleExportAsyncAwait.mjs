const getData = async (url1) => {
    const res = await fetch (url1)
    const json = await res.json()
    return json;
  }

  export default getData;
