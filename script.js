console.log("\n\nI started working on this project on Wednesday Night (27, Jan, 2021), after I ate dinner.\n\n10spr")
/* ===== START SECTION 54 ===== */

a54 = document.getElementById('container54');
var click54 = 0, grid54 = 625, defaultGrid = 625,/* grid54 must equal defaultGrid during the start */ gridchange54 = grid54, maxgrid = 3600, sqrt54x = Math.sqrt(gridchange54);
var win54 = 5, winchange54 = win54, wh54 = 2000, axis54x=0, axis54y=0, axis54y2 = 0, sqrt54 = Math.sqrt(grid54), winx54x = 0, winx54o = 0, iwin54=0, winx54 = 0, loca54html='', loca54html2='', loca54 = 0, loca54a = 0, iwin54=0, loca54b = 0, loca54id2='', loca54id3='';
var btnid54, xwintime54=0, owintime54=0, twintime54=0, uwintime54=0, hwintime54=0, players = 2, click54w = 1;
var firstclick54='X', secondclick54='O', thirdclick54='T', fourthclick54 = 'U', fifthclick54 = 'H';
var playersclick = [firstclick54, secondclick54, thirdclick54, fourthclick54, fifthclick54];
var ratio54 = 0; font54 = 0, turns = ['first', 'second', 'third', 'fourth', 'fifth'];
var prvWinners = [], prvClicks = [], prvClicksLength = prvClicks.length, prvClicksX=[], prvClicksO=[], latestID = [], latestHTML = [], undoNumber = 0, shadowspan = 50, shadowlimit = defaultGrid + shadowspan, extraSpan = 61, machineTurn=0;

  /* ====== Button Generator. Status: PASSED ====== */
function showbtn54() {
  a54.style.width = wh54 + "px";
  a54.style.height += wh54 + "px";
  a54.style.margin += "10px";
  a54.style.borderLeft += "1px solid black"
  a54.style.borderRight += "1px solid black"
  a54.style.borderBottom += "1px solid black"
  a54.style.overflow += "hidden"
  ratio54 = (wh54 / sqrt54x)
  font54 = ratio54 / 1.25

  for(i=0;i<gridchange54;i++){
    i54 = i+1
    btnid54 = 'btn54x' + i54;
    a54.innerHTML += "<button id=\'" + btnid54 + "\'>" + "&nbsp;" + "</button>"
    btnid54x2 = 'btn54click(' + btnid54 + ')'
    document.getElementById(btnid54).setAttribute('onclick',btnid54x2)
  }

  document.getElementById('styledit').innerHTML = "<style>#main button{width: " + ratio54 +"px; height: " + ratio54 + "px; font-size: " + font54 + "px}</style>"
}
showbtn54()

function showspan() { // Generate span elements to store buttons
  for(xyxx=1; xyxx<extraSpan; xyxx++) {
    spanID = 'extrabtn' + xyxx
    a54.innerHTML += "<span id=\'" + spanID + "\'></span>"
  }
}
showspan()


function shadowbtn(shadowSpanID) { // Generate buttons and put them in the span element
  let shadowbtnvalue = defaultGrid + 1;

  for(;shadowbtnvalue<=shadowlimit;shadowbtnvalue++) {
    shadowbtnid = 'btn54x' + shadowbtnvalue;
    document.getElementById(shadowSpanID).innerHTML += "<button id=\'" + shadowbtnid + "\' style=\'display: none\'>&nbsp;</button>"
  }
  shadowlimit+= shadowspan
  defaultGrid+= shadowspan
}


  /* ====== DISPLAY X or O ====== Status: PASSED ====== */
  //The concept of this function is to display 'X' or 'O' whenever click54w is 1 or 2.
  //If there are 3 players, the thirdclick is 'T'. This meams, whenever click54w is 3, it will display T then change click54w value to 1 back to let X display on the next click.
function btn54click(clickidx) {
  if(iwin54!==winchange54){
    if(click54w == 1) {
      if(clickidx.innerHTML !== '&nbsp;') { // This is to prevent overiding on exisiting clicks
        click54 -= 1 // Because click54 and click54w will increase by 1 everytime this function is called, I'll decrease it first and let it decrease so that the final value won't change
        click54w -= 1
      } else {
          clickidx.innerHTML = firstclick54
          prvClicks.push(clickidx.id)
          prvClicksX.push(clickidx.id)
          if(players==1){
            machineTurn += 1
            setTimeout(machinex,500)
          }
        }
    }

    function btn54clickif(clicksnumber, clicksletter) { //Example: btn54clickif(2,'O')
      if(click54w == clicksnumber) {
        if(clickidx.innerHTML !== '&nbsp;') {
          click54 -= 1
          click54w -= 1
        } else {
            clickidx.innerHTML = clicksletter
            prvClicks.push(clickidx.id)
            prvClicksO.push(clickidx.id)
            if(players == clicksnumber) {
              click54w = 0
            }
            if(players == 1) {
              click54w = 0
            }
          }
      }
    }

    if(players==1) {
      playersloopNo = players + 1
    } else {
      playersloopNo = players
    }

    for(clicksloop=2; clicksloop<=playersloopNo; clicksloop++) {
      btn54clickif(clicksloop, playersclick[clicksloop-1])
    }

    click54 += 1 //For displaying the total amount of clicks in the sidenav
    click54w +=1
    document.getElementById('clicksno54').innerHTML = click54;
    scan54() //Check for a winner everytime a button is clicked
    latestID = [] // For Undo & Redo
    latestHTML = [] // For Undo & Redo
    undoNumber = 0; // For Undo & Redo
    undoredobtn() // For Undo & Redo
    prvClicksLength = prvClicks.length // For 1 player mode - machine()
  }
}


  /* ======== SCAN FUNCTION ======== */
