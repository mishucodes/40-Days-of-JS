//01. Memoisation (Caching): Store the result of an expensive function call so the next time you get the same inputs, you return the saved result instead of recalculating. It trades memory for speed and avoids repeated work.


//Writing a memoise function:
    function memoise(pureFn)
    {
        let cache = new Map(); //because of its size property...
        let cacheSize = 3;
        return function(...args)
        {
            if(cache.has(String(args)))
            {
                console.log("cache hit");
                return cache.get(String(args));
            }
            //else:
            console.log("cache miss");
            console.log(cache);
            let result = pureFn.apply(this, args);
            if(cache.size >= cacheSize)
                cache.delete(cache.keys().next().value);
            cache.set(String(args), result);
            return result;
        }
    }

    function fn(x,y) {return x+y;};
    fn = memoise(fn);
        console.log(fn(1,2));
        console.log(fn(1,2));
        console.log(fn(2,3));
        console.log(fn(3,4));
        console.log(fn(4,5));
        console.log(fn(5,6));