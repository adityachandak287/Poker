function subsetHands(arra, arra_size)
{
    var result_set = [],
        result;


    for(var x = 0; x < Math.pow(2, arra.length); x++)
    {
        result = [];
        var i = arra.length - 1;
        do
        {
            if( (x & (1 << i)) !== 0)
            {
                result.push(arra[i]);
            }
        }  while(i--);

        if( result.length >= arra_size)
        {
            result_set.push(result);
        }
    }

    for(var i=result_set.length-1;i>=0; i--)
    {
        if(result_set[i].length !== arra_size)
        {
            result_set.splice(i,1);
        }
    }

    return result_set;
}