function scan54() {

  function globalHTML54a(html54) { // This is used in the scan54() function
    loca54html = document.getElementById(html54).innerHTML
  }

  function globalstyle54(style54) { // This is used in the scan54() function
    document.getElementById(style54).style.background = "#7deb34"
  }

  for(i=0; i<gridchange54; i++) { // Loop Function Starts with Button 1 till Grid Number
    loca54 = i+1 // Button ID Number
    loca54id = 'btn54x' + loca54 // Button ID
    axis54x = loca54 % sqrt54x //x-axis (Top to Bottom)
    if(axis54x==0) { // 56/8 remainder = 0;
      axis54x = sqrt54x;
    }
    axis54y = Math.ceil(loca54/sqrt54x) // y-axis (Top to Bottom)

    globalHTML54a(loca54id) // Get the innerHTML of the button

    function winner54(winner54, winx54, method54, loop54a, loop54b) {
      if(loca54html==winner54) { // If button id.... equals letter "X" or "O". Note: this is and can be determined in the function parameter.
        axis54y2 = axis54y+sqrt54x-1; // A copy of axis54y. I'll need to edit the value of axis54y so I'm making a copy to not lose the original value.

        for(i54a=axis54x,i54b=1 ; loop54b>=i54b && i54a >= loop54a; i54a--, i54b++) {

          if(method54==1){ //Horizontal Method
            loca54a = sqrt54x * (axis54y-1) + i54a //Find the current location. With the loop, location will always move left by 1 step at a time
          }
          if(method54==2){ //Vertical Method.
            loca54a = sqrt54x * (axis54y-i54b) + axis54x //Find the current location. With the loop, location will always move left by 1 step at a time
          }
          if(method54==3){ //Vertical Method.
            loca54a = sqrt54x * (axis54y-i54b) + axis54x -i54b +1 //Find the current location. With the loop, location will always move left by 1 step at a time
          }
          if(method54==4){ //Vertical Method.
            loca54a = sqrt54x * (axis54y-i54b) + axis54x +i54b  -1//Find the current location. With the loop, location will always move left by 1 step at a time
          }

          loca54id2 = 'btn54x' + loca54a

          function globalHTML54b(html54a) {
            loca54html2 = document.getElementById(html54a).innerHTML
          }
          globalHTML54b(loca54id2)

          if(loca54html2==winner54) { // Scoring System. Status: Passed. Details: If winx54x = 4 (it's the value of variable winchange54), there is a winner.
            winx54 += 1;
          } else {
            winx54 = 0;
          }

          if(winx54 == winchange54) {
            prvWinners=[] // Whenever someone wins
            for(iwin54=0;iwin54<winchange54;iwin54++) {
              if(method54==1) {
                loca54b = loca54a + iwin54
              }
              if(method54==2) {
                loca54b = loca54a + (iwin54 * sqrt54x)
              }
              if(method54==3) {
                loca54b = loca54a + (iwin54 * sqrt54x) +iwin54
              }
              if(method54==4) {
                loca54b = loca54a + (iwin54 * sqrt54x) -iwin54
              }
              loca54id3 = 'btn54x' + loca54b
              prvWinners.push(loca54id3)
              globalstyle54(loca54id3) //change background color to green
            }
            //openModal() //Displaying PopUp Modal
            someonewin54(loca54html) //for displaying number of wins
            break;
          }
          if(iwin54 == winchange54) {
            break;
          }
        }
      }
    }

    // Syntax winner54(winner54, winx54, method54, loop54a, loop54b)
    for(iplayers=0; iplayers < players; iplayers++) {
      winner54(playersclick[iplayers], winx54x, 1, 1, axis54y2); //Horizontal X (Method 1)
      winner54(playersclick[iplayers], winx54x, 2, -sqrt54x+2, axis54y); //Vertical X (Method 2)
      winner54(playersclick[iplayers], winx54o, 3, 1, axis54y); //Diagonal Left X (Method 3)
      winner54(playersclick[iplayers], winx54x, 4, -1*winchange54+2, axis54y); //Diagonal Right X (Method 4)
    }

    if(iwin54 == winchange54) {
      break;
    }
  }
}


  /* ====== Grid Slider Range ====== Status: PASSED ====== */
function editgrid54() {
  document.getElementById('gridspan54').innerHTML = "<input type=\'range\' min=\'9\' max=\'" + maxgrid + "\' value=\'" + grid54 + "\' class=\'slider\' id=\'gridrange54\'>"
}
editgrid54()
document.getElementById('gridvaluespan54').innerHTML = document.getElementById('gridrange54').value

gridrange54.oninput = function() {
  gridvaluespan54.innerHTML = this.value;
}

  /* ====== Confirm Grid Change ====== Status: PASSED ====== */
