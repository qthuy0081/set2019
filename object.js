class Geometric {
 
  constructor(length,width,height){
    this.length=length
    this.width=width
    this.height=height
  }
  getP()
  {
    let result = 0
    if(height*width*height>0)
    {
    result = length*4+width*4+height*4
    }
    return result

  }
  getA()
  {
    let result = 0 
    if(height*width*height>0){
      result=(2*height*(width+height)+2(width*height))
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