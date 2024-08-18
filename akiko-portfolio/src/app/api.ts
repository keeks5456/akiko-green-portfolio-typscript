const mediumApi =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@agreen17";

 export  async function fetchMediumApi(): Promise<any> {
    try{
        const response = await fetch(mediumApi);
        const data = await response.json();
        // console.log(data)
        return data
    } catch(error){
        console.error("Error fetching data:", error);
    }
   
};
