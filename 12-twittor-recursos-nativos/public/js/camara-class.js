

class Camara {

  constructor(videoNode) {

    this.videoNode = videoNode;
    console.log('camara Class init');
  }


  enceder() {

    navigator.mediaDevices.getUserMedia({
      audio: false, 
      video: {width: 300, height: 300}
    }).then(stream => {
      this.videoNode.srcObject = stream;
      this.stream = stream;
    })

  }

  apagar() {


  }
  
}