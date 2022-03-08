Array.prototype.pushAll = (items) => {
    if(!Array.isArray(items)) {
        throw new Error('items must be an array.')
    }
    return this.push(...items);
}

