//마우스로 공 튀기
//수정 확인 중-확인끝!:)
//atom에서 코드 수정하면 꼭 저장하기!
//atom에서 저장하면 github desktop에 수정된 확인 가능
//다하면 github desktop에서 commit to main 누르고 push origin 눌러야 github.com에도 반영

//지난 2주동안 이론 공부한다고 작품 코딩을 진행하지 못했다.
//이번주동안 지난주에 못한 것들을 해보자.
//수정확인중...

function setup() {
  createCanvas(800, 800);
  ball = new Ball();

}

function draw() {
  background(0);
  ball.update();
  ball.show();

}

function Ball() {

  this.diameter = 90; //공 지름
  this.v_speed = 0;
  this.gravity = 0.2; //아래로 끄는 힘
  this.xpos = width/2; //공의 x 시작위치
  this.ypos = height/2 - 150; //공의 y 시작위치
  this.drag = false;
  this.v_speed_x = 0;

  this.onBall = function(x, y) {
    let dx = x - this.xpos;
    let dy = y - this.ypos;
    let dist = Math.sqrt(dx*dx, dy*dy)
    return dist <= this.diameter/2;
  }
 //공을 드래그 할 때
  this.startDrag = function() {
    this.drag = true;
    this.mousex = mouseX;
    this.mousey = mouseY;
  }
//공에서 손을 놓을 때
  this.endDrag = function()    {
    this.drag = false;
  }

  this.update = function() {

    this.minY = this.diameter/2;
    this.maxY = height - this.diameter/2;
    this.minX = this.diameter/2;
    this.maxX = width - this.diameter/2;

    if(this.drag) {

      this.xpos = Math.max(this.minX, Math.min(this.maxX, mouseX));
      this.ypos = mouseY;
      this.v_speed_x = this.v_speed_x/2 + (mouseX - this.mousex);
      this.v_speed = this.v_speed/2 + (mouseY - this.mousey);
      this.mousex = mouseX;
      this.mousey = mouseY;
    } else { //calculate gravity

      this.v_speed = this.v_speed + this.gravity;
      this.ypos = this.ypos + this.v_speed;

      if (this.ypos >= this.maxY){
        this.ypos = this.maxY;
        this.v_speed *= -1.0;
        this.v_speed = this.v_speed*0.9;
      }
    if(/*false &&*/ this.ypos <= this.minY) {
      this.ypos = this.minY;
      this.v_speed *= -1.0;
      this.v_speed = this.v_speed*0.9;}

      this.xpos = this.xpos + this.v_speed_x;
      if(this.xpos <= this.minX) {
        this.xpos = this.minX;
        this.v_speed_x *= -1;
      }
      if(this.xpos >= this.maxX){
        this.xpos = this.maxX;
        this.v_speed_x *= -1;
      }
      this.v_speed_x = this.v_speed_x *0.99;
    }
  }


  this.show = function() {
    ellipse(this.xpos, this.ypos, this.diameter)
    fill(random(0, 255), random(0, 255), random(0, 255));
  }

}

var ball

//마우스가 공 위에 닿은 채 클릭되었을때 공을 드래그해라
function mousePressed() {
  if(ball.onBall(mouseX, mouseY))
    ball.startDrag();
}

//마우스가 놓였을 때 더이상 공을 드래그못함
function mouseReleased() {
  ball.endDrag();
}
