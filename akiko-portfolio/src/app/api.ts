
const mediumURL =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@agreen17";

 export async function mediumApi() {

    try{
        const response = await fetch(mediumURL);
        const data = await response.json();
        console.log(data)
    } catch(error){
        console.error("Error fetching data:", error);
    }
   
};
