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

const objectCreator = (businessName, positionName) => {
    let myObject = Object.create({},{
        chickfila: {
           value:{
            business: businessName,
            position: positionName,
            enumerable: true,
            writable: true
        }
    }
           
});
console.log(myObject);
}
objectCreator("test", "hello");
const allJobs = [chickFilA, walmart, papaMurphys];


for (let key in allJobs){
    const articleMaker = document.createElement("article");
    const textMaker = document.createTextNode(`${allJobs[key].business}: ${allJobs[key].position}`);
    articleMaker.appendChild(textMaker);
    bodySelector.appendChild(articleMaker);
}

