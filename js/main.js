     // ------------------------------------
    //              main.js
   //---------------------------------------
  //            denny@vdenny.com
 // 
// global vars 

var counter = 0; 

var B = [];

var I = [];

var N = [];

var G = [];

var O = [];

var BINGO = ["B","I","N","G","O"];

var picked_rows =[];

var picked_cols =[];

var shuffled_audio = [];

  var bE = [];
       bE[0] = document.getElementById('R1C1');
       bE[1] = document.getElementById('R2C1');
       bE[2] = document.getElementById('R3C1');
       bE[3] = document.getElementById('R4C1');
       bE[4] = document.getElementById('R5C1');

   var iE = [];
       iE[0] = document.getElementById('R1C2');
       iE[1] = document.getElementById('R2C2');
       iE[2] = document.getElementById('R3C2');
       iE[3] = document.getElementById('R4C2');
       iE[4] = document.getElementById('R5C2');

   var nE = [];
       nE[0] = document.getElementById('R1C3');
       nE[1] = document.getElementById('R2C3');
       nE[2] = document.getElementById('R3C3');
       nE[3] = document.getElementById('R4C3');
       nE[4] = document.getElementById('R5C3');

   var gE = [];
       gE[0] = document.getElementById('R1C4');
       gE[1] = document.getElementById('R2C4');
       gE[2] = document.getElementById('R3C4');
       gE[3] = document.getElementById('R4C4');
       gE[4] = document.getElementById('R5C4');

   var oE = [];
       oE[0] = document.getElementById('R1C5');
       oE[1] = document.getElementById('R2C5');
       oE[2] = document.getElementById('R3C5');
       oE[3] = document.getElementById('R4C5');
       oE[4] = document.getElementById('R5C5');

  var modal = document.getElementById('myModal');

//=======================================

              // ------------------------------------
             //      play_bingo
            //--------------------------------------
           //         
          //         starts the drawing of the bingo board

                    function play_bingo() {

                      check_counter();

                      black_out_board();

                      pick_a_square();
                          
                      hightlight_square();

                      color_elements();

                      play_sound();
                    }
 // end function
//==========================================


        // ------------------------------------
       //       clear_the_board()
      //--------------------------------------
     //        removes all the content from the board   
    //    

                function clear_the_board() {

                       bE = [];
                       bE[0] = document.getElementById('R1C1');
                       bE[1] = document.getElementById('R2C1');
                       bE[2] = document.getElementById('R3C1');
                       bE[3] = document.getElementById('R4C1');
                       bE[4] = document.getElementById('R5C1');

                       iE = [];
                       iE[0] = document.getElementById('R1C2');
                       iE[1] = document.getElementById('R2C2');
                       iE[2] = document.getElementById('R3C2');
                       iE[3] = document.getElementById('R4C2');
                       iE[4] = document.getElementById('R5C2');

                       nE = [];
                       nE[0] = document.getElementById('R1C3');
                       nE[1] = document.getElementById('R2C3');
                       nE[2] = document.getElementById('R3C3');
                       nE[3] = document.getElementById('R4C3');
                       nE[4] = document.getElementById('R5C3');

                       gE = [];
                       gE[0] = document.getElementById('R1C4');
                       gE[1] = document.getElementById('R2C4');
                       gE[2] = document.getElementById('R3C4');
                       gE[3] = document.getElementById('R4C4');
                       gE[4] = document.getElementById('R5C4');

                       oE = [];
                       oE[0] = document.getElementById('R1C5');
                       oE[1] = document.getElementById('R2C5');
                       oE[2] = document.getElementById('R3C5');
                       oE[3] = document.getElementById('R4C5');
                       oE[4] = document.getElementById('R5C5');

                  
                       bE[0].innerHTML = "";
                       bE[1].innerHTML = "";
                       bE[2].innerHTML = "";
                       bE[3].innerHTML = "";
                       bE[4].innerHTML = "";

                       iE[0].innerHTML = "";
                       iE[1].innerHTML = "";
                       iE[2].innerHTML = "";
                       iE[3].innerHTML = "";
                       iE[4].innerHTML = "";

                       nE[0].innerHTML = "";
                       nE[1].innerHTML = "";
                       nE[2].innerHTML = "";
                       nE[3].innerHTML = "";
                       nE[4].innerHTML = "";

                       gE[0].innerHTML = "";
                       gE[1].innerHTML = "";
                       gE[2].innerHTML = "";
                       gE[3].innerHTML = "";
                       gE[4].innerHTML = "";

                       oE[0].innerHTML = "";
                       oE[1].innerHTML = "";
                       oE[2].innerHTML = "";
                       oE[3].innerHTML = "";
                       oE[4].innerHTML = "";

                }

 // end function
//===========================================



          // ------------------------------------
         //      reload()
        //--------------------------------------
       //        reloads the page for a new game   
      //     

                  function reload() {
                    
                     location.reload(); 

                  }

 //end function
//==============================



        // ------------------------------------
       //       new_bingo_game()
      //--------------------------------------
     //         a new game   
    //          
                function new_bingo_game() {

                counter = 0; 

                BINGO = ["B","I","N","G","O"];

                picked_rows =[];

                picked_cols =[];

                B = [];

                I = [];

                N = [];

                G = [];

                O = [];

               shuffled_audio = [];

                clear_the_board();

                build_bingo_board();

                black_out_board();

                color_elements();

                }

 // end function
//==========================================



            // ------------------------------------
           //       rows_cols
          //--------------------------------------
         //         accepts    
        //          returns a rand num 1 to 5

                    function rows_cols() {

                      var j = Math.floor(Math.random() * 5)+1;

                      return j;

                    }

 // end function
//==========================================



          // ------------------------------------
         //       rows_cols
        //--------------------------------------
       //         accepts  row an col  
      //          returns true or false

          function check_picked(x,y) {
                
                  var row = x;

                  var col = y;

                  var picked = false;
                          
                  for (var i = 0; i <= picked_rows.length; i++) {
                    
                                if (picked_rows[i] == row && picked_cols[i] == col){

                                   console.log(picked_rows[i]);
                                   console.log(picked_cols[i]);
                                 
                                   picked = true;

                                }
                   
                 }
                
                console.log(picked);

                 return picked;
                 
          }

 // end function
