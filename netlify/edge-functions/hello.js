exports.handler = async function(event, context) {
  console.log('Function triggered:', event);
  
  try {
    // Your function logic here
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Hello, World!' }),
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
