const summarize = (...num) => {
    let total = 0;
    for (let a of num){
        if(!Number.isInteger(a)){
            continue;
        }

        if (a > Number.MAX_SAFE_INTEGER || typeof total === 'bigint'){
            a = BigInt(a);

            if(typeof total !== 'bigint')
                total= BigInt(total);
        }

         total += a;
    }
    return total;
}

export default summarize;