//==========================================




          // ------------------------------------
         //       back_out_board
        //--------------------------------------
       //        blacks out the board for a new game   
      //          

              function black_out_board() {
                
                w3.addStyle('#R1C1','background-color','black');
                w3.addStyle('#R2C1','background-color','black');
                w3.addStyle('#R3C1','background-color','black');
                w3.addStyle('#R4C1','background-color','black');
                w3.addStyle('#R5C1','background-color','black');

                w3.addStyle('#R1C2','background-color','black');
                w3.addStyle('#R2C2','background-color','black');
                w3.addStyle('#R3C2','background-color','black');
                w3.addStyle('#R4C2','background-color','black');
                w3.addStyle('#R5C2','background-color','black');

                w3.addStyle('#R1C3','background-color','black');
                w3.addStyle('#R2C3','background-color','black');
                w3.addStyle('#R3C3','background-color','black');
                w3.addStyle('#R4C3','background-color','black');
                w3.addStyle('#R5C3','background-color','black');

                w3.addStyle('#R1C4','background-color','black');
                w3.addStyle('#R2C4','background-color','black');
                w3.addStyle('#R3C4','background-color','black');
                w3.addStyle('#R4C4','background-color','black');
                w3.addStyle('#R5C4','background-color','black');

                w3.addStyle('#R1C5','background-color','black');
                w3.addStyle('#R2C5','background-color','black');
                w3.addStyle('#R3C5','background-color','black');
                w3.addStyle('#R4C5','background-color','black');
                w3.addStyle('#R5C5','background-color','black');

                nE[2].innerHTML = "Free";
                w3.addStyle('#R3C3','color','green');

              }

 // end function
//==========================================



    // ------------------------------------
   //       pick_a_square()
  //--------------------------------------
 //         accepts    
//          generates a location on the grid
function pick_a_square() {

     if (picked_rows.length == 0){
   
      row = rows_cols();   
      
      col = rows_cols(); 

      picked_rows.push(row);

      picked_cols.push(col);

     } else {


                row = rows_cols();   
      
                col = rows_cols();                

               if (check_picked(row,col) == false) {

                   picked_rows.push(row);

                   picked_cols.push(col);

                     
                         console.log(row,' row');

                         console.log(col,' col');
                    
                         console.log(picked_rows);
                       
                         console.log(picked_cols);

                 }else{

                    pick_a_square();

                 }

     }

}
 //end function
// ================================


 
         // ------------------------------------
        //       check_counter()
       //--------------------------------------
      //           
     //           

           function check_counter() {

                counter++ ;

                console.log(counter,'counter');

                if (counter >= 26){

                alert('bingo');

                new_bingo_game();

                reload();

                }

             }

 //end function
// ================================



    // ------------------------------------
   //       play_sound()
  //--------------------------------------
 //           
//        

function play_sound() {

var audio = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","aa","bb","cc","dd","ee","ff","gg","hh"];


  
//var r = Math.floor(Math.random() * audio.length); 

  if (counter == 1) {

    shuffled_audio = shuffle(audio);

    console.log("audio",shuffled_audio);
  }

var x = document.getElementById("myAudio");

var str = "mp3/" + shuffled_audio[counter] +"-bingo.mp3";

console.log(str);

x.src = str;

  x.play();

}
//=========================


    // ------------------------------------
   //       color_elements()
  //--------------------------------------
 //         accepts    
//         set colors of elements  

function color_elements() {
      
      var bg = set_a_random_color(random_shade());

      w3.addStyle('body','background-color',bg);

      //   w3.addStyle('.grid-container','background-color',set_a_random_color());

      w3.addStyle('.bingo','color',bg);

      w3.addStyle('.B','color',set_a_random_color(random_shade_not_dark()));

      w3.addStyle('.I','color',set_a_random_color(random_shade_not_dark()));

      w3.addStyle('.N','color',set_a_random_color(random_shade_not_dark()));

      w3.addStyle('.G','color',set_a_random_color(random_shade_not_dark()));

      w3.addStyle('.O','color',set_a_random_color(random_shade_not_dark()));


}
//=================================


    // ------------------------------------
   //       random_shade()
  //--------------------------------------
 //          
//         random_shade_not_dark()

function random_shade_not_dark() {

      var shades = ["red","green","blue"];

      var r = Math.floor(Math.random() * shades.length); 

      return shades[r];

}
//========================================


    // ------------------------------------
   //       random_shade()
  //--------------------------------------
 //           
//         random shade for backgrounds 

function random_shade() {

      var shades = ["red","green","blue","dark"];

      var r = Math.floor(Math.random() * shades.length); 

      return shades[r];

}
//========================================


    // ------------------------------------
   //       hightlight_square()
  //--------------------------------------
 //         accepts    
//          adds style and hightlights a picked square

function hightlight_square() {
  if (col == 1) {
        console.log('B');
            
            if(row == 1){
            
            w3.addStyle('#R1C1','color','red');
            w3.addStyle('#R1C1','border-color','green');
            w3.addStyle('#R1C1','background-color','yellow');

          
            }
               if(row == 2){

                  w3.addStyle('#R2C1','color','red'); 
                  w3.addStyle('#R2C1','border-color','green');
                  w3.addStyle('#R2C1','background-color','yellow');


            }
               if(row == 3){

                  w3.addStyle('#R3C1','color','red');
                  w3.addStyle('#R3C1','border-color','green');
                  w3.addStyle('#R3C1','background-color','yellow');
              
            }
               if(row == 4){

                  w3.addStyle('#R4C1','color','red');
                  w3.addStyle('#R4C1','border-color','green');
                  w3.addStyle('#R4C1','background-color','yellow');

              
            }
               if(row == 5){

                  w3.addStyle('#R5C1','color','red');
                  w3.addStyle('#R5C1','border-color','green');
                  w3.addStyle('#R5C1','background-color','yellow');
              
            }


      } 
        if (col == 2) {
        console.log('I');

            if(row == 1){
            
                  w3.addStyle('#R1C2','color','red');
                  w3.addStyle('#R1C2','border-color','green');
                  w3.addStyle('#R1C2','background-color','yellow');

          
            }
               if(row == 2){

                  w3.addStyle('#R2C2','color','red');
                  w3.addStyle('#R2C2','border-color','green');
                  w3.addStyle('#R2C2','background-color','yellow');

            }
               if(row == 3){

                  w3.addStyle('#R3C2','color','red');
                  w3.addStyle('#R3C2','border-color','green');
                  w3.addStyle('#R3C2','background-color','yellow');

              
            }
               if(row == 4){

                  w3.addStyle('#R4C2','color','red');
                  w3.addStyle('#R4C2','border-color','green');
                  w3.addStyle('#R4C2','background-color','yellow');

              
            }
               if(row == 5){

                  w3.addStyle('#R5C2','color','red');
                  w3.addStyle('#R5C2','border-color','green');
                  w3.addStyle('#R5C2','background-color','yellow');
  
            }



      } 
          if (col == 3) {
        console.log('N');

            if(row == 1){
            
            w3.addStyle('#R1C3','color','red');
            w3.addStyle('#R1C3','border-color','green');
            w3.addStyle('#R1C3','background-color','yellow');

          
            }
               if(row == 2){

                  w3.addStyle('#R2C3','color','red');
                  w3.addStyle('#R2C3','border-color','green');
                  w3.addStyle('#R2C3','background-color','yellow');

            }
               if(row == 3){

                  w3.addStyle('#R3C3','color','red');
                  w3.addStyle('#R3C3','border-color','green');
                  w3.addStyle('#R3C3','background-color','yellow');

              
            }
               if(row == 4){

                  w3.addStyle('#R4C3','color','red');
                  w3.addStyle('#R4C3','border-color','green');
                  w3.addStyle('#R4C3','background-color','yellow');

              
            }
               if(row == 5){

                  w3.addStyle('#R5C3','color','red');
                  w3.addStyle('#R5C3','border-color','green');
                  w3.addStyle('#R5C3','background-color','yellow');

              
            }


      } 
        if (col == 4) {
        console.log('G');

            if(row == 1){
            
            w3.addStyle('#R1C4','color','red');
            w3.addStyle('#R1C4','border-color','green');
            w3.addStyle('#R1C4','background-color','yellow');

          
            }
               if(row == 2){

            w3.addStyle('#R2C4','color','red');
            w3.addStyle('#R2C4','border-color','green');
            w3.addStyle('#R2C4','background-color','yellow');

            }
               if(row == 3){

            w3.addStyle('#R3C4','color','red');
            w3.addStyle('#R3C4','border-color','green');
            w3.addStyle('#R3C4','background-color','yellow');

              
            }
               if(row == 4){

            w3.addStyle('#R4C4','color','red');
            w3.addStyle('#R4C4','border-color','green');
            w3.addStyle('#R4C4','background-color','yellow');

              
            }
               if(row == 5){
            w3.addStyle('#R5C4','color','red');
            w3.addStyle('#R5C4','border-color','green');
            w3.addStyle('#R5C4','background-color','yellow');

              
            }


      } 
          if (col == 5) {
        console.log('O');

            if(row == 1){
            
            w3.addStyle('#R1C5','color','red');
            w3.addStyle('#R1C5','border-color','green');
            w3.addStyle('#R1C5','background-color','yellow');

          
            }
               if(row == 2){

            w3.addStyle('#R2C5','color','red');
            w3.addStyle('#R2C5','border-color','green');
            w3.addStyle('#R2C5','background-color','yellow');


            }
               if(row == 3){

            w3.addStyle('#R3C5','color','red');
            w3.addStyle('#R3C5','border-color','green');
            w3.addStyle('#R3C5','background-color','yellow');

              
            }
               if(row == 4){

            w3.addStyle('#R4C5','color','red');
            w3.addStyle('#R4C5','border-color','green');
            w3.addStyle('#R4C5','background-color','yellow');

              
            }
               if(row == 5){

            w3.addStyle('#R5C5','color','red');
            w3.addStyle('#R5C5','border-color','green');
            w3.addStyle('#R5C5','background-color','yellow');
              
            }

      } 
}



      // ------------------------------------
     //      build_bingo_board() 
    //--------------------------------------
   //         accepts    
  //          returns a 
 //           builds the bingo board values

