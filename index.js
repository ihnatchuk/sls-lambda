const getTodos = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({ id:1, name:"Dima" })
  };
};
module.exports={
  handler:getTodos(),
}