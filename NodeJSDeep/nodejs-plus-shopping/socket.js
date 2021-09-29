const socketIo = require('socket.io')
const http = require('./app');


const io = socketIo(http)
const socketIdMap = {}

const emitSamePageViewerCount = () => {
  const countByUrl = Object.values(socketIdMap).reduce((val, url) => {
    return {
      ...val,
      [url]: val[url] ? val[url] + 1 : 1,
    }
  }, {})

  for (const [socketId, url] of Object.entries(socketIdMap)) {
    const count = countByUrl[url]
    io.to(socketId).emit('SAME_PAGE_VIEWER_COUNT', count)
  }
}
function initSocket(sock) {
  console.log('새로운 소켓이 연결됐어요!')

  // 특정 이벤트가 전달됐는지 감지할 때 사용될 함수
  function watchEvent(event, func) {
    sock.on(event, func)
  }

  // 연결된 모든 클라이언트에 데이터를 보낼때 사용될 함수
  function notifyEveryone(event, data) {
    io.emit(event, data)
  }

  return {
    watchBuying: () => {
      watchEvent('BUY', (data) => {
        const emitData = {
          ...data,
          date: new Date().toISOString(),
        }
        notifyEveryone('BUY_GOODS', emitData)
      })
    },

    watchByebye: () => {
      watchEvent('disconnect', () => {
        console.log(sock.id, '연결이 끊어졌어요!')
      })
    },
  }
}

io.on('connection', (socket) => {
  const {watchBuying, watchByebye} = initSocket(socket);
  socketIdMap[socket.id] = null

  watchBuying();

  socket.on('CHANGED_PAGE', (data) => {
    socketIdMap[socket.id] = data
    emitSamePageViewerCount()
    console.log('페이지 변경', data, socket.id)
  })
  
  watchByebye();
})