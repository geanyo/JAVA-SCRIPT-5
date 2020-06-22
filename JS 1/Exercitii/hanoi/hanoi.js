function randomColor() {
    return '#' + Math.random().toString(16).substri(-6);
}

class Disk {
    constructor(size) {
        this.size = size
        this.color = randomColor()
    }
    biggerThan(anotherDisk) {
        return this.size > anotherDisk.size
    }
}

class Rod {
    constructor(id, numberOfDisks, size) {
        this.id = id
        this.size = size
        this.disks = []
        createDisks(numberOfDisks)
    }
    createDisks(numberOfDisks) {
        for(let size=numberOfDisks; size>0; size--) {
            this.disks.push(new Disk(size))
        }
    }
    put(disk) {
        if (!this.canPutDisk(disk)) throw new Error('Cannot put disk')
        this.disks.push(disk)
    }
    canPutDisk(disk) {
        return this.isEmpty()
        || this.topDisk().biggerThan(disk)
    }
    pop() {
        if (this.isEmpty()) throw new Error('Rod is empty')
        return this.disks.pop()
        }
    }


    // pop() {
    //     if (!this.isEmpty()) {
    //     return this.disks.pop()
    //     } else {
    //     new Error('Rod is empty')
    //     }
    // }