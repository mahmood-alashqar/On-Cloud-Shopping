class Event{
    constructor(data){
        this.id=data.id
        this.title=data.eventTitle
        this.owner=data.belongTo
        this.groupId=data.belongToGroup
        this.content=data.description

    }
}

module.exports = Event;