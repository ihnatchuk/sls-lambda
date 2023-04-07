const { ObjectId }= require("mongodb");

const {dbConnection} = require("../mongo.client");

const getTodoById = async (event) => {
    const { todoId }=event.pathParameters;

    const todo= await dbConnection.collection('todos')
        .findOne({ _id: new ObjectId(todoId) });

    if (!todo) return {
        statusCode: 404,
        body: "Todo id not found"
    }

    const updatedTodo={
        ...JSON.parse(event.body),
        updatedAt: new Date().toISOString()
    };
    await dbConnection.collection('todos')
        .updateOne({ _id: todo._id }, { $set: updatedTodo });

    return {
        statusCode: 200,
        body: JSON.stringify("Updated")
    };
};
module.exports={
    handler:getTodoById,
}