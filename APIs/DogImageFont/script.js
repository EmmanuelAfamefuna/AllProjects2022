/* $(document).ready(alert("connected")); */
 
$("img").attr("src", "https://images.dog.ceo/breeds/bulldog-english/jager-2.jpg")

$("button").on("click", function(){
    //alert("button clicked")
    let endpoint = "https://dog.ceo/api/breeds/image/random"
      fetch(endpoint)
     .then(response => {
         console.log(response)
         //parse response which is a json string
         if(response.ok) return response.json()
         throw Error(response.json() ? "No data": "Connection issue")
        
         return response.json()
         
        //return JSON.parse(response)
     })
     .then(data => {
         //console.log(data.message)
         $("img").attr("src", data.message)
    //Do something with the data which is now an object
     })
     .catch(error => {
         let theStyles = {
             color: "red",
             marginTop: 0
         }
         $("#error").text(error).css(theStyles)
     })
})

