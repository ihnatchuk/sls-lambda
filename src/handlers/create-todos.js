const {dbConnection} = require("../mongo.client");

const createTodos = async (event) => {
    const todo={
        ...JSON.parse(event.body),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    await dbConnection.collection('todos').insertOne(todo)
    return {
        statusCode: 201,
        body: JSON.stringify("Created")
    };
};
module.exports={
    handler:createTodos,
}