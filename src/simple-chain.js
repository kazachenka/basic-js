const chainMaker = {
   res : [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.res.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if(  typeof position !== "number" || position < 1 ||position > this.res.length - 1) {
      this.res = [];
      throw Error;
    }
    this.res.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.res.reverse();
    return this;
  },
  finishChain() {
    let finish = this.res.slice(0, this.res.length);
    this.res = [];
    return finish.join('~~');
  }
};

module.exports = chainMaker;
