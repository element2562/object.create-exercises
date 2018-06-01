const bodySelector = document.querySelector("body");
const chickFilA = Object.create({}, {
    business: {
        value: "chick fil a",
        enumerable: true,
        writable: true
    },
    position: {
        value: "cashier",
        enumerable: true,
        writable: true
    }
});
const walmart = Object.create({}, {
    business: {
        enumerable: true,
        writable: true,
        value:"walmart"
    },
    position: {
        enumerable: true,
        writable: true,
        value:"stocker"
    }
});
const papaMurphys = Object.create({}, {
    
    business: {
        enumerable: true,
        writable: true,
        value: "Papa Murphys"
    },
    position: {
        enumerable: true,
        writable: true,
        value: "cashier"
    }
})
const objectCreator = (business, position, value) => {
    let myObject = {};
    myObject.business = business;
    myObject.position = {position: value};
    return myObject;
}
objectCreator("papaMurphys", "value", "cashier");
const allJobs = [chickFilA, walmart, papaMurphys];


for (let key in allJobs){
    const articleMaker = document.createElement("article");
    const textMaker = document.createTextNode(`${allJobs[key].business}: ${allJobs[key].position}`);
    articleMaker.appendChild(textMaker);
    bodySelector.appendChild(articleMaker);
}

