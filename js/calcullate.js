function calculateTriAngleArea(){
     const baseField=document.getElementById('triangle-base');
     const base=parseFloat(baseField.value);
     baseField.value='';

     const heightField=document.getElementById('triangle-height');
     const height=parseFloat(heightField.value);
     heightField.value='';
     
     if(isNaN(base)||isNaN(height)){
        alert('please Enter Number')
        return;
     }

     const TriangleArea=0.5*base*height;
     document.getElementById('view').innerText=TriangleArea;
}

function calculateRectangleArea(){
    const widthField=document.getElementById('rectangle-width');
    const width=parseFloat(widthField.value);
    widthField.value='';

    const heightField=document.getElementById('rectangle-height');
    const height=parseFloat(heightField.value);
    heightField.value='';
    
    if(isNaN(width)||isNaN(height)){
        alert('please enter a number');
        return;
    }

    const rectangleArea=width*height;
    document.getElementById('view-rectangle').innerText=rectangleArea;
}

// reusable Function

function calculateperallelogramArea(){
      const base= getInputValue('perallelogram-base');
      
      const height=getInputValue('perallelogram-height');
      if(isNaN(base)||isNaN(height)){
        alert('please enter a number');
        return
      }

      const perallelogramArea=base*height;
    //   document.getElementById('view-perallelogram').innerText=perallelogramArea;
    setViewValue('view-perallelogram', perallelogramArea);
}

// reusable Function get input value
function getInputValue(inputId){
    const inputField=document.getElementById(inputId);
    const input=parseFloat(inputField.value);
    inputField.value='';
     return input;
}
function setViewValue(viewId,Area){
    const view=document.getElementById(viewId);
    view.innerText=Area;
}