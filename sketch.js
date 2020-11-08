//마우스로 공 튀기
//수정 확인 중-확인끝!:)
//atom에서 코드 수정하면 꼭 저장하기!
//atom에서 저장하면 github desktop에 수정된 확인 가능
//다하면 github desktop에서 commit to main 누르고 push origin 눌러야 github.com에도 반영

//지난 2주동안 이론 공부한다고 작품 코딩을 진행하지 못했다.
//이번주동안 지난주에 못한 것들을 해보자.
//수정확인중...

function setup() {
  createCanvas(500, 500);
  ball = new Ball();

}

function draw() {
  background(200);
  ball.update();
  ball.show();

}

function Ball() {
  this.xpos = width/2 - 150; //공의 x 시작위치
  this.ypos = height/2; //공의 y 시작위치
  this.gravity = 0.2; //아래로 끄는 힘
  this.diameter = 80; //공 지름

  this.dragStart = function() {} //공을 드래그 할 때
  this.dragEnd = function() {} //공에서 손을 놓을 때

  this.update = function() {}
  this.show = function() {
    ellipse(this.xpos, this.ypos, this.diameter)
    fill(30);
  }

}

var ball

//마우스가 공 위에 닿은 채 클릭되었을때 공을 드래그해라
function mousePressed() {
  if(mouseX == this.xpos && mouseY == this.ypos){
    ball.dragStart();
  }
}

//마우스가 놓였을 때 더이상 공을 드래그못함
function mouseReleased() {
  ball.dragEnd
}