var btnpixel = 80;
function confirmgrid54() {
  gridchange54 = Math.pow(Math.ceil(Math.sqrt(gridrange54.value)), 2)
  sqrt54x = Math.sqrt(gridchange54)

  if(grid54>gridchange54){ // This means the grids are decreasing
    for(gridremove54 = gridchange54+1; gridremove54 <= grid54; gridremove54++) { // A loop to set buttons display to none
      confirmgrid54xid = 'btn54x' + gridremove54
      document.getElementById(confirmgrid54xid).setAttribute('style', 'display: none')
    }
    btnpixel += 10 // For animation
  } else {
    for(gridadd54 = grid54+1; gridadd54<=gridchange54; gridadd54++) { // A loop to remove buttons style display
      confirmgridadd54id = 'btn54x' + gridadd54
      document.getElementById(confirmgridadd54id).removeAttribute('style')
      confirmgrid54xonclick = 'btn54click(' + confirmgridadd54id + ')'
      document.getElementById(confirmgridadd54id).setAttribute('onclick', confirmgrid54xonclick)
    }
    btnpixel -= 10 // For animation
  }

  wh54 = btnpixel * sqrt54x // Making each buttons 80x80px
  a54.style.width = wh54 + 'px' //Redefining the width and height of the div container
  a54.style.height = wh54 + 'px'

  ratio54 = (wh54 / sqrt54x) //The 3 lines of codes below (counting this line too) is to change the css of the buttons
  font54 = ratio54 / 1.25
  document.getElementById('styledit').innerHTML = "<style>#main button{width: " + ratio54 +"px; height: " + ratio54 + "px; font-size: " + font54 + "px}</style>"

  gridvaluespan54.innerHTML = gridchange54 // Displaying the new number of grids
  clean54(gridchange54)
  grid54 = gridchange54
}

  /* ====== Win At Slider Range ====== Status: PASSED ====== */
function editwin54() {
  document.getElementById('winspan54').innerHTML = "<input type=\'range\' min=\'3\' max=\'10\' value=\'" + win54 + "\' class=\'slider\' id=\'winrange54\'>"
}
editwin54()

document.getElementById('win54at').innerHTML = document.getElementById('winrange54').value

winrange54.oninput = function() {
  win54at.innerHTML = this.value;
  winchange54 = this.value;
}

  /* ====== Confirm Win Change ====== Status: PASSED ====== */
function confirmwin54() {
  winchange54 = parseFloat(winrange54.value)
  clean54(gridchange54)
}


/* ======== Modifying Number of Players ======== */
function setplayer(playerid2x, playerno2x) {
  document.getElementById(playerid2x).addEventListener('click', function() {

    for(playeri2x=1; playeri2x<=5; playeri2x++){ // Setting all the player buttons to opacity 0.3
      playeri2xid = 'player' + playeri2x
      document.getElementById(playeri2xid).style.opacity = '0.3'
    }
    document.getElementById(playerid2x).style.opacity = '1' // Then set the activated player button to opacity 1

    clean54(gridchange54) // Clean the whole grid, Then, set the total number of clicks to 0, And display it, Re-defining the click to return the turn to the beginning

    firstclick54='X', secondclick54='O', thirdclick54='T', fourthclick54 = 'U', fifthclick54 = 'H'; // Returning the default order of turns everytime the number of player changes
    playersclick = [firstclick54, secondclick54, thirdclick54, fourthclick54, fifthclick54];

    if(players<playerno2x){ // An if statement to verfiy that it is NEEDED to add more buttons
      for(playerbtni = players; playerbtni < playerno2x; playerbtni++) { // Add new buttons
        if(playerbtni==1) {
          continue;
        }
        newplayerbtnid = playersclick[playerbtni].toLowerCase() + 'first54' // Defining the id for the new letter buttons
        newplayerbtn(playerno2x, newplayerbtnid, playersclick[playerbtni]) // A function to add buttons
      }
    } else { // Verfiy that it is NOT NEEDED to add more buttons
      for(playerbtni2 = players-1; playerbtni2 >= playerno2x; playerbtni2--) { // Remove buttons
        if(playerbtni2==1) {
          break;
        }
        removeplayerbtnid = playersclick[playerbtni2].toLowerCase() + 'first54' // Defining the id for removing letter buttons
        document.getElementById(removeplayerbtnid).remove() // Function to remove buttons
      }
    }

    prvplayers = players;
    players = playerno2x;

    windocs = document.getElementById('wins')

    playerletters = ['x', 'o', 't', 'u', 'h']

    if(prvplayers>players) {
      for(prvplayersx = prvplayers-1; prvplayersx >= players; prvplayersx--) {
        if(prvplayersx==1) {
          break;
        }
        playeridremove = playerletters[prvplayersx] + 'wintime54container'
        document.getElementById(playeridremove).remove()
      }
    }

    if(players>=1) {
      firstturn54x('xfirst54', 'X')
      document.getElementById('ofirst54').style.display = 'none'
    }

    if(players>=2) {
      firstturn54x('ofirst54', 'O')
      document.getElementById('ofirst54').style.display = ''
    }

    if(players>=3) {
      firstturn54x('tfirst54', 'T')
      if(prvplayers!==3 && prvplayers!==4 && prvplayers!==5) {
        windocs.innerHTML += "<span id=\'twintime54container\'><br>\"T\" won <span id=\'twintime54\'></span></span>"
        wintime54('twintime54', twintime54)
      }
    }

    if(players>=4) {
      firstturn54x('ufirst54', 'U')
      if(prvplayers!==4 && prvplayers!==5) {
        windocs.innerHTML += "<span id=\'uwintime54container\'><br>\"U\" won <span id=\'uwintime54\'></span></span>"
        wintime54('uwintime54', uwintime54)
      }
    }

    if(players>=5) {
      firstturn54x('hfirst54', 'H')
      if(prvplayers!==5){
        windocs.innerHTML += "<span id=\'hwintime54container\'><br>\"H\" won <span id=\'hwintime54\'></span></span>"
        wintime54('hwintime54', hwintime54)
      }
    }



    for(playersloop=1; playersloop<players; playersloop++) {
      playersloopid = playerletters[playersloop] + 'first54'
      document.getElementById(playersloopid).style.opacity = '0.3'
    }
    document.getElementById('xfirst54').style.opacity = '1'
  })
}