function build_bingo_board() {

  //  B

 fill_that_arr(B,1);

 put_value_on_board(B,BINGO[0]);

  // I

 fill_that_arr(I,21);

 put_value_on_board(I,BINGO[1]);

 // N

 fill_that_arr(N,41);

 put_value_on_board(N,BINGO[2]);

  // G

 fill_that_arr(G,61);

 put_value_on_board(G,BINGO[3]);

  // O

 fill_that_arr(O,81);

 put_value_on_board(O,BINGO[4]);

}
//=========================
  

     // ------------------------------------
    //        fill_that_arr(array,num)
   //--------------------------------------
  //         accepts array and number  
 //          returns an array
//           fills an array with values starting at num and returns it

function fill_that_arr(array,num){

               var arr = array; 
               var num = num;       

               for (var i = 0; i <= 15; i++) {
  
                var r = Math.floor(Math.random() * 15) + num;     

                    if (arr.includes(r) == false){
                                               
                          arr.push(r);
                       
                          console.log(arr.slice(0,5));

                    }    
                   
       }

      return arr;

}
//===========================================


    // ------------------------------------
   //     put_value_on_board(array,char)
  //--------------------------------------
 //         accepts an array and a key char B I N G O 
//          returns a 

function put_value_on_board(array,char) {
    var Letter = array;
    var L = char;
  console.log(char);

  if (char == "B"){

           for (var i = 0; i <= 4; i++) {

           bE[i].innerHTML = "";
           bE[i].innerHTML += Letter[i];
           console.log(i,"i");

        }

  }

   if (char == "I"){

        for (var i = 0; i <= 4; i++) {

           iE[i].innerHTML = "";
           iE[i].innerHTML += Letter[i];
           console.log(i,"i");

        }
}

   if (char == "N"){

        for (var i = 0; i <= 4; i++) {

           nE[i].innerHTML = "";
           nE[i].innerHTML += Letter[i];
           console.log(i,"i");

        }
}


   if (char == "G"){

        for (var i = 0; i <= 4; i++) {

           gE[i].innerHTML = "";
           gE[i].innerHTML += Letter[i];
           console.log(i,"i");

        }
}



   if (char == "O"){

        for (var i = 0; i <= 4; i++) {

           oE[i].innerHTML = "";
           oE[i].innerHTML += Letter[i];
           console.log(i,"i");

        }
}


}
//===========================



   // ------------------------------------
  //          set_a_random_color(shade)
 //--------------------------------------
//            will return a random crayon color value

function set_a_random_color(shade){

var shade = shade;

if ( shade == "" ){

  var r = Math.floor(Math.random() * crayon.length); 

  return crayon[r].value;

} 

if ( shade == "red" ){

  var r = Math.floor(Math.random() * red_crayon.length); 

  return red_crayon[r].value;
  
} 

if ( shade == "green" ){

  var r = Math.floor(Math.random() * green_crayon.length); 

  return green_crayon[r].value;
  
} 
 

 if ( shade == "blue" ){

  var r = Math.floor(Math.random() * blue_crayon.length); 

  return blue_crayon[r].value;
  
}   


 if ( shade == "dark" ){

  var r = Math.floor(Math.random() * dark_crayon.length); 

  return dark_crayon[r].value;
  
}  
              
}
//===============================


   // ------------------------------------
  //          random_v_key()
 //--------------------------------------
//  will return a short random key

function random_v_key(chars){

var key = "";

var possible = "0123456789";

for( var i=0; i < chars; i++ )

key += possible.charAt(Math.floor(Math.random() * possible.length));

return key;

}
//==================================



   // ------------------------------------
  //          load_image_url(url)
 //--------------------------------------
// loads a image (url) into the player

function load_image_url(url) {
  
  var rU = document.getElementById('ryt');
  
  // load this url into the video player
  
  rU.src = url;

}
//====================================


   // ------------------------------------
  //          change_border_colors()
 //--------------------------------------
// change borders colors into random crayon colors

function change_border_colors() {

        var new_color = set_a_random_color();
        
        w3.addStyle('#ryt','border-color', new_color);

        w3.addStyle('#btn','border-color', new_color);

        w3.addStyle('hr','border-color', new_color);

        w3.addStyle('select','border-color', new_color);
}
//==========================================


   // ------------------------------------
  //          random_image_button()
 //--------------------------------------
