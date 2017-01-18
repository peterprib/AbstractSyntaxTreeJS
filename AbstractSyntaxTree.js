function AbstractSyntaxTree(d,s) {
	this.setDefinition(d);
	this.setString(s);
}

AbstractSyntaxTree.prototype.parse = function(s) {
	this.nodes=[];
	if(s!==undefined) this.setString(s);
}
AbstractSyntaxTree.prototype.setDefinition(d) {
	this.definition=definition;
	if(this.string==null) return;
	this.parse();
}
AbstractSyntaxTree.prototype.setString(s) {
	this.definition=definition;
	if(this.string==null) return;
	this.parse();
}

ASTExpression function() {
}
ASTExpression.inheritsProperties(AbstractSyntaxTree);

ASTLiteral function() {
}
ASTLiteral.inheritsProperties(AbstractSyntaxTree);

ASTComment function(s,e) {
	this.startString=s||"/*";
	this.endString=e||"*/";
}
ASTComment.inheritsProperties(AbstractSyntaxTree);

ASTWhitenoise function(i) {
	for(i=i||0;i<this.length;i++)
		if(this.string.charAt(i)!==" ") break;
	return i;
}
ASTWhitenoise.inheritsProperties(AbstractSyntaxTree);

if (typeof define !== 'function') {
    var define = require('amdefine')(AbstractSyntaxTree);
}
define(function(AbstractSyntaxTree) {
    //The value returned from the function is
    //used as the module export visible to Node.
    return AbstractSyntaxTree;
});
