/* function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({name: "John", url: "https://johndoe.com"})
        }, 5000);
    })
}

async function getData() {
    try {   
        console.log("Fetching user data...");
        const data = await fetchData();
        console.log("User data fetch successfully.");
        console.log("Data:", data);
    }
     catch (error) {
        console.error("Error fetching data.");
    }
}

getData(); */


function userData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({name: "Paula", email: "paula@gmail.com"})
        }, 4000);
    })
}

function companyData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({name: "Accenture", url: "https://accenture.com"})
        }, 5000);
    })
}


async function fetchData() {
    try {
        console.log("Fetching data...");
        const uData = await userData();
        const cData = await companyData();
        console.log("Data fetched successful.");
        console.log("Data:", uData, cData);
    } catch (error) {
        console.error("Error fetching data.");
    }
}

fetchData();