//  code to execute when the button is clicked

 function random_image_button() {
               
        // change the colors of the borders

        change_border_colors();              
              
      //  scrape_bing();
        
    
    }
// ============================

  

   // ------------------------------------
  //          scrape_bing()
 //--------------------------------------
// scrape bing and find a youtube video then load the player

function scrape_bing() {

      output.innerHTML = "working...   not loading? click again.";  //output to user

      var search_engine = "https://www.bing.com/images/search?q=";

     // var search_string = random_adjectives() + "+" + random_animal() + "+" + random_image_format();
        
    //  var search_string = random_word() + "+" + random_word() + "+" + random_image_format();
      
var rCh = Math.floor(Math.random() * 4); 
        
     if (rCh == 0) {
                    
          var search_string = random_bad_word() + "+" + random_adjectives();
              
        }

     if (rCh == 1){
         
             var search_string = random_enf() + "+" + random_girl();
             
        }

    if (rCh == 2){
      
         var search_string = random_bad_word() + "+" + random_girl();
             
        }
    if (rCh == 3){
      
         var search_string = random_bad_word() + "+" + random_enf() + "+" + random_girl();
             
        }


      var myurl = search_engine + search_string;
       
        $.get(myurl, function(response) {
          console.log(response);
        });


       //https://www.xvideos.com/embedframe/21753851
                   
           if (myurl != ""){ // if not empty

             console.log(myurl,"myurl");

            counter = counter + 1;

              if (counter > 1){

                 w3.show('#mySelect');

                 w3.show('#myButton');
              }
            

          var a = "<a target='new' href='" + myurl +"'>" + myurl + "</a>";            

           output.innerHTML = counter + " - " + a;

            var option = document.createElement("option");

            option.selected=true;

            option.text = counter + " - " + myurl ;

            option.value= myurl;

            mySel.add(option);

            mySel.focus();
         
           }

        
            //  watched_keys.push(theKey.trim());

          //load this url into the video player
        
       load_image_url (myurl);


       //  insert_into_db(theKey);
               

        }

      
//=========================================



   // ------------------------------------------------
  //          loadYt()
 //---------------------------------------------------
//            loads a video from the select element

function load_image(){

  var images = document.getElementById('mySelect');
  
  var len = images.value.length;
            
  

 load_image_url (images.value);
 console.log(images.value);

}
//=====================================





   // ------------------------------------
  //          show_ad()
 //--------------------------------------
// show the popup ad modal

 function show_ad() {

var myAds=["<a target='_blank' href='http://rover.ebay.com/rover/1/711-53200-19255-0/1?icep_ff3=2&pub=5575073841&toolid=10001&campid=5338484833&customid=&icep_item=173747678182&ipn=psmain&icep_vectorid=229466&kwid=902099&mtid=824&kw=lg'>Grand Theft Auto V (Sony PlayStation 4, 2014)<span class='w3-tag ad-tag'>$28.78</span></a>","<a target='_blank' href='http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=4&pub=5575073841&toolid=10001&campid=5338484833&customid=&mpre=https%3A%2F%2Fwww.ebay.com%2Fitm%2FFar-Cry-New-Dawn-PS4-NEW%2F153392492624%3Fhash%3Ditem23b6e7b050%3Ag%3AAKQAAOSw57Zccdq7'>Far Cry [ New Dawn ] (PS4) NEW<span class='w3-tag ad-tag'>US $36.00</span></a>"];

     var inner = document.getElementById("modal-inner");
     
     var rn= Math.floor(Math.random() * 10);
     
     console.log(rn,"show_ad");
     
       if (rn >=theAd ){

        var rA = Math.floor(Math.random() * myAds.length);

        inner.innerHTML=myAds[rA];

        modal.style.display = "block";
          
        w3.addStyle('.modal-content','border-color',set_a_random_color());
        
        adCounter = 0;  // reset the counter

       }
 }
//===================================




   // ------------------------------------
  //          insert_into_db()
 //--------------------------------------
// insert the key into the youtube database

 function insert_into_db(key) {

var url = "php/insert.php?key=" + key;  

//console.log('yt',"url", url);
   
   var xhttp = new XMLHttpRequest();

   xhttp.onreadystatechange = function() {

       if (this.readyState == 4 && this.status == 200) {

          // Typical action to be performed when the document is ready:
          console.log(xhttp.responseText);
       }
   };

   xhttp.open("GET", url, true);

   xhttp.send();
   

 }
//=============================================



var dark_crayon = [  {"name" : "black" , "value" : "#000000"},
  {"name" : "eerieblack" , "value" : "#1b1b1b"},
  {"name" : "granitegray" , "value" : "#676767"},
  {"name" : "sonicsilver" , "value" : "#757575"},
  {"name" : "licorice" , "value" : "#1a1110"},
  {"name" : "smokeytopaz" , "value" : "#832a0d"},
  {"name" : "dirt" , "value" : "#9b7653"}, 
  {"name" : "rawumber" , "value" : "#714b23"},
  {"name" : "mummystomb" , "value" : "#828e84"},
  {"name" : "smoke" , "value" : "#738276"},
  {"name" : "leatherjacket" , "value" : "#253529"},
  {"name" : "outerspace" , "value" : "#414a4c"},
  {"name" : "blackcoralpearl" , "value" : "#54626f"},  
  {"name" : "midnightblue" , "value" : "#1a4876"},  
  {"name" : "midnightpearl" , "value" : "#702670"}, 
  {"name" : "orchidpearl" , "value" : "#7b4259"}];