function newplayerbtn(newplayerno, newplayerid, btncontent) { // This function is used in the setplayer() function
    document.getElementById('turnbutton54container').innerHTML += "<button id=\'" + newplayerid + "\'>" + btncontent + "</button>"
}

function setplayerloop() {
  for(setplayeri1=1; setplayeri1<=5; setplayeri1++) {
    setplayerid = 'player' + setplayeri1
    setplayer(setplayerid, setplayeri1)
  }
}
setplayerloop()


/* ======== The First To Go ======== */
// The idea here is to swap between each in letter in each click. Example: The first turn is 'X'. If the 3rd button is clicked which is 'T', then the position of X will swap with T, which means T will will be first, X will be third.
function firstturn54x(turnid, turnletter) {
  document.getElementById(turnid).onclick = function(){firstturn54y(turnid, turnletter)}
}

var turnloop = 0, turnloopref = turnloop+1, iturn = 0;

function firstturn54y(turnid2, turnletter2) {
  if(players==1){ // This is for 1 player mode
    playersturn = players
  } else {
    playersturn = players
  }

  for(turnloop=0; turnloop<playersturn; turnloop++) { // Capture the previous first click and swap it with its new position
    if(playersclick[turnloop] == turnletter2) {
      turnloopref = turnloop + 1;
      if(turnloopref == 1) {
        firstclick54 == firstclick54
      }
      if(turnloopref == 2) {
        secondclick54 == firstclick54
      }
      if(turnloopref == 3) {
        thirdclick54 == firstclick54
      }
      if(turnloopref == 4) {
        fourthclick54 == firstclick54
      }
      if(turnloopref == 5) {
        fifthclick54 == firstclick54
      }
      playersclick[turnloop] = firstclick54 // playersclick[2] = firstclick54 which is 'X'
      break;
    }
  }
  firstclick54 = turnletter2
  playersclick[0] = firstclick54

  for(iturn=0; iturn<playersturn; iturn++) {
    firstturnid2 = playersclick[iturn].toLowerCase() + 'first54'
    document.getElementById(firstturnid2).style.opacity = '0.3'
  }
  document.getElementById(turnid2).style.opacity = '1'
  clean54(gridchange54)
}

firstturn54x('xfirst54', 'X')
firstturn54x('ofirst54', 'O')

/* ====== Number of Wins ====== Status: PASSED ====== */
function wintime54(wintime54id, wintime54number) {
  let wintime54idx = document.getElementById(wintime54id);

  if(wintime54number>1) {
    wintime54idx.innerHTML = wintime54number + ' times';
  } else {
    wintime54idx.innerHTML = wintime54number + ' time';
  }
}

wintime54('xwintime54', xwintime54)
wintime54('owintime54', owintime54)

function someonewin54(winletter54) {

  if(winletter54=='X'){
    xwintime54 +=1
    wintime54('xwintime54', xwintime54)
  }
  if(winletter54=='O'){
    owintime54 +=1
    wintime54('owintime54', owintime54)
  }
  if(winletter54=='T'){
    twintime54 +=1
    wintime54('twintime54', twintime54)
  }
  if(winletter54=='U'){
    uwintime54 +=1
    wintime54('uwintime54', uwintime54)
  }
  if(winletter54=='H'){
    hwintime54 +=1
    wintime54('hwintime54', hwintime54)
  }
}


/* ====== CLEAN FUNCTION - Remove all letters from all buttons (grids) ====== */
function clean54(cleangrid54) {
  prvClicksLength = prvClicks.length, prvWinnersLength = prvWinners.length;

  for(icl54=0; icl54<prvClicksLength; icl54++) {
    clean54id = prvClicks[icl54]
    document.getElementById(clean54id).innerHTML = "&nbsp;"
  }

  for(icl54x=0; icl54x<prvWinnersLength; icl54x++) { // Display the previous winner buttons' background color to #fff
    let prvWinnersID = prvWinners[icl54x]
    document.getElementById(prvWinnersID).style.background = "#fff"
  }

    iwin54 = 0; // Reset wins
    click54w = 1; // For click turns
    // For number of clicks
    click54 = 0;
    document.getElementById('clicksno54').innerHTML = click54;
    // For Undo and Redo
    prvClicks = []
    undoNumber = 0;
    undoredobtn()
    // For 1 player mode
    prvClicksO = []
    prvClicksX = []
    machineRef = 0;
}

document.getElementById('restart54').addEventListener('click', function() {clean54(gridchange54)})

/* ======== Latest Click ======== */
function latestclick54() { // This uses the prvClicks array to accessed the latest click button
  latest54 = prvClicks[prvClicks.length - 1]
  let clickid54style = document.getElementById(latest54).style.background
  document.getElementById(latest54).style.background="#000"
  setTimeout(function(){
    if(clickid54style=='rgb(125, 235, 52)') {
    document.getElementById(latest54).style.background="rgb(125, 235, 52)"
  } else {
    document.getElementById(latest54).style.background="#fff"
  }}, 500)
}

