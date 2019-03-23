class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if (this.left && this.right);
		else if (!this.left) this.left = node;
		else if (this.left) this.right = node;
	}

	removeChild(node) {
		if (this.left == node) this.left = null;
		else if (this.right == node) this.right = null;
		else if (this.left !== node || this.right !== node) throw new Error('error: passed node is not a child of this node!');
	}

	remove() {

	}

	swapWithParent() {
		
	}
}

module.exports = Node;