var red_crayon = [ {"name" : "lilac" , "value" : "#db91ef"},
  {"name" : "vividviolet" , "value" : "#8f509d"},
  {"name" : "fuchsia" , "value" : "#c364c5"},
  {"name" : "shockingpink" , "value" : "#fb7efd"},
  {"name" : "pinkflamingo" , "value" : "#fc74fd"},
  {"name" : "midnightpearl" , "value" : "#702670"},
  {"name" : "plum" , "value" : "#8e4585"},
  {"name" : "razzmicberry" , "value" : "#8d4e85"},
  {"name" : "bubblegum" , "value" : "#ffd3f8"},
  {"name" : "lilacluster" , "value" : "#ae98aa"},
  {"name" : "purplepizzazz" , "value" : "#fe4eda"},
  {"name" : "hotmagenta" , "value" : "#ff1dce"},
  {"name" : "orchid" , "value" : "#e6a8d7"},
  {"name" : "razzledazzlerose" , "value" : "#ff48d0"},
  {"name" : "pearlypurple" , "value" : "#b768a2"},
  {"name" : "shampoo" , "value" : "#ffcff1"},
  {"name" : "rosequartz" , "value" : "#bd559c"},
  {"name" : "thistle" , "value" : "#ebc7df"},
  {"name" : "frostbite" , "value" : "#e936a7"},
  {"name" : "princessperfume" , "value" : "#ff85cf"},
  {"name" : "redviolet" , "value" : "#c0448f"},
  {"name" : "sugarplum" , "value" : "#914e75"},
  {"name" : "mulberry" , "value" : "#c54b8c"},
  {"name" : "eggplant" , "value" : "#6e5160"},
  {"name" : "twilightlavender" , "value" : "#8a496b"},
  {"name" : "magenta" , "value" : "#f664af"},
  {"name" : "mysticmaroon" , "value" : "#ad4379"},
  {"name" : "cerise" , "value" : "#dd4492"},
  {"name" : "wildstrawberry" , "value" : "#ff43a4"},
  {"name" : "wintersky" , "value" : "#ff007c"},
  {"name" : "lavender" , "value" : "#fcb4d5"},
  {"name" : "cottoncandy" , "value" : "#ffbcd9"},
  {"name" : "carnationpink" , "value" : "#ffaacc"},
  {"name" : "orchidpearl" , "value" : "#7b4259"},
  {"name" : "violetred" , "value" : "#f75394"},
  {"name" : "ruby" , "value" : "#aa4069"},
  {"name" : "mysticpearl" , "value" : "#d65282"},
  {"name" : "razzmatazz" , "value" : "#e3256b"},
  {"name" : "jazzberryjam" , "value" : "#ca3767"},
  {"name" : "strawberry" , "value" : "#fc5a8d"},
  {"name" : "sasquatchsocks" , "value" : "#ff4681"},
  {"name" : "ticklemepink" , "value" : "#fc89ac"},
  {"name" : "blush" , "value" : "#de5d83"},
  {"name" : "piggypink" , "value" : "#fddde6"},
  {"name" : "cinnamonsatin" , "value" : "#cd607e"},
  {"name" : "rosedust" , "value" : "#9e5e6f"},
  {"name" : "pinkpearl" , "value" : "#b07080"},
  {"name" : "bigdiporuby" , "value" : "#9c2542"},
  {"name" : "rosepearl" , "value" : "#f03865"},
  {"name" : "pinksherbert" , "value" : "#f78fa7"},
  {"name" : "maroon" , "value" : "#c8385a"},
  {"name" : "dingydungeon" , "value" : "#c53151"},
  {"name" : "red" , "value" : "#ee204d"},
  {"name" : "mauvelous" , "value" : "#ef98aa"},
  {"name" : "radicalred" , "value" : "#ff496c"},
  {"name" : "blackshadows" , "value" : "#bfafb2"},
  {"name" : "shimmeringblush" , "value" : "#d98695"},
  {"name" : "magicpotion" , "value" : "#ff4466"},
  {"name" : "cherry" , "value" : "#da2647"},
  {"name" : "wildwatermelon" , "value" : "#fc6c85"},
  {"name" : "fieryrose" , "value" : "#ff5470"},
  {"name" : "salmon" , "value" : "#ff9baa"},
  {"name" : "sizzlingred" , "value" : "#ff3855"},
  {"name" : "scarlet" , "value" : "#fc2847"},
  {"name" : "brickred" , "value" : "#cb4154"},
  {"name" : "rustyred" , "value" : "#da2c43"},
  {"name" : "redsalsa" , "value" : "#fd3a4a"},
  {"name" : "sunburntcyclops" , "value" : "#ff404c"},
  {"name" : "tulip" , "value" : "#ff878d"},
  {"name" : "salmonpearl" , "value" : "#f1444a"},
  {"name" : "bittersweetshimmer" , "value" : "#bf4f51"},
  {"name" : "mahogany" , "value" : "#cd4a4c"}];

var green_crayon = [  {"name" : "electriclime" , "value" : "#ceff1d"},
  {"name" : "lime" , "value" : "#b2f302"},
  {"name" : "yellowgreen" , "value" : "#c5e384"},
  {"name" : "sheengreen" , "value" : "#8fd400"},
  {"name" : "inchworm" , "value" : "#b2ec5d"},
  {"name" : "greenlizard" , "value" : "#a7f432"},
  {"name" : "alienarmpit" , "value" : "#84de02"},
  {"name" : "asparagus" , "value" : "#87a96b"},
  {"name" : "springfrost" , "value" : "#87ff2a"},
  {"name" : "slimygreen" , "value" : "#299617"},
  {"name" : "grannysmithapple" , "value" : "#a8e4a0"},
  {"name" : "screamingreen" , "value" : "#76ff7a"},
  {"name" : "fern" , "value" : "#71bc78"},
  {"name" : "leatherjacket" , "value" : "#253529"},
  {"name" : "forestgreen" , "value" : "#6dae81"},
  {"name" : "caribbeangreenpearl" , "value" : "#6ada8e"},
  {"name" : "shinyshamrock" , "value" : "#5fa778"},
  {"name" : "seagreen" , "value" : "#9fe2bf"},
  {"name" : "magicmint" , "value" : "#aaf0d1"},
  {"name" : "pine" , "value" : "#45a27d"},
  {"name" : "oceangreenpearl" , "value" : "#48bf91"},
  {"name" : "green" , "value" : "#1cac78"},
  {"name" : "shamrock" , "value" : "#45cea2"},
  {"name" : "eucalyptus" , "value" : "#44d7a8"},
  {"name" : "mountainmeadow" , "value" : "#30ba8f"},
  {"name" : "junglegreen" , "value" : "#3bb08f"},
  {"name" : "jade" , "value" : "#469a84"},
  {"name" : "illuminatingemerald" , "value" : "#319177"},
  {"name" : "caribbeangreen" , "value" : "#1cd3a2"},
  {"name" : "polishedpine" , "value" : "#5da493"},
  {"name" : "wintergreendream" , "value" : "#56887d"},
  {"name" : "emerald" , "value" : "#14a989"},
  {"name" : "greensheen" , "value" : "#6eaea1"},
  {"name" : "tropicalrainforest" , "value" : "#17806d"},
  {"name" : "pinegreen" , "value" : "#158078"}
  ];


