let io=null;
 const initialize =(server)=>{
 	 const socketIO = require('socket.io');
 	 // console.log(socketIO);
 	 io=socketIO(server);
 	  io.on('connection',(socket)=>{
 	  	  console.log("New client connected",socket.id);
 	  	  socket.on('disconnect',()=>{
 	  	 		console.log('client disconnected',socket.id);
 	  		})
 	  })
 	  return io;
 }
 const getIo=()=>{
 	 if(!io)
 	 {
 	 	 throw new Error('socket is not initialize');
 	 }
 	 return io;
 }
 module.exports ={initialize,getIo};