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
        value: "walmart"
    },
    position: {
        enumerable: true,
        writable: true,
        value: "cashier"
    }
})
const allJobsObject = {chickFilA, walmart, papaMurphys};
const objectCreator = (business, position, value) => {
    let myObject = {};
    myObject.business = business;
    myObject.position = {position: value};
    return myObject;
}
objectCreator("papaMurphys", "value", "cashier");
const allJobs = [allJobsObject];


for (x in allJobsObject){
    const articleMaker = document.createElement("article");
    const textMaker = document.createTextNode(`${allJobsObject[x].business}: ${allJobsObject[x].position}`);
    articleMaker.appendChild(textMaker);
    bodySelector.appendChild(articleMaker);
}

