//ข้อ1.1
function draw(n){
    let text ='';
    for (let i=0;i<n;i++){
        text += '*'
    }
    console.log(text)
}


//ข้อ1.2
function draw123(n){
    let text ='';
  
    for (let i=0;i<n;i++){
        for(let j=0; j<n; j++){
            text += '*'
        }
        text +='\n'

    }
    console.log(text)
}


//ข้อ1.3
function draw1_3(n){
    let text ='';
    for (let i=0;i<n;i++){
        for(let j=0; j<n; j++){
            text +=j +1
        }
        text +='\n'

    }
    console.log(text)
}


//ข้อ1.4
function draw1_4(n){
    let text ='';
    for (let i=0;i<n;i++){
        for(let j=0; j<n; j++){
            text += i + 1; 
        }
        text +='\n';
    }
    console.log(text);
}


//ข้อ1.5
function draw1_5(n){
    let text ='';
    for (let i=n;i>=1;i--){
        for(let j=0; j<n; j++){
            text += i;
        }
        text +='\n';
    }
    console.log(text);
}


//ข้อ1.6
function draw1_6(n){
    let text ='';
    let count = 1; 
    for (let i=0;i<n;i++){
        for(let j=0; j<n; j++){
            text += count; 
            count++; 
        }
        text +='\n'; 
    }
    console.log(text);
}


//ข้อ1.7
function draw1_7(n){
    let text ='';
    let count = n * n; 
    for (let i=0;i<n;i++){
        for(let j=0; j<n; j++){
            text += count; 
            count--; 
        }
        text +='\n'; 
    }
    console.log(text);
}



//ข้อ1.8
function draw1_8(n){
    let text ='';
    for (let i = 0; i < n; i++) {
        text += i * 2 + '\n';
    }
    console.log(text);
}



//ข้อ1.9
function draw1_9(n){
    let text ='';
    for (let i = 0; i < n; i++) {
        text += (i+1) * 2 + '\n';
    }
    console.log(text);
}




//ข้อ1.10
function draw1_10(n) {
    let text = '';
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            text += (i * j) + ' ';
        }
        text += '\n';
    }
    console.log(text);
}



//ข้อ1.11
function draw1_11(n){
    let text ='';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (j === i) {
                text += '-';
            } else {
                text += '*';
            }
        }
        text += '\n';
    }
    console.log(text);
}



//ข้อ1.12
function draw1_12(n){
    let text ='';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (j === n - i - 1) {
                text += '-';
            } else {
                text += '*';
            }
        }
        text += '\n';
    }
    console.log(text);
}