var blue_crayon = [ {"name" : "robinseggblue" , "value" : "#1fcecb"},
  {"name" : "steelteal" , "value" : "#5f8a8b"},
  {"name" : "malachite" , "value" : "#469496"},
  {"name" : "aquamarine" , "value" : "#78dbe2"},
  {"name" : "seaserpent" , "value" : "#4bc7cf"},
  {"name" : "turquoiseblue" , "value" : "#77dde7"},
  {"name" : "tealblue" , "value" : "#18a7b5"},
  {"name" : "metallicseaweed" , "value" : "#0a7e8c"},
  {"name" : "blizzardblue" , "value" : "#ace5ee"},
  {"name" : "turquoisepearl" , "value" : "#3bbcd0"},
  {"name" : "skyblue" , "value" : "#80daeb"},
  {"name" : "outerspace" , "value" : "#414a4c"},
  {"name" : "moonstone" , "value" : "#3aa8c1"},
  {"name" : "pacificblue" , "value" : "#1ca9c9"},
  {"name" : "bluegreen" , "value" : "#0d98ba"},
  {"name" : "aquapearl" , "value" : "#5fbed7"},
  {"name" : "deepspacesparkle" , "value" : "#4a646c"},
  {"name" : "cerulean" , "value" : "#1dacd6"},
  {"name" : "onyx" , "value" : "#353839"},
  {"name" : "steelblue" , "value" : "#0081ab"},
  {"name" : "freshair" , "value" : "#a6e7ff"},
  {"name" : "winterwizard" , "value" : "#a0e6ff"},
  {"name" : "pewterblue" , "value" : "#8ba8b7"},
  {"name" : "cornflower" , "value" : "#9aceeb"},
  {"name" : "bluejeans" , "value" : "#5dadec"},
  {"name" : "ceruleanfrost" , "value" : "#6d9bc3"},
  {"name" : "blackcoralpearl" , "value" : "#54626f"},
  {"name" : "greenblue" , "value" : "#1164b4"},
  {"name" : "bluegray" , "value" : "#6699cc"},
  {"name" : "midnightblue" , "value" : "#1a4876"},
  {"name" : "navyblue" , "value" : "#1974d2"},
  {"name" : "shadowblue" , "value" : "#778ba5"},
  {"name" : "bdazzledblue" , "value" : "#2e5894"},
  {"name" : "sapphire" , "value" : "#2d5da1"},
  {"name" : "denim" , "value" : "#2b6cc4"},
  {"name" : "blue" , "value" : "#1f75fe"},
  {"name" : "absolutezero" , "value" : "#0048ba"},
  {"name" : "lapislazuli" , "value" : "#436cb9"},
  {"name" : "periwinkle" , "value" : "#c5d0e6"},
  {"name" : "blueberry" , "value" : "#4f86f7"},
  {"name" : "cadetblue" , "value" : "#b0b7c6"},
  {"name" : "newcar" , "value" : "#214fc6"},
  {"name" : "wildblueyonder" , "value" : "#a2add0"},
  {"name" : "indigo" , "value" : "#5d76cb"},
  {"name" : "denimblue" , "value" : "#2243b6"},
  {"name" : "violetblue" , "value" : "#324ab2"},
  {"name" : "manatee" , "value" : "#979aaa"},
  {"name" : "bluebell" , "value" : "#a2a2d0"},
  {"name" : "cosmiccobalt" , "value" : "#2e2d88"}
  ];





  var crayon = [ {"name" : "black" , "value" : "#000000"},
  {"name" : "black" , "value" : "#000000"},
  {"name" : "eerieblack" , "value" : "#1b1b1b"},
  {"name" : "granitegray" , "value" : "#676767"},
  {"name" : "sonicsilver" , "value" : "#757575"},
  {"name" : "quicksilver" , "value" : "#a6a6a6"},
  {"name" : "culturedpearl" , "value" : "#f5f5f5"},
  {"name" : "coconut" , "value" : "#fefefe"},
  {"name" : "white" , "value" : "#ffffff"},
  {"name" : "fuzzywuzzy" , "value" : "#cc6666"},
  {"name" : "rose" , "value" : "#ff5050"},
  {"name" : "orangered" , "value" : "#ff2b2b"},
  {"name" : "tartorange" , "value" : "#fb4d46"},
  {"name" : "chestnut" , "value" : "#bc5d58"},
  {"name" : "sweetbrown" , "value" : "#a83731"},
  {"name" : "redorange" , "value" : "#ff5349"},
  {"name" : "sunsetorange" , "value" : "#fd5e53"},
  {"name" : "copperpenny" , "value" : "#ad6f69"},
  {"name" : "licorice" , "value" : "#1a1110"},
  {"name" : "giantsclub" , "value" : "#b05c52"},
  {"name" : "bittersweet" , "value" : "#fd7c6e"},
  {"name" : "ogreodor" , "value" : "#fd5240"},
  {"name" : "melon" , "value" : "#fdbcb4"},
  {"name" : "burnishedbrown" , "value" : "#a17a74"},
  {"name" : "cedarchest" , "value" : "#c95a49"},
  {"name" : "jellybean" , "value" : "#da614e"},
  {"name" : "jasper" , "value" : "#d05340"},
  {"name" : "orangesoda" , "value" : "#fa5b3d"},
  {"name" : "blastoffbronze" , "value" : "#a57164"},
  {"name" : "vividtangerine" , "value" : "#ffa089"},
  {"name" : "outrageousorange" , "value" : "#ff6e4a"},
  {"name" : "burntsienna" , "value" : "#ea7e5d"},
  {"name" : "brown" , "value" : "#b4674d"},
  {"name" : "smokeytopaz" , "value" : "#832a0d"},
  {"name" : "silver" , "value" : "#cdc5c2"},
  {"name" : "smashedpumpkin" , "value" : "#ff6d3a"},
  {"name" : "copper" , "value" : "#dd9475"},
  {"name" : "sepia" , "value" : "#a5694f"},
  {"name" : "mandarinpearl" , "value" : "#f37a48"},
  {"name" : "burntorange" , "value" : "#ff7f49"},
  {"name" : "orange" , "value" : "#ff7538"},
  {"name" : "brownsugar" , "value" : "#af6e4d"},
  {"name" : "mangotango" , "value" : "#ff8243"},
  {"name" : "citrine" , "value" : "#933709"},
  {"name" : "atomictangerine" , "value" : "#ffa474"},
  {"name" : "beaver" , "value" : "#9f8170"},
  {"name" : "antiquebrass" , "value" : "#cd9575"},
  {"name" : "chocolate" , "value" : "#bd8260"},
  {"name" : "bigfootfeet" , "value" : "#e88e5a"},
  {"name" : "desertsand" , "value" : "#efcdb8"},
  {"name" : "tumbleweed" , "value" : "#deaa88"},
  {"name" : "rawsienna" , "value" : "#d68a59"},
  {"name" : "tan" , "value" : "#faa76c"},
  {"name" : "peach" , "value" : "#ffcfab"},
  {"name" : "macaronicheese" , "value" : "#ffbd88"},
  {"name" : "alloyorange" , "value" : "#c46210"},
  {"name" : "lumber" , "value" : "#ffe4cd"},
  {"name" : "dirt" , "value" : "#9b7653"},
  {"name" : "heatwave" , "value" : "#ff7a00"},
  {"name" : "almond" , "value" : "#efdecd"},
  {"name" : "apricot" , "value" : "#fdd9b5"},
  {"name" : "rawumber" , "value" : "#714b23"},
  {"name" : "neoncarrot" , "value" : "#ffa343"},
  {"name" : "tigerseye" , "value" : "#b56917"},
  {"name" : "timberwolf" , "value" : "#dbd7d2"},
  {"name" : "gray" , "value" : "#95918c"},
  {"name" : "gold" , "value" : "#e7c697"},
  {"name" : "yelloworange" , "value" : "#ffb653"},
  {"name" : "shadow" , "value" : "#8a795d"},
  {"name" : "brightyellow" , "value" : "#ffaa1d"},
  {"name" : "aztecgold" , "value" : "#c39953"},
  {"name" : "maize" , "value" : "#edd19c"},
  {"name" : "metallicsunburst" , "value" : "#9c7c38"},
  {"name" : "sunsetpearl" , "value" : "#f1cc79"},
  {"name" : "bananamania" , "value" : "#fae7b5"},
  {"name" : "goldfusion" , "value" : "#85754e"},
  {"name" : "goldenrod" , "value" : "#fcd975"},
  {"name" : "sunglow" , "value" : "#ffcf48"},
  {"name" : "orangeyellow" , "value" : "#f8d568"},
  {"name" : "dandelion" , "value" : "#fddb6d"},
  {"name" : "banana" , "value" : "#ffd12a"},
  {"name" : "yellow" , "value" : "#fce883"},
  {"name" : "gargoylegas" , "value" : "#ffdf46"},
  {"name" : "sizzlingsunrise" , "value" : "#ffdb00"},
  {"name" : "mistymoss" , "value" : "#bbb477"},
  {"name" : "greenyellow" , "value" : "#f0e891"},
  {"name" : "lemonyellow" , "value" : "#fff44f"},
  {"name" : "springgreen" , "value" : "#eceabe"},
  {"name" : "olivegreen" , "value" : "#bab86c"},
  {"name" : "yellowsunshine" , "value" : "#fff700"},
  {"name" : "babypowder" , "value" : "#fefefa"},
  {"name" : "canary" , "value" : "#ffff99"},
  {"name" : "sunnypearl" , "value" : "#f2f27a"},
  {"name" : "unmellowyellow" , "value" : "#ffff66"},
  {"name" : "lemon" , "value" : "#ffff38"},
  {"name" : "daffodil" , "value" : "#ffff31"},
  {"name" : "laserlemon" , "value" : "#fefe22"},
  {"name" : "lemonglacier" , "value" : "#fdff00"},
  {"name" : "peridot" , "value" : "#abad48"},
  {"name" : "boogerbuster" , "value" : "#dde26a"},
  {"name" : "keylimepearl" , "value" : "#e8f48c"},
  {"name" : "electriclime" , "value" : "#ceff1d"},
  {"name" : "lime" , "value" : "#b2f302"},
  {"name" : "yellowgreen" , "value" : "#c5e384"},
  {"name" : "sheengreen" , "value" : "#8fd400"},
  {"name" : "inchworm" , "value" : "#b2ec5d"},
  {"name" : "greenlizard" , "value" : "#a7f432"},
  {"name" : "alienarmpit" , "value" : "#84de02"},
  {"name" : "asparagus" , "value" : "#87a96b"},
  {"name" : "springfrost" , "value" : "#87ff2a"},
  {"name" : "slimygreen" , "value" : "#299617"},
  {"name" : "grannysmithapple" , "value" : "#a8e4a0"},
  {"name" : "screamingreen" , "value" : "#76ff7a"},
  {"name" : "fern" , "value" : "#71bc78"},
  {"name" : "mummystomb" , "value" : "#828e84"},
  {"name" : "smoke" , "value" : "#738276"},
  {"name" : "leatherjacket" , "value" : "#253529"},
  {"name" : "forestgreen" , "value" : "#6dae81"},
  {"name" : "caribbeangreenpearl" , "value" : "#6ada8e"},
  {"name" : "shinyshamrock" , "value" : "#5fa778"},
  {"name" : "seagreen" , "value" : "#9fe2bf"},
  {"name" : "magicmint" , "value" : "#aaf0d1"},
  {"name" : "pine" , "value" : "#45a27d"},
  {"name" : "oceangreenpearl" , "value" : "#48bf91"},
  {"name" : "green" , "value" : "#1cac78"},
  {"name" : "shamrock" , "value" : "#45cea2"},
  {"name" : "eucalyptus" , "value" : "#44d7a8"},
  {"name" : "mountainmeadow" , "value" : "#30ba8f"},
  {"name" : "junglegreen" , "value" : "#3bb08f"},
  {"name" : "jade" , "value" : "#469a84"},
  {"name" : "illuminatingemerald" , "value" : "#319177"},
  {"name" : "caribbeangreen" , "value" : "#1cd3a2"},
  {"name" : "polishedpine" , "value" : "#5da493"},
  {"name" : "wintergreendream" , "value" : "#56887d"},
  {"name" : "emerald" , "value" : "#14a989"},
  {"name" : "greensheen" , "value" : "#6eaea1"},
  {"name" : "tropicalrainforest" , "value" : "#17806d"},
  {"name" : "pinegreen" , "value" : "#158078"},
  {"name" : "robinseggblue" , "value" : "#1fcecb"},
  {"name" : "steelteal" , "value" : "#5f8a8b"},
  {"name" : "malachite" , "value" : "#469496"},
  {"name" : "aquamarine" , "value" : "#78dbe2"},
  {"name" : "seaserpent" , "value" : "#4bc7cf"},
  {"name" : "turquoiseblue" , "value" : "#77dde7"},
  {"name" : "tealblue" , "value" : "#18a7b5"},
  {"name" : "metallicseaweed" , "value" : "#0a7e8c"},
  {"name" : "blizzardblue" , "value" : "#ace5ee"},
  {"name" : "turquoisepearl" , "value" : "#3bbcd0"},
  {"name" : "skyblue" , "value" : "#80daeb"},
  {"name" : "outerspace" , "value" : "#414a4c"},
  {"name" : "moonstone" , "value" : "#3aa8c1"},
  {"name" : "pacificblue" , "value" : "#1ca9c9"},
  {"name" : "bluegreen" , "value" : "#0d98ba"},
  {"name" : "aquapearl" , "value" : "#5fbed7"},
  {"name" : "deepspacesparkle" , "value" : "#4a646c"},
  {"name" : "cerulean" , "value" : "#1dacd6"},
  {"name" : "onyx" , "value" : "#353839"},
  {"name" : "steelblue" , "value" : "#0081ab"},
  {"name" : "freshair" , "value" : "#a6e7ff"},
  {"name" : "winterwizard" , "value" : "#a0e6ff"},
  {"name" : "pewterblue" , "value" : "#8ba8b7"},
  {"name" : "cornflower" , "value" : "#9aceeb"},
  {"name" : "bluejeans" , "value" : "#5dadec"},
  {"name" : "ceruleanfrost" , "value" : "#6d9bc3"},
  {"name" : "blackcoralpearl" , "value" : "#54626f"},
  {"name" : "greenblue" , "value" : "#1164b4"},
  {"name" : "bluegray" , "value" : "#6699cc"},
  {"name" : "midnightblue" , "value" : "#1a4876"},
  {"name" : "navyblue" , "value" : "#1974d2"},
  {"name" : "shadowblue" , "value" : "#778ba5"},
  {"name" : "bdazzledblue" , "value" : "#2e5894"},
  {"name" : "sapphire" , "value" : "#2d5da1"},
  {"name" : "denim" , "value" : "#2b6cc4"},
  {"name" : "blue" , "value" : "#1f75fe"},
  {"name" : "absolutezero" , "value" : "#0048ba"},
  {"name" : "lapislazuli" , "value" : "#436cb9"},
  {"name" : "periwinkle" , "value" : "#c5d0e6"},
  {"name" : "blueberry" , "value" : "#4f86f7"},
  {"name" : "cadetblue" , "value" : "#b0b7c6"},
  {"name" : "newcar" , "value" : "#214fc6"},
  {"name" : "wildblueyonder" , "value" : "#a2add0"},
  {"name" : "indigo" , "value" : "#5d76cb"},
  {"name" : "denimblue" , "value" : "#2243b6"},
  {"name" : "violetblue" , "value" : "#324ab2"},
  {"name" : "manatee" , "value" : "#979aaa"},
  {"name" : "bluebell" , "value" : "#a2a2d0"},
  {"name" : "cosmiccobalt" , "value" : "#2e2d88"},
  {"name" : "amethyst" , "value" : "#64609a"},
  {"name" : "oceanbluepearl" , "value" : "#4f42b5"},
  {"name" : "soap" , "value" : "#cec8ef"},
  {"name" : "blueviolet" , "value" : "#7366bd"},
  {"name" : "plumppurple" , "value" : "#5946b2"},
  {"name" : "pixiepowder" , "value" : "#391285"},
  {"name" : "purpleheart" , "value" : "#7442c8"},
  {"name" : "cybergrape" , "value" : "#58427c"},
  {"name" : "royalpurple" , "value" : "#7851a9"},
  {"name" : "purplemountainsmajesty" , "value" : "#9d81ba"},
  {"name" : "grape" , "value" : "#6f2da8"},
  {"name" : "violetpurple" , "value" : "#926eae"},
  {"name" : "wisteria" , "value" : "#cda4de"},
  {"name" : "glossygrape" , "value" : "#ab92b3"},
  {"name" : "purpleplum" , "value" : "#9c51b6"},
  {"name" : "lilac" , "value" : "#db91ef"},
  {"name" : "vividviolet" , "value" : "#8f509d"},
  {"name" : "fuchsia" , "value" : "#c364c5"},
  {"name" : "shockingpink" , "value" : "#fb7efd"},
  {"name" : "pinkflamingo" , "value" : "#fc74fd"},
  {"name" : "midnightpearl" , "value" : "#702670"},
  {"name" : "plum" , "value" : "#8e4585"},
  {"name" : "razzmicberry" , "value" : "#8d4e85"},
  {"name" : "bubblegum" , "value" : "#ffd3f8"},
  {"name" : "lilacluster" , "value" : "#ae98aa"},
  {"name" : "purplepizzazz" , "value" : "#fe4eda"},
  {"name" : "hotmagenta" , "value" : "#ff1dce"},
  {"name" : "orchid" , "value" : "#e6a8d7"},
  {"name" : "razzledazzlerose" , "value" : "#ff48d0"},
  {"name" : "pearlypurple" , "value" : "#b768a2"},
  {"name" : "shampoo" , "value" : "#ffcff1"},
  {"name" : "rosequartz" , "value" : "#bd559c"},
  {"name" : "thistle" , "value" : "#ebc7df"},
  {"name" : "frostbite" , "value" : "#e936a7"},
  {"name" : "princessperfume" , "value" : "#ff85cf"},
  {"name" : "redviolet" , "value" : "#c0448f"},
  {"name" : "sugarplum" , "value" : "#914e75"},
  {"name" : "mulberry" , "value" : "#c54b8c"},
  {"name" : "eggplant" , "value" : "#6e5160"},
  {"name" : "twilightlavender" , "value" : "#8a496b"},
  {"name" : "magenta" , "value" : "#f664af"},
  {"name" : "mysticmaroon" , "value" : "#ad4379"},
  {"name" : "cerise" , "value" : "#dd4492"},
  {"name" : "wildstrawberry" , "value" : "#ff43a4"},
  {"name" : "wintersky" , "value" : "#ff007c"},
  {"name" : "lavender" , "value" : "#fcb4d5"},
  {"name" : "cottoncandy" , "value" : "#ffbcd9"},
  {"name" : "carnationpink" , "value" : "#ffaacc"},
  {"name" : "orchidpearl" , "value" : "#7b4259"},
  {"name" : "violetred" , "value" : "#f75394"},
  {"name" : "ruby" , "value" : "#aa4069"},
  {"name" : "mysticpearl" , "value" : "#d65282"},
  {"name" : "razzmatazz" , "value" : "#e3256b"},
  {"name" : "jazzberryjam" , "value" : "#ca3767"},
  {"name" : "strawberry" , "value" : "#fc5a8d"},
  {"name" : "sasquatchsocks" , "value" : "#ff4681"},
  {"name" : "ticklemepink" , "value" : "#fc89ac"},
  {"name" : "blush" , "value" : "#de5d83"},
  {"name" : "piggypink" , "value" : "#fddde6"},
  {"name" : "cinnamonsatin" , "value" : "#cd607e"},
  {"name" : "rosedust" , "value" : "#9e5e6f"},
  {"name" : "pinkpearl" , "value" : "#b07080"},
  {"name" : "bigdiporuby" , "value" : "#9c2542"},
  {"name" : "rosepearl" , "value" : "#f03865"},
  {"name" : "pinksherbert" , "value" : "#f78fa7"},
  {"name" : "maroon" , "value" : "#c8385a"},
  {"name" : "dingydungeon" , "value" : "#c53151"},
  {"name" : "red" , "value" : "#ee204d"},
  {"name" : "mauvelous" , "value" : "#ef98aa"},
  {"name" : "radicalred" , "value" : "#ff496c"},
  {"name" : "blackshadows" , "value" : "#bfafb2"},
  {"name" : "shimmeringblush" , "value" : "#d98695"},
  {"name" : "magicpotion" , "value" : "#ff4466"},
  {"name" : "cherry" , "value" : "#da2647"},
  {"name" : "wildwatermelon" , "value" : "#fc6c85"},
  {"name" : "fieryrose" , "value" : "#ff5470"},
  {"name" : "salmon" , "value" : "#ff9baa"},
  {"name" : "sizzlingred" , "value" : "#ff3855"},
  {"name" : "scarlet" , "value" : "#fc2847"},
  {"name" : "brickred" , "value" : "#cb4154"},
  {"name" : "rustyred" , "value" : "#da2c43"},
  {"name" : "redsalsa" , "value" : "#fd3a4a"},
  {"name" : "sunburntcyclops" , "value" : "#ff404c"},
  {"name" : "tulip" , "value" : "#ff878d"},
  {"name" : "salmonpearl" , "value" : "#f1444a"},
  {"name" : "bittersweetshimmer" , "value" : "#bf4f51"},
  {"name" : "mahogany" , "value" : "#cd4a4c"}
];


/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}