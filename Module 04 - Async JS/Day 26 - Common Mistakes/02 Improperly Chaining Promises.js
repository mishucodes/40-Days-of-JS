let getTen = Promise.resolve(10);

//this is chaining:
getTen.then((ten) => ten + 10).then((twenty) => twenty + 10).then((thirty) => console.log(thirty));

//this is not chaining:
getTen.then((ten) => ten + 10);
getTen.then((twenty) => twenty + 10);
getTen.then((thirty) => console.log('I wanna print 30:', thirty)); //it'll print 10...