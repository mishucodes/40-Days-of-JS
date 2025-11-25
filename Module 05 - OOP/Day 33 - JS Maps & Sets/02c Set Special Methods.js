let set01 = new Set([1,2,3]);
let set02 = new Set([3,4,5]);
let set03 = new Set([1,2,3,4,5]);
let set04 = new Set([1,2,3,4,5]);


//We have certain special methods in sets that help us do statistics.
//DISCLAIMER: These are very new methods (added circa 2024) in ECMA & Node. Better use a fallback/polyfill.
    //01. Union:
        console.log(set01.union(set02)); //1,2,3,4,5
    //02. Intersection:
        console.log(set01.intersection(set02)); //3
    //03. Difference (unique to):
        console.log(set01.difference(set02)); //1,2
        console.log(set02.difference(set01)); //4,5
    //04. SuperSet:
        console.log(set03.isSupersetOf(set01)); //true
        console.log(set03.isSupersetOf(set04)); //true
        console.log(set04.isSupersetOf(set03)); //true
    //05. SubSet:
        console.log(set01.isSubsetOf(set03)); //true
        console.log(set03.isSubsetOf(set04)); //true
        console.log(set04.isSubsetOf(set03)); //true

//Fallbacks for Ibid:
    //01. Union:
        let union = new Set([...set01, ...set02]);
        console.log(union); //1,2,3,4,5
    //02. Intersection:
        let intersection = new Set([...set01].filter((element) => set02.has(element)));
        console.log(intersection); //3
    //03. Difference:
        let difference01 = new Set([...set01].filter((element) => !set02.has(element)));
        let difference02 = new Set([...set02].filter((element) => !set01.has(element)));
        console.log(difference01); //1,2
        console.log(difference02); //4,5
    //04. SuperSet: not the most elegant, but it's mine:
        // let commonElementsInBothSets = [...new Set([...set01].filter((element) => set03.has(element)))];
        let supposedSuperSet = [...set03];
        let supposedSubSet = [...set01];
        let isSuperSet = true;  //unless proven otherwise...
        supposedSubSet.forEach((element) =>
            {
                if(!supposedSuperSet.includes(element))
                {
                    isSuperSet = false;
                    return;
                }
            });
        console.log(isSuperSet); //true
    //05. SubSet: not the most elegant, but it's mine:
            // if('a' is superSet of 'b'), then 'b' is a subSet of 'a' by logical necessity...