/* ====== Hide & Show Sidebar Settings ====== Status: PASSED ====== */
function sidebarOut() {
  let sidebarWidth = window.innerWidth
  let outerContainer = document.getElementById('container54')

  document.getElementById('sidenav').style.left = "0%" // I'm using left to make it look animated like the sidenav is moving
  document.getElementById('main').style.marginLeft = '20%'
  document.getElementById('main').style.paddingLeft = '20px'

  if(sidebarWidth<1000) {
    document.getElementById('styledit').innerHTML += "<div id=\'styledit2\'><style>#firstcontainer54 {opacity: 0.3}</style></div>"
  }
  document.getElementById('showsetting').onclick = function() {sidebarIn()}
  document.getElementById('showsetting').innerHTML = "Hide Settings"
}

function sidebarIn() {
  let sidebarWidth = window.innerWidth
  if(sidebarWidth>999) {
    document.getElementById('sidenav').style.left = "-25%"
  } else {
    document.getElementById('sidenav').style.left = "-55%"
    if(document.getElementById('styledit2')!==null) {
      document.getElementById('styledit2').remove()
    }
  }
  document.getElementById('main').style.marginLeft = '0px'
  document.getElementById('main').style.paddingLeft = '0px'
  document.getElementById('showsetting').onclick = function() {sidebarOut()}
  document.getElementById('showsetting').innerHTML = "Show Settings"
}

if(window.innerWidth>999) { // Determining whether to hide or show the side bar onload, making it a responsive webpage.
  sidebarOut()
} else {
  sidebarIn()
}

console.log('\n\nI\'m taking a break from this project (Feb 01 2021 2:30pm GMT+0700).\n\nMost of my ideas have been completely integrated but there are still a few left that I will have to do in the future:\n\n1. Display a sound on every click.\n\n2. Display a whose turn it is (whether it\' X or O...) throughout the whole game.\n\n3. Allowing players to choose their own custom characters/symbols display.\n\n4. Creating a 1 player mode where you can compete with a machine.\n\n10spr')

/* ====== Show PopUp Modal Whenever Someone Wins ====== Status: PASSED ====== */

