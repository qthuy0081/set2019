class Geometric {
 
  constructor(length,width,height){
    this.length=length
    this.width=width
    this.height=height
  }
  getP()
  {
    let result = 0
    if((this.height*this.width*this.height)>0)
    {
    result = this.length*4+this.width*4+this.height*4
    }
    return result

  }
  getA()
  {
    let result = 0 
    if((this.height*this.width*this.height)>0){
      result=(2*this.height*(this.width+this.height)+2(this.width*this.height))
    }
    return result

  }
  getV()
  {
    let result =0 
     if(height*width*height>0){
      result= lenght*width*height
    }
    return result

  }
}
var shape1=new Geometric (3,3,3)