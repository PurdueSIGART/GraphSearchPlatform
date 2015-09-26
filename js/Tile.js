function Tile(x, y, cost) {
    this.x = x;
    this.y = y;
    this.cost = cost;
    this.visited = false;
    this.parent = null;

    this.isTraversable = function() {
        return this.cost > 0;
    };

    this.isGoal = function(x, y) {
        return this.x == x && this.y == y;
    };

    this.visit = function() {
        this.visited = true;
    };

    this.setParent = function(parent) {
        this.parent = parent;

    };
}
