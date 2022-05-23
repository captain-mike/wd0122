
document.write( '<table>' );

for(let i = 0; i < 8; i++ ){
    document.write( `<tr>` );
    for(let j = 0; j < 8; j++){
        let pariDispari:number = (j + i) %2;
        let color:string = pariDispari ? '#000' : '#fff';
        
        document.write(`<td style="background-color: ${color}"></td>`);
    }
    document.write( `</tr>` );


}

document.write( '</table>' );