function openModal() { // Currently not using it because it doesn't look that good
  let modal = document.getElementById('myModal')
  let modalWinner = document.getElementById(loca54id3).innerHTML

  document.getElementById('modalText').innerHTML = 'Congratulations, \"' + modalWinner + '\" won!'
  modal.style.display = "block"

  document.getElementsByClassName("close")[0].onclick = function() {
    modal.style.display = 'none';
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

/* ====== Undo & Redo ====== Status: Completed ====== */
function undo() { // When undo() is called, it will push the latest button clicked into an array called latestID and latestHTML to store the values.
  if(undoNumber<players) { // This is to allow users to undo no more than 1 time for each players
    if(prvClicks.length>0){ //
      latestID.push(prvClicks[prvClicks.length-1]) //ID of the latest click
      latestHTML.push(document.getElementById(latestID[undoNumber]).innerHTML) //InnerHTML of the latest click
      document.getElementById(latestID[undoNumber]).innerHTML = "&nbsp;"
      prvClicks.pop()

      if(click54w>1) {
        click54w -= 1
      } else {
        click54w = players
      }
      click54 -= 1
      document.getElementById('clicksno54').innerHTML = click54;
      undoNumber += 1;
      undoredobtn()
    }
  }
}

function redo() {
  if(undoNumber<=players && undoNumber>0) {
    if(latestID!=='') {
      prvClicks.push(latestID[undoNumber-1])
      document.getElementById(latestID[undoNumber-1]).innerHTML = latestHTML[undoNumber-1]
      click54 += 1
      click54w += 1
      document.getElementById('clicksno54').innerHTML = click54;

      if(click54w>players) {
        click54w = 1
      }
      latestHTML.pop()
      latestID.pop()
      undoNumber -= 1;
      undoredobtn()
    }
  }
}

function undoredobtn() { // Changing the opacity of the undo and redo buttons
  if(click54>0 && undoNumber < players) {
    document.getElementById('undo').style.opacity = '1'
  } else {
    document.getElementById('undo').style.opacity = '0.3'
  }
  if(undoNumber>0) {
    document.getElementById('redo').style.opacity = '1'
  } else {
    document.getElementById('redo').style.opacity = '0.3'
  }
}

document.getElementById('undo').onclick = function(){undo()}
document.getElementById('redo').onclick = function(){redo()}

/* ====== Shadow Button ====== Status: Passed */
// The function shadowbtn() is defined above and is called at the last to wait for everything to load. This is to speed up the grid change feature.
var shadowCallNumber = 1, shadowTime = 0;
function shadowCall() {
  let shadowCallID = 'extrabtn' + shadowCallNumber;
  setTimeout(function(){shadowbtn(shadowCallID)},shadowTime)
  shadowTime += 40
  shadowCallNumber += 1
}

for(shadowxxx=1; shadowxxx<extraSpan; shadowxxx++) {
  shadowCall()
}

/* ====== 1 Player Mode ====== Status: In Progress */
var machineRef = 0, machineID = '', machineBrain=0, machineNox=0, imachine = 0, imachinex = 0, machineIDxIDref=0, machineNo=0, machine2x=0;

function machine() {
  machineBrain=Math.ceil(Math.random()*8)
  if(prvClicksX.length==machineRef) { // In case i
    machineRef-=1
  }
  console.log(machineBrain)
  machinescan()
  console.log(machineBrain)
  machineNo = parseFloat(prvClicksX[machineRef].substring(6)) //The ID number of the last clicked button

  function machineBrain1() {
    machineNox = machineNo + machine1x
    machineID = 'btn54x' + machineNox
    machineIDx = document.getElementById(machineID)

    for(imachine=1;imachinex<sqrt54x;imachine++){ // DISPLAY RIGHT - If there are already letters in the next right button
      if(machineNox>0 && machineNox<gridchange54) {
        if(machineIDx.innerHTML=='X' || machineIDx.innerHTML=='O') {

          /* ==== PHASE 1 ==== */

          if(machineBrain==1) { //HORIZONTAL RIGHT
            machine2x = machineNox + imachine
            machine3x = machine2x % sqrt54x == 1
          }
          if(machineBrain==2) { //HORIZONTAL LEFT
            machine2x = machineNox - imachine
            machine3x = machine2x % sqrt54x == 0
          }
          if(machineBrain==3) { //VERTICAL DOWN
            machine2x = machineNox + sqrt54x*imachine
            machine3x = machine2x > gridchange54
          }
          if(machineBrain==4) { //VERTICAL UP
            machine2x = machineNox - sqrt54x*imachine
            machine3x = machine2x < 1
          }
          if(machineBrain==5) { //DIAGONAL LEFT DOWN
            machine2x = machineNox + sqrt54x*imachine + imachine
            machine3x = machine2x > gridchange54
          }
          if(machineBrain==6) { //DIAGONAL LEFT UP
            machine2x = machineNox - (sqrt54x*imachine + imachine)
            machine3x = machine2x < 1
          }
          if(machineBrain==7) { //DIAGONAL RIGHT DOWN
            machine2x = machineNox + sqrt54x*imachine - imachine
            machine3x = machine2x > gridchange54 || machine2x % sqrt54x == 0
          }
          if(machineBrain==8) { //DIAGONAL RIGHT UP
            machine2x = machineNox - (sqrt54x*imachine - imachine)
            machine3x = machine2x < 1 || machine2x % sqrt54x == 1
          }

          machineID = 'btn54x' + (machine2x)
          machineIDx = document.getElementById(machineID)

          if(machine3x){ /* ==== PHASE 2 ==== */
            machineRightx()
          }
        } else { /* ==== PHASE 0 ==== */
          break
        }
      } else {break}
    }
    if(machine4x) { /* ==== PHASE 3 ==== */
      machineRightx()
    }

    function machineRightx() {
      for(imachinex=1;imachinex<sqrt54x;imachinex++) { /* ==== PHASE 4 - Pronounced as: I Machine X ==== */

        if(machineBrain==1) { //HORIZONTAL RIGHT
          machine5x = -imachinex
        }
        if(machineBrain==2) { //HORIZONTAL LEFT
          machine5x = imachinex
        }
        if(machineBrain==3) { //VERTICAL DOWN
          machine5x = -sqrt54x * imachinex
        }
        if(machineBrain==4) { //VERTICAL UP
          machine5x = (imachinex*sqrt54x)
        }
        if(machineBrain==5) { //DIAGONAL LEFT DOWN
          machine5x =  -1 *(imachinex*sqrt54x + imachinex)
        }
        if(machineBrain==6) { //DIAGONAL LEFT UP
          machine5x =  (imachinex*sqrt54x + imachinex)
        }
        if(machineBrain==7) { //DIAGONAL RIGHT DOWN
          machine5x =  -1 *(imachinex*sqrt54x - imachinex)
        }
        if(machineBrain==8) { //DIAGONAL RIGHT UP
          machine5x =  (imachinex*sqrt54x - imachinex)
        }

        /* ==== PHASE 4 ==== */
        machineNox = machineNo + machine5x
        machineID = 'btn54x' + machineNox // New button ID
        machineIDx = document.getElementById(machineID)
        if(machineIDx.innerHTML!=='X' && machineIDx.innerHTML!=='O') { // If the new button innerHTML is not X or O, then we'll accept that ID
          break; // And break the loop
        }
      }
    }
  }

  if(machineBrain==1) { //HORIZONTAL RIGHT
    machine1x = 1
    machine4x = machineNo%sqrt54x==0
  }

  if(machineBrain==2) { //HORIZONTAL LEFT
    machine1x = -1
    machine4x = machineNo%sqrt54x==1
  }

  if(machineBrain==3) { //VERTICAL DOWN
    machine1x = sqrt54x
    machine4x = machineNo+sqrt54x > gridchange54
  }

  if(machineBrain==4) { //VERTICAL UP
    machine1x = -sqrt54x
    machine4x = machineNo+machine1x < 1
  }

  if(machineBrain==5) { // DIAGONAL LEFT DOWN
    machine1x = sqrt54x + 1
    machine4x = machineNo + machine1x > gridchange54
  }
  if(machineBrain==6) { // DIAGONAL LEFT UP
    machine1x = -1 * (sqrt54x + 1)
    machine4x = machineNo + machine1x < 1
  }
  if(machineBrain==7) { // DIAGONAL RIGHT DOWN
    machine1x = sqrt54x - 1
    machine4x = machineNo + machine1x > gridchange54 || machineNo % sqrt54x == 1
  }
  if(machineBrain==8) { // DIAGONAL RIGHT UP
    machine1x = 1 - sqrt54x
    machine4x = machineNo + machine1x < 1 || machineNo % sqrt54x == 0
  }

  machineBrain1()
  machineIDx = document.getElementById(machineID)

  if(machineNox<1 || machineNox >gridchange54) { // This IF statement is like a security measure just in case something is wrong LOL
    machiney()
  } else {
    btn54click(machineIDx) // The function to display letters. This function is merely to determine 'HOW' to display automatically
    machineRef+=1 // The machinescan() function is to determine 'WHERE to display'
    machineTurn += 1 // Both functions work together
  }
}

function machinex() { // To automatically call the function machine(). In other words, this is for automatically displaying letters
  if(machineTurn%2==1) {
    machine()
  }
}

function machiney() { // This is just incase there are problems when the grid have maxed out. If that's the case, it will not display the button but it will retry and retry again till the button is displayed
  setTimeout(machine, 500) /* ==== PHASE 5 ==== */
}


function machinescan() { // Scan each buttons. Short for "ms"
  msglobalref=0, powerX = 0, powerO = 0, powerHole=0, jx=0;
  prvClicksXLength = prvClicksX.length
  msIDno = parseFloat(prvClicksX[prvClicksXLength-1].substring(6)) // The latest clicked X button 'btn54x81'

  function msglobal(param1, param2, param3, param4, param5, param6, param7) {
    powerX = 0, powerO = 0, powerHole=0;
    if(param1) {jx = 0} // can't run the loop with 0
    if(param2) {jx = 1} // 1 iteration
    if(param3) {jx=2} // 2 iteration
    if(param4) {jx=3} // 3 iteration
    if(param5) {jx=win54-1} // 4 iteration

    for(j=1; j<=jx; j++) {
      if(msglobalref==0) {skull = j} // HORIZONTAL RIGHT - search 4 units to the right
      if(msglobalref==1) {skull = -1*j} // HORIZONTAL LEFT- search 4 units to the left
      if(msglobalref==2) {skull = -(j*sqrt54x)} // VERTICAL UP - search 4 units above
      if(msglobalref==3) {skull = j*sqrt54x} // VERTICAL DOWN - search 4 units below
      if(msglobalref==4) {skull = -(j*sqrt54x) - j} // DIAGONAL LEFT UP - search 4 units diaonally left above
      if(msglobalref==5) {skull = (j*sqrt54x) + j} // DIAGONAL LEFT DOWN - search 4 units diagonally left below
      if(msglobalref==6) {skull = -(j*sqrt54x) + j; console.log(skull)} // DIAGONAL RIGHT UP - search 4 units diaonally right above
      if(msglobalref==7) {skull = (j*sqrt54x) - j} // DIAGONAL RIGHT DOWN - search 4 units diaonally right below
      msIDnox = msIDno + skull // forming new id number - 82
      msID = 'btn54x' + msIDnox // 'btn54x82'
      for(h=0; h<prvClicksXLength-1; h++){ // Checking all array elements if there is msID('btn54x82') as an array element's value
        if(prvClicksX[h]==msID) {
          powerX += 1
          break; // break the loop when it has confirmed that msID is inside the prvClicksX array
        }
      }
      if(powerX<j) { // If 'btn54x82' is not found in the prvClicksX array elements, then break the loop and stop searching because there is a hole next to 'btn54x81'
        if(document.getElementById(msID).innerHTML=='O') {
          powerO += 1 // If the button currently checking is 'O'
        }
        if(document.getElementById(msID).innerHTML=='&nbsp;') {
          powerHole += 1 // If the button currently checking is '&nbsp'
        }
      }
    }
    if(jx>=win54-2) {
      if(powerX>=2) { // HORIZONTAL RIGHT
        if(powerO==0) {
          machineBrain=param6 // RIGHT
        } else {
          machineBrain=param7 // LEFT
        }
      }
    }
    msglobalref +=1
  }

  // powerX can never get larger than 4. Since it started from 0, it can only increase 4 units.
  // If powerX is already 4 here, this means X already won the game using 1 of the 8 methods above.
  // so, we'll check the values of powerO and powerHole
  // If value of power O is bigger than or equal to 1, this means there is O blocking the pathway of X

  /* ===== HORIZONTAL RIGHT ===== */
  ms1 = msIDno%sqrt54x==0
  ms2 = msIDno%sqrt54x==sqrt54x-1
  ms3 = msIDno%sqrt54x==sqrt54x-2
  ms4 = msIDno%sqrt54x==sqrt54x-3
  ms5 = msIDno%sqrt54x<=sqrt54x-4
  msglobal(ms1, ms2, ms3, ms4, ms5, 1, 2)

  /* ===== HORIZONTAL LEFT ===== */
  ms1 = msIDno%sqrt54x==1
  ms2 = msIDno%sqrt54x==2
  ms3 = msIDno%sqrt54x==3
  ms4 = msIDno%sqrt54x==4
  ms5 = msIDno%sqrt54x>=5 || msIDno%sqrt54x==0
  msglobal(ms1, ms2, ms3, ms4, ms5, 2, 1)

  /* ===== VERTICAL UP ===== */
  ms1 = Math.ceil(msIDno/sqrt54x)==1
  ms2 = Math.ceil(msIDno/sqrt54x)==2
  ms3 = Math.ceil(msIDno/sqrt54x)==3
  ms4 = Math.ceil(msIDno/sqrt54x)==4
  ms5 = Math.ceil(msIDno/sqrt54x)>=5
  msglobal(ms1, ms2, ms3, ms4, ms5, 4, 3)

  /* ===== VERTICAL DOWN ===== */
  ms1 = Math.ceil(msIDno/sqrt54x)==sqrt54x
  ms2 = Math.ceil(msIDno/sqrt54x)==sqrt54x-1
  ms3 = Math.ceil(msIDno/sqrt54x)==sqrt54x-2
  ms4 = Math.ceil(msIDno/sqrt54x)==sqrt54x-3
  ms5 = Math.ceil(msIDno/sqrt54x)<=sqrt54x-4
  msglobal(ms1, ms2, ms3, ms4, ms5, 3, 4)

  /* ===== DIAGONAL LEFT UP ===== */
  ms1 = Math.ceil(msIDno/sqrt54x)>=1 && msIDno%sqrt54x>=1
  ms2 = Math.ceil(msIDno/sqrt54x)>=2 && msIDno%sqrt54x>=2
  ms3 = Math.ceil(msIDno/sqrt54x)>=3 && msIDno%sqrt54x>=3
  ms4 = Math.ceil(msIDno/sqrt54x)>=4 && msIDno%sqrt54x>=4
  ms5 = Math.ceil(msIDno/sqrt54x)>=5 && msIDno%sqrt54x>=5
  msglobal(ms1, ms2, ms3, ms4, ms5, 6, 5)

  /* ===== DIAGONAL LEFT DOWN ===== */
  ms1 = Math.ceil(msIDno/sqrt54x)<=sqrt54x && msIDno%sqrt54x<=0
  ms2 = Math.ceil(msIDno/sqrt54x)<=sqrt54x-1 && msIDno%sqrt54x<=sqrt54x-1
  ms3 = Math.ceil(msIDno/sqrt54x)<=sqrt54x-2 && msIDno%sqrt54x<=sqrt54x-2
  ms4 = Math.ceil(msIDno/sqrt54x)<=sqrt54x-3 && msIDno%sqrt54x<=sqrt54x-3
  ms5 = Math.ceil(msIDno/sqrt54x)<=sqrt54x-4 && msIDno%sqrt54x<=sqrt54x-4
  msglobal(ms1, ms2, ms3, ms4, ms5, 5, 6)

  /* ===== DIAGONAL RIGHT UP ===== */
  ms1 = Math.ceil(msIDno/sqrt54x)>=1 && msIDno%sqrt54x<=0
  ms2 = Math.ceil(msIDno/sqrt54x)>=2 && msIDno%sqrt54x<=sqrt54x-1
  ms3 = Math.ceil(msIDno/sqrt54x)>=3 && msIDno%sqrt54x<=sqrt54x-2
  ms4 = Math.ceil(msIDno/sqrt54x)>=4 && msIDno%sqrt54x<=sqrt54x-3
  ms5 = Math.ceil(msIDno/sqrt54x)>=5 && msIDno%sqrt54x<=sqrt54x-4
  msglobal(ms1, ms2, ms3, ms4, ms5, 8,7)

  /* ===== DIAGONAL RIGHT DOWN ===== */
  ms1 = Math.ceil(msIDno/sqrt54x)<=sqrt54x && msIDno%sqrt54x>=1
  ms2 = Math.ceil(msIDno/sqrt54x)<=sqrt54x-1 && msIDno%sqrt54x>=2
  ms3 = Math.ceil(msIDno/sqrt54x)<=sqrt54x-2 && msIDno%sqrt54x>=3
  ms4 = Math.ceil(msIDno/sqrt54x)<=sqrt54x-3 && msIDno%sqrt54x>=4
  ms5 = Math.ceil(msIDno/sqrt54x)<=sqrt54x-4 && msIDno%sqrt54x>=5
  msglobal(ms1, ms2, ms3, ms4, ms5, 7, 8)



/* ==== A way to check if anything is wrong - using console log ==== */
/*  msconsole1 = 'Power X - ' + powerX
  msconsole2 = 'Power O - ' + powerO
  msconsole3 = 'PowerHole - ' + powerHole
  console.log(msconsole1)
  console.log(msconsole2)
  console.log(msconsole3) */
}

console.log('\n\nI started working on this project again on Wednesday Night 03-Feb-2021.\n\nA few things I added to this project are:\n\n1. Make it responsive on Mobile Devices and Tablets. It looked and worked better on all devices now.\n\n2. Re-designing the concepts of some functions to make the loading speed faster.\n\n3. Display a PopUp Modal eveyrtime someone wins (It\'s disabled for now because it doesn\'t look that good and it\'s not neccesary).\n\n4. Undo and Redo buttons. I planned to add FontAwesome Icons to these buttons instead but the min.css file size of FontAwesome was too big which delayed the loading speed.')

console.log('\n\nI finished the defense strategy of player 1 mode - Mon Feb 08 2021 13:51:50 GMT+0700 (Indochina Time).\n\nThe defense is still quite weak but this is how much I\'ll do for now.\n\nPlus, 1 Player Mode only works for Game of 5, so don\'t try changing it to other games.\n\nFor the attack strategy, I\'ll keep it for future me who\'ll be smarter and more experienced to code.\n\n10spr')
