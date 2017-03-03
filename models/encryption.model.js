//privates
//no private variables

//public
module.exports = encryption; //this is so we can get at it from other places in the program

function encryption(){
   this.saltrounds = 10;
   this.rawtext = '';
   this.encryptedword = '';
}

//extend this with the ability to hash a word and validate a word
