filteredArray = theArray.filter(async(entry)=> {
    const response = await fetch(entry.url);
    const keep = response.ok ? (await response.json()).keep : false;
    return keep;
});