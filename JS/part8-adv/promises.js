function fetchData() {
    return new Promise((resolve, reject) => {
        let success = true;

        setTimeout(() => {
            if (success) {
                resolve("Data fetched successfully.")
            } else reject ("Error fetching data..")
        }, 3000);  
    })
}

fetchData()
    .then((response) => console.log(response))
    .catch((error) => console.log(error))
