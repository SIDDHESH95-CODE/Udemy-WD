let str = /[a-zA-Z]+\d{4,5}/;
    let matched = str.test("a12355555z");
    console.log(matched);